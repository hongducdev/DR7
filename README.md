# MHK DR7 — Panel Retouch Chuyên Nghiệp Cho Adobe Photoshop

**MHK DR7** là tiện ích mở rộng (CEP Extension) cao cấp dành cho Adobe Photoshop, cung cấp giải pháp chỉnh sửa và làm đẹp chân dung, ảnh cưới, ảnh thời trang và studio thương mại toàn diện với hơn 70 công cụ tự động hóa thông minh trên giao diện tiếng Việt hiện đại.

---

## Mục lục

- [Điểm nổi bật](#điểm-nổi-bật)
- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
  - [Cài đặt tự động (Khuyến nghị - Windows)](#cài-đặt-tự-động-khuyến-nghị---windows)
  - [Cài đặt thủ công (Windows)](#cài-đặt-thủ-công-windows)
  - [Cài đặt trên macOS](#cài-đặt-trên-macos)
- [Bảng chức năng & Hệ thống công cụ](#bảng-chức-năng--hệ-thống-công-cụ)
  - [1. Thanh công cụ thao tác nhanh](#1-thanh-công-cụ-thao-tác-nhanh)
  - [2. Lựa chọn vùng sáng tối (Tone Selection)](#2-lựa-chọn-vùng-sáng-tối-tone-selection)
  - [3. Xử lý và làm mịn da chuyên sâu](#3-xử-lý-và-làm-mịn-da-chuyên-sâu)
  - [4. Đánh khối & Định hình ánh sáng (Dodge & Burn)](#4-đánh-khối--định-hình-ánh-sáng-dodge--burn)
  - [5. Cân bằng và hiệu chỉnh tông màu da](#5-cân-bằng-và-hiệu-chỉnh-tông-màu-da)
  - [6. Chi tiết chân dung & Trang điểm](#6-chi-tiết-chân-dung--trang-điểm)
  - [7. Hiệu ứng nghệ thuật, Nền & Hoa văn kết cấu (Textures)](#7-hiệu-ứng-nghệ-thuật-nền--hoa-văn-kết-cấu-textures)
  - [8. Tiện ích quy trình làm việc](#8-tiện-ích-quy-trình-làm-việc)
- [Tiện ích Hot Reload & Nạp lại tức thì](#tiện-ích-hot-reload--nạp-lại-tức-thì)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Xử lý sự cố thường gặp](#xử-lý-sự-cố-thường-gặp)

---

## Điểm nổi bật

- **Giao diện 100% tiếng Việt**: Mọi nút bấm, nhãn và chú thích (tooltip) được bản địa hóa chuẩn xác theo thuật ngữ nhiếp ảnh và đồ họa chuyên nghiệp.
- **Bố cục Responsive tối ưu**: Chiều rộng chuẩn 235px của panel CEP, lưới nút bấm 3 cột tự động co giãn theo nội dung, cuộn dọc mượt mà, tương thích hoàn hảo với mọi kích thước màn hình.
- **Giao diện gọn, không nút chết**: Giữ 24 chức năng đang hoạt động, chia 3 nhóm card, cộng nút preset màu tự sinh từ thư mục `presets/`; toàn bộ nút mờ và script không dùng đã bị gỡ khỏi mã nguồn nên panel nạp nhanh và không báo lỗi "Missing command".
- **Xử lý ảnh không phá hủy (Non-destructive)**: Mọi thao tác đều sinh layer, mask hoặc adjustment layer riêng biệt, dễ dàng tinh chỉnh Opacity, Blend Mode hoặc đảo ngược bất cứ lúc nào.
- **Hỗ trợ ảnh RGB 8-bit và 16-bit**: Các thuật toán xử lý màu sắc và kết cấu vận hành chính xác trên cả định dạng ảnh tiêu chuẩn và ảnh chất lượng cao.
- **Hiệu năng cao & Bảo mật**: Vận hành hoàn toàn cục bộ trên nền tảng chuẩn Adobe CEP + ExtendScript, không phụ thuộc thư viện ngoài nặng nề, không gửi dữ liệu qua mạng.
- **Bộ hoa văn kết cấu**: Tích hợp sẵn bộ pattern chất liệu độc quyền (`Hạt phim`, `Hạt thô`, `Chấm`).

---

## Yêu cầu hệ thống

- **Phần mềm**: Adobe Photoshop CC 2015 trở lên (CC 2015, CC 2017, CC 2018, CC 2019, Photoshop 2020, 2021, 2022, 2023, 2024+).
- **Môi trường mở rộng**: Adobe CEP 6.0 trở lên.
- **Hệ điều hành**: Windows 10/11 (64-bit) hoặc macOS 10.13 trở lên.
- **Định dạng tài liệu**: Chế độ màu RGB (8-bit hoặc 16-bit).

---

## Hướng dẫn cài đặt

### Cài đặt tự động (Khuyến nghị - Windows)

1. **Đóng hoàn toàn Adobe Photoshop.**
2. Điều hướng vào thư mục `install/` và nhấp đúp vào tập tin:
   ```text
   install\Cai-dat-DR7.bat
   ```
3. Script cài đặt sẽ tự động:
   - Kích hoạt chế độ gỡ lỗi `PlayerDebugMode` cho các phiên bản CEP từ CSXS.4 đến CSXS.15 (cho phép chạy extension chưa ký số).
   - Sao chép toàn bộ mã nguồn plugin vào thư mục tiện ích mở rộng của người dùng hiện tại (`%APPDATA%\Adobe\CEP\extensions\DR7`).
4. Khởi động Adobe Photoshop.
5. Mở panel bằng cách vào menu:
   ```text
   Cửa sổ (Window) > Tiện ích mở rộng (Extensions) > MHK DR7
   ```

---

### Cài đặt thủ công (Windows)

Nếu muốn tự triển khai hoặc cài đặt cho toàn bộ người dùng trên máy tính:

1. Bật chế độ chạy extension bằng cách nhấp đúp tập tin:
   ```text
   install\Fix-CEP-DR7.reg
   ```
   *(Tập tin registry chỉ áp dụng trong phạm vi `HKEY_CURRENT_USER`, không yêu cầu quyền Administrator).*
2. Sao chép toàn bộ thư mục plugin vào một trong hai đường dẫn sau:
   - **Chỉ người dùng hiện tại**:
     ```text
     %APPDATA%\Adobe\CEP\extensions\DR7\
     ```
   - **Tất cả người dùng máy tính** (Cần quyền Administrator):
     ```text
     C:\ProgramData\Adobe\CEP\extensions\DR7\
     ```
3. Khởi động Photoshop và mở menu: `Window > Extensions > MHK DR7`.

---

### Cài đặt trên macOS

1. Mở ứng dụng **Terminal** và chạy lệnh bật `PlayerDebugMode` tương ứng với phiên bản Photoshop đang sử dụng (hoặc chạy cho tất cả các phiên bản):
   ```bash
   defaults write com.adobe.CSXS.9 PlayerDebugMode 1
   defaults write com.adobe.CSXS.10 PlayerDebugMode 1
   defaults write com.adobe.CSXS.11 PlayerDebugMode 1
   defaults write com.adobe.CSXS.12 PlayerDebugMode 1
   defaults write com.adobe.CSXS.13 PlayerDebugMode 1
   defaults write com.adobe.CSXS.14 PlayerDebugMode 1
   ```
2. Sao chép toàn bộ thư mục plugin vào đường dẫn sau:
   ```bash
   ~/Library/Application Support/Adobe/CEP/extensions/DR7/
   ```
3. Mở Photoshop và truy cập: `Window > Extensions > MHK DR7`.

---

## Bảng chức năng

Bảng điều khiển **MHK DR7** bao gồm **24 chức năng đang hoạt động** chia 3 nhóm, cộng **1 nút cho mỗi preset `.xmp`** trong thư mục `presets/`.
Toàn bộ nút mờ (không khả dụng) cùng script, hàm lõi và tài nguyên của chúng đã được gỡ bỏ hoàn toàn,
nên panel gọn hơn, nạp nhanh hơn và không còn lệnh "chết".

```
┌────────────────────────────────────────────────────────┐
│                   MHK DR7        [↻ Nạp lại]           │
├────────────────────────────────────────────────────────┤
│ ┌─ ● RETOUCH ────────────────────────────────────────┐ │
│ │ [            Làm Da V5.0            ]              │ │
│ │ [ Tuỳ chỉnh ] [ Hàng loạt ] [ Chữ / Logo ]         │ │
│ │ [ Làm mịn ] [ Tẩy lông ] [ Đánh Khối ]             │ │
│ │ [ Highlight ] [ Màu tổng ] [ Màu Da ]              │ │
│ │ [ Trắng Da ] [ Phủ phấn ] [ Lông Mi ]              │ │
│ │ [ Bóng Mắt ] [ Son Môi ] [ Trắng Răng ]            │ │
│ │ [ Hào Quang ] [ Làm nét ] [ Hạt phim ]             │ │
│ │ [ Hạt thô ] [ Chấm ]                               │ │
│ └────────────────────────────────────────────────────┘ │
│ ┌─ ● BRUSH ──────────────────────────────────────────┐ │
│ │ [                Pen Pressure                ]     │ │
│ │ [           ⌨ Phím tắt: Shift+F3             ]     │ │
│ └────────────────────────────────────────────────────┘ │
│ ┌─ ● MÀU & PRESET ───────────────────────────────────┐ │
│ │ [ Camera Raw ]          [ Preset XMP… ]            │ │
│ │ [ ● MHK05451 ]  ← 1 nút / file .xmp trong presets/ │ │
│ └────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

### 1. Làm da & làm mịn

| Nút bấm | Mã lệnh | Tác vụ |
|---|---|---|
| **Làm Da V5.0** | `DS` | Quy trình làm mịn da thông minh, làm đều vùng da sần sùi mà không làm mờ lỗ chân lông hay mất kết cấu tự nhiên. |
| **Tuỳ chỉnh** | `SE` | Như Làm Da V5.0 nhưng mở hộp thoại chỉnh bán kính làm mịn, độ sâu chi tiết, bảo vệ vùng sáng (có thể lưu làm mặc định). |
| **Hàng loạt** | `BA` | Làm da cho tất cả ảnh đang mở trong Photoshop (cần mở ít nhất 1 ảnh). |
| **Làm mịn** | `LS` | Làm mịn da bề mặt nhanh chóng, kết hợp làm mờ quang học tự nhiên. |
| **Tẩy lông** | `RE` | Xóa sạch lông tơ, sợi tóc con vướng trên trán, má hoặc cằm. |

### 2. Đánh khối, độ nét & ánh sáng

| Nút bấm | Mã lệnh | Tác vụ |
|---|---|---|
| **Đánh Khối** | `DB` | Tạo tự động nhóm layer Dodge & Burn kèm đường cong Curves và mặt nạ đen, sẵn sàng quét sáng/tối tạo khối gương mặt. |
| **Làm nét** | `SH` | Tăng chi tiết tóc và đường viền chân dung. |
| **Pen Pressure** | `BPP` | Bật Shape Dynamics cho cọ hiện tại và đặt Control của Size / Angle / Roundness Jitter về Pen Pressure (đang cầm công cụ không phải cọ thì tự chuyển sang Brush). Không cần mở ảnh. Gán phím tắt: bấm **⌨ Phím tắt** rồi ấn phím (xem bên dưới). |
| **Phủ phấn** | `TJSH` | Giảm độ bóng nhờn, tạo hiệu ứng da phủ phấn mịn màng như trang điểm thực tế. |
| **Highlight** | `GGXS` | Tạo điểm nhấn bắt sáng tự nhiên tại sống mũi, gò má, cằm và trán. |

### 3. Tông màu da & trang điểm

| Nút bấm | Mã lệnh | Tác vụ |
|---|---|---|
| **Màu tổng** | `BTNPFSD2` | Cân bằng sắc độ da toàn diện, khắc phục da loang màu hoặc lệch tone. |
| **Màu Da** | `TC` | Áp dụng bảng màu da chuẩn, tạo vẻ rạng rỡ và hồng hào tự nhiên. |
| **Trắng Da** | `MBPF` | Nâng tone sáng trong trẻo cho làn da mà vẫn giữ nguyên chi tiết khối. |
| **Trắng Răng** | `WT` | Loại bỏ ố vàng trên men răng, tăng độ trắng sáng tự nhiên. |
| **Son Môi** | `ZCZQ` | Tô sắc môi tự nhiên, hỗ trợ tùy biến sắc độ môi. |
| **Lông Mi** | `JMXS` | Tăng độ dày và độ nét của hàng mi. |
| **Bóng Mắt** | `TJYY` | Tạo khối mí mắt, giúp ánh mắt sâu và tự nhiên hơn. |

### 4. Hiệu ứng, kết cấu & tiện ích

| Nút bấm | Mã lệnh | Tác vụ |
|---|---|---|
| **Hào Quang** | `CGYSB` | Tạo lớp hòa trộn Screen phủ ánh sáng mềm. |
| **Hạt phim** | `MLXG` | Hoa văn hạt phim (Grain). |
| **Hạt thô** | `mcwl` | Hoa văn hạt thô (Coarse). |
| **Chấm** | `sfb` | Hoa văn chấm bi (Dots). |
| **Preset XMP** | `APPLY_PRESET_XMP` | Chọn file preset Camera Raw (.xmp) — thiết lập được nạp vào Camera Raw và render tự động lên lớp gộp riêng `Preset - [tên]`, không mở hộp thoại, không phá huỷ ảnh gốc. |
| **● [tên preset]** | `dr7ApplyPreset(file)` | Nút tự sinh cho mỗi file `.xmp` trong `presets/` (nhãn = tên file). Áp bằng 1 click, không hỏi file, không mở hộp thoại, render lên lớp `Preset - [tên]`. |
| **Camera Raw** | `DKACR` | Khởi chạy trực tiếp bộ lọc Adobe Camera Raw. |
| **Chữ / Logo** | `WM` | Hộp thoại đóng dấu bản quyền hoặc gắn logo thương hiệu hàng loạt. |

> **Gán phím tắt cho Pen Pressure:** trong nhóm Brush bấm **⌨ Phím tắt** (nút chuyển xanh, đang nghe) → ấn tổ hợp phím
> F2–F12, có thể kèm Shift và/hoặc Ctrl (vd `Shift+F3`, `Ctrl+Shift+F11`). Esc hoặc bấm nút lần nữa để huỷ.
> Phím khác (chữ, số, Alt…) bị từ chối vì Action của Photoshop chỉ nhận phím F.
> Panel tự tạo bộ Action **MHK DR7 › Pen Pressure** gắn sẵn phím đó (gán lại sẽ thay bộ cũ, không tạo trùng).
> Từ đó bấm phím ở bất kỳ đâu trong Photoshop là cọ được set ngay, không cần mở panel.
> Nếu phím trùng phím tắt menu (vd F2 = Cut, F3 = Copy, F4 = Paste), Photoshop hỏi *"Remove the conflicting action shortcuts?"*:
> chọn **No** để phím chạy Pen Pressure, **Yes** để giữ phím cho menu (Action khi đó không có phím).

> **Thêm preset màu:** chép file `.xmp` (preset Camera Raw / Lightroom) vào thư mục `presets/` của plugin
> (`%APPDATA%\Adobe\CEP\extensions\DR7\presets`) rồi bấm **↻**. Mỗi file thành một nút, nhãn là tên file.
> Tên file chỉ dùng chữ không dấu, số, khoảng trắng, `-`, `_`, `(`, `)`; file tên khác bị bỏ qua để an toàn.
> Nhiệt độ màu dạng Kelvin của file sidecar RAW được bỏ qua khi áp lên ảnh thường.

> **Ghi chú:** 31 chức năng cũ không còn khả dụng (Tần số 8/16, Tần số, Frequency, Lấy mẫu, Chọn Mắt,
> Mặt nạ da, Sửa mắt, Lớp xám, Mặt Nạ, Bóng Vàng, Khử Vàng, Phai màu, Trừ vàng, Nền trắng, Nền ấm,
> Cổ điển, Tranh Vẽ, Vải dệt, Ẩn kết cấu, Sọc, Làm mờ, Hoa mai, Hoa Sen, Trang Trí, Nét mềm, Đảo vùng,
> Gộp lớp, Vật liệu, Lật ngang, Bột tươi, Phim TL) cùng thanh công cụ icon đã bị **gỡ bỏ hoàn toàn**
> khỏi giao diện và khỏi mã nguồn.

---

## Tiện ích Hot Reload & Nạp lại tức thì

Để tối ưu hóa thời gian tùy biến và phát triển, panel tích hợp sẵn cơ chế làm mới mã nguồn mà không cần khởi động lại Photoshop:

### 1. Nút nạp lại nhanh (↻)
Trên thanh tiêu đề panel (cạnh tên và phiên bản) có nút **↻**. Bấm nút này sẽ nạp lại toàn bộ giao diện HTML, định dạng CSS, mã JavaScript điều khiển và các file script ExtendScript (.jsx) từ thư mục cài đặt plugin ngay lập tức. Nút bấm được trang bị cơ chế bảo vệ: không ngắt quãng các lệnh xử lý đang chạy dang dở.

**Máy dev (cài từ git checkout):** `Cai-dat-DR7.bat` ghi đường dẫn thư mục nguồn vào `.dr7-dev-source` trong thư mục cài. Khi có file này, bấm **↻** sẽ tự chép file mới hơn từ thư mục nguồn (`index.html`, `style.css`, `loader.jsx`, `js/`, `jsx/`, `css/`, `img/`, `presets/`) sang bản cài rồi mới nạp lại — không cần chạy `Hot-reload-DR7.bat`. Không xoá file nào ở bản cài. Muốn tắt: xoá file `.dr7-dev-source`.

### 2. Chế độ Hot-reload tự động (Dành cho nhà phát triển)
Khi chỉnh sửa mã nguồn trong thư mục dự án, chạy file:
```text
install\Hot-reload-DR7.bat
```
*(Yêu cầu cài đặt sẵn Node.js trên máy tính).*

Trình theo dõi sẽ tự động:
- Lắng nghe sự thay đổi của tất cả các file HTML, CSS, JS, JSX và tài nguyên đồ họa.
- Chờ file ghi ổn định và kiểm tra trạng thái bận của Photoshop.
- Đồng bộ tự động các file thay đổi vào thư mục `%APPDATA%\Adobe\CEP\extensions\DR7`.
- Gửi tín hiệu kích hoạt panel tự động làm mới giao diện ngay lập tức.

### 3. Cập nhật plugin từ GitHub
Nút **⤓** trên thanh tiêu đề lấy bản phát hành (GitHub Release) mới nhất của `hongducdev/DR7`:
- Mỗi lần mở panel tự kiểm tra im lặng; có bản mới thì nút hiện **chấm xanh**.
- Bấm nút → xác nhận → chỉ tải các file runtime đã thay đổi (`index.html`, `style.css`, `loader.jsx`,
  `CSXS/manifest.xml`, `js/ css/ jsx/ img/ presets/`), tải xong hết mới ghi đè, rồi tự nạp lại panel.
  Lỗi mạng giữa chừng không làm hỏng bản đang cài.
- Nếu `manifest.xml` đổi cấu trúc (không chỉ số phiên bản) → panel báo khởi động lại Photoshop.
- Bản ghi file đã cài: `.dr7-version.json` trong thư mục cài (bị xoá khi cài lại bằng `.bat` / watcher).

**Phát hành bản mới** (người phát triển):
1. Tăng `ExtensionBundleVersion` và `Version` của panel trong `CSXS/manifest.xml` (phải trùng nhau, dạng `x.y.z`).
2. Commit, push lên `main`.
3. `gh release create v0.2.0 --title "DR7 0.2.0" --notes "Nội dung thay đổi"` — tag phải là `v` + đúng số phiên bản.

---

## Cấu trúc thư mục

```text
DR7/
├── CSXS/
│   └── manifest.xml         # Cấu hình mở rộng Adobe CEP, menu hiển thị & kích thước panel
├── .debug                   # Cấu hình cổng Debugger Chromium (Port 9004)
├── index.html               # Cấu trúc giao diện HTML5 chính của panel
├── style.css                # Định dạng kiểu dáng cơ bản
├── loader.jsx               # Trình nạp lõi ExtendScript bảo vệ không gian tên
├── css/
│   └── layout.css           # Bố cục lưới 3 cột, màu nút & hệ thống cuộn dọc
├── js/
│   ├── CSInterface.js       # Thư viện giao tiếp Adobe CEP tiêu chuẩn
│   ├── github-updater.js    # Kiểm tra & cài GitHub Release mới nhất (cep.fs, không cần Node)
│   ├── dev-source-sync.js   # ↻ trên máy dev: chép code mới từ thư mục nguồn (.dr7-dev-source)
│   ├── shortcut-key-capture.js # Nút ⌨ Phím tắt: nghe phím F người dùng ấn rồi gán cho Pen Pressure
│   └── panel.js             # Cầu nối điều khiển giao tiếp Panel ↔ Photoshop, header Nạp lại/Cập nhật
├── jsx/
│   ├── 4.jsxbin             # Hộp thoại Chữ / Logo (WM)
│   ├── main.jsx             # 8 hàm lõi còn dùng: GGXS, TJSH, JMXS, TJYY, FSJH, MBPF, ZCZQ, DKACR
│   ├── mhk-replacements.jsx # Hào Quang, Hạt phim, Hạt thô, Chấm, Chi tiết
│   ├── Photoshop.jsx        # Tiện ích Crash Bug Fix (chạy khi mở panel)
│   ├── pj/                  # Tài nguyên cọ vẽ (.tpl) và bộ hoa văn (.pat)
│   ├── preset-lut.jsx       # Lõi áp dụng Preset Camera Raw (.xmp): chọn file hoặc preset đóng gói
│   ├── brush-pen-pressure.jsx # Pen Pressure (BPP) — chạy được độc lập (Action gọi file này)
│   ├── action-shortcut-setup.jsx # Gán phím: tự sinh .atn bộ "MHK DR7" có phím F rồi nạp vào Photoshop
│   └── *.jsx                # Module chuyên biệt còn dùng: ds, ba, se, ls, ss, re, db, sh, li, tc, wt, pfsd2
├── presets/                 # Preset .xmp đóng gói — mỗi file thành 1 nút trên panel
├── img/
│   └── icon-large.png       # Biểu tượng panel trong menu Window > Extensions
├── install/
│   ├── Cai-dat-DR7.bat      # Script cài đặt tự động vào Photoshop
│   ├── Fix-CEP-DR7.reg      # File registry kích hoạt chế độ PlayerDebugMode
│   ├── Hot-reload-DR7.bat   # Script khởi động bộ theo dõi Hot Reload
│   └── watch-plugin.js      # Trình theo dõi file và nạp lại panel tự động bằng Node.js
├── tests/                   # Bộ kiểm thử tự động tính ổn định của script và giao tiếp
├── docs/                    # Tài liệu hướng dẫn thiết kế và nhật ký phát triển
└── README.md                # Tài liệu giới thiệu chính của dự án
```

---

## Xử lý sự cố thường gặp

### 1. Panel không xuất hiện trong menu Window > Extensions
- **Nguyên nhân**: Photoshop chưa cho phép chạy tiện ích mở rộng chưa qua ký số của Adobe.
- **Cách xử lý**: Nhấp đúp vào file `install\Fix-CEP-DR7.reg`, chọn **Yes** để nạp cấu hình registry, sau đó khởi động lại Photoshop.

### 2. Nhấn nút nhưng không có tác vụ nào diễn ra
- **Nguyên nhân**: Chưa có tài liệu ảnh nào được mở trong Photoshop hoặc ảnh đang ở chế độ màu không tương thích.
- **Cách xử lý**: Đảm bảo bạn đã mở một bức ảnh và ảnh đang ở hệ màu **RGB Color** (Vào menu Photoshop: `Image > Mode > RGB Color`).

### 3. Vừa chỉnh sửa code nhưng giao diện chưa cập nhật
- **Cách xử lý**: Nhấp vào nút **↻** ở góc trên bên phải của panel để tải lại toàn bộ tài nguyên tức thì.
- Nếu sửa code ở thư mục nguồn (vd `D:\DR7`) mà ↻ vẫn ra bản cũ: bản cài thiếu file `.dr7-dev-source` → chạy lại `install\Cai-dat-DR7.bat` từ git checkout, hoặc dùng `Hot-reload-DR7.bat`.

---

*Phát triển và tối ưu hóa cho cộng đồng nhiếp ảnh và đồ họa chuyên nghiệp.*
