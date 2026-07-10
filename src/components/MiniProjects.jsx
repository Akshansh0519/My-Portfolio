import React, { useState } from 'react';

import lifeosDark from '../assets/Project details/Mini Projects/lifeos_dashboard_dark.png';
import lifeosLight from '../assets/Project details/Mini Projects/lifeos_dashboard_light.png';
import queueApp from '../assets/Project details/Mini Projects/queue_management_app.png';

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const MiniProjectCard = ({ title, badge, description, techTags, liveLink, images, isToggleable }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div
      data-aos="fade-up"
      className="group/card relative rounded-2xl p-[1px] bg-white/10 hover:bg-white/20 transition-all duration-500"
    >
      <div className="rounded-2xl p-6 md:p-8 h-full backdrop-blur-md bg-[#111111]/90 group-hover/card:bg-[#111111]/80 transition-all duration-500 flex flex-col justify-between">
        <div>
          {/* Header & Badge */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              {badge}
            </span>
            {isToggleable && (
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(0)}
                  className={`px-3 py-1 rounded-full font-semibold transition-all ${
                    activeImageIndex === 0 ? 'bg-red-500 text-white shadow-sm' : 'text-white/60 hover:text-white'
                  }`}
                >
                  🌙 Dark Mode
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(1)}
                  className={`px-3 py-1 rounded-full font-semibold transition-all ${
                    activeImageIndex === 1 ? 'bg-red-500 text-white shadow-sm' : 'text-white/60 hover:text-white'
                  }`}
                >
                  ☀️ Light Mode
                </button>
              </div>
            )}
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
            {title}
          </h3>

          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 font-medium">
            {description}
          </p>

          {/* Image Showcase */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 mb-6 bg-black/40 group/img aspect-[16/10] flex items-center justify-center">
            <img
              src={images[activeImageIndex]}
              alt={title}
              className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff2a2a] text-white text-sm font-bold hover:bg-red-600 hover:shadow-[0_0_25px_rgba(255,42,42,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <ExternalLinkIcon />
            Launch Live Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

const MiniProjects = () => {
  const miniApps = [
    {
      title: 'LifeOS — Personal Dev Dashboard',
      badge: 'Live Dashboard · Vercel',
      description:
        'A developer-centric productivity command center built with React and Tailwind CSS. Features real-time weather tracking, persistent task management, an interactive 25-minute Pomodoro focus timer, auto-saving markdown quick notes, and live GitHub statistics integration.',
      techTags: ['React', 'Tailwind CSS', 'Custom Hooks', 'Local Storage', 'Vercel', 'Lucide Icons'],
      liveLink: 'https://lifeos-dashboard-mu.vercel.app/',
      images: [lifeosDark, lifeosLight],
      isToggleable: true,
    },
    {
      title: 'Queue Management Application',
      badge: 'Live Utility · Vercel',
      description:
        'A responsive real-time customer queue and flow management solution designed for streamlined service operations. Features instant customer check-in, real-time status transitions (Waiting, Ongoing, Completed), and clean state persistence.',
      techTags: ['React', 'Tailwind CSS', 'State Management', 'UI/UX Design', 'Vercel'],
      liveLink: 'https://queue-management-app-kappa.vercel.app/',
      images: [queueApp],
      isToggleable: false,
    },
  ];

  return (
    <section className="bg-[#0a0a0a] pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 border-t border-white/10 pt-16">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Live Deployed Utilities
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
            Mini-Apps &amp; Dashboards
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Lightweight, production-ready utility applications and developer productivity suites deployed live on Vercel.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {miniApps.map((app) => (
            <MiniProjectCard
              key={app.title}
              title={app.title}
              badge={app.badge}
              description={app.description}
              techTags={app.techTags}
              liveLink={app.liveLink}
              images={app.images}
              isToggleable={app.isToggleable}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniProjects;
