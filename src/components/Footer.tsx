import React from 'react';
import { ArrowUp, Facebook, Instagram, Heart, Trophy, MapPin, Mail, Phone } from 'lucide-react';
import { ATHLETE_INFO, NAV_LINKS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <footer
      id="main-footer"
      className={`border-t transition-colors ${
        theme === 'dark'
          ? 'bg-zinc-950 border-white/5 text-zinc-400'
          : 'bg-white border-zinc-200 text-zinc-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand & Tagline (5 Cols) */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-green-500 text-black flex items-center justify-center font-black text-xs font-mono shadow-md shadow-green-500/20">
                TH
              </div>
              <div>
                <h3 className={`text-base font-black font-heading uppercase italic tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                  {ATHLETE_INFO.fullName}
                </h3>
                <p className="text-[10px] text-green-500 font-mono uppercase tracking-widest">
                  {ATHLETE_INFO.professionalTitle} • {ATHLETE_INFO.location}
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed max-w-sm text-zinc-400">
              "{ATHLETE_INFO.heroSummary}"
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-social-facebook"
                href={ATHLETE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook Profile of ${ATHLETE_INFO.facebookName}`}
                className={`p-2.5 rounded-2xl border transition-colors ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:bg-white/10'
                    : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:text-blue-600 hover:bg-zinc-200'
                }`}
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                id="footer-social-instagram"
                href={ATHLETE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram Profile of ${ATHLETE_INFO.instagramUsername}`}
                className={`p-2.5 rounded-2xl border transition-colors ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:bg-white/10'
                    : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:text-pink-600 hover:bg-zinc-200'
                }`}
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (4 Cols) */}
          <div className="md:col-span-4">
            <h4 className={`text-[10px] font-mono font-bold uppercase tracking-widest mb-4 ${
              theme === 'dark' ? 'text-zinc-300' : 'text-zinc-900'
            }`}>
              Navigation Index
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-1 transition-colors hover:text-green-400 font-mono text-xs uppercase ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Direct Links (3 Cols) */}
          <div className="md:col-span-3">
            <h4 className={`text-[10px] font-mono font-bold uppercase tracking-widest mb-4 ${
              theme === 'dark' ? 'text-zinc-300' : 'text-zinc-900'
            }`}>
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs font-mono">
              <a
                href={`mailto:${ATHLETE_INFO.email}`}
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-green-500 shrink-0" />
                <span className="truncate">{ATHLETE_INFO.email}</span>
              </a>
              <a
                href={`tel:${ATHLETE_INFO.phone}`}
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-green-500 shrink-0" />
                <span>{ATHLETE_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>{ATHLETE_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p id="footer-copyright-text" className="font-mono text-[11px] text-zinc-500">
            © 2026 Md Tazdir Hasan. All Rights Reserved. • Sports Person Portfolio
          </p>

          <button
            id="back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border text-[10px] font-mono uppercase font-bold tracking-wider transition-all duration-200 active:scale-95 cursor-pointer ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:border-white/20 hover:bg-white/10'
                : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-200'
            }`}
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-green-500" />
          </button>
        </div>

      </div>
    </footer>
  );
};
