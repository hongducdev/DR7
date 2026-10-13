// DR7: Apply Camera Raw Preset (.xmp) and 3D LUT (.cube, .3dl, .look)
(function () {
    var C = charIDToTypeID, S = stringIDToTypeID;

    function document() {
        if (!app.documents.length) throw new Error('Open an image first');
        var doc = app.activeDocument;
        if (doc.mode !== DocumentMode.RGB || doc.bitsPerChannel === BitsPerChannelType.THIRTYTWO) {
            throw new Error('Preset/LUT requires RGB 8-bit or 16-bit');
        }
        return doc;
    }

    // Duplicate or Stamp Visible layer to keep original image non-destructive
    function stamp(name) {
        var doc = document(), empty = doc.artLayers.add(), emptyId = empty.id;
        try {
            var desc = new ActionDescriptor();
            desc.putBoolean(C('Dplc'), true);
            executeAction(C('MrgV'), desc, DialogModes.NO);
            var layer = doc.activeLayer;
            for (var i = doc.artLayers.length - 1; i >= 0; i--) {
                if (doc.artLayers[i].id === emptyId && layer.id !== emptyId) {
                    doc.artLayers[i].remove();
                }
            }
            layer.name = name;
            return layer;
        } catch (error) {
            for (var j = doc.artLayers.length - 1; j >= 0; j--) {
                if (doc.artLayers[j].id === emptyId) doc.artLayers[j].remove();
            }
            throw error;
        }
    }

    // Copy .xmp preset to Camera Raw Settings directory for native ACR access
    function installXmpToCameraRaw(file) {
        try {
            var targetFolder = new Folder(Folder.userData.fsName + '/Adobe/CameraRaw/Settings/DR7 Presets');
            if (!targetFolder.exists) {
                targetFolder.create();
            }
            if (targetFolder.exists && file.exists) {
                var targetFile = new File(targetFolder.fsName + '/' + file.name);
                file.copy(targetFile);
            }
        } catch (e) {
            // Non-critical if permissions restricted
        }
    }

    // Camera Raw refuses settings whose crs:Version is newer than the installed
    // build ("Unsupported Edits / edited in a newer version of Camera Raw").
    // The blob handed to the filter is a transient input, never a stored file, so
    // dropping the version claim makes ACR read the settings with its own version.
    function sanitizeAcrXmp(xml) {
        var out = String(xml).replace(/\s*crs:Version\s*=\s*"[^"]*"/g, '');
        // A raw sidecar stores white balance in Kelvin (e.g. 7250); the filter only
        // understands a relative -100..+100 shift, so drop raw-only WB values.
        var kelvin = /crs:Temperature\s*=\s*"([^"]*)"/.exec(out);
        if (kelvin && Math.abs(parseFloat(kelvin[1])) > 100) {
            out = out.replace(/\s*crs:(Temperature|Tint)\s*=\s*"[^"]*"/g, '');
        }
        if (!/crs:HasSettings\s*=/.test(out)) {
            out = out.replace(/(xmlns:crs="[^"]*")/, '$1 crs:HasSettings="True"');
        }
        return out;
    }

    // Apply Camera Raw Preset (.xmp)
    function applyPresetXMP(fileOrPath, withDialog) {
        var doc = document();
        var file = null;

        if (fileOrPath instanceof File) {
            file = fileOrPath;
        } else if (typeof fileOrPath === 'string' && fileOrPath.length > 0) {
            file = new File(fileOrPath);
        }

        // Prompt user if no file provided, defaulting to preset directory
        if (!file || !file.exists) {
            var initialFolders = [
                'C:/Users/hongducdev/Downloads/Telegram Desktop',
                $.dr7Base + '/presets',
                Folder.userData.fsName + '/Adobe/CameraRaw/Settings/DR7 Presets',
                '~/Downloads'
            ];
            for (var k = 0; k < initialFolders.length; k++) {
                var folderCheck = new Folder(initialFolders[k]);
                if (folderCheck.exists) {
                    Folder.current = folderCheck;
                    break;
                }
            }
            file = File.openDialog('Chon Preset Camera Raw (.xmp)', 'Camera Raw Preset:*.xmp,All Files:*.*');
            if (!file) {
                var cancelError = new Error('User cancelled');
                cancelError.number = 8007;
                throw cancelError;
            }
        }

        if (!file.exists) {
            throw new Error('Preset file not found: ' + file.fsName);
        }

        var presetName = decodeURI(file.name).replace(/\.xmp$/i, '');

        file.open('r');
        file.encoding = 'UTF-8';
        var xmpPayload = file.read();
        file.close();

        if (!xmpPayload || xmpPayload.length === 0) {
            throw new Error('Preset file is empty: ' + file.fsName);
        }

        // 1. Install preset to Camera Raw Settings for native access
        installXmpToCameraRaw(file);

        // 2. The version claim is dropped so a preset exported by a newer Camera
        //    Raw never triggers the Unsupported Edits prompt on a local build.
        var acrPayload = sanitizeAcrXmp(xmpPayload);

        // 3. Stamp visible to a dedicated preset layer (non-destructive)
        var layer = stamp('Preset - ' + presetName);

        // 4. XMPp ("XMPParameters" in Camera Raw's scripting dictionary) carries
        //    the whole settings block, so the filter renders it without a dialog.
        function runAcr(mode) {
            var desc = new ActionDescriptor();
            desc.putString(C('CMod'), 'Filter');
            desc.putString(C('XMPp'), acrPayload);
            executeAction(S('Adobe Camera Raw Filter'), desc, mode);
        }

        try {
            runAcr(DialogModes.NO);
            return 'DR7_OK';
        } catch (errSilent) {
            if (withDialog === false) {
                try { layer.remove(); } catch (eClean) { }
                throw errSilent;
            }
            try {
                runAcr(DialogModes.ALL);
                return 'DR7_OK';
            } catch (errDialog) {
                try { layer.remove(); } catch (eRem) { }
                if (errDialog && (errDialog.number === 8007 ||
                    String(errDialog).toLowerCase().indexOf('cancel') !== -1)) {
                    var cErr = new Error('User cancelled');
                    cErr.number = 8007;
                    throw cErr;
                }
                throw errSilent;
            }
        }
    }

    // Apply 3D LUT (.cube, .3dl, .look, .csp) via Color Lookup Adjustment Layer
    function applyLUT(fileOrPath) {
        var doc = document();
        var file = null;

        if (fileOrPath instanceof File) {
            file = fileOrPath;
        } else if (typeof fileOrPath === 'string' && fileOrPath.length > 0) {
            file = new File(fileOrPath);
        }

        if (!file || !file.exists) {
            file = File.openDialog('Chon file 3D LUT (.cube, .3dl, .look)', '3D LUT:*.cube;*.3dl;*.look;*.csp,All Files:*.*');
            if (!file) {
                var cancelError = new Error('User cancelled');
                cancelError.number = 8007;
                throw cancelError;
            }
        }

        if (!file.exists) {
            throw new Error('LUT file not found: ' + file.fsName);
        }

        var lutName = decodeURI(file.name).replace(/\.(cube|3dl|look|csp)$/i, '');

        file.open('r');
        file.encoding = 'BINARY';
        var lutData = file.read();
        file.close();

        if (!lutData || lutData.length === 0) {
            throw new Error('LUT file is empty: ' + file.fsName);
        }

        // Create Color Lookup Adjustment Layer
        var descMake = new ActionDescriptor();
        var refMake = new ActionReference();
        refMake.putClass(C('AdjL'));
        descMake.putReference(C('null'), refMake);

        var descType = new ActionDescriptor();
        descType.putClass(C('Type'), S('colorLookup'));
        descMake.putObject(C('Usng'), C('AdjL'), descType);
        executeAction(C('Mk  '), descMake, DialogModes.NO);

        try {
            var descSet = new ActionDescriptor();
            var refSet = new ActionReference();
            refSet.putEnumerated(C('AdjL'), C('Ordn'), C('Trgt'));
            descSet.putReference(C('null'), refSet);

            var descLUT = new ActionDescriptor();
            descLUT.putEnumerated(S('lookupType'), S('colorLookupType'), S('3DLUT'));
            descLUT.putString(C('Nm  '), lutName);
            descLUT.putData(S('LUT3DFileData'), lutData);
            descLUT.putString(S('LUT3DFileName'), file.fsName);

            var ext = file.name.split('.').pop().toLowerCase();
            if (ext === 'cube') {
                descLUT.putEnumerated(S('LUTFormat'), S('LUTFormatType'), S('LUTFormatCUBE'));
            } else if (ext === '3dl') {
                descLUT.putEnumerated(S('LUTFormat'), S('LUTFormatType'), S('LUTFormat3DL'));
            } else if (ext === 'look') {
                descLUT.putEnumerated(S('LUTFormat'), S('LUTFormatType'), S('LUTFormatLOOK'));
            } else if (ext === 'csp') {
                descLUT.putEnumerated(S('LUTFormat'), S('LUTFormatType'), S('LUTFormatCSP'));
            }
        } catch (error) {
            try { doc.activeLayer.remove(); } catch (e) { }
            throw error;
        }
    }

function APPLY_PRESET_XMP(fileOrPath, withDialog) {
    return applyPresetXMP(fileOrPath, withDialog);
}
function APPLY_LUT(fileOrPath) {
    return applyLUT(fileOrPath);
}

    // One-click panel buttons: each applies a preset bundled in /presets silently.
    function quickPreset(fileName) {
        return function () {
            var file = new File($.dr7Base + '/presets/' + fileName);
            if (!file.exists) throw new Error('Missing bundled preset: ' + file.fsName);
            return applyPresetXMP(file, false);
        };
    }
    var XMP_MHK05451 = quickPreset('MHK05451.xmp');

    $.dr7Commands = $.dr7Commands || {};
    $.dr7Commands['APPLY_PRESET_XMP'] = APPLY_PRESET_XMP;
    $.dr7Commands['APPLY_LUT'] = APPLY_LUT;
    $.dr7Commands['XMP_MHK05451'] = XMP_MHK05451;

    $.presetLutCommands = {
        APPLY_PRESET_XMP: APPLY_PRESET_XMP,
        APPLY_LUT: APPLY_LUT,
        XMP_MHK05451: XMP_MHK05451
    };

    $.dr7ApplyPresetXMP = applyPresetXMP;
    $.dr7ApplyLUT = applyLUT;
    $.dr7SanitizeAcrXmp = sanitizeAcrXmp;
}());
