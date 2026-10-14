/*
 * One-click shortcut (F2-F12, optionally with Shift and/or Ctrl/Cmd) for the Pen Pressure command.
 *
 * Scripts cannot get keyboard shortcuts, but actions can have function keys. So we
 * generate an .atn file (set "MHK DR7" with one action that runs jsx/brush-pen-pressure.jsx,
 * key already assigned) and load it - instead of the user recording the action by hand.
 * .atn layout: Adobe Photoshop File Formats, "Actions file format".
 */
$.dr7ShortcutSetup = {
    SET_NAME: 'MHK DR7',
    ACTION_NAME: 'Pen Pressure',

    u8: function (n) { return String.fromCharCode(n & 255); },
    u16: function (n) { return String.fromCharCode((n >>> 8) & 255, n & 255); },
    u32: function (n) { return String.fromCharCode((n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255); },
    // Unicode string: length (including the terminator) + UTF-16BE chars + 0
    unicode: function (s) {
        var out = this.u32(s.length + 1);
        for (var i = 0; i < s.length; i += 1) out += this.u16(s.charCodeAt(i));
        return out + this.u16(0);
    },
    ascii: function (s) { return this.u32(s.length) + s; },

    // One action step = File > Scripts > Browse... on the script file
    scriptStep: function (scriptFile) {
        var desc = new ActionDescriptor();
        desc.putPath(charIDToTypeID('jsCt'), scriptFile);
        desc.putString(charIDToTypeID('jsMs'), 'undefined');
        return this.u8(0) + this.u8(1) + this.u8(0) + this.u8(0) +      // expanded, enabled, dialog, dialog options
            'TEXT' + this.ascii('AdobeScriptAutomation Scripts') + this.ascii('Scripts') +
            this.u32(0xFFFFFFFF) + desc.toStream().substring(4);       // toStream() starts with a 4-byte version
    },

    buildAtn: function (scriptFile, fKey, shift, ctrl) {
        var action = this.u16(fKey) + this.u8(shift ? 1 : 0) + this.u8(ctrl ? 1 : 0) + this.u16(0) +   // function key, Shift, Ctrl/Cmd, colour
            this.unicode(this.ACTION_NAME) + this.u8(0) + this.u32(1) + this.scriptStep(scriptFile);
        return this.u32(16) + this.unicode(this.SET_NAME) + this.u8(1) + this.u32(1) + action;
    },

    setExists: function () {
        for (var i = 1; ; i += 1) {
            var ref = new ActionReference();
            ref.putIndex(charIDToTypeID('ASet'), i);
            var desc;
            try {
                desc = executeActionGet(ref);
            } catch (e) {
                return false;                                   // past the last action set
            }
            if (desc.getString(charIDToTypeID('Nm  ')) === this.SET_NAME) return true;
        }
    },

    // Remove the previous set so reloading never leaves two "MHK DR7" sets
    deleteOldSet: function () {
        if (!this.setExists()) return;
        var ref = new ActionReference();
        ref.putName(charIDToTypeID('ASet'), this.SET_NAME);
        var desc = new ActionDescriptor();
        desc.putReference(charIDToTypeID('null'), ref);
        executeAction(charIDToTypeID('Dlt '), desc, DialogModes.NO);
    },

    // key: "[Ctrl+][Shift+]F2".."[Ctrl+][Shift+]F12" (built by js/shortcut-key-capture.js)
    install: function (key) {
        var self = $.dr7ShortcutSetup;
        var match = /^(Ctrl\+)?(Shift\+)?F([2-9]|1[0-2])$/.exec(String(key));
        if (!match) throw new Error('Ph\u00edm kh\u00f4ng h\u1ee3p l\u1ec7: ' + key);
        var script = new File($.dr7Base + '/jsx/brush-pen-pressure.jsx');
        if (!script.exists) throw new Error('Kh\u00f4ng th\u1ea5y ' + script.fsName);
        var atn = new File(Folder.temp + '/dr7-shortcut.atn');
        atn.encoding = 'BINARY';
        if (!atn.open('w')) throw new Error('Kh\u00f4ng ghi \u0111\u01b0\u1ee3c ' + atn.fsName);
        atn.write(self.buildAtn(script, parseInt(match[3], 10), !!match[2], !!match[1]));
        atn.close();
        self.deleteOldSet();
        app.load(atn);
        atn.remove();
    }
};
