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
for (const name of names) assert.match(registered, new RegExp('\\b' + name + ': ' + name + '\\b'));
assert.doesNotMatch(main, /\$\._ext\s*=/, 'main must not overwrite loader error handling');
const materialSource = main.slice(main.indexOf('function zrsc()'), main.indexOf('function act_alx()'));
assert.doesNotMatch(materialSource, /~\/Desktop\//, 'material picker must not use author desktop path');
vm.runInNewContext(materialSource + '\nzrsc();', { File: { openDialog: () => null } });
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
for (const name of ['CGYSA', 'CGYSB', 'MLXG', 'zyb', 'ybgb', 'wlzq', 'mcwl', 'sf', 'sfb', 'hs', 'mh', 'als', 'zw']) {
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
panel.doa('GDP');
assert.equal(calls.length, 1, 'must wait for loader callback');
calls[0].callback('DR7_READY');
let ran = 0;
const host = { app: { documents: [{}], displayDialogs: 1, preferences: { rulerUnits: 2 } }, $: { dr7Commands: {} } };
host.$.dr7Commands.GDP = () => {
    ran++;
    host.app.displayDialogs = 9;
    host.app.preferences.rulerUnits = 8;
    throw Object.assign(new Error('test failure'), { line: 42, fileName: 'main.jsx' });
};
panel.doa('GDP');
panel.doa('GDP');
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
panel.doa('GDP');
assert.equal(calls.length, 3, 'failure must release busy state');
host.app.documents = [];
assert.equal(vm.runInNewContext(calls[2].code, host), 'DR7_NO_DOCUMENT');
assert.equal(ran, 1, 'no document must not invoke handler');
console.log('PASS: 33 exports, JSX syntax/encoding/resources, bridge readiness/errors/preferences/double clicks');
