import React from 'react';
import { aiResearch, socialLinks } from '../data/portfolioData';

// Classy, single-stroke SVG icons — consistent with the monoline system used site-wide.
// Each icon is purpose-designed to semantically match its card.
const CardIcons = {
  "IEEE Conference Paper": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
  ),
  "Meta PyTorch Hackathon Finalist": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
  "ML Internship @ AI Gurukul": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  "Open Source Engineering": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path fillRule="evenodd" fill="currentColor" stroke="none" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
    </svg>
  ),
};

const ResearchCard = ({ category, index }) => {
  const Icon = CardIcons[category.title];

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-400 group flex flex-col justify-between"
    >
      <div>
        {/* Icon + Stat row */}
        <div className="flex justify-between items-start mb-7">
          {/* Icon container — clean square, subtle border, no color fill */}
          <div className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 group-hover:border-white/20 group-hover:text-white transition-all duration-300">
            {Icon}
          </div>
          <span className="text-white/25 text-[10px] font-mono font-bold tracking-[0.15em] uppercase">
            {category.stats}
          </span>
        </div>

        <h3 className="text-white text-xl md:text-2xl font-black mb-3 tracking-tight">
          {category.title}
        </h3>
        <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium">
          {category.description}
        </p>
      </div>

      {/* Footer link row */}
      <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-mono tracking-wider font-bold text-white/30 group-hover:text-white/70 transition-colors duration-300">
          {category.link ? 'View on GitHub' : 'In Progress'}
        </span>
        <svg
          className="w-4 h-4 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );
};

const ContentCreator = () => {
  return (
    <section
      id="research"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/15 rounded-full px-5 py-1.5 text-xs text-white/50 font-bold tracking-widest uppercase mb-6 bg-white/3">
            {aiResearch.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            {aiResearch.heading}
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            {aiResearch.description}
          </p>
        </div>

        {/* Research Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {aiResearch.categories.map((category, index) =>
            category.link ? (
              <a
                key={category.title}
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <ResearchCard category={category} index={index} />
              </a>
            ) : (
              <div key={category.title} className="block">
                <ResearchCard category={category} index={index} />
              </div>
            )
          )}
        </div>

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff2a2a] text-white font-bold text-base hover:bg-red-600 hover:shadow-[0_0_30px_rgba(255,42,42,0.35)] transition-all duration-400 group"
          >
            {/* GitHub SVG */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Explore All Repositories
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContentCreator;
