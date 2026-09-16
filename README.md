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
- **Giao diện gọn, không nút chết**: Chỉ giữ 26 chức năng đang hoạt động; toàn bộ nút mờ và script của chúng đã bị gỡ khỏi mã nguồn nên panel nạp nhanh và không báo lỗi "Missing command".
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

Bảng điều khiển **MHK DR7** chỉ giữ lại **26 chức năng đang hoạt động** (những nút còn sáng màu).
Toàn bộ nút mờ (không khả dụng) cùng script, hàm lõi và tài nguyên của chúng đã được gỡ bỏ hoàn toàn,
nên panel gọn hơn, nạp nhanh hơn và không còn lệnh "chết".

```
┌────────────────────────────────────────────────────────┐
│                   MHK DR7        [↻ Nạp lại]           │
├────────────────────────────────────────────────────────┤
│ [ Làm Da V5.0 ]                                        │
│ [ Hàng loạt ] [ Tự động ] [ Chữ / Logo ]               │
│ [ Làm mịn ] [ Lẫn mịn ] [ Tẩy lông ]                   │
│ [ Đánh Khối ] [ Làm nét ] [ Liquify ]                  │
│ [ Highlight ] [ Phủ phấn ] [ Lông Mi ]                 │
│ [ Bóng Mắt ] [ Màu tổng ] [ Màu Da ]                   │
│ [ Giảm Vàng ] [ Trắng Da ] [ Trắng Răng ]              │
│ [ Son Môi ] [ Hào Quang ] [ Hạt phim ]                 │
│ [ Camera Raw ] [ Chi tiết ] [ Hạt thô ]                │
│ [ Chấm ]                                               │
└────────────────────────────────────────────────────────┘
```

### 1. Làm da & làm mịn

| Nút bấm | Mã lệnh | Tác vụ |
|---|---|---|
| **Làm Da V5.0** | `DS` | Quy trình làm mịn da thông minh, làm đều vùng da sần sùi mà không làm mờ lỗ chân lông hay mất kết cấu tự nhiên. |
| **Hàng loạt** | `BA` | Thiết lập thông số một lần rồi áp dụng cho nhiều ảnh. |
| **Tự động** | `SE` | Làm đẹp tự động tối ưu hóa nhiều bước chỉ với một cú nhấp chuột. |
| **Làm mịn / Lẫn mịn** | `LS` / `SS` | Làm mịn da bề mặt nhanh chóng, kết hợp làm mờ quang học tự nhiên. |
| **Tẩy lông** | `RE` | Xóa sạch lông tơ, sợi tóc con vướng trên trán, má hoặc cằm. |

### 2. Đánh khối, độ nét & ánh sáng

| Nút bấm | Mã lệnh | Tác vụ |
|---|---|---|
| **Đánh Khối** | `DB` | Tạo tự động nhóm layer Dodge & Burn kèm đường cong Curves và mặt nạ đen, sẵn sàng quét sáng/tối tạo khối gương mặt. |
| **Làm nét** | `SH` | Tăng chi tiết tóc và đường viền chân dung. |
| **Liquify** | `LI` | Mở nhanh công cụ Liquify để nắn chỉnh hình thể và khuôn mặt. |
| **Phủ phấn** | `TJSH` | Giảm độ bóng nhờn, tạo hiệu ứng da phủ phấn mịn màng như trang điểm thực tế. |
| **Highlight** | `GGXS` | Tạo điểm nhấn bắt sáng tự nhiên tại sống mũi, gò má, cằm và trán. |

### 3. Tông màu da & trang điểm

| Nút bấm | Mã lệnh | Tác vụ |
|---|---|---|
| **Màu tổng** | `BTNPFSD2` | Cân bằng sắc độ da toàn diện, khắc phục da loang màu hoặc lệch tone. |
| **Màu Da** | `TC` | Áp dụng bảng màu da chuẩn, tạo vẻ rạng rỡ và hồng hào tự nhiên. |
| **Giảm Vàng** | `FSJH` | Loại bỏ sắc tố vàng dư thừa do ánh sáng môi trường không chuẩn. |
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
| **Camera Raw** | `DKACR` | Khởi chạy trực tiếp bộ lọc Adobe Camera Raw. |
| **Chi tiết** | `PP_DETAIL` | Tách chi tiết High Pass trên layer độc lập để tăng độ trong của ảnh. |
| **Chữ / Logo** | `WM` | Hộp thoại đóng dấu bản quyền hoặc gắn logo thương hiệu hàng loạt. |

> **Ghi chú:** 31 chức năng cũ không còn khả dụng (Tần số 8/16, Tần số, Frequency, Lấy mẫu, Chọn Mắt,
> Mặt nạ da, Sửa mắt, Lớp xám, Mặt Nạ, Bóng Vàng, Khử Vàng, Phai màu, Trừ vàng, Nền trắng, Nền ấm,
> Cổ điển, Tranh Vẽ, Vải dệt, Ẩn kết cấu, Sọc, Làm mờ, Hoa mai, Hoa Sen, Trang Trí, Nét mềm, Đảo vùng,
> Gộp lớp, Vật liệu, Lật ngang, Bột tươi, Phim TL) cùng thanh công cụ icon đã bị **gỡ bỏ hoàn toàn**
> khỏi giao diện và khỏi mã nguồn.

---

## Tiện ích Hot Reload & Nạp lại tức thì

Để tối ưu hóa thời gian tùy biến và phát triển, panel tích hợp sẵn cơ chế làm mới mã nguồn mà không cần khởi động lại Photoshop:

### 1. Nút nạp lại nhanh (↻)
Ở góc trên bên phải của giao diện có nút **↻**. Bấm nút này sẽ nạp lại toàn bộ giao diện HTML, định dạng CSS, mã JavaScript điều khiển và các file script ExtendScript (.jsx) từ thư mục cài đặt plugin ngay lập tức. Nút bấm được trang bị cơ chế bảo vệ: không ngắt quãng các lệnh xử lý đang chạy dang dở.

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
│   └── panel.js             # Cầu nối điều khiển giao tiếp Panel ↔ Photoshop
├── jsx/
│   ├── 4.jsxbin             # Hộp thoại Chữ / Logo (WM)
│   ├── main.jsx             # 8 hàm lõi còn dùng: GGXS, TJSH, JMXS, TJYY, FSJH, MBPF, ZCZQ, DKACR
│   ├── mhk-replacements.jsx # Hào Quang, Hạt phim, Hạt thô, Chấm, Chi tiết
│   ├── Photoshop.jsx        # Tiện ích Crash Bug Fix (chạy khi mở panel)
│   ├── pj/                  # Tài nguyên cọ vẽ (.tpl) và bộ hoa văn (.pat)
│   └── *.jsx                # Module chuyên biệt còn dùng: ds, ba, se, ls, ss, re, db, sh, li, tc, wt, pfsd2
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

---

*Phát triển và tối ưu hóa cho cộng đồng nhiếp ảnh và đồ họa chuyên nghiệp.*
