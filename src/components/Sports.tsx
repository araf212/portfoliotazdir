import React, { useState } from 'react';
import { Trophy, Star, CheckCircle, ChevronRight, Activity } from 'lucide-react';
import { SPORTS_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Sports: React.FC = () => {
  const { theme } = useTheme();
  const [activeCard, setActiveCard] = useState<string>('cricket');

  return (
    <section
      id="sports"
      className={`py-20 lg:py-28 relative overflow-hidden border-t ${
        theme === 'dark' ? 'bg-zinc-950 border-white/5' : 'bg-zinc-100 border-zinc-200'
      }`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
              Disciplines & Proficiencies
            </span>
            <span className="text-green-500 text-sm font-serif font-black">02</span>
          </div>
          <h2
            id="sports-section-heading"
            className={`text-4xl sm:text-5xl font-black font-heading tracking-tighter uppercase italic ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}
          >
            ATHLETIC <span className="text-green-500">PURSUITS</span>
          </h2>
          <p className="max-w-md text-zinc-400 mt-2 text-xs sm:text-sm font-medium">
            Competitive athletic expertise centered on Cricket, backed by active versatility in Football and Badminton.
          </p>
          <div className="w-12 h-1 bg-green-500 rounded-full mt-3"></div>
        </div>

        {/* 3 Sports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SPORTS_DATA.map((sport) => {
            const isPrimary = sport.isPrimary;

            return (
              <div
                key={sport.id}
                id={`sport-card-${sport.id}`}
                onMouseEnter={() => setActiveCard(sport.id)}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden group backdrop-blur-sm ${
                  isPrimary
                    ? theme === 'dark'
                      ? 'bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-black border-2 border-green-500/50 shadow-2xl shadow-green-500/10 md:-translate-y-2'
                      : 'bg-white border-2 border-green-500 shadow-xl shadow-green-500/10 md:-translate-y-2'
                    : theme === 'dark'
                    ? 'bg-zinc-900/40 border border-white/5 hover:border-white/10 hover:bg-zinc-900/60 shadow-lg'
                    : 'bg-white border border-zinc-200 hover:border-zinc-300 shadow-sm'
                } p-6 sm:p-8`}
              >
                {/* Primary sport glowing halo */}
                {isPrimary && (
                  <div className="absolute top-0 right-0 w-36 h-36 bg-green-500/15 rounded-full blur-2xl pointer-events-none"></div>
                )}

                <div>
                  {/* Top Badge & Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    {isPrimary ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-green-500 text-black shadow-md shadow-green-500/20">
                        <Star className="w-3 h-3 fill-current" />
                        PRIMARY PURSUIT
                      </span>
                    ) : (
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-zinc-400'
                          : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                      }`}>
                        Supporting Sport
                      </span>
                    )}

                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${isPrimary ? 'bg-green-500 animate-ping' : 'bg-zinc-600'}`}></span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                        {isPrimary ? '#01' : sport.id === 'football' ? '#02' : '#03'}
                      </span>
                    </div>
                  </div>

                  {/* Sport Large Icon / Dynamic Illustration */}
                  <div className="mb-6 flex justify-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg border ${
                      isPrimary
                        ? 'bg-green-500/10 border-green-500/30 text-green-400 shadow-green-500/20'
                        : theme === 'dark'
                        ? 'bg-white/5 border-white/5 text-zinc-300'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                    }`}>
                      {sport.id === 'cricket' && (
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 4.5l5 5m-11 11L4 16l9-9 4.5 4.5-9 9z" />
                          <circle cx="18" cy="18" r="2.5" fill="currentColor" />
                          <path strokeLinecap="round" d="M4 21h16" />
                        </svg>
                      )}

                      {sport.id === 'football' && (
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7l3.5 2.5v4.5L12 16.5 8.5 14V9.5z" fill="currentColor" fillOpacity="0.3" />
                          <path strokeLinecap="round" d="M12 3v4M12 17v4M3.5 8.5l3.5 2M17 10.5l3.5-2M4.5 16.5l4-2.5M15.5 14l4 2.5" />
                        </svg>
                      )}

                      {sport.id === 'badminton' && (
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2">
                          <circle cx="8" cy="8" r="5" strokeLinecap="round" />
                          <path strokeLinecap="round" d="M11.5 11.5L20 20" />
                          <path strokeLinecap="round" d="M18 18l2 2" strokeWidth="3" />
                          <path d="M14 5l4 4-2.5 1-2.5-2.5 1-2.5z" fill="currentColor" fillOpacity="0.4" />
                          <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Sport Name */}
                  <div className="text-center mb-3">
                    <h3 className={`text-2xl font-black font-heading uppercase italic tracking-tight ${
                      theme === 'dark' ? 'text-white' : 'text-zinc-900'
                    }`}>
                      {sport.name}
                    </h3>
                    <span className="text-[11px] font-mono text-green-500 uppercase tracking-widest block mt-1 font-semibold">
                      {sport.tagline}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className={`text-xs leading-relaxed text-center mb-6 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    "{sport.description}"
                  </p>

                  {/* Key Aspects list */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-2">
                      Key Competencies:
                    </span>
                    {sport.keyAspects.map((aspect, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <CheckCircle className={`w-3 h-3 shrink-0 ${
                          isPrimary ? 'text-green-500' : 'text-zinc-500'
                        }`} />
                        <span className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}>
                          {aspect}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className={`pt-4 border-t border-white/5 dark:border-white/5 light:border-zinc-200 flex items-center justify-between text-[11px] font-black uppercase tracking-wider ${
                  isPrimary ? 'text-green-400' : 'text-zinc-500'
                }`}>
                  <span>{isPrimary ? 'Central Sport Focus' : 'Athletic Versatility'}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
