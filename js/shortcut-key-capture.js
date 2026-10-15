/*
 * Nhóm "Phím tắt Action": chọn 1 Action → bấm nút ⌨ → ấn phím → phím đó Play Action đã chọn.
 *
 * Action của Photoshop chỉ nhận F2–F12, có thể kèm Shift và/hoặc Ctrl (Cmd trên macOS), nên phím
 * khác bị từ chối kèm lời nhắc; Backspace/Delete xoá phím của Action đang chọn. Trong lúc nghe,
 * panel xin CEP chuyển các phím đó cho panel (registerKeyEventsInterest) để Photoshop không
 * nuốt mất (vd F5 mở Brush Settings).
 *
 * Danh sách phím lưu ở localStorage; mỗi lần đổi, toàn bộ danh sách được dựng lại thành bộ
 * Action "MHK DR7" bởi jsx/action-shortcut-setup.jsx (qua window.dr7SetupShortcut, js/panel.js).
 */
(function () {
    'use strict';

    var BINDINGS_KEY = 'dr7ActionShortcuts';            // [{ key, set, action }]
    var TARGET_KEY = 'dr7ShortcutTarget';               // "set\taction" đang chọn
    var LEGACY_KEY = 'dr7ShortcutKey';                   // bản cũ: 1 phím cho Pen Pressure, chỉ để xoá
    var OWN_SET = 'MHK DR7';                             // bộ Action panel tự dựng (jsx/action-shortcut-setup.jsx)
    var KEY_BACKSPACE = 8, KEY_ESCAPE = 27, KEY_DELETE = 46;
    var KEY_F2 = 113, KEY_F12 = 123;                    // mã phím ảo: F1 = 112

    var cs = new CSInterface();
    var button = null, picker = null;
    var listening = false;

    function load(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            console.warn('DR7: không đọc được ' + key, e);
            return null;
        }
    }

    function save(key, value) {
        try {
            if (value === null) localStorage.removeItem(key);
            else localStorage.setItem(key, value);
        } catch (e) {
            console.warn('DR7: không lưu được ' + key, e);
        }
    }

    function bindings() {
        var list = [];
        try {
            list = JSON.parse(load(BINDINGS_KEY) || '[]');
        } catch (e) {
            console.warn('DR7: danh sách phím tắt hỏng, bỏ qua', e);
        }
        // Bộ "MHK DR7" do panel tự dựng (Action ▶) nên không thể là đích; bản cũ từng gán Pen Pressure ở đó
        return list.filter(function (b) { return b && b.set !== OWN_SET; });
    }

    function target() {
        if (!picker || !picker.value) return null;
        var parts = picker.value.split('\t');
        return { set: parts[0], action: parts[1] };
    }

    function bindingFor(t) {
        if (!t) return null;
        var list = bindings();
        for (var i = 0; i < list.length; i += 1) {
            if (list[i].set === t.set && list[i].action === t.action) return list[i];
        }
        return null;
    }

    function showKey(hint) {
        var bound = bindingFor(target());
        button.textContent = hint || (bound ? '⌨ Phím tắt: ' + bound.key : '⌨ Gán phím tắt');
        button.classList.toggle('listening', listening);
    }

    // Danh sách Action theo bộ (optgroup); Action đã có phím ghi kèm phím
    function renderPicker(lines) {
        var keep = picker.value || load(TARGET_KEY) || '';
        var list = bindings();
        picker.textContent = '';
        var group = null;
        lines.split('\n').forEach(function (line) {
            var parts = line.split('\t');
            if (parts.length !== 2) return;
            if (!group || group.label !== parts[0]) {
                group = document.createElement('optgroup');
                group.label = parts[0];
                picker.appendChild(group);
            }
            var option = document.createElement('option');
            option.value = line;
            option.textContent = parts[1];
            list.forEach(function (b) {
                if (b.set === parts[0] && b.action === parts[1]) option.textContent += '  —  ' + b.key;
            });
            group.appendChild(option);
        });
        picker.value = keep;
        if (!picker.value && picker.options.length) picker.selectedIndex = 0;
        showKey();
    }

    function refreshActions() {
        if (listening) return;
        cs.evalScript('typeof $.dr7ShortcutSetup=="object"?$.dr7ShortcutSetup.listActions():"DR7_MISSING"', function (res) {
            if (res === 'DR7_MISSING' || /^EvalScript error/.test(res)) {
                console.warn('DR7: không đọc được danh sách Action', res);
                return;
            }
            renderPicker(res);
            cleanupLegacy();
        });
    }

    // Bản cũ gán phím cho MHK DR7 › Pen Pressure: dựng lại bộ Action không còn phím đó (1 lần mỗi
    // lần mở panel; chạy sau listActions nên lõi ExtendScript chắc chắn đã nạp xong)
    var cleanupTried = false;
    function cleanupLegacy() {
        if (cleanupTried) return;
        cleanupTried = true;
        var raw = load(BINDINGS_KEY) || '';
        if (load(LEGACY_KEY) === null && raw.indexOf('"set":"' + OWN_SET + '"') < 0) return;
        apply(bindings(), null);
    }

    // Xin CEP giao F2–F12 (mọi tổ hợp Shift/Ctrl), Esc, Backspace, Delete cho panel trong lúc nghe
    function setKeyInterest(on) {
        var keys = [];
        if (on) {
            [KEY_ESCAPE, KEY_BACKSPACE, KEY_DELETE].forEach(function (code) { keys.push({ keyCode: code }); });
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

    // Dựng lại bộ "MHK DR7" với danh sách mới; chỉ lưu khi Photoshop nạp thành công
    function apply(next, label) {
        stop(label);
        var text = next.map(function (b) { return b.key + '\t' + b.set + '\t' + b.action; }).join('\n');
        window.dr7SetupShortcut(text, function (res) {
            if (res === 'DR7_OK') {
                save(BINDINGS_KEY, JSON.stringify(next));
                save(LEGACY_KEY, null);
            }
            refreshActions();
        });
    }

    function onKeyDown(event) {
        event.preventDefault();
        event.stopPropagation();
        var code = event.keyCode;
        var t = target();
        if (code === KEY_ESCAPE || event.key === 'Escape') { stop(); return; }
        var others = bindings().filter(function (b) { return !(b.set === t.set && b.action === t.action); });
        if (code === KEY_BACKSPACE || code === KEY_DELETE) {
            apply(others, 'Đang xoá phím…');
            return;
        }
        if (code < KEY_F2 || code > KEY_F12) {
            if (/^(Shift|Control|Meta|Alt)$/.test(event.key)) return;   // đang giữ phím bổ trợ
            showKey('Chỉ nhận F2–F12 (+Shift/Ctrl)…');
            return;
        }
        if (event.altKey) { showKey('Không hỗ trợ Alt, ấn lại…'); return; }
        var key = (event.ctrlKey || event.metaKey ? 'Ctrl+' : '') + (event.shiftKey ? 'Shift+' : '') +
            'F' + (code - KEY_F2 + 2);
        // 1 phím chỉ Play 1 Action: gán phím đã dùng cho Action khác thì lấy lại phím đó
        var next = others.filter(function (b) { return b.key !== key; });
        next.push({ key: key, set: t.set, action: t.action });
        apply(next, 'Đang gán ' + key + '…');
    }

    function start() {
        if (listening) { stop(); return; }                  // bấm lần nữa = huỷ
        if (!target()) { showKey('Chưa có Action để gán'); return; }
        if (window.dr7IsBusy && window.dr7IsBusy()) return;
        listening = true;
        setKeyInterest(true);
        document.addEventListener('keydown', onKeyDown, true);
        window.addEventListener('blur', onBlur);
        showKey('Ấn F2–F12 (+Shift/Ctrl) · Esc huỷ · ⌫ xoá');
    }

    window.dr7InitShortcutCapture = function () {
        button = document.querySelector('.shortcut-capture');
        picker = document.querySelector('.shortcut-action');
        if (!button || !picker) return;
        button.addEventListener('click', start);
        picker.addEventListener('change', function () { save(TARGET_KEY, picker.value); showKey(); });
        window.addEventListener('focus', refreshActions);       // quay lại panel → bắt Action mới tạo trong Photoshop
        refreshActions();
    };
    window.dr7RefreshActions = refreshActions;               // sau khi nạp thêm bộ Action (js/panel.js)
}());
