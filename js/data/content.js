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
      id: 'urbanflow',
      title: 'UrbanFLOW — Physics-Guided GNN Urban Flood Early-Warning',
      status: 'Research',
      statusClass: 'research',
      description: 'A physics-guided graph neural network that acts as a surrogate for the SWMM flood solver. It predicts street-level inundation depth and hazard across Bengaluru catchments in milliseconds, roughly 1,000 to 8,000 times faster than numerical simulation, and powers a live emergency-dispatch dashboard. The HydroGINE model fuses 32 scale-invariant physics features, gravity-gated message passing, and a dual-head hazard-classifier plus depth-regressor trained on real storm simulations. Ships with trained checkpoints, OSM-built city graphs, DEM data, a Flask inference API, a Streamlit explorer, and a written research paper.',
      tags: ['PyTorch', 'PyTorch Geometric', 'GNN', 'OSMnx', 'GeoPandas', 'Flask', 'Streamlit'],
      github: 'https://github.com/BMWareSPEEDY/UrbanFlow_code_priv',
      showcase: true,
      showcaseDescription: 'Research-grade graph neural network that predicts urban flood depth and hazard in milliseconds, validated against SWMM simulations with a live dispatch dashboard.'
    },
    {
      id: 'semsearch',
      title: 'SemSearch — Local-First Semantic Code Search Engine',
      status: 'Shipped',
      statusClass: 'shipped',
      description: 'A local-first semantic code search engine written in Go. Point it at any repository and query it in plain English to find the exact code you need, with no cloud service and no API key. It builds an AST-aware index using tree-sitter, generates both code and natural-language description embeddings with a local ONNX model, and ranks results with hybrid BM25 plus cosine reranking. Benchmarked at 90 percent top-5 accuracy across 173 queries on five real open-source repositories, with a snapshot command-line interface and a local HTTP API.',
      tags: ['Go', 'tree-sitter', 'ONNX Runtime', 'Embeddings', 'CLI'],
      github: 'https://github.com/BMWareSPEEDY/semsearch',
      showcase: true,
      showcaseDescription: 'A fully local semantic code search engine in Go, using AST chunking and dual code/description embeddings, benchmarked at 90% top-5 accuracy.'
    },
    {
      id: 'wro26',
      title: 'WRO26 — Autonomous Competition Robot (Team Yo_Error_404)',
      status: 'Competition Build',
      statusClass: 'competition',
      description: 'An autonomous competition car built for the World Robot Olympiad Future Engineers 2026 category. A Raspberry Pi 5 acts as the vision and decision master, using a wide camera, OpenCV, and a custom-trained YOLOv11 model to classify pillars and navigate the course, while an ESP32-C3 handles real-time ToF distance sensing (VL53L0X via TCA9548A), BNO055 IMU, motor control, and PD control for centering/alignment. Finished 7th in Asia at the Asia-Pacific Open Championship.',
      tags: ['Raspberry Pi', 'ESP32', 'OpenCV', 'YOLOv11', 'Arduino/C++', 'KiCad', 'CAD'],
      github: 'https://github.com/BMWareSPEEDY/WRO_yo_error_404',
      showcase: true,
      showcaseDescription: 'A full autonomous competition robot: Pi 5 vision, ESP32-C3 real-time control, YOLOv11 pillar detection, 7th in Asia at Asia-Pacific Open Championship.'
    },
    {
      id: 'peek',
      title: 'PEEK — Codebase Mental Model Builder',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'An AI platform that builds a navigable mental model of any codebase. Give it a GitHub URL and it clones the repo, parses it across 30-plus languages, and produces file-level explanations, an interactive architecture graph, call graphs, dependency trees, security findings, and code smells. A natural-language query engine lets you ask questions about the code and receive grounded answers. Backend parsing and analysis are complete and working, and the frontend is a polished React application with a ReactFlow architecture canvas.',
      tags: ['FastAPI', 'React 19', 'Gemini', 'tree-sitter', 'ReactFlow'],
      github: 'https://github.com/BMWareSPEEDY/git_repository_analysis_tool',
      showcase: true,
      showcaseDescription: 'An AI platform that turns any GitHub repo into an interactive mental model with architecture graphs, security findings, and natural-language Q&A.'
    },
    {
      id: 'ergolearn-ai',
      title: 'ErgoLearn AI — Privacy-First Biomechanical Posture Coach',
      status: 'Hackathon Winner',
      statusClass: 'hackathon',
      description: 'A privacy-first, fully offline biomechanical posture coach that turns a standard webcam into a 3D skeletal sensor. It detects slouching, shoulder asymmetry, and screen distance in centimeters using interpupillary mapping, then feeds a responsive 10-second Concentration Index and a local LLM wellness coach. Raw pixels never leave the device. Built as a Tauri (Rust) shell with a Python MediaPipe sidecar communicating over a loopback WebSocket. Won the Productivity Track Award at Hackmars 2026.',
      tags: ['Tauri/Rust', 'Python', 'MediaPipe', 'WebSockets', 'Ollama'],
      github: 'https://github.com/BMWareSPEEDY/Ergolearn-AI',
      showcase: true,
      showcaseDescription: 'Developed a privacy-first, offline workspace posture tracker using Tauri and MediaPipe, winning the Productivity Track Award at Hackmars 2026.'
    },
    {
      id: 'meshcraft-ai',
      title: 'MeshCraft AI — AI Mesh-to-Code Parametric 3D Editor',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'An AI parametric 3D customizer that reverse-engineers dead STL or OBJ meshes into editable code. Upload a model and Gemini Vision reconstructs it as modular Manifold-3D JavaScript with semantic parameter sliders, then you refine it by prompt, for example to widen a feature by a few millimeters. Edits run as real-time WebAssembly constructive solid geometry inside a web worker, and exports are watertight STL. A split-screen Three.js viewport drives the full workspace.',
      tags: ['Next.js 15', 'React 19', 'Three.js', 'WASM', 'Gemini', 'TypeScript'],
      github: '',
      showcase: true,
      showcaseDescription: 'An AI editor that reverse-engineers 3D meshes into parametric code with semantic sliders and real-time WebAssembly solid modeling.'
    },
    {
      id: 'worldcup-predictor',
      title: 'World Cup Predictor — Monte Carlo Tournament Simulator',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'A probabilistic football forecasting engine that predicts match outcomes and tournament paths. It blends Elo ratings, a weighted Negative Binomial Poisson goal model, Dixon-Coles low-score correction, and 10,000-run Monte Carlo simulation, then layers in live context such as squad news, injuries, weather, altitude, and bookmaker odds. A FastAPI backend serves a static JavaScript dashboard, and the model suite includes a full test suite.',
      tags: ['FastAPI', 'statsmodels', 'Poisson', 'Monte Carlo', 'Elo'],
      github: '',
      showcase: true,
      showcaseDescription: 'Probabilistic World Cup forecasting using Poisson regression, Elo ratings, and 10,000-plus Monte Carlo simulations per tournament.'
    },
    {
      id: 'fluid-sim',
      title: 'Fluid Simulation — Navier-Stokes Solver & GPU CFD Wind Tunnel',
      status: 'Working Prototype',
      statusClass: 'prototype',
      description: 'Two self-contained fluid systems in one project. The first is an interactive 2D implementation of Jos Stam stable fluids with semi-Lagrangian advection, vorticity confinement, and multi-color dye. The second is a GPU-accelerated 3D CFD wind tunnel built with Taichi that voxelizes imported OBJ or STL meshes, solves the pressure field with Red-Black Gauss-Seidel, renders 80,000 tracer particles and streamlines, and estimates drag and lift.',
      tags: ['Python', 'Taichi', 'NumPy', 'Computational Physics', 'GPU'],
      github: '',
      showcase: true,
      showcaseDescription: 'A Navier-Stokes fluid solver plus a GPU-accelerated 3D CFD wind tunnel with mesh voxelization and aerodynamic force estimation.'
    },
    {
      id: 'tisb-swap',
      title: 'TISB Swap (Verde) — Sustainable Student Marketplace',
      status: 'Hackathon Winner',
      statusClass: 'hackathon',
      description: 'A sustainable student marketplace that lets a school community donate, swap, and resell textbooks, uniforms, and electronics. It has email-gated authentication, real-time chat, a Lost and Found hub, peer reporting with trust scores, and live CO2 and water impact tracking. The security layer enforces database-level anti-spam through PostgreSQL triggers, keyword filtering, and rate limits. Built with Flutter and Supabase, it won the Productivity Track at both TISB Hacks 2026 and NorCal Hacks 2026.',
      tags: ['Flutter/Dart', 'Supabase', 'PostgreSQL', 'RLS'],
      github: 'https://github.com/BMWareSPEEDY/TISB_Swap',
      showcase: true,
      showcaseDescription: 'Built a Flutter and Supabase marketplace for students with PostgreSQL security, anti-spam limits, and live CO2 impact tracking. Won TISB Hacks 2026.'
    },
    {
      id: 'ble-console',
      title: 'BLE Console — Native iOS Serial Terminal for Hardware',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'A native iOS serial terminal for hardware engineers. It discovers Nordic UART BLE peripherals such as ESP32 and Arduino boards, streams timestamped text or hex console output, and plots incoming numeric telemetry at up to 120 FPS across decimal, hex, and binary formats. Features six configurable macro slots with looping, CSV and JSON export, SwiftData persistence, and a glassmorphic interface designed for bench debugging.',
      tags: ['SwiftUI', 'CoreBluetooth', 'SwiftData', 'Swift Charts'],
      github: '',
      showcase: true,
      showcaseDescription: 'Native iOS serial terminal with 120 FPS real-time plotting, macro system, and glassmorphic UI for hardware engineers.'
    },
    {
      id: 'openbrew',
      title: 'OpenBrew — Native macOS Homebrew Package Manager',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'A native macOS graphical front-end for Homebrew. It browses and searches more than 5,000 packages with instant SQLite-backed search, installs, uninstalls, and updates packages through a throttled process runner, and adds storage analytics, smart recommendations, Spotlight integration, and native notifications. Written in Swift 6 with strict concurrency, it has zero external dependencies and includes unit tests.',
      tags: ['Swift 6', 'SwiftUI', 'SQLite', 'macOS'],
      github: '',
      showcase: true,
      showcaseDescription: 'Native macOS Homebrew manager with instant 5,000-plus package search, storage analytics, and Spotlight integration.'
    },
    {
      id: 'peekguard',
      title: 'PeekGuard — Shoulder-Surfing Detection (iOS)',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'An iOS privacy app that detects shoulder surfers. Using the front camera and the Vision framework, it identifies when an unexpected face enters the user zone, then instantly blurs the screen and fires a haptic and Live Activity alert. Everything runs fully on-device with no network calls and no stored frames. Includes onboarding, sensitivity settings, and a WidgetKit extension.',
      tags: ['SwiftUI', 'Vision', 'AVFoundation', 'WidgetKit'],
      github: '',
      showcase: true,
      showcaseDescription: 'iOS privacy app detecting shoulder surfers with Vision framework face detection and Live Activity integration.'
    },
    {
      id: 'peekguard-mac',
      title: 'PeekGuard for macOS — Menu-Bar Privacy Guard',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'The macOS companion to PeekGuard, built as a menu-bar utility. It watches the webcam in the background and blurs all connected displays the moment an unexpected face appears, even above full-screen apps, using one borderless panel per screen. It adds launch-at-login, wake-based auto-guard, a sensitivity control, and a browsing history log.',
      tags: ['SwiftUI', 'AppKit', 'Vision', 'macOS'],
      github: '',
      showcase: false
    },
    {
      id: 'materov-toolkit',
      title: 'MATE ROV Toolkit — Measurement, CAD & Crab Detection',
      status: 'Competition Build',
      statusClass: 'competition',
      description: 'A multi-domain toolkit built for the MATE ROV 2026 underwater robotics competition. It measures the length of unknown objects from a photo using a known reference scale and a zoomed precision cursor with five-sample averaging, generates parametric 3D models and STLs for the coral-garden task, and runs a custom YOLOv8 detector to count invasive green crabs from images or a live camera. Organized as a clean Python package with firmware and a documented workflow.',
      tags: ['OpenCV', 'YOLOv8', 'SolidPython2', 'PyVista', 'OpenSCAD'],
      github: '',
      showcase: false
    },
    {
      id: 'rsna-knee',
      title: 'RSNA Knee Abnormality Classifier — Medical Imaging ML',
      status: 'Competition ML',
      statusClass: 'research',
      description: 'A multi-label deep learning pipeline for detecting 12 knee-MRI abnormalities from DICOM studies, built for a medical-imaging competition. It decodes each MRI study, maps six anatomical series slots, and fine-tunes vision backbones such as DINOv2 and ConvNeXt with a positive-weighted smooth BCE loss. Training uses four-fold cross-validation, test-time augmentation, and pseudo-labeling, with a dedicated per-class AUC evaluator scoring the final submission.',
      tags: ['PyTorch', 'Transformers', 'DINOv2', 'pydicom', 'Medical Imaging'],
      github: '',
      showcase: false
    },
    {
      id: 'arrohan',
      title: 'Arrohan — Real-Time Object Detection Dashboard',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'A real-time object-detection system with a live browser dashboard. A webcam feed is processed by a custom-trained YOLOv8 model, and annotated frames plus incident statistics stream to a dashboard over WebSockets. Detections are graded by severity, screenshots are captured automatically, and incident history is persisted and replayable. Built with Flask, Flask-SocketIO, and OpenCV.',
      tags: ['Flask', 'Socket.IO', 'YOLOv8', 'OpenCV'],
      github: '',
      showcase: false
    },
    {
      id: 'agy-remote',
      title: 'Agy Remote — Go Daemon + Flutter Terminal Client',
      status: 'Working Prototype',
      statusClass: 'prototype',
      description: 'A remote-control system for an agentic command-line tool. A Go daemon spawns the CLI inside a pseudo-terminal and streams it over WebSockets with token-based QR pairing, while a Flutter mobile app renders the live terminal with native action buttons, quick commands, push notifications, and multi-session support. Both halves build to real artifacts and include unit tests.',
      tags: ['Go', 'WebSockets', 'Flutter/Dart', 'PTY'],
      github: '',
      showcase: false
    },
    {
      id: 'explain-my-marks',
      title: 'Explain My Marks — iOS Report-Card Analyzer',
      status: 'Prototype',
      statusClass: 'prototype',
      description: 'An iOS app that helps students understand their report cards. It captures a card from a photo or PDF, runs optical character recognition with the Vision and PDFKit frameworks, and analyzes the results to surface insights, weak areas, recommendations, and practice questions across onboarding, home, results, and history screens. OCR and persistence are complete and working, while the LLM analysis layer is a mock ready for API integration.',
      tags: ['SwiftUI', 'Vision', 'PDFKit', 'Supabase'],
      github: '',
      showcase: false
    },
    {
      id: 'verity',
      title: 'Verity — AI Prompt Optimization Product Landing',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'A product landing page for an AI prompt-optimization Chrome extension, with a hero, animated feature slider, pricing, a waitlist that collects diagnostic answers, and privacy, cookie, and terms pages. Built with React and TypeScript, it stores waitlist data in Supabase with row-level-security migrations and ships as a production Vite build.',
      tags: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tailwind'],
      github: 'https://github.com/BMWareSPEEDY/Verity_Website_bolt',
      showcase: false
    },
    {
      id: 'pi-camera-mount',
      title: 'Pi Camera Mount — Parametric 3D-Printable Design',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'A parametric, 3D-printable three-piece mount for the Raspberry Pi Camera Module 3 Wide, with M5-bolt tilt locking for chassis mounting. The OpenSCAD source exposes every dimension through the Customizer, and the repository ships exported STLs, a batch export script, a bill of materials, print orientation guidance, and assembly steps.',
      tags: ['OpenSCAD', '3D Printing', 'Hardware', 'Parametric Design'],
      github: '',
      showcase: false
    },
    {
      id: 'galactic-dodger',
      title: 'Galactic Dodger — C++ SFML Arcade Game',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'A complete grid-based space arcade game written in C++ with SFML 3. You dodge and shoot enemies and their bullets, avoid falling obstacles, and collect triple-shot power-ups across a scaling difficulty curve, with health, high scores, and restart. Built with a clean single-file game loop and CMake.',
      tags: ['C++', 'SFML', 'Game Dev', 'CMake'],
      github: '',
      showcase: false
    },
    {
      id: 'png-to-svg',
      title: 'PNG to SVG — Raster-to-Vector Conversion Tool',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'A computer-vision tool that converts a raster PNG into a layered vector SVG. It quantizes colors into K clusters in LAB space, extracts contours per color layer, fits Bezier curves, and emits clean SVG paths, with command-line options and progress reporting. Used to feed crisp vector art into a Manim animation.',
      tags: ['Python', 'OpenCV', 'scikit-learn', 'Vector Graphics'],
      github: '',
      showcase: false
    },
    {
      id: 'crab-counting',
      title: 'Crab Counter — YOLOv8 Invasive Species Detection',
      status: 'Competition ML',
      statusClass: 'competition',
      description: 'A YOLOv8 detector that counts invasive European green crabs for the MATE ROV 2026 competition, running on a live camera or a still image. It lets the operator freeze a frame to count and annotate, then exports CSV evidence, and it trains on Apple Silicon GPU. Later folded into the larger MATE ROV toolkit.',
      tags: ['YOLOv8', 'PyTorch', 'OpenCV', 'ML'],
      github: '',
      showcase: false
    },
    {
      id: 'traxxas-control',
      title: 'Traxxas Control — UDP RC-Car Control Stack',
      status: 'Working Prototype',
      statusClass: 'prototype',
      description: 'A Python control stack that drives a Traxxas RC car through an ESP32 over UDP, with keyboard driving, Logitech G29 wheel support, and a pygame heads-up display. It adds cruise control, a precision mode, packet de-duplication, a heartbeat, and a fail-safe that returns the car to neutral on exit.',
      tags: ['Python', 'pygame', 'UDP', 'Embedded', 'Robotics'],
      github: '',
      showcase: false
    },
    {
      id: 'terminalvelocity-app',
      title: 'Terminal Velocity — On-Device Posture Reminder App',
      status: 'Working Prototype',
      statusClass: 'prototype',
      description: 'A Flutter health-habit app that fires categorized posture, eye-care, and hydration reminders, and includes a live posture test that uses on-device ML Kit pose detection to compare ear-to-shoulder and torso ratios and classify good posture versus slouching. Built with Riverpod, go_router, and background services.',
      tags: ['Flutter', 'ML Kit', 'Riverpod', 'On-Device ML'],
      github: '',
      showcase: false
    },
    {
      id: 'potentia',
      title: 'Potentia — Flutter Fitness Application',
      status: 'Prototype',
      statusClass: 'prototype',
      description: 'A broad Flutter fitness application covering login, dashboard, workout routines, diet and meal plans, calorie tracking, goals, achievements, supplements, progress, and profile across 23 screens with a consistent custom dark theme. A comprehensive product and UI prototype with an asset library and navigation service.',
      tags: ['Flutter/Dart', 'Material', 'UI/UX'],
      github: 'https://github.com/ayanshpaliwal/Potentia',
      showcase: false
    },
    {
      id: 'meteor-tracking',
      title: 'Meteor Tracking App',
      status: 'Hackathon Build',
      statusClass: 'hackathon',
      description: 'Developed during TISB Hacks, it scrapes government meteor databases for real-time sighting data and presents it on an interactive map visualization. Built with Flutter and Firebase.',
      tags: ['Flutter/Dart', 'Firebase'],
      github: 'https://github.com/BMWareSPEEDY/meteor-Tracking-app-by-Ayansh-Paliwal-and-Sidharth-Banglani',
      showcase: false
    },
    {
      id: 'sd-generator',
      title: 'SD Image Generator',
      status: 'Complete',
      statusClass: 'shipped',
      description: 'A Python image generator built on Stable Diffusion 3.5 Medium with 4-bit NF4 quantization for efficient inference, batch generation, and randomized prompt construction for creative variations.',
      tags: ['Python', 'Diffusers', 'PyTorch', 'SD 3.5'],
      github: 'https://github.com/BMWareSPEEDY/SD-image-generator',
      showcase: false
    }
  ],
  inProgress: [
    {
      id: 'peek-voice',
      title: 'VoiceTrend — Voice-Controlled Trend Dashboard',
      status: 'In Progress',
      statusClass: 'progress',
      description: 'A real-time voice interface for GitHub, Reddit, and Tradestie trending data using faster-whisper speech-to-text and a Streamlit dashboard. It normalizes a cross-platform hype score and supports voice-activated navigation through number mapping, all processed locally.',
      tags: ['faster-whisper', 'Streamlit', 'STT', 'Voice'],
      github: '',
      borderColor: '#27ae60'
    },
    {
      id: 'chess-bot-v2',
      title: 'Chess Bot v2 — AlphaZero-Style Engine',
      status: 'In Progress',
      statusClass: 'progress',
      description: 'A self-play reinforcement-learning chess engine with LSTM policy and value heads, 20 residual blocks, 256 channels, and Monte Carlo tree search using 120 simulations per move. Exports to ONNX for inference and trains with PyTorch, python-chess, and Stockfish integration.',
      tags: ['PyTorch', 'RL', 'MCTS', 'ONNX'],
      github: '',
      borderColor: '#9b59b6'
    },
    {
      id: 'local-ai',
      title: 'Local AI — On-Device Vision-Language Engine',
      status: 'Engine works',
      statusClass: 'progress',
      description: 'An on-device multimodal inference engine for iOS. A working MLX pipeline loads a 1.6B vision-language model, caches chat sessions, warms the Metal GPU, and streams generation at around 40 tokens per second with strict memory guardrails. The long-term goal is a fully offline visual accessibility assistant with camera capture, text to speech, and voice follow-ups; the engine is complete while the accessibility app is still under construction.',
      tags: ['MLX', 'SwiftUI', 'Vision-Language', 'On-Device'],
      github: '',
      borderColor: '#f39c12'
    },
    {
      id: 'iphone-13-ai',
      title: 'On-Phone LLM — Hand-Written GGUF Runtime',
      status: 'R&D',
      statusClass: 'progress',
      description: 'A from-scratch attempt to run a quantized language model locally on a phone using a hand-written GGUF parser with memory-mapped files, a custom tokenizer, and NEON-friendly math primitives, with no inference framework. Ambitious low-level research that currently stops short of end-to-end generation.',
      tags: ['C++', 'GGUF', 'NEON', 'R&D'],
      github: '',
      borderColor: '#95a5a6'
    }
  ]
};

