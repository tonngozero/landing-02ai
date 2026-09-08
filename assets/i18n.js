/**
 * Zero To AI — Production-Grade i18n Translation Engine
 * Crafted under OPA KIT Fullstack Guidelines
 * 
 * True Curriculum Alignment:
 * - 9 Core Training Phases (114+ lessons)
 * - Real Tools: Kling 3.0, Seedance 2.0, HeyGen, Nanobanana, Capcut, Midjourney, Wise Chat
 * - The Realism Cheat Sheet & Character Consistency
 * - Commercial AI Ads (Nike, BMW, Claymation, <10min Ads)
 * - Gamification Ranks (Level 2–9, Level 8 Free Lifetime Access)
 * - Pricing: $9/month Founding Member (Cancel anytime) or $55/year
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
    "en": {
        "page_title": "Zero To AI — Master AI Video & Commercial Content Creation | Skool Community",
        "meta_desc": "A hands-on 9-Phase AI video & image production system for creators and marketers. Master realistic avatars, viral social formats, commercial UGC ads, and AI cloning. Only $9/month.",
        "top_bar_full": "✦ ZERO TO AI CREATOR ACADEMY & COMMUNITY · FOUNDING MEMBERS ONLY $9/MO ✦",
        "top_bar_mobile": "✦ Zero To AI Community · Only $9/mo ✦",
        "top_bar_cta": "Join Now →",
        "nav_framework": "9-Phase Roadmap",
        "nav_workflow": "Workflow",
        "nav_showcase": "Showcase",
        "nav_vault": "Resource Vault",
        "nav_pricing": "Pricing ($9/mo)",
        "nav_join_cta": "Join Skool ($9) <b>→</b>",
        "mob_ecosystem": "Course Ecosystem",
        "mob_framework": "9-Phase Core Roadmap",
        "mob_workflow": "4-Step Production Pipeline",
        "mob_showcase": "Real Video Showcase",
        "mob_buildlab": "Build Lab 1-on-1 Feedback",
        "mob_vault": "Resource & Template Vault",
        "mob_levels": "3-Stage Progression Path",
        "mob_pricing": "Pricing & Enrollment ($9/mo)",
        "mob_faq": "Frequently Asked Questions",
        "mob_join_btn": "Join Skool (Only $9/mo) <b>→</b>",
        "mob_trust_note": "⚡ <strong>Founding Member Offer:</strong> $9/month · Cancel anytime · Instant access",
        "lang_select_title": "Language / Ngôn ngữ:",
        "hero_pill": "HANDS-ON SKOOL COMMUNITY & ACADEMY · ZERO TO REAL OUTPUT",
        "hero_title": "From guessing prompts<br />to <span class=\"gradient-text\">monetizable AI output.</span>",
        "hero_subtitle": "Stop hoarding disconnected tutorials and prompt scraps. Zero To AI is a hands-on 9-Phase roadmap that takes you from complete beginner to producing hyper-realistic AI images, smooth AI videos, UGC ad creatives, and digital clones — with zero plastic look, full character consistency, and client-ready deliverables.",
        "hero_btn_primary": "Join the Community — Only $9/mo <b>→</b>",
        "hero_btn_ghost": "Explore the 9-Phase Roadmap ↓",
        "hero_value_badge": "⚡ <strong>Founding Member Price:</strong> Only $9/mo or $55/yr · Cancel anytime · Full 9-Phase Access",
        "hero_badge_1": "<strong>Skool</strong> Community",
        "hero_badge_2": "<strong>9 Phases</strong> 114+ Lessons",
        "hero_badge_3": "<strong>Build Lab</strong> 1-on-1 Feedback",
        "hero_badge_4": "<strong>AI Ads & UGC</strong> Monetization",
        "hero_video_tag": "AI SHOWCASE · KLING 3.0, SEEDANCE 2.0 & HEYGEN",
        "manifesto_tag": "00 / CORE PHILOSOPHY",
        "manifesto_title": "No theoretical fluff.<br /><em>Build real assets, master real workflows.</em>",
        "manifesto_desc": "Zero To AI is both an academy and an active creator studio founded by Vmiz Nguyen. We build around <strong>practical commercial deliverables: hyper-realistic AI Influencers, client-ready video ads, viral social hooks, and personalized AI clones</strong> — no get-rich-quick hype, no fake earnings screenshots, and no empty one-click promises.",
        "manifesto_p1": "<i>01</i> Hands-on creation from Day 1",
        "manifesto_p2": "<i>02</i> Proven workflows over luck",
        "manifesto_p3": "<i>03</i> Real deliverables over empty praise",
        "manifesto_p4": "<i>04</i> Monetizable production skills",
        "bento_eyebrow": "01 / COURSE ECOSYSTEM",
        "bento_title": "The Most Comprehensive AI Creator Academy",
        "bento_desc": "Eliminate messy folders of half-rendered, plastic-looking clips. Every single phase is designed to take you from a blank screen to high-quality, client-ready deliverables.",
        "bento_c1_tag": "9 PHASES · 114+ LESSONS",
        "bento_c1_title": "Structured 9-Phase Masterclass: From Beginner to AI Pro",
        "bento_c1_desc": "From your very first AI Avatar to mastering Kling 3.0, Seedance 2.0, commercial TVC spots (Nike, BMW), Claymation ads, node-based automation, and voice-synced digital twins with HeyGen.",
        "bento_c1_footer": "Continuously updated as new AI models and tools emerge",
        "bento_c1_link": "Explore all 9 phases <b>→</b>",
        "bento_c2_tag": "DE-PLASTICIZING MASTERY",
        "bento_c2_title": "Removing the 'AI' Look: The Realism Cheat Sheet",
        "bento_c2_desc": "Master our proprietary Realism Cheat Sheet to eliminate waxy skin, warped limbs, and synthetic plastic textures. Control optical lighting, lens depth, and natural micro-textures.",
        "bento_c2_footer_left": "Exclusive techniques in Phases 3 & 4",
        "bento_c2_footer_right": "100% Photorealistic ✦",
        "bento_c3_tag": "AI ADS & UGC PRODUCTION",
        "bento_c3_title": "Commercial Video Ads: Nike, BMW, Podcasts & UGC",
        "bento_c3_desc": "Learn automated product review avatar ads, 2D animation ads, claymation, and cinematic TVCs. Use Advanced Flows to deliver complete ad creatives in under 10 minutes.",
        "bento_c3_footer": "Plug-and-play ad templates included",
        "bento_c3_link": "See ad workflows <b>→</b>",
        "bento_c4_tag": "CLONE YOURSELF · HEYGEN & ELEVENLABS",
        "bento_c4_title": "Clone Your Face, Voice & Full-Length Content",
        "bento_c4_desc": "Generate hyper-accurate digital clones that speak any language fluently. Automate longform educational and marketing content without being chained to a physical camera.",
        "bento_c4_footer": "Save 95% of recording and shooting time",
        "bento_c4_link": "Discover cloning tech <b>→</b>",
        "bento_c5_tag": "SKOOL COMMUNITY & GAMIFICATION",
        "bento_c5_title": "Build Lab 1-on-1 Reviews & Level 1–9 Milestones",
        "bento_c5_desc": "Submit your work for frame-by-frame critique from mentor Vmiz Nguyen and peers. Level up through gamified community challenges — reach Level 8 (Grandmaster) for FREE Lifetime Access.",
        "bento_c5_footer": "Reach Level 8 for 100% Free Lifetime Membership",
        "bento_c5_link": "View rank rewards <b>→</b>",
        "fw_eyebrow": "02 / CORE FOUNDATIONS",
        "fw_title": "AI tools update every month.<br /><span class=\"hl\">Production fundamentals remain evergreen.</span>",
        "fw_desc": "Stop chasing random, unverified prompt threads. Zero To AI teaches you the four structural pillars that ensure consistent, photorealistic, client-ready outputs across every generative platform.",
        "fw_amateur_tag": "✕ The Guesswork Trap (Chasing random prompts)",
        "fw_amateur_desc": "Gambling credits with generic buzzwords ('8k hyperrealistic Octane render'), getting waxy plastic skin, mutated limbs, shaky camera drift, and wasted GPU spend.",
        "fw_director_tag": "✦ The Zero To AI System (Methodical craft)",
        "fw_director_desc": "Directing precise optical lighting, locking character identity across multiple scenes, mastering fluid camera physics in Kling and Seedance, and polishing final edits in Capcut.",
        "fw_p1_idx": "PILLAR 01",
        "fw_p1_badge": "PHOTOREALISM & PROMPT MASTERY",
        "fw_p1_title": "The Realism Cheat Sheet & Anti-Plastic Framework",
        "fw_p1_desc": "Eliminate artificial waxy textures. Master structured prompt engineering: focal length, volumetric light, skin pores, textile weave, and cinematic color temperature.",
        "fw_p1_f1": "<strong>The Realism Cheat Sheet:</strong> Exact optical keywords that force AI models to render real human skin and natural textures",
        "fw_p1_f2": "<strong>Cinematic Lighting:</strong> Golden hour diffusion, volumetric rim lighting, and dramatic shadow depth",
        "fw_p1_f3": "<strong>4K Upscaling Pipeline:</strong> Upscaling keyframes to razor-sharp 4K print and broadcast resolution without artifacting",
        "fw_p1_spec": "Optimized for Midjourney, Flux.1 & Nanobanana",
        "fw_p2_idx": "PILLAR 02",
        "fw_p2_badge": "IDENTITY & AVATAR STUDIO",
        "fw_p2_title": "Consistent Characters & Commercial AI Influencers",
        "fw_p2_desc": "Solve generative AI's hardest challenge: keeping the exact same face, hair, and physique across multiple scenes, lighting setups, and camera angles.",
        "fw_p2_f1": "<strong>Identity Locking:</strong> Anchor facial facial features and bone structure seamlessly across diverse scenes and outfits",
        "fw_p2_f2": "<strong>Product Integration:</strong> Place real physical products directly into your avatar's hands using Wise Chat and mockup flows",
        "fw_p2_f3": "<strong>Consistent Character Voice:</strong> Clone and assign a signature voice profile to maintain brand identity across all videos",
        "fw_p2_spec": "Designed for AI Influencer Studios & UGC Creators",
        "fw_p3_idx": "PILLAR 03",
        "fw_p3_badge": "MOTION DYNAMICS & LIPSYNC",
        "fw_p3_title": "Fluid Motion in Kling 3.0, Seedance 2.0 & HeyGen",
        "fw_p3_desc": "Transform still images into lifelike cinematic motion without liquid warping or rubbery physics. Master camera paths and pixel-accurate lipsync.",
        "fw_p3_f1": "<strong>Camera Motion Control:</strong> Execute precise Dolly pushes, horizontal pans, 360 orbits, and crane descents",
        "fw_p3_f2": "<strong>Removing the 'AI' Look:</strong> Eliminate floating artifacts, hand mutations, and unnatural sudden motions",
        "fw_p3_f3": "<strong>Natural AI Lipsync:</strong> Synchronize lip flaps and mouth shape perfectly to your voiceover audio files",
        "fw_p3_spec": "Hands-on with Kling 3.0, Seedance 2.0 & HeyGen",
        "fw_p4_idx": "PILLAR 04",
        "fw_p4_badge": "COMMERCIALIZATION & AUTOMATION",
        "fw_p4_title": "High-Converting AI Ads & Under-10-Minute Workflows",
        "fw_p4_desc": "Turn your AI capabilities into income: produce automated product review ads, claymation spots, brand TVCs, and scale delivery with node-based automation.",
        "fw_p4_f1": "<strong>Commercial TVC Templates:</strong> Deconstruct high-end brand ads (Nike, BMW) into replicable modular shotlists",
        "fw_p4_f2": "<strong>Advanced Flows in < 10 Mins:</strong> Node-based automation pipelines that spit out completed video ads in minutes",
        "fw_p4_f3": "<strong>Capcut & SFX Sound Design:</strong> Rhythm-based editing, multi-layer sound effects, dynamic captions, and color touchups",
        "fw_p4_spec": "Deliverable to paying brands and marketing agencies",
        "wf_eyebrow": "02 / PRODUCTION PIPELINE",
        "wf_title": "From Initial Brief to Client-Ready Video Creative",
        "wf_desc": "A streamlined 4-step production workflow that turns fuzzy concepts into polished, commercial-grade video assets while conserving GPU credits.",
        "wf_tab_1": "1. Brief & Scriptwriting",
        "wf_tab_2": "2. Keyframe & Realism",
        "wf_tab_3": "3. Motion & Lipsync",
        "wf_tab_4": "4. Capcut & Build Lab",
        "wf_s1_title": "Strategic Scriptwriting & Storyboard Planning",
        "wf_s1_desc": "Never open a generation tool without an intentional concept. Use ChatGPT to outline structured 3-part hooks, visual shotlists, and lock deliverable aspect ratios (9:16 vertical or 16:9 cinematic).",
        "wf_s1_c1": "Define the commercial hook, narrative arc, and target audience",
        "wf_s1_c2": "Script second-by-second shot breakdowns with ChatGPT prompts",
        "wf_s1_c3": "Eliminate trial-and-error guesswork and save up to 80% generation credits",
        "wf_s2_title": "Generating Pristine Keyframes with the Realism Cheat Sheet",
        "wf_s2_desc": "Apply proven prompt architectures and realism modifier tokens to create crisp, high-fidelity anchor frames with natural skin textures and locked character identity.",
        "wf_s2_c1": "Anchor character facial features across multiple planned camera angles",
        "wf_s2_c2": "Shape directional volumetric lighting to avoid flat, synthetic rendering",
        "wf_s2_c3": "Upscale raw keyframes to crisp 4K master images ready for video animation",
        "wf_s3_title": "Fluid Motion Animation with Kling 3.0 & Seedance 2.0",
        "wf_s3_desc": "Feed your pristine keyframes into cutting-edge AI video engines. Control camera velocity, trajectory, and lock lipsync with HeyGen for natural character speech.",
        "wf_s3_c1": "Govern camera trajectories (Dolly, Pan, Orbit) without subject warping",
        "wf_s3_c2": "Remove awkward glitching and sudden physics breaks in video clips",
        "wf_s3_c3": "Match character lipsync accurately to voiceovers and narration audio",
        "wf_s4_title": "Capcut Post-Production, Sound Design & Build Lab Polish",
        "wf_s4_desc": "Assemble footage in Capcut, cut to the musical beat, layer impactful SFX audio, and submit your draft to the Skool Build Lab for direct 1-on-1 critique.",
        "wf_s4_c1": "Cut to pacing, apply speed ramps, and layer ambient sound effects (SFX)",
        "wf_s4_c2": "Add animated captions and visual callouts optimized for social platforms",
        "wf_s4_c3": "Get direct 1-on-1 feedback in the Build Lab to refine your final render",
        "aud_eyebrow": "03 / TAILORED LEARNING PATH",
        "aud_title": "Built for Every Level — From Day 1 Beginners to Full-Time Creators",
        "aud_desc": "No prior video editing, 3D modeling, or programming background needed. Our 9-Phase curriculum is split into three intuitive progression stages.",
        "aud_s1_tier": "STAGE 01",
        "aud_s1_stage": "PHASE 1 – PHASE 3",
        "aud_s1_title": "Complete Beginners (Zero to AI)",
        "aud_s1_desc": "Never generated an AI image or video before? We guide you step by step from workspace setup to prompt architecture, building your first AI Avatar, and producing your first 4K realistic visual.",
        "aud_s1_t1": "No prior experience required",
        "aud_s1_t2": "Build your first AI Avatar",
        "aud_s1_t3": "Generate realistic assets in Week 1",
        "aud_s2_tier": "STAGE 02",
        "aud_s2_stage": "PHASE 4 – PHASE 6",
        "aud_s2_title": "Creators & Short-Form Video Editors",
        "aud_s2_desc": "Frustrated by warped limbs and jittery videos? Master Kling 3.0 and Seedance 2.0, lock consistent character voices, produce commercial ads (Nike, BMW, Claymation), and build ads in under 10 minutes.",
        "aud_s2_t1": "Master Kling 3.0 & Seedance 2.0",
        "aud_s2_t2": "Produce commercial UGC video ads",
        "aud_s2_t3": "Deliver complete ads in < 10 mins",
        "aud_s3_tier": "STAGE 03",
        "aud_s3_stage": "PHASE 7 – PHASE 9",
        "aud_s3_title": "Viral Channel Builders & AI Clones",
        "aud_s3_desc": "Ready to scale your brand and monetize? Dive into 12+ viral content niches, short filmmaking storytelling with ChatGPT, and clone your own face & voice with HeyGen for hands-off production.",
        "aud_s3_t1": "12+ Proven viral niche templates",
        "aud_s3_t2": "AI short filmmaking & storytelling",
        "aud_s3_t3": "Full digital cloning with HeyGen",
        "sc_eyebrow": "04 / PRODUCTION SHOWCASE",
        "sc_title": "Real Client-Ready Outputs Produced by Our System",
        "sc_desc": "All visuals and video clips shown below were produced 100% using the exact AI tools and workflows taught inside Zero To AI.",
        "sc_v1_title": "Cinematic Commercial TVC Ad Concept",
        "sc_v2_title": "Hyper-Realistic AI Avatar with Precision Lipsync",
        "sc_v3_title": "Stop-Motion Claymation Product Commercial",
        "sc_v4_title": "Smooth Dynamic Camera Control with Kling 3.0 & Seedance",
        "bl_eyebrow": "05 / QUALITY COMPARISON",
        "bl_title": "The Visible Leap When You Apply the Realism Framework",
        "bl_desc": "Drag the slider to compare generic guesswork prompting against the refined Realism Cheat Sheet and optical camera parameters.",
        "bl_after_label": "ZERO TO AI REALISM (NATURAL SKIN · ACCURATE DEPTH)",
        "bl_before_label": "RANDOM PROMPTING (WAXY SKIN · PLASTIC GLOSS)",
        "bl_drag_note": "Drag the slider horizontally to compare micro-texture detail",
        "vt_eyebrow": "05 / RESOURCE VAULT",
        "vt_title": "Unlock Battle-Tested Prompt Banks & Production Templates",
        "vt_desc": "Never start from a blank screen. Every Skool community member receives immediate access to our continuously updated library of prompts, workflows, and presets.",
        "vt_c1_badge": "CORE ASSET VAULT",
        "vt_c1_title": "Production Toolkits & Exclusive Prompt Libraries",
        "vt_c1_desc": "Instant access to categorized prompt databases, realism reference cheatsheets, and viral script formulas ready to deploy.",
        "vt_chip_1_title": "Universal Prompt Bank",
        "vt_chip_1_desc": "100+ proven prompts for images & video",
        "vt_chip_2_title": "The Realism Cheat Sheet",
        "vt_chip_2_desc": "Exact modifiers to eliminate AI plastic skin",
        "vt_chip_3_title": "TVC Brand Ad Templates",
        "vt_chip_3_desc": "Modular shotlists for Nike & BMW style ads",
        "vt_chip_4_title": "12+ Viral Niche Packs",
        "vt_chip_4_desc": "Formulas for POV, Evolutions & Miniatures",
        "vt_chip_5_title": "ChatGPT Script Prompts",
        "vt_chip_5_desc": "Automated storyboard & scene prompt generator",
        "vt_chip_6_title": "Capcut SFX Library",
        "vt_chip_6_desc": "Curated cinematic sound effects for impact",
        "vt_c2_badge": "PROMPT LIBRARY",
        "vt_c2_title": "AI Influencer & UGC Avatar Prompt System",
        "vt_c2_desc": "Curated prompt formulas for locking facial identity, natural lifestyle lighting, and seamless product handoffs.",
        "vt_c2_f1": "<strong>Photorealistic Portraiture:</strong> Locked facial structure with authentic skin pores and micro-details",
        "vt_c2_f2": "<strong>Dynamic Environments:</strong> Seamlessly place avatars into indoor studios, urban streets, and nature",
        "vt_c2_f3": "<strong>Product Handoffs:</strong> Proven workflows to place commercial packaging directly in avatar hands",
        "vt_c3_badge": "ADVERTISING PLAYBOOK",
        "vt_c3_title": "Automated Ad Frameworks & Short-Form Presets",
        "vt_c3_desc": "Plug-and-play storyboards for podcast ads, claymation spots, and fast-paced commercial promos.",
        "vt_c3_f1": "<strong>15s & 30s Ad Blueprints:</strong> Engineered retention hooks optimized for TikTok & Reels",
        "vt_c3_f2": "<strong>Advanced Flows Workflow:</strong> Node-based shortcuts to output finished ads in < 10 minutes",
        "vt_c3_f3": "<strong>Audio Pacing Presets:</strong> Align visual scene cuts to background music drops and SFX",
        "vt_c4_badge": "SKOOL GAMIFICATION",
        "vt_c4_title": "Level 1–9 Ranks & Free Lifetime Membership",
        "vt_c4_desc": "Participate in weekly community challenges, post your assignments, earn community points, and climb the leaderboard.",
        "vt_c4_f1": "<strong>Tiered Level Unlocks:</strong> Unlock exclusive bonus resources as you progress from Level 2 to Level 7",
        "vt_c4_f2": "<strong>Level 8 Grandmaster Milestone:</strong> Earn FREE LIFETIME MEMBERSHIP — zero future monthly fees",
        "vt_c4_f3": "<strong>Community Recognition:</strong> Gain direct visibility and project collaboration opportunities with Vmiz Nguyen",
        "vt_sum_label": "TOTAL VALUE OF INCLUDED ASSETS & VAULTS",
        "vt_sum_free": "INCLUDED 100% FREE WITH YOUR $9/MO MEMBERSHIP",
        "vt_sum_btn": "Unlock the Vault on Skool ($9/mo) <b>→</b>",
        "pr_eyebrow": "06 / TRANSPARENT PRICING",
        "pr_title": "Join the Zero To AI Skool Community",
        "pr_desc": "Affordable Founding Member pricing. No hidden fees, no lock-in contracts, cancel anytime directly within your Skool account.",
        "pr_badge": "FOUNDING MEMBER SPECIAL · $9/MONTH OR $55/YEAR",
        "pr_period": "/ month (Cancel anytime)",
        "pr_manifesto": "<strong>Why only $9/month?</strong> We believe mastering commercial AI skills shouldn't be gatekept behind overpriced $500–$1,000 courses. At just $9/month (less than a coffee a week), you get full, unrestricted access to the entire 9-Phase curriculum, prompt vaults, weekly challenges, and direct feedback from founder Vmiz Nguyen.",
        "pr_breakdown_1": "Complete 9-Phase Masterclass (114+ step-by-step video modules)",
        "pr_breakdown_2": "Build Lab 1-on-1 Feedback & Weekly Community Challenges",
        "pr_breakdown_3": "Resource Vault: Realism Cheat Sheet, Prompt Banks & Ad Blueprints",
        "pr_breakdown_4": "Active Skool Creator Community & Level 8 Free Lifetime Reward",
        "pr_breakdown_total": "Market Value of Equivalent Training: $497+",
        "pr_final_call": "Your Founding Member Access: <span class=\"highlight-price\">Only $9 / Month</span> (or $55 / Year)",
        "pr_chk_1": "<strong>Immediate 9-Phase Access:</strong> Dive into all 114+ video lessons covering images, videos, and ads",
        "pr_chk_2": "<strong>De-Plasticizing Mastery:</strong> Learn The Realism Cheat Sheet, Kling 3.0, Seedance 2.0 & HeyGen",
        "pr_chk_3": "<strong>Commercial Ad Production:</strong> Create Nike/BMW TVCs, Claymation, and ads in under 10 minutes",
        "pr_chk_4": "<strong>Clone Yourself:</strong> Automate your presence with voice cloning and AI lipsync avatars",
        "pr_chk_5": "<strong>Build Lab 1-on-1 Critique:</strong> Post your assignments to get detailed feedback from mentors",
        "pr_chk_6": "<strong>Free Lifetime Reward:</strong> Reach Level 8 in the Skool community to get free membership forever",
        "pr_btn_cta": "Join Zero To AI on Skool — Only $9/Mo <b>→</b>",
        "pr_trust_1": "<strong>Cancel Anytime with 1-Click:</strong> No lock-in contracts. Easily cancel your subscription directly in Skool settings whenever you wish.",
        "pr_trust_2": "<strong>Instant Workspace Activation:</strong> Full access to the classroom, community channels, and vault unlocks immediately.",
        "pr_trust_3": "<strong>Annual Discount Option:</strong> Choose the $55/year plan to lock in nearly 50% savings.",
        "faq_eyebrow": "07 / FREQUENTLY ASKED QUESTIONS",
        "faq_title": "Direct & Honest Answers Before You Join",
        "faq_desc": "We practice radical transparency: clear expectations, zero get-rich-quick hype, and honest craft.",
        "faq_q1": "Does this course promise get-rich-quick schemes or overnight passive income?",
        "faq_a1": "Absolutely not. Zero To AI teaches real, durable creative skills: mastering modern AI generative platforms (Kling 3.0, Seedance 2.0, HeyGen, Nanobanana), producing commercial video ads for paying clients, and building viral social content. Your earning potential depends entirely on your commitment, practice, creative vision, and business hustle.",
        "faq_q2": "Is the $9 price a monthly subscription or a one-time fee?",
        "faq_a2": "It is an affordable Founding Member monthly subscription at $9/month (or $55/year for greater savings). You can cancel anytime directly inside Skool with a single click. Furthermore, by actively participating and completing assignments, you can climb our community leaderboard to Level 8 (Grandmaster) and earn 100% FREE LIFETIME MEMBERSHIP!",
        "faq_q3": "I have zero design, 3D, or video editing background. Can I keep up?",
        "faq_a3": "Yes, 100%. Zero To AI was explicitly designed to take creators from complete Zero. You do not need graphic design, 3D software, or coding skills. The curriculum begins with fundamental workspace navigation and basic prompting, then builds step-by-step into advanced video production and cloning.",
        "faq_q4": "Do the required AI tools cost a lot of extra money?",
        "faq_a4": "Not at all. The course is built to maximize tools that offer generous free tiers and daily free generation credits (such as Canva, Capcut, and free daily credits on video AI platforms). When you choose to upgrade to paid pro tiers for client work, typical tools cost $5 to $15/month and you only pay when you need them.",
        "faq_q5": "How does the Build Lab work, and how do I receive 1-on-1 feedback?",
        "faq_a5": "Whenever you complete a lesson assignment or a client ad project, you upload your draft to the Build Lab channel on Skool. Founder Vmiz Nguyen and experienced peers provide concrete, timestamped feedback — advising exactly which prompt tokens, camera angles, or pacing adjustments will elevate your work.",
        "final_eyebrow": "FOUNDING MEMBER ACCESS · ONLY $9/MO",
        "final_title": "Stop struggling on your own.<br />Start producing commercial AI assets today.",
        "final_desc": "For just $9/month (less than two cups of coffee), unlock the entire 9-Phase curriculum, battle-tested prompt vaults, and join an ambitious creator community led by Vmiz Nguyen.",
        "final_cta_btn": "Join Zero To AI on Skool — Only $9/Mo <b>→</b>",
        "final_trust_note": "⚡ Instant Skool Access · Cancel Anytime · Zero Hidden Fees",
        "footer_brand_desc": "A hands-on academy and creator community empowering you to master AI image, video, ad production, and digital cloning from ground zero. Powered by Skool.",
        "footer_col_curriculum": "9-Phase Curriculum",
        "footer_col_standards": "Transparency & Help",
        "footer_col_ecosystem": "Skool Community",
        "footer_link_classroom": "Skool Classroom (114+ Lessons)",
        "footer_link_framework": "9-Phase Core Roadmap",
        "footer_link_pipeline": "4-Step Production Pipeline",
        "footer_link_vault": "Resource Vault & Prompt Bank",
        "footer_link_buildlab": "Build Lab 1-on-1 Reviews",
        "footer_link_showcase": "Real Production Showcase",
        "footer_link_guidelines": "Community Guidelines",
        "footer_link_guardrails": "Transparency Promise",
        "footer_link_refund": "Cancellation Policy",
        "footer_link_tos": "Terms of Service",
        "footer_link_community": "Zero To AI Skool Community",
        "footer_link_sprints": "Weekly Sprints & Leaderboard",
        "footer_link_pass": "Founding Member Pass ($9/mo)",
        "footer_copy": "&copy; 2026 Zero To AI · Founder Vmiz Nguyen · All rights reserved.",
        "footer_opa": "Engineered under OPA KIT Fullstack Guidelines."
    },
    "vi": {
        "page_title": "Zero To AI — Làm Chủ AI Video & Tạo Nội Dung Kiếm Tiền | Skool Community",
        "meta_desc": "Khóa học thực chiến 9 Phase dành cho Creator & Marketer. Làm chủ hình ảnh AI, video chuyển động mượt mà, video quảng cáo UGC và nhân bản chính bạn. Học phí chỉ $9/tháng.",
        "top_bar_full": "✦ HỆ SINH THÁI ĐÀO TẠO & CỘNG ĐỒNG CREATOR ZERO TO AI · CHỈ $9/THÁNG ✦",
        "top_bar_mobile": "✦ Tham Gia Skool · Chỉ $9/tháng ✦",
        "top_bar_cta": "Vào Ngay →",
        "nav_framework": "Lộ trình 9 Phase",
        "nav_workflow": "Quy trình thực chiến",
        "nav_showcase": "Tác phẩm",
        "nav_vault": "Kho tài nguyên",
        "nav_pricing": "Học phí ($9/tháng)",
        "nav_join_cta": "Vào Skool ($9) <b>→</b>",
        "mob_ecosystem": "Hệ sinh thái khóa học",
        "mob_framework": "Lộ trình 9 Phase đào tạo",
        "mob_workflow": "Quy trình sản xuất 4 bước",
        "mob_showcase": "Bộ sưu tập video mẫu",
        "mob_buildlab": "Phòng phản biện 1-1",
        "mob_vault": "Kho tài nguyên & Template",
        "mob_levels": "Lộ trình phát triển 3 giai đoạn",
        "mob_pricing": "Học phí & Gia nhập ($9/tháng)",
        "mob_faq": "Giải đáp thắc mắc",
        "mob_join_btn": "Tham Gia Skool (Chỉ $9/tháng) <b>→</b>",
        "mob_trust_note": "⚡ <strong>Ưu đãi Founding Member:</strong> $9/tháng · Hủy bất kỳ lúc nào · Vào học ngay",
        "lang_select_title": "Ngôn ngữ / Language:",
        "hero_pill": "KHÓA HỌC & CỘNG ĐỒNG SKOOL THỰC CHIẾN · TỪ SỐ 0 ĐẾN OUTPUT THẬT",
        "hero_title": "Từ mò mẫm gõ prompt<br />đến <span class=\"gradient-text\">sản phẩm AI kiếm ra tiền.</span>",
        "hero_subtitle": "Ngưng gom nhặt prompt vụn vặt và tự loay hoay một mình. Zero To AI là lộ trình thực chiến 9 Phase giúp bạn làm chủ AI Image, AI Video, tạo video quảng cáo UGC và AI Influencer chân thực — không bị 'nhựa', đồng nhất nhân vật và sẵn sàng bàn giao cho nhãn hàng.",
        "hero_btn_primary": "Tham gia cộng đồng — Chỉ $9/tháng <b>→</b>",
        "hero_btn_ghost": "Xem chi tiết 9 Phase đào tạo ↓",
        "hero_value_badge": "⚡ <strong>Giá Founding Member:</strong> Chỉ $9/tháng hoặc $55/năm · Hủy bất kỳ lúc nào · Mở khóa toàn bộ 9 Phase",
        "hero_badge_1": "<strong>Skool</strong> Community",
        "hero_badge_2": "<strong>9 Phase</strong> 114+ Bài học",
        "hero_badge_3": "<strong>Build Lab</strong> Nhận xét 1-1",
        "hero_badge_4": "<strong>AI Ads & UGC</strong> Kiếm tiền thật",
        "hero_video_tag": "AI SHOWCASE · KLING 3.0, SEEDANCE 2.0 & HEYGEN",
        "manifesto_tag": "00 / TINH THẦN THỰC CHIẾN",
        "manifesto_title": "Không bài giảng lý thuyết suông.<br /><em>Học qua thực hành, ra sản phẩm thật.</em>",
        "manifesto_desc": "Zero To AI là không gian đào tạo và cộng đồng thực chiến dành cho Creator và Marketer do Founder Vmiz Nguyen sáng lập. Chúng tôi tập trung vào <strong>kỹ năng làm ra sản phẩm thương mại thật: tạo AI Influencer, dựng video quảng cáo sản phẩm, làm video viral và nhân bản chính bạn</strong> — không hứa hẹn làm giàu ảo, không tung hô phép màu một nút bấm.",
        "manifesto_p1": "<i>01</i> Bắt tay thực hành từ bài đầu tiên",
        "manifesto_p2": "<i>02</i> Quy trình bài bản hơn may rủi",
        "manifesto_p3": "<i>03</i> Sản phẩm thật hơn lời tán dương",
        "manifesto_p4": "<i>04</i> Kỹ năng ứng dụng kiếm ra tiền",
        "bento_eyebrow": "01 / HỆ SINH THÁI KHÓA HỌC",
        "bento_title": "Hệ Thống Đào Tạo AI Thực Chiến Toàn Diện Nhất",
        "bento_desc": "Từ người mới chưa biết gì đến khi tự tin sản xuất video quảng cáo bán cho khách hàng hoặc xây kênh triệu view. Mọi module đều hướng thẳng đến sản phẩm thực tế có thể sử dụng ngay.",
        "bento_c1_tag": "9 PHASE · 114+ BÀI HỌC CHUYÊN SÂU",
        "bento_c1_title": "Lộ Trình 9 Phase: Từ Số 0 Đến Làm Chủ AI Video & Image",
        "bento_c1_desc": "Giáo trình hệ thống bài bản: AI Foundations, Tạo Avatar & AI Influencer Studio, Khử chất nhựa (Realism Cheat Sheet), Làm chủ Kling 3.0 & Seedance 2.0, Sản xuất video Ads Nike/BMW/Claymation, Advanced Flows, 12+ Ngách Viral và Clone chính mình bằng HeyGen.",
        "bento_c1_footer": "Cập nhật liên tục theo các công cụ AI mới nhất",
        "bento_c1_link": "Xem chi tiết 9 Phase <b>→</b>",
        "bento_c2_tag": "REMOVING THE 'AI' LOOK",
        "bento_c2_title": "Bí Quyết Khử Hoàn Toàn Cảm Giác Ảnh & Video Bị Giả",
        "bento_c2_desc": "Học cách dùng bảng The Realism Cheat Sheet, tinh chỉnh ánh sáng, tiêu cự ống kính và chuyển động camera để ảnh và video AI tự nhiên như quay chụp thật, không bị biến dạng da hay méo mặt.",
        "bento_c2_footer_left": "Kỹ thuật độc quyền trong Phase 3 & 4",
        "bento_c2_footer_right": "Chân thực 100% ✦",
        "bento_c3_tag": "AI ADVERTISING & UGC",
        "bento_c3_title": "Sản Xuất Video Quảng Cáo Bán Cho Nhãn Hàng",
        "bento_c3_desc": "Tự động hóa video review sản phẩm với AI Avatar, dựng TVC quảng cáo phong cách Nike, BMW, hoạt hình đất sét (Claymation) hoặc phong cách game GTA. Dùng Advanced Flows tạo ads chỉ trong dưới 10 phút.",
        "bento_c3_footer": "Template & Workflow có sẵn",
        "bento_c3_link": "Xem quy trình làm Ads <b>→</b>",
        "bento_c4_tag": "CLONE YOURSELF · HEYGEN & VOICE",
        "bento_c4_title": "Nhân Bản Khuôn Mặt & Giọng Nói Của Chính Bạn",
        "bento_c4_desc": "Tạo bản sao kỹ thuật số nói lưu loát mọi ngôn ngữ với HeyGen và ElevenLabs. Tự động hóa sản xuất nội dung dài (longform) và video ngắn mà không cần ngồi trước camera mỗi ngày.",
        "bento_c4_footer": "Tiết kiệm 95% thời gian quay dựng",
        "bento_c4_link": "Khám phá công nghệ Clone <b>→</b>",
        "bento_c5_tag": "CỘNG ĐỒNG & GAMIFICATION",
        "bento_c5_title": "Thử Thách Nhận Góp Ý 1-1 & Thăng Hạng Level 1–9",
        "bento_c5_desc": "Nộp bài tập nhận feedback cụ thể từ Founder Vmiz Nguyen và cộng đồng. Tích lũy điểm thăng cấp từ Apprentice (Level 2) đến Grandmaster (Level 8) để nhận vé MIỄN PHÍ TRỌN ĐỜI (FREE Lifetime).",
        "bento_c5_footer": "Level 8 mở khóa Free Lifetime Membership",
        "bento_c5_link": "Xem bảng cấp bậc <b>→</b>",
        "fw_eyebrow": "02 / NỀN TẢNG THỰC CHIẾN",
        "fw_title": "Công cụ AI thay đổi từng tháng.<br /><span class=\"hl\">Nhưng phương pháp làm ra sản phẩm thì trường tồn.</span>",
        "fw_desc": "Đừng mất công chạy theo hàng ngàn prompt trôi nổi vô nghĩa trên mạng. Zero To AI dạy bạn phương pháp tư duy và quy trình làm chủ 4 nền tảng cốt lõi để tạo ra sản phẩm chất lượng cao bằng bất kỳ công cụ AI nào.",
        "fw_amateur_tag": "✕ Thói quen mò mẫm (Thiếu hệ thống)",
        "fw_amateur_desc": "Gõ prompt ngẫu hứng mong chờ may rủi, ảnh tạo ra bị nhão da như sáp nhựa, video méo mặt giật cục, tốn hàng trăm credit render vô ích mà không ra được sản phẩm dùng được.",
        "fw_director_tag": "✦ Quy trình Zero To AI (Có phương pháp)",
        "fw_director_desc": "Kiểm soát chính xác ánh sáng và độ sâu ảnh, giữ nguyên diện mạo nhân vật xuyên suốt, điều khiển chuyển động camera mượt mà và biến video AI thành sản phẩm thương mại hoàn chỉnh.",
        "fw_p1_idx": "TRỤ CỘT 01",
        "fw_p1_badge": "HÌNH ẢNH CHÂN THỰC & KHỬ NHỰA",
        "fw_p1_title": "Làm Chủ Prompting & The Realism Cheat Sheet",
        "fw_p1_desc": "Xóa bỏ triệt để chất 'nhựa' đặc trưng của ảnh AI. Nắm vững cấu trúc prompt chuẩn: ánh sáng, góc máy, vật liệu bề mặt và cảm xúc để ảnh chân thực như ảnh chụp thực tế.",
        "fw_p1_f1": "<strong>The Realism Cheat Sheet:</strong> Bảng từ khóa vàng giúp da người thật, chân lông và nếp vải sắc nét tự nhiên",
        "fw_p1_f2": "<strong>Ánh sáng & Góc máy:</strong> Kiểm soát hướng sáng, giờ vàng, đèn viền rim-light và bố cục khung hình điện ảnh",
        "fw_p1_f3": "<strong>Upscale 4K:</strong> Quy trình làm nét chi tiết lên chuẩn 4K siêu sắc mịn bằng Nanobanana & công cụ chuyên dụng",
        "fw_p1_spec": "Áp dụng cho Midjourney, Flux.1, Nanobanana",
        "fw_p2_idx": "TRỤ CỘT 02",
        "fw_p2_badge": "ĐỒNG NHẤT NHÂN VẬT & AVATAR",
        "fw_p2_title": "Xây Dựng AI Influencer & Avatar Thương Mại",
        "fw_p2_desc": "Giải quyết bài toán khó nhất của AI tạo sinh: Giữ nguyên một khuôn mặt, vóc dáng và trang phục qua nhiều bối cảnh khác nhau để xây dựng thương hiệu cá nhân hoặc kênh bán hàng.",
        "fw_p2_f1": "<strong>Khóa diện mạo nhân vật:</strong> Giữ vững ngũ quan và nhận diện khuôn mặt qua nhiều góc chụp và bối cảnh",
        "fw_p2_f2": "<strong>Avatar tích hợp sản phẩm:</strong> Đưa sản phẩm thực tế vào tay AI Avatar chân thực qua Wise Chat và mockup",
        "fw_p2_f3": "<strong>Đồng nhất giọng nói:</strong> Tạo và duy trì chất giọng thương hiệu ổn định (Consistent Character Voice) cho từng nhân vật",
        "fw_p2_spec": "Tối ưu hóa sản xuất AI Influencer & UGC Creator",
        "fw_p3_idx": "TRỤ CỘT 03",
        "fw_p3_badge": "VIDEO CHUYỂN ĐỘNG & LIPSYNC",
        "fw_p3_title": "Làm Chủ Kling 3.0, Seedance 2.0 & HeyGen",
        "fw_p3_desc": "Biến ảnh tĩnh thành video chuyển động tự nhiên không bị giật lag. Làm chủ kỹ thuật điều khiển máy quay, khử chuyển động giả và khớp khẩu hình chính xác từng âm tiết.",
        "fw_p3_f1": "<strong>Chuyển động máy quay mượt mà:</strong> Điều hướng Dolly đẩy, Pan quét ngang, Orbit xoay quanh và Zoom chuyển cảnh chuẩn xác",
        "fw_p3_f2": "<strong>Khử lỗi video AI:</strong> Loại bỏ hiện tượng dị dạng bàn tay, trôi hình và biến dạng không gian thường gặp",
        "fw_p3_f3": "<strong>Khớp khẩu hình Lipsync:</strong> Đồng bộ cử động môi chuẩn xác theo giọng lồng tiếng bằng HeyGen và video tools",
        "fw_p3_spec": "Thực chiến với Kling 3.0, Seedance 2.0, HeyGen",
        "fw_p4_idx": "TRỤ CỘT 04",
        "fw_p4_badge": "THƯƠNG MẠI HÓA & QUẢNG CÁO",
        "fw_p4_title": "Sản Xuất Video Quảng Cáo & Advanced Flows",
        "fw_p4_desc": "Biến kỹ năng AI thành doanh thu: Tự động hóa sản xuất video review sản phẩm, TVC phong cách Nike/BMW, hoạt hình đất sét Claymation và hoàn thiện quảng cáo dưới 10 phút.",
        "fw_p4_f1": "<strong>Mẫu TVC thương hiệu:</strong> Thực hành làm TVC chuyên nghiệp mô phỏng các thương hiệu lớn (Nike, ô tô BMW, thời trang)",
        "fw_p4_f2": "<strong>Quy trình sản xuất siêu tốc:</strong> Ứng dụng Node-based workflow và MagicFlow để ra lò video quảng cáo chỉ trong 10 phút",
        "fw_p4_f3": "<strong>Hậu kỳ Capcut & Âm thanh:</strong> Ghép nhạc, cắt nhịp, lồng hiệu ứng âm thanh (SFX) và làm phụ đề cuốn hút người xem",
        "fw_p4_spec": "Đóng gói bàn giao cho khách hàng hoặc chạy ads ra đơn",
        "wf_eyebrow": "02 / QUY TRÌNH SẢN XUẤT",
        "wf_title": "Từ Ý Tưởng Đến Video Quảng Cáo Bàn Giao Khách Hàng",
        "wf_desc": "Quy trình 4 bước tinh gọn giúp bạn sản xuất hình ảnh và video AI bài bản, tiết kiệm tối đa credit render và luôn ra kết quả như mong muốn.",
        "wf_tab_1": "1. Đề bài & Kịch bản",
        "wf_tab_2": "2. Keyframe & Khử nhựa",
        "wf_tab_3": "3. Chuyển động & Lipsync",
        "wf_tab_4": "4. Capcut & Build Lab",
        "wf_s1_title": "Lên kịch bản & phân cảnh có chủ đích bằng ChatGPT",
        "wf_s1_desc": "Không bao giờ mở công cụ render khi chưa rõ mục tiêu. Dùng ChatGPT xây dựng kịch bản chi tiết, phân cảnh rõ ràng và chọn đúng tỉ lệ khung hình (9:16 cho TikTok/Reels hoặc 16:9 cho TVC/YouTube).",
        "wf_s1_c1": "Xác định rõ thông điệp và đối tượng khán giả của video",
        "wf_s1_c2": "Viết kịch bản phân cảnh chi tiết từng giây với ChatGPT",
        "wf_s1_c3": "Tiết kiệm 80% thời gian thử sai và tránh lãng phí credit",
        "wf_s2_title": "Tạo Keyframe chất lượng cao & Áp dụng Realism Cheat Sheet",
        "wf_s2_desc": "Sử dụng prompt chuẩn hóa kết hợp The Realism Cheat Sheet để tạo ra ảnh gốc có độ nét cao, ánh sáng tự nhiên và đồng nhất diện mạo nhân vật trước khi đưa vào chuyển động.",
        "wf_s2_c1": "Khóa ngũ quan nhân vật để giữ độ đồng nhất qua các khung hình",
        "wf_s2_c2": "Xử lý ánh sáng khối, loại bỏ cảm giác da sáp nhựa nhân tạo",
        "wf_s2_c3": "Nâng cấp ảnh gốc lên 4K sắc nét bằng công cụ upscale",
        "wf_s3_title": "Tạo chuyển động mượt mà với Kling 3.0, Seedance 2.0 & Lipsync",
        "wf_s3_desc": "Đưa ảnh tĩnh vào các mô hình video AI hàng đầu. Điều khiển quỹ đạo camera (Dolly, Pan, Zoom) và ứng dụng HeyGen để khẩu hình môi khớp khít với giọng lồng tiếng.",
        "wf_s3_c1": "Kiểm soát chuyển động tự nhiên, không bị biến dạng cơ thể",
        "wf_s3_c2": "Điều khiển hướng máy quay chính xác theo ý đồ câu chuyện",
        "wf_s3_c3": "Khớp khẩu hình tự nhiên theo file âm thanh lồng tiếng",
        "wf_s4_title": "Hậu kỳ Capcut, lồng tiếng SFX & Nộp bài nhận xét Build Lab",
        "wf_s4_desc": "Ráp nối các đoạn clip trong Capcut, tinh chỉnh nhịp cắt, chèn hiệu ứng âm thanh sống động và nộp lên kênh Build Lab của Skool để nhận góp ý chỉnh sửa cụ thể từ cộng đồng.",
        "wf_s4_c1": "Cắt ghép nhịp nhàng theo tiết tấu âm nhạc và hiệu ứng SFX",
        "wf_s4_c2": "Thêm phụ đề động bắt mắt giữ chân người xem trên mạng xã hội",
        "wf_s4_c3": "Nhận góp ý 1-1 tại Build Lab để nâng cao chất lượng sản phẩm",
        "aud_eyebrow": "03 / LỘ TRÌNH PHÁT TRIỂN RÕ RÀNG",
        "aud_title": "Thiết kế phù hợp từ người mới bắt đầu đến Creator chuyên nghiệp",
        "aud_desc": "Không cần biết lập trình hay có kinh nghiệm đồ họa. Lộ trình 9 Phase chia thành 3 giai đoạn rõ ràng giúp bạn nâng cao tay nghề từng bước vững chắc.",
        "aud_s1_tier": "GIAI ĐOẠN 01",
        "aud_s1_stage": "PHASE 1 – PHASE 3",
        "aud_s1_title": "Người Mới Bắt Đầu Từ Con Số 0",
        "aud_s1_desc": "Chưa từng tạo ảnh AI hay làm video? Bạn sẽ bắt đầu từ các bài hướng dẫn căn bản, hiểu cách hoạt động của mô hình AI, viết prompt đầu tiên, tạo Avatar AI cá nhân và xuất ảnh chân thực không bị nhựa.",
        "aud_s1_t1": "Không cần kinh nghiệm trước",
        "aud_s1_t2": "Tạo Avatar AI đầu tiên",
        "aud_s1_t3": "Có sản phẩm ngay tuần đầu",
        "aud_s2_tier": "GIAI ĐOẠN 02",
        "aud_s2_stage": "PHASE 4 – PHASE 6",
        "aud_s2_title": "Creator & Nhà Sản Xuất Video Ngắn",
        "aud_s2_desc": "Muốn tạo video chuyển động mượt mà và làm quảng cáo kiếm tiền? Bạn sẽ làm chủ Kling 3.0, Seedance 2.0, đồng nhất nhân vật và giọng nói, sản xuất TVC phong cách Nike/BMW và làm video quảng cáo thần tốc dưới 10 phút.",
        "aud_s2_t1": "Làm chủ Kling & Seedance",
        "aud_s2_t2": "Sản xuất video quảng cáo UGC",
        "aud_s2_t3": "Làm video Ads dưới 10 phút",
        "aud_s3_tier": "GIAI ĐOẠN 03",
        "aud_s3_stage": "PHASE 7 – PHASE 9",
        "aud_s3_title": "Xây Kênh Viral, Làm Phim & AI Clone",
        "aud_s3_desc": "Sẵn sàng nhân bản bản thân và phủ sóng mạng xã hội. Bạn sẽ khai thác 12+ ngách video triệu view, học kỹ thuật làm phim ngắn với ChatGPT và tạo ra bản sao AI của chính mình để tự động hóa sản xuất nội dung.",
        "aud_s3_t1": "12+ Ngách video dễ viral",
        "aud_s3_t2": "Kỹ thuật làm phim ngắn AI",
        "aud_s3_t3": "Nhân bản bản thân với HeyGen",
        "sc_eyebrow": "04 / TÁC PHẨM THỰC TẾ",
        "sc_title": "Những Sản Phẩm Bạn Có Thể Tạo Ra Sau Khóa Học",
        "sc_desc": "Toàn bộ video và hình ảnh được tạo ra 100% bằng quy trình và công cụ được giảng dạy trực tiếp trong 9 Phase tại Zero To AI.",
        "sc_v1_title": "TVC Quảng Cáo Sản Phẩm Phong Cách Điện Ảnh",
        "sc_v2_title": "Avatar AI Khớp Khẩu Hình Lipsync Chân Thực",
        "sc_v3_title": "Video Quảng Cáo Hoạt Hình Đất Sét (Claymation)",
        "sc_v4_title": "Chuyển Động Camera Mượt Mà Với Kling 3.0 & Seedance",
        "bl_eyebrow": "05 / CHẤT LƯỢNG KHÁC BIỆT",
        "bl_title": "Thấy Rõ Sự Khác Biệt Khi Áp Dụng Đúng Quy Trình",
        "bl_desc": "Kéo thanh trượt để so sánh hình ảnh tạo bằng prompt ngẫu hứng so với hình ảnh áp dụng bảng The Realism Cheat Sheet và kỹ thuật ánh sáng chuyên sâu.",
        "bl_after_label": "ÁP DỤNG ZERO TO AI (KHỬ NHỰA · TỰ NHIÊN)",
        "bl_before_label": "PROMPT NGẪU HỨNG (DA NHỰA · THIẾU CHI TIẾT)",
        "bl_drag_note": "Kéo thanh trượt để so sánh chất lượng chi tiết",
        "vt_eyebrow": "05 / KHO TÀI NGUYÊN ĐÍNH KÈM",
        "vt_title": "Mở Khóa Toàn Bộ Template & Ngân Hàng Prompt Sẵn Dùng",
        "vt_desc": "Không cần tự mày mò từ trang giấy trắng. Mọi thành viên Skool đều nhận trọn bộ tài nguyên mẫu được cập nhật liên tục để ứng dụng ngay vào dự án của mình.",
        "vt_c1_badge": "TỔNG HỢP TÀI NGUYÊN THỰC HÀNH",
        "vt_c1_title": "Kho Công Cụ & Thư Viện Prompt Độc Quyền",
        "vt_c1_desc": "Truy cập ngay lập tức vào ngân hàng prompt mẫu, bảng tra cứu khử nhựa và các mẫu kịch bản video quảng cáo ăn khách nhất.",
        "vt_chip_1_title": "Prompt Bank đa phong cách",
        "vt_chip_1_desc": "100+ prompt hình ảnh chuẩn xác",
        "vt_chip_2_title": "The Realism Cheat Sheet",
        "vt_chip_2_desc": "Bảng từ khóa khử sạch chất nhựa AI",
        "vt_chip_3_title": "Template TVC Nike/BMW",
        "vt_chip_3_desc": "Khung kịch bản và prompt làm quảng cáo",
        "vt_chip_4_title": "12+ Kịch bản ngách Viral",
        "vt_chip_4_desc": "Công thức video triệu view TikTok/Reels",
        "vt_chip_5_title": "Mẫu kịch bản ChatGPT",
        "vt_chip_5_desc": "Prompt tạo kịch bản phân cảnh tự động",
        "vt_chip_6_title": "Thư viện âm thanh SFX",
        "vt_chip_6_desc": "Gói hiệu ứng âm thanh dựng phim Capcut",
        "vt_c2_badge": "THƯ VIỆN PROMPT THỰC CHIẾN",
        "vt_c2_title": "Prompt Library Cho AI Influencer & Avatar UGC",
        "vt_c2_desc": "Tập hợp các prompt đã kiểm nghiệm giúp tạo Avatar nhất quán, chân dung người mẫu và góc chụp sản phẩm chuyên nghiệp.",
        "vt_c2_f1": "<strong>Prompt chân dung đời thực:</strong> Khóa chi tiết khuôn mặt và nước da tự nhiên",
        "vt_c2_f2": "<strong>Prompt bối cảnh phong phú:</strong> Từ studio trong nhà đến ngoại cảnh đường phố",
        "vt_c2_f3": "<strong>Ghép sản phẩm vào tay:</strong> Mẫu prompt và quy trình đưa đồ vật vào tay Avatar",
        "vt_c3_badge": "TEMPLATE QUẢNG CÁO & SHORT-FORM",
        "vt_c3_title": "Bộ Kịch Bản & Khung Video Quảng Cáo Tự Động",
        "vt_c3_desc": "Khung mẫu có sẵn cho podcast ads, video hoạt hình đất sét Claymation, TVC phong cách thể thao và video game GTA.",
        "vt_c3_f1": "<strong>Khung quảng cáo 15s & 30s:</strong> Tối ưu cấu trúc giữ chân 3 giây đầu",
        "vt_c3_f2": "<strong>Quy trình Advanced Flows:</strong> Hướng dẫn node-based làm ads dưới 10 phút",
        "vt_c3_f3": "<strong>Preset âm thanh & tiết tấu:</strong> Chọn nhạc nền và âm thanh đẩy cảm xúc",
        "vt_c4_badge": "HỆ THỐNG CẤP BẬC & THƯỞNG",
        "vt_c4_title": "Thăng Cấp Nhận Free Lifetime Membership",
        "vt_c4_desc": "Hệ thống Gamification độc đáo trên Skool: Tương tác, nộp bài tập và thăng hạng từ Level 1 đến Level 9.",
        "vt_c4_f1": "<strong>Mở khóa đặc quyền từng level:</strong> Nhận thêm tài nguyên khi đạt cấp bậc mới",
        "vt_c4_f2": "<strong>Cột mốc Level 8:</strong> Tặng MIỄN PHÍ TRỌN ĐỜI (FREE Lifetime) khi đạt Grandmaster",
        "vt_c4_f3": "<strong>Vinh danh cộng đồng:</strong> Cơ hội kết nối và nhận dự án cùng Founder Vmiz Nguyen",
        "vt_sum_label": "TỔNG GIÁ TRỊ TÀI NGUYÊN & TEMPLATE",
        "vt_sum_free": "ĐÃ BAO GỒM TOÀN BỘ TRONG GÓI $9/THÁNG",
        "vt_sum_btn": "Tham Gia Skool Mở Khóa Tài Nguyên ($9) <b>→</b>",
        "pr_eyebrow": "06 / HỌC PHÍ MINH BẠCH",
        "pr_title": "Gia Nhập Cộng Đồng Skool Zero To AI",
        "pr_desc": "Mức giá khởi điểm ưu đãi dành cho những thành viên sáng lập (Founding Members). Không phí ẩn, không bẫy hợp đồng, chủ động hủy bất cứ lúc nào.",
        "pr_badge": "ƯU ĐÃI FOUNDING MEMBER · CHỈ $9/THÁNG HOẶC $55/NĂM",
        "pr_period": "/ tháng (Hủy bất cứ lúc nào)",
        "pr_manifesto": "<strong>Vì sao có mức giá chỉ $9/tháng?</strong> Chúng tôi tin rằng kỹ năng làm chủ AI để tạo ra thu nhập không nên bị rào cản bởi những khóa học $500–$1,000 ngoài thị trường. Với chỉ $9/tháng (chưa đến một ly cà phê mỗi tuần), bạn có toàn quyền tiếp cận 9 Phase đào tạo, kho tài nguyên mẫu và cộng đồng hỗ trợ trực tiếp từ Founder Vmiz Nguyen.",
        "pr_breakdown_1": "Trọn bộ 9 Phase Đào tạo (114+ bài học từ cơ bản đến nâng cao)",
        "pr_breakdown_2": "Phòng phản biện Build Lab: Nhận xét bài tập 1-1 từ Mentor",
        "pr_breakdown_3": "Kho tài nguyên mẫu: Prompt Bank, Realism Sheet & Template Ads",
        "pr_breakdown_4": "Cộng đồng Skool sôi nổi & Cơ hội nhận Free Lifetime ở Level 8",
        "pr_breakdown_total": "Giá trị khóa học ngoài thị trường: $497+",
        "pr_final_call": "Mức giá Founding Member trên Skool: <span class=\"highlight-price\">Chỉ $9 / Tháng</span> (hoặc $55 / Năm)",
        "pr_chk_1": "<strong>Mở khóa toàn bộ 9 Phase:</strong> Học ngay 114+ bài học thực chiến từ số 0 đến làm chủ AI Video",
        "pr_chk_2": "<strong>Bí quyết khử ảnh nhựa:</strong> Làm chủ The Realism Cheat Sheet, Kling 3.0, Seedance 2.0 & HeyGen",
        "pr_chk_3": "<strong>Sản xuất video quảng cáo:</strong> Hướng dẫn làm TVC Nike/BMW, Claymation và ads dưới 10 phút",
        "pr_chk_4": "<strong>Nhân bản chính bạn (Clone Yourself):</strong> Tạo bản sao AI nói chuyện lưu loát bằng giọng của bạn",
        "pr_chk_5": "<strong>Nhận góp ý 1-1 tại Build Lab:</strong> Đăng bài nộp bài tập để mentor sửa lỗi chi tiết",
        "pr_chk_6": "<strong>Cơ hội nhận Free Lifetime:</strong> Thăng hạng Level 8 để được tặng tài khoản trọn đời miễn phí",
        "pr_btn_cta": "Tham Gia Zero To AI Trên Skool — Chỉ $9/Tháng <b>→</b>",
        "pr_trust_1": "<strong>Chủ động hủy bất kỳ lúc nào:</strong> Không ràng buộc hợp đồng. Bạn có thể tự bấm hủy gia hạn trực tiếp trên Skool chỉ với 1 cú nhấp chuột.",
        "pr_trust_2": "<strong>Kích hoạt tức thì:</strong> Vào học ngay lập tức toàn bộ 9 Phase ngay sau khi xác nhận trên Skool.",
        "pr_trust_3": "<strong>Lựa chọn tiết kiệm:</strong> Tùy chọn đóng $55/năm để tiết kiệm tới 50% chi phí học tập.",
        "faq_eyebrow": "07 / CÂU HỎI THƯỜNG GẶP",
        "faq_title": "Giải Đáp Minh Bạch Mọi Thắc Mắc Của Bạn",
        "faq_desc": "Mọi thông tin về khóa học, công cụ và chi phí đều được công khai minh bạch trước khi bạn quyết định tham gia.",
        "faq_q1": "Khóa học này có hứa hẹn làm giàu nhanh hay cam kết kiếm hàng ngàn USD không?",
        "faq_a1": "Hoàn toàn không. Zero To AI không bán giấc mơ làm giàu sau một đêm hay cam kết tiền tự về tài khoản. Chúng tôi trang bị cho bạn kỹ năng thực tế: làm chủ công cụ AI (Kling 3.0, Seedance 2.0, HeyGen, Nanobanana), quy trình tạo video quảng cáo bán cho khách hàng, và xây dựng kênh nội dung viral. Thu nhập của bạn sẽ phụ thuộc vào mức độ thực hành, chất lượng sản phẩm và khả năng tìm kiếm khách hàng của chính bạn.",
        "faq_q2": "Học phí $9 là tính theo tháng hay trả một lần duy nhất?",
        "faq_a2": "Đây là mức phí thành viên Founding Member $9/tháng (hoặc bạn có thể chọn gói $55/năm để tiết kiệm hơn). Bạn có thể chủ động hủy đăng ký bất cứ lúc nào trực tiếp trong tài khoản Skool chỉ với 1 cú click chuột mà không gặp bất kỳ trở ngại nào. Đặc biệt, nếu bạn tích cực tham gia và thăng hạng lên Level 8 trong cộng đồng, bạn sẽ được trao tặng tư cách thành viên TRỌN ĐỜI MIỄN PHÍ (Free Lifetime Membership)!",
        "faq_q3": "Tôi là người mới bắt đầu, chưa biết dùng Photoshop hay phần mềm dựng phim thì có học được không?",
        "faq_a3": "Hoàn toàn học được! Zero To AI được thiết kế đặc biệt bắt đầu từ con số 0 (Zero). Bạn không cần có kinh nghiệm đồ họa, làm phim hay biết viết code. Các bài học đi từ hướng dẫn cơ bản nhất: làm quen giao diện, viết prompt đơn giản, tạo ảnh AI đầu tiên cho đến các quy trình nâng cao từng bước một.",
        "faq_q4": "Các công cụ AI trong khóa học có tốn thêm nhiều chi phí không?",
        "faq_a4": "Giáo trình ưu tiên tối đa các công cụ có phiên bản miễn phí hoặc chi phí rất thấp để bạn thực hành (như Canva, Capcut, các gói credit miễn phí hàng ngày trên các nền tảng video AI). Khi bạn muốn nâng cấp để làm dự án cho khách hàng, các gói công cụ phổ biến thường chỉ từ $5 - $15/tháng và bạn chỉ cần mua khi thực sự có nhu cầu.",
        "faq_q5": "Kênh Build Lab hoạt động ra sao? Làm thế nào để tôi nhận được góp ý bài làm?",
        "faq_a5": "Sau mỗi bài tập hoặc dự án thực hành, bạn chỉ cần đăng sản phẩm của mình lên chuyên mục Build Lab trên Skool. Founder Vmiz Nguyen và các thành viên có kinh nghiệm sẽ trực tiếp xem, chỉ rõ những điểm cần khắc phục (ví dụ: cách chỉnh prompt để da bớt nhựa, cách chọn góc máy camera cho tự nhiên hơn) giúp bạn tiến bộ rõ rệt sau từng bài tập.",
        "final_eyebrow": "ƯU ĐÃI FOUNDING MEMBER · CHỈ $9/THÁNG",
        "final_title": "Ngưng tự mày mò một mình.<br />Bắt đầu tạo ra sản phẩm AI thực chiến ngay hôm nay.",
        "final_desc": "Chỉ $9/tháng (chưa bằng 2 ly cà phê), mở khóa ngay toàn bộ lộ trình 9 Phase, kho template mẫu và cộng đồng sáng tạo cùng Founder Vmiz Nguyen.",
        "final_cta_btn": "Tham Gia Zero To AI Trên Skool — Chỉ $9/Tháng <b>→</b>",
        "final_trust_note": "⚡ Kích hoạt tức thì trên Skool · Hủy bất cứ lúc nào · Không phí ẩn",
        "footer_brand_desc": "Khóa học và cộng đồng thực chiến giúp Creator và Marketer làm chủ AI Image, AI Video, tạo video quảng cáo và nhân bản chính mình từ con số 0.",
        "footer_col_curriculum": "Giáo trình 9 Phase",
        "footer_col_standards": "Hỗ trợ & Minh bạch",
        "footer_col_ecosystem": "Cộng đồng Skool",
        "footer_link_classroom": "Skool Classroom (114+ bài)",
        "footer_link_framework": "Lộ trình 9 Phase cốt lõi",
        "footer_link_pipeline": "Quy trình sản xuất 4 bước",
        "footer_link_vault": "Kho tài nguyên & Prompt Bank",
        "footer_link_buildlab": "Phòng phản biện Build Lab",
        "footer_link_showcase": "Tác phẩm thực tế",
        "footer_link_guidelines": "Quy tắc cộng đồng",
        "footer_link_guardrails": "Chính sách minh bạch",
        "footer_link_refund": "Chính sách hủy đăng ký",
        "footer_link_tos": "Điều khoản tham gia",
        "footer_link_community": "Cộng đồng Skool Zero To AI",
        "footer_link_sprints": "Thử thách tuần & Gamification",
        "footer_link_pass": "Gói Founding Member ($9/tháng)",
        "footer_copy": "&copy; 2026 Zero To AI · Founder Vmiz Nguyen · Bảo lưu mọi quyền.",
        "footer_opa": "Được xây dựng chuẩn mực theo hướng dẫn OPA KIT."
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
