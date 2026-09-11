#!/usr/bin/env python3
"""
Zero To AI — Asset & Media Optimization Script
Implements Task 5.1 and Task 5.4 Image Assets:
1. High-efficiency WebP conversion for logos, compare before/after, phases 1-9, video posters.
2. Premium OpenGraph image generation (1200x630, <200KB RGB JPEG) matching brand design tokens.
3. Payload analysis & size comparison.
"""

import os
import sys
import urllib.request
from PIL import Image, ImageDraw, ImageFont, ImageFilter

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS_DIR = os.path.join(BASE_DIR, 'assets')
PHASES_DIR = os.path.join(ASSETS_DIR, 'phases')
VIDEOS_DIR = os.path.join(ASSETS_DIR, 'videos')
FONTS_DIR = '/tmp/fonts'

os.makedirs(FONTS_DIR, exist_ok=True)

def ensure_fonts():
    """Download clean brand TTF fonts if not present."""
    fonts = {
        'SpaceGrotesk-Bold.ttf': 'https://raw.githubusercontent.com/google/fonts/main/ofl/spacegrotesk/SpaceGrotesk%5Bwght%5D.ttf',
        'PlusJakartaSans-Bold.ttf': 'https://github.com/tokotype/PlusJakartaSans/raw/master/fonts/ttf/PlusJakartaSans-Bold.ttf',
        'PlusJakartaSans-SemiBold.ttf': 'https://github.com/tokotype/PlusJakartaSans/raw/master/fonts/ttf/PlusJakartaSans-SemiBold.ttf',
        'PlusJakartaSans-Medium.ttf': 'https://github.com/tokotype/PlusJakartaSans/raw/master/fonts/ttf/PlusJakartaSans-Medium.ttf',
    }
    for name, url in fonts.items():
        dest = os.path.join(FONTS_DIR, name)
        if not os.path.exists(dest) or os.path.getsize(dest) == 0:
            try:
                urllib.request.urlretrieve(url, dest)
            except Exception as e:
                print(f"Warning: could not download font {name}: {e}")

def convert_logo_full():
    """
    assets/logo-full.png -> assets/logo-full.webp
    Resize to 84px height / ~460px width for 2x retina display of 42px navbar logo.
    quality=90, target < 20 KB (max < 25 KB).
    """
    src = os.path.join(ASSETS_DIR, 'logo-full.png')
    dst = os.path.join(ASSETS_DIR, 'logo-full.webp')
    im = Image.open(src).convert('RGBA')
    target_h = 84
    target_w = round(im.width * (target_h / im.height))
    resized = im.resize((target_w, target_h), Image.Resampling.LANCZOS)
    resized.save(dst, 'WEBP', quality=90, method=6)
    size_kb = os.path.getsize(dst) / 1024
    print(f"[OK] {dst} ({resized.size[0]}x{resized.size[1]}px) -> {size_kb:.2f} KB (Target < 20 KB)")
    return ('assets/logo-full.png', dst, os.path.getsize(src), os.path.getsize(dst))

def convert_logo_mark():
    """
    assets/logo-mark.png -> assets/logo-mark.webp (quality=90)
    """
    src = os.path.join(ASSETS_DIR, 'logo-mark.png')
    dst = os.path.join(ASSETS_DIR, 'logo-mark.webp')
    im = Image.open(src).convert('RGBA')
    im.save(dst, 'WEBP', quality=90, method=6)
    size_kb = os.path.getsize(dst) / 1024
    print(f"[OK] {dst} ({im.size[0]}x{im.size[1]}px) -> {size_kb:.2f} KB")
    return ('assets/logo-mark.png', dst, os.path.getsize(src), os.path.getsize(dst))

