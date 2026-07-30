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
  X
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
    role: "Software Development Intern",
    company: "Quodeworks",
    location: "Chennai, TN",
    period: "Internship",
    details: "Built robust backend services, integrated third-party APIs, and optimized core system performance.",
    accent: "milkGreen"
  },
  {
    role: "Professional Intern",
    company: "BICS GLOBAL",
    location: "Chennai, TN",
    period: "Internship",
    details: "Developed enterprise software modules, collaborated on REST API delivery, and worked on deployment tasks.",
    accent: "electricYellow"
  }
];

const certifications = [
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

function SectionLabel({ children, number, yellow = false }) {
  const textColor = yellow ? "text-electricYellow" : "text-milkGreen";
  const dotColor = yellow ? "bg-electricYellow shadow-glow-yellow" : "bg-milkGreen shadow-glow";

  return (
    <div className="mb-4 inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-zinc-300 backdrop-blur-md">
      <span className={`h-2 w-2 rounded-full ${dotColor} animate-pulse`} />
      {number && <span className={`${textColor} font-mono`}>[{number}]</span>}
      <span>{children}</span>
    </div>
  );
}

function GlassPanel({ children, className = "", delay = 0, yellowHover = false }) {
  const hoverBorder = yellowHover ? "hover:border-electricYellow/70 hover:shadow-glow-yellow" : "hover:border-milkGreen/70 hover:shadow-glow";
  const bgGlow = yellowHover ? "bg-electricYellow/10" : "bg-milkGreen/10";

  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-on-scroll relative overflow-hidden border border-white/10 bg-white/[0.035] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.065] ${hoverBorder} ${className}`}
    >
      <div className={`pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full ${bgGlow} blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100`} />
      {children}
    </div>
  );
}

function HeroSection({ scrollY }) {
  const heroRef = useRef(null);
  const blazerRef = useRef(null);
  const blazerTextRef = useRef(null);
  const indicatorRef = useRef(null);
  const isInteracting = useRef(false);

  const updatePosition = useCallback((clientX) => {
    if (!heroRef.current || !blazerRef.current || !indicatorRef.current) return;
    const bounds = heroRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(((clientX - bounds.left) / bounds.width) * 100, 0), 100);
    const clip = `polygon(calc(${x}% - 14%) 0%, calc(${x}% + 14%) 0%, calc(${x}% + 14%) 100%, calc(${x}% - 14%) 100%)`;
    
    blazerRef.current.style.clipPath = clip;
    if (blazerTextRef.current) {
      blazerTextRef.current.style.clipPath = clip;
    }
    indicatorRef.current.style.left = `${x}%`;
  }, []);

  const handlePointerMove = (e) => {
    isInteracting.current = true;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!e.touches?.length) return;
    isInteracting.current = true;
    updatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
    let startTime = performance.now();
    let animId;

    const animateIdle = (now) => {
      if (!isInteracting.current && blazerRef.current && indicatorRef.current && heroRef.current) {
        const elapsed = (now - startTime) / 1000;
        const x = 50 + Math.sin(elapsed * 0.8) * 22;
        const clip = `polygon(calc(${x}% - 14%) 0%, calc(${x}% + 14%) 0%, calc(${x}% + 14%) 100%, calc(${x}% - 14%) 100%)`;
        blazerRef.current.style.clipPath = clip;
        if (blazerTextRef.current) {
          blazerTextRef.current.style.clipPath = clip;
        }
        indicatorRef.current.style.left = `${x}%`;
      }
      animId = requestAnimationFrame(animateIdle);
    };

    animId = requestAnimationFrame(animateIdle);
    return () => cancelAnimationFrame(animId);
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
      onMouseEnter={() => { isInteracting.current = true; }}
      onMouseLeave={() => { isInteracting.current = false; }}
      onTouchMove={handleTouchMove}
      onTouchStart={() => { isInteracting.current = true; }}
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
        />

        <img
          ref={blazerRef}
          src={blazerPortrait}
          alt="Sajith Ahamed Fakrudeen (Professional Blazer)"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none transition-all duration-75 ease-out"
          draggable="false"
          style={{ clipPath: "polygon(36% 0%, 64% 0%, 64% 100%, 36% 100%)" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-carbon-grid bg-[length:60px_60px] opacity-10 pointer-events-none" />
        <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-transparent via-milkGreen/20 to-transparent" />

        <div className="animate-hero-hud absolute top-20 left-6 z-20 hidden md:flex items-center gap-3 border border-white/10 bg-black/60 px-3.5 py-1.5 text-[11px] font-mono uppercase text-zinc-300 backdrop-blur-md">
          <Radio size={13} className="text-electricYellow animate-pulse" />
          <span>SYSTEM TELEMETRY // CORE #28</span>
        </div>

        <div
          ref={indicatorRef}
          className="pointer-events-none absolute inset-y-0 z-30 transition-all duration-75 ease-out"
          style={{ left: "50%" }}
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

            <div className="animate-hero-headline relative">
              <h1 className="max-w-6xl text-4xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black uppercase tracking-tighter leading-[0.9] text-white">
                BEHIND THE CODE
              </h1>

              <h1
                ref={blazerTextRef}
                className="absolute inset-0 max-w-6xl text-4xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black uppercase tracking-tighter leading-[0.9] pointer-events-none transition-all duration-75 text-stroke-white text-transparent bg-clip-text bg-gradient-to-r from-milkGreen via-white to-electricYellow drop-shadow-glow"
                style={{ clipPath: "polygon(36% 0%, 64% 0%, 64% 100%, 36% 100%)" }}
              >
                <span className="text-milkGreen">BEHIND </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-milkGreen via-white to-electricYellow">THE CODE</span>
              </h1>
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
    </section>
  );
}

function SectionTransitionDivider() {
  return (
    <div className="relative z-30 h-16 w-full overflow-hidden bg-carbon">
      <div className="relative h-full w-full border-y border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="laser-beam absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-electricYellow to-milkGreen shadow-glow-yellow" />
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 font-mono text-[11px] uppercase text-zinc-400 sm:px-8">
          <div className="flex items-center gap-2">
            <Zap size={13} className="text-milkGreen animate-pulse" />
            <span className="font-bold text-white">SYSTEM TRANSITION // HERO TO IDENTITY</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-zinc-500">
            <Activity size={13} className="text-electricYellow" />
            <span>DATA STREAM CONNECTED // CORE #28</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-carbon px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="reveal-left">
          <SectionLabel number="01">About / Identity</SectionLabel>
          <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-white sm:text-6xl lg:text-7xl">
            Building Backend-First AI Products.
          </h2>
        </div>

        <div className="reveal-right relative border-l-2 border-milkGreen/60 pl-6 sm:pl-8">
          <p className="text-lg leading-8 text-zinc-300 font-medium sm:text-xl sm:leading-9 font-helvetica">
            Sajith Ahamed Fakrudeen, B.Tech AI &amp; ML student at Saveetha
            Engineering College, Chennai. Specializes in ML pipelines, REST API
            architectures with FastAPI, and automated workflows.
          </p>

          <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-electricYellow">
            <MapPin size={14} className="text-milkGreen" />
            <span>Chennai, Tamil Nadu, India</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ code, label, value, icon: Icon, copy, accent }, idx) => {
          const isYellow = accent === "electricYellow";
          const badgeColor = isYellow ? "text-electricYellow" : "text-milkGreen";
          const iconBorder = isYellow
            ? "border-electricYellow/40 bg-electricYellow/10 text-electricYellow group-hover:bg-electricYellow group-hover:text-black shadow-glow-yellow"
            : "border-milkGreen/40 bg-milkGreen/10 text-milkGreen group-hover:bg-milkGreen group-hover:text-black shadow-glow";

          return (
            <GlassPanel key={label} delay={idx * 120} yellowHover={isYellow} className="group p-7">
              <div className="mb-8 flex items-center justify-between">
                <span className={`font-mono text-xs font-black uppercase tracking-widest ${badgeColor}`}>
                  {code} // {label}
                </span>
                <span className={`grid h-11 w-11 place-items-center border transition duration-300 ${iconBorder}`}>
                  <Icon size={20} />
                </span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                {value}
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400 font-normal font-helvetica">
                {copy}
              </p>
            </GlassPanel>
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({ project, featured, delay }) {
  const Icon = project.icon;
  const isYellow = project.accent === "electricYellow";
  const idColor = isYellow ? "text-electricYellow" : "text-milkGreen";
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
      className={`group flex h-full flex-col p-7 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className={`font-mono text-xs font-black uppercase tracking-wider ${idColor}`}>
              {project.id}
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-zinc-400">
              <Sparkles size={13} className={idColor} />
              Featured System
            </span>
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            {project.name}
          </h3>
        </div>

        <span className={`grid h-14 w-14 shrink-0 place-items-center border transition duration-300 ${iconBorder}`}>
          <Icon size={26} />
        </span>
      </div>

      <p className="mt-6 flex-1 text-base leading-7 text-zinc-300 font-normal font-helvetica">
        {project.description}
      </p>

      {project.mlStack.length > 0 && (
        <div className="mt-8">
          <p className="mb-3 font-mono text-xs font-black uppercase tracking-widest text-zinc-500">
            // ML Stack &amp; Models
          </p>
          <div className="flex flex-wrap gap-2">
            {project.mlStack.map((item, index) => {
              const tagYellow = index % 2 === 1;
              return (
                <span
                  key={item}
                  className={`border px-3 py-1 text-xs font-bold tracking-wider ${
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

      <div className="mt-6">
        <p className="mb-3 font-mono text-xs font-black uppercase tracking-widest text-zinc-500">
          // Core Infrastructure Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((item) => (
            <span
              key={item}
              className="border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold tracking-wider text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-9 flex flex-wrap gap-3.5 pt-4 border-t border-white/10">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 border px-5 py-2.5 text-xs font-black uppercase tracking-wider transition hover:scale-105 ${btnBg}`}
          >
            <span>Live Deployment</span>
            <ExternalLink size={15} strokeWidth={2.5} />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white transition hover:scale-105 ${
              isYellow ? "hover:border-electricYellow/70 hover:text-electricYellow" : "hover:border-milkGreen/70 hover:text-milkGreen"
            }`}
          >
            <span>GitHub Repo</span>
            <Github size={15} strokeWidth={2.5} />
          </a>
        )}
      </div>
    </GlassPanel>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="bg-panel px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-on-scroll mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel number="02" yellow>Featured Projects</SectionLabel>
            <h2 className="max-w-4xl text-4xl font-black uppercase tracking-tighter leading-none text-white sm:text-6xl lg:text-7xl">
              Systems with Speed &amp; Precision.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 font-medium text-zinc-400">
            Glassmorphic interfaces, high-throughput API endpoints, and production machine learning models built for utility.
          </p>
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

const galleryImages = [
  { src: galleryIITLogo, caption: "At IIT Madras", tag: "Campus Visit" },
  { src: galleryCoding, caption: "IBM Z Datathon", tag: "Hackathon" },
  { src: galleryTeam, caption: "Datathon Team", tag: "Team" },
  { src: galleryPresentation, caption: "Research Presentation", tag: "Conference" },
  { src: galleryMountain, caption: "Mountain Viewpoint", tag: "Travel" },
  { src: galleryIITGate, caption: "IIT Madras Gate", tag: "Campus" }
];

function GallerySection() {
  const [active, setActive] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const total = galleryImages.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4000);
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
    if (diffX > 40) {
      goNext();
    } else if (diffX < -40) {
      goPrev();
    }
    setTouchStartX(null);
  };

  const isYellow = active % 2 === 1;
  const tagColor = isYellow ? "text-electricYellow border-electricYellow/50 bg-electricYellow/10 shadow-glow-yellow" : "text-milkGreen border-milkGreen/50 bg-milkGreen/10 shadow-glow";
  const barColor = isYellow ? "bg-electricYellow shadow-glow-yellow" : "bg-milkGreen shadow-glow";
  const borderLeftColor = isYellow ? "border-electricYellow/60" : "border-milkGreen/60";

  return (
    <section className="bg-carbon px-4 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="reveal-on-scroll">
            <SectionLabel number="02.5" yellow={isYellow}>Gallery / Moments</SectionLabel>
            <h2 className="text-3xl font-black uppercase tracking-tighter leading-none text-white sm:text-5xl lg:text-6xl">
              Beyond The Screen.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 font-medium text-zinc-400">
              Hackathons, campus visits, research conferences, and the places that shaped the journey.
            </p>

            <div className={`mt-8 border-l-2 pl-5 transition-colors duration-500 ${borderLeftColor}`}>
              <span className={`inline-flex items-center gap-1.5 border px-2.5 py-1 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-2 transition-colors duration-500 ${tagColor}`}>
                <Camera size={10} />
                {galleryImages[active].tag}
              </span>
              <p className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                {galleryImages[active].caption}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="grid h-11 w-11 place-items-center border border-white/15 bg-white/5 text-white transition hover:border-milkGreen hover:bg-milkGreen hover:text-black"
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
                className="grid h-11 w-11 place-items-center border border-white/15 bg-white/5 text-white transition hover:border-electricYellow hover:bg-electricYellow hover:text-black"
              >
                <ChevronDown size={18} className="-rotate-90" />
              </button>
              <span className="ml-2 font-mono text-xs text-zinc-500 uppercase">
                {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div
            className="reveal-on-scroll relative flex items-center justify-center pt-6 lg:pt-0"
            style={{ perspective: "1200px", height: "440px" }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
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
                        ? "0 0 40px rgba(232, 227, 55, 0.4), 0 20px 60px rgba(0,0,0,0.5)"
                        : "0 0 40px rgba(0, 255, 157, 0.4), 0 20px 60px rgba(0,0,0,0.5)"
                      : "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                  onClick={isActive ? goNext : undefined}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {isActive && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`inline-flex items-center gap-1.5 border px-2.5 py-1 text-[10px] font-black uppercase tracking-widest backdrop-blur-md ${tagColor}`}>
                        <Camera size={10} />
                        {image.tag}
                      </span>
                    </div>
                  )}

                  {isActive && (
                    <div className="absolute bottom-0 inset-x-0 p-5">
                      <p className="text-lg sm:text-xl font-black uppercase tracking-tight text-white drop-shadow-lg">
                        {image.caption}
                      </p>
                      <div className={`mt-2 h-0.5 w-16 ${barColor}`} />
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

function ExperienceSection() {
  return (
    <section id="experience" className="bg-carbon px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div className="reveal-left flex flex-col justify-between border border-white/10 bg-black/40 p-7 backdrop-blur-md sm:p-9">
          <div>
            <SectionLabel number="03">Professional Path</SectionLabel>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              Industry Experience.
            </h2>

            <div className="relative mt-8 border-l-2 border-white/15 pl-6 space-y-8">
              {experiences.map((exp) => {
                const isYellow = exp.accent === "electricYellow";
                const dotColor = isYellow ? "bg-electricYellow shadow-glow-yellow" : "bg-milkGreen shadow-glow";
                const roleColor = isYellow ? "text-electricYellow" : "text-milkGreen";

                return (
                  <div key={exp.company} className="relative">
                    <span className={`absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-carbon ${dotColor}`} />

                    <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-black uppercase text-white">
                        {exp.role}
                      </h3>
                      <span className="border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono uppercase text-zinc-400">
                        {exp.period}
                      </span>
                    </div>

                    <p className={`font-mono text-xs font-bold uppercase ${roleColor}`}>
                      {exp.company} // {exp.location}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-zinc-300 font-normal font-helvetica">
                      {exp.details}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="reveal-right flex flex-col justify-between border border-white/10 bg-black/40 p-7 backdrop-blur-md sm:p-9">
          <div>
            <SectionLabel number="04" yellow>Verified Skills</SectionLabel>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              Certifications &amp; Accreditations.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {certifications.map(({ title, issuer, icon: Icon, accent }) => {
                const isYellow = accent === "electricYellow";
                const iconClass = isYellow
                  ? "border-electricYellow/40 bg-electricYellow/10 text-electricYellow group-hover:bg-electricYellow group-hover:text-black shadow-glow-yellow"
                  : "border-milkGreen/40 bg-milkGreen/10 text-milkGreen group-hover:bg-milkGreen group-hover:text-black shadow-glow";

                return (
                  <div
                    key={title}
                    className={`group flex flex-col justify-between border border-white/10 bg-black/40 p-5 transition duration-300 ${
                      isYellow ? "hover:border-electricYellow/70 hover:bg-electricYellow/10" : "hover:border-milkGreen/70 hover:bg-milkGreen/10"
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className={`grid h-10 w-10 place-items-center border transition ${iconClass}`}>
                        <Icon size={18} />
                      </span>
                      <Award size={16} className={isYellow ? "text-electricYellow" : "text-milkGreen"} />
                    </div>

                    <div>
                      <h4 className="text-sm font-black uppercase text-white leading-tight">
                        {title}
                      </h4>
                      <p className="mt-1 font-mono text-[10px] text-zinc-400 uppercase">
                        {issuer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null); // 'success' | 'error' | null
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
      accent: "milkGreen"
    },
    {
      label: "LinkedIn Professional",
      handle: "sajith-ahamed-fakrudeen-8997902b2",
      href: "https://www.linkedin.com/in/sajith-ahamed-fakrudeen-8997902b2",
      icon: Linkedin,
      accent: "electricYellow"
    },
    {
      label: "Instagram Feed",
      handle: "@sajiiboyy",
      href: "https://www.instagram.com/sajiiboyy/",
      icon: Instagram,
      accent: "milkGreen"
    }
  ];

  return (
    <footer id="contact" className="relative overflow-hidden bg-panel px-5 py-28 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-carbon-grid bg-[length:80px_80px] opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="reveal-on-scroll">
          <SectionLabel number="05" yellow>Contact / Connect</SectionLabel>

          <h2 className="max-w-5xl text-5xl font-black uppercase tracking-tighter leading-none text-white sm:text-7xl lg:text-9xl">
            Let's Build Something.
          </h2>
        </div>

        {/* Contact Form + Info Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Contact Form */}
          <div className="reveal-on-scroll border border-white/10 bg-white/[0.035] p-7 sm:p-9 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-electricYellow animate-pulse shadow-glow-yellow" />
              <span className="font-mono text-xs font-black uppercase tracking-widest text-electricYellow">
                // Transmission Form
              </span>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm font-medium text-white placeholder-zinc-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-milkGreen/70 focus:bg-white/[0.07] focus:shadow-glow"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm font-medium text-white placeholder-zinc-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-milkGreen/70 focus:bg-white/[0.07] focus:shadow-glow"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full resize-none border border-white/15 bg-white/[0.04] px-4 py-3.5 text-sm font-medium text-white placeholder-zinc-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-electricYellow/70 focus:bg-white/[0.07] focus:shadow-glow-yellow"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={sending}
                  className={`group inline-flex items-center justify-center gap-3 border-2 px-8 py-4 text-sm font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 ${
                    sending
                      ? "border-zinc-500 bg-zinc-800 text-zinc-400 cursor-wait"
                      : "border-electricYellow bg-electricYellow text-black shadow-glow-yellow hover:bg-white"
                  }`}
                >
                  {sending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-transparent" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Mail size={18} strokeWidth={2.5} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Feedback */}
                {sendStatus === "success" && (
                  <div className="flex items-center gap-2 border border-milkGreen/40 bg-milkGreen/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-milkGreen backdrop-blur-md shadow-glow animate-pulse">
                    <CheckCircle2 size={16} />
                    <span>Message Sent Successfully!</span>
                  </div>
                )}
                {sendStatus === "error" && (
                  <div className="flex items-center gap-2 border border-red-500/40 bg-red-500/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-red-400 backdrop-blur-md">
                    <Zap size={16} />
                    <span>{errorMessage || "Transmission Failed — Retry"}</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right Side Info Panel */}
          <div className="flex flex-col gap-5">
            {/* Direct Email Card */}
            <div className="reveal-on-scroll border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-milkGreen animate-pulse shadow-glow" />
                <span className="font-mono text-xs font-black uppercase tracking-widest text-milkGreen">
                  // Direct Channel
                </span>
              </div>
              <a
                href="mailto:safsoulmusic28@gmail.com"
                className="group flex items-center gap-4 transition hover:translate-x-1"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-electricYellow/40 bg-electricYellow/10 text-electricYellow transition duration-300 group-hover:bg-electricYellow group-hover:text-black shadow-glow-yellow">
                  <Mail size={22} />
                </span>
                <div>
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    Email
                  </span>
                  <span className="block text-sm font-bold text-white group-hover:text-electricYellow transition">
                    safsoulmusic28@gmail.com
                  </span>
                </div>
              </a>
            </div>

            {/* Location Card */}
            <div className="reveal-on-scroll border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-electricYellow animate-pulse shadow-glow-yellow" />
                <span className="font-mono text-xs font-black uppercase tracking-widest text-electricYellow">
                  // Location
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-milkGreen/40 bg-milkGreen/10 text-milkGreen shadow-glow">
                  <MapPin size={22} />
                </span>
                <div>
                  <span className="block text-sm font-bold text-white">Chennai, Tamil Nadu</span>
                  <span className="block font-mono text-[10px] uppercase text-zinc-500">India // Available Remotely</span>
                </div>
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="reveal-on-scroll border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-milkGreen/40 bg-milkGreen/10 text-milkGreen shadow-glow">
                  <Zap size={22} />
                </span>
                <div>
                  <span className="block text-sm font-bold text-white">Quick Response</span>
                  <span className="block font-mono text-[10px] uppercase text-zinc-500">
                    Typically responds within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {socials.map(({ label, handle, href, icon: Icon, accent }, idx) => {
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
                className={`reveal-on-scroll group flex items-center justify-between border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${hoverBorder}`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center border transition duration-300 ${iconClass}`}>
                    <Icon size={22} />
                  </span>
                  <div className="min-w-0">
                    <span className="block font-mono text-xs font-black uppercase text-zinc-500">
                      {label}
                    </span>
                    <span className="block truncate text-base font-bold text-white">
                      {handle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className={`shrink-0 text-zinc-500 transition duration-300 ${isYellow ? "group-hover:text-electricYellow" : "group-hover:text-milkGreen"}`} size={20} />
              </a>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 font-mono text-xs uppercase text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
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
          </div>
        </div>
      </div>
    </footer>
  );
}

function ImmersivePreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const statusMessages = [
    "INITIALIZING CORE SYSTEM TELEMETRY...",
    "LOADING NEURAL WEIGHTS & EMBEDDINGS...",
    "SYNCHRONIZING FASTAPI & AUTOMATION PIPELINES...",
    "ENGAGING 3D PERSPECTIVE ENGINE...",
    "SYSTEM READY // INITIALIZING REVEAL"
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
          <span className="border-2 border-milkGreen bg-black/90 px-6 py-2 text-sm font-black tracking-widest text-milkGreen shadow-glow">
            SYSTEM ACCESS GRANTED // CORE #28 ONLINE
          </span>
        </div>
      )}

      {/* Center Seam Laser Line — grows visible with progress, splits on complete */}
      <div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-50 flex items-stretch pointer-events-none transition-all duration-500"
        style={{
          opacity: isLeaving ? 0 : Math.min(progress / 60, 1),
          width: isLeaving ? "0px" : `${Math.max(2, (progress / 100) * 6)}px`,
          boxShadow: `0 0 ${(progress / 100) * 40}px rgba(0, 255, 157, ${(progress / 100) * 0.6}), 0 0 ${(progress / 100) * 60}px rgba(232, 227, 55, ${(progress / 100) * 0.3})`
        }}
      >
        <div className="w-1/2 h-full bg-milkGreen" />
        <div className="w-1/2 h-full bg-electricYellow" />
      </div>

      {/* Left Cyber Shutter Panel */}
      <div
        className={`shutter-panel-left absolute top-0 bottom-0 left-0 w-1/2 bg-[#0A0A0F] z-40 ${
          isLeaving ? "shutter-open-left" : "translate-x-0"
        }`}
        style={{
          borderRight: isLeaving ? "none" : `1px solid rgba(0, 240, 255, ${Math.min(progress / 80, 0.6)})`,
          boxShadow: isLeaving ? "0 0 80px rgba(0, 240, 255, 0.7)" : `0 0 ${(progress / 100) * 50}px rgba(0, 240, 255, ${(progress / 100) * 0.4})`
        }}
      />

      {/* Right Cyber Shutter Panel */}
      <div
        className={`shutter-panel-right absolute top-0 bottom-0 right-0 w-1/2 bg-[#0A0A0F] z-40 ${
          isLeaving ? "shutter-open-right" : "translate-x-0"
        }`}
        style={{
          borderLeft: isLeaving ? "none" : `1px solid rgba(255, 0, 110, ${Math.min(progress / 80, 0.6)})`,
          boxShadow: isLeaving ? "0 0 80px rgba(255, 0, 110, 0.7)" : `0 0 ${(progress / 100) * 50}px rgba(255, 0, 110, ${(progress / 100) * 0.4})`
        }}
      />

      {/* Preloader Main Content Canvas */}
      <div
        className={`absolute inset-0 z-40 flex flex-col justify-between p-6 sm:p-12 transition-opacity duration-300 ${
          isLeaving ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Background Carbon Grid & Scanning Line */}
        <div className="absolute inset-0 bg-carbon-grid bg-[length:60px_60px] opacity-15 pointer-events-none" />
        <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-milkGreen/20 to-transparent" />

        {/* Top Telemetry Header Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 text-xs tracking-widest text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-milkGreen animate-pulse shadow-glow" />
            <span className="font-bold text-white uppercase">SYSTEM INITIALIZATION // SAF-28</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-zinc-500">
            <span>LATENCY: 12ms</span>
            <span>//</span>
            <span>PORT: 5173</span>
          </div>
        </div>

        {/* Center 3D Futuristic HUD Core */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
          {/* Rotating Concentric HUD Rings */}
          <div className="relative mb-8 grid h-44 w-44 place-items-center sm:h-56 sm:w-56">
            {/* Outer Ring */}
            <div
              className="absolute inset-0 rounded-full border border-dashed border-electricYellow/50 animate-[spin_10s_linear_infinite]"
              style={{ boxShadow: "0 0 30px rgba(232, 227, 55, 0.2)" }}
            />
            {/* Middle Ring */}
            <div
              className="absolute inset-3 rounded-full border-2 border-milkGreen/60 border-t-transparent animate-[spin_6s_linear_infinite_reverse]"
              style={{ boxShadow: "0 0 30px rgba(0, 255, 157, 0.25)" }}
            />
            {/* Inner Counter Core */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-syne text-5xl font-black tracking-tighter text-white sm:text-6xl">
                {progress}%
              </span>
              <span className="mt-1 text-[10px] font-bold tracking-widest text-milkGreen uppercase">
                {isDone ? "COMPLETE" : "LOADING"}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-black uppercase tracking-tighter text-white sm:text-4xl">
            SAJITH AHAMED FAKRUDEEN
          </h1>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-electricYellow">
            AI / ML ENGINEER &amp; DEVELOPER
          </p>

          {/* Dynamic Telemetry Status Line */}
          <div className="mt-6 flex h-9 items-center justify-center border border-white/10 bg-black/60 px-5 text-xs text-zinc-300 backdrop-blur-md">
            <span className="mr-2.5 text-milkGreen font-bold">&gt;</span>
            <span>{statusMessages[statusIndex]}</span>
          </div>

          {/* Progress Bar Container */}
          <div className="mt-6 w-full max-w-md">
            <div className="relative h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/5">
              <div
                className="h-full bg-gradient-to-r from-milkGreen via-electricYellow to-milkGreen transition-all duration-150 ease-out shadow-glow"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Telemetry Bar & Audio Equalizer */}
        <div className="relative z-10 flex flex-col gap-4 border-t border-white/10 pt-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-electricYellow animate-ping rounded-full" />
            <span>AUTHENTICATED USER // CHENNAI, INDIA</span>
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
      </div>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollProgress, scrollY } = useScrollState();
  const mainRef = useScrollReveal();

  const closeMobileMenu = () => setMobileMenuOpen(false);

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
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
          <div
            className="h-[3px] bg-gradient-to-r from-milkGreen via-electricYellow to-milkGreen transition-all duration-150 ease-out shadow-glow"
            style={{ width: `${scrollProgress}%` }}
          />

          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
            <a href="#top" onClick={closeMobileMenu} className="group flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center border border-milkGreen bg-milkGreen text-sm font-black text-black shadow-glow transition group-hover:scale-105">
                28
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-black uppercase tracking-wider text-white">
                  Sajith Ahamed Fakrudeen
                </span>
                <span className="text-[10px] font-mono uppercase text-electricYellow tracking-widest">
                  AI / ML Engineer
                </span>
              </div>
            </a>

            <div className="hidden items-center gap-8 text-xs font-black uppercase tracking-widest text-zinc-300 md:flex">
              <a className="transition hover:text-milkGreen" href="#about">
                Identity
              </a>
              <a className="transition hover:text-electricYellow" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-milkGreen" href="#experience">
                Experience
              </a>
              <a className="transition hover:text-electricYellow" href="#contact">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden xs:inline-flex items-center gap-2 border border-electricYellow bg-electricYellow px-4 py-2 text-xs font-black uppercase tracking-wider text-black shadow-glow-yellow transition hover:scale-105 hover:bg-white"
              >
                <Mail size={14} strokeWidth={2.5} />
                <span>Connect</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="grid h-9 w-9 place-items-center border border-white/20 bg-white/5 text-white transition hover:border-milkGreen hover:text-milkGreen md:hidden"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </header>

        {/* Mobile Navigation Cyber-Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-2xl md:hidden font-mono pt-16 border-b border-white/10 animate-fade-in">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2 text-xs text-milkGreen font-bold uppercase">
                <Radio size={14} className="animate-pulse" />
                <span>NAVIGATION TELEMETRY</span>
              </div>
              <span className="text-[10px] text-zinc-500 uppercase">// CORE #28</span>
            </div>

            <div className="flex flex-1 flex-col justify-center px-8 py-8 space-y-5">
              {[
                { name: "Identity", href: "#about", num: "01" },
                { name: "Projects", href: "#projects", num: "02" },
                { name: "Experience", href: "#experience", num: "03" },
                { name: "Contact", href: "#contact", num: "05" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="group flex items-center justify-between border-b border-white/10 pb-3.5 text-2xl font-black uppercase tracking-wider text-white transition hover:text-electricYellow"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-milkGreen font-bold">[{item.num}]</span>
                    <span>{item.name}</span>
                  </span>
                  <ArrowUpRight size={20} className="text-zinc-500 transition group-hover:text-electricYellow group-hover:translate-x-1" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 border-2 border-electricYellow bg-electricYellow px-6 py-3.5 text-xs font-black uppercase tracking-wider text-black shadow-glow-yellow"
                >
                  <Mail size={16} />
                  <span>Transmit Message</span>
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 px-6 py-4 text-[10px] uppercase text-zinc-500 flex justify-between items-center">
              <span>SYSTEM ONLINE</span>
              <span>CHENNAI, INDIA</span>
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
