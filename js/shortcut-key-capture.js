/*
 * Nút "Phím tắt" của nhóm Brush: bấm nút → ấn tổ hợp phím → gán ngay cho Pen Pressure.
 *
 * Action trong Photoshop chỉ nhận F2–F12, có thể kèm Shift và/hoặc Ctrl (Cmd trên macOS),
 * nên phím khác bị từ chối kèm lời nhắc. Trong lúc nghe, panel xin CEP chuyển các phím F
 * cho panel (registerKeyEventsInterest) để Photoshop không nuốt mất (vd F5 mở Brush Settings).
 * Gán phím thật do window.dr7SetupShortcut (js/panel.js) → jsx/action-shortcut-setup.jsx.
 */
(function () {
    'use strict';

    var STORAGE_KEY = 'dr7ShortcutKey';
    var KEY_ESCAPE = 27;
    var KEY_F2 = 113, KEY_F12 = 123;                    // mã phím ảo: F1 = 112

    var cs = new CSInterface();
    var button = null;
    var listening = false;

    function savedKey() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            console.warn('DR7: không đọc được phím tắt đã lưu', e);
            return null;
        }
    }

    function showKey(hint) {
        var key = savedKey();
        button.textContent = hint || (key ? '⌨ Phím tắt: ' + key : '⌨ Đặt phím tắt');
        button.classList.toggle('listening', listening);
    }

    // Xin CEP giao F2–F12 (mọi tổ hợp Shift/Ctrl) và Esc cho panel trong lúc nghe
    function setKeyInterest(on) {
        var keys = [];
        if (on) {
            keys.push({ keyCode: KEY_ESCAPE });
            for (var code = KEY_F2; code <= KEY_F12; code += 1) {
                [false, true].forEach(function (ctrl) {
                    [false, true].forEach(function (shift) {
                        keys.push({ keyCode: code, ctrlKey: ctrl, metaKey: ctrl, shiftKey: shift });
                    });
                });
            }
        }
        try {
            cs.registerKeyEventsInterest(JSON.stringify(keys));
        } catch (e) {
            console.warn('DR7: registerKeyEventsInterest lỗi', e);
        }
    }

    function stop(hint) {
        listening = false;
        document.removeEventListener('keydown', onKeyDown, true);
        window.removeEventListener('blur', onBlur);
        setKeyInterest(false);
        showKey(hint);
    }

    function onBlur() { stop(); }

    function onKeyDown(event) {
        event.preventDefault();
        event.stopPropagation();
        var code = event.keyCode;
        if (code === KEY_ESCAPE || event.key === 'Escape') { stop(); return; }
        if (code < KEY_F2 || code > KEY_F12) {
            if (/^(Shift|Control|Meta|Alt)$/.test(event.key)) return;   // đang giữ phím bổ trợ
            showKey('Chỉ nhận F2–F12 (+Shift/Ctrl)…');
            return;
        }
        if (event.altKey) { showKey('Không hỗ trợ Alt, ấn lại…'); return; }
        var key = (event.ctrlKey || event.metaKey ? 'Ctrl+' : '') + (event.shiftKey ? 'Shift+' : '') +
            'F' + (code - KEY_F2 + 2);
        stop('Đang gán ' + key + '…');
        window.dr7SetupShortcut(key, function (res) {
            if (res === 'DR7_OK') {
                try {
                    localStorage.setItem(STORAGE_KEY, key);
                } catch (e) {
                    console.warn('DR7: không lưu được phím tắt', e);
                }
            }
            showKey();
        });
    }

    function start() {
        if (listening) { stop(); return; }                  // bấm lần nữa = huỷ
        if (window.dr7IsBusy && window.dr7IsBusy()) return;
        listening = true;
        setKeyInterest(true);
        document.addEventListener('keydown', onKeyDown, true);
        window.addEventListener('blur', onBlur);
        showKey('Ấn F2–F12 (+Shift/Ctrl) · Esc huỷ');
    }

    window.dr7InitShortcutCapture = function () {
        button = document.querySelector('.shortcut-capture');
        if (!button) return;
        button.addEventListener('click', start);
        showKey();
    };
}());