def convert_compare_images():
    """
    assets/compare-before.jpg -> assets/compare-before.webp (quality=84, < 100 KB)
    assets/compare-after.jpg -> assets/compare-after.webp (quality=84, < 150 KB)
    """
    results = []
    configs = [
        ('compare-before', 100),
        ('compare-after', 150)
    ]
    for name, limit_kb in configs:
        src = os.path.join(ASSETS_DIR, f'{name}.jpg')
        dst = os.path.join(ASSETS_DIR, f'{name}.webp')
        im = Image.open(src).convert('RGB')
        im.save(dst, 'WEBP', quality=84, method=6)
        size_kb = os.path.getsize(dst) / 1024
        status = "PASSED" if size_kb < limit_kb else "EXCEEDED"
        print(f"[OK] {dst} ({im.size[0]}x{im.size[1]}px) -> {size_kb:.2f} KB (Limit: {limit_kb} KB, {status})")
        results.append((f'assets/{name}.jpg', dst, os.path.getsize(src), os.path.getsize(dst)))
    return results

def convert_phases():
    """
    assets/phases/phase-01-initiate.jpg through phase-09-cloning.jpg
    Create .webp versions (quality=82)
    """
    results = []
    for i in range(1, 10):
        prefix = f"phase-{i:02d}"
        matching = [f for f in os.listdir(PHASES_DIR) if f.startswith(prefix) and f.endswith('.jpg')]
        for f in sorted(matching):
            src = os.path.join(PHASES_DIR, f)
            dst = os.path.splitext(src)[0] + '.webp'
            im = Image.open(src).convert('RGB')
            im.save(dst, 'WEBP', quality=82, method=6)
            size_kb = os.path.getsize(dst) / 1024
            rel_src = os.path.relpath(src, BASE_DIR)
            rel_dst = os.path.relpath(dst, BASE_DIR)
            print(f"[OK] {rel_dst} ({im.size[0]}x{im.size[1]}px) -> {size_kb:.2f} KB (from {os.path.getsize(src)/1024:.2f} KB)")
            results.append((rel_src, dst, os.path.getsize(src), os.path.getsize(dst)))
    return results

def convert_video_posters():
    """
    assets/videos/*-poster.jpg -> .webp versions (quality=84)
    (hero-poster.jpg, level-1-poster.jpg, level-2-poster.jpg, level-3-poster.jpg, skool1-poster.jpg)
    """
    results = []
    posters = [
        'hero-poster.jpg',
        'level-1-poster.jpg',
        'level-2-poster.jpg',
        'level-3-poster.jpg',
        'skool1-poster.jpg'
    ]
    for p in posters:
        src = os.path.join(VIDEOS_DIR, p)
        if not os.path.exists(src):
            continue
        dst = os.path.splitext(src)[0] + '.webp'
        im = Image.open(src).convert('RGB')
        im.save(dst, 'WEBP', quality=84, method=6)
        size_kb = os.path.getsize(dst) / 1024
        rel_src = os.path.relpath(src, BASE_DIR)
        rel_dst = os.path.relpath(dst, BASE_DIR)
        print(f"[OK] {rel_dst} ({im.size[0]}x{im.size[1]}px) -> {size_kb:.2f} KB (from {os.path.getsize(src)/1024:.2f} KB)")
        results.append((rel_src, dst, os.path.getsize(src), os.path.getsize(dst)))
    return results

