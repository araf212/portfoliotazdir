import React from 'react';
import { Target, Users, ShieldAlert, Award, Clock, ArrowUpRight } from 'lucide-react';
import { CRICKET_EXPERIENCE } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Experience: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      className={`py-20 lg:py-28 relative border-t ${
        theme === 'dark' ? 'bg-zinc-950 border-white/5' : 'bg-zinc-50 border-zinc-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
              Practice & Commitment
            </span>
            <span className="text-green-500 text-sm font-serif font-black">03</span>
          </div>
          <h2
            id="experience-section-heading"
            className={`text-4xl sm:text-5xl font-black font-heading tracking-tighter uppercase italic ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}
          >
            SPORTS <span className="text-green-500">EXPERIENCE</span>
          </h2>
          <p className="max-w-md text-zinc-400 mt-2 text-xs sm:text-sm font-medium">
            Dedicated athletic preparation, regular cricket practice, and match awareness developed across Meherpur grounds.
          </p>
          <div className="w-12 h-1 bg-green-500 rounded-full mt-3"></div>
        </div>

        {/* Large Central Experience Showcase Card */}
        <div
          id="cricket-experience-showcase"
          className={`relative rounded-3xl p-6 sm:p-10 border overflow-hidden mb-10 shadow-2xl transition-all ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-zinc-900 to-black border-white/10 shadow-black/60'
              : 'bg-white border-zinc-200 shadow-zinc-200/60'
          }`}
        >
          {/* Subtle pitch radial glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Narrative (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono font-bold tracking-widest uppercase w-fit">
                <Clock className="w-3 h-3 text-green-500" />
                <span>Regular Practice & Continuous Play</span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-black font-heading uppercase italic tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>
                Cricket Focus & Match Play
              </h3>

              <div className={`p-5 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-zinc-950/80 border-white/5 text-zinc-300'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-700'
              }`}>
                <p className="text-sm sm:text-base leading-relaxed italic">
                  "{CRICKET_EXPERIENCE.statement}"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className={`p-4 rounded-2xl border ${
                  theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">
                    Sport Discipline
                  </span>
                  <span className={`text-xs sm:text-sm font-bold font-heading uppercase ${
                    theme === 'dark' ? 'text-white' : 'text-zinc-900'
                  }`}>
                    Cricket (Primary Pursuit)
                  </span>
                </div>

                <div className={`p-4 rounded-2xl border ${
                  theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">
                    Athletic Goal
                  </span>
                  <span className={`text-xs sm:text-sm font-bold font-heading uppercase ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`}>
                    Discipline & Performance
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Visual Cricket Pitch Blueprint (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className={`p-6 rounded-3xl border ${
                theme === 'dark' ? 'bg-zinc-950 border-white/10' : 'bg-zinc-900 text-white border-zinc-800'
              }`}>
                <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/10">
                  <span className="text-green-400">22 Yards Pitch Sense</span>
                  <span className="text-zinc-400">Tactical Awareness</span>
                </div>

                {/* Stylized Cricket Pitch Graphic */}
                <div className="relative h-44 rounded-2xl bg-gradient-to-b from-zinc-900 to-black border border-white/5 flex flex-col justify-between p-4 overflow-hidden">
                  {/* Crease lines */}
                  <div className="w-full flex items-center justify-between border-b border-dashed border-green-500/30 pb-2">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-5 bg-green-500 rounded-sm"></span>
                      <span className="w-1.5 h-5 bg-green-500 rounded-sm"></span>
                      <span className="w-1.5 h-5 bg-green-500 rounded-sm"></span>
                    </div>
                    <span className="text-[10px] text-green-400 uppercase font-mono tracking-widest">
                      Bowling Crease
                    </span>
                  </div>

                  {/* Pitch center */}
                  <div className="flex items-center justify-center">
                    <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-[10px] font-mono text-green-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></span>
                      Pitch Focus & Tenacity
                    </div>
                  </div>

                  {/* Batting Crease */}
                  <div className="w-full flex items-center justify-between border-t border-dashed border-green-500/30 pt-2">
                    <span className="text-[10px] text-green-400 uppercase font-mono tracking-widest">
                      Popping Crease
                    </span>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-5 bg-green-500 rounded-sm"></span>
                      <span className="w-1.5 h-5 bg-green-500 rounded-sm"></span>
                      <span className="w-1.5 h-5 bg-green-500 rounded-sm"></span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                  <span className="text-[11px]">Regular Field Sessions</span>
                  <span className="text-green-400 font-mono text-[11px] font-bold">Meherpur Grounds</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Practical Pillars of Sporting Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CRICKET_EXPERIENCE.pillars.map((pillar, index) => {
            const icons = [Clock, Target, Users, Award];
            const IconComp = icons[index % icons.length];

            return (
              <div
                key={pillar.title}
                id={`experience-pillar-${index}`}
                className={`p-6 rounded-3xl border transition-all duration-200 hover:-translate-y-1 backdrop-blur-sm ${
                  theme === 'dark'
                    ? 'bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/60'
                    : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center mb-4 border border-green-500/20">
                  <IconComp className="w-4 h-4" />
                </div>
                <h4 className={`text-sm font-black font-heading uppercase italic tracking-tight mb-1.5 ${
                  theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                  {pillar.title}
                </h4>
                <p className="text-xs leading-relaxed text-zinc-400">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
