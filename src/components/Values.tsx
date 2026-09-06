import React from 'react';
import { ShieldCheck, Users, Sparkles, Award, Flame, Zap, Compass } from 'lucide-react';
import { PERSONAL_VALUES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Values: React.FC = () => {
  const { theme } = useTheme();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-purple-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-rose-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-teal-400" />;
      default:
        return <Compass className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section
      id="values"
      className={`py-20 lg:py-28 relative overflow-hidden border-t ${
        theme === 'dark' ? 'bg-zinc-950 border-white/5' : 'bg-white border-zinc-200'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
              Principles & Character
            </span>
            <span className="text-green-500 text-sm font-serif font-black">07</span>
          </div>
          <h2
            id="values-section-heading"
            className={`text-4xl sm:text-5xl font-black font-heading tracking-tighter uppercase italic ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}
          >
            SPORTS <span className="text-green-500">PHILOSOPHY</span>
          </h2>
          <p className="max-w-md text-zinc-400 mt-2 text-xs sm:text-sm font-medium">
            Essential principles forged through cricket practice, teamwork, discipline, and facing sporting challenges head-on.
          </p>
          <div className="w-12 h-1 bg-green-500 rounded-full mt-3"></div>
        </div>

        {/* 6 Personal Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PERSONAL_VALUES.map((val, index) => {
            return (
              <div
                key={val.title}
                id={`value-card-${val.title.toLowerCase()}`}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden backdrop-blur-sm ${
                  theme === 'dark'
                    ? 'bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/60 shadow-xl'
                    : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
                }`}
              >
                {/* Top Row: Icon & Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md ${
                    theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-zinc-100 border border-zinc-200'
                  }`}>
                    {getIcon(val.iconName)}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    {val.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-base sm:text-lg font-black font-heading uppercase italic tracking-tight mb-2 ${
                  theme === 'dark' ? 'text-white group-hover:text-green-400' : 'text-zinc-900 group-hover:text-green-600'
                } transition-colors`}>
                  {val.title}
                </h3>

                {/* Description */}
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {val.description}
                </p>

                {/* Subtle bottom meta */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  <span>Pillar 0{index + 1}</span>
                  <span className="text-green-500">Character</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
