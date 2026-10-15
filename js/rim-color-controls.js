/*
 * Hàng "Màu Rim Light" (trong nhóm Action): ô chọn màu + nút "Màu Rim Light" (lệnh RIMCOLOR, xem jsx/rim-light-color.jsx).
 *
 * Hàng chỉ hiện khi ảnh đang mở có nhóm "Rim Light" chứa lớp "Color" ($._ext_RIMCOLOR.available()); panel
 * hỏi lại khi quay lại panel và mỗi vài giây (Photoshop không báo khi đổi ảnh hay chạy Action).
 * Mặc định ô màu theo màu Foreground của Photoshop (đọc mỗi lần hàng hiện ra và mỗi lần quay lại panel);
 * khi người dùng tự chọn màu trong ô thì giữ màu đó (không bị Foreground ghi đè nữa) và nút đổi từ
 * "Màu Rim Light" thành "Áp dụng".
 */
(function () {
    'use strict';

    var POLL_MS = 2500;

    var cs = new CSInterface();
    var row = null, picker = null, applyButton = null;
    var customColor = false;
    var pending = false;                                // chưa nhận kết quả lần hỏi trước thì không hỏi thêm

    function syncForeground() {
        if (customColor || row.hidden) return;
        cs.evalScript('$._ext_RIMCOLOR.foreground()', function (res) {
            if (/^#[0-9a-f]{6}$/i.test(res)) picker.value = res;
            else console.warn('DR7: không đọc được màu Foreground', res);
        });
    }

    function refresh() {
        if (pending || (window.dr7IsBusy && window.dr7IsBusy())) return;
        pending = true;
        cs.evalScript('typeof $._ext_RIMCOLOR=="object"?$._ext_RIMCOLOR.available():"0"', function (res) {
            pending = false;
            var show = res === '1';
            if (row.hidden === !show) { syncForeground(); return; }
            row.hidden = !show;
            if (show) syncForeground();
            if (window.dr7FitHeight) window.dr7FitHeight();
        });
    }

    window.dr7InitRimColor = function () {
        row = document.querySelector('.rim-color-row');
        picker = document.querySelector('.rim-color-input');
        applyButton = document.querySelector('.rim-color-apply');
        if (!row || !picker || !applyButton) return;
        picker.addEventListener('input', function () {
            customColor = true;
            applyButton.textContent = 'Áp dụng';             // đã chọn màu riêng: nút thành "Áp dụng"
        });
        applyButton.addEventListener('click', function () {
            window.dr7RunCommand('RIMCOLOR', function () { refresh(); }, picker.value);
        });
        window.addEventListener('focus', refresh);
        setInterval(refresh, POLL_MS);
        refresh();
    };
}());
