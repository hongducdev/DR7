/*
 * Tab Artboard: chọn khổ (nhiều mẫu cùng lúc), tìm kiếm, lọc theo chip, thiết lập rồi tạo artboard trong Photoshop.
 * Dữ liệu mẫu và cách xếp nằm ở js/artboard-layout.js; phần tạo thật ở jsx/artboard-create.jsx (qua window.dr7RunArtboard).
 */
(function () {
    'use strict';

    var CUSTOM_ID = 'custom';
    var DEFAULT_NAME = 'SCCTLM_Social';
    var ICON_BOX = { w: 64, h: 34 };
    var STATUS_MS = 3000;

    var data = window.dr7Artboard;
    var state = { selected: ['square'], filter: 'all', query: '', mode: 'new', customW: 1080, customH: 1080 };
    var el = {};

    function plain(text) {
        return String(text).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
    }

    function customTemplate() {
        var ok = data.isSize(state.customW) && data.isSize(state.customH);
        return ok ? { id: CUSTOM_ID, name: 'Tùy chỉnh', rows: [[{ w: state.customW, h: state.customH }]] } : null;
    }

    function chosenTemplates() {
        var chosen = data.pick(state.selected);
        var custom = state.selected.indexOf(CUSTOM_ID) !== -1 ? customTemplate() : null;
        return custom ? chosen.concat([custom]) : chosen;
    }

    function sizeLabel(template) {
        var count = data.countBoards(template);
        return count > 1 ? count + ' artboard' : template.rows[0][0].w + ' × ' + template.rows[0][0].h;
    }

    // Hình thu nhỏ khổ giấy: vẽ lại đúng bố cục xếp thật, co vừa khung icon
    function shapeIcon(template) {
        var boards = data.layout([template], 100), width = 0, height = 0;
        boards.forEach(function (b) { width = Math.max(width, b.x + b.w); height = Math.max(height, b.y + b.h); });
        var scale = Math.min(ICON_BOX.w / width, ICON_BOX.h / height);
        var icon = document.createElement('span');
        icon.className = 'ab-shape';
        boards.forEach(function (b) {
            var rect = document.createElement('i');
            rect.style.cssText = 'left:' + Math.round(b.x * scale) + 'px;top:' + Math.round(b.y * scale) + 'px;width:' +
                Math.max(2, Math.round(b.w * scale)) + 'px;height:' + Math.max(2, Math.round(b.h * scale)) + 'px';
            icon.appendChild(rect);
        });
        icon.style.width = Math.round(width * scale) + 'px';
        icon.style.height = Math.round(height * scale) + 'px';
        return icon;
    }

    function cardFor(template) {
        var card = document.createElement('button');
        var isCustom = template.id === CUSTOM_ID;
        card.className = 'ab-card' + (isCustom ? ' is-custom' : '');
        card.setAttribute('data-id', template.id);
        card.title = template.name;
        var frame = document.createElement('span');
        frame.className = 'ab-card-art';
        if (isCustom) { frame.className += ' is-dashed'; frame.textContent = '+'; } else frame.appendChild(shapeIcon(template));
        var name = document.createElement('strong');
        name.textContent = template.name;
        var size = document.createElement('em');
        size.textContent = isCustom ? 'Nhập kích thước' : sizeLabel(template);
        card.appendChild(frame);
        card.appendChild(name);
        card.appendChild(size);
        return card;
    }

    function matches(template) {
        if (!state.query) return true;
        var haystack = plain(template.name + ' ' + (template.rows[0][0] ? template.rows[0][0].w + 'x' + template.rows[0][0].h : ''));
        return haystack.indexOf(plain(state.query)) !== -1;
    }

    function visibleSections() {
        var customCard = { id: CUSTOM_ID, name: 'Tùy chỉnh', rows: [[{ w: 1, h: 1 }]] };
        var list = [];
        data.SECTIONS.forEach(function (section) {
            var show = state.filter === 'all' ? true : section.tags.indexOf(state.filter) !== -1;
            if (!show) return;
            var cards = section.cards.slice();
            if (section.id === 'facebook') cards.push(customCard);
            list.push({ id: section.id, title: section.title, cards: cards });
        });
        if (state.filter === 'custom') list.push({ id: 'custom', title: 'Tùy chỉnh', cards: [customCard] });
        return list;
    }

    function sectionNode(section, cards) {
        var group = document.createElement('section');
        group.className = 'group ab-group';
        var title = document.createElement('div');
        title.className = 'section-title';
        title.setAttribute('role', 'button');
        title.tabIndex = 0;
        title.setAttribute('aria-expanded', 'true');
        title.innerHTML = '<svg class="section-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 6l5 5 5-5"/></svg>' +
            (section.id === 'favorites' ? '<svg class="ab-star" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.8l1.9 4 4.3.5-3.2 3 .9 4.3L8 11.4l-3.9 2.2.9-4.3-3.200-3 4.300-.5z"/></svg>' : '');
        title.appendChild(document.createTextNode(section.title));
        var grid = document.createElement('div');
        grid.className = 'ab-grid ab-cols-' + (section.id === 'favorites' ? 3 : 2);
        cards.forEach(function (template) { grid.appendChild(cardFor(template)); });
        group.appendChild(title);
        group.appendChild(grid);
        return group;
    }

    function renderSections() {
        el.sections.textContent = '';
        var any = false;
        visibleSections().forEach(function (section) {
            var cards = section.cards.filter(matches);
            if (!cards.length) return;
            any = true;
            el.sections.appendChild(sectionNode(section, cards));
        });
        el.empty.hidden = any;
        refreshSelection();
    }

    function refreshSelection() {
        Array.prototype.forEach.call(el.sections.querySelectorAll('.ab-card'), function (card) {
            var on = state.selected.indexOf(card.getAttribute('data-id')) !== -1;
            card.classList.toggle('is-selected', on);
            card.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        var customOn = state.selected.indexOf(CUSTOM_ID) !== -1;
        el.customGroup.hidden = !customOn;
        var chosen = chosenTemplates();
        var boards = chosen.reduce(function (sum, template) { return sum + data.countBoards(template); }, 0);
        el.summary.textContent = chosen.length ? 'Đã chọn ' + chosen.length + ' mẫu · ' + boards + ' artboard' : 'Chưa chọn mẫu nào';
        el.create.textContent = boards ? 'Tạo ' + boards + ' artboard' : 'Tạo artboard';
        el.create.disabled = !boards;
        el.summaryIcon.classList.toggle('is-empty', !boards);
        if (window.dr7FitHeight) window.dr7FitHeight();
    }

    function toggle(id) {
        var at = state.selected.indexOf(id);
        if (at === -1) state.selected.push(id); else state.selected.splice(at, 1);
        refreshSelection();
    }

    function readNumber(input, fallback, min, max) {
        var value = parseInt(input.value, 10);
        return isFinite(value) ? Math.max(min, Math.min(max, value)) : fallback;
    }

    function status(text, isError) {
        if (!window.dr7Status) return;
        window.dr7Status(text, isError);
        if (!isError && text) setTimeout(function () { window.dr7Status(''); }, STATUS_MS);
    }

    function create() {
        var templates = chosenTemplates();
        if (!templates.length || (window.dr7IsBusy && window.dr7IsBusy())) return;
        var gap = readNumber(el.gap, 40, 0, data.MAX_GAP);
        el.gap.value = gap;
        var spec = {
            mode: state.mode,
            name: (el.name.value.trim() || DEFAULT_NAME).slice(0, data.NAME_MAX).replace(/[\x00-\x1f]/g, ' '),
            gap: gap,
            background: el.background.value,
            guides: el.guides.checked,
            boards: data.layout(templates, gap)
        };
        el.create.disabled = true;
        window.dr7RunArtboard(spec, function (res) {
            refreshSelection();
            if (res === 'DR7_OK') status('✓ Đã tạo ' + spec.boards.length + ' artboard');
        });
    }

    function setMode(mode) {
        state.mode = mode;
        Array.prototype.forEach.call(el.modes, function (button) {
            var on = button.getAttribute('data-mode') === mode;
            button.classList.toggle('is-active', on);
            button.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        el.name.disabled = mode === 'current';
    }

    window.dr7InitArtboard = function () {
        var root = document.querySelector('.artboard');
        if (!root || !data) return;
        ['sections', 'empty', 'customGroup', 'summary', 'summaryIcon', 'create', 'name', 'gap', 'background', 'guides', 'search'].forEach(function (key) {
            el[key] = root.querySelector('.ab-' + key.replace(/[A-Z]/g, function (c) { return '-' + c.toLowerCase(); }));
        });
        el.modes = root.querySelectorAll('.ab-mode');
        var customW = root.querySelector('.ab-custom-w'), customH = root.querySelector('.ab-custom-h');

        root.querySelector('.ab-chips').addEventListener('click', function (event) {
            var chip = event.target.closest ? event.target.closest('.ab-chip') : null;
            if (!chip) return;
            state.filter = chip.getAttribute('data-filter');
            Array.prototype.forEach.call(root.querySelectorAll('.ab-chip'), function (item) { item.classList.toggle('is-active', item === chip); });
            renderSections();
        });
        el.search.addEventListener('input', function () { state.query = el.search.value.trim(); renderSections(); });
        el.sections.addEventListener('click', function (event) {
            var card = event.target.closest ? event.target.closest('.ab-card') : null;
            if (card) toggle(card.getAttribute('data-id'));
        });
        [[customW, 'customW'], [customH, 'customH']].forEach(function (pair) {
            pair[0].addEventListener('input', function () { state[pair[1]] = parseInt(pair[0].value, 10); refreshSelection(); });
            pair[0].addEventListener('change', function () {
                state[pair[1]] = readNumber(pair[0], 1080, 1, data.MAX_SIZE);
                pair[0].value = state[pair[1]];
                refreshSelection();
            });
        });
        Array.prototype.forEach.call(el.modes, function (button) {
            button.addEventListener('click', function () { setMode(button.getAttribute('data-mode')); });
        });
        el.create.addEventListener('click', create);
        setMode('new');
        renderSections();
    };
}());
