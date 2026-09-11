# PRD: TỐI ƯU & REDESIGN LANDING PAGE ZERO TO AI
**Target Domain:** `landing-02ai.vercel.app`  
**Conversion Goal:** Skool Membership ($9/tháng) + Thu Lead Email ("The Realism Cheat Sheet")  
**Tech Stack:** HTML5 tĩnh thuần, Vanilla CSS, Vanilla JavaScript, `i18n.js`  

---

## 1. NGUYÊN TẮC THI CÔNG BẰNG AI (ANTI-HALLUCINATION PROTOCOL)

1. **Một Prompt - Một Task:** Tuyệt đối không gộp nhiều task vào một prompt. Mỗi task được thiết kế để chỉ chỉnh sửa 1 đến 2 file cục bộ.
2. **Không đổi Tech Stack:** Không thêm React, Vue, Tailwind CDN, hay framework phức tạp. Giữ nguyên thuần HTML/CSS/JS để đảm bảo tốc độ và tính ổn định.
3. **Giữ nguyên i18n Structure:** Mọi chuỗi text mới thêm vào HTML đều phải có attribute `data-i18n="key"` tương ứng và được khai báo song ngữ (EN/VI) trong `assets/i18n.js`.
4. **Quy tắc Kiểm thử trước khi chuyển Task:** Chạy lệnh kiểm tra hoặc test trực quan theo đúng tiêu chuẩn nghiệm thu của từng task trước khi đánh dấu hoàn thành.

---

## 2. LỘ TRÌNH TRIỂN KHAI TỔNG QUAN

| Giai đoạn | Mục tiêu | Số lượng task |
|---|---|---|
| **Phase 1** | Sửa lỗi nội dung, pháp lý & số liệu mâu thuẫn | 3 Tasks (1.1 → 1.3) |
| **Phase 2** | Tích hợp Tracking Pixel & Phễu thu Lead Email | 3 Tasks (2.1 → 2.3) |
| **Phase 3** | Tái cấu trúc Layout & Trải nghiệm Mobile | 4 Tasks (3.1 → 3.4) |
| **Phase 4** | Tối ưu bản địa hóa thị trường VN & Bổ sung Content | 3 Tasks (4.1 → 4.3) |
| **Phase 5** | Hiệu năng, Asset WebP/SVG, SEO & Accessibility | 4 Tasks (5.1 → 5.4) |

---

## 3. CHI TIẾT TỪNG ATOMIC TASK

---

### PHASE 1: SỬA LỖI NỘI DUNG, PHÁP LÝ & SỐ LIỆU MÂU THUẪN

#### Task 1.1: Khắc phục mâu thuẫn số liệu Value Stack & Sửa link CTA
* **Mục tiêu:** Đồng nhất toàn bộ số liệu định giá, loại bỏ con số gây hiểu nhầm "$497+" bên cạnh "$943+", sửa các nút CTA nhảy nhầm vào bảng giá.
* **Files ảnh hưởng:** `index.html`, `assets/i18n.js`
* **Nghiệp vụ chi tiết:**
  1. Kiểm tra section `#pricing` và bảng Value Stack:
     - Giá trị các gói: 197 + 150 + 497 + 99 = **$943**.
     - Xóa triệt để nhãn text *"Market Value of Equivalent Training: $497+"* hoặc đổi thành chuẩn: *"Tổng giá trị tài nguyên & khóa học: $943"*.
     - Giữ nguyên neo giá: Khách hàng chỉ trả **$9/tháng**.
  2. Sửa các nút CTA điều hướng sai:
     - Các nút như *"See ad workflows →"* hoặc *"Discover cloning tech →"* hiện tại đang trỏ tới `#pricing` gây cảm giác "mồi chài". Đổi hướng trỏ tới đúng section tương ứng (ví dụ `#workflow` hoặc mở modal xem mẫu) hoặc đổi label nút cho đúng bản chất: *"Unlock in 9-Phase Roadmap →"* trỏ tới `#roadmap`.
* **Tiêu chuẩn nghiệm thu (Acceptance Criteria):**
  - Không còn bất kỳ vị trí nào hiển thị đồng thời cả hai số $497 và $943 gây đá nhau.
  - Phép tính tổng value trong bảng Value Stack chính xác 100%.
  - Click vào mọi nút CTA đều cuộn đến đúng section khớp với nội dung nhãn nút.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy mở file index.html và assets/i18n.js để xử lý Task 1.1:
