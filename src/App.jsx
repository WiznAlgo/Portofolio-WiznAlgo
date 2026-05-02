import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Github,
  Globe2,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";

const profile = {
  name: "WiznAlgo",
  realName: "Wisnu Aji",
  title: "Algorithmic Trader & Developer",
  location: "Kediri, East Java, Indonesia",
  phone: "+62 822 3341 2942",
  email: "wisnutugas123@gmail.com",
  whatsappNumber: "6282233412942",
  github: "https://github.com/WiznAlgo",
  tradingView: "https://www.tradingview.com/script/kiyXAEYU-Swing-Breakout-V2-0/",
  indicatorService: "https://lynk.id/mazalgo",
  tagline: "Markets are driven by emotion. Code is driven by logic.",
  summary:
    "Saya membangun sistem trading, robot algoritmik, automasi analisis finansial, dan website modern yang menggabungkan logika, visual premium, serta pengalaman pengguna yang responsif.",
};

const navItems = ["Home", "About", "Services", "Projects", "Skills", "Journey", "Contact"];

const stats = [
  { label: "Coding Experience", value: "3+", suffix: "Years" },
  { label: "Web Development", value: "7", suffix: "Months" },
  { label: "GitHub Repositories", value: "9", suffix: "Public" },
  { label: "Core Focus", value: "Algo", suffix: "Trading" },
];

const services = [
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Algorithmic Trading System",
    description:
      "Membangun logika entry, risk management, backtesting, dan automasi strategi untuk market seperti XAUUSD.",
    cta: "See related work",
    href: "#projects",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Trading Bot & Automation",
    description:
      "Menghubungkan Python, JavaScript, API, dan MQL4/MQL5 untuk membuat workflow trading yang lebih terukur dan minim manual task.",
    cta: "Discuss bot",
    href: "#contact",
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "Modern Web Portfolio / Landing Page",
    description:
      "Membuat landing page responsif dengan visual premium, animasi smooth, dan struktur konten yang jelas untuk branding personal atau bisnis.",
    cta: "View websites",
    href: "#projects",
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "Financial Analysis Automation",
    description:
      "Menyusun pipeline analisis, dashboard sederhana, data processing, dan eksperimen machine learning untuk market sentiment.",
    cta: "Discuss automation",
    href: "#contact",
  },
];

const projects = [
  {
    title: "Wiznify",
    category: "Web App",
    status: "Live Preview",
    description:
      "Project web app yang sedang dikembangkan sebagai ruang eksplorasi interface modern, API integration, dan pengalaman digital berbasis musik/AI.",
    tags: ["React", "TypeScript", "API", "Vercel"],
    live: "https://wiznify-v3.vercel.app/",
    repo: "https://github.com/WiznAlgo/Wiznify",
    repoLabel: "Repository",
    highlight: "Web project utama",
  },
  {
    title: "Snack Fibonacci",
    category: "Landing Page",
    status: "Live",
    description:
      "Landing page brand makanan sekolah dengan hero kuat, product cards, gallery style Instagram, storytelling bisnis, dan CTA WhatsApp pre-order.",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Motion"],
    live: "https://snack-fibonacci.vercel.app/",
    repo: "https://github.com/WiznAlgo/Snack-Fibonacci",
    repoLabel: "Repository",
    highlight: "Responsive product showcase",
  },
  {
    title: "JavaScript Bot Automation",
    category: "WhatsApp Bot",
    status: "Private Build",
    description:
      "Bot automation non-blueprint yang mayoritas logic-nya dibangun dengan JavaScript untuk workflow chat, response handling, dan automasi task.",
    tags: ["JavaScript", "Node.js", "Bot", "Automation"],
    live: "#contact",
    repo: profile.github,
    repoLabel: "GitHub Profile",
    highlight: "70% JavaScript logic",
  },
  {
    title: "AirBot Blueprint",
    category: "WhatsApp Bot",
    status: "Blueprint",
    description:
      "Rancangan sistem bot WhatsApp untuk scan barcode OCR, generate barcode, filter IMEI, manajemen saldo, admin panel, dan history logging.",
    tags: ["JavaScript", "Bot", "OCR", "Automation"],
    live: "#contact",
    repo: "https://github.com/WiznAlgo/BLUEPRINT-Bot-WhatsApp-Create-IMAGE",
    repoLabel: "Repository",
    highlight: "System architecture",
  },
  {
    title: "Swing Breakout V2.0",
    category: "Trading Tools",
    status: "Live on TradingView",
    description:
      "Indikator TradingView custom untuk membantu membaca swing structure, breakout area, dan validasi setup trading dengan tampilan yang bersih.",
    tags: ["Pine Script", "TradingView", "Breakout", "Market Structure"],
    live: profile.tradingView,
    repo: profile.indicatorService,
    repoLabel: "Indicator Service",
    highlight: "Best public indicator",
  },
  {
    title: "XAUUSD Scalping Bot",
    category: "Algo Trading",
    status: "In Progress",
    description:
      "Eksperimen robot scalping untuk XAUUSD dengan fokus pada rule-based entry, risk parameter, backtest loop, dan automation bridge.",
    tags: ["Python", "MQL4/5", "Backtesting", "Risk Management"],
    live: "#contact",
    repo: profile.github,
    repoLabel: "GitHub Profile",
    highlight: "Core research",
  },
];

