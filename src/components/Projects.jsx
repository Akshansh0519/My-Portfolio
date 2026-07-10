import React, { useState, useEffect, useCallback } from 'react';
import { projects, socialLinks } from '../data/portfolioData';

// ─── Static image imports (Vite bundles and hashes these) ───
import orqflow1 from '../assets/Project details/OrqFlow Screenshots/OrqFlow Login Page.png';
import orqflow2 from '../assets/Project details/OrqFlow Screenshots/OrqFlow Analyst.png';
import orqflow3 from '../assets/Project details/OrqFlow Screenshots/OrqFlow Coder.png';
import orqflow4 from '../assets/Project details/OrqFlow Screenshots/OrqFlow Execution Trace.png';

import syncnexus1 from '../assets/Project details/SyncNexus Screenshots/SyncNexus Login.png';
import syncnexus2 from '../assets/Project details/SyncNexus Screenshots/SyncNexus -Light Mode.png';
import syncnexus3 from '../assets/Project details/SyncNexus Screenshots/SyncNexus-Ai in Chat.png';
import syncnexus4 from '../assets/Project details/SyncNexus Screenshots/SyncNexus_Rag chatbot in Rooms.png';

import shopsense1 from '../assets/Project details/ShopSense Screenshots/Shopesence landing page.png';
import shopsense2 from '../assets/Project details/ShopSense Screenshots/ShopSense Architecture.png';
import shopsense3 from '../assets/Project details/ShopSense Screenshots/ShopSense Technologies used.png';
import shopsense4 from '../assets/Project details/ShopSense Screenshots/ShopSense Model benchmarks.png';

import linkforge1 from '../assets/Project details/Linkforge ScreenShot/Linkforge Landing page.png';
import linkforge2 from '../assets/Project details/Linkforge ScreenShot/Linkforge Login.png';
import linkforge3 from '../assets/Project details/Linkforge ScreenShot/Linkforge Offerings.png';
import linkforge4 from '../assets/Project details/Linkforge ScreenShot/LinkForge Analytics dashboard.png';
import linkforge5 from '../assets/Project details/Linkforge ScreenShot/LinkForge Analytics Dashboard 2.png';
import linkforge6 from '../assets/Project details/Linkforge ScreenShot/LinkForge Links.png';
import linkforge7 from '../assets/Project details/Linkforge ScreenShot/Linkforge Demo.png';

import skyelite1 from '../assets/Project details/SkyElite Screenshots/Landing page.png';
import skyelite2 from '../assets/Project details/SkyElite Screenshots/Architecture.png';
import skyelite3 from '../assets/Project details/SkyElite Screenshots/Booking Ticket 1.png';
import skyelite4 from '../assets/Project details/SkyElite Screenshots/Booking Ticket 2.png';
import skyelite5 from '../assets/Project details/SkyElite Screenshots/Booking Ticket 3.png';
import skyelite6 from '../assets/Project details/SkyElite Screenshots/Booking ticket 4.png';
import skyelite7 from '../assets/Project details/SkyElite Screenshots/Booking ticket 5.png';
import skyelite8 from '../assets/Project details/SkyElite Screenshots/Booking ticket 6 Mail.png';

import axiom1 from '../assets/Project details/Axiom Screenshots/Landing page.png';
import axiom2 from '../assets/Project details/Axiom Screenshots/Login Page.png';
import axiom3 from '../assets/Project details/Axiom Screenshots/Authenticated via SSO.png';
import axiom4 from '../assets/Project details/Axiom Screenshots/Live sorting Features.png';
import axiom5 from '../assets/Project details/Axiom Screenshots/Token details.png';

// ─── Project screenshots map ───────────────────────────────
const projectImages = {
  orqflow:      [orqflow1, orqflow2, orqflow3, orqflow4],
  syncnexus:    [syncnexus1, syncnexus2, syncnexus3, syncnexus4],
  linkforge:    [linkforge1, linkforge2, linkforge3, linkforge4, linkforge5, linkforge6, linkforge7],
  skyelite:     [skyelite1, skyelite2, skyelite3, skyelite4, skyelite5, skyelite6, skyelite7, skyelite8],
  'axiom-pulse': [axiom1, axiom2, axiom3, axiom4, axiom5],
  bluffbuster:  null, // explicitly no gallery
  shopsense:    [shopsense1, shopsense2, shopsense3, shopsense4],
};