> 1. Tìm section value stack và pricing: Thống nhất tổng giá trị là $943 (197 + 150 + 497 + 99). Xóa nhãn "$497+" gây mâu thuẫn số liệu.
> 2. Rà soát tất cả các thẻ <a> hoặc button có nhãn "See ad workflows", "Discover cloning tech" và sửa href từ #pricing thành #roadmap hoặc section phù hợp với nội dung nhãn.
> 3. Cập nhật cả key tiếng Anh và tiếng Việt trong assets/i18n.js tương ứng.
> Đảm bảo không làm thay đổi layout CSS khác.
> ```

---

#### Task 1.2: Loại bỏ tên & nhãn hiệu bên thứ ba (Nike, BMW, Bentley)
* **Mục tiêu:** Xóa bỏ toàn bộ rủi ro bản quyền và tránh bị Meta Ads từ chối duyệt quảng cáo vì nhắc tên thương hiệu quốc tế.
* **Files ảnh hưởng:** `index.html`, `assets/i18n.js`
* **Nghiệp vụ chi tiết:**
  1. Tìm kiếm toàn bộ các từ khóa: `Nike`, `BMW`, `Bentley`, `Apple`, `Marvel/superhero` trong `index.html` và `assets/i18n.js`.
  2. Thay thế bằng các thuật ngữ định vị thương mại trung tính nhưng vẫn giữ được độ sang trọng/chuyên nghiệp:
     - *"Nike TVC style"* → *"High-End Sportswear Commercial Concept"* (Concept TVC phong cách thể thao cao cấp)
     - *"BMW automotive ad"* → *"Luxury Automotive Commercial Render"* (TVC xe hơi hạng sang)
     - *"Bentley mockup"* → *"Premium Luxury Brand Concept"*
  3. Kiểm tra các ảnh mô phỏng có logo rõ nét của các hãng trên: làm mờ logo hoặc thay bằng concept trừu tượng.
* **Tiêu chuẩn nghiệm thu:**
  - Lệnh `grep -iE "nike|bmw|bentley" index.html assets/i18n.js` trả về 0 kết quả.
  - Văn phong sau thay thế vẫn toát lên chất lượng cao cấp chuẩn quảng cáo thương mại.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 1.2:
> 1. Quét toàn bộ index.html và assets/i18n.js để tìm các từ: Nike, BMW, Bentley.
> 2. Thay thế bằng các thuật ngữ mô tả thể loại quảng cáo cao cấp không vi phạm bản quyền (ví dụ: "Luxury Automotive Commercial", "High-End Athletic Brand TVC", "Premium Lifestyle Commercial").
> 3. Cập nhật đồng bộ cả bản tiếng Anh và bản dịch tiếng Việt trong assets/i18n.js.
> Giữ nguyên các class và cấu trúc HTML xung quanh.
> ```

---

#### Task 1.3: Dọn dẹp Showcase & Căn chỉnh công cụ đúng giáo trình
* **Mục tiêu:** Khắc phục lỗi dùng video trùng lặp và loại bỏ các công cụ không có trong giáo trình (*Runway Gen-3, Luma Dream Machine*).
* **Files ảnh hưởng:** `index.html`, `assets/i18n.js`
* **Nghiệp vụ chi tiết:**
  1. Rà soát `#showcase`:
     - Hiện tại các thẻ sản phẩm đang dùng lại `level-1.mp4`, `level-2.mp4`, `level-3.mp4`, `hero.mp4` nhưng dán nhãn sai.
     - Xóa bỏ việc nhắc đến *Runway Gen-3* và *Luma Dream Machine* khỏi nhãn Showcase.
     - Thay bằng đúng các công cụ cốt lõi được dạy trong 9 Phase: **Kling AI (v1.5 / 3.0), Midjourney v6.1, Flux.1, Seedance, HeyGen, Nanobanana, CapCut Pro**.
  2. Với các video chưa có asset độc lập: chuyển sang dạng ảnh tĩnh chất lượng cao (WebP) hoặc dùng video loop ngắn khớp đúng nội dung label.
* **Tiêu chuẩn nghiệm thu:**
  - Nhãn hiển thị của các sản phẩm mẫu khớp 100% với danh sách công cụ trong giáo trình 9 Phase.
  - Không còn thẻ Showcase nào dán nhãn Runway hay Luma.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 1.3 trên file index.html và assets/i18n.js:
> 1. Kiểm tra section #showcase. Loại bỏ toàn bộ nhãn nhắc tới "Runway Gen-3" và "Luma Dream Machine".
> 2. Thay đổi nhãn các tác phẩm showcase sao cho phản ánh đúng các công cụ được giảng dạy trong giáo trình Zero To AI: Kling AI, Flux.1, Midjourney v6.1, Seedance, HeyGen.
> 3. Cập nhật các key i18n tương ứng trong assets/i18n.js.
> ```

---

### PHASE 2: TRACKING, PHỄU & LEAD CAPTURE

#### Task 2.1: Tích hợp chuẩn Meta Pixel, GA4 & Custom Tracking Events
* **Mục tiêu:** Đo lường chuyển đổi chính xác cho chiến dịch chạy quảng cáo Facebook Ads, tạo tệp Custom Audience / Retargeting.
* **Files ảnh hưởng:** `index.html` (thêm script vào `<head>` và sự kiện click ở script cuối trang)
* **Nghiệp vụ chi tiết:**
  1. Đặt đoạn script Meta Pixel và GA4 placeholder chuẩn (hỗ trợ đọc Pixel ID từ biến config hoặc chèn sẵn mã chuẩn chờ điền ID):
     ```html
     <!-- Meta Pixel Code Placeholder -->
     <script>
       !function(f,b,e,v,n,t,s){...}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
       fbq('init', 'YOUR_PIXEL_ID');
       fbq('track', 'PageView');
     </script>
     ```
  2. Gắn sự kiện theo dõi hành vi:
     - Khi user click bất kỳ nút nào dẫn tới link Skool (`skool.com/zerotoai`): kích hoạt `fbq('track', 'InitiateCheckout', {value: 9.00, currency: 'USD'});`
     - Khi user gửi form nhận Lead Magnet (email): kích hoạt `fbq('track', 'Lead');`
  3. Thêm tham số UTM passthrough: Giữ lại các tham số `utm_source`, `utm_campaign`, `fbclid` khi redirect sang link checkout Skool.
* **Tiêu chuẩn nghiệm thu:**
  - Mở trang, `fbq('track', 'PageView')` được gọi mà không có lỗi console.
  - Click vào nút chuyển sang Skool, sự kiện `InitiateCheckout` được gọi với đúng payload.
  - Không làm chậm tốc độ tải trang (dùng `async` / `defer`).

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 2.1 trên file index.html:
> 1. Chèn template Meta Pixel & Google Analytics (GA4) vào thẻ <head>, có sẵn biến cấu hình META_PIXEL_ID và GA_MEASUREMENT_ID ở đầu để người dùng dễ điền ID.
> 2. Viết hàm JavaScript gắn listener vào tất cả các nút bấm dẫn đến Skool (class .btn-skool hoặc href chứa skool.com) để bắn event fbq('track', 'InitiateCheckout', {currency: 'USD', value: 9.00}).
> 3. Đảm bảo script được tối ưu async/defer và không sinh lỗi khi chưa có ID thật.
> ```

