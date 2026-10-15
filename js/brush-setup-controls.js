/*
 * Nhóm Cọ vẽ: nút "Thiết lập cọ" (BPP) + "Về mặc định" (BPPRESET), xem jsx/brush-pen-pressure.jsx.
 *
 * Trạng thái lấy thẳng từ cọ hiện tại trong Photoshop ($._ext_BPP.state()), không lưu ở panel:
 *   - "setup"  : Shape Dynamics bật, mọi Control = Pen Pressure → Thiết lập cọ bị khoá, hiện Về mặc định
 *   - còn lại  : Thiết lập cọ bấm được, ẩn Về mặc định
 * Đọc lại khi mở panel, khi quay lại panel (focus) và sau mỗi lần bấm, vì đổi cọ/công cụ trong
 * Photoshop cũng làm đổi trạng thái.
 */
(function () {
    'use strict';

    var STATUS_MS = 3000;                               // thời gian hiện thông báo thành công

    var cs = new CSInterface();
    var grid = null, setupButton = null, resetButton = null;
    var statusTimer = 0;

    function render(state) {
        var done = state === 'setup';
        setupButton.disabled = done;
        setupButton.textContent = done ? '✓ Thiết lập cọ' : 'Thiết lập cọ';
        resetButton.hidden = !done;
        grid.classList.toggle('two-col', done);
        grid.classList.toggle('one-col', !done);
    }

    function refresh() {
        cs.evalScript('typeof $._ext_BPP=="object"?$._ext_BPP.state():"DR7_MISSING"', function (res) {
            if (!/^(setup|default|none)$/.test(res)) {
                console.warn('DR7: không đọc được trạng thái Brush', res);
                return;
            }
            render(res);
        });
    }

    // Thông báo ngắn ở dòng trạng thái dưới tiêu đề panel, tự ẩn nếu chưa bị thông báo khác thay
    function flash(text) {
        if (!window.dr7Status) return;
        window.dr7Status(text);
        clearTimeout(statusTimer);
        statusTimer = setTimeout(function () {
            var box = document.querySelector('.panel-status');
            if (box && box.textContent === text) window.dr7Status('');
        }, STATUS_MS);
    }

    function runCommand(name, successText) {
        window.dr7RunCommand(name, function (res) {
            if (res === 'DR7_OK') flash(successText);
            refresh();
        });
    }

    window.dr7InitBrushSetup = function () {
        setupButton = document.querySelector('.brush-setup-run');
        resetButton = document.querySelector('.brush-setup-reset');
        if (!setupButton || !resetButton) return;
        grid = setupButton.parentNode;
        setupButton.addEventListener('click', function () {
            runCommand('BPP', '✓ Đã thiết lập cọ: Shape Dynamics + Pen Pressure');
        });
        resetButton.addEventListener('click', function () {
            runCommand('BPPRESET', '✓ Đã trả cọ về mặc định');
        });
        window.addEventListener('focus', refresh);
        refresh();
    };
}());
