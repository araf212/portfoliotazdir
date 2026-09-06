import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle, Clock } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Education: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="education"
      className={`py-20 lg:py-28 relative border-t ${
        theme === 'dark' ? 'bg-zinc-950 border-white/5' : 'bg-zinc-100 border-zinc-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
              Academic Pursuits
            </span>
            <span className="text-green-500 text-sm font-serif font-black">04</span>
          </div>
          <h2
            id="education-section-heading"
            className={`text-4xl sm:text-5xl font-black font-heading tracking-tighter uppercase italic ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}
          >
            ACADEMIC <span className="text-green-500">JOURNEY</span>
          </h2>
          <p className="max-w-md text-zinc-400 mt-2 text-xs sm:text-sm font-medium">
            Balancing educational milestones in the Arts department with competitive sports training.
          </p>
          <div className="w-12 h-1 bg-green-500 rounded-full mt-3"></div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute top-8 bottom-8 left-5 sm:left-7 w-px bg-gradient-to-b from-green-500 via-green-500/40 to-transparent"></div>

          <div className="space-y-8">
            {EDUCATION_DATA.map((item, index) => {
              const isInProgress = item.status === 'In Progress';

              return (
                <div
                  key={item.institution}
                  id={`education-item-${index}`}
                  className="relative flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Timeline Icon Node */}
                  <div className={`relative z-10 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105 shadow-lg ${
                    isInProgress
                      ? 'bg-green-500 text-black border-green-400 shadow-green-500/20'
                      : theme === 'dark'
                      ? 'bg-zinc-900 text-zinc-400 border-white/10'
                      : 'bg-white text-zinc-600 border-zinc-200'
                  }`}>
                    {isInProgress ? (
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </div>

                  {/* Education Card Content */}
                  <div className={`flex-1 rounded-3xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/60 shadow-lg'
                      : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                        isInProgress
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                          : 'bg-white/5 text-zinc-400 border border-white/10'
                      }`}>
                        {isInProgress ? (
                          <>
                            <Clock className="w-3 h-3 text-green-500 animate-spin-slow" />
                            Current Degree Studies
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-3 h-3 text-zinc-400" />
                            Secondary Education
                          </>
                        )}
                      </span>

                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-green-500">
                        <Calendar className="w-3.5 h-3.5 text-green-500" />
                        <span>{item.yearOrExpected}</span>
                      </div>
                    </div>

                    <h3 className={`text-lg sm:text-xl font-black font-heading uppercase italic tracking-tight mb-1.5 ${
                      theme === 'dark' ? 'text-white' : 'text-zinc-900'
                    }`}>
                      {item.institution}
                    </h3>

                    {item.department && (
                      <p className="text-xs font-mono font-bold text-green-500 mb-2 uppercase tracking-wide">
                        Department: {item.department}
                      </p>
                    )}

                    <div className="text-xs text-zinc-500 mb-3 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      <span>{item.location}</span>
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
