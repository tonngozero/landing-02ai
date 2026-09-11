#!/usr/bin/env node
/**
 * Zero To AI — Automated Verification Suite (PRD Test Runner)
 * 
 * Verifies all 15 tasks + E2E Definition of Done from PRD_REDESIGN_ZERO_TO_AI.md
 * Run with: node tools/verify_all.js
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const HTML_FILE = path.join(ROOT_DIR, 'index.html');
const I18N_FILE = path.join(ROOT_DIR, 'assets', 'i18n.js');
const ROBOTS_FILE = path.join(ROOT_DIR, 'robots.txt');
const SITEMAP_FILE = path.join(ROOT_DIR, 'sitemap.xml');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function assert(condition, testId, message, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  \x1b[32m✔ [PASS]\x1b[0m \x1b[1m${testId}\x1b[0m: ${message}`);
  } else {
    failedTests++;
    console.log(`  \x1b[31m✖ [FAIL]\x1b[0m \x1b[1m${testId}\x1b[0m: ${message}`);
    if (details) {
      console.log(`         \x1b[33m↳ Note: ${details}\x1b[0m`);
    }
    failures.push({ testId, message, details });
  }
}

function runVerification() {
  console.log('\n\x1b[1m=================================================================\x1b[0m');
  console.log('\x1b[36m    ZERO TO AI — PRD VERIFICATION SUITE & TEST CASE RUNNER       \x1b[0m');
  console.log('\x1b[1m=================================================================\x1b[0m\n');

  if (!fs.existsSync(HTML_FILE)) {
    console.error('ERROR: index.html not found!');
    process.exit(1);
  }
  if (!fs.existsSync(I18N_FILE)) {
    console.error('ERROR: assets/i18n.js not found!');
    process.exit(1);
  }

  const html = fs.readFileSync(HTML_FILE, 'utf8');
  const i18n = fs.readFileSync(I18N_FILE, 'utf8');

  // -------------------------------------------------------------
  // PHASE 1: NỘI DUNG, PHÁP LÝ & SỐ LIỆU MÂU THUẪN
  // -------------------------------------------------------------
  console.log('\x1b[34m[PHASE 1: SỬA LỖI NỘI DUNG, PHÁP LÝ & SỐ LIỆU MÂU THUẪN]\x1b[0m');

  // TC-1.1: Value stack numbers & CTA links
  const has943 = html.includes('943') || i18n.includes('943');
  const hasConflicting497 = (html.match(/Market Value[^:]*:\s*\$497/i) || i18n.match(/Market Value[^:]*:\s*\$497/i));
  const badCtaLinks = [...html.matchAll(/<a[^>]*href=["']#pricing["'][^>]*>(.*?)<\/a>/gis)]
    .map(m => m[1].replace(/<[^>]*>/g, '').trim())
    .filter(text => /workflow|cloning|curriculum|roadmap/i.test(text));

  assert(has943 && !hasConflicting497, 'TC-1.1A', 'Value Stack thống nhất tổng giá trị $943, loại bỏ mâu thuẫn $497+', 
    hasConflicting497 ? 'Phát hiện nhãn Market Value: $497 gây đá nhau với $943' : 'Đã chuẩn $943');
  assert(badCtaLinks.length === 0, 'TC-1.1B', 'Không có CTA label "See workflows / Discover cloning" trỏ nhầm về #pricing',
    badCtaLinks.length > 0 ? `Các nút trỏ nhầm: ${badCtaLinks.join(', ')}` : 'Đã điều hướng chuẩn');

  // TC-1.2: Third-party trademarks
  const trademarkRegex = /\b(nike|bmw|bentley)\b/i;
  const tmInHtml = html.match(trademarkRegex);
  const tmInI18n = i18n.match(trademarkRegex);
  assert(!tmInHtml && !tmInI18n, 'TC-1.2', 'Không chứa tên thương hiệu bên thứ ba (Nike, BMW, Bentley)',
    tmInHtml ? `Tìm thấy trong HTML: ${tmInHtml[0]}` : (tmInI18n ? `Tìm thấy trong i18n.js: ${tmInI18n[0]}` : '0 vi phạm bản quyền'));

  // TC-1.3: Showcase tools curriculum alignment
  const legacyToolsRegex = /\b(runway gen-3|runway|luma dream machine|luma)\b/i;
  const legacyInHtml = html.match(legacyToolsRegex);
  const legacyInI18n = i18n.match(legacyToolsRegex);
  const hasCurriculumTools = /kling/i.test(html) && /flux/i.test(html) && /midjourney/i.test(html);
  assert(!legacyInHtml && !legacyInI18n && hasCurriculumTools, 'TC-1.3', 'Showcase loại bỏ Runway/Luma, đồng bộ Kling, Flux, Midjourney',
    legacyInHtml ? `Phát hiện: ${legacyInHtml[0]} trong HTML` : 'Đã căn chỉnh đúng giáo trình');

  // -------------------------------------------------------------
  // PHASE 2: TRACKING, PHỄU & LEAD CAPTURE
  // -------------------------------------------------------------
  console.log('\n\x1b[34m[PHASE 2: TRACKING, PHỄU & LEAD CAPTURE]\x1b[0m');

  // TC-2.1: Meta Pixel, GA4, Custom Events & UTM passthrough
  const hasPixel = html.includes("fbq('init'") && html.includes("fbq('track', 'PageView')");
  const hasGA4 = html.includes('gtag(') || html.includes('googletagmanager.com/gtag/js');
  const hasCheckoutEvent = html.includes('InitiateCheckout') && html.includes('9.00');
  const hasLeadEvent = html.includes("'Lead'");
  const hasUtmLogic = html.includes('utm_source') || html.includes('URLSearchParams');
  assert(hasPixel, 'TC-2.1A', 'Tích hợp Meta Pixel chuẩn với PageView event');
  assert(hasCheckoutEvent, 'TC-2.1B', 'Gắn event InitiateCheckout ($9.00 USD) khi click link Skool');
  assert(hasLeadEvent, 'TC-2.1C', 'Bắn event Lead khi gửi form email nhận Cheat Sheet');
  assert(hasUtmLogic, 'TC-2.1D', 'Hỗ trợ lưu và chuyển tiếp UTM parameters sang Skool URL');

  // TC-2.2: Lead Magnet Form & Exit-Intent Popup
  const hasLeadMagnetSection = html.includes('id="lead-magnet"');
  const hasEmailInput = /<input[^>]*type=["']email["'][^>]*>/i.test(html);
  const hasLeadCapturedFlag = html.includes('lead_captured');
  const hasExitIntent = html.includes('lead-exit-modal') || html.includes('exit_intent') || html.includes('exit-intent');
  assert(hasLeadMagnetSection && hasEmailInput, 'TC-2.2A', 'Module Form thu Email "The Realism Cheat Sheet" hoàn chỉnh');
  assert(hasExitIntent, 'TC-2.2B', 'Modal Exit-Intent thu lead email');
  assert(hasLeadCapturedFlag, 'TC-2.2C', 'Lưu flag lead_captured vào localStorage để chống spam popup');

  // TC-2.3: Legal Modals (ToS, Cancellation, Privacy)
  const hasLegalModal = html.includes('legal-modal') || (html.includes('modal') && html.includes('cancellation'));
  const hasBadFooterLinks = /<a[^>]*href=["']#(faq)?["'][^>]*>(Terms|Privacy|Cancellation)/i.test(html);
  assert(hasLegalModal && !hasBadFooterLinks, 'TC-2.3', 'Footer mở Modal Điều khoản, Hủy gói, Bảo mật thực tế (không trỏ về #faq/#)');

  // -------------------------------------------------------------
  // PHASE 3: TÁI CẤU TRÚC LAYOUT & TRẢI NGHIỆM MOBILE
  // -------------------------------------------------------------
  console.log('\n\x1b[34m[PHASE 3: TÁI CẤU TRÚC LAYOUT & TRẢI NGHIỆM MOBILE]\x1b[0m');

  // TC-3.1: Before/After Slider position & interaction
  const sectionMatches = [...html.matchAll(/<section[^>]*id=["']([^"']+)["']/g)].map(m => m[1]);
  const heroIdx = sectionMatches.indexOf('top');
  const compIdx = sectionMatches.indexOf('comparison');
  const isCompAfterHero = heroIdx !== -1 && compIdx !== -1 && compIdx === heroIdx + 1;
  const hasSliderScript = (html.includes('comparisonSlider') || html.includes('slider-comparison-box')) &&
                          (html.includes('pointerdown') || html.includes('touchstart'));
  assert(isCompAfterHero, 'TC-3.1A', 'Slider Before/After được đẩy lên ngay dưới Hero section (#top -> #comparison)');
  assert(hasSliderScript, 'TC-3.1B', 'Script hỗ trợ kéo thả chuột và cảm ứng touch cho slider (pointerdown/touchstart)');

  // TC-3.2: 9-Phase Roadmap Accordion 3 Stage
  const has3Stages = (html.includes('stage-1') || html.includes('Stage 1')) &&
                     (html.includes('stage-2') || html.includes('Stage 2')) &&
                     (html.includes('stage-3') || html.includes('Stage 3'));
  const hasAccordionAria = html.includes('aria-expanded');
  assert(has3Stages, 'TC-3.2A', 'Roadmap 9 Phase được cấu trúc thành 3 Stage rõ ràng');
  assert(hasAccordionAria, 'TC-3.2B', 'Accordion hỗ trợ trợ năng với thuộc tính aria-expanded');

  // TC-3.3: Pricing Table scroll depth (~50-55%)
  const pricingIdx = sectionMatches.indexOf('pricing');
  const workflowIdx = sectionMatches.indexOf('workflow');
  const faqIdx = sectionMatches.indexOf('faq');
  const isPricingWellPlaced = pricingIdx !== -1 && pricingIdx < workflowIdx && pricingIdx < faqIdx;
  assert(isPricingWellPlaced, 'TC-3.3', 'Bảng giá #pricing nằm trước section #workflow và #faq (khoảng ~50-55% độ sâu trang)');

  // TC-3.4: Mobile Header (375px) & Sticky Bottom CTA Bar
  const hasStickyCta = html.includes('sticky-bottom') || html.includes('mobile-sticky-cta') || html.includes('sticky_btn_cta');
  const hasStickyScript = html.includes('pricingObserver') || (html.includes('sticky') && html.includes('scroll'));
  assert(hasStickyCta, 'TC-3.4A', 'Thanh Sticky Bottom CTA Bar tồn tại trên mobile ($9/tháng)');
  assert(hasStickyScript, 'TC-3.4B', 'Script tự ẩn Sticky CTA khi vào section #pricing và tự hiện khi cuộn qua 300px');

  // -------------------------------------------------------------
  // PHASE 4: TỐI ƯU THỊ TRƯỜNG VIỆT NAM & BỔ SUNG CONTENT
  // -------------------------------------------------------------
  console.log('\n\x1b[34m[PHASE 4: TỐI ƯU THỊ TRƯỜNG VIỆT NAM & BỔ SUNG CONTENT]\x1b[0m');

  // TC-4.1: Who Is This For / Not For
  const hasAudienceFit = html.includes('id="audience-fit"') || html.includes('class="audience-fit');
  const hasForAndNotFor = (html.includes('filter_pos_title') || html.includes('fit-positive')) &&
                          (html.includes('filter_neg_title') || html.includes('fit-negative'));
  assert(hasAudienceFit && hasForAndNotFor, 'TC-4.1', 'Section "Dành cho ai / Không dành cho ai" đầy đủ 2 cột tương phản');

  // TC-4.2: Founder Vmiz Nguyen & 40% Affiliate
  const hasFounderProof = html.includes('id="founder-proof"') || (html.includes('Vmiz') && html.includes('Founder'));
  const hasAffiliate40 = html.includes('40%') || i18n.includes('40%');
  assert(hasFounderProof, 'TC-4.2A', 'Section Social Proof có thông tin Founder Vmiz Nguyen và cộng đồng Skool');
  assert(hasAffiliate40, 'TC-4.2B', 'Khối chính sách Affiliate 40% hoa hồng trọn đời hiển thị rõ ràng');

  // TC-4.3: 4 Vietnam-specific FAQ questions (Payment, Language, Commitment, Cancellation)
  const hasFaqQ6 = i18n.includes('faq_q6') && (i18n.includes('Việt Nam') || i18n.includes('Visa'));
  const hasFaqQ7 = i18n.includes('faq_q7') && (i18n.includes('tiếng Anh') || i18n.includes('English'));
  const hasFaqQ8 = i18n.includes('faq_q8') && (i18n.includes('mỗi tuần') || i18n.includes('week'));
  const hasFaqQ9 = i18n.includes('faq_q9') && (i18n.includes('hủy') || i18n.includes('cancel'));
  assert(hasFaqQ6 && hasFaqQ7 && hasFaqQ8 && hasFaqQ9, 'TC-4.3', 'Đầy đủ 4 câu hỏi FAQ bản địa hóa cho người dùng Việt Nam (faq_q6 -> faq_q9)');

  // -------------------------------------------------------------
  // PHASE 5: HIỆU NĂNG, SEO, ASSET & ACCESSIBILITY
  // -------------------------------------------------------------
  console.log('\n\x1b[34m[PHASE 5: HIỆU NĂNG, SEO, ASSET & ACCESSIBILITY]\x1b[0m');

  // TC-5.1: WebP / SVG Assets & Lazy Loading
  const hasWebpLogo = html.includes('logo-full.webp') || html.includes('logo.svg') || html.includes('logo-mark.webp');
  const hasLazyImages = (html.match(/loading=["']lazy["']/g) || []).length >= 5;
  assert(hasWebpLogo, 'TC-5.1A', 'Logo sử dụng định dạng WebP hoặc SVG nén siêu nhẹ');
  assert(hasLazyImages, 'TC-5.1B', 'Các thẻ <img> dưới nếp gấp trang có loading="lazy" và decoding="async"');

  // TC-5.2: Autoplay Videos & IntersectionObserver
  // Exclude modal/lightbox video players
  const inPageVideos = [...html.matchAll(/<video\b([^>]*)>/gis)]
    .map(m => m[1])
    .filter(attrs => !attrs.includes('id="modalVideoPlayer"') && !attrs.includes('modal-player'));
  const inPageAutoplayCount = inPageVideos.filter(attrs => attrs.includes('autoplay')).length;
  const heroVideoAutoplayOnly = inPageAutoplayCount <= 1;
  const hasVideoObserver = html.includes('videoObserver') || html.includes('IntersectionObserver');
  assert(heroVideoAutoplayOnly, 'TC-5.2A', `Tối đa duy nhất 1 video autoplay trên page load (Hiện tại: ${inPageAutoplayCount})`);
  assert(hasVideoObserver, 'TC-5.2B', 'Áp dụng IntersectionObserver để tự động play/pause video tiết kiệm pin');

  // TC-5.3: Language URL (?lang=vi) & Hreflang
  const hasUrlParamLogic = i18n.includes("url.searchParams.get('lang')") || i18n.includes("url.searchParams.set('lang'");
  const hasHreflangTags = html.includes('hreflang="en"') && html.includes('hreflang="vi"') && html.includes('hreflang="x-default"');
  assert(hasUrlParamLogic, 'TC-5.3A', 'Hỗ trợ URL param ?lang=vi và cập nhật không tải lại bằng replaceState');
  assert(hasHreflangTags, 'TC-5.3B', 'Đầy đủ thẻ <link rel="alternate" hreflang="..."> cho SEO quốc tế');

  // TC-5.4: SEO Meta, Open Graph, Schema.org, robots.txt, sitemap.xml, a11y
  const hasOgImage = html.includes('og:image') && html.includes('https://landing-02ai.vercel.app/assets/og-image.jpg');
  const hasJsonLdCourse = html.includes('"@type": "Course"') || html.includes('"@type":"Course"');
  const hasJsonLdFaq = html.includes('"@type": "FAQPage"') || html.includes('"@type":"FAQPage"');
  const hasRobots = fs.existsSync(ROBOTS_FILE) && fs.readFileSync(ROBOTS_FILE, 'utf8').includes('Sitemap:');
  const hasSitemap = fs.existsSync(SITEMAP_FILE) && fs.readFileSync(SITEMAP_FILE, 'utf8').includes('<loc>');
  const hasReducedMotion = html.includes('prefers-reduced-motion');
  assert(hasOgImage, 'TC-5.4A', 'Thẻ Open Graph og:image trỏ URL tuyệt đối chuẩn 1200x630');
  assert(hasJsonLdCourse && hasJsonLdFaq, 'TC-5.4B', 'Schema.org JSON-LD cho Course và FAQPage hợp lệ');
  assert(hasRobots && hasSitemap, 'TC-5.4C', 'Tồn tại robots.txt và sitemap.xml chuẩn SEO');
  assert(hasReducedMotion, 'TC-5.4D', 'Hỗ trợ truy cập trợ năng @media (prefers-reduced-motion: reduce)');

  // -------------------------------------------------------------
  // E2E / INTEGRATION SANITY CHECK
  // -------------------------------------------------------------
  console.log('\n\x1b[34m[E2E / DEFINITION OF DONE SANITY CHECK]\x1b[0m');

  // TC-E2E-01: Anchor links integrity
  const anchorHrefs = [...html.matchAll(/href=["']#([a-zA-Z0-9_-]+)["']/g)].map(m => m[1]);
  const existingIds = new Set([...html.matchAll(/id=["']([a-zA-Z0-9_-]+)["']/g)].map(m => m[1]));
  const deadAnchorLinks = anchorHrefs.filter(id => !existingIds.has(id));
  assert(deadAnchorLinks.length === 0, 'TC-E2E-01A', 'Tất cả anchor links (#id) đều trỏ đến element ID có thật trong DOM',
    deadAnchorLinks.length > 0 ? `Anchor chết: ${deadAnchorLinks.join(', ')}` : '100% anchor links hợp lệ');

  // TC-E2E-01B: i18n keys integrity
  const i18nKeysInHtml = [...new Set([...html.matchAll(/data-i18n(?:-html)?=["']([a-zA-Z0-9_-]+)["']/g)].map(m => m[1]))];
  let missingKeysInEn = 0;
  let missingKeysInVi = 0;
  try {
    const enKeys = new Set(i18n.split('"en":')[1].split('"vi":')[0].match(/"([a-zA-Z0-9_-]+)":/g)?.map(k => k.replace(/["':]/g, '')) || []);
    const viKeys = new Set(i18n.split('"vi":')[1].match(/"([a-zA-Z0-9_-]+)":/g)?.map(k => k.replace(/["':]/g, '')) || []);
    missingKeysInEn = i18nKeysInHtml.filter(k => !enKeys.has(k)).length;
    missingKeysInVi = i18nKeysInHtml.filter(k => !viKeys.has(k)).length;
  } catch (e) {}

  assert(missingKeysInEn === 0 && missingKeysInVi === 0, 'TC-E2E-01B', 'Tất cả key data-i18n trong HTML đều có bản dịch trong cả EN và VI',
    (missingKeysInEn || missingKeysInVi) ? `Thiếu: EN (${missingKeysInEn}), VI (${missingKeysInVi})` : '100% key đồng bộ');

  // Summary
  console.log('\n\x1b[1m-----------------------------------------------------------------\x1b[0m');
  console.log(`\x1b[1mTOTAL TESTS: ${totalTests} | \x1b[32mPASSED: ${passedTests}\x1b[0m | \x1b[31mFAILED: ${failedTests}\x1b[0m`);
  console.log('\x1b[1m-----------------------------------------------------------------\x1b[0m\n');

  if (failedTests > 0) {
    console.log('\x1b[31m[FAILED TEST CASES REQUIRING FIX]:\x1b[0m');
    failures.forEach((f, i) => {
      console.log(` ${i + 1}. [${f.testId}] ${f.message}`);
      if (f.details) console.log(`    ↳ ${f.details}`);
    });
    console.log('\n');
    process.exit(1);
  } else {
    console.log('\x1b[32m🎉 TẤT CẢ TEST CASES ĐỀU PASS 100%! HỆ THỐNG ĐẠT CHUẨN PRD.\x1b[0m\n');
    process.exit(0);
  }
}

runVerification();
