/**
 * Zero To AI — Production-Grade i18n Translation Engine
 * Crafted under OPA KIT Fullstack Guidelines
 * 
 * Supports:
 * - Dynamic text & HTML node replacement (data-i18n, data-i18n-html)
 * - Attribute replacement (data-i18n-attr="attr:key")
 * - Document title and meta description localization
 * - Instant switching with zero layout shift
 * - localStorage persistence & cross-tab synchronization
 */

(function () {
  'use strict';

  const DICTIONARY = {
    en: {
      // Document metadata
      "page_title": "Zero To AI — Master Cinematic AI Filmmaking & Commercial Production | Skool Launch OS",
      "meta_desc": "The production-first operating system for Creators, Marketers, and Visual Directors. Transform generative AI images and video into commercial-grade client assets. Founding Member Access $9.",

      // Top Announcement Bar
      "top_bar_full": "✦ THE PRODUCTION OPERATING SYSTEM FOR AI CREATORS · DIRECT SKOOL PASS · ONLY $9 ✦",
      "top_bar_mobile": "✦ Direct Skool Pass · Only $9 ✦",
      "top_bar_cta": "Get Instant Access →",

      // Primary Navigation
      "nav_framework": "Framework",
      "nav_workflow": "Pipeline",
      "nav_showcase": "Showcase",
      "nav_vault": "Vault ($497)",
      "nav_pricing": "Pricing ($9)",
      "nav_join_cta": "Join Skool ($9) <b>→</b>",

      // Mobile Menu Drawer
      "mob_ecosystem": "The Ecosystem",
      "mob_framework": "4-Pillar Framework",
      "mob_workflow": "Production Pipeline",
      "mob_showcase": "Reel Showcase",
      "mob_buildlab": "Build Lab Critiques",
      "mob_vault": "Commercial Vault ($497)",
      "mob_levels": "Stage Roadmap",
      "mob_pricing": "Admission &amp; Pricing ($9)",
      "mob_faq": "Radical FAQ",
      "mob_join_btn": "Join Skool ($9 All-Access) <b>→</b>",
      "mob_trust_note": "⚡ <strong>Instant Access:</strong> Flat $9 one-time · 30-Day Guarantee",
      "lang_select_title": "Language / Ngôn ngữ:",

      // Hero Section
      "hero_pill": "THE GENERATIVE STUDIO OPERATING SYSTEM · MEDIA · MARKETING · AI DIRECTING",
      "hero_title": "From prompt uncertainty<br />to <span class=\"gradient-text\">director-grade output.</span>",
      "hero_subtitle": "Stop hoarding tutorial bookmarks and messy prompt folders. Zero To AI is the production-first operating system where <strong>Creators, Marketers &amp; Visual Directors</strong> transform generative AI into client-grade commercial assets through structured briefs, camera grammar, and frame-by-frame critique.",
      "hero_btn_primary": "Claim All-Access Pass — $9 <b>→</b>",
      "hero_btn_ghost": "Explore Showcase Reels ↓",
      "hero_value_badge": "<strong>Direct Skool Admission:</strong> Flat $9 One-Time · Instant Studio Access · Zero Hidden Fees",
      "hero_badge_1": "<strong>Skool</strong> Creative Studio",
      "hero_badge_2": "<strong>Production</strong> Masterclass",
      "hero_badge_3": "<strong>Build Lab</strong> 1-on-1 Critiques",
      "hero_badge_4": "<strong>Commercial</strong> Brief Matrix",
      "hero_video_tag": "CINEMATIC AI REEL · RUNWAY GEN-3 &amp; MIDJOURNEY V6.1",

      // Manifesto Section
      "manifesto_tag": "00 / BRAND ESSENCE",
      "manifesto_title": "No passive tutorials.<br /><em>An operating rhythm built to ship.</em>",
      "manifesto_desc": "Zero To AI operates as both production studio and craft accelerator. We speak through <strong>commercial briefs, structured pipelines, ruthless frame critique, and tangible client deliverables</strong> — never speculative hype, fake income claims, or one-click magic promises.",
      "manifesto_p1": "<i>01</i> Build before browse",
      "manifesto_p2": "<i>02</i> Pipeline over magic",
      "manifesto_p3": "<i>03</i> Proof over hype",
      "manifesto_p4": "<i>04</i> Craft with intent",

      // Bento Grid / Ecosystem
      "bento_eyebrow": "01 / THE ALL-IN-ONE ECOSYSTEM",
      "bento_title": "The Complete Generative Studio Stack",
      "bento_desc": "Eliminate unorganized folders of half-rendered clips. Every module is engineered around an end-to-end commercial deliverable ready for client campaigns, social distribution, or your portfolio.",
      
      "bento_c1_tag": "PRODUCTION MASTERCLASS",
      "bento_c1_title": "40+ Hands-On Modules: Cinematic AI Image &amp; Video Production",
      "bento_c1_desc": "From core visual composition and lighting tokens to camera velocity, character continuity, and full multi-shot commercial storyboards using Midjourney v6.1, Flux.1, Runway Gen-3, Kling, and Luma.",
      "bento_c1_footer": "Curriculum updated weekly with new model releases",
      "bento_c1_link": "Explore modules <b>→</b>",

      "bento_c2_tag": "BUILD LAB · WEEKLY SPRINT",
      "bento_c2_title": "Commercial Client Challenges &amp; Prize Sprints",
      "bento_c2_desc": "Tackle simulated agency briefs released every Monday. Submit your cuts, receive peer evaluations, and win funded AI Pro subscriptions.",
      "bento_c2_footer_left": "This Week: 15s Cyber Beverage Spot",
      "bento_c2_footer_right": "Active ✦",

      "bento_c3_tag": "PORTFOLIO BRIEF MATRIX",
      "bento_c3_title": "12+ Production-Ready Agency Briefs",
      "bento_c3_desc": "Plug-and-play moodboards, prompt matrices, lighting schematics, and project templates so you never face a blank canvas when pitching clients.",
      "bento_c3_footer": "Downloadable prompt matrices",
      "bento_c3_link": "View sample brief <b>→</b>",

      "bento_c4_tag": "SKOOL CREATOR NETWORK",
      "bento_c4_title": "A Curated Community for Serious Builders",
      "bento_c4_desc": "Share breakthrough prompt parameters, dissect experimental model updates, find project collaborators, and troubleshoot production roadblocks 24/7.",
      "bento_c4_footer": "Zero spam · High-signal discourse",
      "bento_c4_link": "Join network <b>→</b>",

      "bento_c5_tag": "BUILD LAB CRITIQUE",
      "bento_c5_title": "Frame-by-Frame Director Feedback",
      "bento_c5_desc": "Submit your drafts to the Build Lab feed or live calls. Mentors dissect lighting consistency, camera pacing, and render artifacts until your work reaches commercial standards.",
      "bento_c5_footer": "24–48h Review Turnaround SLA",
      "bento_c5_link": "Inspect rubric <b>→</b>",

      // 4-Pillar Framework
      "fw_eyebrow": "02 / THE DIRECTOR-GRADE FOUNDATION",
      "fw_title": "Tools change every 90 days.<br /><span class=\"hl\">The Cinematic Physics Framework is forever.</span>",
      "fw_desc": "Stop chasing fleeting prompt tricks. High-paying commercial clients don't pay for software features—they pay for narrative discipline, optical physics, and broadcast-grade post-production.",
      
      "fw_amateur_tag": "✕ The Amateur Way (Tool-Chasing)",
      "fw_amateur_desc": "Endlessly prompt-gambling with vague keywords (\"8k hyperrealistic Octane render\"), burning GPU credits on inconsistent faces and deformed rubbery motions.",
      "fw_director_tag": "✦ The Director-Grade OS (Zero To AI)",
      "fw_director_desc": "Directing optical focal lengths, locking multi-shot character identity, governing temporal velocity curves, and mastering DaVinci ACES color pipelines.",

      "fw_p1_idx": "PILLAR 01",
      "fw_p1_badge": "OPTICS &amp; COMPOSITION",
      "fw_p1_title": "Camera Grammar &amp; Lens Physics",
      "fw_p1_desc": "Replace meaningless buzzwords with precise cinema optics. Direct AI engines with true focal compression, optical aberrations, sensor aspect ratios, and volumetric lighting tags.",
      "fw_p1_f1": "<strong>Lens Selection:</strong> 24mm Anamorphic wide angles vs 85mm f/1.4 prime portrait compression",
      "fw_p1_f2": "<strong>Sensor Optics:</strong> ARRI Alexa LF dynamic range emulation &amp; 35mm film halation curves",
      "fw_p1_f3": "<strong>Lighting Architecture:</strong> High-contrast chiaroscuro, cyan rim light, and Fresnel key setups",
      "fw_p1_spec": "Model-Agnostic · Calibrated for MJ v6.1, Flux.1 &amp; SDXL",

      "fw_p2_idx": "PILLAR 02",
      "fw_p2_badge": "STUDIO BREAKTHROUGH",
      "fw_p2_title": "Multi-Shot Subject &amp; Spatial Consistency",
      "fw_p2_desc": "The single biggest bottleneck in commercial AI filmmaking solved. Our proprietary character &amp; environment anchoring system locks facial geometry, wardrobe, and 3D space across 20+ sequential shots.",
      "fw_p2_f1": "<strong>Identity Rigging:</strong> Multi-angle seed pinning and facial landmark preservation without morphing",
      "fw_p2_f2": "<strong>Spatial Anchor Points:</strong> Re-shoot identical scenes across Wide, Medium, and Macro angles",
      "fw_p2_f3": "<strong>Product Fidelity:</strong> Preserving client product packaging, logos, and textures without distortion",
      "fw_p2_spec": "Eliminates 90% of discarded generation credits",

      "fw_p3_idx": "PILLAR 03",
      "fw_p3_badge": "MOTION CHOREOGRAPHY",
      "fw_p3_title": "Temporal Motion Physics &amp; Velocity",
      "fw_p3_desc": "Eliminate robotic floating and surreal liquid artifacts. Command motion brush vectors, frame interpolation, speed ramps, and real-world weight distribution.",
      "fw_p3_f1": "<strong>Speed Ramping:</strong> Cinematic 120fps slow-motion transitions snaps into high-velocity action",
      "fw_p3_f2": "<strong>Camera Trajectories:</strong> Dolly push-ins, continuous orbital sweeps, and crane descents",
      "fw_p3_f3": "<strong>Collision Dynamics:</strong> Realistic fluid splashes, micro-condensation, and aerodynamic smoke trails",
      "fw_p3_spec": "Engineered for Runway Gen-3 Alpha, Kling 1.5 &amp; Luma",

      "fw_p4_idx": "PILLAR 04",
      "fw_p4_badge": "COMMERCIAL FINISHING",
      "fw_p4_title": "Master Post-Production &amp; Color Grading",
      "fw_p4_desc": "Raw AI footage is just the negative stock. The polish that commands $3,000+ client checks happens in DaVinci Resolve: precision ACES grading, analog grain fusion, and layered sound design.",
      "fw_p4_f1": "<strong>ACES Color Science:</strong> Emulating Kodak 5219 / 2383 35mm print film stock",
      "fw_p4_f2": "<strong>Spatial Audio Stems:</strong> Sub-bass rumbles, Foley micro-impacts, and bespoke risers",
      "fw_p4_f3": "<strong>Optical Upscaling:</strong> 4K ProRes 422HQ clean upscaling removing AI micro-artifacts",
      "fw_p4_spec": "Agency Broadcast Deliverable Standard",

      // Production Pipeline
      "wf_eyebrow": "02 / PRODUCTION PIPELINE",
      "wf_title": "Brief · Engineer · Render · Polish · Deliver",
      "wf_desc": "A proven 4-stage pipeline that guides you from a raw client concept to a pristine, artifact-free visual asset without wasting GPU credits.",
      
      "wf_tab_1": "Commercial Briefing",
      "wf_tab_2": "Prompt Architecture",
      "wf_tab_3": "Multi-Model Render",
      "wf_tab_4": "Rubric &amp; Polish",

      "wf_s1_title": "Start with strict constraints, not random prompt rolls",
      "wf_s1_desc": "Never fire up a generative tool without a clear objective. Every Zero To AI project begins with a 3-line creative brief: Core Value Proposition, Visual Tone &amp; Palette, Camera Grammar, and Delivery Aspect Ratio.",
      "wf_s1_c1": "Establish clear commercial positioning or narrative intent",
      "wf_s1_c2": "Lock delivery aspect ratios: 9:16 (Vertical Reels) or 16:9 (Cinematic Commercial)",
      "wf_s1_c3": "Prevent wasted generation credits on aimless iterations",

      "wf_s2_title": "Prompt Architecture: Subject + Lighting + Camera Physics",
      "wf_s2_desc": "Discard meaningless buzzwords like \"hyperrealistic 8k\". Master syntactic prompt engineering with explicit focal lengths, shutter speeds, sensor characteristics, and volumetric lighting tags.",
      "wf_s2_c1": "Lock subject core identifiers for multi-shot consistency",
      "wf_s2_c2": "Direct camera paths: Pan, Orbit, Drone descent, Anamorphic push-in",
      "wf_s2_c3": "Deploy cinematic lighting tokens: Rim lighting, Volumetric haze, Golden hour diffusion",

      "wf_s3_title": "Multi-Model Render Pipeline &amp; Temporal Consistency",
      "wf_s3_desc": "Orchestrate best-in-class tools: Flux.1 &amp; Midjourney for razor-sharp initial keyframes, paired with Runway Gen-3 Alpha &amp; Kling AI for fluid, coherent camera motion and natural physics.",
      "wf_s3_c1": "Preserve structural fidelity without facial distortion or hand warping",
      "wf_s3_c2": "Map motion velocity to sound design tempo and pacing beats",
      "wf_s3_c3": "AI upscale to pristine 4K resolution with micro-grain stabilization",

      "wf_s4_title": "Frame-by-Frame Rubric: Polish to Commercial Standard",
      "wf_s4_desc": "Submit drafts to the Build Lab. Mentors and peers critique your render against our 10-point Production Rubric: Lighting Consistency, Motion Fluidity, Framing Stability, and Commercial Utility.",
      "wf_s4_c1": "Objective grading across 10 quantifiable criteria",
      "wf_s4_c2": "Actionable parameter fixes instead of vague design praise",
      "wf_s4_c3": "Final approved cuts graduate directly to the Global Member Showcase",

      // Audience / Levels
      "aud_eyebrow": "03 / TAILORED FOR YOUR STAGE",
      "aud_title": "Wherever you start, Zero To AI meets your craft",
      "aud_desc": "Whether you are typing your first prompt or managing an agency visual department, the roadmap accelerates your workflow without fluff.",

      "aud_s1_tier": "TIER 01",
      "aud_s1_stage": "STAGE 01",
      "aud_s1_title": "The Visual Starter",
      "aud_s1_desc": "Never rendered an AI image or edited video? No coding, 3D software, or prior design background required. We guide you step-by-step from workspace setup to shipping your first pristine 4K cinematic asset.",
      "aud_s1_t1": "Zero Experience Needed",
      "aud_s1_t2": "Intuitive Web UIs",
      "aud_s1_t3": "First 4K Asset on Day 1",

      "aud_s2_tier": "TIER 02",
      "aud_s2_stage": "STAGE 02",
      "aud_s2_title": "Creators &amp; Motion Artists",
      "aud_s2_desc": "Frustrated by video stutter, rubbery faces, and erratic camera shifts? Master Motion Brushes, consistent character seeds, and high-retention 9:16 vertical storytelling engineered to stand out on social feeds.",
      "aud_s2_t1": "Character Continuity",
      "aud_s2_t2": "Short-Form Reels / TikTok",
      "aud_s2_t3": "Portfolio Packaging",

      "aud_s3_tier": "TIER 03",
      "aud_s3_stage": "STAGE 03",
      "aud_s3_title": "Commercial Directors &amp; Marketers",
      "aud_s3_desc": "Cut visual production budgets by up to 80% while dramatically speeding up creative pitch cycles. Build end-to-end commercial pipelines from script to moodboards to broadcast-ready video ads.",
      "aud_s3_t1": "Commercial TVC Spots",
      "aud_s3_t2": "Pre-Vis Storyboard Pipelines",
      "aud_s3_t3": "80% Production Cost Reduction",

      // Showcase
      "sc_eyebrow": "04 / PRODUCTION REEL",
      "sc_title": "Built With The Zero To AI Pipeline",
      "sc_desc": "Every frame, fluid simulation, and lighting setup below was generated using the workflows taught inside the Skool Classroom.",
      "sc_v1_title": "Commercial Fashion Reel 9:16",
      "sc_v2_title": "Cinematic Product Reveal",
      "sc_v3_title": "Atmospheric Cyber City Sequence",
      "sc_v4_title": "Narrative Character Storyboard Cut",

      // Build Lab
      "bl_eyebrow": "05 / THE POWER OF FRAME-BY-FRAME FEEDBACK",
      "bl_title": "The Difference a Director-Grade Rubric Makes",
      "bl_desc": "Unguided prompting produces plastic skin, flat lighting, and incoherent micro-details. Drag the slider to see how direct mentor critique refines a flat draft into a photorealistic 4K cinematic hero asset.",
      "bl_after_label": "DIRECTOR-GRADED ASSET (RUBRIC REFINED) ✦",
      "bl_before_label": "UNCALIBRATED PROMPT DRAFT (FLAT)",
      "bl_drag_note": "*Drag the slider left and right to compare volumetric lighting, condensation realism, and micro-surface details",

      // Commercial Vault
      "vt_eyebrow": "05 / THE COMMERCIAL PRODUCTION VAULT",
      "vt_title": "Don't Just Learn Theory.<br /><span class=\"hl\">Inherit Our $497+ Turnkey Production Toolkit.</span>",
      "vt_desc": "When you join Zero To AI on Skool, you don't start with an intimidating blank screen. You instantly unlock the exact creative briefs, financial calculators, and legal contracts used to deliver commercial client projects.",
      
      "vt_c1_badge": "VALUED AT $197 · INCLUDED 100% FREE WITH $9 PASS",
      "vt_c1_title": "12+ Agency-Grade Commercial Production Briefs",
      "vt_c1_desc": "Production-tested creative briefs matching top-tier agency standards. Complete with director treatments, lighting blueprints, prompt seed formulas, and storyboard shotlists.",
      "vt_chip_1_title": "Cyber Isotonic Beverage",
      "vt_chip_1_desc": "High-speed macro splash &amp; condensation physics",
      "vt_chip_2_title": "Luxury Chronograph Timepiece",
      "vt_chip_2_desc": "Sapphire glass optics &amp; tourbillon mechanical motion",
      "vt_chip_3_title": "EV Hypercar Night Reveal",
      "vt_chip_3_desc": "Wet asphalt reflections &amp; aerodynamic light sweeps",
      "vt_chip_4_title": "Cyberpunk Neo-Tokyo Streetwear",
      "vt_chip_4_desc": "Fabric micro-texture &amp; anamorphic cinematic flares",
      "vt_chip_5_title": "Spatial Computing Hardware",
      "vt_chip_5_desc": "Matte obsidian chassis &amp; tactile UI interactions",
      "vt_chip_6_title": "Fragrance, Spirits &amp; FinTech TVCs",
      "vt_chip_6_desc": "Continuously updated inside the Skool Classroom",

      "vt_c2_badge": "VALUED AT $147 · INCLUDED FREE",
      "vt_c2_title": "Client Pitch Deck &amp; Pricing Calculator",
      "vt_c2_desc": "Stop undercharging. Use our dynamic calculator to comfortably quote <strong>$1,500 – $5,000 per commercial spot</strong> based on deliverables, revisions, and distribution scope.",
      "vt_c2_f1": "Keynote &amp; Figma Agency Pitch Deck Templates",
      "vt_c2_f2": "Cold outreach email scripts with proven 38% response rate",
      "vt_c2_f3": "Value-based tier pricing matrix (Basic, Pro, Global Broadcast)",

      "vt_c3_badge": "VALUED AT $97 · INCLUDED FREE",
      "vt_c3_title": "Commercial IP &amp; Licensing Agreement",
      "vt_c3_desc": "Protect your creative assets and give corporate clients total peace of mind. An attorney-reviewed contract governing generative AI copyright disclosure and commercial usage rights.",
      "vt_c3_f1": "Full IP transfer vs. Limited broadcast licensing clauses",
      "vt_c3_f2": "Commercial warranty &amp; NDA confidentiality provisions",
      "vt_c3_f3": "Milestone payment schedule terms (50% deposit before render)",

      "vt_c4_badge": "VALUED AT $56 · INCLUDED FREE",
      "vt_c4_title": "4K Master Export &amp; Handoff Spec Sheet",
      "vt_c4_desc": "The exact delivery protocols expected by high-end creative agencies. Standardized folder hierarchies, codec specifications, and split audio stem guidelines.",
      "vt_c4_f1": "ProRes 422HQ &amp; DNxHR broadcast export presets",
      "vt_c4_f2": "Color space metadata flags: Rec.709 vs DCI-P3",
      "vt_c4_f3": "Split audio stems hierarchy (Dialogue, Sound FX, Music WAVs)",

      "vt_sum_label": "TOTAL COMMERCIAL VAULT VALUE",
      "vt_sum_free": "100% FREE WITH $9 SKOOL PASS",
      "vt_sum_btn": "Unlock The Vault Now ($9) <b>→</b>",

      // Pricing Section
      "pr_eyebrow": "06 / TRANSPARENT PRICING",
      "pr_title": "All-Access Skool Admission",
      "pr_desc": "No recurring traps. No paywalls. Just a single, honest $9 pass on Skool to access our full production classroom, commercial vaults, and live critique lab.",
      "pr_badge": "DIRECT SKOOL PASS · TRANSPARENT $9 ADMISSION",
      "pr_period": "/ one-time all-access pass",
      "pr_manifesto": "<strong>Why only $9?</strong> High-craft AI filmmaking shouldn't be gatekept behind a $997 paywall. We eliminated agency bloat and course markups so every ambitious visual creator can access our production pipeline directly on Skool with zero friction.",
      "pr_breakdown_1": "4-Stage Director Masterclass (Optics &amp; Physics)",
      "pr_breakdown_2": "1-on-1 Build Lab Frame Critiques &amp; Sprints",
      "pr_breakdown_3": "The Commercial Production Vault (12+ Briefs &amp; Contracts)",
      "pr_breakdown_4": "Private Skool Creative Studio Access",
      "pr_breakdown_total": "Total Real-World Value:",
      "pr_final_call": "Your Direct Skool Investment: <span class=\"highlight-price\">$9 One-Time</span>",

      "pr_chk_1": "<strong>Instant Skool OS Access:</strong> Immediate entry to the full classroom and live studio",
      "pr_chk_2": "<strong>The 4-Pillar Cinematic AI Framework:</strong> Master optics, consistency &amp; DaVinci finishing",
      "pr_chk_3": "<strong>1-on-1 Build Lab Critiques:</strong> Frame-by-frame director feedback on your projects",
      "pr_chk_4": "<strong>The Commercial Production Vault:</strong> 12+ Briefs, Pitch Deck &amp; Licensing Contracts ($497 value)",
      "pr_chk_5": "<strong>Weekly Creative Sprints:</strong> Compete in client simulation challenges with AI Pro prizes",
      "pr_chk_6": "<strong>Lifetime Curriculum Upgrades:</strong> Direct access to newly released model modules and tools",
      "pr_btn_cta": "Unlock Full Skool Access — Only $9 <b>→</b>",

      "pr_trust_1": "<strong>30-Day Money-Back Guarantee:</strong> 100% no-risk. If you don't ship better work, full refund.",
      "pr_trust_2": "<strong>Instant Skool Activation:</strong> Your classroom invite is delivered immediately after checkout.",
      "pr_trust_3": "<strong>Zero Subscription Traps:</strong> Single $9 pass. No recurring monthly charges.",

      // Radical FAQ
      "faq_eyebrow": "07 / FREQUENTLY ASKED QUESTIONS",
      "faq_title": "Radical Transparency Before You Join",
      "faq_desc": "We adhere strictly to our Trust Guardrails: factual promises, zero guru illusions, and realistic creative mastery.",
      
      "faq_q1": "Does this program promise overnight riches or thousands of dollars in passive income?",
      "faq_a1": "Absolutely not. In accordance with our Trust Guardrails: We do not promise effortless wealth, guaranteed client retainers, or overnight lifestyle transformations. We provide you with verified production workflows, technical camera grammar, and an agency-ready portfolio. Commercial revenue depends entirely on your craft, dedication, and how effectively you position your work in the market.",

      "faq_q2": "Are the required AI tools expensive to run during the course?",
      "faq_a2": "Not at all. Our curriculum prioritizes platforms with generous free tiers (such as Flux.1 via open web interfaces and daily free generation credits on Kling and Luma). If you choose to subscribe to Pro plans for Midjourney or Runway, subscriptions typically range from $10 to $15/month and are completely optional.",

      "faq_q3": "I have zero background in filmmaking or design. Can I realistically keep up?",
      "faq_a3": "Yes. Zero To AI is specifically architected for creators starting from absolute zero. Instead of burying you in academic jargon, we immerse you in structured 3-line briefs, teaching you how to direct AI models and generate your first cinematic keyframe within 24 hours.",

      "faq_q4": "How does the Build Lab critique workflow work?",
      "faq_a4": "Whenever you complete an assignment or commercial spot, you submit your draft to the Build Lab channel on Skool. Mentors evaluate your cut against our 10-point Production Rubric (evaluating lighting fidelity, motion fluidity, camera optics, and composition) and provide precise prompt and parameter adjustments within 24–48 hours.",

      "faq_q5": "Is the $9 fee a monthly subscription or a one-time payment?",
      "faq_a5": "It is a single, one-time payment. Your $9 pass grants you full lifetime access to the foundational classroom, the 4-Pillar framework, the complete commercial production vault, community channels, and future curriculum additions without recurring subscription charges.",

      // Final Call To Action
      "final_eyebrow": "ONE FLAT $9 INVESTMENT",
      "final_title": "Stop hoarding tutorials.<br />Start shipping director-grade assets.",
      "final_desc": "For the price of a single lunch ($9), inherit a battle-tested AI filmmaking operating system, 12+ commercial briefs, legal contracts, and an active Skool studio of serious visual builders.",
      "final_cta_btn": "Join Zero To AI on Skool — Only $9 <b>→</b>",
      "final_trust_note": "🔒 Instant Access on Skool · 30-Day Money-Back Guarantee · No Monthly Hidden Fees",

      // Footer
      "footer_brand_desc": "The creative operating system empowering creators and marketers to transition from prompt guesswork to commercial AI production. Powered by the Skool ecosystem.",
      "footer_col_curriculum": "Curriculum",
      "footer_col_standards": "Standards",
      "footer_col_ecosystem": "Ecosystem",
      "footer_link_classroom": "Classroom",
      "footer_link_framework": "4-Pillar Framework",
      "footer_link_pipeline": "Production Pipeline",
      "footer_link_vault": "Commercial Vault ($497)",
      "footer_link_buildlab": "Build Lab Reviews",
      "footer_link_showcase": "Video Showcase Reel",
      "footer_link_guidelines": "Brand Guidelines V1",
      "footer_link_guardrails": "Trust Guardrails",
      "footer_link_refund": "Refund Policy",
      "footer_link_tos": "Terms of Service",
      "footer_link_community": "Skool Community OS",
      "footer_link_sprints": "Weekly Sprints",
      "footer_link_pass": "Founding Member Pass",
      "footer_copy": "&copy; 2026 Zero To AI · Media · Marketing · AI. All rights reserved.",
      "footer_opa": "Crafted with precision under OPA KIT Fullstack Guidelines."
    },

    vi: {
      // Document metadata
      "page_title": "Zero To AI — Làm Chủ Điện Ảnh AI & Sản Xuất Video Thương Mại | Skool Launch OS",
      "meta_desc": "Hệ điều hành sản xuất thực chiến dành cho Creator, Marketer và Visual Director. Biến hình ảnh và video AI tạo sinh thành sản phẩm thương mại chuẩn khách hàng. Vé tham gia chỉ $9.",

      // Top Announcement Bar
      "top_bar_full": "✦ HỆ ĐIỀU HÀNH SẢN XUẤT CHO AI CREATOR · VÉ SKOOL $9 ✦",
      "top_bar_mobile": "✦ Vé Trực Tiếp Skool · Chỉ $9 ✦",
      "top_bar_cta": "Vào ngay →",

      // Primary Navigation
      "nav_framework": "Hệ thống",
      "nav_workflow": "Quy trình",
      "nav_showcase": "Tác phẩm",
      "nav_vault": "Kho tài nguyên",
      "nav_pricing": "Học phí ($9)",
      "nav_join_cta": "Vào Skool ($9) <b>→</b>",

      // Mobile Menu Drawer
      "mob_ecosystem": "Hệ sinh thái toàn diện",
      "mob_framework": "Bộ khung 4 Trụ cột cốt lõi",
      "mob_workflow": "Quy trình sản xuất 4 bước",
      "mob_showcase": "Bộ sưu tập thước phim mẫu",
      "mob_buildlab": "Phòng phản biện 1-kèm-1",
      "mob_vault": "Kho tài nguyên thương mại ($497)",
      "mob_levels": "Lộ trình phát triển 3 cấp độ",
      "mob_pricing": "Học phí &amp; Gia nhập ($9)",
      "mob_faq": "Giải đáp thẳng thắn &amp; Minh bạch",
      "mob_join_btn": "Tham gia Skool (Trọn gói $9) <b>→</b>",
      "mob_trust_note": "⚡ <strong>Kích hoạt tức thì:</strong> $9 một lần duy nhất · Hoàn tiền trong 30 ngày",
      "lang_select_title": "Ngôn ngữ / Language:",

      // Hero Section
      "hero_pill": "HỆ ĐIỀU HÀNH STUDIO AI · MEDIA · MARKETING · ĐẠO DIỄN HÌNH ẢNH",
      "hero_title": "Từ mò mẫm gõ prompt<br />đến <span class=\"gradient-text\">chuẩn phẩm đạo diễn.</span>",
      "hero_subtitle": "Ngưng gom nhặt bookmark hướng dẫn và những tệp prompt vụn vặt. Zero To AI là hệ điều hành sản xuất thực chiến – nơi các <strong>Creator, Marketer &amp; Visual Director</strong> biến AI tạo sinh thành sản phẩm thương mại đẳng cấp cho khách hàng qua bộ đề bài chuẩn chỉnh, ngữ pháp máy quay và kỹ năng thẩm định từng khung hình.",
      "hero_btn_primary": "Nhận vé truy cập trọn gói — $9 <b>→</b>",
      "hero_btn_ghost": "Xem các thước phim mẫu ↓",
      "hero_value_badge": "<strong>Vào thẳng Skool Studio:</strong> Trọn gói $9 một lần duy nhất · Truy cập ngay · Không phí ẩn",
      "hero_badge_1": "<strong>Skool</strong> Creative Studio",
      "hero_badge_2": "<strong>Masterclass</strong> Sản xuất",
      "hero_badge_3": "<strong>Build Lab</strong> Phản biện 1-kèm-1",
      "hero_badge_4": "<strong>Bộ Đề bài</strong> Thương mại",
      "hero_video_tag": "CINEMATIC AI REEL · RUNWAY GEN-3 &amp; MIDJOURNEY V6.1",

      // Manifesto Section
      "manifesto_tag": "00 / TINH THẦN THƯƠNG HIỆU",
      "manifesto_title": "Không bài giảng lý thuyết suông.<br /><em>Guồng quay thực chiến tạo ra sản phẩm.</em>",
      "manifesto_desc": "Zero To AI vừa là studio sản xuất, vừa là bệ phóng tay nghề. Chúng tôi làm việc dựa trên <strong>đề bài thương mại thực tế, quy trình chuẩn mực, phản biện khung hình khắt khe và sản phẩm bàn giao thực tế</strong> — tuyệt đối không vẽ vời thổi phồng, không cam kết thu nhập ảo, không hứa hẹn phép màu một chạm.",
      "manifesto_p1": "<i>01</i> Bắt tay làm trước khi lướt xem",
      "manifesto_p2": "<i>02</i> Quy trình vững chắc hơn phép màu",
      "manifesto_p3": "<i>03</i> Kết quả thật hơn lời tán dương",
      "manifesto_p4": "<i>04</i> Sáng tạo có chủ đích và chiều sâu",

      // Bento Grid / Ecosystem
      "bento_eyebrow": "01 / HỆ SINH THÁI TOÀN DIỆN",
      "bento_title": "Hệ Thống Studio AI Tạo Sinh Đầy Đủ Nhất",
      "bento_desc": "Xóa bỏ những thư mục lộn xộn chứa các đoạn clip render dở dang. Mọi module đều được thiết kế khép kín nhằm tạo ra sản phẩm thương mại hoàn chỉnh — sẵn sàng cho chiến dịch của khách hàng, phủ sóng mạng xã hội hoặc làm sáng bừng hồ sơ năng lực của bạn.",
      
      "bento_c1_tag": "MASTERCLASS SẢN XUẤT",
      "bento_c1_title": "40+ Module Thực Chiến: Sản xuất Hình ảnh &amp; Video AI Điện ảnh",
      "bento_c1_desc": "Từ bố cục thị giác, thông số ánh sáng đến gia tốc chuyển động máy quay, tính nhất quán nhân vật và kịch bản phân cảnh quảng cáo đa góc quay — làm chủ Midjourney v6.1, Flux.1, Runway Gen-3, Kling và Luma.",
      "bento_c1_footer": "Giáo trình cập nhật hàng tuần theo từng phiên bản AI mới nhất",
      "bento_c1_link": "Khám phá các module <b>→</b>",

      "bento_c2_tag": "BUILD LAB · THỬ THÁCH HÀNG TUẦN",
      "bento_c2_title": "Thử Thách Đề Bài Khách Hàng &amp; Giải Thưởng Hấp Dẫn",
      "bento_c2_desc": "Thử sức với đề bài mô phỏng từ các agency được công bố vào mỗi thứ Hai. Nộp bản dựng, nhận đánh giá từ cộng đồng và giành tài trợ gói thuê bao AI Pro.",
      "bento_c2_footer_left": "Tuần này: TVC 15s Nước Giải Khát Tương Lai",
      "bento_c2_footer_right": "Đang diễn ra ✦",

      "bento_c3_tag": "MA TRẬN ĐỀ BÀI PORTFOLIO",
      "bento_c3_title": "12+ Đề Bài Chuẩn Agency Sẵn Sàng Sản Xuất",
      "bento_c3_desc": "Moodboard hoàn chỉnh, ma trận prompt mẫu, sơ đồ bố trí ánh sáng và khung dự án có sẵn giúp bạn không bao giờ bế tắc ý tưởng khi thuyết trình với khách hàng.",
      "bento_c3_footer": "Tải về ma trận prompt thực chiến",
      "bento_c3_link": "Xem đề bài mẫu <b>→</b>",

      "bento_c4_tag": "CỘNG ĐỒNG SÁNG TẠO SKOOL",
      "bento_c4_title": "Mạng Lưới Tinh Hoa Dành Cho Những Người Làm Nghề Thực Thụ",
      "bento_c4_desc": "Chia sẻ tham số prompt đột phá, mổ xẻ những cập nhật mô hình mới nhất, tìm kiếm cộng sự dự án và tháo gỡ mọi nút thắt kỹ thuật 24/7.",
      "bento_c4_footer": "Tuyệt đối không spam · Chia sẻ giá trị cao",
      "bento_c4_link": "Gia nhập mạng lưới <b>→</b>",

      "bento_c5_tag": "PHẢN BIỆN BUILD LAB",
      "bento_c5_title": "Nhận Xét Từng Khung Hình Chuẩn Tầm Đạo Diễn",
      "bento_c5_desc": "Gửi bản nháp lên kênh Build Lab hoặc tham gia các buổi call trực tiếp. Đội ngũ mentor sẽ soi xét độ đồng nhất ánh sáng, nhịp điệu chuyển động và khử lỗi rác AI cho đến khi sản phẩm đạt chuẩn thương mại.",
      "bento_c5_footer": "Phản hồi chi tiết trong 24–48 giờ",
      "bento_c5_link": "Xem thang chấm điểm <b>→</b>",

      // 4-Pillar Framework
      "fw_eyebrow": "02 / NỀN TẢNG CHUẨN ĐẠO DIỄN",
      "fw_title": "Công cụ có thể đổi mới sau mỗi 90 ngày.<br /><span class=\"hl\">Nhưng tư duy Vật lý Điện ảnh là giá trị bất biến.</span>",
      "fw_desc": "Ngưng chạy theo những thủ thuật prompt nhất thời. Khách hàng thương mại chi trả hào phóng không phải vì bạn biết bấm nút công cụ — họ trả tiền cho tư duy kể chuyện chặt chẽ, vật lý quang học chuẩn xác và kỹ năng hậu kỳ chuẩn truyền hình.",
      
      "fw_amateur_tag": "✕ Lối mòn nghiệp dư (Chạy theo công cụ)",
      "fw_amateur_desc": "Đánh cược liên miên với những prompt chung chung (\"8k hyperrealistic Octane render\"), đốt sạch credit GPU để nhận về những khuôn mặt biến dạng và chuyển động nhão như thạch.",
      "fw_director_tag": "✦ Hệ điều hành chuẩn Đạo diễn (Zero To AI)",
      "fw_director_desc": "Làm chủ tiêu cự quang học, khóa chặt nhân vật xuyên suốt đa khung hình, kiểm soát quỹ đạo chuyển động mượt mà và làm chủ quy trình phân màu DaVinci chuẩn ACES.",

      "fw_p1_idx": "TRỤ CỘT 01",
      "fw_p1_badge": "QUANG HỌC &amp; BỐ CỤC",
      "fw_p1_title": "Ngữ Pháp Máy Quay &amp; Vật Lý Ống Kính",
      "fw_p1_desc": "Thay thế các từ ngữ sáo rỗng bằng ngôn ngữ quang học điện ảnh chuẩn xác. Điều hướng AI bằng độ nén tiêu cự thực tế, quang sai ống kính, tỉ lệ cảm biến và tham số ánh sáng khối.",
      "fw_p1_f1": "<strong>Chọn ống kính:</strong> Ống rộng 24mm Anamorphic đối trọng với độ nén chân dung sắc nét của 85mm f/1.4 prime",
      "fw_p1_f2": "<strong>Cảm biến quang học:</strong> Tái hiện dải dynamic range của ARRI Alexa LF &amp; hiệu ứng viền sáng quầng phim 35mm",
      "fw_p1_f3": "<strong>Thiết kế ánh sáng:</strong> Tương phản sáng tối chiaroscuro, ven sáng xanh cyan và bố trí đèn chính Fresnel",
      "fw_p1_spec": "Đa nền tảng · Chuẩn hóa cho MJ v6.1, Flux.1 &amp; SDXL",

      "fw_p2_idx": "TRỤ CỘT 02",
      "fw_p2_badge": "ĐỘT PHÁ CỦA STUDIO",
      "fw_p2_title": "Tính Nhất Quán Nhân Vật &amp; Không Gian Đa Cảnh",
      "fw_p2_desc": "Nút thắt lớn nhất của làm phim AI thương mại đã có lời giải. Hệ thống định vị nhân vật &amp; bối cảnh độc quyền giúp bạn khóa chặt cấu trúc khuôn mặt, trang phục và không gian 3D qua hơn 20 cảnh quay liên tiếp.",
      "fw_p2_f1": "<strong>Khóa định danh nhân vật:</strong> Ghim hạt giống (seed) đa góc quay và bảo tồn chi tiết diện mạo không bị biến dạng",
      "fw_p2_f2": "<strong>Điểm neo không gian:</strong> Tái hiện chính xác cùng một phân cảnh ở các góc Toàn (Wide), Trung (Medium) và Cận (Macro)",
      "fw_p2_f3": "<strong>Độ sắc nét sản phẩm:</strong> Giữ nguyên bao bì, logo thương hiệu và chất liệu của khách hàng không tì vết",
      "fw_p2_spec": "Tiết kiệm 90% chi phí credit render lãng phí",

      "fw_p3_idx": "TRỤ CỘT 03",
      "fw_p3_badge": "DÀN DỰNG CHUYỂN ĐỘNG",
      "fw_p3_title": "Động Lực Học Chuyển Động &amp; Vận Tốc",
      "fw_p3_desc": "Triệt tiêu hiện tượng trôi nổi cơ học và biến dạng dạng lỏng kỳ dị. Làm chủ vector cọ chuyển động, nội suy khung hình, biến thiên tốc độ (speed ramp) và trọng lực thực tế.",
      "fw_p3_f1": "<strong>Biến thiên tốc độ:</strong> Chuyển mượt từ slow-motion điện ảnh 120fps bùng nổ sang hành động tốc độ cao",
      "fw_p3_f2": "<strong>Quỹ đạo máy quay:</strong> Dolly đẩy sâu, chuyển động xoay quanh (orbit) liền mạch và hạ cẩu (crane)",
      "fw_p3_f3": "<strong>Tương tác vật lý:</strong> Giọt bắn chất lỏng chân thực, đọng sương li ti và luồng khói khí động học sống động",
      "fw_p3_spec": "Tối ưu cho Runway Gen-3 Alpha, Kling 1.5 &amp; Luma",

      "fw_p4_idx": "TRỤ CỘT 04",
      "fw_p4_badge": "HOÀN THIỆN THƯƠNG MẠI",
      "fw_p4_title": "Kỹ Xảo Hậu Kỳ &amp; Phân Màu Đỉnh Cao",
      "fw_p4_desc": "Thước phim AI thô chỉ mới là cuộn phim âm bản. Giá trị giúp bạn tự tin chốt hợp đồng $3.000+ với khách hàng nằm ở DaVinci Resolve: phân màu chuẩn ACES, hòa trộn hạt phim analog và thiết kế âm thanh đa tầng.",
      "fw_p4_f1": "<strong>Hệ màu ACES:</strong> Mô phỏng dải màu kinh điển của chất phim nhựa Kodak 5219 / 2383 35mm",
      "fw_p4_f2": "<strong>Âm thanh không gian:</strong> Tiếng rền siêu trầm sub-bass, tiếng động Foley chân thực và hiệu ứng tăng tiến (riser)",
      "fw_p4_f3": "<strong>Upscale quang học:</strong> Xuất file 4K ProRes 422HQ sắc nét, loại bỏ triệt để các hạt nhiễu AI siêu nhỏ",
      "fw_p4_spec": "Đạt chuẩn phát sóng truyền hình &amp; quảng cáo quốc tế",

      // Production Pipeline
      "wf_eyebrow": "02 / QUY TRÌNH SẢN XUẤT",
      "wf_title": "Đề bài · Kỹ thuật · Render · Trau chuốt · Bàn giao",
      "wf_desc": "Quy trình 4 giai đoạn chuẩn mực dẫn dắt bạn từ ý tưởng ban đầu của khách hàng đến tác phẩm hoàn hảo, không tì vết mà không lãng phí chi phí GPU.",
      
      "wf_tab_1": "1. Tiếp nhận đề bài",
      "wf_tab_2": "2. Kiến trúc Prompt",
      "wf_tab_3": "3. Render đa mô hình",
      "wf_tab_4": "4. Tiêu chí &amp; Hoàn thiện",

      "wf_s1_title": "Bắt đầu với những ràng buộc rõ ràng, không gõ mò ngẫu hứng",
      "wf_s1_desc": "Không bao giờ mở công cụ AI khi chưa có mục tiêu cụ thể. Mọi dự án tại Zero To AI đều xuất phát từ bản tóm tắt sáng tạo 3 dòng: Giá trị cốt lõi, Tông màu thị giác, Ngữ pháp máy quay và Tỉ lệ khung hình bàn giao.",
      "wf_s1_c1": "Xác lập rõ định vị thương mại hoặc chủ đích câu chuyện",
      "wf_s1_c2": "Cố định tỉ lệ khung hình: 9:16 (Reels dọc) hoặc 16:9 (Quảng cáo điện ảnh)",
      "wf_s1_c3": "Tránh lãng phí credit tạo ảnh vào những lần thử nghiệm vô định",

      "wf_s2_title": "Kiến trúc Prompt: Chủ thể + Ánh sáng + Vật lý máy quay",
      "wf_s2_desc": "Gạt bỏ các từ khóa sáo rỗng như \"hyperrealistic 8k\". Làm chủ kỹ thuật cấu trúc prompt với tiêu cự rõ ràng, tốc độ màn trập, đặc tính cảm biến và tham số ánh sáng khối chuẩn xác.",
      "wf_s2_c1": "Khóa nhận diện chủ thể cho tính nhất quán đa góc máy",
      "wf_s2_c2": "Điều hướng đường đi của máy quay: Quét ngang (Pan), Xoay (Orbit), Drone hạ độ cao, Đẩy ống Anamorphic",
      "wf_s2_c3": "Ứng dụng các thông số ánh sáng điện ảnh: Đèn viền (Rim), Sương mù khối, Tán xạ giờ vàng",

      "wf_s3_title": "Quy trình Render đa mô hình &amp; Sự mượt mà chuyển động",
      "wf_s3_desc": "Phối hợp những công cụ hàng đầu: Flux.1 &amp; Midjourney để tạo khung hình chính (keyframe) cực nét, kết hợp Runway Gen-3 Alpha &amp; Kling AI để tạo chuyển động máy quay mượt mà và vật lý tự nhiên.",
      "wf_s3_c1": "Giữ nguyên cấu trúc tự nhiên, không méo mặt hay dị dạng bàn tay",
      "wf_s3_c2": "Đồng bộ tốc độ chuyển động với tiết tấu và nhịp điệu âm thanh",
      "wf_s3_c3": "Nâng cấp AI lên độ phân giải 4K sắc sảo với độ ổn định hạt phim",

      "wf_s4_title": "Bộ tiêu chí từng khung hình: Hoàn thiện chuẩn thương mại",
      "wf_s4_desc": "Gửi bản dựng lên Build Lab. Các mentor và thành viên sẽ phản biện theo Thang đo Sản xuất 10 điểm: Độ đồng nhất ánh sáng, Độ mượt chuyển động, Độ vững bố cục và Giá trị ứng dụng thương mại.",
      "wf_s4_c1": "Đánh giá khách quan theo 10 tiêu chí định lượng rõ ràng",
      "wf_s4_c2": "Chỉ rõ thông số cần sửa thay vì những lời khen chung chung vô thưởng vô phạt",
      "wf_s4_c3": "Bản dựng được duyệt sẽ được vinh danh trực tiếp tại Global Member Showcase",

      // Audience / Levels
      "aud_eyebrow": "03 / THIẾT KẾ RIÊNG CHO TỪNG GIAI ĐOẠN",
      "aud_title": "Dù bạn xuất phát ở đâu, Zero To AI đều đồng hành nâng tầm tay nghề",
      "aud_desc": "Dù bạn mới chập chững gõ prompt đầu tiên hay đang điều hành phòng hình ảnh của agency, lộ trình này sẽ bứt tốc hiệu suất làm việc của bạn mà không có lý thuyết thừa thãi.",

      "aud_s1_tier": "CẤP ĐỘ 01",
      "aud_s1_stage": "GIAI ĐOẠN 01",
      "aud_s1_title": "Người Mới Nhập Môn Hình Ảnh",
      "aud_s1_desc": "Chưa từng render ảnh AI hay dựng video? Không cần biết code, không cần phần mềm 3D hay kiến thức đồ họa trước đó. Chúng tôi đồng hành từng bước từ thiết lập không gian làm việc đến khi xuất bản thước phim điện ảnh 4K đầu tay.",
      "aud_s1_t1": "Không yêu cầu kinh nghiệm",
      "aud_s1_t2": "Giao diện Web trực quan",
      "aud_s1_t3": "Có sản phẩm 4K ngay ngày đầu",

      "aud_s2_tier": "CẤP ĐỘ 02",
      "aud_s2_stage": "GIAI ĐOẠN 02",
      "aud_s2_title": "Creator &amp; Nghệ Sĩ Chuyển Động",
      "aud_s2_desc": "Ức chế vì video bị giật khựng, khuôn mặt méo mó và máy quay rung lắc bất thường? Làm chủ Motion Brush, đồng nhất hạt giống nhân vật và nghệ thuật kể chuyện khung dọc 9:16 giữ chân người xem trên mạng xã hội.",
      "aud_s2_t1": "Nhất quán nhân vật",
      "aud_s2_t2": "Video ngắn Reels / TikTok",
      "aud_s2_t3": "Đóng gói Portfolio chuyên nghiệp",

      "aud_s3_tier": "CẤP ĐỘ 03",
      "aud_s3_stage": "GIAI ĐOẠN 03",
      "aud_s3_title": "Đạo Diễn Thương Mại &amp; Marketer",
      "aud_s3_desc": "Cắt giảm tới 80% chi phí sản xuất hình ảnh đồng thời rút ngắn tối đa chu kỳ thuyết trình ý tưởng. Xây dựng quy trình thương mại trọn gói từ kịch bản, moodboard đến video quảng cáo chuẩn phát sóng.",
      "aud_s3_t1": "Quảng cáo TVC thương mại",
      "aud_s3_t2": "Quy trình tiền kỳ Storyboard",
      "aud_s3_t3": "Giảm 80% chi phí sản xuất",

      // Showcase
      "sc_eyebrow": "04 / THƯỚC PHIM THỰC TẾ",
      "sc_title": "Tạo Ra Từ Quy Trình Của Zero To AI",
      "sc_desc": "Từng khung hình, mô phỏng chất lỏng và bố trí ánh sáng dưới đây đều được tạo ra từ quy trình giảng dạy bên trong Skool Classroom.",
      "sc_v1_title": "Reel Thời Trang Thương Mại 9:16",
      "sc_v2_title": "Phim Giới Thiệu Sản Phẩm Điện Ảnh",
      "sc_v3_title": "Phân Cảnh Thành Phố Tương Lai Huyền Ảo",
      "sc_v4_title": "Phân Đoạn Kịch Bản Nhân Vật Có Chiều Sâu",

      // Build Lab
      "bl_eyebrow": "05 / SỨC MẠNH CỦA PHẢN BIỆN TỪNG KHUNG HÌNH",
      "bl_title": "Sự Khác Biệt Khi Có Bộ Tiêu Chí Chuẩn Đạo Diễn",
      "bl_desc": "Gõ prompt tự phát chỉ tạo ra làn da như nhựa, ánh sáng phẳng lì và chi tiết vụn vặt thiếu ăn khớp. Kéo thanh trượt để thấy cách mentor phản biện giúp nâng tầm một bản nháp thô thành tuyệt phẩm 4K chuẩn điện ảnh.",
      "bl_after_label": "BẢN HOÀN THIỆN CHUẨN ĐẠO DIỄN (ĐÃ QUA PHẢN BIỆN) ✦",
      "bl_before_label": "BẢN NHÁP GÕ PROMPT CHƯA CÂN CHỈNH (THÔ)",
      "bl_drag_note": "*Kéo thanh trượt sang trái hoặc phải để so sánh ánh sáng khối, độ chân thực của giọt sương và chi tiết bề mặt siêu nhỏ",

      // Commercial Vault
      "vt_eyebrow": "05 / KHO TÀI NGUYÊN SẢN XUẤT THƯƠNG MẠI",
      "vt_title": "Đừng Chỉ Học Lý Thuyết Suông.<br /><span class=\"hl\">Sở Hữu Ngay Bộ Công Cụ Thực Chiến Trị Giá $497+.</span>",
      "vt_desc": "Khi gia nhập Zero To AI trên Skool, bạn không bao giờ phải bắt đầu trước một màn hình trắng trơn. Bạn được mở khóa ngay lập tức các đề bài sáng tạo, bảng tính báo giá và hợp đồng pháp lý thực tế dùng để chốt dự án với khách hàng.",
      
      "vt_c1_badge": "TRỊ GIÁ $197 · TẶNG MIỄN PHÍ 100% KÈM VÉ $9",
      "vt_c1_title": "12+ Đề Bài Sản Xuất Thương Mại Chuẩn Agency",
      "vt_c1_desc": "Các đề bài sáng tạo đã qua kiểm chứng thực tế theo chuẩn agency hàng đầu. Đầy đủ định hướng đạo diễn, sơ đồ ánh sáng, công thức prompt hạt giống và bảng phân cảnh chi tiết.",
      "vt_chip_1_title": "Nước Giải Khát Thể Thao Tương Lai",
      "vt_chip_1_desc": "Vật lý giọt bắn tốc độ cao &amp; đọng sương",
      "vt_chip_2_title": "Đồng Hồ Cơ Khí Thụy Sỹ Đẳng Cấp",
      "vt_chip_2_desc": "Quang học mặt kính sapphire &amp; chuyển động tourbillon",
      "vt_chip_3_title": "Siêu Xe Điện Xuất Hiện Ban Đêm",
      "vt_chip_3_desc": "Phản chiếu mặt đường ướt &amp; vệt sáng khí động học",
      "vt_chip_4_title": "Thời Trang Đường Phố Neo-Tokyo",
      "vt_chip_4_desc": "Sợi vải siêu chi tiết &amp; vệt sáng ống kính Anamorphic",
      "vt_chip_5_title": "Thiết Bị Điện Toán Không Gian",
      "vt_chip_5_desc": "Khung vỏ đá obsidian mờ &amp; tương tác chạm xúc giác",
      "vt_chip_6_title": "TVC Nước Hoa, Đồ Uống Cao Cấp &amp; FinTech",
      "vt_chip_6_desc": "Liên tục cập nhật bên trong Skool Classroom",

      "vt_c2_badge": "TRỊ GIÁ $147 · TẶNG KÈM MIỄN PHÍ",
      "vt_c2_title": "Bộ Slide Thuyết Trình Khách Hàng &amp; Bảng Tính Báo Giá",
      "vt_c2_desc": "Đừng hạ thấp giá trị bản thân. Dùng bảng tính tự động của chúng tôi để tự tin báo giá <strong>$1.500 – $5.000 cho mỗi video thương mại</strong> dựa trên sản phẩm bàn giao, số lần chỉnh sửa và phạm vi phát sóng.",
      "vt_c2_f1": "Mẫu Slide Pitch Deck trên Keynote &amp; Figma chuẩn Agency",
      "vt_c2_f2": "Kịch bản email tiếp cận khách hàng với tỷ lệ phản hồi thực tế 38%",
      "vt_c2_f3": "Ma trận định giá theo giá trị (Cơ bản, Chuyên nghiệp, Phát sóng toàn cầu)",

      "vt_c3_badge": "TRỊ GIÁ $97 · TẶNG KÈM MIỄN PHÍ",
      "vt_c3_title": "Hợp Đồng Bản Quyền Sở Hữu Trí Tuệ &amp; Cấp Phép Thương Mại",
      "vt_c3_desc": "Bảo vệ tác phẩm của bạn và mang lại sự an tâm tuyệt đối cho khách hàng doanh nghiệp. Mẫu hợp đồng được luật sư thẩm định, quy định minh bạch quyền tác giả AI và quyền khai thác thương mại.",
      "vt_c3_f1": "Điều khoản chuyển giao toàn bộ IP đối trọng cấp phép phát sóng có giới hạn",
      "vt_c3_f2": "Quy định bảo hành thương mại &amp; cam kết bảo mật thông tin (NDA)",
      "vt_c3_f3": "Tiến độ thanh toán theo cột mốc (Đặt cọc 50% trước khi bấm máy render)",

      "vt_c4_badge": "TRỊ GIÁ $56 · TẶNG KÈM MIỄN PHÍ",
      "vt_c4_title": "Bảng Tiêu Chuẩn Xuất File 4K Master &amp; Bàn Giao Kỹ Thuật",
      "vt_c4_desc": "Giao thức bàn giao chuẩn mực mà các agency sáng tạo cao cấp luôn đòi hỏi. Cấu trúc thư mục chuẩn hóa, thông số codec và quy cách tách kênh âm thanh.",
      "vt_c4_f1": "Preset xuất file truyền hình chuẩn ProRes 422HQ &amp; DNxHR",
      "vt_c4_f2": "Cài đặt metadata không gian màu: Rec.709 đối trọng DCI-P3",
      "vt_c4_f3": "Phân tách các kênh âm thanh (Thoại, Hiệu ứng âm thanh, Nhạc nền định dạng WAV)",

      "vt_sum_label": "TỔNG GIÁ TRỊ KHO TÀI NGUYÊN THƯƠNG MẠI",
      "vt_sum_free": "TẶNG MIỄN PHÍ 100% KÈM VÉ SKOOL $9",
      "vt_sum_btn": "Mở Khóa Kho Tài Nguyên Ngay ($9) <b>→</b>",

      // Pricing Section
      "pr_eyebrow": "06 / BẢNG GIÁ MINH BẠCH",
      "pr_title": "Vé Vào Cửa Trọn Gói Skool",
      "pr_desc": "Không bẫy gia hạn. Không tường thu phí. Chỉ một vé $9 duy nhất, minh bạch trên Skool để truy cập toàn bộ lớp học sản xuất, kho tài nguyên và phòng phản biện trực tiếp.",
      "pr_badge": "VÉ TRỰC TIẾP SKOOL · HỌC PHÍ MINH BẠCH $9",
      "pr_period": "/ vé trọn gói một lần duy nhất",
      "pr_manifesto": "<strong>Tại sao chỉ có $9?</strong> Kỹ năng làm phim AI đỉnh cao không nên bị chặn đứng sau mức học phí ngất ngưởng $997. Chúng tôi cắt giảm toàn bộ chi phí trung gian và giá ảo để mọi nhà sáng tạo hình ảnh tâm huyết đều có thể tiếp cận quy trình sản xuất trực tiếp trên Skool mà không gặp rào cản.",
      "pr_breakdown_1": "Masterclass Đạo Diễn 4 Giai Đoạn (Quang học &amp; Vật lý)",
      "pr_breakdown_2": "Phản Biện Từng Khung Hình 1-Kèm-1 &amp; Thử Thách Build Lab",
      "pr_breakdown_3": "Kho Tài Nguyên Sản Xuất Thương Mại (12+ Đề bài &amp; Hợp đồng)",
      "pr_breakdown_4": "Quyền Tham Gia Skool Creative Studio Độc Quyền",
      "pr_breakdown_total": "Tổng giá trị thực tế:",
      "pr_final_call": "Khoản đầu tư trực tiếp trên Skool: <span class=\"highlight-price\">$9 Một Lần Duy Nhất</span>",

      "pr_chk_1": "<strong>Truy cập Skool OS ngay:</strong> Vào thẳng lớp học đầy đủ và studio thực hành trực tiếp",
      "pr_chk_2": "<strong>Bộ khung 4 Trụ cột AI Điện ảnh:</strong> Làm chủ quang học, tính nhất quán &amp; hoàn thiện DaVinci",
      "pr_chk_3": "<strong>Phản biện Build Lab 1-kèm-1:</strong> Nhận xét từng khung hình chuẩn đạo diễn cho tác phẩm của bạn",
      "pr_chk_4": "<strong>Kho tài nguyên thương mại:</strong> 12+ Đề bài, Slide thuyết trình &amp; Hợp đồng bản quyền (Trị giá $497)",
      "pr_chk_5": "<strong>Thử thách sáng tạo hàng tuần:</strong> Cọ xát đề bài mô phỏng khách hàng và giành phần thưởng tài trợ AI Pro",
      "pr_chk_6": "<strong>Cập nhật giáo trình trọn đời:</strong> Truy cập ngay các bài học về công cụ và mô hình AI mới nhất",
      "pr_btn_cta": "Mở Khóa Toàn Bộ Skool — Chỉ $9 <b>→</b>",

      "pr_trust_1": "<strong>Cam kết hoàn tiền trong 30 ngày:</strong> Hoàn toàn không rủi ro. Nếu bạn không tạo ra sản phẩm tốt hơn, nhận lại 100% tiền.",
      "pr_trust_2": "<strong>Kích hoạt Skool tức thì:</strong> Lời mời vào lớp học được gửi đến bạn ngay sau khi hoàn tất đăng ký.",
      "pr_trust_3": "<strong>Không bẫy gia hạn ngầm:</strong> Vé $9 thanh toán một lần. Không tự động trừ tiền hàng tháng.",

      // Radical FAQ
      "faq_eyebrow": "07 / CÂU HỎI THƯỜNG GẶP",
      "faq_title": "Minh Bạch Tuyệt Đối Trước Khi Bạn Tham Gia",
      "faq_desc": "Chúng tôi tuân thủ nghiêm ngặt Nguyên Tắc Tin Cậy: cam kết dựa trên thực tế, không ảo tưởng làm giàu và rèn luyện tay nghề một cách bài bản.",
      
      "faq_q1": "Khóa học này có hứa hẹn làm giàu sau một đêm hay kiếm hàng ngàn USD thu nhập thụ động không?",
      "faq_a1": "Tuyệt đối không. Theo đúng Nguyên Tắc Tin Cậy của chúng tôi: Chúng tôi không hứa hẹn sự giàu sang không cần nỗ lực, không đảm bảo hợp đồng khách hàng tự tìm đến hay đổi đời sau một đêm. Chúng tôi trang bị cho bạn quy trình sản xuất đã được kiểm chứng, ngữ pháp máy quay chuyên sâu và một portfolio chuẩn mực cho agency. Thu nhập thương mại hoàn toàn phụ thuộc vào tay nghề, sự tâm huyết và cách bạn định vị tác phẩm của mình trên thị trường.",

      "faq_q2": "Các công cụ AI cần dùng trong khóa học có tốn kém chi phí không?",
      "faq_a2": "Hoàn toàn không. Giáo trình của chúng tôi ưu tiên tối đa các nền tảng có gói miễn phí hào phóng (như Flux.1 qua giao diện web mở và lượt credit render miễn phí mỗi ngày trên Kling và Luma). Nếu bạn muốn nâng cấp gói Pro trên Midjourney hay Runway, mức phí thường chỉ dao động từ $10 đến $15/tháng và hoàn toàn không bắt buộc.",

      "faq_q3": "Tôi chưa từng có kinh nghiệm làm phim hay thiết kế đồ họa. Liệu tôi có theo kịp không?",
      "faq_a3": "Chắc chắn có. Zero To AI được xây dựng chuyên biệt cho những người bắt đầu từ con số không tròn trĩnh. Thay vì làm bạn choáng ngợp với thuật ngữ hàn lâm, chúng tôi hướng dẫn bạn qua bộ đề bài 3 dòng trực quan, chỉ cho bạn cách chỉ đạo mô hình AI để tạo ra khung hình điện ảnh đầu tiên chỉ trong vòng 24 giờ.",

      "faq_q4": "Quy trình phản biện tại Build Lab diễn ra như thế nào?",
      "faq_a4": "Mỗi khi hoàn thành một bài tập hoặc một video thương mại, bạn gửi bản nháp vào kênh Build Lab trên Skool. Đội ngũ mentor sẽ đánh giá bản dựng của bạn theo Bộ tiêu chí sản xuất 10 điểm (kiểm định độ chuẩn xác ánh sáng, độ mượt chuyển động, quang học máy quay và bố cục) đồng thời đưa ra hướng dẫn điều chỉnh prompt và tham số chính xác trong vòng 24–48 giờ.",

      "faq_q5": "Khoản phí $9 là thuê bao hàng tháng hay thanh toán một lần duy nhất?",
      "faq_a5": "Đây là khoản thanh toán một lần duy nhất. Chiếc vé $9 trao cho bạn quyền truy cập trọn đời vào lớp học nền tảng, bộ khung 4 Trụ cột, toàn bộ kho tài nguyên sản xuất thương mại, các kênh cộng đồng và tất cả nội dung giáo trình được bổ sung trong tương lai mà không có thêm bất kỳ khoản phí định kỳ nào.",

      // Final Call To Action
      "final_eyebrow": "KHOẢN ĐẦU TƯ DUY NHẤT $9",
      "final_title": "Ngưng gom nhặt hướng dẫn suông.<br />Bắt tay tạo ra những sản phẩm chuẩn đạo diễn.",
      "final_desc": "Chỉ bằng chi phí một bữa trưa ($9), sở hữu ngay hệ điều hành làm phim AI thực chiến, 12+ đề bài thương mại, bộ hợp đồng pháp lý và một Skool studio sôi nổi của những nhà làm phim tâm huyết.",
      "final_cta_btn": "Gia nhập Zero To AI trên Skool — Chỉ $9 <b>→</b>",
      "final_trust_note": "🔒 Vào Skool ngay · Cam kết hoàn tiền 30 ngày · Không phí ẩn hàng tháng",

      // Footer
      "footer_brand_desc": "Hệ điều hành sáng tạo trao quyền cho Creator và Marketer chuyển dịch từ phỏng đoán prompt sang sản xuất AI chuẩn thương mại. Vận hành trên hệ sinh thái Skool.",
      "footer_col_curriculum": "Chương trình học",
      "footer_col_standards": "Tiêu chuẩn &amp; Pháp lý",
      "footer_col_ecosystem": "Hệ sinh thái",
      "footer_link_classroom": "Lớp học trực tuyến",
      "footer_link_framework": "Bộ khung 4 Trụ cột",
      "footer_link_pipeline": "Quy trình sản xuất",
      "footer_link_vault": "Kho tài nguyên ($497)",
      "footer_link_buildlab": "Phản biện Build Lab",
      "footer_link_showcase": "Thước phim mẫu",
      "footer_link_guidelines": "Hướng dẫn thương hiệu V1",
      "footer_link_guardrails": "Nguyên tắc tin cậy",
      "footer_link_refund": "Chính sách hoàn tiền",
      "footer_link_tos": "Điều khoản dịch vụ",
      "footer_link_community": "Hệ điều hành Skool Community",
      "footer_link_sprints": "Thử thách hàng tuần",
      "footer_link_pass": "Vé thành viên sáng lập",
      "footer_copy": "&copy; 2026 Zero To AI · Truyền thông · Marketing · AI. Bảo lưu mọi quyền.",
      "footer_opa": "Được kiến tạo chuẩn xác theo Hướng dẫn Fullstack của OPA KIT."
    }
  };

  const STORAGE_KEY = 'zero_to_ai_lang';
  let currentLang = 'en';

  /**
   * Determine initial language:
   * 1. Saved preference in localStorage
   * 2. Browser language (if starts with 'vi' -> 'vi', else 'en')
   * 3. Fallback: 'en'
   */
  function getInitialLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === 'vi' || saved === 'en')) {
        return saved;
      }
    } catch (_) {}

    try {
      const navLang = navigator.language || navigator.userLanguage || '';
      if (navLang.toLowerCase().startsWith('vi')) {
        return 'vi';
      }
    } catch (_) {}

    return 'en';
  }

  /**
   * Update all DOM elements with matching data-i18n, data-i18n-html, and attributes
   */
  function applyTranslations(lang) {
    const dict = DICTIONARY[lang];
    if (!dict) return;

    // 1. Update HTML tag language
    document.documentElement.setAttribute('lang', lang);

    // 2. Document Title & Meta Description
    if (dict.page_title) {
      document.title = dict.page_title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.meta_desc) {
      metaDesc.setAttribute('content', dict.meta_desc);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && dict.page_title) {
      ogTitle.setAttribute('content', dict.page_title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && dict.meta_desc) {
      ogDesc.setAttribute('content', dict.meta_desc);
    }

    // 3. Text content nodes (data-i18n)
    const textNodes = document.querySelectorAll('[data-i18n]');
    textNodes.forEach(node => {
      const key = node.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        node.textContent = dict[key];
      }
    });

    // 4. HTML content nodes (data-i18n-html)
    const htmlNodes = document.querySelectorAll('[data-i18n-html]');
    htmlNodes.forEach(node => {
      const key = node.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        node.innerHTML = dict[key];
      }
    });

    // 5. Attribute nodes (data-i18n-attr="attr:key,attr2:key2")
    const attrNodes = document.querySelectorAll('[data-i18n-attr]');
    attrNodes.forEach(node => {
      const spec = node.getAttribute('data-i18n-attr');
      if (!spec) return;
      const pairs = spec.split(',');
      pairs.forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key && dict[key] !== undefined) {
          node.setAttribute(attr, dict[key]);
        }
      });
    });

    // 6. Update Language Switcher UI buttons
    updateSwitcherUI(lang);
  }

  /**
   * Update the visual active state of all language toggles
   */
  function updateSwitcherUI(lang) {
    const pillButtons = document.querySelectorAll('.lang-pill-btn');
    pillButtons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = btnLang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    const singleToggles = document.querySelectorAll('.lang-quick-toggle');
    singleToggles.forEach(toggle => {
      toggle.setAttribute('data-current', lang);
      const textSpan = toggle.querySelector('.lang-current-label');
      if (textSpan) {
        textSpan.textContent = lang.toUpperCase();
      }
      toggle.setAttribute('aria-label', lang === 'vi' ? 'Chuyển sang English' : 'Đổi sang Tiếng Việt');
      toggle.setAttribute('title', lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt');
    });
  }

  /**
   * Switch to a specific language
   */
  function setLanguage(lang) {
    if (lang !== 'vi' && lang !== 'en') return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}

    applyTranslations(lang);

    // Notify any listeners
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
  }

  /**
   * Toggle between VI and EN
   */
  function toggleLanguage() {
    const nextLang = currentLang === 'vi' ? 'en' : 'vi';
    setLanguage(nextLang);
  }

  // Initialize on script load / DOM ready
  function init() {
    currentLang = getInitialLanguage();
    applyTranslations(currentLang);

    // Expose API globally
    window.ZeroToAI_i18n = {
      setLanguage: setLanguage,
      toggleLanguage: toggleLanguage,
      getLanguage: function () { return currentLang; },
      dictionary: DICTIONARY
    };
    window.setLanguage = setLanguage;
    window.toggleLanguage = toggleLanguage;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
