# BỘ TEST CASES TOÀN DIỆN & KỊCH BẢN TỰ SỬA LỖI (AUTO-FIX PLAYBOOK)
## DỰ ÁN: REDESIGN LANDING PAGE ZERO TO AI
**Tài liệu tham chiếu:** [PRD_REDESIGN_ZERO_TO_AI.md](file:///Users/huaductho/Documents/OverPower/landing-02AI/PRD_REDESIGN_ZERO_TO_AI.md)  
**Target Domain:** `https://landing-02ai.vercel.app`  
**Runner Tự Động:** `node tools/verify_all.js`

---

## 1. HƯỚNG DẪN KÍCH HOẠT DÀNH CHO NGƯỜI DÙNG & AGENT

Khi bạn (người dùng) muốn Antigravity kiểm tra lại sản phẩm và tự động khắc phục sự cố, bạn chỉ cần gửi một trong các câu lệnh mẫu sau:

* **Lệnh kiểm tra toàn bộ & tự fix:**  
  > *"Antigravity, hãy dựa vào TEST_CASES.md để test kĩ càng lại toàn bộ landing page và tự fix mọi lỗi nếu phát hiện."*
* **Lệnh kiểm tra một Phase cụ thể:**  
  > *"Antigravity, hãy test kỹ Phase 2 (Tracking & Lead Magnet) và tự fix nếu có lỗi."*
* **Lệnh kiểm tra một Task riêng lẻ:**  
  > *"Antigravity, hãy kiểm tra Test Case TC-3.4 (Header Mobile & Sticky Bottom CTA) và tự fix."*

**Quy trình phản xạ của Agent khi nhận lệnh:**
1. Chạy ngay bộ test runner tự động: `node tools/verify_all.js`.
2. Kiểm tra các test case thủ công/trực quan theo từng bước quy định trong tài liệu này.
3. Nếu phát hiện test case nào FAIL, tra cứu ngay mục **Kịch bản tự sửa lỗi (Auto-Fix Playbook)** của test case đó để sửa trực tiếp file `index.html`, `assets/i18n.js` hoặc file stylesheet tương ứng.
4. Chạy lại `node tools/verify_all.js` để đảm bảo 100% test case chuyển sang trạng thái **PASS**.
5. Báo cáo minh bạch cho người dùng danh sách các hạng mục đã kiểm tra và các điểm đã tự sửa.

---

## 2. MA TRẬN PHỦ KIỂM THỬ (TEST TRACEABILITY MATRIX)

| Phase | Task PRD | Mã Test Case | Hạng Mục Kiểm Thử | Trạng Thái Tự Động |
|---|---|---|---|---|
| **Phase 1** | Task 1.1 | **TC-1.1** | Đồng nhất Value Stack ($943 vs $497) & Sửa link CTA | `Automated + Visual` |
| | Task 1.2 | **TC-1.2** | Loại bỏ nhãn hiệu bên thứ ba (Nike, BMW, Bentley) | `Automated` |
| | Task 1.3 | **TC-1.3** | Căn chỉnh Showcase với giáo trình (Kling, Flux, Midjourney) | `Automated` |
| **Phase 2** | Task 2.1 | **TC-2.1** | Tracking Meta Pixel, GA4, Custom Events & UTM Passthrough | `Automated + Runtime` |
| | Task 2.2 | **TC-2.2** | Form thu Email "Cheat Sheet", Exit-Intent & LocalStorage | `Automated + DOM` |
| | Task 2.3 | **TC-2.3** | Modal Điều khoản, Chính sách hủy thật ở Footer | `Automated + DOM` |
| **Phase 3** | Task 3.1 | **TC-3.1** | Slider Before/After đặt ngay dưới Hero & Kéo vuốt mượt mà | `Automated + Interaction`|
| | Task 3.2 | **TC-3.2** | Accordion 3 Stage của Roadmap 9 Phase & ARIA | `Automated + A11y` |
| | Task 3.3 | **TC-3.3** | Bảng giá #pricing nằm trước mốc 55% độ sâu trang | `Automated + Layout` |
| | Task 3.4 | **TC-3.4** | Header không tràn ở 375px & Sticky Bottom CTA Bar | `Automated + Viewport` |
| **Phase 4** | Task 4.1 | **TC-4.1** | Block "Dành cho ai / Không dành cho ai" (2 cột tương phản) | `Automated + Responsive`|
| | Task 4.2 | **TC-4.2** | Khối Social Proof Founder Vmiz Nguyen & Affiliate 40% | `Automated` |
| | Task 4.3 | **TC-4.3** | 4 câu hỏi FAQ bản địa hóa Việt Nam (Thanh toán, Ngôn ngữ,...) | `Automated + i18n` |
| **Phase 5** | Task 5.1 | **TC-5.1** | Chuyển đổi WebP/SVG, Payload < 1MB, Lazy loading | `Automated + Network` |
| | Task 5.2 | **TC-5.2** | Tối ưu Video Autoplay (Duy nhất Hero) & Observer tiết kiệm pin | `Automated` |
| | Task 5.3 | **TC-5.3** | URL Param `?lang=vi`, replaceState, `<html lang>`, Hreflang | `Automated` |
| | Task 5.4 | **TC-5.4** | SEO Meta, Open Graph 1200x630, JSON-LD, robots, sitemap, a11y | `Automated` |
| **E2E** | Section 4 | **TC-E2E-01** | Kiểm tra tích hợp toàn diện không vỡ link, đủ 100% key song ngữ | `Automated + E2E` |

---

## 3. CHI TIẾT TỪNG TEST CASE & KỊCH BẢN TỰ SỬA LỖI

---

### PHASE 1: SỬA LỖI NỘI DUNG, PHÁP LÝ & SỐ LIỆU MÂU THUẪN

#### TC-1.1: Khắc phục mâu thuẫn số liệu Value Stack & Sửa link CTA
* **Mục tiêu:** Đảm bảo không còn số liệu mâu thuẫn gây nghi ngờ uy tín, các nút CTA điều hướng chính xác theo nhãn.
* **Điều kiện tiên quyết:** Mở `index.html` và `assets/i18n.js`.
* **Dữ liệu kiểm thử:**
  - Bảng Value Stack: Tổng giá trị = 197 + 150 + 497 + 99 = **$943**.
  - Giá trả thực tế: **$9/tháng**.
* **Các bước kiểm thử:**
  1. Quét nội dung `index.html` và `assets/i18n.js` xem có xuất hiện cụm text *"Market Value of Equivalent Training: $497+"* hoặc biến thể tương đương đứng cạnh $943 hay không.
  2. Kiểm tra thẻ `<a>` hoặc `<button>` có nhãn liên quan đến *"See ad workflows"* hoặc *"Discover cloning tech"*: href có bị trỏ nhầm về `#pricing` không.
  3. Kiểm tra phép cộng trong bảng Value Stack: Các mục cộng lại phải đúng bằng $943.
* **Kết quả mong đợi:**
  - Nhãn hiển thị duy nhất tổng giá trị là **$943** (hoặc bản dịch tiếng Việt tương ứng).
  - Nút CTA xem workflow trỏ tới `#workflow` hoặc `#roadmap`.
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const fs = require("fs");
  const html = fs.readFileSync("index.html", "utf8");
  const i18n = fs.readFileSync("assets/i18n.js", "utf8");
  const has497Conflict = /Market Value[^:]*:\s*\$497/i.test(html) || /Market Value[^:]*:\s*\$497/i.test(i18n);
  const badLinks = [...html.matchAll(/<a[^>]*href=["']#pricing["'][^>]*>(.*?)<\/a>/gis)]
    .map(m => m[1].replace(/<[^>]*>/g, "").trim())
    .filter(t => /workflow|cloning|curriculum|roadmap/i.test(t));
  if (has497Conflict || badLinks.length > 0) {
    console.error("FAIL TC-1.1:", { has497Conflict, badLinks });
    process.exit(1);
  }
  console.log("PASS TC-1.1");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - **Nếu phát hiện số $497 gây mâu thuẫn:** Mở `index.html` tại section `#pricing`, tìm đoạn text hiển thị market value và sửa thành: `data-i18n="pr_value_total"` với nội dung `"Total Resource & Coursework Value: $943"`.
  - **Nếu phát hiện nút CTA trỏ nhầm `#pricing`:** Đổi `href="#pricing"` thành `href="#roadmap"` hoặc `href="#workflow"` tùy theo ngữ cảnh của nút.

---

#### TC-1.2: Loại bỏ tên & nhãn hiệu bên thứ ba (Nike, BMW, Bentley)
* **Mục tiêu:** Loại bỏ triệt để rủi ro vi phạm bản quyền thương hiệu quốc tế và đảm bảo tài khoản Meta Ads không bị từ chối phê duyệt.
* **Điều kiện tiên quyết:** Cả mã nguồn HTML và từ điển dịch thuật `assets/i18n.js` đều được rà soát.
* **Các bước kiểm thử:**
  1. Chạy lệnh grep không phân biệt hoa thường để tìm các từ khóa: `nike`, `bmw`, `bentley`, `marvel`.
  2. Kiểm tra văn phong thay thế: Đã chuyển thành các danh xưng trung tính thương mại cao cấp như *"Luxury Automotive Commercial"*, *"High-End Sportswear Commercial"*.
* **Kết quả mong đợi:**
  - Lệnh grep trả về 0 kết quả trên cả 2 file.
* **Lệnh kiểm tra tự động:**
  ```bash
  ! grep -iE "\b(nike|bmw|bentley)\b" index.html assets/i18n.js
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - **Nếu phát hiện từ "Nike":** Thay bằng `"High-End Sportswear Commercial"` (EN) và `"TVC thể thao cao cấp"` (VI).
  - **Nếu phát hiện từ "BMW":** Thay bằng `"Luxury Automotive Commercial"` (EN) và `"TVC ô tô hạng sang"` (VI).
  - **Nếu phát hiện từ "Bentley":** Thay bằng `"Ultra-Luxury Vehicle Render"` (EN) và `"Concept xe siêu sang"` (VI).

---

#### TC-1.3: Dọn dẹp Showcase & Căn chỉnh công cụ đúng giáo trình
* **Mục tiêu:** Tránh gây hiểu nhầm về công cụ giảng dạy, loại bỏ nhãn Runway Gen-3 và Luma Dream Machine, đồng bộ với Kling, Flux.1, Midjourney, Seedance.
* **Điều kiện tiên quyết:** Section `#showcase` trong `index.html` và key tương ứng trong `assets/i18n.js`.
* **Các bước kiểm thử:**
  1. Quét tìm từ khóa `runway` và `luma` trong toàn bộ project.
  2. Kiểm tra các thẻ tác phẩm trong `#showcase`: Xác nhận nhãn công cụ ghi nhận đúng các tool: Kling AI, Flux.1, Midjourney v6.1, Seedance, HeyGen, Nanobanana, CapCut Pro.
  3. Kiểm tra các video preview: Không có 2 thẻ khác nhau nhưng dùng chung video mà dán nhãn 2 công cụ mâu thuẫn.
* **Kết quả mong đợi:**
  - Không còn bất kỳ nhãn Runway hay Luma nào.
  - 100% công cụ trên Showcase khớp với 9 Phase của giáo trình.
* **Lệnh kiểm tra tự động:**
  ```bash
  ! grep -iE "\b(runway gen-3|runway|luma dream machine|luma)\b" index.html assets/i18n.js
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Mở `index.html` tại section `#showcase`, tìm các badge chứa "Runway" hoặc "Luma".
  - Sửa badge thành `"Kling AI 1.5"` hoặc `"Flux.1 Dev + Midjourney v6.1"`. Đồng bộ key trong `assets/i18n.js`.

---

### PHASE 2: TRACKING, PHỄU & LEAD CAPTURE

#### TC-2.1: Tích hợp Meta Pixel, GA4, Custom Events & UTM Passthrough
* **Mục tiêu:** Đảm bảo hệ thống đo lường chuyển đổi quảng cáo hoạt động chuẩn xác, không bị lỗi console khi chưa có ID thật.
* **Điều kiện tiên quyết:** Kiểm tra thẻ `<head>` và các script tương tác ở cuối trang.
* **Các bước kiểm thử:**
  1. Kiểm tra mã khởi tạo Meta Pixel trong `<head>`: Phải có `fbq('init')` và `fbq('track', 'PageView')`.
  2. Kiểm tra mã Google Analytics GA4 placeholder (`gtag`).
  3. Kiểm tra các nút dẫn tới `skool.com/zerotoai`: Khi click phải bắn event `InitiateCheckout` kèm payload `{ currency: 'USD', value: 9.00 }`.
  4. Kiểm tra submit form nhận Cheat Sheet: Phải kích hoạt `fbq('track', 'Lead')`.
  5. Kiểm tra logic UTM: Đọc `utm_source`, `utm_campaign`, `utm_medium`, `fbclid` từ URL hiện tại và gắn nối tiếp vào link chuyển sang Skool.
* **Kết quả mong đợi:**
  - Script không sinh lỗi JS ngay cả khi chạy ở môi trường preview.
  - Sự kiện Checkout và Lead được khai báo chính xác.
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const html = require("fs").readFileSync("index.html", "utf8");
  const checks = [
    html.includes("fbq(\x27init\x27"),
    html.includes("fbq(\x27track\x27, \x27PageView\x27)"),
    html.includes("InitiateCheckout") && html.includes("9.00"),
    html.includes("\x27Lead\x27"),
    html.includes("utm_source") || html.includes("URLSearchParams")
  ];
  if (checks.some(c => !c)) {
    console.error("FAIL TC-2.1: Missing tracking elements");
    process.exit(1);
  }
  console.log("PASS TC-2.1");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Nếu thiếu script Meta Pixel: Bổ sung snippet snippet Meta Pixel an toàn (bọc trong `try/catch` hoặc kiểm tra `typeof window.fbq === 'function'`).
  - Nếu nút Skool chưa có listener: Thêm class `.btn-skool` cho tất cả các thẻ `<a>` trỏ sang Skool và bổ sung event handler tự động bắt event `InitiateCheckout`.

---

#### TC-2.2: Form thu Lead Email ("The Realism Cheat Sheet") & Exit-Intent Popup
* **Mục tiêu:** Thu thập email của khách hàng chưa sẵn sàng mua gói $9 bằng Lead Magnet chất lượng cao, có popup giữ chân người dùng.
* **Điều kiện tiên quyết:** Section `#lead-magnet` và modal exit-intent.
* **Các bước kiểm thử:**
  1. Kiểm tra Form thu Lead: Có trường `input[type="email"]` có validate regex email và nút gửi.
  2. Kiểm tra Exit-Intent Popup: Có element modal popup (Desktop kích hoạt khi chuột rời viewport, Mobile kích hoạt khi cuộn > 60%).
  3. Kiểm tra deduplication: Khi submit thành công hoặc đóng popup, cờ `localStorage.setItem('lead_captured', 'true')` được lưu để không làm phiền người dùng.
  4. Kiểm tra fallback submit: Gửi dữ liệu qua webhook hoặc mô phỏng phản hồi thành công và cung cấp link tải trực tiếp file `assets/the-realism-cheat-sheet.pdf`.
* **Kết quả mong đợi:**
  - Form submit hiển thị trạng thái loading → success mượt mà mà không reload trang.
  - File PDF tồn tại thực tế trong thư mục `assets/the-realism-cheat-sheet.pdf`.
* **Lệnh kiểm tra tự động:**
  ```bash
  test -f "assets/the-realism-cheat-sheet.pdf" && node -e '
  const html = require("fs").readFileSync("index.html", "utf8");
  if (!html.includes("lead-magnet") || !html.includes("lead_captured")) {
    process.exit(1);
  }
  console.log("PASS TC-2.2");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Nếu thiếu file PDF: Tạo file `assets/the-realism-cheat-sheet.pdf`.
  - Nếu form thiếu validate: Bổ sung hàm JS kiểm tra `^[^\s@]+@[^\s@]+\.[^\s@]+$` trước khi gửi.

---

#### TC-2.3: Modal Chính sách, Điều khoản & Hủy gói thật tại Footer
* **Mục tiêu:** Không còn link giả trỏ về `#faq` hay `#`, thay vào đó là modal minh bạch chính sách membership Skool và hoàn tiền 7 ngày.
* **Điều kiện tiên quyết:** Các link Terms of Service, Cancellation Policy, Privacy Policy ở Footer.
* **Các bước kiểm thử:**
  1. Quét toàn bộ link trong `<footer>`: Đảm bảo không link nào có `href="#faq"` hoặc `href="#"`.
  2. Kiểm tra Modal Dialog trong DOM: Có ID `legalModal` hoặc class modal tương ứng.
  3. Kiểm tra tính trợ năng của modal: Có nút đóng `(X)`, đóng bằng phím `Escape`, đóng khi bấm ngoài nền đen (backdrop click), có `role="dialog"`.
  4. Kiểm tra nội dung: Có chính sách hủy 1-click trong Skool Settings và bảo hành trải nghiệm 7 ngày.
* **Kết quả mong đợi:**
  - Click vào bất kỳ link pháp lý nào đều mở đúng tab nội dung trong modal.
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const html = require("fs").readFileSync("index.html", "utf8");
  const bad = /<a[^>]*href=["']#(faq)?["'][^>]*>(Terms|Privacy|Cancellation)/i.test(html);
  const hasModal = html.includes("legal-modal") || (html.includes("modal") && html.includes("cancellation"));
  if (bad || !hasModal) {
    console.error("FAIL TC-2.3:", { bad, hasModal });
    process.exit(1);
  }
  console.log("PASS TC-2.3");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Mở `index.html` tại footer, chuyển `href="#faq"` thành `href="javascript:void(0)" onclick="openLegalModal('terms')"` (hoặc 'cancellation', 'privacy').
  - Đảm bảo hàm `openLegalModal(tab)` có sẵn trong script cuối trang.

---

### PHASE 3: TÁI CẤU TRÚC LAYOUT & TRẢI NGHIỆM MOBILE

#### TC-3.1: Slider Before/After đặt ngay dưới Hero & Kéo vuốt cảm ứng
* **Mục tiêu:** Đưa bằng chứng thuyết phục thị giác mạnh mẽ nhất lên ngay trong 30 giây đầu tiên của khách truy cập.
* **Điều kiện tiên quyết:** Mở `index.html`, kiểm tra thứ tự section.
* **Các bước kiểm thử:**
  1. Kiểm tra cấu trúc DOM trong thẻ `<main>`: Section `#comparison` phải nằm ngay sau section `#top` (Hero).
  2. Kiểm tra script tương tác slider: Có hỗ trợ cả sự kiện chuột và sự kiện cảm ứng (`pointerdown`, `pointermove` hoặc `touchstart`, `touchmove`).
  3. Kiểm tra tài nguyên ảnh: Cả `assets/compare-before.webp` và `assets/compare-after.webp` đều tồn tại và load tốt.
* **Kết quả mong đợi:**
  - Kéo thanh slider sang trái/phải mượt mà trên cả desktop và màn hình cảm ứng điện thoại.
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const html = require("fs").readFileSync("index.html", "utf8");
  const sections = [...html.matchAll(/<section[^>]*id=["\x27]([^"\x27]+)["\x27]/g)].map(m => m[1]);
  const heroIdx = sections.indexOf("top");
  const compIdx = sections.indexOf("comparison");
  if (heroIdx === -1 || compIdx !== heroIdx + 1) {
    console.error("FAIL TC-3.1: Section #comparison is not immediately after #top", { heroIdx, compIdx });
    process.exit(1);
  }
  console.log("PASS TC-3.1");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Nếu `#comparison` nằm ở vị trí khác: Cắt toàn bộ khối `<section ... id="comparison">...</section>` và paste vào ngay sau thẻ đóng `</section>` của `#top`.

---

#### TC-3.2: Accordion 3 Stage của Roadmap 9 Phase & Thuộc tính ARIA
* **Mục tiêu:** Rút ngắn độ dài trang trên mobile, giúp trải nghiệm cuộn không bị mỏi tay trong khi vẫn giữ trọn vẹn 114+ bài học.
* **Điều kiện tiên quyết:** Section `#roadmap` trong `index.html`.
* **Các bước kiểm thử:**
  1. Kiểm tra sự phân chia: 9 Phase phải được gom thành 3 Stage:
     - Stage 1: Foundation & De-Plasticizing (Phases 1-3)
     - Stage 2: Motion, Camera & Cinematic Audio (Phases 4-6)
     - Stage 3: Monetization & Commercial Pipelines (Phases 7-9)
  2. Kiểm tra trạng thái mặc định: Stage 1 mở, Stage 2 và Stage 3 gập lại.
  3. Kiểm tra tương tác: Bấm vào header của stage nào thì toggle đóng/mở stage đó, có thuộc tính `aria-expanded="true/false"`.
* **Kết quả mong đợi:**
  - Chiều cao section Roadmap trên mobile gọn gàng, thao tác mở/gập có hiệu ứng chuyển động mượt mà.
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const html = require("fs").readFileSync("index.html", "utf8");
  const hasStages = html.includes("stage-1") && html.includes("stage-2") && html.includes("stage-3");
  const hasAria = html.includes("aria-expanded");
  if (!hasStages || !hasAria) {
    console.error("FAIL TC-3.2:", { hasStages, hasAria });
    process.exit(1);
  }
  console.log("PASS TC-3.2");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Nếu thiếu class `stage-X`: Bọc các phase 1-3 vào `.stage-accordion.stage-1`, phase 4-6 vào `.stage-2`, phase 7-9 vào `.stage-3`.
  - Thêm listener click cho nút toggle accordion cập nhật `aria-expanded` tương ứng.

---

#### TC-3.3: Bảng giá #pricing nằm trước mốc 55% độ sâu trang
* **Mục tiêu:** Đưa lời chào hàng và mức giá siêu hời ($9/tháng) tiếp cận khách hàng sớm khi họ còn đang tập trung cao nhất.
* **Điều kiện tiên quyết:** Thứ tự các section trong `index.html`.
* **Các bước kiểm thử:**
  1. Kiểm tra vị trí của `#pricing` so với các section khác:
     - Nằm sau: `#top`, `#comparison`, `#ecosystem`, `#audience-fit`, `#roadmap`, `#showcase`, `#founder-proof`, `#vault`, `#lead-magnet`.
     - Nằm trước: `#workflow` (Build Lab & Affiliate) và `#faq`.
  2. Kiểm tra anchor link trên Navbar: Bấm `Pricing ($9/mo)` cuộn chính xác tới `#pricing`.
* **Kết quả mong đợi:**
  - Bảng giá xuất hiện ở khoảng giữa trang (~50-55% scroll depth).
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const html = require("fs").readFileSync("index.html", "utf8");
  const sections = [...html.matchAll(/<section[^>]*id=["\x27]([^"\x27]+)["\x27]/g)].map(m => m[1]);
  const pIdx = sections.indexOf("pricing");
  const wIdx = sections.indexOf("workflow");
  const fIdx = sections.indexOf("faq");
  if (pIdx === -1 || pIdx > wIdx || pIdx > fIdx) {
    console.error("FAIL TC-3.3: #pricing is placed too far down", { pIdx, wIdx, fIdx });
    process.exit(1);
  }
  console.log("PASS TC-3.3");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Di chuyển thẻ `<section class="pricing-section" id="pricing">` lên đứng trước section `#workflow`.

---

#### TC-3.4: Header không tràn ở Viewport 375px & Sticky Bottom CTA Bar
* **Mục tiêu:** Đảm bảo trải nghiệm trên các thiết bị màn hình nhỏ (iPhone SE, Galaxy Mini) hoàn hảo 100%, không bị vỡ giao diện ngang.
* **Điều kiện tiên quyết:** Mở trang ở kích thước viewport `375px x 667px`.
* **Các bước kiểm thử:**
  1. Kiểm tra Header trên mobile: Nút CTA và logo không làm trang sinh thanh cuộn ngang (`overflow-x: hidden`).
  2. Kiểm tra Sticky Bottom CTA Bar:
     - Nằm cố định ở đáy màn hình (`position: fixed; bottom: 0`).
     - Hiển thị giá: *"Chỉ $9/tháng"* + Nút *"Tham gia ngay"*.
     - Ẩn trên desktop (> 768px).
     - Tự động hiện sau khi cuộn qua 300px từ đỉnh trang.
     - Tự động ẩn đi khi người dùng đang xem trực tiếp section `#pricing` để tránh lặp nút thừa.
* **Kết quả mong đợi:**
  - Viewport 375px không bị x-overflow dù chỉ 1 pixel.
  - Sticky CTA hoạt động nhịp nhàng, bấm chuyển sang Skool và kích hoạt `InitiateCheckout`.
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const html = require("fs").readFileSync("index.html", "utf8");
  const hasSticky = html.includes("sticky-bottom") || html.includes("mobile-sticky-cta") || html.includes("sticky_btn_cta");
  const hasObserver = html.includes("pricingObserver") || (html.includes("sticky") && html.includes("scroll"));
  if (!hasSticky || !hasObserver) {
    console.error("FAIL TC-3.4: Sticky bar missing or lack scroll logic");
    process.exit(1);
  }
  console.log("PASS TC-3.4");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Trong CSS media query `@media (max-width: 480px)`: Set `html, body { overflow-x: hidden; max-width: 100vw; }`.
  - Giảm font-size hoặc padding của `.nav-join-btn` trên header mobile.

---

### PHASE 4: TỐI ƯU CHO THỊ TRƯỜNG VIỆT NAM & BỔ SUNG CONTENT

#### TC-4.1: Block "Dành cho ai / Không dành cho ai" (2 Cột tương phản)
* **Mục tiêu:** Sàng lọc học viên chuẩn xác, giảm tỷ lệ khiếu nại và củng cố định vị "nói không với bánh vẽ làm giàu".
* **Điều kiện tiên quyết:** Section `#audience-fit` trong `index.html`.
* **Các bước kiểm thử:**
  1. Kiểm tra 2 cột nội dung:
     - Cột tích cực (✓): Dành cho creator, freelancer, agency muốn làm video/hình ảnh chuẩn thương mại.
     - Cột tiêu cực (✕): Không dành cho người lười, tìm nút bấm làm giàu qua đêm, thích ảnh sao kê ảo.
  2. Kiểm tra Responsive: Desktop hiển thị 2 cột song song; Mobile tự động xếp chồng (stack 1 cột dọc).
  3. Kiểm tra Song ngữ: Có attribute `data-i18n` và dịch chuẩn trong `assets/i18n.js`.
* **Kết quả mong đợi:**
  - Layout tương phản trực quan với icon màu xanh lá (✓) và màu đỏ gạch (✕).
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const html = require("fs").readFileSync("index.html", "utf8");
  const hasFit = html.includes("id=\"audience-fit\"");
  const hasCards = html.includes("fit-positive") && html.includes("fit-negative");
  if (!hasFit || !hasCards) {
    console.error("FAIL TC-4.1: Audience fit section missing or lacks positive/negative cards");
    process.exit(1);
  }
  console.log("PASS TC-4.1");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Bổ sung section `#audience-fit` với 2 thẻ `.fit-card.fit-positive` và `.fit-card.fit-negative`.

---

#### TC-4.2: Khối Social Proof Founder Vmiz Nguyen & Khối Affiliate 40%
* **Mục tiêu:** Tăng độ uy tín cá nhân của người dẫn dắt và kích hoạt động lực lan tỏa cộng đồng qua chính sách Affiliate.
* **Điều kiện tiên quyết:** Section `#founder-proof` và khối Affiliate trong `index.html`.
* **Các bước kiểm thử:**
  1. Kiểm tra khối Founder: Có ảnh/thông tin Founder Vmiz Nguyen, số lượng bài học, tác phẩm thực tế trong cộng đồng Skool.
  2. Kiểm tra khối Affiliate 40%: Có thông điệp *"Nhận 40% hoa hồng trọn đời khi giới thiệu bạn bè"* (Giới thiệu 3 người = học miễn phí).
  3. Kiểm tra tính đồng bộ song ngữ trong `assets/i18n.js`.
* **Kết quả mong đợi:**
  - Người dùng thấy rõ sự hiện diện của người thật - việc thật và cơ chế hoàn vốn học phí chính đáng.
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const html = require("fs").readFileSync("index.html", "utf8");
  const i18n = require("fs").readFileSync("assets/i18n.js", "utf8");
  const hasFounder = html.includes("founder-proof") || (html.includes("Vmiz") && html.includes("Founder"));
  const hasAff = html.includes("40%") || i18n.includes("40%");
  if (!hasFounder || !hasAff) {
    console.error("FAIL TC-4.2: Missing founder proof or 40% affiliate mention");
    process.exit(1);
  }
  console.log("PASS TC-4.2");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Bổ sung thẻ thông tin Founder Vmiz Nguyen vào `#founder-proof`.
  - Thêm callout card Affiliate 40% vào gần khu vực bảng giá hoặc trong section Build Lab.

---

#### TC-4.3: 4 Câu hỏi FAQ bản địa hóa cho thị trường Việt Nam
* **Mục tiêu:** Tháo gỡ mọi rào cản thanh toán và tâm lý lo ngại về ngôn ngữ trước khi người dùng đưa ra quyết định mua.
* **Điều kiện tiên quyết:** Section `#faq` trong `index.html` và key trong `assets/i18n.js`.
* **Các bước kiểm thử:**
  Kiểm tra sự hiện diện của 4 câu hỏi thiết yếu:
  1. **Thanh toán:** Chấp nhận thẻ quốc tế (Visa/Mastercard) từ ngân hàng Việt Nam (Techcombank, VPBank, Cake, Timo...).
  2. **Ngôn ngữ:** Thuật ngữ quốc tế kèm tóm tắt & hỗ trợ 100% tiếng Việt trong cộng đồng.
  3. **Thời gian học:** Thiết kế dạng vi học (micro-learning) chỉ cần 3–5 giờ/tuần.
  4. **Cam kết rủi ro:** Hủy gói tự do 1-click trong Skool + Bảo hành trải nghiệm 7 ngày.
* **Kết quả mong đợi:**
  - Cả 4 câu hỏi hiển thị mượt mà trong Accordion FAQ, dịch chuẩn xác ở cả 2 chế độ EN và VI.
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const i18n = require("fs").readFileSync("assets/i18n.js", "utf8");
  const q6 = i18n.includes("faq_q6");
  const q7 = i18n.includes("faq_q7");
  const q8 = i18n.includes("faq_q8");
  const q9 = i18n.includes("faq_q9");
  if (!q6 || !q7 || !q8 || !q9) {
    console.error("FAIL TC-4.3: Missing localized FAQs", { q6, q7, q8, q9 });
    process.exit(1);
  }
  console.log("PASS TC-4.3");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Thêm các thẻ `<div class="faq-item">` tương ứng với `faq_q6` → `faq_q9` và `faq_a6` → `faq_a9` vào `index.html` và khai báo bản dịch trong `assets/i18n.js`.

---

### PHASE 5: HIỆU NĂNG, SEO, ASSET & ACCESSIBILITY

#### TC-5.1: Định dạng WebP/SVG, Tải trọng ban đầu < 1MB & Lazy Loading
* **Mục tiêu:** Tăng tốc độ load trang tối đa trên mạng 4G di động và đạt điểm Google PageSpeed cao.
* **Điều kiện tiên quyết:** Thư mục `assets/` và các thẻ `<img>` trong `index.html`.
* **Các bước kiểm thử:**
  1. Kiểm tra logo: Sử dụng định dạng vector SVG hoặc WebP nén siêu nhẹ (< 25 KB).
  2. Kiểm tra ảnh Before/After: Sử dụng `compare-before.webp` và `compare-after.webp`.
  3. Kiểm tra các thẻ `<img>` nằm dưới màn hình đầu tiên (below the fold): Phải có `loading="lazy"` và `decoding="async"`.
* **Kết quả mong đợi:**
  - Tổng dung lượng ảnh tải trong lần vào trang đầu tiên < 600 KB.
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const html = require("fs").readFileSync("index.html", "utf8");
  const lazyCount = (html.match(/loading=["\x27]lazy["\x27]/g) || []).length;
  const hasWebpLogo = html.includes("logo-full.webp") || html.includes("logo.svg");
  if (lazyCount < 5 || !hasWebpLogo) {
    console.error("FAIL TC-5.1:", { lazyCount, hasWebpLogo });
    process.exit(1);
  }
  console.log("PASS TC-5.1");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Chạy script `python3 tools/optimize_assets.py` để tự động render lại toàn bộ WebP nén chất lượng cao.
  - Bổ sung `loading="lazy" decoding="async"` vào tất cả các thẻ `<img>` ngoài Hero.

---

#### TC-5.2: Tối ưu Video Autoplay & Tiết kiệm Pin Mobile
* **Mục tiêu:** Ngăn chặn việc tải đồng loạt hàng chục MB video ngốn băng thông và làm nóng máy điện thoại của khách truy cập.
* **Điều kiện tiên quyết:** Các thẻ `<video>` trong `index.html`.
* **Các bước kiểm thử:**
  1. Kiểm tra thuộc tính `autoplay`: Chỉ duy nhất 1 video ở Hero section có `autoplay`. Tất cả các video khác trên trang tuyệt đối KHÔNG có `autoplay`.
  2. Kiểm tra thuộc tính `poster`: Mọi video bên dưới đều phải có ảnh poster tĩnh WebP.
  3. Kiểm tra IntersectionObserver: Có script tự động play video khi cuộn vào tầm mắt và pause khi cuộn ra khỏi tầm mắt.
* **Kết quả mong đợi:**
  - Khi mới mở trang, Network tab không bị ngập tràn request video tải cùng lúc.
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const html = require("fs").readFileSync("index.html", "utf8");
  const inPageVideos = [...html.matchAll(/<video\b([^>]*)>/gis)]
    .map(m => m[1])
    .filter(a => !a.includes("id=\"modalVideoPlayer\""));
  const autoplayCount = inPageVideos.filter(a => a.includes("autoplay")).length;
  const hasObserver = html.includes("IntersectionObserver");
  if (autoplayCount > 1 || !hasObserver) {
    console.error("FAIL TC-5.2:", { autoplayCount, hasObserver });
    process.exit(1);
  }
  console.log("PASS TC-5.2");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Xóa bỏ thuộc tính `autoplay` ở các thẻ `<video>` trong `#showcase`, `#ecosystem` và `#workflow`.
  - Thêm `poster="assets/videos/...webp" preload="none"`.

---

#### TC-5.3: Tham số URL Ngôn ngữ (`?lang=vi`), history.replaceState & Hreflang
* **Mục tiêu:** Hỗ trợ chia sẻ link trực tiếp mở sẵn tiếng Việt cho thị trường trong nước và tối ưu SEO đa ngôn ngữ.
* **Điều kiện tiên quyết:** Mở `assets/i18n.js` và thẻ `<head>` của `index.html`.
* **Các bước kiểm thử:**
  1. Kiểm tra đọc param: Khi URL có `?lang=vi`, giao diện phải lập tức áp dụng tiếng Việt ưu tiên hơn `localStorage`.
  2. Kiểm tra chuyển đổi không reload: Khi bấm nút đổi ngôn ngữ, URL tự động cập nhật param mà không làm mới trang (`window.history.replaceState`).
  3. Kiểm tra thẻ `<html>`: Thuộc tính `lang` tự động cập nhật thành `lang="vi"` hoặc `lang="en"`.
  4. Kiểm tra SEO Hreflang: Thẻ `<head>` có đủ 3 liên kết `hreflang="en"`, `hreflang="vi"`, và `hreflang="x-default"`.
* **Kết quả mong đợi:**
  - Truy cập `/?lang=vi` hiển thị 100% tiếng Việt tức thì không bị chớp giật bản tiếng Anh.
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const html = require("fs").readFileSync("index.html", "utf8");
  const i18n = require("fs").readFileSync("assets/i18n.js", "utf8");
  const hasUrlLogic = i18n.includes("searchParams.get(\x27lang\x27)") || i18n.includes("getInitialLanguage");
  const hasHreflang = html.includes("hreflang=\"vi\"") && html.includes("hreflang=\"x-default\"");
  if (!hasUrlLogic || !hasHreflang) {
    console.error("FAIL TC-5.3:", { hasUrlLogic, hasHreflang });
    process.exit(1);
  }
  console.log("PASS TC-5.3");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Trong `assets/i18n.js`: Tại hàm `getInitialLanguage()`, kiểm tra `new URLSearchParams(window.location.search).get('lang')` ở dòng đầu tiên.

---

#### TC-5.4: SEO Meta, Open Graph 1200x630, JSON-LD, robots.txt, sitemap.xml & A11y
* **Mục tiêu:** Tối ưu hiển thị chia sẻ trên mạng xã hội (Facebook/Zalo), kích hoạt Rich Snippet của Google và đạt chuẩn tiếp cận cho người dùng.
* **Điều kiện tiên quyết:** Kiểm tra thẻ `<head>`, file `robots.txt`, `sitemap.xml`, và style CSS.
* **Các bước kiểm thử:**
  1. Kiểm tra Open Graph: `og:image` trỏ URL tuyệt đối `https://landing-02ai.vercel.app/assets/og-image.jpg` (kích thước 1200x630px).
  2. Kiểm tra Schema.org: Có đoạn JSON-LD chứa schema loại `"Course"` ($9/tháng) và `"FAQPage"`.
  3. Kiểm tra file `robots.txt` và `sitemap.xml`: Cả 2 file tồn tại và khai báo chuẩn.
  4. Kiểm tra Trợ năng (Accessibility):
     - Vùng bấm các nút bấm/link tối thiểu >= 44px.
     - Font chữ nội dung nhỏ nhất >= 13px.
     - Có CSS media query `@media (prefers-reduced-motion: reduce)`.
* **Kết quả mong đợi:**
  - Share link trên mạng xã hội hiện ảnh thumbnail to, sắc nét, không bị vỡ.
* **Lệnh kiểm tra tự động:**
  ```bash
  node -e '
  const fs = require("fs");
  const html = fs.readFileSync("index.html", "utf8");
  const hasOg = html.includes("og:image") && html.includes("https://landing-02ai.vercel.app/assets/og-image.jpg");
  const hasJsonLd = html.includes("\"@type\": \"Course\"") || html.includes("\"@type\":\"Course\"");
  const hasRobots = fs.existsSync("robots.txt");
  const hasSitemap = fs.existsSync("sitemap.xml");
  const hasReducedMotion = html.includes("prefers-reduced-motion");
  if (!hasOg || !hasJsonLd || !hasRobots || !hasSitemap || !hasReducedMotion) {
    console.error("FAIL TC-5.4:", { hasOg, hasJsonLd, hasRobots, hasSitemap, hasReducedMotion });
    process.exit(1);
  }
  console.log("PASS TC-5.4");
  '
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - Chèn JSON-LD script vào cuối thẻ `<head>` của `index.html`.
  - Thêm quy tắc CSS prefers-reduced-motion để tắt animation đối với người dùng bật chế độ giảm chuyển động.

---

### PHẦN E2E: TỔNG KIỂM TRA TÍCH HỢP & DEFINITION OF DONE

#### TC-E2E-01: Toàn vẹn liên kết Anchor, Đồng bộ 100% Key i18n & Không lỗi Console
* **Mục tiêu:** Đảm bảo toàn bộ hệ thống phối hợp ăn khớp, không có link chết và không có chuỗi text nào bị bỏ quên chưa dịch.
* **Điều kiện tiên quyết:** Cả trang web hoàn tất.
* **Các bước kiểm thử:**
  1. Quét toàn bộ thẻ `<a href="#xyz">`: Đối chiếu với tất cả `id="xyz"` trong DOM. Đảm bảo 100% anchor links đều có phần tử đích tồn tại thực tế.
  2. Quét toàn bộ thuộc tính `data-i18n` và `data-i18n-html` trong `index.html`: Đối chiếu với từ điển `assets/i18n.js`. Đảm bảo mọi key đều có bản dịch ở cả `en` và `vi`.
  3. Kiểm tra tải trang không có runtime error trên console.
* **Kết quả mong đợi:**
  - 0 link chết, 0 key i18n bị thiếu.
* **Lệnh kiểm tra tự động:**
  ```bash
  node tools/verify_all.js
  ```
* **Kịch bản tự sửa lỗi (Auto-Fix Playbook):**
  - **Nếu có anchor chết:** Bổ sung `id` bị thiếu vào đúng section đích tương ứng trong `index.html`.
  - **Nếu thiếu key i18n:** Mở `assets/i18n.js` và thêm key vào cả hai khối `"en"` và `"vi"`.

---

## 4. BẢNG CHECKLIST NGHIỆM THU CUỐI CÙNG (DEFINITION OF DONE)

| Tiêu chuẩn nghiệm thu | Phương thức kiểm tra | Kết quả yêu cầu |
|---|---|---|
| **Meta Ads Tracking** | `tools/verify_all.js` | Đủ `PageView`, `InitiateCheckout`, `Lead` |
| **Phễu Thu Email** | Form `#lead-magnet` + Exit Popup | Validate email chuẩn, lưu `lead_captured` |
| **Preview Mạng Xã Hội** | Facebook Sharing Debugger / OG Tags | Ảnh 1200x630 tuyệt đối, không vỡ preview |
| **Bản Địa Hóa VN** | Mở URL `/?lang=vi` | Hiện tiếng Việt ngay lập tức, FAQ có thanh toán thẻ VN |
| **Pháp Lý & Bản Quyền** | `grep -iE "nike|bmw|bentley"` | 0 vi phạm; footer mở modal điều khoản thật |
| **Giá Trị Value Stack** | Section `#pricing` | Chuẩn $943; không mâu thuẫn $497+ |
| **Trải Nghiệm Mobile** | Viewport 375px | Không tràn ngang; Sticky CTA đáy hoạt động mượt mà |
| **Hiệu Năng & Tốc Độ** | Network Tab | Tải đầu < 1MB; chỉ duy nhất Hero video autoplay |
| **Toàn Vẹn Liên Kết** | DOM Anchor Scan | 0 link chết, 100% key i18n đồng bộ song ngữ |

---

*Tài liệu này được lưu trữ trực tiếp trong repository tại [TEST_CASES.md](file:///Users/huaductho/Documents/OverPower/landing-02AI/TEST_CASES.md) và tích hợp sẵn runner kiểm thử tự động tại [tools/verify_all.js](file:///Users/huaductho/Documents/OverPower/landing-02AI/tools/verify_all.js).*
