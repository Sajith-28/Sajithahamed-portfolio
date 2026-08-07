import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Award,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Container,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MousePointer2,
  Radio,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  ChevronDown,
  Zap,
  Activity,
  Camera,
  Menu,
  X,
  // 2036 additions
  Hexagon,
  Terminal,
  Orbit,
  Atom,
  Radar,
  Network,
  GitBranch,
  Layers,
  Gauge,
  Crosshair,
  ScanLine,
  Fingerprint,
  Eye,
  Lock,
  Binary,
  Satellite,
  Waypoints,
  CircuitBoard,
  Globe,
  Cog,
  FileCode2,
  Boxes,
  ArrowRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import casualPortrait from "../ChatGPT Image Jul 29, 2026, 09_16_56 PM.png";
import blazerPortrait from "../ChatGPT Image Jul 29, 2026, 11_07_06 PM.png";

// Gallery Images
import galleryMountain from "../gallery/one.PNG";
import galleryCoding from "../gallery/1760327202173.jpeg";
import galleryTeam from "../gallery/1760327202473.jpeg";
import galleryIITGate from "../gallery/1779340826653.jpeg";
import galleryIITLogo from "../gallery/1779340826836.jpeg";
import galleryPresentation from "../gallery/1779340827096.jpeg";
import quodeBadge from "../gallery/sajith badge.jpeg";

// Custom Hook for Scroll Progress & Hero Scroll Transition
function useScrollState() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Only update state if change is noticeable (prevents micro re-renders)
          setScrollY(currentScrollY);
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            setScrollProgress((currentScrollY / totalHeight) * 100);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollProgress, scrollY };
}

