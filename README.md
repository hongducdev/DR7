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
- **Hỗ trợ toàn diện chủ đề Photoshop**: Tự động nhận diện và đồng bộ màu sắc theo 4 mức độ giao diện của Photoshop (*Tối nhất, Tối, Sáng, Sáng nhất*), kèm hiệu ứng rê chuột (hover) và tiêu điểm (focus) rõ ràng.
- **Xử lý ảnh không phá hủy (Non-destructive)**: Mọi thao tác đều sinh layer, mask hoặc adjustment layer riêng biệt, dễ dàng tinh chỉnh Opacity, Blend Mode hoặc đảo ngược bất cứ lúc nào.
- **Hỗ trợ ảnh RGB 8-bit và 16-bit**: Thuật toán tách tần số và xử lý màu sắc vận hành chính xác trên cả định dạng ảnh tiêu chuẩn và ảnh chất lượng cao.
- **Hiệu năng cao & Bảo mật**: Vận hành hoàn toàn cục bộ trên nền tảng chuẩn Adobe CEP + ExtendScript, không phụ thuộc thư viện ngoài nặng nề, không gửi dữ liệu qua mạng.
- **Bộ hoa văn độc quyền**: Tích hợp sẵn bộ 8 mẫu pattern chất liệu độc quyền phục vụ tạo hạt phim, kết cấu vải, chi tiết hạt da và trang trí nghệ thuật.

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

## Bảng chức năng & Hệ thống công cụ

Bảng điều khiển **MHK DR7** được tổ chức khoa học thành các nhóm tác vụ theo trình tự xử lý ảnh thực tế:

```
┌────────────────────────────────────────────────────────┐
│                        MHK DR7                         │
├────────────────────────────────────────────────────────┤
│ [↻ Nạp lại]                         [Biểu tượng logo] │
│ ────────────────────────────────────────────────────── │
│ [Cọ] [Nhặt mụn] [Nhặt mụn] [Nhặt mụn] [Chấm] [Chấm]   │
│ [Cọ trộn] [Thu Phóng] [So Sánh] [Mặt nạ] [Lùi] [Tiến] │
│ [Fit gốc] [Làm mờ] [Hóa lỏng] [Tối] [Trung tính] [Sáng]│
│ ────────────────────────────────────────────────────── │
│ [ Làm Da V5.0 ]                                        │
│ [ Hàng loạt ] [ Tự động ]                              │
│ [ Chữ / Logo ] [ Tần số 8/16 ]                         │
│ [ Làm mịn ] [ Lẫn mịn ] [ Tẩy lông ]                   │
│ [ Tần số ] [ Frequency ] [ Đánh Khối ]                 │
│ [ Lấy mẫu ] [ Chọn Mắt ]                               │
│ [ Mặt nạ da ] [ Sửa mắt ]                              │
│ [ Làm nét ] [ Liquify ] [ Lớp xám ]                    │
│ [ Highlight ] [ Mặt Nạ ] [ Phủ phấn ]                  │
│ [ Lông Mi ] [ Bóng Mắt ] [ Bóng Vàng ]                 │
│ [ Màu tổng ] [ Màu Da ]                                │
│ [ Giảm Vàng ] [ Trắng Da ]                             │
│ [ Trắng Răng ] [ Son Môi ] [ Khử Vàng ]                │
│ [ Phai màu ] [ Hào Quang ] [ Trừ vàng ]                │
│ [ Hạt phim ] [ Nền trắng ] [ Nền ấm ]                  │
│ [ Camera Raw ] [ Chi tiết ]                            │
│ [ Cổ điển ] [ Tranh Vẽ ]                               │
│ [ Vải dệt ] [ Hạt thô ] [ Ẩn kết cấu ]                 │
│ [ Sọc ] [ Chấm ] [ Làm mờ ]                            │
│ [ Hoa mai ] [ Hoa Sen ] [ Trang Trí ]                  │
│ [ Nét mềm ] [ Đảo vùng ]                               │
│ [ Gộp lớp ] [ Vật liệu ] [ Lật ngang ]                 │
│ [ Bột tươi ] [ Phim TL ]                               │
└────────────────────────────────────────────────────────┘
```

