/**
 * Portfolio Content Data - Single Source of Truth
 * All blog posts, projects, and achievements in one place
 */

// ============================================================================
// Projects Data (used by Project Showcase & Projects Section)
// ============================================================================
export const projectsData = {
  completed: [
    {
      id: 'ergolearn-ai',
      title: 'ErgoLearn AI — Privacy-First Biomechanical Posture Coach',
      description: 'Turns your webcam into a local, offline 3D biomechanical sensor. Tracks spine compression, shoulder asymmetry, and screen distance via interpupillary mapping. Features a 10-second rolling Concentration Index and local LLM wellness coach. Built with Tauri (Rust) + Python (MediaPipe) + WebSocket IPC.',
      tags: ['Tauri/Rust', 'Python', 'MediaPipe', 'WebSockets'],
      github: 'https://github.com/BMWareSPEEDY/Ergolearn-AI',
      showcase: true,
      showcaseDescription: 'Developed a privacy-first, offline workspace posture tracker using Tauri and MediaPipe, winning the Productivity Track Award at Hackmars 2026.'
    },
    {
      id: 'tisb-swap',
      title: 'TISB Swap (Verde) — Sustainable Student Marketplace',
      description: 'Flutter + Supabase marketplace with database-level anti-spam (PostgreSQL triggers), keyword filtering, peer reporting with trust scores, real-time chat, and live CO₂/water impact tracking. TISB email-gated auth. Won TISB Hacks 2026 and NorCal Hacks 2026 Productivity Track.',
      tags: ['Flutter/Dart', 'Supabase', 'PostgreSQL', 'RLS'],
      github: 'https://github.com/BMWareSPEEDY/TISB_Swap',
      showcase: true,
      showcaseDescription: 'Built a Flutter-based mobile marketplace for students with PostgreSQL security, anti-spam limits, and keyword filtering triggers to protect community trade. Won accolades at TISB Hacks 2026.'
    },
    {
      id: 'meteor-tracking',
      title: 'Meteor Tracking App',
      description: 'Developed during TISB Hacks — scrapes government meteor databases for real-time sighting data with interactive map visualization. Built with Flutter + Firebase.',
      tags: ['Flutter/Dart', 'Firebase'],
      github: 'https://github.com/BMWareSPEEDY/meteor-Tracking-app-by-Ayansh-Paliwal-and-Sidharth-Banglani',
      showcase: false
    },
    {
      id: 'sd-generator',
      title: 'SD AI Image Generator',
      description: 'Python-based high-quality image generator using Stable Diffusion 3.5 Medium with 4-bit NF4 quantization, batch inference, and randomized prompt construction for creative variations.',
      tags: ['Python', 'Diffusers', 'PyTorch', 'SD 3.5'],
      github: 'https://github.com/BMWareSPEEDY/SD-image-generator',
      showcase: false
    },
    {
      id: 'verity',
      title: 'Verity — AI Prompt Optimization Chrome Extension',
      description: 'Browser extension (Manifest V3) that rephrases prompts for depth and clarity to reduce hallucinations. Built with React + TypeScript + Vite + Supabase. Landing page deployed separately.',
      tags: ['React', 'TypeScript', 'Vite', 'Manifest V3'],
      github: 'https://github.com/BMWareSPEEDY/Verity_Website_bolt',
      showcase: false
    },
    {
      id: 'terminal-velocity',
      title: 'Terminal Velocity — Next.js Landing Page',
      description: 'High-performance landing page built with Next.js 16, React 19, Radix UI, and Tailwind CSS. Features framer-motion animations, shadcn/ui components, and optimized for Vercel deployment.',
      tags: ['Next.js 16', 'React 19', 'Tailwind', 'Radix UI'],
      github: 'https://github.com/BMWareSPEEDY/terminal-velocity-landing-page',
      showcase: false
    },
    {
      id: 'worldcup-predictor',
      title: 'World Cup Predictor — Monte Carlo Tournament Simulator',
      description: 'Probabilistic World Cup forecasting using Poisson regression goal models, Elo-based team ratings, and dynamic form adjustments. Runs 10,000+ Monte Carlo simulations per tournament. Features player-level strength modeling, live fixture scraping, and FastAPI backend with static frontend.',
      tags: ['FastAPI', 'Poisson', 'Monte Carlo', 'Elo'],
      github: '',
      showcase: true,
      showcaseDescription: 'Probabilistic World Cup forecasting using Poisson regression and Elo ratings, running 10,000+ Monte Carlo simulations per tournament.'
    },
    {
      id: 'ble-console',
      title: 'BLE Console — Native iOS Serial Terminal for Hardware',
      description: 'SwiftUI + CoreBluetooth (Nordic UART Service) terminal with 120 FPS real-time plotting (decimal/hex/binary), 6-slot macro system, CSV/JSON export, SwiftData persistence. Glassmorphic UI designed for hardware engineers debugging ESP32/Arduino/ARM boards.',
      tags: ['SwiftUI', 'CoreBluetooth', 'SwiftData', 'Swift Charts'],
      github: '',
      showcase: true,
      showcaseDescription: 'Native iOS serial terminal with 120 FPS real-time plotting, macro system, and glassmorphic UI for hardware engineers.'
    },
    {
      id: 'openbrew',
      title: 'OpenBrew — Native macOS Homebrew Package Manager',
      description: 'Swift 6 + SwiftUI + SQLite (FTS5) for instant 5000+ package search. Storage analytics with one-tap cleanup. Spotlight integration for direct package launch. Smart recommendations based on installed dev tools. Zero dependencies, strict concurrency.',
      tags: ['Swift 6', 'SwiftUI', 'SQLite/FTS5', 'Spotlight'],
      github: '',
      showcase: true,
      showcaseDescription: 'Native macOS Homebrew manager with instant 5000+ package search, storage analytics, and Spotlight integration.'
    },
    {
      id: 'peekguard',
      title: 'PeekGuard — Shoulder-Surfing Detection',
      description: 'iOS privacy app using Vision framework face detection to detect unauthorized screen viewers. Live camera monitoring, Live Activity lock-screen integration, haptic alerts, session statistics. SwiftUI + CoreVideo + Vision.',
      tags: ['SwiftUI', 'Vision', 'CoreVideo', 'Live Activity'],
      github: '',
      showcase: true,
      showcaseDescription: 'iOS privacy app detecting shoulder surfers with Vision framework face detection and Live Activity integration.'
    }
  ],
  inProgress: [
    {
      id: 'peek',
      title: 'PEEK — Codebase Mental Model Builder',
      description: 'AI-powered platform that analyzes GitHub repos to build interactive architecture graphs (ReactFlow), call trees, dependency maps, and security findings. 30+ language AST parsing via Python + Google Gemini 3 Flash. Natural-language query engine. Backend (FastAPI) functional, frontend (React 19 + Vite) in progress.',
      tags: ['FastAPI', 'React', 'Gemini', 'AST'],
      github: '',
      borderColor: '#475569'
    },
    {
      id: 'ergolearn-coach',
      title: 'ErgoLearn AI Coach — Local LLM Integration',
      description: 'Expanding ErgoLearn with Ollama-powered conversational wellness coach reading live posture_history.json. Dual-tier: local LLM primary, offline rule-based NLP fallback. Interactive skeleton-guided stretch routines planned.',
      tags: ['Ollama', 'Local LLM', 'Rust', 'Tauri'],
      github: '',
      borderColor: '#e02737'
    },
    {
      id: 'mate-rov-2026',
      title: 'MATE ROV 2026 — Underwater Pipeline & Crab Detection',
      description: 'Custom YOLOv8 for invasive European Green Crab detection + pinhole camera geometry for pipe length measurement from monocular footage. Parametric 3D model generation (STL via SolidPython/OpenSCAD). 6-BLDC vectored thruster control. Regional champions, qualified for internationals.',
      tags: ['YOLOv8', 'OpenCV', 'SolidPython', 'BLDC'],
      github: '',
      borderColor: '#3498db'
    },
    {
      id: 'voicetrend',
      title: 'VoiceTrend — Voice-Controlled Trend Dashboard',
      description: 'Real-time voice interface for GitHub/Reddit/Tradestie trending data using faster-whisper STT + Streamlit dashboard. Hype-score normalization across platforms, voice-activated navigation (number mapping), local processing.',
      tags: ['faster-whisper', 'Streamlit', 'STT', 'Voice'],
      github: '',
      borderColor: '#27ae60'
    },
    {
      id: 'chess-bot-v2',
      title: 'Chess Bot v2 — AlphaZero-Style Engine',
      description: 'Self-play RL chess engine with LSTM policy/value heads, 20 residual blocks, 256 channels, MCTS (120 sims). ONNX export for inference. Trained on 512 batch, ~25M params. PyTorch + python-chess + Stockfish integration.',
      tags: ['PyTorch', 'RL', 'MCTS', 'ONNX'],
      github: '',
      borderColor: '#9b59b6'
    },
    {
      id: 'local-ai',
      title: 'Local AI — Offline Visual Accessibility Assistant',
      description: 'iOS app using MLX + LFM-2.5-VL-1.6B-4bit for on-device vision-language tasks. Zero-sight UI (full-screen tap), haptic feedback, AVFoundation TTS, offline speech-to-text follow-ups. Targets A12+ devices, <1.8GB RAM footprint.',
      tags: ['MLX', 'SwiftUI', 'Vision-Language', 'On-Device'],
      github: '',
      borderColor: '#f39c12'
    },
    {
      id: 'classclock',
      title: 'Classclock — Class Countdown Timer',
      description: 'iOS countdown timer for students with live class detection from schedule, lock-screen widgets (WidgetKit), freemium model (StoreKit 2). SwiftUI + UserDefaults, iOS 26.1 target.',
      tags: ['SwiftUI', 'WidgetKit', 'StoreKit 2', 'iOS 26'],
      github: '',
      borderColor: '#8e44ad'
    },
    {
      id: 'fluid-sim',
      title: 'Fluid Simulation — Navier-Stokes Solver',
      description: 'Jos Stam\'s Stable Fluids algorithm in Python/PyGame. Semi-Lagrangian advection, projection method, vorticity confinement, multi-color dye injection. Real-time parameter tuning (viscosity, diffusion). Working prototype, 3D GPU extension planned.',
      tags: ['Python', 'PyGame', 'Navier-Stokes', 'GPU'],
      github: '',
      borderColor: '#1abc9c'
    }
  ]
};

