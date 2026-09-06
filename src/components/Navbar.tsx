import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy } from 'lucide-react';
import { NAV_LINKS, ATHLETE_INFO } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = NAV_LINKS.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-zinc-950/80 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/40 py-3.5'
            : 'bg-white/90 backdrop-blur-md border-b border-zinc-200/90 shadow-md shadow-zinc-200/40 py-3.5'
          : theme === 'dark'
          ? 'bg-zinc-950/50 backdrop-blur-sm border-b border-white/5 py-4'
          : 'bg-white/60 backdrop-blur-sm border-b border-zinc-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Name */}
          <a
            id="nav-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center font-black text-black text-sm tracking-tighter shadow-md shadow-green-500/20 group-hover:bg-green-400 transition-colors">
              T
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-lg sm:text-xl font-black font-heading tracking-tighter uppercase transition-colors ${
                theme === 'dark' ? 'text-white group-hover:text-green-400' : 'text-zinc-950 group-hover:text-green-600'
              }`}>
                {ATHLETE_INFO.shortName}
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-green-500 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                ATHLETE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs font-semibold uppercase tracking-widest">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  id={`nav-link-${sectionId}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-1 transition-all duration-200 relative ${
                    isActive
                      ? 'text-green-400 font-bold'
                      : theme === 'dark'
                      ? 'text-zinc-400 hover:text-green-400'
                      : 'text-zinc-600 hover:text-green-600'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Theme Toggle & Quick CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              id="nav-cta-contact"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 bg-green-500 text-black px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-green-400 shadow-lg shadow-green-500/20 transition-all duration-200 active:scale-95"
            >
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Right Bar: Theme Toggle & Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className={`p-2 rounded-xl border transition-colors ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-white/10 text-zinc-300 hover:text-white'
                  : 'bg-white border-zinc-200 text-zinc-700 hover:text-zinc-900'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className={`md:hidden px-4 pt-3 pb-6 border-b transition-all ${
            theme === 'dark'
              ? 'bg-zinc-950/95 border-white/10 text-white backdrop-blur-xl'
              : 'bg-white/95 border-zinc-200 text-zinc-900 backdrop-blur-xl'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-${sectionId}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                      : theme === 'dark'
                      ? 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                      : 'text-zinc-700 hover:bg-zinc-100'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]"></span>}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                id="mobile-cta-contact"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-black uppercase tracking-wider text-black bg-green-500 hover:bg-green-400 shadow-md shadow-green-500/20 active:scale-95"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
