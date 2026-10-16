// Run: node tests/check-artboard-layout.js
// Runs the real js/artboard-layout.js: preset data, stacking of several templates and the spec validator.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const window = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../js/artboard-layout.js'), 'utf8'), { window });
const ab = window.dr7Artboard;
// Objects built inside the vm context have another Object prototype; compare plain copies
const plain = (value) => JSON.parse(JSON.stringify(value));

// One square: a single 1080x1080 board at the origin
const square = ab.pick(['square']);
assert.deepEqual(plain(ab.layout(square, 40)), [{ name: 'Bài vuông', x: 0, y: 0, w: 1080, h: 1080 }]);

// Order follows the preset list, not the order of ids; every preset has a unique id
assert.deepEqual(plain(ab.pick(['story', 'square']).map(t => t.id)), ['square', 'story']);
const ids = ab.SECTIONS.flatMap(s => s.cards.map(c => c.id));
assert.equal(new Set(ids).size, ids.length);

// "1 ngang + 3 vuông" = 4 boards: wide on top, three squares below, gap between rows and columns
const wideSet = ab.pick(['set-1-wide-3-square'])[0];
assert.equal(ab.countBoards(wideSet), 4);
const boards = ab.layout([wideSet], 40);
assert.deepEqual(plain(boards.map(b => [b.x, b.y, b.w, b.h])), [[0, 0, 1200, 630], [0, 670, 1080, 1080], [1120, 670, 1080, 1080], [2240, 670, 1080, 1080]]);
assert.deepEqual(plain(boards.map(b => b.name)), ['1 ngang + 3 vuông 1', '1 ngang + 3 vuông 2', '1 ngang + 3 vuông 3', '1 ngang + 3 vuông 4']);

// Square + the 4-board set = 5 boards, the set sits one gap below the square
const mixed = ab.layout(ab.pick(['square', 'set-1-wide-3-square']), 40);
assert.equal(mixed.length, 5);
assert.equal(mixed[1].y, 1080 + 40);
assert.equal(mixed[0].y, 0);

const spec = (over) => Object.assign({ mode: 'new', name: 'SCCTLM_Social', gap: 40, background: 'white', guides: false, boards }, over);
assert.equal(ab.spec.test(spec()), true);
assert.equal(ab.spec.test(spec({ mode: 'other' })), false);
assert.equal(ab.spec.test(spec({ name: '' })), false);
assert.equal(ab.spec.test(spec({ name: 'a\nb' })), false);
assert.equal(ab.spec.test(spec({ gap: -1 })), false);
assert.equal(ab.spec.test(spec({ background: 'red' })), false);
assert.equal(ab.spec.test(spec({ guides: 'yes' })), false);
assert.equal(ab.spec.test(spec({ boards: [] })), false);
assert.equal(ab.spec.test(spec({ boards: [{ name: 'x', x: 0, y: 0, w: 0, h: 10 }] })), false);
assert.equal(ab.spec.test(spec({ boards: [{ name: 'x', x: 0, y: 0, w: 10.5, h: 10 }] })), false);
assert.equal(ab.spec.test(spec({ boards: [{ name: 'x', x: 0, y: 0, w: 99999, h: 10 }] })), false);
assert.equal(ab.spec.test(null), false);

console.log('artboard layout: OK');
