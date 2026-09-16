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

    function run(kind, name) {
        if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) return;
        if (!ready) {
            if (name !== 'BUGFIX') alert('Lõi Photoshop chưa sẵn sàng. Hãy đóng và mở lại panel.');
            return;
        }
        if (busy) return;
        busy = true;
        var target = kind === 'doa' ? '$.dr7Commands[' + JSON.stringify(name) + ']' : '$._ext_' + name + '.run';
        var code = '(function(){var d=app.displayDialogs,u=app.preferences.rulerUnits;' +
            'try{' + (!/^(BA|WM|BUGFIX)$/.test(name) ?
                'if(!app.documents.length)return "DR7_NO_DOCUMENT";' : '') +
            'if(typeof ' + target + '!=="function")throw new Error("Missing command: ' + name + '");' +
            target + '();return "DR7_OK";}catch(e){if(e.number===8007)return "DR7_CANCEL";' +
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
    window.onClickButtzon = window.onClickButton;   // bản gốc gõ sai chính tả ở nút "Thu Phóng"
    window.onLoaded = function () {
        var rows = document.querySelectorAll('.row');
        if (!rows.length) return;
        var grid = document.createElement('div');
        grid.className = 'action-grid';
        rows[0].parentNode.insertBefore(grid, rows[0]);
        for (var i = 0; i < rows.length; i += 1) {
            var buttons = rows[i].querySelectorAll('button');
            for (var j = 0; j < buttons.length; j += 1) grid.appendChild(buttons[j]);
            if (rows[i].parentNode) rows[i].parentNode.removeChild(rows[i]);
        }
        // Manifest size is only a default; Photoshop may remember an older, taller panel.
        if (window.__adobe_cep__) {
            var height = Math.ceil(grid.getBoundingClientRect().bottom + window.pageYOffset + 6);
            cs.resizeContent(document.documentElement.clientWidth, height);
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
            }
        });
    }
}());
