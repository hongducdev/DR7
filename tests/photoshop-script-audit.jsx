#target photoshop
// File > Scripts > Browse. Only disposable documents created here are modified.
(function () {
    var original = app.documents.length ? app.activeDocument : null;
    var dialogs = app.displayDialogs;
    var units = app.preferences.rulerUnits;
    var foreground = app.foregroundColor;
    var background = app.backgroundColor;
    var currentTool = app.currentTool;
    var scratch = null;
    var report = [];
    var originalAlert = $.global.alert;
    var notices = [];
    try {
        // Legacy handlers catch their own exceptions and alert; those must not count as PASS.
        $.global.alert = function (message) { notices.push(String(message)); };
        scratch = app.documents.add(128, 128, 72, 'DR7 audit - disposable', NewDocumentMode.RGB);
        $.dr7Base = File($.fileName).parent.parent.fsName.replace(/\\/g, '/');
        $.evalFile($.dr7Base + '/loader.jsx');
        if (!$.dr7Ready) throw new Error($.dr7LoadErrors.join('\n'));
        var htmlFile = File($.dr7Base + '/index.html');
        htmlFile.open('r');
        var html = htmlFile.read();
        htmlFile.close();
        var pattern = /(doa|onClickButton)\('([^']+)'\)/g;
        var match, seen = {}, count = 0;
        while ((match = pattern.exec(html))) {
            var key = match[1] + ':' + match[2];
            if (seen[key]) continue;
            seen[key] = true;
            var fn = match[1] === 'doa' ? $.dr7Commands[match[2]] : $['_ext_' + match[2]].run;
            if (typeof fn !== 'function') throw new Error('Missing: ' + key);
            count++;
        }
        report.push('PASS: ' + count + ' callable legacy panel commands; loader ready');
        scratch.close(SaveOptions.DONOTSAVECHANGES);
        scratch = null;
        // Explicit dialogs (GDP, DKACR, act_alx, zrsc) need manual interaction.
        report.push('INFO: new MHK effects tested separately in photoshop-replacements-audit.jsx');
        var commands = ['ZXHC', 'GGXS', 'TJSH', 'JMXS', 'TJYY', 'JSYY', 'FSJH', 'MBPF',
            'ZCZQ', 'HSXZ', 'JSXZ', 'xqfx', 'hbtc', 'act_spfz', 'QXFD', 'QXJS'];
        for (var n = 0; n < commands.length; n++) {
            scratch = app.documents.add(128, 128, 72, 'DR7 audit ' + commands[n], NewDocumentMode.RGB);
            scratch.activeLayer = scratch.activeLayer.duplicate();
            scratch.selection.select([[16, 16], [112, 16], [112, 112], [16, 112]]);
            try {
                notices = [];
                $.dr7Commands[commands[n]]();
                if (notices.length) throw new Error(notices.join('; '));
                report.push('PASS: ' + commands[n] + ', layers=' + scratch.layers.length);
            } catch (error) {
                report.push('FAIL: ' + commands[n] + ': ' + error + ' line=' + error.line);
            } finally {
                scratch.close(SaveOptions.DONOTSAVECHANGES);
                scratch = null;
            }
        }
        scratch = app.documents.add(128, 128, 72, 'DR7 audit tools', NewDocumentMode.RGB);
        var tools = ['BR', 'SP', 'HB', 'PA', 'CL', 'PC', 'ZO', 'SA', 'MA', 'LA', 'BTNFIT',
            'BTNDARK', 'BTNMID', 'BTNLIGHT', 'BTNPFSD2'];
        for (var t = 0; t < tools.length; t++) {
            try {
                notices = [];
                $['_ext_' + tools[t]].run();
                if (notices.length) throw new Error(notices.join('; '));
                report.push('PASS: tool ' + tools[t]);
            } catch (error) {
                report.push('FAIL: tool ' + tools[t] + ': ' + error + ' line=' + error.line);
            }
        }
    } catch (error) {
        report.push('FAIL: ' + error + ' line=' + error.line);
    } finally {
        $.global.alert = originalAlert;
        if (scratch) scratch.close(SaveOptions.DONOTSAVECHANGES);
        app.displayDialogs = dialogs;
        app.preferences.rulerUnits = units;
        app.foregroundColor = foreground;
        app.backgroundColor = background;
        if (currentTool) app.currentTool = currentTool;
        if (original) app.activeDocument = original;
    }
    return report.join('\n');
}());
