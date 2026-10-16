/*
 * Tab Artboard - dữ liệu mẫu, xếp artboard và kiểm tra spec gửi sang jsx/artboard-create.jsx.
 * Không đụng tới DOM nên chạy được trong Node (tests/check-artboard-layout.js).
 *
 * Mẫu: { id, name, rows } với rows = các hàng artboard [[{w,h}, ...], ...]; mỗi hàng xếp ngang, các hàng xếp dọc.
 * Nhiều mẫu được chọn thì xếp chồng dọc, cách nhau `gap` px.
 */
(function (root) {
    'use strict';

    var MAX_SIZE = 20000;           // px mỗi cạnh
    var MAX_BOARDS = 40;
    var MAX_GAP = 1000;
    var NAME_MAX = 60;

    function box(w, h) { return { w: w, h: h }; }
    var SQUARE = box(1080, 1080), WIDE = box(1200, 630);

    function single(id, name, w, h) { return { id: id, name: name, w: w, h: h, rows: [[box(w, h)]] }; }
    function set(id, name, rows) { return { id: id, name: name, rows: rows }; }

    var SECTIONS = [
        { id: 'favorites', title: 'Hay dùng', tags: [], cards: [
            single('square', 'Bài vuông', 1080, 1080),
            single('portrait', 'Bài dọc', 1080, 1350),
            single('story', 'Story / Reels', 1080, 1920)
        ] },
        { id: 'facebook', title: 'Facebook', tags: ['facebook'], cards: [
            single('fb-wide', 'Bài ngang', 1200, 630),
            single('fb-page-cover', 'Cover Trang', 851, 315),
            single('fb-group-cover', 'Cover Nhóm', 1640, 856)
        ] },
        { id: 'youtube', title: 'YouTube', tags: ['youtube'], cards: [
            single('yt-thumbnail', 'Thumbnail', 1280, 720),
            single('yt-banner', 'Banner kênh', 2560, 1440),
            single('yt-shorts', 'Shorts', 1080, 1920)
        ] },
        { id: 'sets', title: 'Bộ nhiều ảnh', tags: [], cards: [
            set('set-2-square', 'Hai ảnh vuông', [[SQUARE, SQUARE]]),
            set('set-3-square', 'Ba ảnh vuông', [[SQUARE, SQUARE, SQUARE]]),
            set('set-1-wide-2-square', '1 ngang + 2 vuông', [[WIDE], [SQUARE, SQUARE]]),
            set('set-1-wide-3-square', '1 ngang + 3 vuông', [[WIDE], [SQUARE, SQUARE, SQUARE]])
        ] }
    ];

    function countBoards(template) {
        return template.rows.reduce(function (sum, row) { return sum + row.length; }, 0);
    }

    function allTemplates() {
        return SECTIONS.reduce(function (list, section) { return list.concat(section.cards); }, []);
    }

    // Mẫu theo danh sách id, đúng thứ tự trong SECTIONS (không phụ thuộc thứ tự bấm)
    function pick(ids) {
        return allTemplates().filter(function (template) { return ids.indexOf(template.id) !== -1; });
    }

    function boardName(template, index, total) {
        return total > 1 ? template.name + ' ' + (index + 1) : template.name;
    }

    // Xếp các mẫu thành danh sách artboard {name, x, y, w, h}, gốc (0,0) là góc trên trái artboard đầu tiên
    function layout(templates, gap) {
        var boards = [], y = 0;
        templates.forEach(function (template) {
            var total = countBoards(template), index = 0, blockHeight = 0;
            template.rows.forEach(function (row, rowIndex) {
                var x = 0, rowHeight = 0;
                row.forEach(function (size) {
                    boards.push({ name: boardName(template, index, total), x: x, y: y + blockHeight, w: size.w, h: size.h });
                    x += size.w + gap;
                    rowHeight = Math.max(rowHeight, size.h);
                    index += 1;
                });
                blockHeight += rowHeight + (rowIndex < template.rows.length - 1 ? gap : 0);
            });
            y += blockHeight + gap;
        });
        return boards;
    }

    function isSize(value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value && value >= 1 && value <= MAX_SIZE;
    }

    function isCoordinate(value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value && value >= 0 && value <= MAX_SIZE * MAX_BOARDS;
    }

    // Tên bộ/artboard chỉ cần là chuỗi một dòng, không ký tự điều khiển
    function isName(value) {
        return typeof value === 'string' && value.length > 0 && value.length <= NAME_MAX && !/[\x00-\x1f\u2028\u2029]/.test(value);
    }

    var validator = {
        test: function (spec) {
            if (!spec || typeof spec !== 'object') return false;
            if (spec.mode !== 'new' && spec.mode !== 'current') return false;
            if (!isName(spec.name)) return false;
            if (!(typeof spec.gap === 'number' && Math.floor(spec.gap) === spec.gap && spec.gap >= 0 && spec.gap <= MAX_GAP)) return false;
            if (['white', 'black', 'transparent'].indexOf(spec.background) === -1) return false;
            if (typeof spec.guides !== 'boolean') return false;
            if (!Array.isArray(spec.boards) || spec.boards.length < 1 || spec.boards.length > MAX_BOARDS) return false;
            return spec.boards.every(function (board) {
                return board && isName(board.name) && isCoordinate(board.x) && isCoordinate(board.y) && isSize(board.w) && isSize(board.h);
            });
        }
    };

    root.dr7Artboard = {
        SECTIONS: SECTIONS, MAX_SIZE: MAX_SIZE, MAX_GAP: MAX_GAP, NAME_MAX: NAME_MAX,
        countBoards: countBoards, pick: pick, layout: layout, isSize: isSize, spec: validator
    };
}(typeof window !== 'undefined' ? window : this));