// ============================================================================
// Blog Posts Data (used by Blog Section & Popups)
// ============================================================================
export const blogPostsData = {
  'wro2026': {
    id: 'wro2026',
    title: 'WRO 2026 Future Engineers',
    meta: 'Published on October 2026',
    body: `
      <p>For this competition, I was part of <strong>Team YO ERROR 404</strong>, where we developed our robot through two major versions. We finished <strong>7th in Asia</strong> at the Asia-Pacific Open Championship.</p>

      <div class="popup-media-figure">
        <img src="assets/IMG_4175.jpg" alt="Me at the WRO Asia-Pacific Open Championship">
        <p class="popup-media-caption">Me at the Asia-Pacific Open Championship</p>
      </div>

      <h3>Robot Design & Hardware</h3>
      <p>Our final design used a custom laser-cut 5mm acrylic chassis with a rear-wheel differential drive and servo-actuated front steering. We used a <strong>JGB37-520 12V DC motor</strong> with an integrated encoder for precise distance control, a <strong>DS3218 high-torque servo</strong> for steering, and custom 3D-printed PETG components for the motor mounts, sensor brackets and steering linkages.</p>
      
      <p>The robot used a <strong>Raspberry Pi 5</strong> for high-level processing and an <strong>ESP32-C3</strong> for real-time control. Four <strong>VL53L0X time-of-flight sensors</strong>, connected through a <strong>TCA9548A I2C multiplexer</strong>, measured distances to the walls, while a <strong>BNO055 IMU</strong> tracked heading and helped the robot execute accurate 90-degree turns. The ESP32 combined these readings using PD control to keep the robot centred and aligned with the track.</p>
      
      <p>We also redesigned the power system, using separate regulated supplies for the processing hardware, drive motor and steering servo to prevent voltage drops and sensor errors caused by sudden current spikes.</p>
      
      <h3>Computer Vision for Obstacle Round</h3>
      <p>For the obstacle round, we developed a computer vision system using a <strong>YOLOv11</strong> model trained on 217 hand-annotated images to detect red and green pillars and magenta parking boundaries through a Raspberry Pi Camera Module 3. The Raspberry Pi processed the camera feed and sent navigation commands to the ESP32, while the robot used finite-state machines to manage obstacle avoidance, turning, lap completion and parking.</p>
      
      <h3>Iterations & Improvements</h3>
      <ul>
        <li>Replaced ultrasonic sensors with more precise time-of-flight sensors</li>
        <li>Improved the motor driver</li>
        <li>Changed from Ackermann to parallel steering</li>
        <li>Switched from PLA to PETG after parts cracked during testing</li>
        <li>Refined the vision model and control algorithms to improve reliability</li>
      </ul>
      
      <h3>My Role</h3>
      <p>My role covered software development, hardware integration, testing and documentation. The biggest challenge was balancing development with exams around the Asia-Pacific Open Championship, which left us with limited time to prepare.</p>
      
      <p>Despite this, we competed and finished <strong>7th in Asia</strong>. I even had to skip my Spanish exam to attend, and after returning, I fell sick and was exhausted, affecting my exams. This project taught me how to integrate computer vision, embedded systems, mechanical design and autonomous control into a single working robot.</p>
      
      <h3>Resources</h3>
      <div class="popup-resources">
        <a href="assets/Engineering_Journal.pdf" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-red">
          <i class="fas fa-book"></i> Read Engineering Journal (PDF)
        </a>
        <a href="https://github.com/BMWareSPEEDY/WRO_yo_error_404" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-dark">
          <i class="fab fa-github"></i> View GitHub Repository
        </a>
        <a href="https://wro-association.org/" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-blue">
          <i class="fas fa-globe"></i> WRO Association
        </a>
        <a href="https://wro-association.org/competition/future-engineers/" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-green">
          <i class="fas fa-rocket"></i> Future Engineers Competition
        </a>
      </div>
    `
  },
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

      <div class="popup-media-figure">
        <img src="assets/IMG_2333.png" alt="Team Orcas MATE ROV 2026 Competition">
        <p class="popup-media-caption">Me after winning Nationals in India</p>
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

      <h3>Resources</h3>
      <div class="popup-resources">
        <a href="https://materovcompetition.org/" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-blue">
          <i class="fas fa-water"></i> MATE ROV Official Site
        </a>
      </div>
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

      <div class="popup-media-figure">
        <img src="assets/Hack_mars.pdf.png" alt="Hackmars 2026 Track Winner Certificate">
        <p class="popup-media-caption">Hackmars 2026 Track Winner Certificate</p>
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

      <div class="popup-formula-card">
        <span class="popup-formula-lhs">Slouch Fraction</span>
        <span class="popup-formula-op">=</span>
        <div class="popup-formula-fraction">
          <span class="popup-formula-num">Neck Ratio<sub>current</sub></span>
          <span class="popup-formula-den">Neck Ratio<sub>calibrated</sub></span>
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

      <h3>Resources</h3>
      <div class="popup-resources">
        <a href="assets/Hack_mars.pdf" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-red">
          <i class="fas fa-file-pdf"></i> View Certificate PDF
        </a>
      </div>
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

      <div class="popup-media-figure">
        <img src="assets/Norcal_hacks.pdf.png" alt="NorCal Hacks 2026 Track Winner Certificate">
        <p class="popup-media-caption">NorCal Hacks 2026 Track Winner Certificate</p>
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

      <h3>Resources</h3>
      <div class="popup-resources">
        <a href="assets/Norcal_hacks.pdf" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-red">
          <i class="fas fa-file-pdf"></i> View Certificate PDF
        </a>
      </div>
    `
  },
  'techkriti26': {
    id: 'techkriti26',
    title: 'Returning to IIT Kanpur: Techkriti \'26',
    meta: 'Published on April 3, 2026',
    body: `
      <p>Following our initial participation in 2025, our team returned to IIT Kanpur this year to compete in Techkriti '26. Our objective for this season was to build upon our foundational knowledge by entering three distinct and technically demanding categories: <strong>IARC, Maneuver, and Hovermania</strong>. We are pleased to report podium finishes in two of these events, reflecting a significant year-over-year improvement in our engineering and programming capabilities.</p>

      <div class="popup-media-grid">
        <div class="popup-media-card">
          <img src="assets/IITK-manoeuver.pdf.png" alt="Techkriti '26 Maneuver 2nd Place Certificate">
          <p class="popup-media-caption">Maneuver – 2nd Place Certificate</p>
        </div>
        <div class="popup-media-card">
          <img src="assets/IITK-IARC.pdf.png" alt="Techkriti '26 IARC 3rd Place Certificate">
          <p class="popup-media-caption">IARC – 3rd Place Certificate</p>
        </div>
      </div>

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
        <li><strong>Result:</strong> Participation & Key Learnings</li>
      </ul>

      <h3>Conclusion and Future Outlook</h3>
      <p>Overall, Techkriti '26 was a pivotal experience for our team. Comparing our performance to the previous year, we have demonstrated a clear trajectory of growth in both hardware integration and software development. While our results in IARC and Maneuver are a source of pride, the challenges faced in Hovermania have provided a clear roadmap for our technical objectives in the coming year.</p>
      <p>We look forward to iterating on these designs and returning to the competition circuit with even more refined solutions.</p>

      <h3>Resources</h3>
      <div class="popup-resources">
        <a href="assets/IITK-manoeuver.pdf" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-red">
          <i class="fas fa-file-pdf"></i> Maneuver Certificate PDF
        </a>
        <a href="assets/IITK-IARC.pdf" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-red">
          <i class="fas fa-file-pdf"></i> IARC Certificate PDF
        </a>
        <a href="https://techkriti.org/" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-blue">
          <i class="fas fa-globe"></i> Techkriti IIT Kanpur
        </a>
      </div>
    `
  },
  'amo2026': {
    id: 'amo2026',
    title: 'Securing Bronze at the American Math Olympiad',
    meta: 'Published on March 23, 2026',
    body: `
      <p>The American Mathematics Olympiad (AMO) is an international competition for students from grades 2–12, organized by SIMCC and SIU. It's based on US Common Core Standards and covers topics like algebra, geometry, number theory, and combinatorics. Basically, it's not your average school math—it really pushes how you think. Signing up for AMO this year honestly felt like jumping straight into the deep end.</p>
      
      <p>For around two to three months before the test, I spent a lot of my free time grinding through textbooks and past papers. But over time, things slowly started to click. Patterns made more sense, and I got better at approaching problems. It was tough, but I just treated every mistake as part of the process and kept going.</p>

      <div class="popup-media-figure">
        <img src="assets/amo_26.JPG" alt="AMO Bronze Certificate">
        <p class="popup-media-caption">American Mathematics Olympiad Bronze Medal Certificate</p>
      </div>

      <h3>The Examination & Reflections</h3>
      <p>Going into the exam, I didn't really know what to expect, especially since it's such a competitive exam globally. The questions were tricky in a different way—they needed multiple steps and a lot of logical thinking.</p>
      <p>In the end, I was honestly really happy (and kinda relieved) to find out I got a Bronze medal. For me, it wasn't just about the result, but more about all the effort that went into it—the long hours, the frustration, and finally seeing it pay off. It definitely made me appreciate math a lot more and showed me how important persistence really is.</p>

      <h3>Resources</h3>
      <div class="popup-resources">
        <a href="https://simcc.org/competitions/amo/" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-blue">
          <i class="fas fa-award"></i> AMO Competition Details
        </a>
      </div>
    `
  },
  'tisbhacks2026': {
    id: 'tisbhacks2026',
    title: 'TISB Hacks 2026 Experience: Building Verde',
    meta: 'Published on February 14, 2026',
    body: `
      <p>As a student at TISB, I noticed a common problem: there wasn't a streamlined way for us to exchange textbooks, uniforms, or electronics within our own community. To solve this, I built <strong>Verde</strong>, a Flutter-based mobile marketplace designed specifically for student life. The goal was simple: create an app where students can list items they no longer need, earn "Eco-Points" for sustainable practices, and chat with buyers—all while staying within a safe, school-verified environment.</p>

      <div style="display: flex; gap: 1.5rem; margin: 2rem 0; flex-wrap: wrap; justify-content: center;">
        <div style="flex: 1 1 300px; max-width: 360px; text-align: center;">
          <img src="assets/tisbhacks1_page-0001.jpg" alt="Verde UI Screen 1" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 6px 18px rgba(0,0,0,0.15); border: 1px solid var(--border-color);">
          <p class="popup-media-caption">Verde Marketplace Feed & Categories</p>
        </div>
        <div style="flex: 1 1 300px; max-width: 360px; text-align: center;">
          <img src="assets/tisbhacks1_page-0002.jpg" alt="Verde UI Screen 2" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 6px 18px rgba(0,0,0,0.15); border: 1px solid var(--border-color);">
          <p class="popup-media-caption">Listing Detail & Direct Chat</p>
        </div>
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

      <h3>Resources</h3>
      <div class="popup-resources">
        <a href="https://github.com/BMWareSPEEDY/TISB-Swap.git" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-dark">
          <i class="fab fa-github"></i> View on GitHub
        </a>
        <a href="https://vimeo.com/1155712588?share=copy&fl=sv&fe=ci" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-blue">
          <i class="fas fa-play"></i> Watch Demo Video
        </a>
      </div>
    `
  },
  'materov': {
    id: 'materov',
    title: 'MATE ROV Competition',
    meta: 'Published on June 23, 2025',
    body: `
      <p>Secured first place at the MateROV regional competition as part of a 10-member team. Together, we engineered an underwater ROV capable of executing complex underwater missions. We later qualified for the international finals held in Alpena, Michigan, USA, where we proudly placed 35th globally — a strong showing for our first time at the event.</p>
      
      <div class="popup-media-figure">
        <img src="assets/materov_2025.webp" alt="MATE ROV 2025 Team Bullsharks">
        <p class="popup-media-caption">MATE ROV 2025 Team Bullsharks</p>
      </div>

      <h3>Key Achievements & Takeaways</h3>
      <ul>
        <li>Collaborated in a 10-member multidisciplinary engineering squad.</li>
        <li>Engineered underwater thrust vectoring and tethered communications.</li>
        <li>Qualified for and competed in the International Finals in Alpena, Michigan.</li>
        <li>Gained foundational underwater robotics experience that powered our 2026 build.</li>
      </ul>

      <h3>Resources</h3>
      <div class="popup-resources">
        <a href="https://materovcompetition.org/" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-blue">
          <i class="fas fa-water"></i> MATE ROV Official Site
        </a>
      </div>
    `
  },
  'techkriti': {
    id: 'techkriti',
    title: 'Techkriti Techfest Experience',
    meta: 'Published on March 30, 2025',
    body: `
      <p>My team and I participated in three competitions at IIT Kanpur's annual techfest. We earned <strong>2nd place in IARC</strong>, placed 10th in our category in Robowars, and secured 12th place in Maneuver. The experience was both enriching and inspiring, as I had the opportunity to connect with like-minded peers from across the country who share a passion for robotics.</p>

      <div class="popup-media-figure">
        <img src="assets/techkriti_2025.png" alt="Techkriti Competition Certificate">
        <p class="popup-media-caption">Techkriti Competition Certificate & Team Recognition</p>
      </div>

      <h3>Competition Highlights</h3>
      <ul>
        <li><strong>IARC (International Autonomous Robotics Challenge):</strong> 2nd Place Podium Finish</li>
        <li><strong>Robowars:</strong> 10th Place in category</li>
        <li><strong>Maneuver:</strong> 12th Place in high-speed agility testing</li>
      </ul>

      <p>This event was a fantastic platform for learning and growth, expanding my understanding of the diverse capabilities of robots—from aerial navigation to combat and high-speed maneuvering.</p>

      <h3>Resources</h3>
      <div class="popup-resources">
        <a href="https://techkriti.org/" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-blue">
          <i class="fas fa-globe"></i> Techkriti IIT Kanpur
        </a>
      </div>
    `
  },
  'sciencefair': {
    id: 'sciencefair',
    title: 'Science Fair Victory',
    meta: 'Published on March 21, 2025',
    body: `
      <p>After two months of hard work, my team of five and I won first place in the Science Fair under the <strong>Still Model category</strong>. As the team leader, I was responsible for designing the model.</p>

      <div class="popup-media-figure">
        <img src="assets/Science_Fair_Trophy.png" alt="Science Fair Winning Trophy">
        <p class="popup-media-caption">1st Place Science Fair Trophy</p>
      </div>

      <h3>Project Execution</h3>
      <p>I used Blender, a 3D modeling software, and with reference images, created a model that turned out almost perfectly. I also helped prepare the presentation and conducted research on key information about enzymes, expanding my biology and chemistry knowledge beyond the syllabus.</p>

      <ul>
        <li>Led a team of five students from concept design to final exhibition.</li>
        <li>Modeled complex anatomical enzyme structures using 3D modeling tools.</li>
        <li>Delivered the primary technical presentation to the judge panel.</li>
      </ul>

      <p>This experience reinforced how dividing tasks and leveraging everyone's strengths leads to the best possible outcome.</p>
    `
  },
  'odyssey': {
    id: 'odyssey',
    title: 'Leading Through Challenges: My Odyssey of the Mind Experience',
    meta: 'Published on March 15, 2025',
    body: `
      <p>Odyssey of the Mind helps students unlock their creativity and become confident problem-solvers. Faced with challenges that demand original solutions, students learn to think outside the box without fear. The creative thinking and self-belief they develop in OM stays with them for life, empowering them in every area they pursue.</p>
      
      <h3>Leading the Team</h3>
      <p>Led the team to the <strong>State Finals</strong>, managing tasks, ensuring timely submissions, and boosting team morale under tight competition deadlines. We narrowly missed qualifying for the World Finals, but the problem-solving and leadership skills gained were invaluable.</p>

      <ul>
        <li>Organized task allocation and sprint milestones across the team.</li>
        <li>Coordinated creative problem-solving exercises and spontaneous challenges.</li>
        <li>Fostered team resilience through high-pressure judging rounds.</li>
      </ul>

      <h3>Resources</h3>
      <div class="popup-resources">
        <a href="https://odysseyofthemind.com/" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-blue">
          <i class="fas fa-globe"></i> Official Odyssey of the Mind Website
        </a>
      </div>
    `
  },
  'tisbhacks': {
    id: 'tisbhacks',
    title: 'TISB Hacks',
    meta: 'Published on January 26, 2025',
    body: `
      <p>TISB Hacks – Senior Coding is a competitive coding challenge for school students that tests algorithmic thinking, problem-solving, and programming skills under time pressure. It's designed for experienced coders ready to flex their skills in a fast-paced environment.</p>
      
      <p>My teammate and I developed an app that tracks meteors, allowing users to view detailed information and locations of meteor sightings. I was responsible for the front-end and overall app development, while my teammate handled the backend, which scraped a government database for relevant meteor data. Despite the tight deadline of the hackathon, I successfully built a user-friendly interface that effectively presented the extracted data in a clear and accessible format.</p>

      <div class="popup-media-figure">
        <img src="assets/tisb_Hacks_2025.png" alt="TISB Hacks Competition Certificate">
        <p class="popup-media-caption">TISB Hacks Certificate of Participation</p>
      </div>

      <h3>Resources</h3>
      <div class="popup-resources">
        <a href="https://github.com/BMWareSPEEDY/meteor-Tracking-app-by-Ayansh-Paliwal-and-Sidharth-Banglani" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-dark">
          <i class="fab fa-github"></i> View on GitHub
        </a>
        <a href="https://tisbhacks.tisb.org/" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-blue">
          <i class="fas fa-globe"></i> Competition Website
        </a>
      </div>
    `
  },
};

// ============================================================================
// Achievements Data (used by Achievements Section)
// ============================================================================
export const achievementsData = {
  robotics: [
    {
      id: 'wro2026',
      title: 'WRO 2026 Future Engineers - 7th in Asia',
      date: 'October 2026',
      description: 'Finished 7th in Asia at the Asia-Pacific Open Championship as part of Team YO ERROR 404. Built an autonomous self-driving robot with Raspberry Pi 5, ESP32-C3, YOLOv11 vision, and time-of-flight sensors.',
      blogId: 'wro2026'
    },
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