// Custom Hook for Bidirectional Scroll Reveal & Reverse Animations
function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          } else {
            // REVERSE ANIMATION: Remove reveal class when scrolling out of view
            entry.target.classList.remove("reveal-visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const elements = containerRef.current?.querySelectorAll(".reveal-on-scroll, .reveal-left, .reveal-right");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}

const stats = [
  {
    code: "SEC-01",
    label: "Automation",
    value: "n8n / Power Automate",
    icon: Workflow,
    copy: "Orchestrating cross-platform business workflows, API integrations, and hands-free process automation.",
    accent: "milkGreen"
  },
  {
    code: "SEC-02",
    label: "AI / ML",
    value: "Deep Learning & ML",
    icon: BrainCircuit,
    copy: "Specializing in neural modeling, predictive ML pipelines, anomaly detection, and intelligent automation.",
    accent: "electricYellow"
  },
  {
    code: "SEC-03",
    label: "Backend",
    value: "FastAPI / Python",
    icon: Server,
    copy: "Architecting high-performance REST APIs, modular data layers, and production-ready backend infrastructure.",
    accent: "milkGreen"
  },
  {
    code: "SEC-04",
    label: "DevOps & Systems",
    value: "CI-CD / DB / Frontend",
    icon: Container,
    copy: "Containerizing software stacks, managing databases (DBMS), CI-CD pipelines, and frontend application design.",
    accent: "electricYellow"
  }
];

const projects = [
  {
    id: "PROJ-01",
    name: "Indie Dietyy",
    description:
      "AI-powered Indian clinical diet planning platform with real-time macro customization and intelligent meal generation across 28 Indian languages.",
    mlStack: ["LSTM", "LightGBM", "XGBoost", "Random Forest", "K-Means", "Isolation Forest"],
    techStack: ["Python", "FastAPI", "MongoDB"],
    live: "https://indie-dietyy-v2.vercel.app/",
    github: "https://github.com/Sajith-28/indie-dietyy",
    icon: Cpu,
    accent: "milkGreen"
  },
  {
    id: "PROJ-02",
    name: "Sublyx",
    description:
      "AI-driven Tanglish & multilingual video captioning platform featuring automated audio transcription, time-aligned subtitle generation, and dynamic video overlays.",
    mlStack: ["Whisper AI", "NLP", "Speech-to-Text", "Audio Alignment"],
    techStack: ["React", "FastAPI", "FFmpeg", "Tailwind CSS"],
    live: "https://sublyx-alpha.vercel.app/",
    github: "https://github.com/Sajith-28/Sublyx",
    icon: Sparkles,
    accent: "electricYellow"
  },
  {
    id: "PROJ-03",
    name: "CodMe",
    description:
      "Interactive macOS-inspired web application featuring native-feeling windowing, GitHub workflow management, and automated cloud deployments.",
    mlStack: [],
    techStack: ["React", "GitHub Workflows", "Cloud Deployment"],
    live: "https://codme.vercel.app/",
    github: "https://github.com/Sajith-28/codme",
    icon: Code2,
    accent: "milkGreen"
  },
  {
    id: "PROJ-04",
    name: "Workflow Automation Systems",
    description:
      "Enterprise process automation suite integrating Gmail API and Google Drive API, orchestrated seamlessly using Microsoft Power Automate and n8n.",
    mlStack: [],
    techStack: ["Gmail API", "Google Drive API", "Power Automate", "n8n"],
    live: null,
    github: null,
    icon: Bot,
    accent: "electricYellow"
  }
];

const experiences = [
  {
    role: "AI Forward Intern",
    company: "Quodeworks",
    location: "Chennai, TN",
    period: "Present",
    details: "Building high-performance Python backend services and AI automation pipelines.",
    highlights: [
      "Engineered microservices & REST APIs using FastAPI, Python, and MongoDB with Azure cloud integration.",
      "Developed automated n8n workflows and AI-driven systems for enterprise process orchestration.",
      "Completed the QuodeSchool BTG Titans Cohort, applying AI-assisted engineering, Git workflows, and agile practices."
    ],
    accent: "milkGreen"
  },
  {
    role: "Professional Intern",
    company: "BICS GLOBAL",
    location: "Chennai, TN",
    period: "Internship",
    details: "Deep-dived into Machine Learning algorithms and created predictive software applications.",
    highlights: [
      "Mastered core Machine Learning concepts including regression, classification algorithms, and data preprocessing.",
      "Designed and deployed an end-to-end Insurance Risk & Premium Prediction application using predictive ML models.",
      "Collaborated on structured software engineering principles, API integration, and model evaluation."
    ],
    certificate: "https://www.linkedin.com/in/sajith-ahamed-fakrudeen-8997902b2/overlay/Position/2467591790/treasury/?profileId=ACoAAEs40fUBqL__1Wr8NnzUUxLhpjrilPdRveA",
    accent: "electricYellow"
  }
];

const certifications = [
  {
    title: "Fundamentals of Reinforcement Learning",
    issuer: "University of Alberta · Coursera",
    icon: BrainCircuit,
    accent: "milkGreen",
    link: "https://www.coursera.org/account/accomplishments/verify/7R62LARWC66M"
  },
  {
    title: "Machine Learning using Python",
    issuer: "Simplilearn · SkillUp",
    icon: Cpu,
    accent: "electricYellow",
    link: "https://simpli-web.app.link/e/jF1nxbKYo5b"
  },
  {
    title: "Cisco Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    icon: ShieldCheck,
    accent: "milkGreen"
  },
  {
    title: "Cisco Ethical Hacker",
    issuer: "Cisco Networking Academy",
    icon: ShieldCheck,
    accent: "electricYellow"
  },
  {
    title: "Cisco Introduction to IoT",
    issuer: "Cisco Networking Academy",
    icon: ShieldCheck,
    accent: "milkGreen"
  },
  {
    title: "Database Management Systems (DBMS)",
    issuer: "Technical Certification",
    icon: Database,
    accent: "electricYellow"
  }
];

const HERO_SWIPE_BAND_RATIO = 0.28;

// ============================================================
// HERO SECTION — UNCHANGED (LANDING PAGE)
// Do not modify — preserves the existing landing page experience.
// ============================================================
function HeroSection({ scrollY }) {
  const heroRef = useRef(null);
  const blazerMaskRef = useRef(null);
  const blazerRef = useRef(null);
  const headlineRef = useRef(null);
  const blazerTextMaskRef = useRef(null);
  const blazerTextRef = useRef(null);
  const indicatorRef = useRef(null);
  const reticleRef = useRef(null);     // 2036: custom cursor reticle (desktop only, ref-driven for zero re-renders)
  const reticleLabelRef = useRef(null); // 2036: reticle coordinate label
  const isInteracting = useRef(false);
  const heroBoundsRef = useRef(null);
  const headlineBoundsRef = useRef(null);
  const pendingPointerRef = useRef(null);
  const pointerFrameRef = useRef(null);

  // 2036: live clock for top-right HUD corner
  const [clock, setClock] = useState("--:--:--");
  // 2036: typewriter terminal ticker
  const [typedText, setTypedText] = useState("");
  const termCommands = [
    "> init identity_matrix --user=SAF-28",
    "> auth bio_signature ... OK",
    "> load neural_weights.bin [4.2 GB]",
    "> render holographic_ui --mode=2036",
    "> sync telemetry uplink ... STABLE",
    "> system ready // awaiting input",
  ];

  const measureHeroLayers = useCallback(() => {
    if (!heroRef.current) return null;

    const heroBounds = heroRef.current.getBoundingClientRect();
    heroBoundsRef.current = {
      left: heroBounds.left,
      top: heroBounds.top,
      width: heroBounds.width,
      height: heroBounds.height
    };

    if (headlineRef.current) {
      const headlineBounds = headlineRef.current.getBoundingClientRect();
      headlineBoundsRef.current = {
        left: headlineBounds.left,
        width: headlineBounds.width
      };
    }

    return heroBoundsRef.current;
  }, []);

  const applySwipe = useCallback((xPercent) => {
    const bounds = heroBoundsRef.current || measureHeroLayers();
    if (!bounds?.width) return;

    const localX = Math.min(Math.max((xPercent / 100) * bounds.width, 0), bounds.width);
    const bandWidth = bounds.width * HERO_SWIPE_BAND_RATIO;
    const bandLeft = localX - bandWidth / 2;

    if (blazerMaskRef.current) {
      blazerMaskRef.current.style.width = `${bandWidth}px`;
      blazerMaskRef.current.style.transform = `translate3d(${bandLeft}px, 0, 0)`;
    }

    if (blazerRef.current) {
      blazerRef.current.style.width = `${bounds.width}px`;
      blazerRef.current.style.transform = `translate3d(${-bandLeft}px, 0, 0)`;
    }

    const headlineBounds = headlineBoundsRef.current;
    if (headlineBounds?.width && blazerTextMaskRef.current && blazerTextRef.current) {
      const textLocalX = Math.min(
        Math.max(localX - (headlineBounds.left - bounds.left), 0),
        headlineBounds.width
      );
      const textBandWidth = headlineBounds.width * HERO_SWIPE_BAND_RATIO;
      const textBandLeft = textLocalX - textBandWidth / 2;

      blazerTextMaskRef.current.style.width = `${textBandWidth}px`;
      blazerTextMaskRef.current.style.transform = `translate3d(${textBandLeft}px, 0, 0)`;
      blazerTextRef.current.style.width = `${headlineBounds.width}px`;
      blazerTextRef.current.style.transform = `translate3d(${-textBandLeft}px, 0, 0)`;
    }

    if (indicatorRef.current) {
      indicatorRef.current.style.transform = `translate3d(${localX}px, 0, 0)`;
    }
  }, [measureHeroLayers]);

  const applyPointerPosition = useCallback((clientX, clientY, updateReticle = true) => {
    const bounds = heroBoundsRef.current || measureHeroLayers();
    if (!bounds?.width) return;

    const localX = Math.min(Math.max(clientX - bounds.left, 0), bounds.width);
    applySwipe((localX / bounds.width) * 100);

    if (updateReticle && reticleRef.current) {
      const rx = localX;
      const ry = clientY - bounds.top;
      reticleRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      reticleRef.current.style.opacity = "1";
      if (reticleLabelRef.current) {
        reticleLabelRef.current.textContent = `X${String(Math.round(rx)).padStart(4, "0")} Y${String(Math.round(ry)).padStart(4, "0")}`;
      }
    }
  }, [applySwipe, measureHeroLayers]);

  const schedulePointerUpdate = useCallback((clientX, clientY, updateReticle = true) => {
    pendingPointerRef.current = { clientX, clientY, updateReticle };
    if (pointerFrameRef.current) return;

    pointerFrameRef.current = window.requestAnimationFrame(() => {
      pointerFrameRef.current = null;
      const pending = pendingPointerRef.current;
      if (pending) {
        applyPointerPosition(pending.clientX, pending.clientY, pending.updateReticle);
      }
    });
  }, [applyPointerPosition]);

  // 2036: extends pointer-move to also drive the custom cursor reticle via direct DOM
  // (no setState on mousemove = no re-render of the entire hero)
  const handlePointerMove = (e) => {
    isInteracting.current = true;
    schedulePointerUpdate(e.clientX, e.clientY, true);
  };

  const handleTouchMove = (e) => {
    if (!e.touches?.length) return;
    isInteracting.current = true;
    schedulePointerUpdate(e.touches[0].clientX, e.touches[0].clientY, false);
  };

  // 2036: live clock — ticks every second, drives top-right HUD readout
  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setClock(
        `${String(n.getHours()).padStart(2, "0")}:${String(n.getMinutes()).padStart(2, "0")}:${String(n.getSeconds()).padStart(2, "0")}`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // 2036: typewriter terminal ticker — types each command char-by-char, pauses, advances
  useEffect(() => {
    let cmdIdx = 0;
    let charIdx = 0;
    let timeoutId;
    const typeNext = () => {
      const cmd = termCommands[cmdIdx];
      if (charIdx <= cmd.length) {
        setTypedText(cmd.slice(0, charIdx));
        charIdx += 1;
        timeoutId = setTimeout(typeNext, 55);
      } else {
        timeoutId = setTimeout(() => {
          cmdIdx = (cmdIdx + 1) % termCommands.length;
          charIdx = 0;
          setTypedText("");
          timeoutId = setTimeout(typeNext, 220);
        }, 2000);
      }
    };
    typeNext();
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const refreshLayers = () => {
      measureHeroLayers();
      applySwipe(50);
    };

    refreshLayers();
    window.addEventListener("resize", refreshLayers);
    return () => window.removeEventListener("resize", refreshLayers);
  }, [applySwipe, measureHeroLayers]);

  useEffect(() => {
    let startTime = performance.now();
    let animId;
    let lastIdleFrame = 0;

    const animateIdle = (now) => {
      if (!isInteracting.current && heroRef.current && now - lastIdleFrame > 32) {
        const elapsed = (now - startTime) / 1000;
        const x = 50 + Math.sin(elapsed * 0.8) * 22;
        applySwipe(x);
        lastIdleFrame = now;
      }
      animId = requestAnimationFrame(animateIdle);
    };

    animId = requestAnimationFrame(animateIdle);
    return () => cancelAnimationFrame(animId);
  }, [applySwipe]);

  useEffect(() => {
    return () => {
      if (pointerFrameRef.current) {
        cancelAnimationFrame(pointerFrameRef.current);
      }
    };
  }, []);

  // Performance optimized parallax: stop calculations when scrolled out of view
  const heroProgress = scrollY < 900 ? Math.min(scrollY / (window.innerHeight || 800), 1) : 1;
  const heroScale = 1 - heroProgress * 0.08;
  const heroOpacity = 1 - heroProgress * 0.6;

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[640px] w-full cursor-default md:cursor-none overflow-hidden bg-carbon select-none"
      onMouseMove={handlePointerMove}
      onMouseEnter={() => { isInteracting.current = true; measureHeroLayers(); }}
      onMouseLeave={() => { isInteracting.current = false; pendingPointerRef.current = null; if (reticleRef.current) reticleRef.current.style.opacity = "0"; }}
      onTouchMove={handleTouchMove}
      onTouchStart={() => { isInteracting.current = true; measureHeroLayers(); }}
      onTouchEnd={() => { isInteracting.current = false; }}
    >
      <div
        className="hero-scroll-wrapper relative h-full w-full"
        style={{
          transform: `scale(${heroScale}) translateY(${scrollY * 0.12}px)`,
          opacity: heroOpacity,
          willChange: "transform, opacity"
        }}
      >
        <img
          src={casualPortrait}
          alt="Sajith Ahamed Fakrudeen (Casual)"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
          draggable="false"
          decoding="async"
          fetchpriority="high"
        />

        <div
          ref={blazerMaskRef}
          className="hero-swipe-mask pointer-events-none absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: "28%", transform: "translate3d(36vw, 0, 0)" }}
        >
          <img
            ref={blazerRef}
            src={blazerPortrait}
            alt="Sajith Ahamed Fakrudeen (Professional Blazer)"
            className="hero-swipe-image absolute inset-y-0 left-0 h-full max-w-none object-cover object-center pointer-events-none"
            draggable="false"
            decoding="async"
            fetchpriority="high"
            style={{ width: "100vw", transform: "translate3d(-36vw, 0, 0)" }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-carbon-grid bg-[length:60px_60px] opacity-10 pointer-events-none" />
        <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-transparent via-milkGreen/20 to-transparent" />

        {/* 2036: ambient volumetric light shafts in top corners (pulse slowly) */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-milkGreen/15 blur-[80px] float-y" />
        <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-electricYellow/15 blur-[80px] float-y-2" />

        {/* 2036: large rotating reticle rings behind the headline (very low opacity, right side) */}
        <div className="pointer-events-none absolute right-[6%] top-1/2 hidden -translate-y-1/2 opacity-[0.09] lg:block">
          <div className="relative h-[640px] w-[640px]">
            <div className="spin-18 absolute inset-0 rounded-full border-2 border-dashed border-milkGreen" />
            <div className="spin-rev-14 absolute inset-12 rounded-full border border-electricYellow" />
            <div className="spin-12 absolute inset-28 rounded-full border border-milkGreen/60" />
            {/* Crosshair spokes */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-milkGreen/40 to-transparent" />
            <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-milkGreen/40 to-transparent" />
            {/* Center node */}
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-milkGreen neural-node" />
          </div>
        </div>

        {/* 2036: drifting particle field (subtle, uses existing .particle-drift CSS) */}
        <ParticleField count={16} yellow={false} />

        {/* 2036: floating system tags around the portraits (desktop only, gentle float) */}
        <div className="pointer-events-none absolute inset-0 z-[15] hidden lg:block">
          <div className="float-y absolute left-[6%] top-[30%] border border-milkGreen/40 bg-black/50 px-2.5 py-1 font-techmono text-[9px] font-bold uppercase tracking-widest text-milkGreen backdrop-blur-sm">
            <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-milkGreen neural-node align-middle" />
            NEURAL.LINK // ACTIVE
          </div>
          <div className="float-y-2 absolute right-[8%] top-[24%] border border-electricYellow/40 bg-black/50 px-2.5 py-1 font-techmono text-[9px] font-bold uppercase tracking-widest text-electricYellow backdrop-blur-sm">
            <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-electricYellow neural-node-purple align-middle" />
            CORE#28 // ONLINE
          </div>
          <div className="float-y absolute left-[10%] top-[58%] border border-electricYellow/40 bg-black/50 px-2.5 py-1 font-techmono text-[9px] font-bold uppercase tracking-widest text-electricYellow backdrop-blur-sm">
            AUTH.VERIFIED ✓
          </div>
          <div className="float-y-2 absolute right-[5%] top-[62%] border border-milkGreen/40 bg-black/50 px-2.5 py-1 font-techmono text-[9px] font-bold uppercase tracking-widest text-milkGreen backdrop-blur-sm">
            BIO.SIG :: NOMINAL
          </div>
        </div>

        {/* 2036: top-left HUD badge (ORIGINAL — preserved) */}
        <div className="animate-hero-hud absolute top-20 left-6 z-20 hidden md:flex items-center gap-3 border border-white/10 bg-black/60 px-3.5 py-1.5 text-[11px] font-mono uppercase text-zinc-300 backdrop-blur-md">
          <Radio size={13} className="text-electricYellow animate-pulse" />
          <span>SYSTEM TELEMETRY // CORE #28</span>
        </div>

        {/* 2036: top-right HUD corner — live clock + GPS coordinates */}
        <div className="animate-hero-hud pointer-events-none absolute top-20 right-6 z-20 hidden md:flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 border border-white/10 bg-black/60 px-3.5 py-1.5 text-[11px] font-techmono uppercase text-zinc-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-milkGreen animate-pulse shadow-glow" />
            <span className="font-bold text-milkGreen tabular-nums">{clock}</span>
            <span className="text-zinc-500">IST</span>
          </div>
          <div className="flex items-center gap-2 border border-white/10 bg-black/60 px-3 py-1 text-[10px] font-techmono uppercase tracking-widest text-zinc-400 backdrop-blur-md">
            <MapPin size={11} className="text-electricYellow" />
            <span>13.0827°N // 80.2707°E</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 border border-white/10 bg-black/60 px-3 py-1 text-[9px] font-techmono uppercase tracking-widest text-zinc-500 backdrop-blur-md">
            <Satellite size={10} className="text-milkGreen animate-pulse" />
            <span>UPLINK :: STABLE</span>
          </div>
        </div>

        <div
          ref={indicatorRef}
          className="pointer-events-none absolute inset-y-0 left-0 z-30"
          style={{ transform: "translate3d(50vw, 0, 0)", willChange: "transform" }}
        >
          <div className="relative h-full w-1 -translate-x-1/2 bg-electricYellow shadow-glow-yellow">
            <div className="absolute top-1/2 -left-16 -translate-y-1/2 border border-electricYellow bg-black/90 px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest text-electricYellow backdrop-blur-md shadow-glow-yellow">
              IDENTITY SWIPE
            </div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-8 w-2 border-l-2 border-r-2 border-electricYellow" />
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 h-8 w-2 border-l-2 border-r-2 border-electricYellow" />
          </div>
        </div>

        <div className="relative z-20 flex h-full items-end px-5 pb-12 pt-28 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="animate-hero-badge mb-4 flex flex-wrap items-center gap-3">
              <span className="border border-electricYellow/70 bg-electricYellow/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-electricYellow backdrop-blur-md shadow-glow-yellow">
                B.Tech AI &amp; ML // Saveetha Engg College
              </span>
            </div>

            <div ref={headlineRef} className="animate-hero-headline relative max-w-6xl">
              <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black uppercase tracking-tighter leading-[0.9] text-white">
                BEHIND THE CODE
              </h1>

              <div
                ref={blazerTextMaskRef}
                className="hero-swipe-text-mask pointer-events-none absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: "28%", transform: "translate3d(128.571%, 0, 0)" }}
              >
                <h1
                  ref={blazerTextRef}
                  className="hero-swipe-text-inner text-4xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black uppercase tracking-tighter leading-[0.9] pointer-events-none text-stroke-white text-transparent bg-clip-text bg-gradient-to-r from-milkGreen via-white to-electricYellow drop-shadow-glow"
                  style={{ width: "100%", transform: "translate3d(-128.571%, 0, 0)" }}
                >
                  <span className="text-milkGreen">BEHIND </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-milkGreen via-white to-electricYellow">THE CODE</span>
                </h1>
              </div>
            </div>

            <p className="animate-hero-sub mt-4 max-w-3xl text-base font-bold tracking-wide text-zinc-200 sm:text-2xl drop-shadow-md">
              Sajith Ahamed Fakrudeen — AI/ML Engineer &amp; Developer
            </p>

            <div className="animate-hero-buttons mt-6 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2.5 border border-milkGreen bg-milkGreen px-7 py-3.5 text-sm font-black uppercase tracking-wider text-black shadow-glow transition hover:scale-105 hover:bg-white"
              >
                <span>Explore Identity</span>
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 border border-electricYellow bg-electricYellow px-7 py-3.5 text-sm font-black uppercase tracking-wider text-black shadow-glow-yellow transition hover:scale-105 hover:bg-white"
              >
                <span>Initiate Contact</span>
                <Mail size={18} strokeWidth={2.5} />
              </a>

              <div className="hidden lg:flex ml-auto items-center gap-2 text-xs font-mono text-electricYellow">
                <MousePointer2 size={14} className="animate-bounce text-milkGreen" />
                <span>SWEEP CURSOR LEFT/RIGHT TO REVEAL HYBRID TEXT &amp; BLAZER PORTRAIT</span>
              </div>
              <div className="flex lg:hidden items-center gap-2 text-[10px] font-mono text-electricYellow mt-1">
                <MousePointer2 size={12} className="animate-pulse text-milkGreen" />
                <span>DRAG / TOUCH LEFT &amp; RIGHT TO SWIPE DUAL PORTRAIT</span>
              </div>
            </div>

            {/* 2036: bottom-center typewriter terminal ticker */}
            <div className="animate-hero-hud pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 md:block">
              <div className="flex items-center gap-2 border border-white/10 bg-black/70 px-4 py-1.5 backdrop-blur-md">
                <Terminal size={11} className="text-milkGreen" />
                <span className="font-techmono text-[11px] tracking-wider text-milkGreen">
                  {typedText}
                  <span className="cursor-blink">_</span>
                </span>
              </div>
            </div>

            {/* 2036: bottom-left signal-strength HUD */}
            <div className="animate-hero-hud pointer-events-none absolute bottom-6 left-6 z-20 hidden md:flex items-center gap-2 border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md">
              <span className="font-techmono text-[10px] uppercase tracking-widest text-zinc-500">SIG</span>
              <div className="flex items-end gap-0.5 h-3">
                {[40, 65, 50, 85, 70].map((h, i) => (
                  <span
                    key={i}
                    className="wave-bar w-0.5 bg-milkGreen"
                    style={{ height: "100%", animationDelay: `${i * 0.12}s` }}
                  />
                ))}
              </div>
              <span className="font-techmono text-[10px] font-bold uppercase tracking-widest text-milkGreen">5/5</span>
              <span className="mx-1 text-zinc-700">|</span>
              <span className="font-techmono text-[10px] uppercase tracking-widest text-zinc-500">FPS</span>
              <span className="font-techmono text-[10px] font-bold uppercase tracking-widest text-electricYellow">60</span>
            </div>

            {/* 2036: bottom-right vertical scroll-progress indicator */}
            <div className="animate-hero-hud pointer-events-none absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2">
              <span className="font-techmono text-[10px] uppercase tracking-widest text-zinc-500">SCROLL</span>
              <div className="relative h-16 w-1 overflow-hidden bg-white/10">
                <div
                  className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-milkGreen to-electricYellow transition-all duration-150 ease-out shadow-glow"
                  style={{ height: `${heroProgress * 100}%` }}
                />
              </div>
              <span className="font-techmono text-[10px] font-bold tabular-nums text-milkGreen">
                {String(Math.round(heroProgress * 100)).padStart(3, "0")}%
              </span>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="#about"
                className="group flex flex-col items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-zinc-400 transition hover:text-electricYellow"
              >
                <span>SCROLL DOWN TO TRANSITION NEXT PAGE</span>
                <ChevronDown size={18} className="animate-bounce text-milkGreen" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2036: custom cursor reticle — desktop only, ref-driven (no re-renders on mousemove) */}
      <div
        ref={reticleRef}
        className="pointer-events-none absolute left-0 top-0 z-[60] hidden md:block opacity-0 transition-opacity duration-200"
        style={{ willChange: "transform, opacity" }}
      >
        {/* Rotating dashed reticle ring */}
        <div className="relative h-12 w-12 spin-12">
          <div className="absolute inset-0 rounded-full border border-dashed border-milkGreen/70" />
          {/* Crosshair spokes */}
          <div className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-milkGreen" />
          <div className="absolute left-1/2 bottom-0 h-2 w-px -translate-x-1/2 bg-milkGreen" />
          <div className="absolute top-1/2 left-0 w-2 h-px -translate-y-1/2 bg-milkGreen" />
          <div className="absolute top-1/2 right-0 w-2 h-px -translate-y-1/2 bg-milkGreen" />
        </div>
        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-milkGreen neural-node" />
        {/* Coordinate readout */}
        <div
          ref={reticleLabelRef}
          className="absolute left-7 top-5 whitespace-nowrap border border-milkGreen/40 bg-black/80 px-1.5 py-0.5 font-techmono text-[9px] uppercase tracking-widest text-milkGreen backdrop-blur-md"
        >
          X0000 Y0000
        </div>
      </div>
    </section>
  );
}


// ============================================================
// 2036 CYBERPUNK UI — SHARED COMPONENTS
// Used across all non-landing sections
// ============================================================

// Holographic Section Label — replaces the original SectionLabel
// Same signature so it's a drop-in upgrade.
function SectionLabel({ children, number, yellow = false }) {
  const accent = yellow ? "electricYellow" : "milkGreen";
  const textCls = yellow ? "text-electricYellow" : "text-milkGreen";
  const dotCls = yellow ? "bg-electricYellow" : "bg-milkGreen";
  const glowCls = yellow ? "shadow-glow-yellow" : "shadow-glow";

  return (
    <div className="mb-5 inline-flex items-center gap-3 clip-cyber-tag border border-white/15 bg-black/60 px-4 py-2 backdrop-blur-md">
      {/* Hex accent */}
      <Hexagon size={14} className={`${textCls} fill-current/10`} strokeWidth={2} />
      <span className={`neural-node h-2 w-2 rounded-full ${dotCls} ${glowCls}`} />
      {number && (
        <span className={`font-techmono text-xs font-bold tracking-widest ${textCls}`}>
          {number}
        </span>
      )}
      <span className="font-chakra text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-200">
        {children}
      </span>
    </div>
  );
}

// Holographic Glass Panel — replaces original GlassPanel (same signature)
function GlassPanel({ children, className = "", delay = 0, yellowHover = false }) {
  const accentText = yellowHover ? "text-electricYellow" : "text-milkGreen";
  const hoverBorder = yellowHover ? "hover:border-electricYellow/70" : "hover:border-milkGreen/70";
  const hoverShadow = yellowHover ? "hover:shadow-glow-yellow" : "hover:shadow-glow";

  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-on-scroll hud-frame relative overflow-hidden border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] ${hoverBorder} ${hoverShadow} ${className}`}
    >
      {/* Holographic sweep */}
      <div className="holo-shimmer pointer-events-none absolute inset-0" />
      {/* Top data bar */}
      <div className="pointer-events-none absolute left-3 top-2 flex items-center gap-1.5 font-techmono text-[8px] uppercase tracking-widest text-zinc-500">
        <span className={`h-1 w-1 rounded-full ${yellowHover ? "bg-electricYellow" : "bg-milkGreen"} animate-pulse`} />
        <span>MODULE</span>
      </div>
      <div className="pointer-events-none absolute right-3 top-2 font-techmono text-[8px] uppercase tracking-widest text-zinc-500">
        v2036.1
      </div>
      {children}
    </div>
  );
}

// Glitch Heading — wraps text with data-text for the .glitch-text effect
function GlitchHeading({ children, as: Tag = "h2", className = "" }) {
  const text = typeof children === "string" ? children : "";
  return (
    <Tag
      data-text={text}
      className={`glitch-text glitch-heading ${className}`}
    >
      {children}
    </Tag>
  );
}

// Marquee Ticker — infinite horizontal scroller
function MarqueeTicker({ items, yellow = false, reverse = false, speed = 30 }) {
  const accentText = yellow ? "text-electricYellow" : "text-milkGreen";
  const doubled = [...items, ...items];
  return (
    <div className="ticker-mask relative overflow-hidden border-y border-white/10 bg-black/40 py-2">
      <div
        className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`mx-6 inline-flex items-center gap-2 font-techmono text-[11px] uppercase tracking-widest text-zinc-400`}
          >
            <span className={`${accentText}`}>◆</span>
            <span className="text-zinc-300">{item}</span>
            <span className="text-zinc-600">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Telemetry Strip — small HUD readout with live-feeling fake data
function TelemetryStrip({ yellow = false }) {
  const accent = yellow ? "text-electricYellow" : "text-milkGreen";
  const dot = yellow ? "bg-electricYellow" : "bg-milkGreen";
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-techmono text-[10px] uppercase tracking-widest text-zinc-500">
      <span className="inline-flex items-center gap-1.5">
        <span className={`h-1.5 w-1.5 rounded-full ${dot} animate-pulse`} />
        <span className={accent}>ONLINE</span>
      </span>
      <span>LAT 12ms</span>
      <span className="hidden sm:inline">CORE#28</span>
      <span className="hidden sm:inline">v2036.1.07</span>
      <span className="hidden md:inline">SEC: AES-256</span>
    </div>
  );
}

// Neural Network Decoration — animated SVG nodes & connections
function NeuralNetDecoration({ yellow = false, className = "" }) {
  const stroke = yellow ? "rgba(139,83,254,0.4)" : "rgba(142,255,1,0.4)";
  const fill = yellow ? "#8b53fe" : "#8eff01";
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      {/* Connections */}
      <g stroke={stroke} strokeWidth="0.8">
        <line x1="40" y1="40" x2="100" y2="80" />
        <line x1="40" y1="40" x2="100" y2="120" />
        <line x1="40" y1="100" x2="100" y2="80" />
        <line x1="40" y1="100" x2="100" y2="120" />
        <line x1="40" y1="160" x2="100" y2="120" />
        <line x1="100" y1="80" x2="160" y2="60" />
        <line x1="100" y1="80" x2="160" y2="140" />
        <line x1="100" y1="120" x2="160" y2="60" />
        <line x1="100" y1="120" x2="160" y2="140" />
      </g>
      {/* Nodes */}
      <g fill={fill}>
        <circle cx="40" cy="40" r="3" className="neural-node" />
        <circle cx="40" cy="100" r="3" />
        <circle cx="40" cy="160" r="3" className="neural-node" />
        <circle cx="100" cy="80" r="4" className={yellow ? "neural-node-purple" : "neural-node"} />
        <circle cx="100" cy="120" r="4" />
        <circle cx="160" cy="60" r="3" className="neural-node" />
        <circle cx="160" cy="140" r="3" />
      </g>
    </svg>
  );
}

// Ambient Particle Field — decorative floating dots
function ParticleField({ count = 12, yellow = false }) {
  const color = yellow ? "bg-electricYellow" : "bg-milkGreen";
  const particles = Array.from({ length: count }, (_, i) => {
    const left = (i * 37) % 100;
    const top = (i * 53) % 100;
    const delay = (i * 0.7) % 8;
    const dur = 6 + (i % 4) * 2;
    const dx = ((i * 13) % 60) - 30;
    const dy = -40 - (i % 5) * 10;
    return (
      <span
        key={i}
        className={`particle-drift pointer-events-none absolute h-1 w-1 rounded-full ${color}`}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          animationDelay: `${delay}s`,
          ["--dur"]: `${dur}s`,
          ["--dx"]: `${dx}px`,
          ["--dy"]: `${dy}px`,
        }}
      />
    );
  });
  return <div className="pointer-events-none absolute inset-0 overflow-hidden">{particles}</div>;
}

// ============================================================
// IMMERSIVE PRELOADER — 2036 CYBERPUNK REDESIGN
// Keeps the shutter-split exit but reimagines the HUD as a
// holographic 2036 boot console.
// ============================================================
function ImmersivePreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [bootLines, setBootLines] = useState([]);

  const statusMessages = [
    "INITIALIZING CORE SYSTEM TELEMETRY...",
    "LOADING NEURAL WEIGHTS & EMBEDDINGS...",
    "SYNCHRONIZING FASTAPI & AUTOMATION PIPELINES...",
    "ENGAGING 3D PERSPECTIVE ENGINE...",
    "CALIBRATING HOLOGRAPHIC INTERFACE...",
    "SYSTEM READY // INITIALIZING REVEAL",
  ];

  const bootSequence = [
    "[ OK ] kernel 6.7-saf-cyber // boot",
    "[ OK ] mounting /dev/neural0",
    "[ OK ] loading saf_core.ko",
    "[ OK ] starting ai_pipeline.service",
    "[ OK ] starting fastapi@2036",
    "[ OK ] establishing uplink // sat-28",
    "[ OK ] decrypting identity vault",
    "[ OK ] calibrating holo emitters",
    "[ OK ] rendering volumetric hud",
    "[ OK ] system online",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDone(true);
          return 100;
        }
        const increment = Math.floor(Math.random() * 2) + 1;
        const next = Math.min(prev + increment, 100);
        setStatusIndex(Math.min(Math.floor((next / 100) * statusMessages.length), statusMessages.length - 1));
        return next;
      });
    }, 32);

    return () => clearInterval(interval);
  }, []);

  // Reveal boot lines progressively based on progress
  useEffect(() => {
    const idx = Math.floor((progress / 100) * bootSequence.length);
    setBootLines(bootSequence.slice(0, idx));
  }, [progress]);

  const handleEnter = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => {
      onComplete();
    }, 850);
  }, [onComplete]);

  useEffect(() => {
    if (isDone) {
      const timer = setTimeout(() => {
        handleEnter();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isDone, handleEnter]);

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none select-none font-mono text-white">
      {/* Glitch Flash Banner on Split */}
      {isLeaving && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-ping duration-300">
          <span className="glitch-text clip-cyber border-2 border-milkGreen bg-black/90 px-8 py-3 font-chakra text-base font-black tracking-[0.3em] text-milkGreen shadow-glow" data-text="ACCESS GRANTED">
            ACCESS GRANTED // CORE #28 ONLINE
          </span>
        </div>
      )}

      {/* Center Seam Laser Line — grows visible with progress, splits on complete */}
      <div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-50 flex items-stretch pointer-events-none transition-all duration-500"
        style={{
          opacity: isLeaving ? 0 : Math.min(progress / 60, 1),
          width: isLeaving ? "0px" : `${Math.max(2, (progress / 100) * 6)}px`,
          boxShadow: `0 0 ${(progress / 100) * 40}px rgba(142, 255, 1, ${(progress / 100) * 0.6}), 0 0 ${(progress / 100) * 60}px rgba(139, 83, 254, ${(progress / 100) * 0.3})`
        }}
      >
        <div className="w-1/2 h-full bg-milkGreen" />
        <div className="w-1/2 h-full bg-electricYellow" />
      </div>

      {/* Left Cyber Shutter Panel */}
      <div
        className={`shutter-panel-left absolute top-0 bottom-0 left-0 w-1/2 bg-[#0a0e17] z-40 ${isLeaving ? "shutter-open-left" : "translate-x-0"}`}
        style={{
          borderRight: isLeaving ? "none" : `1px solid rgba(142, 255, 1, ${Math.min(progress / 80, 0.6)})`,
          boxShadow: isLeaving ? "0 0 80px rgba(142, 255, 1, 0.7)" : `0 0 ${(progress / 100) * 50}px rgba(142, 255, 1, ${(progress / 100) * 0.4})`
        }}
      />
      {/* Right Cyber Shutter Panel */}
      <div
        className={`shutter-panel-right absolute top-0 bottom-0 right-0 w-1/2 bg-[#0a0e17] z-40 ${isLeaving ? "shutter-open-right" : "translate-x-0"}`}
        style={{
          borderLeft: isLeaving ? "none" : `1px solid rgba(139, 83, 254, ${Math.min(progress / 80, 0.6)})`,
          boxShadow: isLeaving ? "0 0 80px rgba(139, 83, 254, 0.7)" : `0 0 ${(progress / 100) * 50}px rgba(139, 83, 254, ${(progress / 100) * 0.4})`
        }}
      />

      {/* Preloader Main Content Canvas */}
      <div
        className={`absolute inset-0 z-40 flex flex-col justify-between p-6 sm:p-12 transition-opacity duration-300 ${isLeaving ? "opacity-0" : "opacity-100"}`}
      >
        {/* Background Holo Grid & Scanning Line */}
        <div className="absolute inset-0 bg-holo-grid opacity-30 pointer-events-none" />
        <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-milkGreen/20 to-transparent" />
        <ParticleField count={18} />

        {/* Top Telemetry Header Bar — 2036 multi-column HUD */}
        <div className="relative z-10 grid grid-cols-3 items-center border-b border-white/10 pb-4 font-techmono text-[10px] tracking-widest text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-milkGreen animate-pulse shadow-glow" />
            <span className="font-bold text-white uppercase">SAF::BOOT v2036.1</span>
          </div>
          <div className="hidden sm:flex items-center justify-center gap-3 text-zinc-500">
            <span>LAT 12ms</span>
            <span className="text-zinc-700">|</span>
            <span>PORT 5173</span>
            <span className="text-zinc-700">|</span>
            <span className="text-electricYellow">AES-256</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <span className="hidden sm:inline">UPLINK</span>
            <Satellite size={12} className="text-milkGreen animate-pulse" />
            <span className="text-milkGreen font-bold">SYNC</span>
          </div>
        </div>

        {/* Center 3D Futuristic HUD Core */}
        <div className="relative z-10 my-auto grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          {/* LEFT: Boot log terminal */}
          <div className="order-2 lg:order-1 hidden lg:block">
            <div className="hud-frame relative max-w-sm border border-white/10 bg-black/60 p-4 backdrop-blur-md">
              <div className="mb-2 flex items-center justify-between font-techmono text-[9px] uppercase tracking-widest text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Terminal size={11} className="text-milkGreen" />
                  <span>boot.log</span>
                </span>
                <span className="cursor-blink text-milkGreen">_</span>
              </div>
              <div className="space-y-1 font-techmono text-[10px] leading-relaxed">
                {bootLines.map((line, i) => (
                  <div key={i} className="text-zinc-300 animate-fade-in">
                    <span className="text-milkGreen">{line.split("]")[0]}]</span>
                    <span>{line.split("]")[1]}</span>
                  </div>
                ))}
                {progress < 100 && (
                  <div className="text-zinc-500">
                    <span className="text-electricYellow">[ .. ]</span> loading module...
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CENTER: Rotating concentric HUD rings */}
          <div className="order-1 lg:order-2 relative grid h-52 w-52 place-items-center sm:h-64 sm:w-64 mx-auto">
            {/* Outer rotating reticle */}
            <div className="absolute inset-0 spin-18">
              <Radar size="100%" className="text-electricYellow/40" strokeWidth={1} />
            </div>
            {/* Dashed orbit ring */}
            <div className="absolute inset-3 rounded-full border border-dashed border-electricYellow/50 spin-12" />
            {/* Middle counter-rotating ring */}
            <div
              className="absolute inset-7 rounded-full border-2 border-milkGreen/60 border-t-transparent spin-rev-8"
              style={{ boxShadow: "0 0 30px rgba(142,255,1,0.3)" }}
            />
            {/* Innermost ring */}
            <div className="absolute inset-12 rounded-full border border-white/20 spin-18" />
            {/* Inner counter core */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-milkGreen/10 to-electricYellow/10 backdrop-blur-sm" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <span className="font-tektur text-5xl font-black tracking-tighter text-white sm:text-6xl text-holo-grad">
                {progress}%
              </span>
              <span className="mt-1 font-techmono text-[10px] tracking-widest text-milkGreen uppercase">
                {isDone ? "READY" : "LOADING"}
              </span>
              {/* Small live waveform */}
              <div className="mt-2 flex items-end gap-0.5 h-3">
                {[40, 75, 25, 90, 60, 30, 80].map((h, i) => (
                  <span
                    key={i}
                    className="wave-bar w-0.5 bg-milkGreen/70"
                    style={{ height: "100%", transformOrigin: "bottom", animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
            {/* Cross-hair markers */}
            <div className="absolute left-1/2 top-0 h-3 w-px bg-milkGreen -translate-x-1/2" />
            <div className="absolute left-1/2 bottom-0 h-3 w-px bg-milkGreen -translate-x-1/2" />
            <div className="absolute top-1/2 left-0 w-3 h-px bg-milkGreen -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-3 h-px bg-milkGreen -translate-y-1/2" />
          </div>

          {/* RIGHT: Status panel */}
          <div className="order-3 hidden lg:block">
            <div className="hud-frame relative max-w-sm border border-white/10 bg-black/60 p-4 backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between font-techmono text-[9px] uppercase tracking-widest text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Activity size={11} className="text-electricYellow" />
                  <span>sys.status</span>
                </span>
                <span className="text-milkGreen">ACTIVE</span>
              </div>
              <div className="space-y-2 font-techmono text-[10px]">
                <div className="flex justify-between">
                  <span className="text-zinc-500">CPU</span>
                  <span className="text-zinc-300">{Math.min(progress, 78)}%</span>
                </div>
                <div className="h-1 w-full bg-white/10">
                  <div className="h-full bg-milkGreen transition-all" style={{ width: `${Math.min(progress, 78)}%` }} />
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">MEM</span>
                  <span className="text-zinc-300">{Math.min(progress * 0.6, 42)}%</span>
                </div>
                <div className="h-1 w-full bg-white/10">
                  <div className="h-full bg-electricYellow transition-all" style={{ width: `${Math.min(progress * 0.6, 42)}%` }} />
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">NET</span>
                  <span className="text-zinc-300">{Math.min(progress * 1.2, 95)}%</span>
                </div>
                <div className="h-1 w-full bg-white/10">
                  <div className="h-full bg-milkGreen transition-all" style={{ width: `${Math.min(progress * 1.2, 95)}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center title block (visible on mobile + sm) */}
        <div className="relative z-10 mt-6 text-center lg:hidden">
          <h1
            className="glitch-text font-chakra text-2xl font-black uppercase tracking-[0.2em] text-white sm:text-4xl"
            data-text="SAJITH AHAMED FAKRUDEEN"
          >
            SAJITH AHAMED FAKRUDEEN
          </h1>
          <p className="mt-2 font-techmono text-[11px] tracking-widest text-electricYellow uppercase">
            AI / ML ENGINEER &amp; DEVELOPER
          </p>
        </div>

        {/* Bottom Telemetry Bar & Audio Equalizer */}
        <div className="relative z-10 flex flex-col gap-4 border-t border-white/10 pt-4 font-techmono text-[10px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-electricYellow animate-ping rounded-full" />
            <span className="uppercase tracking-widest">AUTHENTICATED USER // CHENNAI, INDIA</span>
          </div>

          {/* Center status line */}
          <div className="hidden md:flex items-center gap-2 border border-white/10 bg-black/60 px-4 py-1.5 backdrop-blur-md">
            <span className="text-milkGreen font-bold">&gt;</span>
            <span className="text-zinc-300 uppercase">{statusMessages[statusIndex]}</span>
            <span className="cursor-blink text-milkGreen">_</span>
          </div>

          {/* Equalizer Audio Wave Bars */}
          <div className="flex items-center gap-1">
            {[40, 75, 25, 90, 60, 30, 80, 45, 100, 50].map((h, i) => (
              <span
                key={i}
                className="w-1 bg-milkGreen/60 rounded-full transition-all duration-300"
                style={{
                  height: isDone ? "16px" : `${(h * (progress / 100)) / 4 + 4}px`,
                  animation: `pulse 1.2s ease-in-out infinite ${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar (full width at bottom) */}
        <div className="relative z-10 mt-3">
          <div className="relative h-1 w-full overflow-hidden bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-milkGreen via-electricYellow to-milkGreen transition-all duration-150 ease-out shadow-glow"
              style={{ width: `${progress}%` }}
            />
            {/* Tick markers */}
            <div className="absolute inset-0 flex justify-between">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className="w-px bg-black/40" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ============================================================
// SECTION TRANSITION DIVIDER — 2036 CYBERPUNK REDESIGN
// Bidirectional marquee tickers + animated holographic line
// ============================================================
function SectionTransitionDivider() {
  const leftItems = [
    "HERO → IDENTITY",
    "NODE HANDSHAKE",
    "DATA STREAM SYNCED",
    "CORE #28 ONLINE",
    "NEURAL LINK ACTIVE",
    "INFERENCE 1.2k/s",
  ];
  const rightItems = [
    "FASTAPI // 200 OK",
    "MODEL v4.2 LOADED",
    "LATENCY 12ms",
    "GPU 78%",
    "MEM 42%",
    "UPLINK STABLE",
  ];
  return (
    <div className="relative z-30 w-full overflow-hidden bg-carbon">
      {/* Top marquee */}
      <MarqueeTicker items={leftItems} yellow={false} reverse={false} speed={28} />
      {/* Center holographic line */}
      <div className="relative h-10 w-full border-y border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="laser-beam absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-milkGreen to-electricYellow opacity-80" />
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 font-techmono text-[11px] uppercase text-zinc-400 sm:px-8">
          <div className="flex items-center gap-2">
            <Zap size={13} className="text-milkGreen animate-pulse" />
            <span className="font-bold text-white tracking-widest">SYSTEM TRANSITION</span>
            <span className="hidden sm:inline text-zinc-600">// HERO → IDENTITY</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-zinc-500">
            <Activity size={13} className="text-electricYellow" />
            <span>STREAM CONNECTED</span>
            <span className="text-zinc-700">|</span>
            <span className="text-milkGreen">CORE #28</span>
          </div>
        </div>
      </div>
      {/* Bottom reverse marquee */}
      <MarqueeTicker items={rightItems} yellow={true} reverse={true} speed={32} />
    </div>
  );
}

// ============================================================
// ABOUT SECTION — 2036 CYBERPUNK REDESIGN
// "Identity Matrix" theme with hex-framed identity card,
// neural network decorations, and module stat cards.
// ============================================================
function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-carbon px-5 pt-14 pb-20 sm:px-8 sm:pt-16 sm:pb-24 lg:px-12 lg:pt-20 lg:pb-28">
      {/* Holographic grid background */}
      <div className="pointer-events-none absolute inset-0 bg-holo-grid opacity-25" />
      <ParticleField count={14} yellow={false} />
      <NeuralNetDecoration className="right-8 top-20 hidden opacity-60 lg:block" yellow={false} />

      <div className="relative mx-auto max-w-7xl">
        {/* Top telemetry strip */}
        <div className="reveal-on-scroll mb-8 flex flex-wrap items-center justify-between gap-4">
          <TelemetryStrip yellow={false} />
          <span className="font-techmono text-[10px] uppercase tracking-widest text-zinc-500">
            // SECTION 01 :: IDENTITY_MATRIX
          </span>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)] lg:items-start">
          <div className="reveal-left">
            <SectionLabel number="01">About / Identity</SectionLabel>
            <GlitchHeading
              as="h2"
              className="max-w-full font-tektur text-4xl font-black uppercase tracking-tighter leading-[0.95] text-white sm:text-6xl lg:text-7xl"
            >
              BUILDING BACKEND-FIRST AI PRODUCTS.
            </GlitchHeading>
            {/* Marquee under heading */}
            <div className="mt-5">
              <MarqueeTicker
                items={["PYTHON", "FASTAPI", "PYTORCH", "MONGODB", "DOCKER", "N8N", "POWER AUTOMATE"]}
                yellow={false}
                speed={36}
              />
            </div>
          </div>

          {/* Identity Card — hex framed */}
          <div className="reveal-right">
            <div className="hud-frame hud-frame-yellow relative clip-cyber border border-electricYellow/40 bg-black/60 p-6 backdrop-blur-xl">
              {/* Holo sweep */}
              <div className="holo-shimmer pointer-events-none absolute inset-0" />
              {/* Top row */}
              <div className="relative mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 font-techmono text-[10px] uppercase tracking-widest text-electricYellow">
                  <Fingerprint size={14} className="text-electricYellow" />
                  <span>IDENTITY FILE</span>
                </div>
                <div className="flex items-center gap-1.5 font-techmono text-[10px] uppercase tracking-widest text-milkGreen">
                  <span className="h-1.5 w-1.5 rounded-full bg-milkGreen animate-pulse" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Identity body */}
              <div className="relative">
                <p className="font-rajdhani text-lg leading-8 text-zinc-200 sm:text-xl sm:leading-9">
                  Sajith Ahamed Fakrudeen, B.Tech AI &amp; ML student at Saveetha
                  Engineering College, Chennai. Specializes in ML pipelines, REST API
                  architectures with FastAPI, and automated workflows.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 font-techmono text-[10px] uppercase tracking-widest">
                  <div className="border border-white/10 bg-white/5 p-3">
                    <span className="block text-zinc-500">LOCATION</span>
                    <span className="mt-1 flex items-center gap-1.5 text-milkGreen">
                      <MapPin size={11} />
                      <span className="text-zinc-200">Chennai, IN</span>
                    </span>
                  </div>
                  <div className="border border-white/10 bg-white/5 p-3">
                    <span className="block text-zinc-500">STATUS</span>
                    <span className="mt-1 flex items-center gap-1.5 text-electricYellow">
                      <span className="h-1.5 w-1.5 rounded-full bg-electricYellow animate-pulse" />
                      <span className="text-zinc-200">OPEN TO WORK</span>
                    </span>
                  </div>
                  <div className="border border-white/10 bg-white/5 p-3">
                    <span className="block text-zinc-500">CORE ID</span>
                    <span className="mt-1 text-milkGreen">SAF-28-2036</span>
                  </div>
                  <div className="border border-white/10 bg-white/5 p-3">
                    <span className="block text-zinc-500">CLEARANCE</span>
                    <span className="mt-1 text-electricYellow">LVL 4 // ENGINEER</span>
                  </div>
                </div>
              </div>

              {/* Bottom row data stream */}
              <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-3 font-techmono text-[9px] uppercase tracking-widest text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Lock size={10} className="text-milkGreen" />
                  <span>ENCRYPTED CHANNEL</span>
                </span>
                <span>SIG :: 0x7af3...28e1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Module stat cards */}
        <div className="mx-auto mt-16 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ code, label, value, icon: Icon, copy, accent }, idx) => {
            const isYellow = accent === "electricYellow";
            const badgeColor = isYellow ? "text-electricYellow" : "text-milkGreen";
            const iconBorder = isYellow
              ? "border-electricYellow/40 bg-electricYellow/10 text-electricYellow group-hover:bg-electricYellow group-hover:text-black shadow-glow-yellow"
              : "border-milkGreen/40 bg-milkGreen/10 text-milkGreen group-hover:bg-milkGreen group-hover:text-black shadow-glow";
            const barColor = isYellow ? "bg-electricYellow" : "bg-milkGreen";
            // Fake utilization value derived from index for visual variety
            const utilization = [82, 67, 91, 74][idx];

            return (
              <GlassPanel key={label} delay={idx * 120} yellowHover={isYellow} className="group hover-3d p-7">
                <div className="mb-6 flex items-center justify-between">
                  <span className={`font-techmono text-xs font-bold uppercase tracking-widest ${badgeColor}`}>
                    {code} // {label}
                  </span>
                  <span className={`grid h-11 w-11 place-items-center border transition duration-300 ${iconBorder}`}>
                    <Icon size={20} />
                  </span>
                </div>
                <h3 className="font-chakra text-2xl font-bold uppercase tracking-tight text-white">
                  {value}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400 font-rajdhani">
                  {copy}
                </p>

                {/* Utilization bar (fake telemetry) */}
                <div className="mt-6">
                  <div className="mb-1.5 flex items-center justify-between font-techmono text-[9px] uppercase tracking-widest text-zinc-500">
                    <span>UTILIZATION</span>
                    <span className={badgeColor}>{utilization}%</span>
                  </div>
                  <div className="relative h-1 w-full overflow-hidden bg-white/10">
                    <div
                      className={`data-fill h-full ${barColor}`}
                      style={{ ["--data-width"]: `${utilization}%` }}
                    />
                  </div>
                </div>

                {/* Bottom mini-telemetry */}
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 font-techmono text-[9px] uppercase tracking-widest text-zinc-600">
                  <span>NODE #{idx + 1}</span>
                  <span className="flex items-center gap-1">
                    <span className={`h-1 w-1 rounded-full ${barColor} animate-pulse`} />
                    ACTIVE
                  </span>
                </div>
              </GlassPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PROJECT CARD — 2036 CYBERPUNK REDESIGN
// Holographic floating data slab with neural-link tag chains,
// live deployment status, glitch-on-hover title.
// ============================================================
function ProjectCard({ project, featured, delay }) {
  const Icon = project.icon;
  const isYellow = project.accent === "electricYellow";
  const idColor = isYellow ? "text-electricYellow" : "text-milkGreen";
  const barColor = isYellow ? "bg-electricYellow" : "bg-milkGreen";
  const btnBg = isYellow
    ? "border-electricYellow bg-electricYellow text-black shadow-glow-yellow hover:bg-white"
    : "border-milkGreen bg-milkGreen text-black shadow-glow hover:bg-white";
  const iconBorder = isYellow
    ? "border-electricYellow/30 bg-electricYellow/10 text-electricYellow group-hover:border-electricYellow group-hover:bg-electricYellow group-hover:text-black shadow-glow-yellow"
    : "border-milkGreen/30 bg-milkGreen/10 text-milkGreen group-hover:border-milkGreen group-hover:bg-milkGreen group-hover:text-black shadow-glow";

  return (
    <GlassPanel
      delay={delay}
      yellowHover={isYellow}
      className={`group hover-3d relative flex h-full flex-col p-7 ${featured ? "lg:col-span-2" : ""}`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="mb-3 flex items-center gap-2">
            <span className={`font-techmono text-xs font-bold uppercase tracking-widest ${idColor}`}>
              {project.id}
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span className="inline-flex items-center gap-1.5 text-[10px] font-techmono uppercase tracking-widest text-zinc-400">
              <Sparkles size={11} className={idColor} />
              FEATURED SYSTEM
            </span>
          </div>
          <h3
            data-text={project.name}
            className="glitch-hover font-chakra text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl relative"
          >
            {project.name}
          </h3>
          {/* Sub-line: live status */}
          <div className="mt-2 flex items-center gap-3 font-techmono text-[9px] uppercase tracking-widest text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${barColor} neural-node`} />
              <span className={idColor}>DEPLOYED</span>
            </span>
            <span className="text-zinc-700">|</span>
            <span>STATUS 200</span>
            <span className="text-zinc-700">|</span>
            <span>UPTIME 99.9%</span>
          </div>
        </div>

        <span className={`grid h-14 w-14 shrink-0 place-items-center border transition duration-300 ${iconBorder} float-y`}>
          <Icon size={26} />
        </span>
      </div>

      <p className="mt-6 flex-1 text-base leading-7 text-zinc-300 font-rajdhani">
        {project.description}
      </p>

      {/* ML Stack — neural-link chips */}
      {project.mlStack.length > 0 && (
        <div className="mt-7">
          <div className="mb-3 flex items-center gap-2 font-techmono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            <Network size={11} className={idColor} />
            <span>// ML STACK &amp; MODELS</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.mlStack.map((item, index) => {
              const tagYellow = index % 2 === 1;
              return (
                <span
                  key={item}
                  className={`clip-cyber-tag border px-3 py-1.5 font-techmono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
                    tagYellow
                      ? "border-electricYellow/40 bg-electricYellow/10 text-electricYellow"
                      : "border-milkGreen/40 bg-milkGreen/10 text-milkGreen"
                  }`}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Core stack — command-line chips */}
      <div className="mt-5">
        <div className="mb-3 flex items-center gap-2 font-techmono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <FileCode2 size={11} className={idColor} />
          <span>// CORE INFRASTRUCTURE STACK</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((item) => (
            <span
              key={item}
              className="border border-white/10 bg-black/40 px-3 py-1.5 font-techmono text-[11px] tracking-wider text-zinc-300"
            >
              <span className="text-zinc-600">$</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: CTAs */}
      <div className="mt-8 flex flex-wrap gap-3 pt-4 border-t border-white/10">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className={`clip-cyber-tag inline-flex items-center gap-2 border px-5 py-2.5 font-techmono text-[11px] font-bold uppercase tracking-widest transition hover:scale-105 ${btnBg}`}
          >
            <span>Live Deploy</span>
            <ExternalLink size={14} strokeWidth={2.5} />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`clip-cyber-tag inline-flex items-center gap-2 border border-white/15 bg-white/5 px-5 py-2.5 font-techmono text-[11px] font-bold uppercase tracking-widest text-white transition hover:scale-105 ${
              isYellow ? "hover:border-electricYellow/70 hover:text-electricYellow" : "hover:border-milkGreen/70 hover:text-milkGreen"
            }`}
          >
            <span>Repo</span>
            <Github size={14} strokeWidth={2.5} />
          </a>
        )}
        {!project.live && !project.github && (
          <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-5 py-2.5 font-techmono text-[11px] font-bold uppercase tracking-widest text-zinc-500">
            <Lock size={13} />
            <span>Internal System</span>
          </span>
        )}
      </div>
    </GlassPanel>
  );
}

// ============================================================
// PROJECTS SECTION — 2036 CYBERPUNK REDESIGN
// ============================================================
function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-panel px-5 py-28 sm:px-8 lg:px-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-holo-grid opacity-20" />
      <ParticleField count={10} yellow={true} />
      <NeuralNetDecoration className="left-8 top-32 hidden opacity-50 lg:block" yellow={true} />

      <div className="relative mx-auto max-w-7xl">
        <div className="reveal-on-scroll mb-8 flex flex-wrap items-center justify-between gap-4">
          <TelemetryStrip yellow={true} />
          <span className="font-techmono text-[10px] uppercase tracking-widest text-zinc-500">
            // SECTION 02 :: SYSTEMS_CATALOG
          </span>
        </div>

        <div className="reveal-on-scroll mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="02" yellow>Featured Projects</SectionLabel>
            <GlitchHeading
              as="h2"
              className="max-w-4xl font-tektur text-4xl font-black uppercase tracking-tighter leading-[0.95] text-white sm:text-6xl lg:text-7xl"
            >
              SYSTEMS WITH SPEED &amp; PRECISION.
            </GlitchHeading>
          </div>
          <p className="max-w-md text-sm leading-6 font-rajdhani text-zinc-400">
            Glassmorphic interfaces, high-throughput API endpoints, and production machine learning models built for utility.
          </p>
        </div>

        {/* Project IDs marquee */}
        <div className="mb-10">
          <MarqueeTicker
            items={projects.map((p) => `${p.id} :: ${p.name.toUpperCase()}`)}
            yellow={true}
            speed={26}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} featured={false} delay={index * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}


// ============================================================
// GALLERY SECTION — 2036 CYBERPUNK REDESIGN
// Holographic film-strip carousel with live AI vision overlay,
// scanline reveals, and frame-analysis telemetry.
// ============================================================
const galleryImages = [
  { src: galleryIITLogo, caption: "At IIT Madras", tag: "Campus Visit", object: "LANDMARK", confidence: 96 },
  { src: galleryCoding, caption: "IBM Z Datathon", tag: "Hackathon", object: "WORKSTATION", confidence: 94 },
  { src: galleryTeam, caption: "Datathon Team", tag: "Team", object: "PERSONS x4", confidence: 99 },
  { src: galleryPresentation, caption: "Research Presentation", tag: "Conference", object: "PRESENTATION", confidence: 91 },
  { src: galleryMountain, caption: "Mountain Viewpoint", tag: "Travel", object: "LANDSCAPE", confidence: 97 },
  { src: galleryIITGate, caption: "IIT Madras Gate", tag: "Campus", object: "ARCHITECTURE", confidence: 93 }
];

function GallerySection() {
  const [active, setActive] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const total = galleryImages.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [total]);

  const goNext = () => setActive((prev) => (prev + 1) % total);
  const goPrev = () => setActive((prev) => (prev - 1 + total) % total);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diffX = touchStartX - e.changedTouches[0].clientX;
    if (diffX > 40) goNext();
    else if (diffX < -40) goPrev();
    setTouchStartX(null);
  };

  const isYellow = active % 2 === 1;
  const tagColor = isYellow
    ? "text-electricYellow border-electricYellow/50 bg-electricYellow/10 shadow-glow-yellow"
    : "text-milkGreen border-milkGreen/50 bg-milkGreen/10 shadow-glow";
  const barColor = isYellow ? "bg-electricYellow shadow-glow-yellow" : "bg-milkGreen shadow-glow";
  const borderLeftColor = isYellow ? "border-electricYellow/60" : "border-milkGreen/60";

  return (
    <section className="relative bg-carbon px-4 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-holo-grid opacity-20" />
      <ParticleField count={8} yellow={!isYellow} />

      <div className="relative mx-auto max-w-7xl">
        {/* Top telemetry */}
        <div className="reveal-on-scroll mb-8 flex flex-wrap items-center justify-between gap-4">
          <TelemetryStrip yellow={isYellow} />
          <span className="font-techmono text-[10px] uppercase tracking-widest text-zinc-500">
            // SECTION 02.5 :: MEMORY_ARCHIVE
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="reveal-on-scroll">
            <SectionLabel number="02.5" yellow={isYellow}>Gallery / Moments</SectionLabel>
            <GlitchHeading
              as="h2"
              className="font-tektur text-3xl font-black uppercase tracking-tighter leading-[0.95] text-white sm:text-5xl lg:text-6xl"
            >
              BEYOND THE SCREEN.
            </GlitchHeading>
            <p className="mt-4 max-w-md text-sm leading-6 font-rajdhani text-zinc-400">
              Hackathons, campus visits, research conferences, and the places that shaped the journey.
            </p>

            {/* Active frame metadata */}
            <div className={`mt-8 border-l-2 pl-5 transition-colors duration-500 ${borderLeftColor}`}>
              <span className={`inline-flex items-center gap-1.5 border px-2.5 py-1 font-techmono text-[10px] font-bold uppercase tracking-widest backdrop-blur-md mb-2 transition-colors duration-500 ${tagColor}`}>
                <Camera size={10} />
                {galleryImages[active].tag}
              </span>
              <p className="font-chakra text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                {galleryImages[active].caption}
              </p>
              {/* AI vision analysis readout */}
              <div className="mt-3 grid grid-cols-2 gap-2 font-techmono text-[10px] uppercase tracking-widest">
                <div className="border border-white/10 bg-black/40 px-2 py-1.5">
                  <span className="block text-zinc-500">OBJECT</span>
                  <span className={isYellow ? "text-electricYellow" : "text-milkGreen"}>
                    {galleryImages[active].object}
                  </span>
                </div>
                <div className="border border-white/10 bg-black/40 px-2 py-1.5">
                  <span className="block text-zinc-500">CONFIDENCE</span>
                  <span className={isYellow ? "text-electricYellow" : "text-milkGreen"}>
                    {galleryImages[active].confidence}%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="clip-cyber-tag grid h-11 w-11 place-items-center border border-white/15 bg-white/5 text-white transition hover:border-milkGreen hover:bg-milkGreen hover:text-black"
              >
                <ChevronDown size={18} className="rotate-90" />
              </button>
              <div className="flex items-center gap-2">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? i % 2 === 1
                          ? "w-8 bg-electricYellow shadow-glow-yellow"
                          : "w-8 bg-milkGreen shadow-glow"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="clip-cyber-tag grid h-11 w-11 place-items-center border border-white/15 bg-white/5 text-white transition hover:border-electricYellow hover:bg-electricYellow hover:text-black"
              >
                <ChevronDown size={18} className="-rotate-90" />
              </button>
              <span className="ml-2 font-techmono text-xs text-zinc-500 uppercase tracking-widest">
                FRAME {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div
            className="reveal-on-scroll relative flex items-center justify-center pt-6 lg:pt-0"
            style={{ perspective: "1200px", height: "460px" }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Decorative HUD rings behind carousel */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 spin-18 opacity-20">
              <div className="h-[500px] w-[500px] rounded-full border border-dashed border-milkGreen/40" />
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 spin-rev-14 opacity-20">
              <div className="h-[400px] w-[400px] rounded-full border border-electricYellow/40" />
            </div>

            {galleryImages.map((image, i) => {
              const offset = (i - active + total) % total;
              const isActive = offset === 0;
              const isBehind1 = offset === 1;
              const isBehind2 = offset === 2;
              const isVisible = offset <= 2;
              const cardYellow = i % 2 === 1;

              return (
                <div
                  key={image.caption}
                  className="absolute w-[275px] h-[375px] sm:w-[350px] sm:h-[450px] cursor-pointer overflow-hidden border border-white/10 bg-black/50 backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  style={{
                    zIndex: isActive ? 30 : isBehind1 ? 20 : isBehind2 ? 10 : 0,
                    transform: isActive
                      ? "translateZ(0px) translateX(0px) rotateY(0deg) scale(1)"
                      : isBehind1
                      ? "translateZ(-60px) translateX(30px) rotateY(-6deg) scale(0.92)"
                      : isBehind2
                      ? "translateZ(-120px) translateX(60px) rotateY(-12deg) scale(0.84)"
                      : "translateZ(-180px) translateX(90px) rotateY(-18deg) scale(0.76)",
                    opacity: isVisible ? (isActive ? 1 : isBehind1 ? 0.6 : 0.3) : 0,
                    pointerEvents: isActive ? "auto" : "none",
                    filter: isActive ? "none" : `blur(${offset * 1.5}px)`,
                    boxShadow: isActive
                      ? cardYellow
                        ? "0 0 40px rgba(139, 83, 254, 0.4), 0 20px 60px rgba(0,0,0,0.5)"
                        : "0 0 40px rgba(142, 255, 1, 0.4), 0 20px 60px rgba(0,0,0,0.5)"
                      : "0 10px 30px rgba(0,0,0,0.3)",
                  }}
                  onClick={isActive ? goNext : undefined}
                >
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  {/* CRT scanlines on active card */}
                  {isActive && <div className="crt-overlay pointer-events-none absolute inset-0" />}
                  {/* Holographic sweep on active */}
                  {isActive && <div className="holo-shimmer pointer-events-none absolute inset-0" />}

                  {/* Top-left HUD tag */}
                  {isActive && (
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                      <span className={`inline-flex items-center gap-1.5 border px-2.5 py-1 font-techmono text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${tagColor}`}>
                        <Camera size={10} />
                        {image.tag}
                      </span>
                      {/* Live AI vision label */}
                      <span className="inline-flex items-center gap-1.5 border border-white/20 bg-black/70 px-2 py-0.5 font-techmono text-[9px] uppercase tracking-widest text-zinc-300 backdrop-blur-md">
                        <Crosshair size={9} className={cardYellow ? "text-electricYellow" : "text-milkGreen"} />
                        ANALYZING::{image.object}
                      </span>
                    </div>
                  )}

                  {/* Top-right frame number */}
                  {isActive && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="font-techmono text-[10px] uppercase tracking-widest text-white border border-white/20 bg-black/70 px-2 py-1 backdrop-blur-md">
                        #{String(i + 1).padStart(3, "0")}
                      </span>
                    </div>
                  )}

                  {/* Bottom caption block */}
                  {isActive && (
                    <div className="absolute bottom-0 inset-x-0 p-5">
                      <p className="font-chakra text-lg sm:text-xl font-bold uppercase tracking-tight text-white drop-shadow-lg">
                        {image.caption}
                      </p>
                      <div className={`mt-2 h-0.5 w-16 ${barColor}`} />
                      {/* Confidence bar */}
                      <div className="mt-2 flex items-center gap-2">
                        <span className="font-techmono text-[9px] uppercase tracking-widest text-zinc-400">
                          CONF
                        </span>
                        <div className="h-1 flex-1 bg-white/10">
                          <div
                            className={`h-full ${barColor}`}
                            style={{ width: `${image.confidence}%` }}
                          />
                        </div>
                        <span className={`font-techmono text-[9px] ${cardYellow ? "text-electricYellow" : "text-milkGreen"}`}>
                          {image.confidence}%
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// EXPERIENCE SECTION — 2036 CYBERPUNK REDESIGN
// Timeline as a blockchain-style commit graph with hash IDs
// and credential chips for certifications.
// ============================================================
function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-carbon px-5 py-28 sm:px-8 lg:px-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-holo-grid opacity-20" />
      <ParticleField count={10} yellow={false} />

      <div className="relative mx-auto max-w-7xl">
        {/* Top telemetry */}
        <div className="reveal-on-scroll mb-8 flex flex-wrap items-center justify-between gap-4">
          <TelemetryStrip yellow={false} />
          <span className="font-techmono text-[10px] uppercase tracking-widest text-zinc-500">
            // SECTION 03 :: PROVENANCE_LEDGER
          </span>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 items-start">
          {/* LEFT: Industry Experience — blockchain-style timeline */}
          <div className="reveal-left hud-frame relative flex flex-col justify-start h-full border border-white/10 bg-black/40 p-7 backdrop-blur-md sm:p-9 clip-cyber">
            <div className="holo-shimmer pointer-events-none absolute inset-0" />
            <div className="relative">
              <SectionLabel number="03">Professional Path</SectionLabel>
              <GlitchHeading
                as="h2"
                className="font-chakra text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl"
              >
                INDUSTRY EXPERIENCE.
              </GlitchHeading>

              {/* Timeline */}
              <div className="relative mt-8 border-l-2 border-white/15 pl-6 space-y-8">
                {/* Animated data flow indicator */}
                <div className="pointer-events-none absolute -left-[5px] top-0 h-3 w-3">
                  <span className="block h-full w-full rounded-full bg-milkGreen shadow-glow animate-pulse" />
                </div>

                {experiences.map((exp, idx) => {
                  const isYellow = exp.accent === "electricYellow";
                  const dotColor = isYellow ? "bg-electricYellow shadow-glow-yellow" : "bg-milkGreen shadow-glow";
                  const roleColor = isYellow ? "text-electricYellow" : "text-milkGreen";
                  // Fake "block hash" for the cyberpunk blockchain aesthetic
                  const hash = `0x${(idx * 1234567 + 0xabc).toString(16)}...${(idx * 9876 + 0xdef).toString(16)}`;

                  return (
                    <div key={exp.company} className="relative group">
                      <span className={`absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-carbon ${dotColor} neural-node`} />

                      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-chakra text-lg font-bold uppercase text-white">
                          {exp.role}
                        </h3>
                        <span className="clip-cyber-tag border border-white/10 bg-white/5 px-2.5 py-0.5 font-techmono text-[10px] uppercase tracking-widest text-zinc-400">
                          {exp.period}
                        </span>
                      </div>

                      <p className={`font-techmono text-xs font-bold uppercase tracking-widest ${roleColor}`}>
                        {exp.company} // {exp.location}
                      </p>

                      {exp.highlights ? (
                        <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-zinc-300 font-rajdhani">
                          {exp.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5">
                              <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${isYellow ? "bg-electricYellow" : "bg-milkGreen"} animate-pulse`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-3 text-sm leading-6 text-zinc-300 font-rajdhani">
                          {exp.details}
                        </p>
                      )}

                      {exp.certificate && (
                        <a
                          href={exp.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-3 inline-flex items-center gap-1.5 border border-white/10 bg-white/5 px-3 py-1 font-techmono text-[10px] uppercase tracking-widest ${roleColor} hover:bg-white/10 hover:border-white/30 transition clip-cyber-tag no-underline`}
                        >
                          <ExternalLink size={10} />
                          <span>View Certificate</span>
                        </a>
                      )}

                      {/* Block hash + status row */}
                      <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 font-techmono text-[9px] uppercase tracking-widest text-zinc-500">
                        <span className="flex items-center gap-1.5">
                          <GitBranch size={10} className={roleColor} />
                          <span>BLOCK {hash}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className={`h-1 w-1 rounded-full ${dotColor} animate-pulse`} />
                          <span>VERIFIED</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Certifications — credential chips */}
          <div className="reveal-right hud-frame hud-frame-yellow relative flex flex-col justify-start h-full border border-white/10 bg-black/40 p-7 backdrop-blur-md sm:p-9 clip-cyber">
            <div className="holo-shimmer pointer-events-none absolute inset-0" />
            <div className="relative">
              <SectionLabel number="04" yellow>Verified Skills</SectionLabel>
              <GlitchHeading
                as="h2"
                className="font-chakra text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl"
              >
                CERTIFICATIONS &amp; ACCREDITATIONS.
              </GlitchHeading>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {certifications.map(({ title, issuer, icon: Icon, accent, link }, idx) => {
                  const isYellow = accent === "electricYellow";
                  const iconClass = isYellow
                    ? "border-electricYellow/40 bg-electricYellow/10 text-electricYellow group-hover:bg-electricYellow group-hover:text-black shadow-glow-yellow"
                    : "border-milkGreen/40 bg-milkGreen/10 text-milkGreen group-hover:bg-milkGreen group-hover:text-black shadow-glow";
                  const credId = `CRED-${String(idx + 1).padStart(3, "0")}-${idx % 2 === 0 ? "A" : "B"}`;

                  const cardContent = (
                    <>
                      <div className="mb-4 flex items-center justify-between">
                        <span className={`grid h-10 w-10 place-items-center border transition ${iconClass}`}>
                          <Icon size={18} />
                        </span>
                        <div className="flex items-center gap-2">
                          {link && <ExternalLink size={13} className={isYellow ? "text-electricYellow/60" : "text-milkGreen/60"} />}
                          <Award size={16} className={isYellow ? "text-electricYellow" : "text-milkGreen"} />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-chakra text-sm font-bold uppercase text-white leading-tight">
                          {title}
                        </h4>
                        <p className="mt-1 font-techmono text-[10px] uppercase tracking-widest text-zinc-400">
                          {issuer}
                        </p>
                      </div>

                      {/* Credential footer */}
                      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-2 font-techmono text-[9px] uppercase tracking-widest text-zinc-500">
                        <span className="flex items-center gap-1">
                          <ShieldCheck size={9} className={isYellow ? "text-electricYellow" : "text-milkGreen"} />
                          <span>{credId}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <span className={`h-1 w-1 rounded-full ${isYellow ? "bg-electricYellow" : "bg-milkGreen"} animate-pulse`} />
                          VERIFIED
                        </span>
                      </div>
                    </>
                  );

                  const cardClassName = `group relative clip-cyber-sm flex flex-col justify-between border border-white/10 bg-black/40 p-5 transition duration-300 hover-3d ${
                    isYellow ? "hover:border-electricYellow/70 hover:bg-electricYellow/10" : "hover:border-milkGreen/70 hover:bg-milkGreen/10"
                  }`;

                  return link ? (
                    <a
                      key={title}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cardClassName} cursor-pointer no-underline`}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div
                      key={title}
                      className={cardClassName}
                    >
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED ACHIEVEMENT BADGE — Full-width showcase */}
        <div className="reveal-on-scroll mt-10">
          <div className="relative overflow-hidden border border-yellow-500/30 bg-black/60 backdrop-blur-xl clip-cyber"
               style={{ boxShadow: '0 0 40px rgba(234, 179, 8, 0.12), inset 0 0 60px rgba(234, 179, 8, 0.03)' }}>
            {/* Animated corner brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-500/60" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-500/60" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-yellow-500/60" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-500/60" />

            {/* Holographic shimmer overlay */}
            <div className="holo-shimmer pointer-events-none absolute inset-0" />

            {/* Scanning line animation */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent animate-pulse" style={{ top: '30%' }} />
            </div>

            <div className="relative flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-10 lg:p-12">
              {/* Badge Image — with glow effect */}
              <div className="relative flex-shrink-0 w-full sm:w-[280px] lg:w-[320px]">
                {/* Outer glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-br from-yellow-500/20 via-transparent to-yellow-500/20 rounded-lg blur-md" />
                <div className="relative overflow-hidden border-2 border-yellow-500/40 rounded-lg"
                     style={{ boxShadow: '0 0 25px rgba(234, 179, 8, 0.2)' }}>
                  <img
                    src={quodeBadge}
                    alt="QuodeSchool Hall of Achievement — Titans 2026 Cohort — Bridging The Gap (BTG) Internship Program"
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Scan overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Achievement Data Panel */}
              <div className="flex-1 text-center sm:text-left">
                <div className="mb-3 flex items-center justify-center gap-2 sm:justify-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse" />
                  <span className="font-techmono text-[10px] uppercase tracking-[0.25em] text-yellow-500/80">
                    Featured Achievement
                  </span>
                </div>

                <h3 className="font-chakra text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Hall of{" "}
                  <span className="text-yellow-500">Achievement</span>
                </h3>

                <p className="mt-2 font-techmono text-xs uppercase tracking-widest text-yellow-500/70">
                  QuodeSchool · Titans 2026 Cohort
                </p>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300 font-rajdhani max-w-lg">
                  Recognized for excellence in the <span className="font-bold text-white">Bridging The Gap (BTG) Internship Program</span> — demonstrating dedication, discipline, and real-world readiness in AI and software development.
                </p>

                {/* Stat chips */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                  {["Real Learning", "Real Impact", "Real Readiness"].map((label) => (
                    <span
                      key={label}
                      className="clip-cyber-tag border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 font-techmono text-[10px] uppercase tracking-widest text-yellow-500"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Credential footer */}
                <div className="mt-6 flex items-center justify-center gap-4 border-t border-white/10 pt-4 font-techmono text-[9px] uppercase tracking-widest text-zinc-500 sm:justify-start">
                  <span className="flex items-center gap-1.5">
                    <Award size={11} className="text-yellow-500" />
                    <span>TITANS-2026</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={9} className="text-yellow-500" />
                    <span>SAVEETHA ENGINEERING COLLEGE</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-yellow-500 animate-pulse" />
                    <span>VERIFIED</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ============================================================
// CONTACT SECTION — 2036 CYBERPUNK REDESIGN
// "Transmission Console" theme: terminal-style form, signal
// waveform, channel-frequency socials, holographic HUD frames.
// ============================================================
function ContactSection() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSendStatus(null);
    setErrorMessage("");

    const publicKey = "rTMWyDB9VCPKpiGb_";
    const serviceId = "service_1qslr7p";
    const templateId = "template_bo6uz0m";

    const templateParams = {
      name: formState.name,
      from_name: formState.name,
      email: formState.email,
      from_email: formState.email,
      reply_to: formState.email,
      message: formState.message,
      subject: "Portfolio Message from " + formState.name
    };

    try {
      emailjs.init(publicKey);
      const res = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log("EmailJS Success:", res);
      setSendStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      const errText = error?.text || error?.message || (typeof error === "string" ? error : "Transmission Failed");
      setErrorMessage(errText);
      setSendStatus("error");
    } finally {
      setSending(false);
    }
  };

  const socials = [
    {
      label: "GitHub Profile",
      handle: "@Sajith-28",
      href: "https://github.com/Sajith-28",
      icon: Github,
      accent: "milkGreen",
      freq: "433.92 MHz"
    },
    {
      label: "LinkedIn Professional",
      handle: "sajith-ahamed-fakrudeen",
      href: "https://www.linkedin.com/in/sajith-ahamed-fakrudeen-8997902b2",
      icon: Linkedin,
      accent: "electricYellow",
      freq: "868.30 MHz"
    },
    {
      label: "Instagram Feed",
      handle: "@sajiiboyy",
      href: "https://www.instagram.com/sajiiboyy/",
      icon: Instagram,
      accent: "milkGreen",
      freq: "915.00 MHz"
    }
  ];

  return (
    <footer id="contact" className="relative overflow-hidden bg-panel px-5 py-28 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-carbon-grid bg-[length:80px_80px] opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-holo-grid opacity-15" />
      <ParticleField count={16} yellow={true} />
      <NeuralNetDecoration className="right-8 bottom-32 hidden opacity-40 lg:block" yellow={true} />

      <div className="relative mx-auto max-w-7xl">
        {/* Top telemetry */}
        <div className="reveal-on-scroll mb-8 flex flex-wrap items-center justify-between gap-4">
          <TelemetryStrip yellow={true} />
          <span className="font-techmono text-[10px] uppercase tracking-widest text-zinc-500">
            // SECTION 05 :: TRANSMISSION_CONSOLE
          </span>
        </div>

        <div className="reveal-on-scroll">
          <SectionLabel number="05" yellow>Contact / Connect</SectionLabel>

          <GlitchHeading
            as="h2"
            className="max-w-5xl font-tektur text-5xl font-black uppercase tracking-tighter leading-[0.9] text-white sm:text-7xl lg:text-9xl text-holo-grad"
          >
            LET'S BUILD SOMETHING.
          </GlitchHeading>

          {/* Signal waveform under heading */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-end gap-1 h-8">
              {[40, 70, 30, 90, 55, 75, 35, 80, 45, 95, 50, 65, 25, 85, 40, 70].map((h, i) => (
                <span
                  key={i}
                  className="wave-bar w-1 bg-electricYellow/70"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * 0.08}s`,
                  }}
                />
              ))}
            </div>
            <span className="font-techmono text-[10px] uppercase tracking-widest text-zinc-500">
              SIGNAL // <span className="text-electricYellow">STRONG</span>
            </span>
          </div>
        </div>

        {/* Contact Form + Info Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Contact Form — Terminal Console */}
          <div className="reveal-on-scroll hud-frame hud-frame-yellow relative clip-cyber border border-white/10 bg-black/60 p-7 backdrop-blur-xl sm:p-9">
            <div className="holo-shimmer pointer-events-none absolute inset-0" />
            {/* Terminal title bar */}
            <div className="relative mb-6 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-electricYellow animate-pulse shadow-glow-yellow" />
                <span className="font-techmono text-xs font-bold uppercase tracking-widest text-electricYellow">
                  // transmission_form.exe
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-milkGreen/60" />
                <span className="h-2 w-2 rounded-full bg-electricYellow/60" />
                <span className="h-2 w-2 rounded-full bg-red-500/60" />
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 flex items-center gap-1.5 font-techmono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  <span className="text-electricYellow">$</span>
                  <span>ENTER_YOUR_NAME</span>
                  <span className="cursor-blink text-milkGreen">_</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="> e.g. John Doe"
                  className="clip-cyber-sm w-full border border-white/15 bg-black/40 px-4 py-3.5 font-techmono text-sm font-medium text-white placeholder-zinc-600 outline-none backdrop-blur-md transition-all duration-300 focus:border-milkGreen/70 focus:bg-white/[0.07] focus:shadow-glow"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 flex items-center gap-1.5 font-techmono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  <span className="text-electricYellow">$</span>
                  <span>ENTER_EMAIL_ADDRESS</span>
                  <span className="cursor-blink text-milkGreen">_</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="> your@email.com"
                  className="clip-cyber-sm w-full border border-white/15 bg-black/40 px-4 py-3.5 font-techmono text-sm font-medium text-white placeholder-zinc-600 outline-none backdrop-blur-md transition-all duration-300 focus:border-milkGreen/70 focus:bg-white/[0.07] focus:shadow-glow"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 flex items-center gap-1.5 font-techmono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  <span className="text-electricYellow">$</span>
                  <span>COMPOSE_TRANSMISSION</span>
                  <span className="cursor-blink text-milkGreen">_</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="> Type your message here..."
                  className="clip-cyber-sm w-full resize-none border border-white/15 bg-black/40 px-4 py-3.5 font-techmono text-sm font-medium text-white placeholder-zinc-600 outline-none backdrop-blur-md transition-all duration-300 focus:border-electricYellow/70 focus:bg-white/[0.07] focus:shadow-glow-yellow"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={sending}
                  className={`clip-cyber-tag group inline-flex items-center justify-center gap-3 border-2 px-8 py-4 font-techmono text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 ${
                    sending
                      ? "border-zinc-500 bg-zinc-800 text-zinc-400 cursor-wait"
                      : "border-electricYellow bg-electricYellow text-black shadow-glow-yellow hover:bg-white"
                  }`}
                >
                  {sending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-transparent" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Satellite size={18} strokeWidth={2.5} />
                      <span>SEND TRANSMISSION</span>
                    </>
                  )}
                </button>

                {/* Status Feedback */}
                {sendStatus === "success" && (
                  <div className="clip-cyber-tag flex items-center gap-2 border border-milkGreen/40 bg-milkGreen/10 px-4 py-2.5 font-techmono text-xs font-bold uppercase tracking-widest text-milkGreen backdrop-blur-md shadow-glow animate-pulse">
                    <CheckCircle2 size={16} />
                    <span>MESSAGE SENT // 200 OK</span>
                  </div>
                )}
                {sendStatus === "error" && (
                  <div className="clip-cyber-tag flex items-center gap-2 border border-red-500/40 bg-red-500/10 px-4 py-2.5 font-techmono text-xs font-bold uppercase tracking-widest text-red-400 backdrop-blur-md">
                    <Zap size={16} />
                    <span>{errorMessage || "TRANSMISSION FAILED // RETRY"}</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right Side Info Panel */}
          <div className="flex flex-col gap-5">
            {/* Direct Email Card */}
            <div className="reveal-on-scroll hud-frame relative clip-cyber border border-white/10 bg-black/60 p-7 backdrop-blur-xl hover-3d">
              <div className="holo-shimmer pointer-events-none absolute inset-0" />
              <div className="relative mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-milkGreen animate-pulse shadow-glow" />
                  <span className="font-techmono text-xs font-bold uppercase tracking-widest text-milkGreen">
                    // DIRECT CHANNEL
                  </span>
                </div>
                <span className="font-techmono text-[9px] uppercase tracking-widest text-zinc-500">CH.01</span>
              </div>
              <a
                href="mailto:safsoulmusic28@gmail.com"
                className="group relative flex items-center gap-4 transition hover:translate-x-1"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-electricYellow/40 bg-electricYellow/10 text-electricYellow transition duration-300 group-hover:bg-electricYellow group-hover:text-black shadow-glow-yellow">
                  <Mail size={22} />
                </span>
                <div className="min-w-0">
                  <span className="block font-techmono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    EMAIL // ENCRYPTED
                  </span>
                  <span className="block truncate font-techmono text-sm font-bold text-white group-hover:text-electricYellow transition">
                    safsoulmusic28@gmail.com
                  </span>
                </div>
                <ArrowRight size={18} className="ml-auto shrink-0 text-zinc-500 transition group-hover:text-electricYellow group-hover:translate-x-1" />
              </a>
            </div>

            {/* Location Card */}
            <div className="reveal-on-scroll hud-frame hud-frame-yellow relative clip-cyber border border-white/10 bg-black/60 p-7 backdrop-blur-xl hover-3d">
              <div className="holo-shimmer pointer-events-none absolute inset-0" />
              <div className="relative mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-electricYellow animate-pulse shadow-glow-yellow" />
                  <span className="font-techmono text-xs font-bold uppercase tracking-widest text-electricYellow">
                    // LOCATION
                  </span>
                </div>
                <span className="font-techmono text-[9px] uppercase tracking-widest text-zinc-500">CH.02</span>
              </div>
              <div className="relative flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-milkGreen/40 bg-milkGreen/10 text-milkGreen shadow-glow">
                  <MapPin size={22} />
                </span>
                <div>
                  <span className="block font-chakra text-sm font-bold text-white">Chennai, Tamil Nadu</span>
                  <span className="block font-techmono text-[10px] uppercase tracking-widest text-zinc-500">India // Remote-Ready</span>
                </div>
                {/* Mini compass / globe indicator */}
                <Globe size={18} className="ml-auto text-milkGreen spin-18 opacity-60" />
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="reveal-on-scroll hud-frame relative clip-cyber border border-white/10 bg-black/60 p-7 backdrop-blur-xl hover-3d">
              <div className="holo-shimmer pointer-events-none absolute inset-0" />
              <div className="relative flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-milkGreen/40 bg-milkGreen/10 text-milkGreen shadow-glow">
                  <Zap size={22} />
                </span>
                <div>
                  <span className="block font-chakra text-sm font-bold text-white">Quick Response</span>
                  <span className="block font-techmono text-[10px] uppercase tracking-widest text-zinc-500">
                    Typically responds within 24 hours
                  </span>
                </div>
              </div>
              {/* Live response waveform */}
              <div className="relative mt-4 flex items-end gap-0.5 h-4">
                {[30, 60, 40, 80, 50, 70, 35, 65, 45, 90, 55, 75].map((h, i) => (
                  <span
                    key={i}
                    className="wave-bar flex-1 bg-milkGreen/60"
                    style={{
                      height: "100%",
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Links — Channel Frequencies */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {socials.map(({ label, handle, href, icon: Icon, accent, freq }, idx) => {
            const isYellow = accent === "electricYellow";
            const iconClass = isYellow
              ? "border-electricYellow/40 bg-electricYellow/10 text-electricYellow group-hover:bg-electricYellow group-hover:text-black shadow-glow-yellow"
              : "border-milkGreen/40 bg-milkGreen/10 text-milkGreen group-hover:bg-milkGreen group-hover:text-black shadow-glow";
            const hoverBorder = isYellow ? "hover:border-electricYellow/60 hover:shadow-glow-yellow" : "hover:border-milkGreen/60 hover:shadow-glow";

            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{ transitionDelay: `${idx * 120}ms` }}
                className={`reveal-on-scroll hud-frame group relative clip-cyber flex items-center justify-between border border-white/10 bg-black/60 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${hoverBorder}`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center border transition duration-300 ${iconClass}`}>
                    <Icon size={22} />
                  </span>
                  <div className="min-w-0">
                    <span className="block font-techmono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      {label}
                    </span>
                    <span className="block truncate font-techmono text-base font-bold text-white">
                      {handle}
                    </span>
                    <span className={`mt-0.5 block font-techmono text-[9px] uppercase tracking-widest ${isYellow ? "text-electricYellow" : "text-milkGreen"}`}>
                      FREQ :: {freq}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className={`shrink-0 text-zinc-500 transition duration-300 ${isYellow ? "group-hover:text-electricYellow" : "group-hover:text-milkGreen"}`} size={20} />
              </a>
            );
          })}
        </div>

        {/* Bottom marquee */}
        <div className="mt-12">
          <MarqueeTicker
            items={[
              "TRANSMISSION READY",
              "CORE #28 ONLINE",
              "UPLINK STABLE",
              "ENCRYPTION AES-256",
              "AUTHENTICATED USER",
              "CHENNAI, INDIA",
              "AI / ML ENGINEER",
              "AVAILABLE FOR HIRE",
            ]}
            yellow={true}
            speed={40}
          />
        </div>

        {/* Footer attribution bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 font-techmono text-xs uppercase text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-milkGreen animate-pulse shadow-glow" />
            <span className="font-bold text-zinc-300">Sajith Ahamed Fakrudeen</span>
            <span>// Saveetha Engineering College</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-electricYellow" />
              Chennai, India
            </span>
            <span className="hidden sm:inline">//</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-milkGreen" />
              AI/ML Engineer &amp; Developer
            </span>
            <span className="hidden sm:inline">//</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Cog size={14} className="text-electricYellow spin-18" />
              v2036.1.07
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


// ============================================================
// MAIN APP COMPONENT — 2036 CYBERPUNK HEADER + MOBILE MENU
// Header has live mini-telemetry, rotating logo reticle,
// and HUD-framed nav. Mobile menu is a full-screen terminal.
// ============================================================
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clockTime, setClockTime] = useState("");
  const { scrollProgress, scrollY } = useScrollState();
  const mainRef = useScrollReveal();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Live clock for the header telemetry
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setClockTime(`${hh}:${mm}:${ss}`);
    };
    updateClock();
    const id = setInterval(updateClock, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {isLoading && <ImmersivePreloader onComplete={() => setIsLoading(false)} />}
      <main ref={mainRef} id="top" className={`min-h-screen overflow-hidden bg-carbon text-white font-sans selection:bg-milkGreen/40 selection:text-white ${!isLoading ? "animate-warp-entry" : "opacity-0"}`}>

        {/* ============================================================
            HEADER — 2036 CYBERPUNK REDESIGN
            Live telemetry strip + rotating logo + HUD-framed nav
            ============================================================ */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
          {/* Scroll progress beam */}
          <div
            className="h-[3px] bg-gradient-to-r from-milkGreen via-electricYellow to-milkGreen transition-all duration-150 ease-out shadow-glow"
            style={{ width: `${scrollProgress}%` }}
          />

          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
            {/* Logo + reticle ring */}
            <a href="#top" onClick={closeMobileMenu} className="group flex items-center gap-3">
              <div className="relative grid h-10 w-10 place-items-center">
                {/* Rotating reticle */}
                <div className="absolute inset-0 spin-12">
                  <div className="absolute left-1/2 top-0 h-1.5 w-px -translate-x-1/2 bg-electricYellow" />
                  <div className="absolute left-1/2 bottom-0 h-1.5 w-px -translate-x-1/2 bg-electricYellow" />
                  <div className="absolute top-1/2 left-0 w-1.5 h-px -translate-y-1/2 bg-electricYellow" />
                  <div className="absolute top-1/2 right-0 w-1.5 h-px -translate-y-1/2 bg-electricYellow" />
                </div>
                <span className="clip-cyber relative grid h-7 w-7 place-items-center border border-milkGreen bg-milkGreen font-chakra text-xs font-black text-black shadow-glow transition group-hover:scale-105">
                  28
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-chakra text-sm font-bold uppercase tracking-wider text-white">
                  Sajith Ahamed Fakrudeen
                </span>
                <span className="font-techmono text-[9px] uppercase tracking-widest text-electricYellow">
                  AI / ML ENGINEER // CORE #28
                </span>
              </div>
            </a>

            {/* Desktop Nav — HUD framed */}
            <div className="hidden items-center gap-7 font-techmono text-[11px] font-bold uppercase tracking-widest text-zinc-300 md:flex">
              {[
                { name: "Identity", href: "#about", yellow: false },
                { name: "Projects", href: "#projects", yellow: true },
                { name: "Experience", href: "#experience", yellow: false },
                { name: "Contact", href: "#contact", yellow: true },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative transition hover:${item.yellow ? "text-electricYellow" : "text-milkGreen"}`}
                >
                  <span>{item.name}</span>
                  {/* Underline HUD bar */}
                  <span className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${item.yellow ? "bg-electricYellow" : "bg-milkGreen"}`} />
                </a>
              ))}
            </div>

            {/* Right: telemetry + connect button */}
            <div className="flex items-center gap-3">
              {/* Live clock + status (hidden on small screens) */}
              <div className="hidden lg:flex flex-col items-end font-techmono text-[9px] uppercase tracking-widest leading-tight">
                <span className="flex items-center gap-1.5 text-milkGreen">
                  <span className="h-1 w-1 rounded-full bg-milkGreen animate-pulse" />
                  <span className="text-zinc-300">{clockTime || "--:--:--"}</span>
                </span>
                <span className="text-zinc-500">SYS // ONLINE</span>
              </div>

              {/* Mini telemetry bars (hidden on small screens) */}
              <div className="hidden xl:flex flex-col gap-1 w-16">
                {[{ label: "CPU", val: 78, color: "bg-milkGreen" },
                  { label: "MEM", val: 42, color: "bg-electricYellow" }].map((m) => (
                  <div key={m.label} className="flex items-center gap-1.5">
                    <span className="font-techmono text-[8px] uppercase text-zinc-600 w-6">{m.label}</span>
                    <div className="h-1 flex-1 bg-white/10">
                      <div className={`h-full ${m.color}`} style={{ width: `${m.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="clip-cyber-tag hidden xs:inline-flex items-center gap-2 border border-electricYellow bg-electricYellow px-4 py-2 font-techmono text-[11px] font-bold uppercase tracking-widest text-black shadow-glow-yellow transition hover:scale-105 hover:bg-white"
              >
                <Mail size={13} strokeWidth={2.5} />
                <span>Connect</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="clip-cyber-tag grid h-9 w-9 place-items-center border border-white/20 bg-white/5 text-white transition hover:border-milkGreen hover:text-milkGreen md:hidden"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </header>

        {/* ============================================================
            MOBILE NAVIGATION — 2036 CYBERPUNK TERMINAL DRAWER
            ============================================================ */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-2xl md:hidden font-techmono pt-16 border-b border-white/10 animate-fade-in">
            {/* Holo grid bg */}
            <div className="pointer-events-none absolute inset-0 bg-holo-grid opacity-20" />
            <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-milkGreen/15 to-transparent" />

            {/* Top drawer header */}
            <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2 text-xs text-milkGreen font-bold uppercase tracking-widest">
                <Radio size={14} className="animate-pulse" />
                <span>NAV.TERMINAL</span>
              </div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">// CORE #28 :: {clockTime}</span>
            </div>

            {/* Nav items as terminal commands */}
            <div className="relative flex flex-1 flex-col justify-center px-8 py-8 space-y-5">
              {[
                { name: "Identity", href: "#about", num: "01", yellow: false },
                { name: "Projects", href: "#projects", num: "02", yellow: true },
                { name: "Experience", href: "#experience", num: "03", yellow: false },
                { name: "Contact", href: "#contact", num: "05", yellow: true }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="group flex items-center justify-between border-b border-white/10 pb-3.5"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-techmono text-xs text-zinc-500">$</span>
                    <span className={`font-techmono text-xs font-bold ${item.yellow ? "text-electricYellow" : "text-milkGreen"}`}>
                      [{item.num}]
                    </span>
                    <span className="font-chakra text-2xl font-bold uppercase tracking-wider text-white transition group-hover:text-electricYellow">
                      {item.name}
                    </span>
                  </span>
                  <ArrowUpRight size={20} className="text-zinc-500 transition group-hover:text-electricYellow group-hover:translate-x-1" />
                </a>
              ))}

              {/* CTA */}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="clip-cyber-tag flex items-center justify-center gap-2 border-2 border-electricYellow bg-electricYellow px-6 py-3.5 font-techmono text-xs font-bold uppercase tracking-widest text-black shadow-glow-yellow"
                >
                  <Satellite size={16} />
                  <span>TRANSMIT_MESSAGE</span>
                </a>
              </div>
            </div>

            {/* Bottom drawer footer */}
            <div className="relative border-t border-white/10 px-6 py-4 flex justify-between items-center font-techmono text-[10px] uppercase tracking-widest text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-milkGreen animate-pulse" />
                <span>SYSTEM ONLINE</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={11} className="text-electricYellow" />
                <span>CHENNAI, IN</span>
              </span>
            </div>
          </div>
        )}

        <HeroSection scrollY={scrollY} />
        <SectionTransitionDivider />
        <AboutSection />
        <ProjectsSection />
        <GallerySection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