---

#### Task 2.2: Xây dựng Module Form Thu Email (Lead Magnet "The Realism Cheat Sheet")
* **Mục tiêu:** Tạo nhánh hứng lead cho 97–99% traffic chưa sẵn sàng mua ngay, đổi email lấy "The Realism Cheat Sheet 1-Page PDF".
* **Files ảnh hưởng:** `index.html`, `assets/i18n.js`, CSS nội bộ
* **Nghiệp vụ chi tiết:**
  1. Thiết kế 1 Block Form thu Email đặt ở giữa trang (dưới Section Before/After hoặc Vault):
     - Tiêu đề: *"Chưa sẵn sàng tham gia? Nhận ngay The Realism Cheat Sheet (1 Trang PDF Miễn Phí)"*.
     - Mô tả: Bộ công thức prompt loại bỏ hoàn toàn độ nhựa (de-plasticizing) và cân chỉnh góc ống kính (35mm/50mm/85mm) dùng được ngay cho Midjourney & Kling.
     - Trường nhập: Email + Nút *"Gửi tài liệu cho tôi"*.
  2. Tích hợp Exit-Intent Popup (chỉ hiện trên desktop khi trỏ chuột rời màn hình hoặc sau khi cuộn 60% trên mobile nếu chưa điền email).
  3. Xử lý lưu trữ: Form submit gọi webhook (Google Sheet Apps Script hoặc Zapier/Make URL có thể cấu hình) và hiển thị thông báo thành công (Flash notification) không reload trang.
  4. Bắn event `fbq('track', 'Lead')` khi submit thành công.
* **Tiêu chuẩn nghiệm thu:**
  - Form có validate email hợp lệ.
  - Hiển thị mượt mà trên cả desktop và mobile (375px), không bị bể layout.
  - Submit xong hiển thị state thành công, reset form và lưu cờ `localStorage.setItem('lead_captured', 'true')` để không spam popup.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 2.2:
> 1. Thêm một block Form thu Email tặng "The Realism Cheat Sheet" vào vị trí giữa trang trong index.html.
> 2. Tạo popup exit-intent đơn giản, thanh lịch, có nút đóng và tự động ẩn nếu người dùng đã đăng ký.
> 3. Viết JS validate email, hiển thị trạng thái loading/success, bắn sự kiện fbq('track', 'Lead') và gửi dữ liệu qua một endpoint webhook cấu hình được.
> 4. Thêm đầy đủ nhãn song ngữ data-i18n vào assets/i18n.js. Style CSS dark mode chuẩn tone của landing page.
> ```

---

#### Task 2.3: Tạo Modal / Trang Điều Khoản & Chính Sách Hủy Thật
* **Mục tiêu:** Thay thế các link giả trỏ về `#faq` ở footer bằng nội dung chính sách thực tế để phục vụ duyệt quảng cáo Meta và tạo niềm tin.
* **Files ảnh hưởng:** `index.html`, `assets/i18n.js` (hoặc tạo modal popup nội bộ)
* **Nghiệp vụ chi tiết:**
  1. Các link ở footer: `Terms of Service` (Điều khoản), `Cancellation Policy` (Chính sách hủy), `Privacy Policy` (Bảo mật).
  2. Xây dựng một Modal nội bộ (Accessible Dialog Modal) trên trang để khi click vào các link này, hiển thị văn bản điều khoản minh bạch thay vì nhảy loạn trang:
     - **Chính sách hủy:** Hủy bất cứ lúc nào chỉ với 1 click ngay trong tài khoản Skool, không ràng buộc hợp đồng.
     - **Điều khoản & Hoàn tiền:** Cam kết bảo hành trải nghiệm 7 ngày (nếu không hài lòng, nhắn admin hỗ trợ).
     - **Bảo mật:** Không bán thông tin, chỉ dùng gửi tài liệu học tập.