const skills = [
  { name: "Python", level: 92, detail: "Data analysis, backtesting, API bridge" },
  { name: "MQL4 / MQL5", level: 86, detail: "MetaTrader Expert Advisor & automation" },
  { name: "TypeScript", level: 72, detail: "Modern frontend, type-safe components" },
  { name: "JavaScript", level: 70, detail: "Core logic untuk bot automation" },
  { name: "React", level: 70, detail: "Interactive UI, reusable components" },
  { name: "C++", level: 66, detail: "High-performance logic" },
  { name: "Bash", level: 64, detail: "Server workflow & automation" },
];

const journey = [
  {
    year: "2023",
    title: "Coding Foundation",
    description:
      "Mulai memperkuat logika pemrograman, scripting, dan cara berpikir sistematis untuk menyelesaikan masalah teknis.",
  },
  {
    year: "2024",
    title: "Trading Automation Focus",
    description:
      "Mendalami strategi market, backtesting, integrasi API, serta eksperimen robot trading untuk workflow yang lebih objektif.",
  },
  {
    year: "2025",
    title: "Web Development Sprint",
    description:
      "Masuk ke React, TypeScript, Vite, Tailwind, deployment Vercel, dan mulai membuat website portfolio/landing page modern.",
  },
  {
    year: "Now",
    title: "System Architect Mode",
    description:
      "Menggabungkan trading, automation, dan web interface menjadi ekosistem tools yang rapi, bisa dipresentasikan, dan siap dikembangkan.",
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getWhatsappUrl(message) {
  return `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
      <Sparkles className="h-4 w-4" />
      {children}
    </div>
  );
}

function LogoMark({ large = false }) {
  return (
    <div
      className={cn(
        "relative grid shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-cyan-500/10",
        large ? "h-28 w-28" : "h-14 w-14"
      )}
    >
      <img src="/wiznalgo-logo.png" alt="WiznAlgo logo" className="h-full w-full object-cover" />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <LogoMark />
          <div>
            <p className="text-base font-bold text-white">WiznAlgo</p>
            <p className="text-xs text-zinc-400">System Architect</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href={getWhatsappUrl("Halo WiznAlgo, saya tertarik diskusi project atau trading system.")}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:scale-[1.02] hover:bg-white lg:inline-flex"
        >
          Hire Me <ArrowUpRight className="h-4 w-4" />
        </a>

        <button
          onClick={() => setOpen(true)}
          className="rounded-xl border border-white/10 p-3 text-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[999] min-h-dvh overflow-y-auto bg-[#030712] text-white lg:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_38%)]" />
          <div className="relative mx-auto flex min-h-dvh max-w-md flex-col px-5 py-6">
            <div className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-3">
                <LogoMark />
                <div>
                  <p className="font-bold text-white">WiznAlgo</p>
                  <p className="text-xs text-zinc-400">Mobile Navigation</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-4 text-white shadow-lg"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-6 grid gap-3 rounded-[2rem] border border-white/10 bg-zinc-950/95 p-3 shadow-2xl shadow-black/50">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-lg font-bold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-black text-cyan-200">0{index + 1}</span>
                    {item}
                  </span>
                  <ChevronRight className="h-5 w-5 text-zinc-500 transition group-hover:text-cyan-200" />
                </a>
              ))}
            </nav>

            <a
              href={getWhatsappUrl("Halo WiznAlgo, saya tertarik diskusi project atau trading system.")}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 font-black text-zinc-950 shadow-2xl shadow-cyan-500/20"
            >
              Contact via WhatsApp <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-0 top-40 h-[360px] w-[360px] rounded-full bg-emerald-500/10 blur-[100px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
            // SYSTEM ARCHITECT: ONLINE
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
            Building Trading Systems & Digital Interfaces with Logic.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">{profile.summary}</p>

          <blockquote className="mt-6 max-w-2xl border-l-2 border-cyan-300/60 pl-5 text-zinc-400">
            “{profile.tagline}”
          </blockquote>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-zinc-950 transition hover:scale-[1.02] hover:bg-cyan-200"
            >
              View Projects <Rocket className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 font-bold text-white transition hover:bg-white/10"
            >
              GitHub Profile <Github className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-cyan-400/30 via-transparent to-emerald-300/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
              <div className="flex items-center justify-between">
                <LogoMark />
                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  Kediri Based
                </div>
              </div>

              <div className="grid place-items-center py-10">
                <div className="relative grid h-60 w-60 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-4 shadow-inner">
                  <div className="absolute inset-4 rounded-full border border-cyan-300/20" />
                  <div className="absolute inset-10 rounded-full border border-emerald-300/10" />
                  <LogoMark large />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                    <p className="text-sm font-semibold text-cyan-200">{stat.suffix}</p>
                    <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </div>
      <p className="text-sm text-zinc-500">{label}</p>
      <p className="mt-1 font-bold text-white">{value}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel>About Me</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Developer yang berpikir seperti trader.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Saya bukan cuma menulis code. Saya membangun sistem: mulai dari logika strategi, struktur data,
            automasi, sampai tampilan web yang bisa dipakai untuk menjelaskan value sebuah project.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={<MapPin />} label="Location" value={profile.location} />
              <InfoCard icon={<MessageCircle />} label="Phone / WhatsApp" value={profile.phone} />
              <InfoCard icon={<Code2 />} label="Coding Experience" value="3+ years" />
              <InfoCard icon={<Globe2 />} label="Web Experience" value="±7 months" />
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-6">
            <h3 className="flex items-center gap-2 text-xl font-bold text-white">
              <TerminalSquare className="h-5 w-5 text-cyan-200" /> Current Focus
            </h3>
            <div className="mt-5 grid gap-3">
              {[
                "Automated Scalping Bot for XAUUSD",
                "Machine Learning for Market Sentiment",
                "TradingView indicator refinement",
                "Modern portfolio and landing page development",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white/[0.02] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>My Services</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">Yang bisa saya bangun.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Fokus utama saya ada di persimpangan trading, automation, dan modern web. Jadi website ini tidak hanya
            terlihat keren, tapi juga menunjukkan arah spesialisasi yang jelas.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-zinc-900"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-zinc-950">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{service.description}</p>
              <a
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-white"
              >
                {service.cta} <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = useMemo(() => ["All", ...new Set(projects.map((project) => project.category))], []);
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <SectionLabel>Latest Projects</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Project yang membangun reputasi.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Kombinasi project web, blueprint automation, dan trading tools supaya personal brand WiznAlgo terasa kuat
            sebagai developer sekaligus trader sistematis.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                filter === category
                  ? "border-cyan-300 bg-cyan-300 text-zinc-950"
                  : "border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] transition hover:border-cyan-300/30"
          >
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-950 to-black p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.25),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_28%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-zinc-300">
                    {project.status}
                  </span>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-emerald-200">{project.highlight}</p>
                  <h3 className="text-3xl font-black text-white">{project.title}</h3>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="leading-7 text-zinc-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 text-sm text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target={project.live.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-cyan-200"
                >
                  Live / Detail <ArrowUpRight className="h-4 w-4" />
                </a>
                {project.repo !== "#" && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    {project.repoLabel || "Repository"} <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-white/[0.02] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionLabel>My Skills</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Tech stack untuk market, bot, dan web.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Skill utama saya diarahkan untuk membangun sistem yang bisa diuji, diotomasi, dan dipresentasikan dengan UI
            yang terlihat profesional.
          </p>

          <div className="mt-8 rounded-[2rem] border border-emerald-300/20 bg-emerald-300/[0.06] p-6">
            <h3 className="flex items-center gap-2 font-bold text-white">
              <ShieldCheck className="h-5 w-5 text-emerald-200" /> Positioning
            </h3>
            <p className="mt-3 leading-7 text-zinc-300">
              “Saya adalah developer yang memahami market. Saya membangun tools trading dan web interface untuk mengubah
              ide menjadi sistem yang bisa dipakai.”
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-white">{skill.name}</h3>
                  <p className="text-sm text-zinc-500">{skill.detail}</p>
                </div>
                <p className="font-black text-cyan-200">{skill.level}%</p>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: index * 0.08 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TradingViewShowcase() {
  const indicatorFeatures = [
    "Swing structure mapping",
    "Breakout area confirmation",
    "Clean chart visualization",
    "Public TradingView script",
  ];

  return (
    <section id="tradingview" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.08] via-white/[0.03] to-emerald-300/[0.06] p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>TradingView Indicator</SectionLabel>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Swing Breakout V2.0</h2>
            <p className="mt-5 leading-8 text-zinc-300">
              Indikator custom terbaik dari WiznAlgo untuk membantu membaca swing market, validasi breakout, dan
              menjaga chart tetap clean saat mencari setup trading.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={profile.tradingView}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-black text-zinc-950 transition hover:bg-cyan-200"
              >
                View on TradingView <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href={profile.indicatorService}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 font-black text-white transition hover:bg-white/10"
              >
                Jasa Indikator <TrendingUp className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Indicator Highlights</p>
                <h3 className="mt-2 text-2xl font-black text-white">Built for technical traders.</h3>
              </div>
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cyan-300 text-zinc-950">
                <TrendingUp className="h-7 w-7" />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {indicatorFeatures.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-emerald-300" />
                  <p className="font-semibold text-zinc-200">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="bg-white/[0.02] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Journey</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Roadmap dari coder ke system builder.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {journey.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6"
            >
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">{item.year}</p>
              <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Trading Bot / Indicator",
    message: "",
  });

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const message = [
      "Halo WiznAlgo, saya tertarik diskusi project dari portfolio.",
      "",
      `Nama: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Project Type: ${form.projectType}`,
      "",
      `Message: ${form.message || "-"}`,
    ].join("\n");

    window.open(getWhatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionLabel>Contact Me</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Let’s build something logical, useful, and premium.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Terbuka untuk diskusi project, website, bot, trading strategy, automation, atau kolaborasi pengembangan
            sistem.
          </p>

          <div className="mt-8 grid gap-3">
            <a
              href={getWhatsappUrl("Halo WiznAlgo, saya tertarik diskusi project atau trading system.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5 text-emerald-300" />
              <span>{profile.phone}</span>
            </a>
            <a
              href={`mailto:${profile.email}?subject=Project Inquiry - WiznAlgo Portfolio`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white transition hover:bg-white/10"
            >
              <Mail className="h-5 w-5 text-cyan-200" />
              <span>{profile.email}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white transition hover:bg-white/10"
            >
              <Github className="h-5 w-5 text-zinc-200" />
              <span>github.com/WiznAlgo</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-zinc-300">
              Name
              <input
                className="rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
                placeholder="Your name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-zinc-300">
              Email
              <input
                className="rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
                placeholder="your@email.com"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-zinc-300">
            Project Type
            <select
              className="rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-4 text-white outline-none transition focus:border-cyan-300"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
            >
              <option>Trading Bot / Indicator</option>
              <option>Website / Landing Page</option>
              <option>Automation System</option>
              <option>Collaboration</option>
            </select>
          </label>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-zinc-300">
            Message
            <textarea
              className="min-h-36 rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300"
              placeholder="Tell me about your idea..."
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 font-black text-zinc-950 transition hover:bg-white"
            type="submit"
          >
            Send via WhatsApp <MessageCircle className="h-5 w-5" />
          </button>
          <a
            href={`mailto:${profile.email}?subject=Project Inquiry - WiznAlgo Portfolio`}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 font-black text-white transition hover:bg-white/10"
          >
            Email Direct <Mail className="h-5 w-5" />
          </a>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <LogoMark />
          <div>
            <p className="font-bold text-white">WiznAlgo</p>
            <p className="text-sm text-zinc-500">Crafting order out of chaos.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-zinc-400">
          <a href="#home" className="hover:text-white">Back to top</a>
          <span>•</span>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <span>•</span>
          <a
            href={getWhatsappUrl("Halo WiznAlgo, saya tertarik diskusi project.")}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen scroll-smooth bg-zinc-950 font-sans text-white selection:bg-cyan-300 selection:text-zinc-950">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <TradingViewShowcase />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
