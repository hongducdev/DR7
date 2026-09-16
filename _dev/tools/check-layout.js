// Kiểm tra bố cục panel bằng Chrome headless: dựng index.html trong khung rộng đúng 235px
// (bề rộng cửa sổ panel CEP) rồi đo:
//   - nút nào nhãn bị cắt (scrollWidth > clientWidth) hoặc xuống 2 dòng (scrollHeight > clientHeight)
//   - nút nào tràn ra ngoài khung / nằm ngoài .row-.tools
//   - panel có cuộn được không (overflow-y + thanh cuộn 10px)
//   node _dev/tools/check-layout.js
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const CHROME = [process.env.CHROME,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].filter(Boolean).find((p) => fs.existsSync(p));

if (!CHROME) {
    console.log('SKIP: không thấy Chrome/Edge (đặt biến CHROME=<đường dẫn> để chạy).');
    process.exit(0);
}

const PROBE = `
<script>
document.body.style.width = "235px";
window.__adobe_cep__ = {};
CSInterface.prototype.resizeContent = function (width, height) { window.dr7RequestedHeight = height; };
window.addEventListener("load", function () {
  var de = document.documentElement, out = [], b = document.body, box = b;
  b.style.width = "235px";   // giả lập cửa sổ panel CEP mà không đổi cây DOM
  var r = box.getBoundingClientRect();
  var btns = [].slice.call(box.querySelectorAll("button:not([disabled]):not(.reload-panel)"));
  var bad = function (f) { return btns.filter(f).map(function (x) { return x.textContent.trim() || x.id; }); };
  out.push("clip=" + JSON.stringify(bad(function (x) { return x.scrollWidth > x.clientWidth + 1; })));
  // text-overflow: ellipsis che scrollWidth nên phải đo chữ bằng canvas mới biết nhãn có bị cắt.
  var cv = document.createElement("canvas").getContext("2d");
  var tight = btns.filter(function (x) {
    var cs = getComputedStyle(x);
    cv.font = cs.fontStyle + " " + cs.fontWeight + " " + cs.fontSize + " " + cs.fontFamily;
    var w = cv.measureText(x.textContent.trim()).width + parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    return w > x.clientWidth + 0.5;
  }).map(function (x) { return x.textContent.trim() + "(" + Math.round(x.clientWidth) + "px)"; });
  out.push("tight=" + JSON.stringify(tight));
  out.push("wrap=" + JSON.stringify(bad(function (x) { return x.scrollHeight > x.clientHeight + 1; })));
  out.push("loose=" + JSON.stringify(bad(function (x) { return !/row|tools|action-grid/.test(x.parentNode.className || ""); })));
  out.push("ngoai=" + JSON.stringify(bad(function (x) { var q = x.getBoundingClientRect(); return q.left < r.left - 0.5 || q.right > r.right + 0.5; })));
  out.push("overflowY=" + getComputedStyle(b).overflowY);
  out.push("scrollbar=" + (window.innerWidth - de.clientWidth) + "px");
  out.push("scrollable=" + (box.scrollHeight > window.innerHeight));
  out.push("height=" + Math.ceil(box.scrollHeight));
  var last = btns[btns.length - 1].getBoundingClientRect();
  out.push("last=" + Math.round(last.bottom));
  out.push("requestedHeight=" + window.dr7RequestedHeight);
  var panel = box.querySelector(".panel").getBoundingClientRect();
  var centered = [].slice.call(box.querySelectorAll(".logo img, .tools")).map(function (x) {
    var q = x.getBoundingClientRect(); return Math.abs((q.left + q.right - panel.left - panel.right) / 2);
  });
  out.push("center=" + Math.max.apply(Math, centered).toFixed(1));
  var d = document.createElement("div"); d.id = "dr7probe";
  d.textContent = "PROBE|" + out.join("|");
  de.appendChild(d);
});
</script>`;

const tmp = path.join(os.tmpdir(), 'dr7-layout-probe-' + Date.now() + '.html');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8')
    .replace('<head>', '<head>\n<base href="' + 'file:///' + ROOT.replace(/\\/g, '/') + '/">')
    .replace('</body>', PROBE + '</body>');
fs.writeFileSync(tmp, html, 'utf8');

let dom = '';
try {
    dom = execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-sandbox',
        '--user-data-dir=' + path.join(os.tmpdir(), 'dr7-layout-profile'),
        '--window-size=700,900', '--virtual-time-budget=4000', '--dump-dom', 'file:///' + tmp.replace(/\\/g, '/'),
    ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 1 << 26 });
} finally {
    fs.unlinkSync(tmp);
}

const m = /<div id="dr7probe">PROBE\|([^<]*)<\/div>/.exec(dom);
if (!m) { console.error('FAIL: không đọc được kết quả đo từ Chrome'); process.exit(1); }
const res = {};
for (const kv of m[1].split('|')) { const i = kv.indexOf('='); res[kv.slice(0, i)] = kv.slice(i + 1); }
console.log('đo trong khung 235px: ' + JSON.stringify(res));

const fails = [];
for (const k of ['clip', 'wrap', 'loose', 'ngoai']) if (res[k] !== '[]') fails.push(k + '=' + res[k]);
if (res.tight !== '[]') fails.push('nhãn bị cắt bằng ellipsis: ' + res.tight);
if (res.overflowY !== 'auto') fails.push('overflowY=' + res.overflowY);
if (+res.last > 800) fails.push('nội dung còn quá dài: ' + res.last + 'px');
if (+res.center > 1) fails.push('logo/icon lệch tâm: ' + res.center + 'px');
if (!(+res.requestedHeight >= +res.last && +res.requestedHeight <= +res.last + 8)) fails.push('panel must fit the final row: ' + res.requestedHeight);
if (fails.length) { console.error('FAIL: ' + fails.join(' | ')); process.exit(1); }
console.log('OK: không cắt chữ / xuống dòng / tràn khung; nội dung kết thúc tại ' + res.last + 'px.');