// ─── Project meta: summary + stat chips ───────────────────
const projectMeta = {
  orqflow: {
    summary: "Autonomous multi-agent AI orchestration platform built for production — LangGraph supervisor routes tasks to specialist agents via MCP tools.",
    stats: ["11 API endpoints", "95-test suite", "4-tier LLM failover", "SSE streaming", "Redis rate-limiting", "Async PG memory"],
  },
  syncnexus: {
    summary: "Real-time collaborative workspace with an embedded RAG AI assistant — built for multi-user concurrency from day one.",
    stats: ["Socket.IO × Redis adapter", "Direct-to-S3 uploads", "O(log N) cursor pagination", "768-dim embeddings", "Top-5 chunk retrieval", "BullMQ backoff workers"],
  },
  linkforge: {
    summary: "URL shortener and analytics engine optimized for high-concurrency — Redis cuts redirect latency by 82%.",
    stats: ["45ms → 8ms latency", "Sliding-window rate limiter", "O(log n) per request", "Geography + device analytics", "Docker Compose", "GitHub Actions CI/CD"],
  },
  skyelite: {
    summary: "Distributed flight booking platform — 3 independent Node.js microservices coordinated via RabbitMQ event queues with ACID 2-phase commit transactions and idempotency guarantees.",
    stats: ["3 microservices", "ACID 2-phase commit", "Distributed idempotency keys", "RabbitMQ async queue", "HTML E-Ticket emails", "Next.js 16 portal"],
  },
  "axiom-pulse": {
    summary: "Pixel-perfect crypto token discovery dashboard with enterprise SSO and real-time WebSocket price feeds.",
    stats: ["Lighthouse >90 desktop", "Google + GitHub OAuth 2.0", "Skeleton loading states", "Component memoization", "Atomic Radix UI", "Redux state"],
  },
  bluffbuster: {
    summary: "Adversarial RL environment that trains an LLM examiner to expose bluffing — built for the Meta PyTorch OpenEnv Hackathon.",
    stats: ["800 teams / 31,000+ registrants", "GRPO training (Unsloth/TRL)", "7 adversarial student styles", "10 ML topic sections", "ΔHt entropy reward shaping", "Calibrated belief tracking"],
  },
  shopsense: {
    summary: "Hybrid recommendation engine fusing 6 distinct ML models with MMR reranking — served through a Redis-cached FastAPI microservice.",
    stats: ["6 fusion models", "ALS + BPR + NLP embeddings", "MMR diversity reranking", "H&M Fashion dataset", "MLflow experiment tracking", "Redis-cached API"],
  },
};

// ─── Icons ─────────────────────────────────────────────────
const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// ─── Stat chip ─────────────────────────────────────────────
const StatChip = ({ label }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold text-white/60 bg-white/5 border border-white/10 hover:text-white/80 hover:bg-white/10 transition-colors duration-200 cursor-default whitespace-nowrap">
    {label}
  </span>
);