* **Tiêu chuẩn nghiệm thu:**
  - Không còn bất kỳ link footer nào có `href="#faq"` hoặc `href="#"`.
  - Bấm vào mở modal xem được nội dung chi tiết, có nút đóng (X) và bấm ra ngoài để đóng.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 2.3 trên index.html:
> 1. Xây dựng một Modal popup CSS/JS thuần cho các văn bản pháp lý ở Footer (Terms of Service, Cancellation Policy, Privacy Policy).
> 2. Cập nhật các liên kết footer để mở đúng tab nội dung trong modal.
> 3. Soạn thảo nội dung pháp lý ngắn gọn, trung thực, chuẩn chính sách membership Skool và chống hype. Thêm text i18n song ngữ vào assets/i18n.js.
> ```

---

### PHASE 3: TÁI CẤU TRÚC LAYOUT & TRẢI NGHIỆM MOBILE

#### Task 3.1: Đẩy Slider Before/After lên ngay dưới Hero Section
* **Mục tiêu:** Cung cấp bằng chứng thuyết phục trực quan nhất ngay trong 30 giây đầu tiên của khách truy cập.
* **Files ảnh hưởng:** `index.html`
* **Nghiệp vụ chi tiết:**
  1. Cắt toàn bộ khối Before/After Comparison Slider từ vị trí cũ (đang nằm tít dưới mốc 65% độ sâu trang).
  2. Đặt vào ngay dưới Section Hero (hoặc ngay dưới Manifesto ngắn).
  3. Kiểm tra script điều khiển thanh kéo slider: đảm bảo tọa độ touch event trên mobile vẫn hoạt động mượt mà sau khi đổi vị trí DOM.
* **Tiêu chuẩn nghiệm thu:**
  - Slider Before/After xuất hiện ngay khi user cuộn qua Hero (vị trí màn hình thứ 2).
  - Thanh kéo so sánh tương tác mượt mà bằng cả chuột và cảm ứng tay trên điện thoại.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 3.1:
> Trong index.html, hãy di chuyển toàn bộ khối Comparison Slider (Before/After) lên vị trí ngay sau Section Hero.
> Kiểm tra lại logic JS của slider để đảm bảo sự kiện kéo (drag/touch) hoạt động ổn định ở vị trí mới mà không bị lỗi tọa độ DOM.
> ```

---

#### Task 3.2: Rút gọn Roadmap 9 Phase thành Accordion 3 Stage
* **Mục tiêu:** Cắt giảm độ dài trang trên mobile từ 10.6 màn hình (8.605 px) xuống còn ~3 màn hình, tránh tình trạng user bỏ trang vì mỏi tay cuộn.
* **Files ảnh hưởng:** `index.html`, style CSS trong file hoặc stylesheet tương ứng
* **Nghiệp vụ chi tiết:**
  1. Nhóm 9 Phase thành 3 Stage chuẩn:
     - **Stage 1: Foundation & De-Plasticizing (Phase 1 → 3)**
     - **Stage 2: Motion, Camera & Cinematic Audio (Phase 4 → 6)**
     - **Stage 3: Monetization & Commercial Pipelines (Phase 7 → 9)**
  2. Xây dựng giao diện Accordion:
     - Desktop: Có thể để dạng thẻ tóm tắt hoặc tab.
     - Mobile: Mặc định Stage 1 mở hé (Phase 1 mở chi tiết làm mẫu), Stage 2 và 3 gập lại. Khi bấm vào header của Stage nào thì toggle mở rộng nội dung của Stage đó.
     - Thêm icon mũi tên chỉ báo trạng thái gập/mở có animation xoay chuyển mượt mà.
* **Tiêu chuẩn nghiệm thu:**
  - Chiều dài section Roadmap trên mobile giảm ít nhất 60% (từ >8.000px xuống dưới 3.000px).
  - Thao tác đóng/mở mượt mà, hỗ trợ bàn phím (Enter/Space) và thuộc tính `aria-expanded`.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 3.2 trên index.html:
> 1. Tái cấu trúc section #roadmap 9 Phase thành Accordion 3 Stage: Stage 1 (Phases 1-3), Stage 2 (Phases 4-6), Stage 3 (Phases 7-9).
> 2. Mặc định chỉ mở Stage 1, Stage 2 và Stage 3 ở trạng thái gập.
> 3. Viết CSS và JS toggle đóng/mở nhẹ nhàng, có aria-expanded cho trợ năng.
> 4. Đảm bảo toàn bộ nội dung giáo trình vẫn được giữ đầy đủ khi user click mở ra.
> ```

---

#### Task 3.3: Đẩy Bảng Giá ($9) lên trước mốc 55% Chiều sâu trang
* **Mục tiêu:** Đưa lời chào hàng và mức giá siêu rẻ ($9) tiếp cận người dùng sớm hơn, khi họ còn đang có sự chú ý cao nhất.
* **Files ảnh hưởng:** `index.html`
* **Nghiệp vụ chi tiết:**
  1. Sắp xếp lại thứ tự các Section theo cấu trúc luồng mới:
     ```
     01. Hero
     02. Slider Before/After
     03. The Trap vs The System (Kẻ thù chung)
     04. Who Is It For / Not For (Mới)
     05. 9-Phase Roadmap (Accordion)
     06. Showcase (Sản phẩm thật)
     07. Social Proof & Vmiz Nguyen
     08. Resource Vault + Form nhận Cheat Sheet
     09. PRICING TABLE ($9) <-- Đặt tại đây (~50-55% độ sâu trang)
     10. Build Lab & Level 8 Free Lifetime & Affiliate 40%
     11. FAQ
     12. Final CTA & Footer
     ```
  2. Đo đạc lại vị trí scroll của `#pricing` để đảm bảo user chỉ cần cuộn qua một nửa trang là đã thấy giá rõ ràng.
