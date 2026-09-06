import React from 'react';
import { MapPin, Medal, Trophy, GraduationCap, Quote, CheckCircle2 } from 'lucide-react';
import { ATHLETE_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { theme } = useTheme();

  const infoCards = [
    {
      id: 'info-location',
      label: 'Location',
      value: 'Meherpur, Bangladesh',
      subtext: 'Home & Training Base',
      icon: MapPin,
      accent: 'emerald'
    },
    {
      id: 'info-role',
      label: 'Professional Role',
      value: 'Sports Person',
      subtext: 'Dedicated Athlete',
      icon: Medal,
      accent: 'teal'
    },
    {
      id: 'info-sport',
      label: 'Main Sport',
      value: 'Cricket',
      subtext: 'Primary Passion & Focus',
      icon: Trophy,
      accent: 'amber'
    },
    {
      id: 'info-college',
      label: 'College',
      value: 'Meherpur Pauro Degree College',
      subtext: 'Arts Dept • Batch 2027',
      icon: GraduationCap,
      accent: 'cyan'
    }
  ];

  return (
    <section
      id="about"
      className={`py-20 lg:py-28 relative border-t ${
        theme === 'dark' ? 'bg-zinc-950 border-white/5' : 'bg-zinc-50 border-zinc-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
              Biography / Profile
            </span>
            <span className="text-green-500 text-sm font-serif font-black">01</span>
          </div>
          <h2
            id="about-section-heading"
            className={`text-4xl sm:text-5xl font-black font-heading tracking-tighter uppercase italic ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}
          >
            ABOUT <span className="text-green-500">ME</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded-full mt-3"></div>
        </div>

        {/* Modern Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Athletic Statement & Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div
              id="about-quote-card"
              className={`relative rounded-3xl p-8 overflow-hidden transition-all flex-1 flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-2xl shadow-black/60'
                  : 'bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50'
              }`}
            >
              {/* Radial green glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none"></div>
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    Philosophy
                  </span>
                  <div className="text-green-500 text-xl font-serif">"</div>
                </div>

                <p className={`text-lg sm:text-xl font-bold font-heading italic leading-relaxed mb-6 ${
                  theme === 'dark' ? 'text-zinc-200' : 'text-zinc-800'
                }`}>
                  "Sports build confidence, leadership, discipline, and teamwork. Every challenge on the field is an opportunity to grow through sheer dedication."
                </p>
              </div>

              <div className="flex items-center gap-3 pt-5 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
                <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-black font-black font-heading text-sm shadow-md shadow-green-500/20">
                  TH
                </div>
                <div>
                  <h4 className={`text-sm font-black font-heading uppercase tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {ATHLETE_INFO.fullName}
                  </h4>
                  <p className="text-[10px] text-green-500 font-mono uppercase tracking-widest">
                    {ATHLETE_INFO.professionalTitle} • Meherpur
                  </p>
                </div>
              </div>
            </div>

            {/* Core Athletic Tenets checklist */}
            <div
              className={`rounded-3xl p-6 border ${
                theme === 'dark' ? 'bg-zinc-900/40 border-white/5' : 'bg-white border-zinc-200 shadow-sm'
              }`}
            >
              <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">
                Core Athletic Tenets
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold">
                {['Consistent Practice', 'Tactical Pitch Vision', 'Match Discipline', 'Active Team Spirit'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                    <span className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Biography & Info Cards (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Biography Text Cards */}
            <div
              id="about-bio-text"
              className={`rounded-3xl p-6 sm:p-8 border space-y-4 leading-relaxed text-sm sm:text-base backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-zinc-900/40 border-white/5 text-zinc-300 shadow-lg'
                  : 'bg-white border-zinc-200 text-zinc-700 shadow-md'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  Athlete Background
                </span>
                <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">
                  Meherpur BD
                </span>
              </div>
              <p className="first-letter:text-4xl first-letter:font-black first-letter:text-green-500 first-letter:mr-2 first-letter:float-left first-letter:font-heading leading-relaxed">
                {ATHLETE_INFO.bioParagraphs[0]}
              </p>
              <p className="leading-relaxed">
                {ATHLETE_INFO.bioParagraphs[1]}
              </p>
              <p className="leading-relaxed">
                {ATHLETE_INFO.bioParagraphs[2]}
              </p>
            </div>

            {/* 4 Information Cards (Location, Role, Main Sport, College) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {infoCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.id}
                    id={card.id}
                    className={`rounded-2xl p-4 border transition-all duration-200 hover:-translate-y-0.5 ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                        : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500 block mb-0.5">
                          {card.label}
                        </span>
                        <span className={`text-xs sm:text-sm font-bold font-heading truncate ${
                          theme === 'dark' ? 'text-white' : 'text-zinc-900'
                        }`}>
                          {card.value}
                        </span>
                        <span className="text-[10px] text-zinc-500 mt-0.5 truncate">
                          {card.subtext}
                        </span>
                      </div>
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
};
