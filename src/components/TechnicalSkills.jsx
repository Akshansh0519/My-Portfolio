import React from 'react';
import { technicalSkills } from '../data/portfolioData';

const SkillCard = ({ category, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 80}
    className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-400 flex flex-col gap-5"
  >
    {/* Category Title */}
    <div className="pb-4 border-b border-white/8">
      <h3 className="text-white text-sm font-bold tracking-[0.12em] uppercase">
        {category.title}
      </h3>
    </div>

    {/* Skill Pills — clean, neutral, no numbers, no colors */}
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <span
          key={skill.name}
          className="px-3 py-1.5 text-xs font-medium text-white/60 bg-white/5 border border-white/8 rounded-md hover:text-white/90 hover:border-white/20 hover:bg-white/8 transition-all duration-200 cursor-default"
        >
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/15 rounded-full px-5 py-1.5 text-xs text-white/50 font-bold tracking-widest uppercase mb-6 bg-white/3">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            My Skillset
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto leading-relaxed">
            Technologies I have shipped to production across real projects and internships.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