// ─── Image Carousel ────────────────────────────────────────
const ImageCarousel = ({ images, projectTitle }) => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((idx) => {
    if (idx === active) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(idx);
      setIsTransitioning(false);
    }, 220);
  }, [active]);

  const next = useCallback(() => goTo((active + 1) % images.length), [active, goTo, images.length]);

  // Auto-advance every 3.5 s, pause on hover
  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [isHovered, next, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className="relative w-full h-full flex flex-col gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main image frame */}
      <div className="relative flex-1 min-h-0 rounded-xl overflow-hidden bg-white/5 border border-white/8 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <img
          key={active}
          src={images[active]}
          alt={`${projectTitle} screenshot ${active + 1}`}
          className={`w-full h-full object-cover object-top transition-all duration-300 ${
            isTransitioning ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        />

        {/* Subtle top vignette so badge text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

        {/* Counter badge */}
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white/60 border border-white/10">
          {active + 1} / {images.length}
        </div>

        {/* Prev / Next click zones */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => goTo((active - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white hover:bg-black/80 transition-all duration-200 opacity-0 group-hover/card:opacity-100"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white hover:bg-black/80 transition-all duration-200 opacity-0 group-hover/card:opacity-100"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail dot strip */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative overflow-hidden rounded-md border transition-all duration-300 ${
                i === active
                  ? 'w-12 h-8 border-red-500/60 shadow-[0_0_8px_rgba(255,42,42,0.4)]'
                  : 'w-8 h-6 border-white/10 opacity-40 hover:opacity-70 hover:border-white/30'
              }`}
            >
              <img
                src={src}
                alt={`thumb ${i + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Placeholder panel (no images yet / bluffbuster) ──────
const ImagePlaceholder = ({ label }) => (
  <div className="w-full h-full rounded-xl flex flex-col items-center justify-center gap-4 bg-white/[0.03] border border-white/8 relative overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,42,42,0.3)_0%,transparent_60%)] animate-pulse" />
    <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
      <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
        <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-[11px] font-mono text-white/25 uppercase tracking-wider leading-relaxed">
        {label || 'Screenshots\ncoming soon'}
      </p>
    </div>
  </div>
);

// ─── Project Card ──────────────────────────────────────────
const ProjectCard = ({ project, aosDelay }) => {
  const meta = projectMeta[project.id] || { summary: project.description, stats: [] };
  const images = projectImages[project.id];
  // null  = explicitly no gallery (BluffBuster)
  // []    = placeholder (coming soon)
  // [...] = real images
  const hasGallery = images !== null;
  const hasImages  = Array.isArray(images) && images.length > 0;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`group/card relative rounded-2xl p-[1px] transition-all duration-500 ${
        project.isFlagship
          ? 'bg-gradient-to-br from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500 hover:via-red-400/30 hover:to-red-500/60'
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div className={`rounded-2xl p-6 md:p-8 h-full backdrop-blur-md transition-all duration-500 ${
        project.isFlagship
          ? 'bg-[#0f0f0f]/95 group-hover/card:bg-[#0f0f0f]/90'
          : 'bg-[#111111]/90 group-hover/card:bg-[#111111]/80'
      }`}>

        {/* ── Two-column layout ─────────────────────────── */}
        <div className={`flex gap-8 ${hasGallery ? 'flex-col lg:flex-row' : 'flex-col'}`}>

          {/* ── LEFT: project info ─── */}
          <div className={`flex flex-col justify-between ${hasGallery ? 'lg:w-1/2 xl:w-[55%]' : 'w-full'}`}>
            <div>
              {/* Badge */}
              {project.badge && (
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mb-4">
                  {project.badge}
                </span>
              )}

              {/* Number + Title */}
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-5xl font-black text-white/10 font-serif italic">{project.number}</span>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{project.title}</h3>
              </div>

              {/* Summary */}
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4 max-w-2xl font-medium">
                {meta.summary}
              </p>

              {/* Stat chips */}
              {meta.stats.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6 pb-5 border-b border-white/5">
                  {meta.stats.map((stat) => (
                    <StatChip key={stat} label={stat} />
                  ))}
                </div>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                  <GitHubIcon />
                  GitHub
                </a>
              )}

              {project.links.demo !== undefined && (
                <a
                  href={project.links.demo || '#'}
                  target={project.links.demo ? "_blank" : undefined}
                  rel={project.links.demo ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    project.links.demo
                      ? 'bg-[#ff2a2a] text-white hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)]'
                      : 'bg-white/5 text-white/40 border border-white/10 cursor-not-allowed'
                  }`}
                >
                  <ExternalLinkIcon />
                  {project.links.demo ? 'Live Demo' : 'Demo Coming Soon'}
                </a>
              )}

              {project.links.frontendDemo && (
                <a
                  href={project.links.frontendDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff2a2a] text-white text-sm font-semibold hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300"
                >
                  <ExternalLinkIcon />
                  Frontend Demo
                </a>
              )}

              {project.links.backendApi && (
                <a
                  href={project.links.backendApi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <ExternalLinkIcon />
                  Backend API
                </a>
              )}
            </div>
          </div>

          {/* ── RIGHT: image gallery ─── */}
          {hasGallery && (
            <div className="lg:w-1/2 xl:w-[45%] min-h-[260px] lg:min-h-[320px]">
              {hasImages
                ? <ImageCarousel images={images} projectTitle={project.title} />
                : <ImagePlaceholder label={'Screenshots\ncoming soon'} />
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Section ───────────────────────────────────────────────
const Projects = () => (
  <section
    id="projects"
    className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
  >
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div data-aos="fade-up" className="mb-16 md:mb-20">
        <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-8 shadow-sm bg-white/5 backdrop-blur-sm">
          Featured Projects
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
          Work that speaks <br className="hidden md:block" />for itself
        </h2>
        <p className="text-white/50 text-base md:text-lg max-w-lg font-medium leading-relaxed">
          A selection of projects that showcase my expertise in full-stack development and modern architecture.
        </p>
      </div>

      {/* Project cards */}
      <div className="flex flex-col gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            aosDelay={String((index + 1) * 100)}
          />
        ))}
      </div>

      {/* GitHub CTA */}
      <div data-aos="fade-up" data-aos-delay="500" className="mt-16 flex justify-center">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group"
        >
          <GitHubIcon />
          Explore All My Repositories
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
