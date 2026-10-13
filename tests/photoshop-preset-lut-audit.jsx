#target photoshop
// Live audit: prove APPLY_PRESET_XMP and the XMP_MHK05451 quick button render
// their presets with no dialog after the full core (including 4.jsxbin) loads.
// Run through evalFile so $.fileName resolves to this file:
//   $ps = New-Object -ComObject Photoshop.Application
//   $ps.DoJavaScript('$.evalFile(new File("D:/DR7/tests/photoshop-preset-lut-audit.jsx"))', $null)
(function () {
    var original = app.documents.length ? app.activeDocument : null;
    var units = app.preferences.rulerUnits, dialogs = app.displayDialogs;
    var scratch = null, report = [];
    function hexes(doc) {
        var out = [];
        for (var i = 0; i < doc.colorSamplers.length; i++) out.push(doc.colorSamplers[i].color.rgb.hexValue);
        return out;
    }
    try {
        app.displayDialogs = DialogModes.NO;
        $.dr7Base = File($.fileName).parent.parent.fsName.replace(/\\/g, '/');
        $.evalFile($.dr7Base + '/loader.jsx');
        if (!$.dr7Ready) throw new Error($.dr7LoadErrors.join('\n'));
        report.push('PASS: core loaded');
        // A leaked global C from 4.jsxbin makes every Camera Raw Filter call fail.
        if (typeof $.global.C !== 'undefined') throw new Error('4.jsxbin global C still leaked');
        report.push('PASS: no leaked global C');

        if (typeof $.dr7ApplyPresetXMP !== 'function') throw new Error('Missing $.dr7ApplyPresetXMP');
        if (typeof $.dr7SanitizeAcrXmp !== 'function') throw new Error('Missing $.dr7SanitizeAcrXmp');
        report.push('PASS: APPLY_PRESET_XMP and sanitizer exported');

        var presetFile = new File($.dr7Base + '/presets/Fuji_ceremony.xmp');
        if (!presetFile.exists) throw new Error('Missing sample preset: ' + presetFile.fsName);

        scratch = app.documents.add(200, 200, 72, 'DR7 Preset Audit', NewDocumentMode.RGB);
        app.preferences.rulerUnits = Units.PIXELS;
        var colors = ['4a2f1d', '8fa3b1', 'd9c07a'];
        for (var i = 0; i < colors.length; i++) {
            var c = new SolidColor(); c.rgb.hexValue = colors[i];
            scratch.selection.select([[i * 66, 0], [i * 66 + 66, 0], [i * 66 + 66, 200], [i * 66, 200]]);
            scratch.selection.fill(c);
        }
        scratch.selection.deselect();
        scratch.colorSamplers.add([new UnitValue(30, 'px'), new UnitValue(100, 'px')]);
        scratch.colorSamplers.add([new UnitValue(100, 'px'), new UnitValue(100, 'px')]);
        scratch.colorSamplers.add([new UnitValue(170, 'px'), new UnitValue(100, 'px')]);
        var before = hexes(scratch), layersBefore = scratch.layers.length;

        // withDialog=false guarantees no Camera Raw window can open during the audit
        $.dr7ApplyPresetXMP(presetFile, false);
        var after = hexes(scratch);
        var changed = 0;
        for (var k = 0; k < before.length; k++) if (before[k] !== after[k]) changed++;

        if (scratch.layers.length <= layersBefore) throw new Error('No output layer');
        if (scratch.activeLayer.name !== 'Preset - Fuji_ceremony') {
            throw new Error('Unexpected layer name: ' + scratch.activeLayer.name);
        }
        report.push('PASS: preset rendered into "' + scratch.activeLayer.name + '"');
        report.push((changed > 0 ? 'PASS' : 'FAIL') + ': preset changed pixels (' + changed + '/' + before.length +
            ' samplers ' + before.join(',') + ' -> ' + after.join(',') + ')');
        if (changed === 0) throw new Error('Silent apply did not change any sampled pixel');


        // Quick button: the panel calls the registered command with no arguments.
        scratch.activeLayer.remove();
        var quickBefore = hexes(scratch), quickLayers = scratch.layers.length;
        $.dr7Commands.XMP_MHK05451();
        var quickAfter = hexes(scratch), quickChanged = 0;
        for (var q = 0; q < quickBefore.length; q++) if (quickBefore[q] !== quickAfter[q]) quickChanged++;
        if (scratch.layers.length <= quickLayers || scratch.activeLayer.name !== 'Preset - MHK05451') {
            throw new Error('Quick preset produced no "Preset - MHK05451" layer');
        }
        report.push((quickChanged > 0 ? 'PASS' : 'FAIL') + ': XMP_MHK05451 changed pixels (' + quickChanged + '/' +
            quickBefore.length + ' samplers ' + quickBefore.join(',') + ' -> ' + quickAfter.join(',') + ')');
        if (quickChanged === 0) throw new Error('Quick preset did not change any sampled pixel');
    } catch (error) {
        report.push('ERROR: ' + error + ' line=' + error.line);
    } finally {
        if (scratch) scratch.close(SaveOptions.DONOTSAVECHANGES);
        app.preferences.rulerUnits = units;
        app.displayDialogs = dialogs;
        if (original) app.activeDocument = original;
    }
    return report.join('\n');
}());