* **Tiêu chuẩn nghiệm thu:**
  - Section `#pricing` xuất hiện ngay sau khối Resource Vault/Showcase.
  - Tỉ lệ chiều sâu trang trên mobile đạt mốc ~50–55% khi tới đầu bảng giá.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 3.3:
> Trong index.html, hãy điều chỉnh lại thứ tự sắp xếp các section trong thẻ <main> theo cấu trúc luồng chuyển đổi tối ưu:
> Đưa Section #pricing lên ngay sau Section Resource Vault & Lead Magnet, đứng trước Section FAQ và Build Lab.
> Kiểm tra các anchor link trên thanh menu navigation để đảm bảo cuộn tới đúng vị trí.
> ```

---

#### Task 3.4: Fix Header Mobile (375px) & Bổ sung Sticky Bottom CTA Bar
* **Mục tiêu:** Khắc phục lỗi nút CTA header bị cắt mép trên mobile và giữ tỷ lệ chuyển đổi luôn trong tầm tay với Sticky CTA đáy màn hình.
* **Files ảnh hưởng:** `index.html`, CSS
* **Nghiệp vụ chi tiết:**
  1. **Fix Header 375px:**
     - Kiểm tra CSS header trên màn hình có width <= 375px: Nút CTA đang bị tràn sang phải (389px).
     - Thu gọn padding của header, chỉnh cỡ font của nút hoặc chỉ hiện icon + text ngắn: *"Join $9"*, đảm bảo toàn bộ header nằm gọn trong 375px, không sinh thanh cuộn ngang (`overflow-x: hidden`).
  2. **Tạo Sticky Bottom CTA Bar:**
     - Thiết kế thanh bar cố định ở đáy màn hình điện thoại (`position: fixed; bottom: 0; left: 0; right: 0; z-index: 999;`).
     - Giao diện: Gồm giá *"Chỉ $9/tháng"* bên trái + Nút *"Tham gia ngay"* bên phải.
     - Hiệu ứng: Chỉ trượt hiện lên sau khi người dùng đã cuộn qua 30% màn hình Hero, và tự ẩn đi khi cuộn đến đúng section `#pricing` để tránh trùng lặp.
* **Tiêu chuẩn nghiệm thu:**
  - Kiểm tra DevTools ở kích thước 375px × 667px (iPhone SE): không bị tràn ngang dù chỉ 1 pixel.
  - Sticky CTA xuất hiện mượt mà sau khi cuộn xuống và click dẫn thẳng sang link Skool có kèm tracking.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 3.4:
> 1. Sửa lỗi CSS header mobile: ở viewport 375px, căn chỉnh nút CTA và logo để không bị tràn màn hình (giới hạn max-width 100%, không bị x-overflow).
> 2. Thêm một component Sticky CTA ở đáy màn hình mobile (ẩn trên desktop > 768px):
>    - Nội dung: "$9/tháng · Hủy bất kỳ lúc nào" + Nút "Tham gia ngay".
>    - Logic JS: Chỉ xuất hiện sau khi cuộn qua 300px, tự ẩn khi đang xem section #pricing.
>    - Gắn sự kiện InitiateCheckout vào nút này.
> ```

---

### PHASE 4: TỐI ƯU CHO THỊ TRƯỜNG VIỆT NAM & BỔ SUNG CONTENT

#### Task 4.1: Bổ sung Block "Dành cho ai / Không dành cho ai"
* **Mục tiêu:** Lọc đúng đối tượng học viên, giảm tỷ lệ churn và khiếu nại, củng cố định vị "chống ảo tưởng".
* **Files ảnh hưởng:** `index.html`, `assets/i18n.js`
* **Nghiệp vụ chi tiết:**
  1. Thiết kế Section gồm 2 cột đối xứng:
     - **Cột 1 (Dành cho bạn nếu):** Muốn làm chủ quy trình tạo hình ảnh/video AI thương mại chuẩn studio; Người làm sáng tạo, freelancer, marketer muốn tăng x5 tốc độ sản xuất; Người sẵn sàng thực hành và xây dựng sản phẩm thật; Muốn có cộng đồng chia sẻ workflow thực chiến không giấu nghề.
     - **Cột 2 (KHÔNG dành cho bạn nếu):** Tìm kiếm nút bấm một chạm làm giàu qua đêm; Thích xem ảnh chụp màn hình thu nhập ảo; Không muốn bỏ thời gian cài đặt công cụ và rèn luyện; Trông chờ AI làm thay 100% tư duy mỹ thuật và thẩm mỹ đạo diễn.
  2. Thêm attribute `data-i18n` và dịch chuẩn xác cả tiếng Anh và tiếng Việt trong `assets/i18n.js`.
* **Tiêu chuẩn nghiệm thu:**
  - Layout hiển thị đẹp 2 cột trên desktop, tự stack thành 1 cột trên mobile.
  - Icon tích xanh (✓) cho cột phù hợp và gạch chéo đỏ (✕) cho cột không phù hợp.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 4.1:
> Thêm một section mới "Dành cho ai / Không dành cho ai" (Who Is This For / Who Is This NOT For) vào index.html (đặt sau section kẻ thù chung).
> Thiết kế 2 cột tương phản:
> - Cột Xanh: Dành cho người thực chiến, creator, agency, marketer muốn có output thương mại.
> - Cột Đỏ: Không dành cho người lười, tìm kiếm nút bấm làm giàu qua đêm, mê ảnh sao kê ảo.
> Thêm key i18n song ngữ đầy đủ vào assets/i18n.js.
> ```

