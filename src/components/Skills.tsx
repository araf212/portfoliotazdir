import React, { useState } from 'react';
import { Zap, Shield, HeartPulse, Brain, Crosshair, Check, ChevronRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Skills: React.FC = () => {
  const { theme } = useTheme();
  const [selectedSport, setSelectedSport] = useState<string>('Cricket');

  const sportBadges = [
    { name: 'Cricket', icon: '🏏', role: 'Primary Sport' },
    { name: 'Football', icon: '⚽', role: 'Supporting' },
    { name: 'Badminton', icon: '🏸', role: 'Supporting' }
  ];

  const activeCategory = SKILL_CATEGORIES.find(c => c.sport === selectedSport) || SKILL_CATEGORIES[0];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Mental':
        return <Brain className="w-3.5 h-3.5 text-purple-400" />;
      case 'Tactical':
        return <Crosshair className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Physical':
        return <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Technical':
        return <Zap className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <Shield className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  return (
    <section
      id="skills"
      className={`py-20 lg:py-28 relative border-t ${
        theme === 'dark' ? 'bg-zinc-950 border-white/5' : 'bg-white border-zinc-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
              Athletic Capabilities
            </span>
            <span className="text-green-500 text-sm font-serif font-black">06</span>
          </div>
          <h2
            id="skills-section-heading"
            className={`text-4xl sm:text-5xl font-black font-heading tracking-tighter uppercase italic ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}
          >
            SPORTS <span className="text-green-500">SKILLS</span>
          </h2>
          <p className="max-w-md text-zinc-400 mt-2 text-xs sm:text-sm font-medium">
            Qualitative competencies developed through consistent practice, pitch discipline, and conditioning.
          </p>
          <div className="w-12 h-1 bg-green-500 rounded-full mt-3"></div>
        </div>

        {/* Sport Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {sportBadges.map((badge) => {
            const isSelected = selectedSport === badge.name;

            return (
              <button
                key={badge.name}
                id={`skill-filter-${badge.name.toLowerCase()}`}
                type="button"
                onClick={() => setSelectedSport(badge.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-green-500 text-black shadow-lg shadow-green-500/20'
                    : theme === 'dark'
                    ? 'bg-zinc-900/60 border border-white/5 text-zinc-400 hover:border-white/10 hover:text-white'
                    : 'bg-zinc-100 border border-zinc-200 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                <span className="text-sm">{badge.icon}</span>
                <span>{badge.name}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider font-mono ${
                  isSelected
                    ? 'bg-black/20 text-black'
                    : theme === 'dark' ? 'bg-white/5 text-zinc-500' : 'bg-zinc-200 text-zinc-600'
                }`}>
                  {badge.role}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeCategory.skills.map((skill, index) => {
            return (
              <div
                key={skill.name}
                id={`skill-item-${index}`}
                className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between backdrop-blur-sm ${
                  theme === 'dark'
                    ? 'bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/60 shadow-lg'
                    : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
                }`}
              >
                {/* Subtle corner badge for type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-xl bg-white/5 border border-white/5">
                    {getTypeIcon(skill.type)}
                    <span className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}>
                      {skill.type}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-green-400 flex items-center gap-1 uppercase tracking-wider">
                    <Check className="w-3 h-3 text-green-500" />
                    Active Skill
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className={`text-base font-black font-heading uppercase italic tracking-tight mb-1.5 ${
                    theme === 'dark' ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {skill.name}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {skill.focus}
                  </p>
                </div>

                {/* Qualitative Competency Visual Indicator */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span className="text-zinc-500 uppercase tracking-wider">Application Level</span>
                    <span className="text-green-400 font-bold uppercase">Active Practice</span>
                  </div>
                  {/* Segmented Athletic Readiness Indicator */}
                  <div className="grid grid-cols-4 gap-1.5 h-1.5 w-full">
                    <div className="bg-green-500 rounded-full"></div>
                    <div className="bg-green-500 rounded-full"></div>
                    <div className="bg-green-500 rounded-full"></div>
                    <div className={`rounded-full ${selectedSport === 'Cricket' ? 'bg-green-400' : 'bg-zinc-800'}`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category-based summary note */}
        <div className={`mt-10 p-4 rounded-3xl border text-center max-w-xl mx-auto text-xs ${
          theme === 'dark'
            ? 'bg-zinc-900/30 border-white/5 text-zinc-400'
            : 'bg-zinc-50 border-zinc-200 text-zinc-600'
        }`}>
          <span className="font-bold text-green-500 mr-1.5 font-mono uppercase">Note:</span>
          Skills reflect demonstrated discipline, practice participation, and competitive sports development in Cricket, Football, and Badminton.
        </div>

      </div>
    </section>
  );
};
