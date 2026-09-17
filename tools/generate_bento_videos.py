#!/usr/bin/env python3
"""
Zero To AI — Bento Video Generator
Generates high-definition, commercial-grade illustrative video loops (H.264 MP4, 1280x720, 30fps)
for Bento Card 4 (Clone Yourself · HeyGen & ElevenLabs) and Bento Card 5 (Skool Community & Gamification).
"""

import os
import sys
import math
import io
import subprocess
from PIL import Image, ImageDraw, ImageFont, ImageFilter

WIDTH = 1280
HEIGHT = 720
FPS = 30
DURATION_SEC = 6
TOTAL_FRAMES = FPS * DURATION_SEC

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS_DIR = os.path.join(BASE_DIR, 'assets')
VIDEOS_DIR = os.path.join(ASSETS_DIR, 'videos')
PHASES_DIR = os.path.join(ASSETS_DIR, 'phases')

# Choose best available system fonts
FONT_SANS = '/System/Library/Fonts/Supplemental/Arial.ttf'
FONT_BOLD = '/System/Library/Fonts/Supplemental/Arial Bold.ttf'
FONT_MONO = '/System/Library/Fonts/Supplemental/Courier New Bold.ttf'

def get_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()

def draw_rounded_rect(draw, xy, radius, fill=None, outline=None, width=1):
    x0, y0, x1, y1 = xy
    draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=fill, outline=outline, width=width)