---

#### Task 4.2: Bổ sung Khối Social Proof (Founder Vmiz Nguyen) & Khối Affiliate 40%
* **Mục tiêu:** Tăng uy tín cá nhân của người dẫn dắt và kích hoạt động lực giới thiệu lan tỏa qua chương trình Affiliate.
* **Files ảnh hưởng:** `index.html`, `assets/i18n.js`
* **Nghiệp vụ chi tiết:**
  1. **Khối Founder & Community Proof:**
     - Ảnh đại diện thật của Vmiz Nguyen + Giới thiệu ngắn về định hướng thực chiến, lý do lập ra Zero To AI.
     - Số liệu cộng đồng (Số lượng thành viên đang hoạt động, số tác phẩm đã nộp trong Skool).
     - Ảnh chụp màn hình thật của giao diện thảo luận bên trong Skool hoặc bảng xếp hạng Level (che mờ thông tin cá nhân nhạy cảm).
  2. **Khối Affiliate 40% (Chia sẻ doanh thu):**
     - Đặt một callout block trong section Build Lab hoặc gần Pricing: *"Nhận 40% hoa hồng trọn đời khi giới thiệu bạn bè tham gia hệ sinh thái Zero To AI"*.
     - Giúp học viên thấy rõ: Chỉ cần giới thiệu 3 người là học phí hoàn toàn miễn phí mỗi tháng.
* **Tiêu chuẩn nghiệm thu:**
  - Bổ sung ảnh đại diện founder và giao diện cộng đồng thật.
  - Khối Affiliate trình bày rõ ràng, tạo động lực tài chính chính đáng cho thành viên.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 4.2:
> 1. Thêm một block giới thiệu Founder (Vmiz Nguyen) cùng hình ảnh minh họa cộng đồng Skool và tinh thần đồng hành thực chiến vào index.html.
> 2. Thêm một block thông báo về cơ chế Affiliate 40% hoa hồng trọn đời cho học viên vào gần khu vực bảng giá.
> 3. Cập nhật các bản dịch i18n tương ứng trong assets/i18n.js.
> ```

---

#### Task 4.3: Bổ sung 4 câu hỏi FAQ bản địa hóa riêng cho Việt Nam
* **Mục tiêu:** Tháo gỡ các rào cản thanh toán và rào cản ngôn ngữ của khách hàng Việt Nam trước khi bấm mua.
* **Files ảnh hưởng:** `index.html`, `assets/i18n.js`
* **Nghiệp vụ chi tiết:**
  Bổ sung thêm 4 câu hỏi vào cụm `#faq`:
  1. **Thanh toán thế nào nếu tôi ở Việt Nam?**  
     *Trả lời:* Skool chấp nhận mọi loại thẻ quốc tế (Visa/Mastercard/JCB) kể cả thẻ ảo từ Techcombank, VPBank, Cake, Timo... Nếu bạn gặp khó khăn khi thanh toán, có hướng dẫn chi tiết từng bước hoặc hỗ trợ trực tiếp.
  2. **Bài học bằng tiếng Anh hay tiếng Việt?**  
     *Trả lời:* Giáo trình và tài liệu gốc được chuẩn hóa theo thuật ngữ quốc tế để bạn làm việc được với khách hàng toàn cầu, kèm hệ thống tóm tắt và hướng dẫn tiếng Việt chi tiết. Cộng đồng thảo luận 100% hỗ trợ tiếng Việt.
  3. **Mỗi tuần tôi cần dành bao nhiêu thời gian?**  
     *Trả lời:* Lộ trình được thiết kế dạng module vi học (micro-learning) 15–30 phút mỗi bài. Bạn chỉ cần 3–5 giờ/tuần để thực hành và hoàn thành 1 phase.
  4. **Nếu tôi không hài lòng thì sao?**  
     *Trả lời:* Bạn có thể hủy gói đăng ký bất cứ lúc nào với 1 cú click trong tài khoản Skool của mình. Không có hợp đồng ràng buộc hay phụ phí ẩn nào.
* **Tiêu chuẩn nghiệm thu:**
  - 4 câu hỏi hiển thị ăn khớp với accordion FAQ hiện tại.
  - Sử dụng thẻ `<details>` hoặc gập mở có thuộc tính trợ năng đầy đủ.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 4.3 trên index.html và assets/i18n.js:
