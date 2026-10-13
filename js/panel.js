/* DR7 bridge: explicit command namespace, loader readiness, host error details. */
(function () {
    'use strict';

    var cs = new CSInterface();
    var ready = false;
    var busy = false;
    window.dr7IsBusy = function () { return busy; };
    window.dr7Reload = function () {
        if (busy) return false;
        window.location.reload(true);
        return true;
    };

    // Bundled preset file names: plain characters only, so a name can never
    // climb out of /presets or break out of the generated JS string.
    var PRESET_FILE = /^[A-Za-z0-9 _()-]+(\.[A-Za-z0-9 _()-]+)*\.xmp$/i;

    function run(kind, name) {
        if (kind === 'preset' ? !PRESET_FILE.test(name) : !/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) return;
        if (!ready) {
            alert('Lõi Photoshop chưa sẵn sàng. Hãy đóng và mở lại panel.');
            return;
        }
        if (busy) return;
        busy = true;
        var target = kind === 'doa' ? '$.dr7Commands[' + JSON.stringify(name) + ']' :
            kind === 'preset' ? '$.dr7ApplyBundledXmp' : '$._ext_' + name + '.run';
        var args = kind === 'preset' ? JSON.stringify(name) : '';
        // Only WM (its own batch dialog) and BUGFIX run without an open image;
        // BA processes every open document, so it needs at least one.
        var code = '(function(){var d=app.displayDialogs,u=app.preferences.rulerUnits;' +
            'try{' + (!/^(WM|BUGFIX)$/.test(name) ?
                'if(!app.documents.length)return "DR7_NO_DOCUMENT";' : '') +
            'if(typeof ' + target + '!=="function")throw new Error("Missing command: ' + name + '");' +
            target + '(' + args + ');return "DR7_OK";}catch(e){if(e.number===8007)return "DR7_CANCEL";' +
            'return "DR7_ERROR: "+e+"\\nFile: "+e.fileName+"\\nLine: "+e.line;}' +
            'finally{app.displayDialogs=d;app.preferences.rulerUnits=u;}}())';
        try {
            cs.evalScript(code, function (res) {
                busy = false;
                if (res === 'DR7_NO_DOCUMENT') {
                    alert('Hãy mở ảnh trong Photoshop trước khi chạy lệnh.');
                    return;
                }
                if (res !== 'DR7_OK' && res !== 'DR7_CANCEL') {
                    alert('Photoshop — ' + name + ':\n' + res);
                }
            });
        } catch (e) {
            busy = false;
            alert('Không kết nối được Photoshop:\n' + e);
        }
    }

    // --- API cho index.html ---
    window.doa = function (name) { run('doa', name); };
    window.onClickButton = function (name) { run('ext', name); };
    window.dr7ApplyPreset = function (fileName) { run('preset', fileName); };

    // One button per .xmp dropped into /presets, labelled with the file name.
    function renderPresets() {
        var grid = document.querySelector('.preset-grid');
        if (!grid || !window.cep || !window.cep.fs || !base) return;
        var listing = window.cep.fs.readdir(base + '/presets');
        if (listing.err) return;
        listing.data.filter(function (file) { return PRESET_FILE.test(file); }).sort().forEach(function (file) {
            var button = document.createElement('button');
            var label = file.replace(/\.xmp$/i, '');
            button.className = 'ba-preset';
            button.title = 'Áp nhanh preset ' + label;
            button.textContent = label;
            button.onclick = function () { window.dr7ApplyPreset(file); };
            grid.appendChild(button);
        });
    }

    // Manifest size is only a default; Photoshop may remember an older, taller panel.
    function fitHeight() {
        if (!window.__adobe_cep__) return;
        var panel = document.querySelector('.panel');
        if (!panel) return;
        var height = Math.ceil(panel.getBoundingClientRect().bottom + window.pageYOffset);
        cs.resizeContent(document.documentElement.clientWidth, height);
    }

    // --- Cập nhật từ GitHub Release (logic trong js/github-updater.js) ---
    var release = null;
    function status(text, isError) {
        var box = document.querySelector('.panel-status');
        if (!box) return;
        box.textContent = text || '';
        box.hidden = !text;
        box.className = 'panel-status' + (isError ? ' is-error' : '');
        fitHeight();
    }
    function showRelease(result) {
        release = result;
        var label = document.querySelector('.panel-version');
        var button = document.querySelector('.update-button');
        if (label) label.textContent = result.current ? 'v' + result.current.replace(/^v/, '') : '';
        if (!button) return;
        button.classList.toggle('has-update', result.available);
        button.title = result.available ? 'Có bản mới ' + result.latest.tag + ' — bấm để cập nhật' :
            'Kiểm tra cập nhật từ GitHub';
    }
    function checkRelease() {
        return window.dr7Updater.check(base).then(function (result) { showRelease(result); return result; });
    }
    window.dr7Update = function () {
        var button = document.querySelector('.update-button');
        if (busy || !window.dr7Updater || !base) return;
        busy = true;
        if (button) { button.disabled = true; button.classList.add('working'); }
        status('Đang kiểm tra bản mới...');
        function finish() { busy = false; if (button) { button.disabled = false; button.classList.remove('working'); } }
        checkRelease().then(function (result) {
            if (!result.latest) { status('Chưa có bản phát hành nào trên GitHub.'); return null; }
            if (!result.available) { status('Đang dùng bản mới nhất (' + result.latest.tag + ').'); return null; }
            var notes = result.latest.notes ? '\n\n' + result.latest.notes.slice(0, 600) : '';
            if (!window.confirm('Cập nhật MHK DR7 lên ' + result.latest.tag + '?' + notes)) { status(''); return null; }
            return window.dr7Updater.update(base, result.latest.tag, function (done, total) {
                status('Đang tải ' + done + '/' + total + ' file...');
            }).then(function (installed) {
                if (installed.restart) {
                    status('Đã cập nhật ' + result.latest.tag + '. Hãy khởi động lại Photoshop để áp dụng.');
                    return 'restart';
                }
                return 'reload';
            });
        }).then(function (next) {
            finish();
            if (next === 'reload') window.dr7Reload();
        }, function (error) {
            finish();
            status('Cập nhật thất bại: ' + (error && error.message || error), true);
        });
    };

    window.onLoaded = function () {
        renderPresets();
        fitHeight();
        // Silent check: an offline panel simply shows no badge.
        if (window.dr7Updater && base && window.cep) {
            showRelease({ current: window.dr7Updater.installedVersion(base), latest: null, available: false });
            checkRelease().catch(function (error) { window.console.warn('DR7 update check:', error); });
        }
    };

    // ------------------------------------------------------------
    // Nạp lõi ExtendScript với đường dẫn lấy từ CEP (KHÔNG suy từ $.fileName).
    // The loader callback confirms readiness before accepting button clicks.
    // ------------------------------------------------------------
    function extensionDir() {
        var p = '';
        try { p = cs.getSystemPath(SystemPath.EXTENSION) || ''; } catch (e) { }
        if (!p) {
            // dự phòng: lấy từ URL của panel và BỎ tên file (index.html)
            try { p = decodeURIComponent(window.location.pathname || '').replace(/\/[^/]*$/, ''); } catch (e) { }
        }
        return String(p).replace(/\\/g, '/').replace(/^file:\/\/\//i, '').replace(/^\/([A-Za-z]:)/, '$1').replace(/\/+$/, '');
    }

    var base = extensionDir();
    window.dr7Base = base;                                  // tiện kiểm tra trong console
    if (!base) {
        alert('MHK DR7: không xác định được thư mục panel.\nHãy cài lại bằng install/Cai-dat-DR7.bat');
    } else {
        cs.evalScript('try{$.dr7Base = ' + JSON.stringify(base) + '; $.evalFile($.dr7Base + "/loader.jsx");' +
            '$.dr7Ready ? "DR7_READY" : $.dr7LoadErrors.join("\\n");}catch(e){"DR7_ERROR: "+e+" line "+e.line;}', function (res) {
            ready = res === 'DR7_READY';
            if (!ready) {
                alert('MHK DR7 — không nạp được lõi ExtendScript:\n' + res + '\n\nThư mục panel:\n' + base);
                return;
            }
            // ScriptUI dialogs opened from a CEP panel (Làm Da, Hàng loạt, Tuỳ chỉnh, Chữ/Logo)
            // can hang Photoshop on Windows until this workaround runs. It used to be fired from
            // body onload, which always lands before this async callback and was silently dropped.
            run('ext', 'BUGFIX');
        });
    }
}());