### 1. Thanh công cụ thao tác nhanh

Bao gồm các công cụ chọn lọc và điều hướng thường dùng trong quá trình chỉnh sửa:

| Công cụ | Mã lệnh | Tác vụ |
|---|---|---|
| **Cọ (Brush)** | `BR` | Kích hoạt công cụ vẽ cọ tiêu chuẩn với thiết lập phù hợp. |
| **Nhặt mụn (Spot Healing)** | `SP` / `HB` / `PA` | Nhặt khuyết điểm, xóa hạt bụi, mụn nhỏ tức thì. |
| **Chấm mụn (Clone Stamp)** | `CL` / `PC` | Lấy mẫu vùng da lân cận để che phủ vết thâm, nốt ruồi. |
| **Cọ trộn màu (Mixer Brush)** | `MIXER` | Kích hoạt cọ trộn màu đặc biệt hỗ trợ pha màu da mịn màng. |
| **Thu Phóng (Zoom)** | `ZO` | Phóng to / thu nhỏ khung nhìn tài liệu. |
| **So Sánh (Before/After)** | `DV` | Bật/tắt hiển thị trạng thái ảnh gốc để đánh giá hiệu quả chỉnh sửa. |
| **Mặt nạ lớp (Layer Mask)** | `VW` | Tạo hoặc chuyển đổi nhanh chế độ xem mặt nạ lớp. |
| **Lùi / Tiến (Undo / Redo)** | `BW` / `FW` | Hoàn tác hoặc đi tiếp một bước trong lịch sử thao tác. |

### 2. Lựa chọn vùng sáng tối (Tone Selection)

| Nút bấm | Mã lệnh | Mô tả |
|---|---|---|
| **Fit gốc** | `BTNFIT` | Đưa khung nhìn tài liệu về kích thước chuẩn vừa vặn màn hình. |
| **Làm mờ** | `BTNFADE` | Giảm độ gắt của thao tác vừa thực hiện (Fade). |
| **Hóa lỏng** | `BTNLIQ` | Mở nhanh công cụ Liquify để nắn chỉnh hình thể và khuôn mặt. |
| **Lựa chọn phần tối** | `BTNDARK` | Tự động tải vùng chọn các vùng tối (Shadows) trên ảnh. |
| **Lựa chọn trung tính** | `BTNMID` | Tự động tạo vùng chọn vùng sắc độ trung tính (Midtones). |
| **Chọn ánh sáng cao** | `BTNLIGHT` | Tự động tạo vùng chọn vùng sáng mạnh (Highlights). |

### 3. Xử lý và làm mịn da chuyên sâu

| Chức năng | Mô tả chi tiết |
|---|---|
| **Làm Da V5.0** | Quy trình làm mịn da thông minh thế hệ mới, làm đều vùng da sần sùi mà không làm mờ lỗ chân lông hay mất kết cấu tự nhiên. |
| **Tần số 8/16** | Hộp thoại chọn phương pháp tách tần số (Frequency Separation) tùy chọn theo độ sâu màu 8-bit hoặc 16-bit, hỗ trợ làm mịn bề mặt da và xử lý ánh sáng riêng biệt. |
| **Tần số / Frequency** | Tạo tự động bộ 2 layer Tần số cao (High Frequency - Kết cấu chi tiết) và Tần số thấp (Low Frequency - Màu sắc và tone màu). |
| **Làm mịn / Lẫn mịn** | Làm mịn da bề mặt nhanh chóng, kết hợp làm mờ quang học tự nhiên. |
| **Tẩy lông** | Xóa sạch lông tơ, sợi tóc con vướng trên trán, má hoặc cằm. |
| **Lấy mẫu & Mặt nạ da** | Lấy mẫu vùng da đại diện (`Lấy mẫu`), sau đó tự động tạo vùng chọn phủ khắp da mặt (`Mặt nạ da`) để tinh chỉnh đồng bộ. |
| **Tự động / Hàng loạt** | Chế độ làm đẹp tự động tối ưu hóa nhiều bước chỉ với một cú nhấp chuột hoặc xử lý hàng loạt theo thông số lưu trữ. |

