// Run: node tests/check-script-stability.js
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const html = read('index.html');
const manifest = read('CSXS/manifest.xml');
assert.match(manifest, /<Menu>MHK DR7<\/Menu>/);
assert.match(manifest, /<Size><Height>580<\/Height><Width>235<\/Width><\/Size>/);
assert.equal((manifest.match(/\.\/img\/icon-large\.png/g) || []).length, 2);
const names = [...new Set([...html.matchAll(/doa\('([^']+)'\)/g)].map(m => m[1]))];
const main = read('jsx/main.jsx');
const registered = main.slice(main.lastIndexOf('$.dr7Commands ='));
const replacements = read('jsx/mhk-replacements.jsx');
const presetLut = read('jsx/preset-lut.jsx');
for (const name of names) {
    assert.ok(new RegExp('\\b' + name + ': ' + name + '\\b').test(registered) ||
        new RegExp('\\b' + name + ': function').test(replacements) ||
        new RegExp('\\b' + name + ': ' + name + '\\b').test(presetLut), name + ' must be registered');
}
assert.doesNotMatch(presetLut, /CrVe/, 'preset-lut must not hardcode ACR version CrVe to prevent Unsupported Edits popup');
// Execute the real module against a stub host so the ACR payload builder is
// exercised, not its source text. A preset exported by a newer Camera Raw must
// reach the filter without a version claim, else ACR raises Unsupported Edits.
const acrHost = { $: {}, app: { documents: [] }, charIDToTypeID: (k) => k, stringIDToTypeID: (k) => k,
    DialogModes: { NO: 2, ALL: 1 }, Error, decodeURI, String, RegExp, JSON };
acrHost.window = acrHost;
vm.runInNewContext(presetLut, acrHost);
assert.equal(typeof acrHost.$.dr7SanitizeAcrXmp, 'function', 'payload sanitizer must be exported');
const future = '<?xml?> <rdf:Description xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" '
    + 'crs:Version="15.0" crs:Exposure2012="+0.50"><crs:CameraProfile>Embedded</crs:CameraProfile></rdf:Description>';
const cleaned = acrHost.$.dr7SanitizeAcrXmp(future);
assert.doesNotMatch(cleaned, /crs:Version/, 'a future ACR version claim must be stripped before the filter runs');
assert.match(cleaned, /crs:Exposure2012="\+0\.50"/, 'sanitizing must keep the actual preset settings');
assert.match(cleaned, /crs:HasSettings="True"/, 'settings blob must be marked as settings for Camera Raw');
assert.equal((acrHost.$.dr7SanitizeAcrXmp(future).match(/crs:HasSettings/g) || []).length, 1,
    'an existing HasSettings flag must not be duplicated');
const sidecar = acrHost.$.dr7SanitizeAcrXmp(read('presets/MHK05451.xmp'));
assert.doesNotMatch(sidecar, /crs:(Temperature|Tint)=/, 'raw-only Kelvin white balance must not reach the filter');
assert.match(sidecar, /crs:WhiteBalance="Auto"/, 'white balance mode must be kept');
assert.match(sidecar, /crs:HueAdjustmentOrange="\+12"/, 'colour settings must be kept');
const relative = acrHost.$.dr7SanitizeAcrXmp('<x crs:Temperature="+20" crs:Tint="-5" xmlns:crs="c"/>');
assert.match(relative, /crs:Temperature="\+20" crs:Tint="-5"/, 'filter-range white balance must be kept');
assert.doesNotMatch(main, /\$\._ext\s*=/, 'main must not overwrite loader error handling');
for (const entry of fs.readdirSync(path.join(root, 'jsx'), { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    const source = read('jsx/' + entry.name);
    new vm.Script(source, { filename: entry.name });
    assert.doesNotMatch(source, /typeof\$|new File\(\$\.fileName\)/);
    assert.doesNotMatch(source, /[^\x00-\x7f]/, 'ExtendScript source must remain ASCII');
}
for (const name of ['DnB_Brush.tpl', 'DS4_Soft_Brush.tpl', 'dsPickColor.png',
    'dsSelection.png', 'dsTransform.png', 'eyesSelection.png', 'localSmoother.png',
    'maskSamplers.png', 'removerDialog.png', 'removerSelection.png']) {
    assert.ok(fs.statSync(path.join(root, 'jsx/pj', name)).size > 0);
}
for (const [name, expected] of [['DnB_Brush.tpl', 'DR7 Dodge & Burn'], ['DS4_Soft_Brush.tpl', 'DR7 Soft Brush']]) {
    const binary = fs.readFileSync(path.join(root, 'jsx/pj', name));
    assert.ok(binary.swap16().toString('utf16le').includes(expected), 'preset name must match script');
}
for (const name of ['CGYSB', 'MLXG', 'mcwl', 'sfb']) {
    assert.match(read('jsx/mhk-replacements.jsx'), new RegExp('\\b' + name + ': function'));
}
// Catch incomplete/wrong native exports, and validate each generated RGB tile record.
const pat = fs.readFileSync(path.join(root,'jsx/pj/mhk-patterns.pat'));
assert.equal(pat.toString('ascii',0,4),'8BPT');
assert.equal(pat.readUInt32BE(6),8);
let offset = 10;
for (const [index,name] of ['Grain','Weave','Coarse','Lines','Dots','Blossom','Lotus','Stars'].entries()) {
    assert.equal(pat.readUInt32BE(offset),1);
    assert.equal(pat.readUInt32BE(offset+4),3);
    offset += 12;
    const length=pat.readUInt32BE(offset); offset+=4;
    assert.equal(Buffer.from(pat.subarray(offset,offset+length*2)).swap16().toString('utf16le'),'MHK '+name+' v1\0');
    offset+=length*2;
    const idLength=pat[offset++];
    assert.equal(pat.toString('ascii',offset,offset+idLength),'7153d9a1-6e46-4cbc-a782-00000000000'+index);
    offset+=idLength;
    assert.equal(pat.readUInt32BE(offset),3);
    offset+=8+pat.readUInt32BE(offset+4);
}
assert.equal(offset,pat.length,'PAT records must consume the complete file');
// Exercise actual bridge-generated code; the transport is replaced, not the handler.
const calls = [], alerts = [];
const panel = { JSON, alert: message => alerts.push(message), SystemPath: { EXTENSION: 0 } };
panel.window = panel;
let reloads = 0;
panel.location = { reload: () => { reloads++; } };
panel.CSInterface = function () {
    this.getSystemPath = () => 'D:/DR7';
    this.evalScript = (code, callback) => calls.push({ code, callback });
};
vm.runInNewContext(read('js/panel.js'), panel);
panel.doa('GGXS');
assert.equal(calls.length, 1, 'must wait for loader callback');
calls[0].callback('DR7_READY');
let ran = 0;
const host = { app: { documents: [{}], displayDialogs: 1, preferences: { rulerUnits: 2 } }, $: { dr7Commands: {} } };
host.$.dr7Commands.GGXS = () => {
    ran++;
    host.app.displayDialogs = 9;
    host.app.preferences.rulerUnits = 8;
    throw Object.assign(new Error('test failure'), { line: 42, fileName: 'main.jsx' });
};
panel.doa('GGXS');
panel.doa('GGXS');
assert.equal(calls.length, 2, 'must not queue double clicks');
assert.equal(panel.dr7Reload(), false, 'reload must not interrupt a command');
assert.equal(reloads, 0);
const result = vm.runInNewContext(calls[1].code, host);
assert.equal(ran, 1);
assert.match(result, /test failure[\s\S]*main.jsx[\s\S]*42/);
assert.equal(host.app.displayDialogs, 1);
assert.equal(host.app.preferences.rulerUnits, 2);
calls[1].callback(result);
assert.equal(panel.dr7Reload(), true);
assert.equal(reloads, 1);
panel.doa('GGXS');
assert.equal(calls.length, 3, 'failure must release busy state');
host.app.documents = [];
assert.equal(vm.runInNewContext(calls[2].code, host), 'DR7_NO_DOCUMENT');
assert.equal(ran, 1, 'no document must not invoke handler');
calls[2].callback('DR7_NO_DOCUMENT');
// Preset buttons pass the bundled file name as a JS string literal; unsafe names never reach Photoshop.
for (const bad of ['../evil.xmp', 'a"b.xmp', 'a\b.xmp', 'notes.txt', '.xmp']) panel.dr7ApplyPreset(bad);
assert.equal(calls.length, 3, 'unsafe preset names must be rejected by the bridge');
panel.dr7ApplyPreset('MHK05451.xmp');
assert.equal(calls.length, 4, 'a valid bundled preset must be sent');
host.app.documents = [{}];
const applied = [];
host.$.dr7ApplyBundledXmp = name => { applied.push(name); };
assert.equal(vm.runInNewContext(calls[3].code, host), 'DR7_OK');
assert.deepEqual(applied, ['MHK05451.xmp']);
assert.throws(() => acrHost.$.dr7ApplyBundledXmp('../../secret.xmp'), /Invalid preset name/,
    'the host must re-check preset names before touching the file system');
console.log('PASS: ' + names.length + ' doa exports, JSX syntax/encoding/resources, bridge readiness/errors/preferences/double clicks/preset names');