> Bổ sung 4 câu hỏi FAQ mới giải quyết triệt để rào cản người dùng Việt:
> 1. Hướng dẫn thanh toán Skool bằng thẻ Visa/Mastercard tại VN.
> 2. Ngôn ngữ bài học (tiếng Anh chuẩn quốc tế + hỗ trợ hướng dẫn tiếng Việt).
> 3. Thời gian học mỗi tuần (3-5 tiếng).
> 4. Cam kết hủy gói tự do không rủi ro.
> Đảm bảo định dạng chuẩn data-i18n và cập nhật đầy đủ cả EN và VI.
> ```

---

### PHASE 5: HIỆU NĂNG, SEO, ASSET & ACCESSIBILITY

#### Task 5.1: Chuyển đổi WebP/SVG & Giảm tải ban đầu dưới 1 MB
* **Mục tiêu:** Giảm dung lượng tải trang từ 2.8 MB xuống dưới 1 MB, tăng tốc độ mở trang trên mạng 4G di động.
* **Files ảnh hưởng:** Thư mục `assets/`, các thẻ `<img>` trong `index.html`
* **Nghiệp vụ chi tiết:**
  1. Thay thế `assets/logo-full.png` (512 KB) và `logo.png` bằng định dạng **SVG vector** (hoặc WebP nén < 25 KB).
  2. Chuyển đổi `compare-before.jpg` (549 KB) và `compare-after.jpg` (799 KB) sang định dạng **WebP** với chất lượng 82–85% (giảm xuống còn ~100–150 KB/file).
  3. Thêm thuộc tính `loading="lazy"` và `decoding="async"` cho tất cả các thẻ `<img>` nằm ngoài màn hình đầu tiên (below the fold).
* **Tiêu chuẩn nghiệm thu:**
  - Tổng dung lượng ảnh tải trong lần vào trang đầu tiên < 600 KB.
  - Logo sắc nét tuyệt đối trên mọi độ phân giải màn hình Retina.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 5.1:
> 1. Cập nhật các đường dẫn ảnh trong index.html sang định dạng .webp tối ưu (hoặc .svg cho logo).
> 2. Thêm loading="lazy" và decoding="async" cho mọi thẻ <img> nằm dưới Section Hero.
> 3. Kiểm tra đảm bảo ảnh Before/After và các poster video không bị vỡ đường dẫn sau khi đổi đuôi file.
> ```

---

#### Task 5.2: Tối ưu Video Autoplay & Tiết kiệm Pin Mobile
* **Mục tiêu:** Khắc phục tình trạng 9 video cùng autoplay ngốn tài nguyên, giật cuộn và làm nóng máy điện thoại.
* **Files ảnh hưởng:** `index.html`, script quản lý video
* **Nghiệp vụ chi tiết:**
  1. Chỉ giữ tối đa **1 video duy nhất** autoplay loop ở section Hero (hoặc dùng video nhẹ nén < 1.5 MB).
  2. Với các video ở nửa dưới trang (`skool1.mp4`, showcase, level videos):
     - Xóa bỏ thuộc tính `autoplay`.
     - Đặt ảnh `poster="path.webp"`.
     - Chỉ bắt đầu phát khi người dùng cuộn tới gần (IntersectionObserver) hoặc khi người dùng chủ động click nút Play.
* **Tiêu chuẩn nghiệm thu:**
  - Kiểm tra tab Network: không còn hiện tượng tải đồng loạt 11 MB video ngay khi mở trang.
  - Thao tác cuộn trên thiết bị di động đạt 60fps mượt mà.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 5.2 trên index.html:
> 1. Rà soát toàn bộ các thẻ <video> trên trang.
> 2. Bỏ thuộc tính autoplay ở tất cả các video ngoại trừ video Hero.
> 3. Viết một đoạn script nhỏ dùng IntersectionObserver để chỉ load/play video khi container của nó cuộn vào viewport và tự pause khi ra khỏi viewport.
> ```

---

#### Task 5.3: Hỗ trợ URL Ngôn ngữ (`?lang=vi`) & SEO Hreflang
* **Mục tiêu:** Cho phép chia sẻ link trực tiếp mở sẵn tiếng Việt cho khách hàng trong nước và hỗ trợ Google index đúng bản dịch.
* **Files ảnh hưởng:** `index.html`, `assets/i18n.js`
* **Nghiệp vụ chi tiết:**
  1. Cải tiến `assets/i18n.js`:
     - Kiểm tra tham số URL: Nếu có `?lang=vi` → ưu tiên hiển thị ngay tiếng Việt.
     - Nếu không có URL param, kiểm tra `localStorage.getItem('preferred_lang')`.
     - Nếu chưa có, kiểm tra ngôn ngữ trình duyệt (`navigator.language`).
  2. Đảm bảo thuộc tính `<html lang="en">` tự động chuyển thành `<html lang="vi">` khi ở chế độ tiếng Việt để trình duyệt và bot tìm kiếm nhận diện đúng.
  3. Thêm các thẻ SEO hreflang trong `<head>`:
     ```html
     <link rel="alternate" hreflang="en" href="https://landing-02ai.vercel.app/" />
     <link rel="alternate" hreflang="vi" href="https://landing-02ai.vercel.app/?lang=vi" />
     <link rel="alternate" hreflang="x-default" href="https://landing-02ai.vercel.app/" />
     ```
* **Tiêu chuẩn nghiệm thu:**
  - Gõ `.../?lang=vi` trên trình duyệt: trang hiển thị 100% tiếng Việt ngay lập tức không bị chớp giật bản tiếng Anh.
  - Nút chuyển ngôn ngữ cập nhật lại URL param mà không cần reload trang (`history.replaceState`).

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 5.3 trên file assets/i18n.js và index.html:
> 1. Viết logic đọc param ?lang=vi từ window.location.search khi trang khởi tạo để kích hoạt ngôn ngữ tiếng Việt ưu tiên.
> 2. Khi người dùng click nút đổi ngôn ngữ, cập nhật URL param tương ứng bằng window.history.replaceState mà không tải lại trang.
> 3. Cập nhật thuộc tính lang của thẻ <html> tương ứng ("vi" hoặc "en").
> 4. Thêm các thẻ hreflang chuẩn SEO vào thẻ <head> của index.html.
> ```