### 4. Đánh khối & Định hình ánh sáng (Dodge & Burn)

| Chức năng | Mô tả chi tiết |
|---|---|
| **Đánh Khối** | Tạo tự động nhóm layer Dodge & Burn (Sáng / Tối) kèm đường cong Curves và mặt nạ đen, sẵn sàng để quét sáng/tối tạo khối gương mặt. |
| **Lớp xám** | Tạo layer 50% Neutral Gray hòa trộn Soft Light để chỉnh khối bằng cọ trắng/đen thủ công. |
| **Highlight** | Tạo điểm nhấn bắt sáng tự nhiên tại sống mũi, gò má, cằm và trán. |
| **Mặt Nạ** | Tạo và quản lý mặt nạ chỉnh sửa ánh sáng chuyên biệt. |
| **Phủ phấn** | Giảm độ bóng nhờn, tạo hiệu ứng da phủ phấn mịn màng như trang điểm thực tế. |

### 5. Cân bằng và hiệu chỉnh tông màu da

| Chức năng | Mô tả chi tiết |
|---|---|
| **Màu tổng** | Cân bằng sắc độ da toàn diện, khắc phục tình trạng da bị loang màu hoặc lệch tone sáng tối. |
| **Màu Da** | Áp dụng bảng màu da chuẩn, tạo vẻ rạng rỡ và hồng hào tự nhiên. |
| **Giảm Vàng / Khử Vàng / Trừ Vàng** | Bộ 3 giải pháp loại bỏ sắc tố vàng dư thừa do ánh đèn sân khấu hoặc ánh sáng môi trường không chuẩn. |
| **Trắng Da** | Nâng tone sáng trong trẻo cho làn da mà vẫn giữ nguyên chi tiết khối. |

### 6. Chi tiết chân dung & Trang điểm

| Bộ phận | Chức năng có sẵn |
|---|---|
| **Mắt & Lông mi** | `Chọn Mắt`, `Sửa mắt` (tăng độ long lanh, làm rõ con ngươi), `Lông Mi` (tăng độ dày và nét của hàng mi), `Bóng Mắt` (tạo khối mí mắt), `Bóng Vàng` (tạo nhũ ánh vàng). |
| **Nụ cười & Răng** | `Trắng Răng` (loại bỏ ố vàng trên men răng, tăng độ trắng sáng tự nhiên chỉ với vài đường quét cọ). |
| **Môi** | `Son Môi` (tô sắc môi tự nhiên, hỗ trợ chọn lựa và tùy biến sắc độ môi dễ dàng). |
| **Độ nét & Tóc** | `Làm nét` (tăng chi tiết tóc và đường viền chân dung), `Nét mềm` (làm nét êm dịu, không bị hạt gai). |

### 7. Hiệu ứng nghệ thuật, Nền & Hoa văn kết cấu (Textures)

Panel tích hợp bộ tạo hiệu ứng hoàn thiện ảnh không phụ thuộc file rời bên ngoài:

- **Bộ lọc màu & Ánh sáng**:
  - `Phai màu`: Giảm độ bão hòa tinh tế, tạo chất ảnh nghệ thuật nhẹ nhàng.
  - `Hào Quang`: Tạo lớp hòa trộn Screen phủ ánh sáng huyền ảo ấm áp.
  - `Cổ điển`: Tông màu phim hoài niệm kết hợp hạt mịn.
  - `Tranh Vẽ`: Tách nét nghệ thuật phác thảo.
  - `Bột tươi` / `Phim TL`: Tông màu ảnh tư liệu và màu tươi tắn điện ảnh.
  - `Chi tiết`: Tách chi tiết High Pass trên layer độc lập để tăng độ trong của bức ảnh.