# ═══════════════════════════════════════════════════════════════════
# 1. BENTO CARD 4: CLONE YOURSELF (HEYGEN & ELEVENLABS)
# ═══════════════════════════════════════════════════════════════════
def generate_clone_video():
    print("[1/2] Generating Bento Card 4: Clone Yourself (HeyGen & ElevenLabs)...")
    out_mp4 = os.path.join(VIDEOS_DIR, 'bento-clone.mp4')
    out_poster = os.path.join(VIDEOS_DIR, 'bento-clone-poster.webp')

    avatar_path = os.path.join(PHASES_DIR, 'phase-09-cloning.webp')
    if not os.path.exists(avatar_path):
        avatar_path = os.path.join(PHASES_DIR, 'phase-09-cloning.jpg')
    raw_avatar = Image.open(avatar_path).convert('RGBA')

    # Crop & scale avatar to fit right-hand portrait area
    aw, ah = raw_avatar.size
    crop_box = (int(aw * 0.1), int(ah * 0.0), int(aw * 0.9), int(ah * 1.0))
    cropped_avatar = raw_avatar.crop(crop_box).resize((660, 720), Image.Resampling.LANCZOS)

    cmd = [
        'ffmpeg', '-y',
        '-f', 'image2pipe',
        '-vcodec', 'png',
        '-r', str(FPS),
        '-i', '-',
        '-c:v', 'libx264',
        '-preset', 'medium',
        '-crf', '22',
        '-pix_fmt', 'yuv420p',
        '-movflags', '+faststart',
        out_mp4
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stderr=subprocess.PIPE)

    f_bold_28 = get_font(FONT_BOLD, 28)
    f_bold_20 = get_font(FONT_BOLD, 20)
    f_bold_16 = get_font(FONT_BOLD, 16)
    f_sans_15 = get_font(FONT_SANS, 15)
    f_sans_13 = get_font(FONT_SANS, 13)
    f_mono_14 = get_font(FONT_MONO, 14)
    f_mono_12 = get_font(FONT_MONO, 12)

    face_cx = 960
    face_cy = 280

    for frame_idx in range(TOTAL_FRAMES):
        t = frame_idx / TOTAL_FRAMES
        angle = t * 2 * math.pi
        
        frame = Image.new('RGBA', (WIDTH, HEIGHT), (6, 12, 24, 255))
        draw = ImageDraw.Draw(frame)

        # Ambient background glow
        bg_glow = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
        gdraw = ImageDraw.Draw(bg_glow)
        gdraw.ellipse([700, 100, 1200, 600], fill=(0, 100, 240, 40))
        gdraw.ellipse([100, 300, 600, 700], fill=(255, 107, 0, 20))
        bg_glow = bg_glow.filter(ImageFilter.GaussianBlur(60))
        frame.alpha_composite(bg_glow)

        # Subtle avatar breathing motion
        breathe_y = int(4 * math.sin(angle))
        breathe_x = int(2 * math.cos(angle))
        avatar_x = 640 + breathe_x
        avatar_y = 0 + breathe_y
        
        avatar_comp = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
        avatar_comp.paste(cropped_avatar, (avatar_x, avatar_y))
        
        # Left edge feather mask
        feather = Image.new('L', (WIDTH, HEIGHT), 255)
        fdraw = ImageDraw.Draw(feather)
        for fx in range(avatar_x, avatar_x + 180):
            alpha_val = int(255 * ((fx - avatar_x) / 180.0))
            fdraw.line([(fx, 0), (fx, HEIGHT)], fill=alpha_val)
        for fx in range(0, avatar_x):
            fdraw.line([(fx, 0), (fx, HEIGHT)], fill=0)
        avatar_comp.putalpha(feather)
        frame.alpha_composite(avatar_comp)

        draw = ImageDraw.Draw(frame)

        # -------------------------------------------------------------
        # 1. AI Face Landmark Tracking Mesh & Scanner
        # -------------------------------------------------------------
        cur_cx = face_cx + breathe_x
        cur_cy = face_cy + breathe_y

        bx0, by0, bx1, by1 = cur_cx - 160, cur_cy - 160, cur_cx + 160, cur_cy + 220
        bracket_len = 24
        cyan_accent = (0, 229, 255, 230)
        cyan_dim = (0, 229, 255, 90)

        # Top-left
        draw.line([(bx0, by0), (bx0 + bracket_len, by0)], fill=cyan_accent, width=2)
        draw.line([(bx0, by0), (bx0, by0 + bracket_len)], fill=cyan_accent, width=2)
        # Top-right
        draw.line([(bx1, by0), (bx1 - bracket_len, by0)], fill=cyan_accent, width=2)
        draw.line([(bx1, by0), (bx1, by0 + bracket_len)], fill=cyan_accent, width=2)
        # Bottom-left
        draw.line([(bx0, by1), (bx0 + bracket_len, by1)], fill=cyan_accent, width=2)
        draw.line([(bx0, by1), (bx0, by1 - bracket_len)], fill=cyan_accent, width=2)
        # Bottom-right
        draw.line([(bx1, by1), (bx1 - bracket_len, by1)], fill=cyan_accent, width=2)
        draw.line([(bx1, by1), (bx1, by1 - bracket_len)], fill=cyan_accent, width=2)

        draw.text((bx0, by0 - 24), "[ AI FACIAL MESH · HEYGEN 3.0 ]", font=f_mono_12, fill=cyan_accent)
        draw.text((bx1 - 100, by1 + 8), "SYNC: 99.8%", font=f_mono_12, fill=(0, 255, 170, 230))

        # Vertical scanning laser sweep
        sweep_y = by0 + int((by1 - by0) * (0.5 + 0.5 * math.sin(angle * 2)))
        draw.line([(bx0, sweep_y), (bx1, sweep_y)], fill=(0, 255, 240, 220), width=2)
        draw.line([(bx0, sweep_y - 1), (bx1, sweep_y - 1)], fill=(0, 229, 255, 100), width=1)
        draw.line([(bx0, sweep_y + 1), (bx1, sweep_y + 1)], fill=(0, 229, 255, 100), width=1)

        # Dynamic mouth phoneme motion
        mouth_open = int(4 * math.sin(t * 16 * math.pi))
        
        mesh_points = [
            (cur_cx - 100, cur_cy + 60), (cur_cx - 70, cur_cy + 130), (cur_cx, cur_cy + 175),
            (cur_cx + 70, cur_cy + 130), (cur_cx + 100, cur_cy + 60),
            (cur_cx - 55, cur_cy - 45), (cur_cx - 25, cur_cy - 48),
            (cur_cx + 25, cur_cy - 48), (cur_cx + 55, cur_cy - 45),
            (cur_cx, cur_cy - 20), (cur_cx, cur_cy + 25),
            (cur_cx - 18, cur_cy + 40), (cur_cx + 18, cur_cy + 40),
            (cur_cx - 35, cur_cy + 85), (cur_cx, cur_cy + 75 - mouth_open), (cur_cx + 35, cur_cy + 85),
            (cur_cx, cur_cy + 95 + mouth_open)
        ]

        lines = [
            (0, 1), (1, 2), (2, 3), (3, 4),
            (5, 6), (7, 8), (6, 9), (7, 9),
            (9, 10), (10, 11), (10, 12), (11, 13), (12, 15),
            (13, 14), (14, 15), (15, 16), (16, 13)
        ]
        for p1_idx, p2_idx in lines:
            pt1 = mesh_points[p1_idx]
            pt2 = mesh_points[p2_idx]
            draw.line([pt1, pt2], fill=cyan_dim, width=1)

        for pt in mesh_points:
            draw.ellipse([pt[0] - 2, pt[1] - 2, pt[0] + 2, pt[1] + 2], fill=(0, 255, 230, 220))

        # -------------------------------------------------------------
        # 2. Left Panel: High-Tech Control Center & Multilingual Badges
        # -------------------------------------------------------------
        draw_rounded_rect(draw, (48, 40, 520, 80), radius=8, fill=(12, 22, 42, 200), outline=(0, 120, 255, 100), width=1)
        draw.ellipse([64, 56, 74, 66], fill=(0, 255, 136, 255))
        draw.text((86, 51), "PHASE 09 · DIGITAL TWIN & CLONING", font=f_bold_16, fill=(255, 255, 255, 240))
        draw.text((435, 52), "4K 60FPS", font=f_mono_12, fill=(0, 229, 255, 220))

        draw_rounded_rect(draw, (48, 100, 580, 410), radius=12, fill=(10, 18, 36, 220), outline=(30, 60, 110, 150), width=1)
        draw.text((68, 118), "MULTILINGUAL AI VOICE LOCALIZATION", font=f_mono_12, fill=(140, 170, 210, 220))
        draw.text((68, 138), "Seamless Global Presence Without Cameras", font=f_bold_20, fill=(255, 255, 255, 245))

        cycle_idx = int(t * 4) % 4
        langs = [
            ("EN", "English (United States)", "Automating longform video & education at 10x scale.", (0, 120, 255)),
            ("VI", "Tiếng Việt (Vietnam)", "Nhân bản khuôn mặt & giọng nói tiếng Việt tự nhiên 100%.", (255, 107, 0)),
            ("JP", "Japanese (Tokyo Studio)", "High-accuracy AI voice & dynamic lip-sync generation.", (200, 50, 255)),
            ("ES", "Español (Global)", "Clonación digital hiperrealista con sincronización labial.", (0, 220, 180))
        ]

        tab_y = 185
        for i, (code, title, desc, col) in enumerate(langs):
            is_active = (i == cycle_idx)
            box_fill = (col[0]//4, col[1]//4, col[2]//4, 180) if is_active else (15, 24, 45, 120)
            box_border = col if is_active else (40, 65, 100, 120)
            draw_rounded_rect(draw, (68, tab_y, 560, tab_y + 44), radius=6, fill=box_fill, outline=box_border, width=1 if not is_active else 2)
            
            draw.text((82, tab_y + 11), f"[{code}]", font=f_bold_16, fill=(255, 255, 255, 255) if is_active else (160, 180, 210, 200))
            draw.text((140, tab_y + 13), title, font=f_bold_16 if is_active else f_sans_15, fill=(255, 255, 255, 255) if is_active else (140, 160, 190, 180))
            
            if is_active:
                draw.text((450, tab_y + 13), "● ACTIVE SYNC", font=f_mono_12, fill=col)
            tab_y += 54

        active_lang = langs[cycle_idx]
        draw_rounded_rect(draw, (68, 420, 560, 465), radius=6, fill=(5, 10, 22, 230), outline=(25, 45, 80, 150))
        draw.text((80, 432), f"SCRIPT: \"{active_lang[2]}\"", font=f_sans_13, fill=(220, 235, 255, 240))

        # -------------------------------------------------------------
        # 3. Bottom: ElevenLabs Audio Waveform Spectrum
        # -------------------------------------------------------------
        draw_rounded_rect(draw, (48, 480, 580, 670), radius=12, fill=(10, 18, 36, 220), outline=(30, 60, 110, 150), width=1)
        draw.text((68, 496), "ELEVENLABS NEURAL VOICE WAVEFORM", font=f_mono_12, fill=(0, 229, 255, 220))
        draw.text((440, 496), "LATENCY: 0.18s", font=f_mono_12, fill=(0, 255, 150, 220))

        bar_count = 36
        bar_w = 11
        bar_gap = 3
        start_x = 68
        wave_base_y = 620

        for bi in range(bar_count):
            h_var = math.sin(t * 14 * math.pi + bi * 0.4) * math.cos(t * 8 * math.pi + bi * 0.2)
            h = int(14 + 55 * abs(h_var) + 15 * math.sin(t * 20 * math.pi + bi * 0.8))
            bx = start_x + bi * (bar_w + bar_gap)
            by = wave_base_y - h
            
            ratio = bi / bar_count
            bar_color = (
                int(0 + 255 * ratio * 0.6),
                int(120 + 135 * (1 - ratio)),
                int(255 * (1 - ratio * 0.3)),
                240
            )
            draw_rounded_rect(draw, (bx, by, bx + bar_w, wave_base_y), radius=3, fill=bar_color)
            draw.line([(bx, by - 3), (bx + bar_w, by - 3)], fill=(255, 140, 0, 220), width=2)

        draw.text((68, 636), "Voice Fidelity: 48kHz Studio | Jitter: 0.01% | Zero Retakes", font=f_mono_12, fill=(140, 165, 200, 200))

        draw_rounded_rect(draw, (WIDTH - 280, 30, WIDTH - 30, 66), radius=8, fill=(8, 14, 28, 200), outline=(0, 229, 255, 80))
        draw.text((WIDTH - 265, 42), "● ZERO TO AI · PHASE 09", font=f_mono_12, fill=(0, 229, 255, 240))

        buf = io.BytesIO()
        frame.save(buf, format='PNG')
        proc.stdin.write(buf.getvalue())

        if frame_idx == 30:
            frame.convert('RGB').save(out_poster, 'WEBP', quality=88)

    proc.stdin.close()
    proc.wait()
    print(f"  ✓ Finished: {out_mp4} ({os.path.getsize(out_mp4)/1024:.1f} KB)")
    print(f"  ✓ Poster: {out_poster}")

# ═══════════════════════════════════════════════════════════════════
# 2. BENTO CARD 5: SKOOL COMMUNITY & GAMIFICATION (BUILD LAB)
# ═══════════════════════════════════════════════════════════════════
def generate_gamification_video():
    print("[2/2] Generating Bento Card 5: Skool Community & Gamification (Build Lab)...")
    out_mp4 = os.path.join(VIDEOS_DIR, 'bento-gamification.mp4')
    out_poster = os.path.join(VIDEOS_DIR, 'bento-gamification-poster.webp')

    ad_path = os.path.join(PHASES_DIR, 'phase-05-adverts.webp')
    if not os.path.exists(ad_path):
        ad_path = os.path.join(PHASES_DIR, 'phase-04-videos.webp')
    raw_preview = Image.open(ad_path).convert('RGBA').resize((540, 300), Image.Resampling.LANCZOS)

    cmd = [
        'ffmpeg', '-y',
        '-f', 'image2pipe',
        '-vcodec', 'png',
        '-r', str(FPS),
        '-i', '-',
        '-c:v', 'libx264',
        '-preset', 'medium',
        '-crf', '22',
        '-pix_fmt', 'yuv420p',
        '-movflags', '+faststart',
        out_mp4
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stderr=subprocess.PIPE)

    f_bold_28 = get_font(FONT_BOLD, 28)
    f_bold_22 = get_font(FONT_BOLD, 22)
    f_bold_18 = get_font(FONT_BOLD, 18)
    f_bold_16 = get_font(FONT_BOLD, 16)
    f_bold_15 = get_font(FONT_BOLD, 15)
    f_sans_15 = get_font(FONT_SANS, 15)
    f_sans_13 = get_font(FONT_SANS, 13)
    f_mono_14 = get_font(FONT_MONO, 14)
    f_mono_12 = get_font(FONT_MONO, 12)

    for frame_idx in range(TOTAL_FRAMES):
        t = frame_idx / TOTAL_FRAMES
        angle = t * 2 * math.pi

        frame = Image.new('RGBA', (WIDTH, HEIGHT), (8, 12, 22, 255))
        draw = ImageDraw.Draw(frame)

        # Ambient glow spots
        glow = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
        gdraw = ImageDraw.Draw(glow)
        gdraw.ellipse([600, 30, 1150, 450], fill=(0, 120, 255, 30))
        gdraw.ellipse([50, 400, 650, 700], fill=(255, 170, 0, 25))
        glow = glow.filter(ImageFilter.GaussianBlur(50))
        frame.alpha_composite(glow)
        draw = ImageDraw.Draw(frame)

        # -------------------------------------------------------------
        # 1. Top Header: Skool Community Ecosystem
        # -------------------------------------------------------------
        draw_rounded_rect(draw, (40, 25, WIDTH - 40, 75), radius=8, fill=(12, 18, 34, 230), outline=(25, 45, 85, 180))
        
        draw.ellipse([55, 38, 79, 62], fill=(255, 107, 0, 255))
        draw.text((61, 41), "S", font=f_bold_18, fill=(255, 255, 255, 255))
        draw.text((92, 41), "ZERO TO AI SKOOL COMMUNITY", font=f_bold_18, fill=(255, 255, 255, 245))
        
        draw.ellipse([WIDTH - 380, 47, WIDTH - 372, 55], fill=(0, 255, 150, 255))
        draw.text((WIDTH - 362, 43), "1,420 CREATORS ONLINE", font=f_mono_12, fill=(0, 255, 180, 230))
        draw.text((WIDTH - 180, 43), "WEEKLY SPRINT #14", font=f_mono_12, fill=(0, 180, 255, 230))

        # -------------------------------------------------------------
        # 2. Gamification XP Bar: Level 1 -> Level 8 (Lifetime Free Unlock)
        # -------------------------------------------------------------
        progress_ratio = min(1.0, t * 1.3)
        current_xp = int(2500 + (10000 - 2500) * progress_ratio)
        is_level_8 = (current_xp >= 9800)

        card_border_col = (255, 180, 0, 220) if is_level_8 else (35, 70, 130, 180)
        draw_rounded_rect(draw, (40, 95, WIDTH - 40, 225), radius=12, fill=(12, 18, 36, 230), outline=card_border_col, width=2 if is_level_8 else 1)

        draw.text((64, 112), "GAMIFICATION MILESTONE ROADMAP (LEVEL 1–9)", font=f_mono_12, fill=(140, 180, 230, 220))
        draw.text((64, 132), "Thăng Cấp Nhận Vé Miễn Phí Trọn Đời (Free Lifetime)", font=f_bold_22, fill=(255, 255, 255, 255))
        
        xp_text = f"XP: {current_xp:,} / 10,000 XP"
        draw.text((WIDTH - 260, 135), xp_text, font=f_mono_14, fill=(255, 200, 0, 255) if is_level_8 else (0, 229, 255, 240))

        # Progress Bar track
        pb_x0, pb_y0, pb_x1, pb_y1 = 64, 172, WIDTH - 64, 192
        draw_rounded_rect(draw, (pb_x0, pb_y0, pb_x1, pb_y1), radius=10, fill=(20, 30, 55, 255))
        
        fill_w = int((pb_x1 - pb_x0) * progress_ratio)
        if fill_w > 10:
            fill_color = (255, 165, 0, 255) if is_level_8 else (0, 140, 255, 255)
            draw_rounded_rect(draw, (pb_x0, pb_y0, pb_x0 + fill_w, pb_y1), radius=10, fill=fill_color)
            draw.ellipse([pb_x0 + fill_w - 8, pb_y0 - 2, pb_x0 + fill_w + 8, pb_y1 + 2], fill=(255, 255, 255, 220))

        milestones = [
            (0.12, "Lvl 1 Novice", -40),
            (0.35, "Lvl 2 Apprentice", -40),
            (0.65, "Lvl 4 Creator", -40),
            (1.00, "Lvl 8 Grandmaster (VIP)", -120)
        ]
        for m_ratio, m_label, x_offset in milestones:
            mx = pb_x0 + int((pb_x1 - pb_x0) * m_ratio)
            m_achieved = (progress_ratio >= m_ratio)
            dot_color = (255, 200, 0, 255) if (m_ratio == 1.0 and is_level_8) else ((0, 255, 180, 255) if m_achieved else (80, 100, 130, 255))
            draw.ellipse([mx - 6, pb_y0 + 4, mx + 6, pb_y1 - 4], fill=dot_color)
            draw.text((mx + x_offset, pb_y1 + 8), m_label, font=f_mono_12, fill=(255, 220, 100, 255) if (m_ratio == 1.0 and is_level_8) else ((200, 225, 255, 220) if m_achieved else (110, 130, 160, 180)))

        # -------------------------------------------------------------
        # 3. Middle-Right: Build Lab 1-on-1 Frame Critique Window
        # -------------------------------------------------------------
        draw_rounded_rect(draw, (640, 245, WIDTH - 40, 680), radius=12, fill=(10, 16, 32, 240), outline=(25, 55, 100, 160), width=1)
        
        draw.text((664, 262), "BUILD LAB 1-ON-1 FEEDBACK CRITIQUE", font=f_mono_12, fill=(0, 229, 255, 220))
        draw.text((WIDTH - 220, 262), "FRAME #0148 / 0300", font=f_mono_12, fill=(255, 170, 0, 220))

        frame.paste(raw_preview, (664, 288))
        
        reticle_x = 664 + 270 + int(15 * math.sin(angle))
        reticle_y = 288 + 140 + int(8 * math.cos(angle))
        draw.line([(reticle_x - 18, reticle_y), (reticle_x + 18, reticle_y)], fill=(0, 255, 240, 230), width=2)
        draw.line([(reticle_x, reticle_y - 18), (reticle_x, reticle_y + 18)], fill=(0, 255, 240, 230), width=2)
        draw.ellipse([reticle_x - 10, reticle_y - 10, reticle_x + 10, reticle_y + 10], outline=(0, 255, 240, 200), width=1)

        draw_rounded_rect(draw, (664, 595, WIDTH - 64, 603), radius=4, fill=(25, 38, 65, 255))
        scrub_x = 664 + int((WIDTH - 64 - 664) * ((frame_idx % 90) / 90.0))
        draw_rounded_rect(draw, (664, 595, scrub_x, 603), radius=4, fill=(0, 120, 255, 255))
        draw.ellipse([scrub_x - 5, 592, scrub_x + 5, 606], fill=(255, 255, 255, 255))

        draw_rounded_rect(draw, (664, 615, WIDTH - 64, 665), radius=8, fill=(14, 26, 50, 230), outline=(0, 120, 255, 120))
        draw.ellipse([676, 625, 706, 655], fill=(255, 107, 0, 255))
        draw.text((683, 631), "VN", font=f_bold_15, fill=(255, 255, 255, 255))
        draw.text((716, 624), "Vmiz Nguyen (Founder · Build Lab Review)", font=f_bold_15, fill=(255, 255, 255, 240))
        draw.text((716, 644), "\"Ánh sáng bề mặt & specular highlight chuẩn studio. APPROVED (+50 XP)!\"", font=f_sans_13, fill=(0, 255, 180, 240))

        # -------------------------------------------------------------
        # 4. Middle-Left: Skool Leaderboard & Real-time Community Feed
        # -------------------------------------------------------------
        draw_rounded_rect(draw, (40, 245, 615, 680), radius=12, fill=(10, 16, 32, 240), outline=(25, 55, 100, 160), width=1)
        draw.text((64, 262), "LEADERBOARD & ACTIVE COMMUNITY FEED", font=f_mono_12, fill=(0, 229, 255, 220))
        
        leaders = [
            ("1", "Tuan Nguyen", "Level 8 Grandmaster", "12,450 XP", (255, 200, 0)),
            ("2", "Minh Duc", "Level 4 Creator", "5,800 XP", (180, 200, 225)),
            ("3", "Khanh Linh", "Level 3 Builder", "3,250 XP", (205, 130, 60))
        ]
        ly = 295
        for rank, name, lvl, pts, col in leaders:
            draw_rounded_rect(draw, (64, ly, 590, ly + 52), radius=8, fill=(16, 26, 48, 180), outline=(35, 60, 100, 100))
            draw.text((78, ly + 15), rank, font=f_bold_18, fill=col)
            draw.text((140, ly + 11), name, font=f_bold_16, fill=(255, 255, 255, 240))
            draw.text((140, ly + 31), lvl, font=f_mono_12, fill=(130, 160, 200, 200))
            draw.text((490, ly + 16), pts, font=f_bold_16, fill=col)
            ly += 62

        draw.text((64, 490), "RECENT ACTIVITY IN ZERO TO AI LAB", font=f_mono_12, fill=(140, 175, 220, 200))
        
        feed_items = [
            ("•", "Tuan Nguyen đã mở khóa Level 8 Free Lifetime Membership!", (255, 200, 0)),
            ("•", "Hoang Long vừa nộp bài tập [Phase 04: Dynamic Motion].", (0, 229, 255)),
            ("•", "Vmiz Nguyen đã gửi video feedback 1-on-1 cho bạn.", (0, 255, 150))
        ]
        fy = 515
        for icon, text, tcol in feed_items:
            draw_rounded_rect(draw, (64, fy, 590, fy + 44), radius=6, fill=(12, 20, 38, 180), outline=(30, 50, 85, 100))
            draw.text((76, fy + 12), icon, font=f_bold_16, fill=tcol)
            draw.text((105, fy + 14), text, font=f_sans_13, fill=(230, 240, 255, 230))
            fy += 52

        if is_level_8:
            pulse_a = int(220 + 35 * math.sin(t * 18 * math.pi))
            draw_rounded_rect(draw, (180, 102, WIDTH - 180, 160), radius=10, fill=(35, 25, 5, pulse_a), outline=(255, 200, 0, 255), width=2)
            draw.text((220, 118), "LEVEL 8 GRANDMASTER UNLOCKED · FREE LIFETIME ACCESS", font=f_bold_18, fill=(255, 220, 80, 255))

        buf = io.BytesIO()
        frame.save(buf, format='PNG')
        proc.stdin.write(buf.getvalue())

        if frame_idx == 30:
            frame.convert('RGB').save(out_poster, 'WEBP', quality=88)

    proc.stdin.close()
    proc.wait()
    print(f"  ✓ Finished: {out_mp4} ({os.path.getsize(out_mp4)/1024:.1f} KB)")
    print(f"  ✓ Poster: {out_poster}")

if __name__ == '__main__':
    print("=== Zero To AI Bento Video Synthesis Pipeline ===")
    generate_clone_video()
    generate_gamification_video()
    print("=== All Bento Videos Generated Successfully ===")