---

#### Task 5.4: Hoàn thiện SEO Meta Tags, Schema.org, OpenGraph Chuẩn & Accessibility
* **Mục tiêu:** Sửa lỗi vỡ ảnh preview khi share mạng xã hội (Facebook/Zalo), tạo thẻ Rich Snippet Google và đảm bảo chuẩn tiếp cận.
* **Files ảnh hưởng:** `index.html`, tạo thêm `robots.txt` và `sitemap.xml`
* **Nghiệp vụ chi tiết:**
  1. **Open Graph & Twitter Cards:**
     - Sửa `og:image` thành đường dẫn tuyệt đối: `https://landing-02ai.vercel.app/assets/og-image.jpg` (kích thước chuẩn 1200×630px, < 200 KB).
     - Bổ sung: `og:url`, `og:type="website"`, `twitter:card="summary_large_image"`, `canonical URL`.
  2. **Tạo `robots.txt` và `sitemap.xml`:**
     - Tạo file `robots.txt` cho phép bot crawl toàn bộ và trỏ sitemap.
     - Tạo file `sitemap.xml` khai báo URL gốc và URL `?lang=vi`.
  3. **Schema.org Structured Data:**
     - Nhúng JSON-LD chuẩn cho schema `Course` (Khóa học Zero To AI, $9/tháng) và `FAQPage` (tự động render câu hỏi/trả lời lên kết quả Google).
  4. **Accessibility (Trợ năng):**
     - Đảm bảo font size nhỏ nhất >= 13px.
     - Tất cả các nút/link có min-height >= 44px để dễ bấm trên điện thoại.
     - Thêm CSS hỗ trợ `@media (prefers-reduced-motion: reduce)`.
* **Tiêu chuẩn nghiệm thu:**
  - Copy link dán vào Facebook Sharing Debugger: Ảnh hiển thị tràn viền chuẩn 1200×630, tiêu đề và mô tả sắc nét.
  - Google Rich Results Test kiểm tra thẻ JSON-LD không có lỗi cảnh báo.
  - `robots.txt` và `sitemap.xml` truy cập trả về mã 200 OK.

> **Prompt mẫu giao cho AI:**
> ```text
> Hãy thực hiện Task 5.4:
> 1. Cập nhật toàn bộ thẻ Meta Open Graph và Twitter Card trong <head> của index.html với URL tuyệt đối và kích thước 1200x630.
> 2. Chèn đoạn script JSON-LD cho Schema.org loại "Course" và "FAQPage".
> 3. Tạo file robots.txt và sitemap.xml đặt ở thư mục gốc của dự án.
> 4. Rà soát CSS: đảm bảo không có chữ nào nhỏ hơn 13px, vùng chạm nút >= 44px và có media query prefers-reduced-motion.
> ```

---

## 4. CHECKLIST NGHIỆM THU CUỐI CÙNG (DEFINITION OF DONE)

Khi hoàn thành đủ 15 task, trang web phải vượt qua bảng kiểm định sau:

- [ ] **Ads Blocker:** Meta Pixel bắn đầy đủ `PageView`, `Lead`, `InitiateCheckout`.
- [ ] **Phễu Email:** Form Lead Magnet hoạt động, validate chuẩn, lưu trữ thông tin.
- [ ] **Preview Mạng Xã Hội:** Share link lên Zalo / Facebook hiện ảnh chuẩn 1200×630.
- [ ] **Bản địa hóa VN:** Link `?lang=vi` mở thẳng tiếng Việt; FAQ có hướng dẫn thanh toán thẻ và ngôn ngữ.
- [ ] **Pháp lý:** Không còn tên Nike / BMW / Bentley; link footer mở modal điều khoản thật.
- [ ] **Nội dung:** Giá trị Value Stack chuẩn $943; Showcase ghi đúng công cụ trong giáo trình.
- [ ] **Mobile Experience:** Chiều sâu trang < 15.000 px; Bảng giá nằm trước 55%; Header không tràn ở 375px; Có Sticky CTA đáy màn hình.
- [ ] **Tốc độ:** Dung lượng tải đầu trang < 1 MB; không quá 1 video autoplay.