// ============================================================================
// Blog Posts Data (used by Blog Section & Popups)
// ============================================================================
export const blogPostsData = {
  'materov2026': {
    id: 'materov2026',
    title: 'MATE ROV 2026',
    meta: 'Published on June 28, 2026',
    body: `
      <p>Participating in the MATE ROV competition is always an intense challenge, but returning for my second year with my team, The Orcas, gave us a massive head start. Having the experience of the previous year under our belts allowed us to think bigger, design smarter, and push the boundaries of what our underwater robot could do.</p>
      <p>Despite a tight timeline due to a late start, this season became a journey of incredible technical growth, regional triumph, and invaluable lessons on the international stage.</p>

      <h3>The Engineering Evolution: Vector Design and Subsea Electronics</h3>
      <p>We made two massive architectural shifts in our ROV design this year, focusing heavily on mobility and structural integrity.</p>

      <h4>1. Vectored Thruster Configuration</h4>
      <p>Last year, we relied on a standard orthogonal layout. This year, we pivoted to a vectored design using six BLDC (Brushless DC) motors: four dedicated to vectored horizontal movement and two for vertical depth control. This change unlocked unparalleled precision, allowing the bot to strafe, pivot, and maneuver seamlessly in tight underwater spaces.</p>

      <h4>2. Moving Electronics Underwater</h4>
      <p>Our biggest mechanical leap was moving all major electronics, including the Electronic Speed Controllers (ESCs), directly into the underwater chassis. Last year, these components stayed above water, resulting in a thick, heavy tether.</p>
      <ul>
        <li><strong>The Challenge:</strong> Mastering complex waterproofing techniques to protect critical components from high pressure and moisture.</li>
        <li><strong>The Payoff:</strong> We drastically reduced the weight and size of our tether, minimized signal degradation, and significantly improved the bot's overall physical integrity.</li>
      </ul>
      <p>To keep things efficient under our tight deadline, we opted for a robust, basic claw design. We bypassed a complex mechanical claw, steering clear of the time-consuming process of waterproofing a servo motor.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="assets/IMG_2333.png" alt="Team Orcas MATE ROV 2026 Competition" style="max-width: 50%; height: auto; display: block; margin: 1.5rem auto; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">me after winning Nationals in India</p>
      </div>

      <h3>Coding the Depths: Computer Vision and Autonomous 3D Modeling</h3>
      <p>On the team, my primary focus was the software architecture, though I kept my hands dirty in the hardware assembly too. This season pushed my programming skills to an entirely new level.</p>

      <h4>YOLO Image Recognition</h4>
      <p>I trained a YOLO (You Only Look Once) model specifically for real-time image recognition to identify and track crabs underwater. This allowed the ROV to detect and localize targets autonomously in challenging subsea lighting environments.</p>

      <h4>Autonomous Shape and 3D Modeling</h4>
      <p>My proudest achievement was developing a custom Python program from scratch. The software autonomously processes underwater imagery to feed visual data into our model, calculate the exact lengths of unknown object sides using camera lens geometry, and automatically generate a 3D model of the target object.</p>
      <p>Having never built anything like this before, the learning curve was steep and took a lot of trial and error. Seeing it work autonomously with high accuracy was incredibly rewarding.</p>

      <h3>From Regional Champions to International Lessons</h3>
      <p>Our hard work paid off spectacularly at the regional level: Team Orcas placed 1st in the Indian Region! This victory punched our ticket to the International Finals.</p>
      <p>Unfortunately, the international run did not go as smoothly as we hoped. We were hit with a cascade of technical glitches during our official run. But if there is one thing robotics teaches you, it is that hurdles are part of the process.</p>

      <h3>Looking Ahead to 2027</h3>
      <p>I am incredibly proud of what The Orcas accomplished this year. We built a highly sophisticated bot, conquered regional qualifiers, and developed cutting-edge software.</p>
      <p>Next year, our goal is industrial-grade reliability. We want to focus on rigorous stress-testing to build a more resilient, foolproof robot that can handle the unpredictable nature of international competition. We will be back, smarter, faster, and ready for the deep end!</p>
    `
  },
  'hackmars2026': {
    id: 'hackmars2026',
    title: 'Hackmars 3.0 2026',
    meta: 'Published on June 15, 2026',
    body: `
      <p>I am thrilled to announce that we won the <strong>Productivity Track Award</strong> at <strong>Hackmars 2026</strong>! We built <strong>ErgoLearn AI</strong> — a privacy-first, edge-computing biomechanical posture tracker and workspace wellness coach.</p>

      <h3>Inspiration</h3>
      <p>As a student and software developer, I spend upwards of 8 to 10 hours a day glued to my laptop screen, hunched over lines of code and technical text. Over time, I noticed recurring shoulder fatigue, a stiff neck, and a massive drop in my mental focus during long study blocks. When I looked at existing posture tracking apps on the market, I realized they all shared the same major flaws: they were either massive resource hogs that drained laptop batteries, or they required streaming raw webcam feeds to external cloud servers. For a workspace utility, that felt like an unnecessary privacy violation. I wanted to build a solution that treated my camera as a fully localized, private biomechanical sensor—giving me deep workspace wellness insights without sacrificing my data or melting my computer's CPU.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="assets/Hack_mars.pdf.png" alt="Hackmars 2026 Track Winner Certificate" style="max-width: 90%; height: auto; display: block; margin: 1.5rem auto; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
        <a href="assets/Hack_mars.pdf" target="_blank" class="btn btn-outline" style="margin-top: 1rem; display: inline-block;">
          <i class="fas fa-file-pdf"></i> View Certificate PDF
        </a>
      </div>

      <h3>What It Does</h3>
      <p>ErgoLearn AI converts a standard 2D laptop webcam into a real-time, privacy-first, edge-computing biomechanical sensor suite. Operating completely offline, it strips out and deletes raw camera pixel streams to protect user privacy, projecting a minimalist 3D vector wireframe skeleton onto a clean, non-glaring Matte Obsidian grid canvas.</p>
      <p>The application tracks vertical spine compression (Slouching), shoulder plane alignment errors (Lateral Asymmetry), and uses real-time interpupillary distance mapping to calculate the exact distance between the user's face and the monitor in centimeters. These data pipelines feed a highly responsive 10-second rolling Concentration Index sparkline chart. Additionally, the app features an integrated AI Coach panel that acts as an interactive workspace wellness companion, providing contextual posture advice and stretches based on real session logs.</p>

      <h3>How We Built It</h3>
      <p>I architected ErgoLearn AI using a lightweight, decoupled multi-process stack to keep its runtime footprint as tiny as possible.</p>
      <ul>
        <li><strong>The Frontend Interface:</strong> Built using standard HTML5, CSS3, and vanilla JavaScript styled with a flat, sophisticated matte slate and ink aesthetic. I wrapped the interface using Tauri, which compiles directly into the operating system's native web rendering engines (WebKit on macOS / WebView2 on Windows) instead of bundling a heavy browser core like Electron does. This keeps the frontend shell framework under a tiny 20 MB container footprint.</li>
        <li><strong>The AI Sidecar Backend:</strong> A local background Python process managed natively by Tauri that ingests local hardware camera frames and passes them through an optimized MediaPipe skeletal pipeline.</li>
        <li><strong>The IPC Bridge:</strong> The frontend interface and Python backend communicate locally via a high-speed, secure loopback WebSocket connection (<code>ws://localhost:8765</code>) running at up to 30 frames per second.</li>
      </ul>
      <p>Every frame is processed using localized vector geometry to create anatomical invariants, meaning the math scales automatically even if the user moves around. For example, vertical spine collapse is checked by calculating a normalized Slouch Fraction:</p>

      <div style="text-align: center; margin: 1.5rem 0; font-size: 1.15rem; color: var(--primary-color);">
        <strong>Slouch Fraction</strong> =
        <div style="display: inline-block; vertical-align: middle; text-align: center; margin-left: 8px;">
          <span style="border-bottom: 1px solid var(--primary-color); display: block; padding-bottom: 2px;">Neck Ratio<sub>current</sub></span>
          <span style="display: block; padding-top: 2px;">Neck Ratio<sub>calibrated</sub></span>
        </div>
      </div>

      <p>By dividing the vertical distance between the ear and shoulder midpoints by the overall 3D shoulder width (w<sub>shoulder</sub>), the equation ensures that sitting slightly closer or further away from the lens never breaks the calculation accuracy.</p>

      <h3>Challenges We Ran Into</h3>
      <p>Building a multi-language app that spans JavaScript, Rust, and Python brought up some real engineering hurdles:</p>
      <ul>
        <li><strong>The Tab-Throttling Lag:</strong> Early on, when I switched away from the app to type code in another window, the OS would automatically throttle the background frontend JavaScript animation loops. The WebSocket packets from the Python backend would back up in the network buffer. Switching back to the app triggered a crazy, fast-forward "replay" lag. I solved this by stamping millisecond UTC timestamps on the backend data packets, forcing the frontend to immediately drop any frame older than 200ms upon waking up.</li>
        <li><strong>Notification Fatigue:</strong> Posture apps can get incredibly annoying if they trigger alerts too quickly. If a developer leans forward for a single second to analyze a complex line of code, they don't want a loud alarm. I had to design a custom Hysteresis state machine with a 30-second continuous failure buffer and a strict 60-second cooldown timer so the app remains a silent, helpful companion rather than a constant desktop distraction.</li>
        <li><strong>Hardware Constraints:</strong> I initially intended to track eye blinking using Eye Aspect Ratio (EAR) maps to prevent dry eyes, but real-world testing proved that standard laptop webcams at normal screen distances (50–70 cm) are simply too low-resolution for reliable blink data. Rather than shipping a glitchy feature, I made the engineering call to strip out the blink code entirely and focus heavily on rock-solid 3D skeletal posture layout tracking.</li>
      </ul>

      <h3>Accomplishments That We're Proud Of</h3>
      <p>I am incredibly proud of creating a cross-platform machine learning app that values user privacy above everything else. Successfully implementing the pinhole camera approximation formula using the pixel delta between landmarks 468 and 473 (the center of human irises) allowed us to calculate absolute screen proximity in centimeters without forcing the user to own expensive depth cameras or LiDAR hardware. Additionally, re-engineering our Concentration Index from a sluggish 60-second moving average down to a responsive 10-second window means the data visualization reacts to sudden fatigue drops smoothly and dynamically in under two seconds.</p>

      <h3>What We Learned</h3>
      <p>This project completely shifted how I approach systems architecture. It taught me that building software with AI components doesn't mean you have to plug everything into expensive, cloud-hosted API endpoints that compromise user data. By leveraging highly optimized edge frameworks, local WebSockets, and on-device logic routines, you can build incredibly robust, low-latency, and highly secure software that runs completely on your own machine.</p>

      <h3>What's Next for Ergolearn</h3>
      <p>The immediate next step for ErgoLearn AI is expanding our conversational ecosystem. Our current AI Coach features a dual-tiered architecture that targets a local Ollama instance (running an optimized, quantized LLM model) or falls back to an offline rule-based NLP parser that reads the local posture_history.json logs when Ollama is closed. I want to build out custom, interactive desktop stretch routines where the neon 3D skeleton actively guides the user through shoulder rolls and cervical stretches, updating the UI in real-time as they complete each physical movement correctly.</p>
    `
  },
  'norcalhacks2026': {
    id: 'norcalhacks2026',
    title: 'NorCal Hacks 2026',
    meta: 'Published on May 10, 2026',
    body: `
      <p>I am thrilled to share that our team won the <strong>Productivity Track</strong> at <strong>NorCal Hacks 2026</strong>! Competing against talented student developers from all over, we designed and built <strong>Verde</strong> — a hyper-local community hub designed to facilitate sustainable interactions and optimize resource reuse.</p>

      <h3>Inspiration</h3>
      <p>I witnessed a constant cycle of waste within my school community: seniors discarding expensive textbooks, students outgrowing uniforms, and a Lost & Found bin that resembled a graveyard of forgotten belongings. The true spark, however, was the overwhelming volume of emails I received daily from students desperate to find lost valuables.</p>
      <p>I realized that TISB didn't just need a marketplace; it needed a bridge. Inspired by the Human Interaction theme, I set out to create Verde — a platform that transforms recycling into a social, peer-to-peer connection that benefits both students' wallets and the planet.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="assets/Norcal_hacks.pdf.png" alt="NorCal Hacks 2026 Track Winner Certificate" style="max-width: 90%; height: auto; display: block; margin: 1.5rem auto; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
        <a href="assets/Norcal_hacks.pdf" target="_blank" class="btn btn-outline" style="margin-top: 1rem; display: inline-block;">
          <i class="fas fa-file-pdf"></i> View Certificate PDF
        </a>
      </div>

      <h3>What It Does</h3>
      <p>Verde is a hyper-local community hub designed to facilitate sustainable interactions:</p>
      <ul>
        <li><strong>Marketplace:</strong> A gated platform to donate, swap, or "buy" (for free) school essentials like textbooks, uniforms, and electronics.</li>
        <li><strong>Lost & Found:</strong> A dedicated module to report and reclaim missing items, fostering a campus culture of honesty and helpfulness.</li>
        <li><strong>Live Impact Tracking:</strong> A real-time dashboard visualizing the community's collective environmental contribution, including CO₂ saved, items recycled, and trees preserved.</li>
        <li><strong>Secure Chat:</strong> An integrated system for peers to coordinate safe, on-campus hand-offs in verified locations like the library or school fields.</li>
      </ul>

      <h3>How I Built It</h3>
      <p>I developed Verde using the Flutter framework to ensure a high-performance, cross-platform experience. For the infrastructure, I utilized Supabase to handle user authentication, image storage, and real-time database updates.</p>
      <p>To give the app a premium feel, I designed a custom brand identity from scratch, implementing Adaptive Icons and a native splash screen to ensure Verde feels like a fully integrated part of a student's mobile device.</p>

      <h3>Challenges I Ran Into</h3>
      <p>As a solo developer, I faced a steep learning curve with Supabase. Configuring the database and mastering Row-Level Security (RLS) policies was a significant hurdle in ensuring user data remained private and secure.</p>
      <p>On the frontend, creating a seamless, lag-free search and filter system was challenging. I had to optimize the UI to update instantly as users typed while simultaneously sorting across multiple categories.</p>
      <p>I also grappled with the nuances of Android's Adaptive Icons, learning through trial and error how to design within safe zones to prevent branding from being cut off.</p>

      <h3>Accomplishments I'm Proud Of</h3>
      <ul>
        <li>The Live Impact Counter, which translates a simple textbook swap into approximately 10 kg of CO₂ saved, transforming the app from a utility into a mission-driven movement.</li>
        <li>Successfully executing a project of this scope—encompassing a marketplace, chat system, and impact tracking—within a limited hackathon timeframe.</li>
        <li>Maintaining a clean, minimalist UI/UX throughout the app.</li>
        <li>Implementing automated spam and scam detection, including monthly post rate limits per user.</li>
        <li>Creating a reporting mechanism that allows users to flag false information or misuse.</li>
        <li>Building misuse detection that blocks inappropriate listings (e.g., gift cards, vapes, or other prohibited items) before they are published.</li>
      </ul>

      <h3>What I Learned</h3>
      <p>This project taught me that Human Interaction is the most powerful driver of sustainability. Technology is simply the facilitator; the real value is created when two students meet on campus to return a lost item or pass down a resource.</p>
      <p>On the technical side, I significantly deepened my understanding of relational databases, security policies, and native mobile configurations.</p>

      <h3>What's Next for Verde</h3>
      <p>Planned future improvements include:</p>
      <ul>
        <li>GPS-verified Safe Swap Zones to enhance campus security.</li>
        <li>A Sustainability Leaderboard to gamify eco-friendly behavior.</li>
        <li>A Wall of Thanks to encourage peer appreciation.</li>
      </ul>
      <p>To prepare for a real-world launch at TISB or within local housing societies, these features will help ensure Verde remains a trusted and secure platform for all users.</p>
    `
  },
  'amo2026': {
    id: 'amo2026',
    title: 'Securing Bronze at the American Math Olympiad',
    meta: 'Published on March 23, 2026',
    body: `
      <p>The American Mathematics Olympiad (AMO) is an international competition for students from grades 2–12, organized by SIMCC and SIU. It's based on US Common Core Standards and covers topics like algebra, geometry, number theory, and combinatorics. Basically, it's not your average school math—it really pushes how you think. Signing up for AMO this year honestly felt like jumping straight into the deep end.</p>
      <p>For around two to three months before the test, I spent a lot of my free time grinding through textbooks and past papers. But over time, things slowly started to click. Patterns made more sense, and I got better at approaching problems. It was tough, but I just treated every mistake as part of the process and kept going.</p>
      <img src="assets/amo_26.JPG" alt="AMO Bronze Certificate" style="max-width: 90%; height: auto; display: block; margin: 1.5rem auto; border-radius: 10px;">
      <p>Going into the exam, I didn't really know what to expect, especially since it's such a competitive exam globally. The questions were tricky in a different way—they needed multiple steps and a lot of logical thinking. In the end, I was honestly really happy (and kinda relieved) to find out I got a Bronze medal. For me, it wasn't just about the result, but more about all the effort that went into it—the long hours, the frustration, and finally seeing it pay off. It definitely made me appreciate math a lot more and showed me how important persistence really is.</p>
    `
  },
  'techkriti26': {
    id: 'techkriti26',
    title: 'Returning to IIT Kanpur: Techkriti \'26',
    meta: 'Published on April 3, 2026',
    body: `
      <p>Following our initial participation in 2025, our team returned to IIT Kanpur this year to compete in Techkriti '26. Our objective for this season was to build upon our foundational knowledge by entering three distinct and technically demanding categories: <strong>IARC, Maneuver, and Hovermania</strong>. We are pleased to report podium finishes in two of these events, reflecting a significant year-over-year improvement in our engineering and programming capabilities.</p>

      <img src="assets/techkriti_2025.png" alt="Techkriti 26">

      <h3>Competition Breakdown & Technical Milestones</h3>

      <h4>1. IARC (International Autonomous Robotics Challenge)</h4>
      <p>In the IARC category, our primary focus was the optimization of autonomous navigation.</p>
      <ul>
        <li><strong>Technical Implementation:</strong> I led the development of the Computer Vision (CV) stack, specifically focusing on enhancing node detection algorithms.</li>
        <li><strong>Outcome:</strong> This refinement allowed for more precise line-following and decision-making during complex maneuvers.</li>
        <li><strong>Result:</strong> 3rd Place</li>
      </ul>

      <h4>2. Maneuver</h4>
      <p>The Maneuver competition required a high-torque, responsive chassis capable of navigating a rigorous obstacle course.</p>
      <ul>
        <li><strong>Technical Implementation:</strong> By focusing on mechanical durability and driver precision, we maintained a competitive pace throughout the heats.</li>
        <li><strong>Result:</strong> 2nd Place</li>
      </ul>

      <h4>3. Hovermania</h4>
      <p>This year marked our debut in Hovermania, a competition centered on hovercraft design and aerodynamics.</p>
      <ul>
        <li><strong>Technical Implementation:</strong> The project required a pivot toward lightweight structural engineering and the integration of drone-grade components. We gained extensive experience in thrust-to-weight ratios, ESC (Electronic Speed Controller) calibration, and the unique handling characteristics of amphibious vehicles.</li>
        <li><strong>Outcome:</strong> While we did not secure a podium finish in this inaugural attempt, the technical insights gained regarding brushless motor synchronization and weight distribution were invaluable. We couldn't finish the hovermania competition because one of our ESCs got burned during the final run. It was an unfortunate moment but hardware errors are a part of the learning process and can occur often in robotics.</li>
        <li><strong>Result:</strong> None</li>
      </ul>

      <h3>Conclusion and Future Outlook</h3>
      <p>Overall, Techkriti '26 was a pivotal experience for our team. Comparing our performance to the previous year, we have demonstrated a clear trajectory of growth in both hardware integration and software development. While our results in IARC and Maneuver are a source of pride, the challenges faced in Hovermania have provided a clear roadmap for our technical objectives in the coming year.</p>
      <p>We look forward to iterating on these designs and returning to the competition circuit with even more refined solutions.</p>
    `
  },
  'odyssey': {
    id: 'odyssey',
    title: 'Leading Through Challenges: My Odyssey of the Mind Experience',
    meta: 'Published on March 15, 2025',
    body: `
      <p>Odyssey of the Mind helps students unlock their creativity and become confident problem-solvers. Faced with challenges that demand original solutions, students learn to think outside the box without fear. The creative thinking and self-belief they develop in OM stays with them for life, empowering them in every area they pursue.</p>
      <p>Led the team to State Finals, managing tasks and boosting morale. Narrowly missed qualifying for the World Finals.</p>
      <a href="https://odysseyofthemind.com/">Official website of Odyssey of the Mind</a>
      <br>
      <img src="https://via.placeholder.com/800x400" alt="Odyssey Team Photo">
      <p>I was responsible for organizing tasks, ensuring timely submissions, and keeping the team spirit alive.</p>
    `
  },
  'materov': {
    id: 'materov',
    title: 'MATE ROV Competition',
    meta: 'Published on June 23, 2025',
    body: `
      <p>Secured first place at the MateROV regional competition as part of a 10-member team. Together, we engineered an underwater ROV capable of executing complex underwater missions. We later qualified for the international finals held in Alpena, Michigan, USA, where we proudly placed 35th globally — a strong showing for our first time at the event.</p>
      <img src="assets/Science_Fair_Trophy.png" alt="Science Fair Winning Model">
      <p>This competition marked my first experience in underwater robotics, providing valuable exposure and learning opportunities.</p>
    `
  },
  'techkriti': {
    id: 'techkriti',
    title: 'Techkriti Techfest Experience',
    meta: 'Published on March 30, 2025',
    body: `
      <p>My team and I participated in three competitions at IIT Kanpur's annual techfest. We earned 2nd place in IARC, placed 10th in our category in Robowars, and secured 12th place in Manouver. The experience was both enriching and inspiring, as I had the opportunity to connect with like-minded peers from across the country who share a passion for robotics. It also greatly expanded my understanding of the diverse capabilities of robots—from aerial navigation to combat and high-speed maneuvering.</p>

      <img src="assets/techkriti_2025.png" alt="Techkriti Competition Certificate" style="max-width: 90%; height: auto; display: block; margin: auto; border-radius: 10px;">
      <img src="assets/techkriti_2025_screenshot.png" alt="Techkriti Competition Certificate" style="max-width: 90%; height: auto; display: block; margin: auto; border-radius: 10px;">
      <br>
      <p>This event was a fantastic platform for learning and growth, and I look forward to participating in more such competitions in the future.</p>
    `
  },
  'tisbhacks': {
    id: 'tisbhacks',
    title: 'TISB Hacks',
    meta: 'Published on January 26, 2025',
    body: `
      <p>TISB Hacks – Senior Coding is a competitive coding challenge for school students that tests algorithmic thinking, problem-solving, and programming skills under time pressure. It's designed for experienced coders ready to flex their skills in a fast-paced environment.</p>
      <p>My friend and I developed an app that tracks meteors, allowing users to view detailed information and locations of meteor sightings. I was responsible for the front-end and overall app development, while my teammate handled the backend, which scraped a government database for relevant meteor data. Despite the tight deadline of the hackathon, I successfully built a user-friendly interface that effectively presented the extracted data in a clear and accessible format.</p>
      <a href="https://github.com/BMWareSPEEDY/meteor-Tracking-app-by-Ayansh-Paliwal-and-Sidharth-Banglani">This is the github project link for the app</a>
      <br>
      <a href="https://tisbhacks.tisb.org/">This is the website for the competition</a>
      <br>
      <img src="assets/tisb_Hacks_2025.png" alt="TISB Hacks Competition Certificate" style="transform: rotate(90deg); max-width: 100%; height: auto;">
      <p>This event was a fun experience that helped to learn and challenge myself</p>
    `
  },
  'sciencefair': {
    id: 'sciencefair',
    title: 'Science Fair Victory',
    meta: 'Published on March 21, 2025',
    body: `
      <p>After two months of hard work, my team of five and I won first place in the Science Fair under the Still Model category. As the team leader, I was responsible for designing the model. I used Blender, a 3D modeling software, and with some help from the internet for reference images, I created a model that turned out almost perfectly. I also helped prepare the presentation and conducted research on key information about enzymes. This helped me expand my biology and chemistry knowledge beyond the syllabus. It was a unique experience, and I felt incredibly proud and happy when we won.</p>

      <img src="assets/Science_Fair_Trophy.png" alt="Science Fair Winning Model">

      <p>This experience reinforced how dividing tasks and leveraging everyone's strengths leads to the best possible outcome.</p>
    `
  },
  'tisbhacks2026': {
    id: 'tisbhacks2026',
    title: 'TISB Hacks 2026 Experience: Building Verde',
    meta: 'Published on February 14, 2026',
    body: `
      <p>As a student at TISB, I noticed a common problem: there wasn't a streamlined way for us to exchange textbooks, uniforms, or electronics within our own community. To solve this, I built <strong>Verde</strong>, a Flutter-based mobile marketplace designed specifically for student life. The goal was simple: create an app where students can list items they no longer need, earn "Eco-Points" for sustainable practices, and chat with buyers—all while staying within a safe, school-verified environment.</p>

      <div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-wrap: wrap; justify-content: center;">
        <img src="assets/tisbhacks1_page-0001.jpg" alt="EcoSwap UI 1" style="max-width: 45%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
        <img src="assets/tisbhacks1_page-0002.jpg" alt="EcoSwap UI 2" style="max-width: 45%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      </div>

      <h3>What I Built</h3>
      <p>The core of the app uses <strong>Flutter</strong> for a smooth, cross-platform UI and <strong>Supabase</strong> as the backend for real-time data and authentication. However, as the user base grows, so do the risks of spam and scams. To address this, I implemented a dedicated <strong>Security & Integrity Layer</strong>:</p>

      <ul>
        <li><strong>Anti-Spam Logic:</strong> I wrote custom PostgreSQL triggers that enforce a strict monthly limit of 5 listings per user. This ensures the feed stays high-quality and prevents bot-like behavior.</li>
        <li><strong>Keyword Filtering:</strong> To maintain school compliance, I built a server-side "Spam Detector" that automatically flags and rejects listings containing prohibited keywords or suspicious "scammy" phrases.</li>
        <li><strong>Student Accountability:</strong> I added a peer-to-peer reporting system. If a student encounters a "bad actor," they can flag the user directly from the item details. This lowers the user's "Trust Score" in the database and alerts moderators.</li>
      </ul>

      <h3>Key Technical Takeaways</h3>
      <ul>
        <li><strong>Database-First Security:</strong> I learned that the best place to enforce rules is the database, not the app. By using PostgreSQL Functions, I ensured that my security rules are "unhackable" from the frontend.</li>
        <li><strong>Asynchronous UX:</strong> Managing real-time chats and image uploads required a deep dive into Flutter's Future and Stream builders to keep the app responsive.</li>
        <li><strong>The "Cold Boot" Challenge:</strong> I spent quite a bit of time debugging networking issues with the Android Emulator! I learned how to manage DNS settings and "Cold Boot" devices to ensure consistent connectivity.</li>
      </ul>

      <hr style="margin: 2rem 0; opacity: 0.1;">

      <p>This event was a fun experience that helped to learn and challenge myself. You can find the source code and a demo of the app below:</p>

      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;">
        <a href="https://github.com/BMWareSPEEDY/TISB-Swap.git" target="_blank" class="btn" style="display: inline-block; width: fit-content; margin: 0; padding: 0.8rem 1.5rem; background: #333; color: white;">
          <i class="fab fa-github"></i> View on GitHub
        </a>
        <a href="https://vimeo.com/1155712588?share=copy&fl=sv&fe=ci" target="_blank" class="btn" style="display: inline-block; width: fit-content; margin: 0; padding: 0.8rem 1.5rem; background: #0088cc; color: white;">
          <i class="fas fa-play"></i> Watch Demo Video
        </a>
      </div>
    `
  }
};