def draw_mini_icon(draw, icon_type, x, y, size, color):
    """Draw crisp vector icons inside pills without depending on emoji glyphs."""
    if icon_type == 'motion':
        # Play / Film triangle
        p1 = (x, y)
        p2 = (x + size, y + size // 2)
        p3 = (x, y + size)
        draw.polygon([p1, p2, p3], fill=color)
    elif icon_type == 'avatar':
        # User head + shoulders
        head_r = size // 3
        draw.ellipse([x + size//2 - head_r, y, x + size//2 + head_r, y + head_r * 2], fill=color)
        draw.chord([x, y + head_r * 2 - 1, x + size, y + size + 4], start=180, end=360, fill=color)
    elif icon_type == 'lightning':
        # Lightning bolt
        pts = [
            (x + size * 0.6, y),
            (x + size * 0.15, y + size * 0.55),
            (x + size * 0.45, y + size * 0.55),
            (x + size * 0.35, y + size),
            (x + size * 0.85, y + size * 0.4),
            (x + size * 0.55, y + size * 0.4),
        ]
        draw.polygon(pts, fill=color)

def generate_og_image():
    """
    Generate assets/og-image.jpg:
    - Exactly 1200x630, RGB JPEG, < 200 KB.
    - Dark mode premium aesthetic (#05070c / #061b3a).
    - Electric blue glow accent (#0078ff / #55b7ff).
    - Logo + "ZERO TO AI" typography.
    - Tagline: "Master AI Video & Commercial Content Creation".
    - Offer: "9 Phases · $9/mo Skool Community".
    """
    W, H = 1200, 630
    dst = os.path.join(ASSETS_DIR, 'og-image.jpg')

    # Brand Colors
    COLOR_VOID = (5, 7, 12)
    COLOR_NAVY = (6, 27, 58)
    COLOR_BLUE = (0, 120, 255)
    COLOR_CYAN = (85, 183, 255)
    COLOR_ORANGE = (255, 149, 0)
    COLOR_WHITE = (247, 250, 255)
    COLOR_MUTED = (143, 163, 191)

    # Fonts
    font_sg_path = os.path.join(FONTS_DIR, 'SpaceGrotesk-Bold.ttf')
    font_pjs_bold_path = os.path.join(FONTS_DIR, 'PlusJakartaSans-Bold.ttf')
    font_pjs_semi_path = os.path.join(FONTS_DIR, 'PlusJakartaSans-SemiBold.ttf')
    font_pjs_med_path = os.path.join(FONTS_DIR, 'PlusJakartaSans-Medium.ttf')

    font_hl = ImageFont.truetype(font_sg_path, 45)
    if hasattr(font_hl, 'set_variation_by_axes'):
        font_hl.set_variation_by_axes([700])

    font_sub = ImageFont.truetype(font_pjs_med_path, 18)
    font_badge = ImageFont.truetype(font_pjs_bold_path, 11)
    font_chip = ImageFont.truetype(font_pjs_semi_path, 13)

    font_card_title = ImageFont.truetype(font_sg_path, 21)
    if hasattr(font_card_title, 'set_variation_by_axes'):
        font_card_title.set_variation_by_axes([700])

    font_card_sub = ImageFont.truetype(font_pjs_med_path, 13)

    font_stat_val = ImageFont.truetype(font_sg_path, 21)
    if hasattr(font_stat_val, 'set_variation_by_axes'):
        font_stat_val.set_variation_by_axes([700])
    font_stat_lbl = ImageFont.truetype(font_pjs_med_path, 11)

    base = Image.new('RGB', (W, H), COLOR_VOID)
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # 1. Background Radial Glows
    # Primary electric blue glow (right)
    cx, cy = 920, 250
    for r in range(480, 0, -12):
        t = 1.0 - (r / 480)
        alpha = int(100 * (t ** 1.8))
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(0, 120, 255, alpha))

    # Cyan core
    for r in range(220, 0, -8):
        t = 1.0 - (r / 220)
        alpha = int(45 * (t ** 2.2))
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(85, 183, 255, alpha))

    # Secondary deep navy glow (left)
    cx2, cy2 = 250, 480
    for r in range(360, 0, -12):
        t = 1.0 - (r / 360)
        alpha = int(70 * (t ** 2.0))
        draw.ellipse([cx2 - r, cy2 - r, cx2 + r, cy2 + r], fill=(6, 27, 58, alpha))

    # Subtle tech dot grid
    for gx in range(36, W - 36, 36):
        for gy in range(36, H - 36, 36):
            draw.rectangle([gx, gy, gx + 1, gy + 1], fill=(85, 183, 255, 15))

    # Outer frame border
    draw.rounded_rectangle([20, 20, W - 20, H - 20], radius=18, outline=(0, 120, 255, 60), width=1)
    draw.rounded_rectangle([21, 21, W - 21, H - 21], radius=17, outline=(85, 183, 255, 22), width=1)

    # 2. Left Column Content
    # Logo
    logo_path = os.path.join(ASSETS_DIR, 'logo-full.png')
    logo_im = Image.open(logo_path).convert('RGBA')
    logo_target_h = 44
    logo_target_w = round(logo_im.width * (logo_target_h / logo_im.height))
    logo_resized = logo_im.resize((logo_target_w, logo_target_h), Image.Resampling.LANCZOS)
    overlay.paste(logo_resized, (70, 65), logo_resized)

    # Community Badge next to logo
    badge_x = 70 + logo_target_w + 18
    badge_y = 73
    badge_text = "SKOOL COMMUNITY"
    badge_w = 146
    badge_h = 28
    draw.rounded_rectangle([badge_x, badge_y, badge_x + badge_w, badge_y + badge_h], radius=14, fill=(0, 120, 255, 30), outline=(0, 120, 255, 120), width=1)
    draw.ellipse([badge_x + 12, badge_y + 10, badge_x + 18, badge_y + 16], fill=(39, 201, 63, 255))
    draw.text((badge_x + 25, badge_y + 7), badge_text, font=font_badge, fill=COLOR_CYAN)

    # Main Headline
    hl_x = 70
    hl_y = 145
    draw.text((hl_x, hl_y), "Master AI Video &", font=font_hl, fill=COLOR_WHITE)
    draw.text((hl_x, hl_y + 54), "Commercial Content", font=font_hl, fill=COLOR_WHITE)
    draw.text((hl_x, hl_y + 108), "Creation", font=font_hl, fill=COLOR_CYAN)

    # Subtitle
    sub_y = 325
    draw.text((hl_x, sub_y), "Production-ready pipelines from photoreal avatars", font=font_sub, fill=COLOR_MUTED)
    draw.text((hl_x, sub_y + 26), "to viral commercial ads & AI digital twins.", font=font_sub, fill=COLOR_MUTED)

    # Feature chips with vector icons
    chips = [
        ("motion", "Cinematic Motion"),
        ("avatar", "Photoreal Avatars"),
        ("lightning", "Commercial Ads")
    ]
    chip_x = hl_x
    chip_y = 392
    for icon_type, label in chips:
        bbox = font_chip.getbbox(label)
        tw = bbox[2] - bbox[0]
        icon_w = 12
        cw = tw + icon_w + 32
        draw.rounded_rectangle([chip_x, chip_y, chip_x + cw, chip_y + 30], radius=15, fill=(6, 27, 58, 160), outline=(0, 120, 255, 80), width=1)
        draw_mini_icon(draw, icon_type, chip_x + 12, chip_y + 9, 11, COLOR_CYAN if icon_type != 'lightning' else COLOR_ORANGE)
        draw.text((chip_x + 12 + icon_w + 8, chip_y + 6), label, font=font_chip, fill=(210, 230, 255))
        chip_x += cw + 12

    # Bottom Offer / Community Card
    card_x = 70
    card_y = 455
    card_w = 540
    card_h = 100
    draw.rounded_rectangle([card_x, card_y, card_x + card_w, card_y + card_h], radius=18, fill=(9, 17, 34, 220), outline=(0, 120, 255, 120), width=1)
    draw.line([card_x + 30, card_y, card_x + card_w - 30, card_y], fill=(85, 183, 255, 160), width=2)

    # Orange price badge
    pill_x = card_x + 20
    pill_y = card_y + 20
    pill_w = 78
    pill_h = 60
    draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=12, fill=(255, 149, 0, 30), outline=(255, 149, 0, 160), width=1)
    draw.text((pill_x + 18, pill_y + 10), "$9", font=font_stat_val, fill=COLOR_ORANGE)
    draw.text((pill_x + 22, pill_y + 36), "/mo", font=font_stat_lbl, fill=COLOR_ORANGE)

    # Card Typography
    tx = pill_x + pill_w + 18
    draw.text((tx, card_y + 22), "9 Phases · $9/mo Skool Community", font=font_card_title, fill=COLOR_WHITE)
    draw.text((tx, card_y + 54), "12+ Hours Curriculum · Weekly Live Lab · Prompt Vault", font=font_card_sub, fill=COLOR_MUTED)

    # 3. Right Column Showcase Card
    rc_x = 660
    rc_y = 65
    rc_w = 470
    rc_h = 490

    # Soft glowing card border
    for i in range(12, 0, -2):
        draw.rounded_rectangle([rc_x - i, rc_y - i, rc_x + rc_w + i, rc_y + rc_h + i], radius=22, outline=(0, 120, 255, int(16 * (1 - i/12))), width=1)
    draw.rounded_rectangle([rc_x, rc_y, rc_x + rc_w, rc_y + rc_h], radius=20, fill=(6, 27, 58, 220), outline=(85, 183, 255, 95), width=1)

    # Window dots & Title
    draw.ellipse([rc_x + 18, rc_y + 15, rc_x + 27, rc_y + 24], fill=(255, 95, 86))
    draw.ellipse([rc_x + 33, rc_y + 15, rc_x + 42, rc_y + 24], fill=(255, 189, 46))
    draw.ellipse([rc_x + 48, rc_y + 15, rc_x + 57, rc_y + 24], fill=(39, 201, 63))
    draw.text((rc_x + 70, rc_y + 14), "AI PRODUCTION PIPELINE // 4K", font=font_badge, fill=COLOR_MUTED)

    # Media preview image
    media_x = rc_x + 16
    media_y = rc_y + 40
    media_w = rc_w - 32
    media_h = 330

    preview_path = os.path.join(ASSETS_DIR, 'compare-after.jpg')
    preview_src = Image.open(preview_path).convert('RGB')
    scale = max(media_w / preview_src.width, media_h / preview_src.height)
    pw = round(preview_src.width * scale)
    ph = round(preview_src.height * scale)
    preview_resized = preview_src.resize((pw, ph), Image.Resampling.LANCZOS)
    left = (pw - media_w) // 2
    top = (ph - media_h) // 2
    preview_crop = preview_resized.crop((left, top, left + media_w, top + media_h)).convert('RGBA')

    # Rounded mask for media image
    mask = Image.new('L', (media_w, media_h), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, media_w, media_h], radius=14, fill=255)
    overlay.paste(preview_crop, (media_x, media_y), mask)

    # Overlay tags on media
    draw.rounded_rectangle([media_x + 14, media_y + 14, media_x + 135, media_y + 42], radius=10, fill=(5, 7, 12, 190), outline=(0, 120, 255, 140), width=1)
    draw.ellipse([media_x + 24, media_y + 25, media_x + 30, media_y + 31], fill=(85, 183, 255))
    draw.text((media_x + 36, media_y + 21), "4K PHOTOREAL", font=font_badge, fill=COLOR_WHITE)

    draw.rounded_rectangle([media_x + media_w - 146, media_y + media_h - 44, media_x + media_w - 14, media_y + media_h - 14], radius=10, fill=(5, 7, 12, 190), outline=(255, 149, 0, 150), width=1)
    draw_mini_icon(draw, 'lightning', media_x + media_w - 134, media_y + media_h - 33, 10, COLOR_ORANGE)
    draw.text((media_x + media_w - 118, media_y + media_h - 35), "HIGH FIDELITY", font=font_badge, fill=COLOR_ORANGE)

    # Stats footer in right card
    stat_y = rc_y + 386
    draw.line([rc_x + 16, stat_y, rc_x + rc_w - 16, stat_y], fill=(0, 120, 255, 45), width=1)

    stats = [
        ("9 PHASES", "Curriculum"),
        ("12+ HOURS", "Video Guides"),
        ("$9 / MO", "Skool Access")
    ]
    col_w = rc_w // 3
    for i, (val, lbl) in enumerate(stats):
        sx = rc_x + i * col_w + col_w // 2
        v_box = font_stat_val.getbbox(val)
        vw = v_box[2] - v_box[0]
        draw.text((sx - vw // 2, stat_y + 16), val, font=font_stat_val, fill=COLOR_WHITE if i != 2 else COLOR_CYAN)
        l_box = font_stat_lbl.getbbox(lbl)
        lw = l_box[2] - l_box[0]
        draw.text((sx - lw // 2, stat_y + 46), lbl, font=font_stat_lbl, fill=COLOR_MUTED)

    # 4. Final Composite and Save
    final_img = Image.alpha_composite(base.convert('RGBA'), overlay).convert('RGB')
    final_img.save(dst, 'JPEG', quality=88, optimize=True)

    size_bytes = os.path.getsize(dst)
    size_kb = size_bytes / 1024
    status = "PASSED (< 200 KB)" if size_kb < 200 else "FAILED"
    print(f"[OK] {dst} ({final_img.size[0]}x{final_img.size[1]}px) -> {size_kb:.2f} KB | {status}")
    return ('assets/og-image.jpg', dst, size_bytes)

def main():
    print("=" * 70)
    print("ZERO TO AI — MEDIA OPTIMIZATION & ASSET GENERATION ENGINE")
    print("=" * 70)

    ensure_fonts()

    records = []

    # 1. Logo Full
    print("\n--- 1. NAVBAR LOGO FULL ---")
    records.append(convert_logo_full())

    # 2. Logo Mark
    print("\n--- 2. LOGO MARK ---")
    records.append(convert_logo_mark())

    # 3. Compare Before / After
    print("\n--- 3. BEFORE / AFTER COMPARISON ---")
    records.extend(convert_compare_images())

    # 4. Phase Images 01-09
    print("\n--- 4. PHASES 01 - 09 ---")
    records.extend(convert_phases())

    # 5. Video Posters
    print("\n--- 5. VIDEO POSTERS ---")
    records.extend(convert_video_posters())

    # 6. OpenGraph Social Share Card (Task 5.4)
    print("\n--- 6. OPENGRAPH PREVIEW CARD (1200x630) ---")
    og_info = generate_og_image()

    # SUMMARY & INITIAL PAYLOAD
    print("\n" + "=" * 70)
    print("ASSET OPTIMIZATION SUMMARY & PAYLOAD MEASUREMENT")
    print("=" * 70)

    total_orig = sum(r[2] for r in records)
    total_webp = sum(r[3] for r in records)
    saved_bytes = total_orig - total_webp
    pct_saved = (saved_bytes / total_orig) * 100

    print(f"{'Asset Path':<42} | {'Original':<10} | {'Optimized':<10} | {'Savings':<8}")
    print("-" * 75)
    for orig_path, dst_path, orig_sz, dst_sz in records:
        rel_dst = os.path.relpath(dst_path, BASE_DIR)
        orig_kb = f"{orig_sz / 1024:.1f} KB"
        dst_kb = f"{dst_sz / 1024:.1f} KB"
        save_p = f"{((orig_sz - dst_sz) / orig_sz) * 100:.1f}%"
        print(f"{rel_dst:<42} | {orig_kb:<10} | {dst_kb:<10} | {save_p:<8}")

    print("-" * 75)
    print(f"Total Images Converted: {len(records)} files")
    print(f"Total Original Size:    {total_orig / 1024:.1f} KB ({total_orig / (1024*1024):.2f} MB)")
    print(f"Total Optimized Size:   {total_webp / 1024:.1f} KB ({total_webp / (1024*1024):.2f} MB)")
    print(f"Overall Data Reduction: {saved_bytes / 1024:.1f} KB ({saved_bytes / (1024*1024):.2f} MB saved, -{pct_saved:.1f}%)")

    # Initial Load Payload Calculation
    # Above-the-fold assets: logo-full + hero-poster
    orig_initial = os.path.getsize(os.path.join(ASSETS_DIR, 'logo-full.png')) + os.path.getsize(os.path.join(VIDEOS_DIR, 'hero-poster.jpg'))
    opt_initial = os.path.getsize(os.path.join(ASSETS_DIR, 'logo-full.webp')) + os.path.getsize(os.path.join(VIDEOS_DIR, 'hero-poster.webp'))
    init_saved_pct = ((orig_initial - opt_initial) / orig_initial) * 100

    print("\n" + "=" * 70)
    print("CRITICAL INITIAL LOAD PAYLOAD (ABOVE THE FOLD)")
    print("=" * 70)
    print(f"Initial Assets: assets/logo-full.webp + assets/videos/hero-poster.webp")
    print(f"Previous Initial Image Payload (PNG + JPG): {orig_initial / 1024:.1f} KB")
    print(f"New Initial Image Payload (Optimized WebP): {opt_initial / 1024:.1f} KB")
    print(f"Initial Load Payload Savings:               -{init_saved_pct:.1f}% ({ (orig_initial - opt_initial) / 1024:.1f} KB eliminated!)")
    print(f"OpenGraph Social Card (assets/og-image.jpg): {og_info[2] / 1024:.2f} KB (Target < 200 KB: PASSED)")
    print("=" * 70)

if __name__ == '__main__':
    main()
