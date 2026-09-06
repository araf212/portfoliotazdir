import React from 'react';
import { ArrowRight, Mail, Instagram, Facebook, Compass, Flame } from 'lucide-react';
import { ATHLETE_INFO } from '../data/portfolioData';
import { ProfileVisual } from './ProfileVisual';
import { useTheme } from '../context/ThemeContext';

export const Hero: React.FC = () => {
  const { theme } = useTheme();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className={`relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden ${
        theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-900'
      }`}
    >
      {/* Immersive UI Radial Atmospheric Spotlight */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-12 right-12 w-64 h-64 bg-green-500/15 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-green-500/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Background Stadium Grid Lines */}
      <div className="absolute inset-0 bg-pitch-grid opacity-25 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Location & Title Monospace Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-500 font-mono text-xs sm:text-sm uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Meherpur, Bangladesh
              </span>
              <span className="text-zinc-600 font-mono text-xs">•</span>
              <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                {ATHLETE_INFO.professionalTitle}
              </span>
            </div>

            {/* Main Athlete Name in Immersive UI bold italic typography */}
            <h1
              id="hero-athlete-name"
              className="text-5xl sm:text-6xl md:text-7xl font-black font-heading tracking-tighter leading-[0.92] mb-4 uppercase italic"
            >
              MD TAZDIR<br />
              <span className="text-green-500">HASAN</span>
            </h1>

            {/* Sports Core Triad Tagline */}
            <div className="mb-5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-black uppercase tracking-widest text-zinc-400">
              <span className="text-green-400">PASSION</span>
              <span className="text-zinc-600">•</span>
              <span className="text-white dark:text-zinc-200">DISCIPLINE</span>
              <span className="text-zinc-600">•</span>
              <span className="text-green-400">PERFORMANCE</span>
            </div>

            {/* Short Description */}
            <p className={`text-sm sm:text-base max-w-lg mb-8 leading-relaxed font-normal ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              "{ATHLETE_INFO.heroSummary}"
            </p>

            {/* Immersive UI Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                id="hero-cta-journey"
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-green-500 text-black px-7 py-3 rounded-full text-xs font-black uppercase tracking-wider hover:bg-green-400 shadow-lg shadow-green-500/20 active:scale-95 transition-all duration-200 group"
              >
                <span>Explore Journey</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-cta-contact"
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-black uppercase tracking-wider active:scale-95 transition-all duration-200 border ${
                  theme === 'dark'
                    ? 'bg-zinc-800 border-white/10 text-white hover:bg-zinc-700'
                    : 'bg-white border-zinc-300 text-zinc-900 hover:bg-zinc-100 shadow-sm'
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-green-500" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Media & Quick Attributes */}
            <div className={`pt-5 border-t w-full flex flex-wrap items-center justify-between gap-4 ${
              theme === 'dark' ? 'border-white/5' : 'border-zinc-200'
            }`}>
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">
                  Connect:
                </span>
                
                {/* Facebook */}
                <a
                  id="hero-social-facebook"
                  href={ATHLETE_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-blue-500/40'
                      : 'bg-white border-zinc-200 text-zinc-700 hover:text-blue-600 hover:bg-zinc-50'
                  }`}
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-400" />
                  <span>{ATHLETE_INFO.facebookName}</span>
                </a>

                {/* Instagram */}
                <a
                  id="hero-social-instagram"
                  href={ATHLETE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-pink-500/40'
                      : 'bg-white border-zinc-200 text-zinc-700 hover:text-pink-600 hover:bg-zinc-50'
                  }`}
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>{ATHLETE_INFO.instagramUsername}</span>
                </a>
              </div>

              {/* Cricket Primary Indicator */}
              <div className="flex items-center gap-2 text-xs font-semibold text-green-500 font-mono uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-green-500 animate-spin-slow" />
                <span>Primary: Cricket</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Area (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ProfileVisual size="hero" />
          </div>

        </div>
      </div>
    </section>
  );
};