// ============================================================================
// Achievements Data (used by Achievements Section)
// ============================================================================
export const achievementsData = {
  robotics: [
    {
      id: 'materov2026',
      title: 'MATE ROV 2026 - Regional Champions',
      date: 'June 2026',
      description: 'Placed 1st in the Indian Region with Team Orcas. Oversaw software systems, implementing custom YOLO vision recognition and autonomous 3D shape reconstruction pipelines.',
      blogId: 'materov2026'
    },
    {
      id: 'techkriti26',
      title: "Techkriti '26 - IIT Kanpur",
      date: 'April 3, 2026',
      description: 'Achieved podium finishes: 2nd Place in Maneuver and 3rd Place in IARC (International Autonomous Robotics Challenge). Led the development of the CV stack for autonomous node detection.',
      blogId: 'techkriti26'
    },
    {
      id: 'materov',
      title: 'MateROV Competition',
      date: 'May 17–18, 2025',
      description: 'Responsible for autonomous vision-tracking algorithms. Qualified for International Finals in Alpena, Michigan, placing 28th globally and securing a top regional finish.',
      blogId: 'materov'
    },
    {
      id: 'techkriti',
      title: "Techkriti '25 - IIT Kanpur",
      date: 'March 28, 2025',
      description: 'Engineered complex robotic systems for IARC, Robowars, and Manoeuvre. Secured a podium finish by implementing critical Computer Vision navigation logic.',
      blogId: 'techkriti'
    }
  ],
  software: [
    {
      id: 'hackmars2026',
      title: 'Hackmars 2026 - Track Winner',
      date: 'June 15, 2026',
      description: 'Won the Productivity Track Award at Hackmars 2026. Architected ErgoLearn AI, a localized 3D biomechanical sensor and workspace coach utilizing Tauri and MediaPipe.',
      blogId: 'hackmars2026'
    },
    {
      id: 'norcalhacks2026',
      title: 'NorCal Hacks 2026 - Track Winner',
      date: 'May 10, 2026',
      description: 'Won the Productivity Track at NorCal Hacks 2026. Designed and built a workspace utility optimized for student workflow management and cognitive ease.',
      blogId: 'norcalhacks2026'
    },
    {
      id: 'perse',
      title: 'Perse Coding Challenge',
      date: '2026',
      description: 'Competed in the Perse Coding Challenge, solving complex algorithmic problems and coding challenges under timed conditions.',
      pdfUrl: 'assets/Perse_coding_certificate.pdf'
    },
    {
      id: 'tisbhacks2026',
      title: 'TISB Hacks 2026 - Building Verde',
      date: 'February 14, 2026',
      description: 'Developed Verde, a Flutter-based mobile marketplace. Implemented advanced security and integrity layers using PostgreSQL triggers and server-side filtering.',
      blogId: 'tisbhacks2026'
    },
    {
      id: 'tisbhacks',
      title: 'TISB Hacks 2025 - Meteor Tracking',
      date: 'January 26, 2025',
      description: 'Created an app that scrapes government databases for real-time meteor sighting data. Led the front-end development and UI/UX design under competition pressure.',
      blogId: 'tisbhacks'
    }
  ],
  science: [
    {
      id: 'sciencefair',
      title: 'Science Fair Victory',
      date: 'March 21, 2025',
      description: 'Won 1st Place with a detailed Cas-9 enzyme model. Led the 3D modeling in Blender and extensively researched CRISPR-Cas9 structural biology.',
      blogId: 'sciencefair'
    },
    {
      id: 'odyssey',
      title: 'Odyssey of the Mind – State Finals',
      date: '2022–23',
      description: 'Led the team to State Finals through creative problem-solving and task management, narrowly missing the World Finals qualification.',
      blogId: 'odyssey'
    }
  ],
  academic: [
    {
      id: 'amo2026',
      title: 'American Math Olympiad (AMO)',
      date: 'March 23, 2026',
      description: 'Secured a Bronze Medal in this global competition, demonstrating advanced proficiency in algebra, geometry, and logical problem-solving.',
      blogId: 'amo2026'
    },
    {
      id: 'abacus',
      title: 'Abacus Mastery',
      date: 'Ages 7–11',
      description: 'Completed all 10 levels of abacus training, mastering complex mental calculations and advanced pattern recognition techniques.'
    }
  ],
  sports: [
    {
      id: 'karate',
      title: 'State-Level Karate Tournament',
      date: 'October 2023',
      description: 'Secured 2nd place in both Sparring and Form categories, representing years of dedicated training and discipline.'
    },
    {
      id: 'multisport',
      title: 'Multi-Sport Awards',
      date: 'Since Age 7',
      description: 'Won multiple awards at zonal and state levels in roller skating, swimming, and competitive school sports.'
    }
  ]
};

// ============================================================================
// Helper Functions
// ============================================================================
export function getProjectById(id) {
  return [...projectsData.completed, ...projectsData.inProgress].find(p => p.id === id);
}

export function getBlogPostById(id) {
  return blogPostsData[id];
}

export function getShowcaseProjects() {
  return projectsData.completed.filter(p => p.showcase);
}

export function getAchievementsByCategory(category) {
  return achievementsData[category] || [];
}