- **Lớp nền Studio**:
  - `Nền trắng`: Thêm lớp nền trắng tinh khiết phía dưới ảnh (hiển thị trên các vùng tách nền trong suốt).
  - `Nền ấm`: Thêm lớp nền be màu ấm áp sang trọng.
- **Hệ thống 8 hoa văn kết cấu (MHK Patterns)**:
  - `Hạt phim` (Grain)
  - `Vải dệt` (Weave)
  - `Hạt thô` (Coarse)
  - `Sọc` (Lines)
  - `Chấm` (Dots)
  - `Hoa mai` (Blossom)
  - `Hoa Sen` (Lotus)
  - `Trang Trí` (Stars)
  - `Ẩn kết cấu`: Ẩn/hiện nhanh tất cả các layer kết cấu đã tạo mà không cần xóa layer.

### 8. Tiện ích quy trình làm việc

- **Camera Raw**: Khởi chạy trực tiếp bộ lọc Adobe Camera Raw Filter để chỉnh sửa thông số sâu.
- **Chữ / Logo**: Hộp thoại đóng dấu bản quyền hoặc gắn logo thương hiệu hàng loạt.
- **Đảo vùng**: Đảo ngược vùng chọn đang hoạt động (`Inverse Selection`).
- **Gộp lớp**: Tạo một bản sao gộp tất cả các layer hiển thị lên trên cùng (`Stamp Visible - Ctrl+Alt+Shift+E`).
- **Vật liệu**: Hộp thoại nạp nhanh tài nguyên họa tiết hoặc ảnh nền từ máy tính.
- **Lật ngang**: Lật ngang khung hình để kiểm tra tỉ lệ và đối xứng của gương mặt (`Flip Horizontal`).

---

## Tiện ích Hot Reload & Nạp lại tức thì

Để tối ưu hóa thời gian tùy biến và phát triển, panel tích hợp sẵn cơ chế làm mới mã nguồn mà không cần khởi động lại Photoshop:

### 1. Nút nạp lại nhanh (↻)
Ở góc trên cùng bên trái của giao diện có nút **↻**. Bấm nút này sẽ nạp lại toàn bộ giao diện HTML, định dạng CSS, mã JavaScript điều khiển và các file script ExtendScript (.jsx) từ thư mục cài đặt plugin ngay lập tức. Nút bấm được trang bị cơ chế bảo vệ: không ngắt quãng các lệnh xử lý đang chạy dang dở.

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
│   ├── layout.css           # Bố cục lưới responsive 3 cột & hệ thống cuộn dọc
│   ├── icons.css            # Định dạng nền trong suốt và hiệu ứng tương tác của nút icon
│   └── style.css            # Kiểu dáng màu sắc các nút tác vụ
├── js/
│   ├── CSInterface.js       # Thư viện giao tiếp Adobe CEP tiêu chuẩn
│   ├── panel.js             # Cầu nối điều khiển giao tiếp Panel ↔ Photoshop
│   └── pp.js                # Xử lý các hiệu ứng nền, kết cấu và cọ vẽ đặc biệt
├── jsx/
│   ├── main.jsx             # Đăng ký các hàm thực thi cốt lõi của panel
│   ├── mhk-replacements.jsx # Triển khai các thuật toán hiệu ứng và bộ lọc độc quyền
│   ├── Photoshop.jsx        # Các hàm tiện ích tương tác với đối tượng Photoshop DOM
│   ├── pj/                  # Tài nguyên cọ vẽ (.tpl) và bộ 8 hoa văn độc quyền (.pat)
│   └── *.jsx                # Các module xử lý tác vụ chuyên biệt
├── img/                     # Biểu tượng panel và hình ảnh giao diện theo từng theme
├── assets/                  # Biểu tượng nút công cụ bổ trợ
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
- **Cách xử lý**: Nhấp vào nút **↻** ở góc trên cùng bên trái của panel để tải lại toàn bộ tài nguyên tức thì.

---

*Phát triển và tối ưu hóa cho cộng đồng nhiếp ảnh và đồ họa chuyên nghiệp.*
