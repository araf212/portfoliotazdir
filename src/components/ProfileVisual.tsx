import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw, Trophy, Shield, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ATHLETE_INFO } from '../data/portfolioData';

export const ProfileVisual: React.FC<{ size?: 'hero' | 'about' }> = ({ size = 'hero' }) => {
  const { theme } = useTheme();
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedPhoto = localStorage.getItem('tazdir-sports-custom-avatar');
    if (savedPhoto) {
      setCustomPhoto(savedPhoto);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Please select an image smaller than 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhoto(result);
        try {
          localStorage.setItem('tazdir-sports-custom-avatar', result);
        } catch {
          // localStorage quota exceeded fallback
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomPhoto(null);
    localStorage.removeItem('tazdir-sports-custom-avatar');
  };

  const isHero = size === 'hero';

  return (
    <div className="relative w-full max-w-md mx-auto flex flex-col items-center">
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-green-500/15 rounded-3xl blur-3xl opacity-70 animate-pulse pointer-events-none"></div>

      {/* Main Container Card */}
      <div
        id={isHero ? "hero-profile-container" : "about-profile-container"}
        className={`relative w-full rounded-3xl overflow-hidden p-6 transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-2xl shadow-black/80'
            : 'bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50'
        }`}
      >
        {/* Top bar with athlete identification badge */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/5 dark:border-white/5 light:border-zinc-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-green-500">
              Athlete Profile
            </span>
          </div>
          <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider border ${
            theme === 'dark'
              ? 'bg-zinc-800/80 border-white/10 text-zinc-400'
              : 'bg-zinc-100 border-zinc-200 text-zinc-700'
          }`}>
            CRICKET SPECIALIST
          </span>
        </div>

        {/* Visual Frame */}
        <div className="relative aspect-square w-full max-w-[320px] mx-auto rounded-3xl overflow-hidden flex items-center justify-center p-3">
          {/* Animated concentric stadium rings */}
          <div className="absolute inset-0 rounded-3xl border border-green-500/30 border-dashed animate-[spin_40s_linear_infinite]"></div>
          <div className="absolute inset-2 rounded-2xl border border-white/5 pointer-events-none"></div>

          {customPhoto ? (
            /* User uploaded real photo preview */
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner group">
              <img
                src={customPhoto}
                alt={ATHLETE_INFO.fullName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <button
                id="reset-avatar-btn"
                type="button"
                onClick={handleReset}
                title="Reset to sports badge"
                className="absolute top-3 right-3 p-2 rounded-full bg-black/70 text-white hover:bg-rose-600 transition-colors shadow-lg"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            /* Stylish sports-themed athletic placeholder */
            <div className={`relative w-full h-full rounded-2xl flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden ${
              theme === 'dark'
                ? 'bg-zinc-950/80 border border-white/5'
                : 'bg-zinc-50 border border-zinc-200'
            }`}>
              {/* Abstract radial green glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.2),transparent_70%)] pointer-events-none"></div>
              <div className="absolute top-8 right-8 w-24 h-24 bg-green-500/20 blur-2xl rounded-full"></div>

              {/* Dynamic Cricket Bats & Shield Vector Crest */}
              <div className="relative z-10 mb-3">
                <div className="w-24 h-24 rounded-full border-2 border-green-500 flex items-center justify-center relative p-1 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  <div className="absolute inset-0 border border-green-500/30 rounded-full animate-ping pointer-events-none"></div>
                  <div className={`w-full h-full rounded-full flex flex-col items-center justify-center ${
                    theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
                  }`}>
                    {/* Stylized SVG Cricket Silhouette / Shield */}
                    <svg
                      viewBox="0 0 100 100"
                      className="w-14 h-14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Shield contour */}
                      <path
                        d="M50 8L82 22V50C82 70 50 92 50 92C50 92 18 70 18 50V22L50 8Z"
                        className="stroke-green-500"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                      {/* Crossed Cricket Bats */}
                      <line x1="32" y1="68" x2="68" y2="32" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" />
                      <line x1="68" y1="68" x2="32" y2="32" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" />
                      {/* Stumps in middle */}
                      <line x1="45" y1="36" x2="45" y2="64" stroke="#4ade80" strokeWidth="2" />
                      <line x1="50" y1="36" x2="50" y2="64" stroke="#4ade80" strokeWidth="2" />
                      <line x1="55" y1="36" x2="55" y2="64" stroke="#4ade80" strokeWidth="2" />
                      {/* Bails */}
                      <line x1="43" y1="36" x2="57" y2="36" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
                      {/* Cricket Leather Ball */}
                      <circle cx="50" cy="50" r="8" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Identity & Sports Role */}
              <div className="relative z-10">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold mb-0.5">
                  High Proficiency
                </span>
                <h4 className={`text-xl font-black font-heading uppercase italic tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                  Cricket
                </h4>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Md Tazdir Hasan • Meherpur
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Upload Custom Photo Option */}
        <div className="mt-4 pt-3 border-t border-white/5 dark:border-white/5 light:border-zinc-200 flex items-center justify-between text-xs">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
            id="athlete-photo-upload"
          />
          <button
            id="upload-photo-btn"
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              theme === 'dark'
                ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-white/5'
                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 border border-zinc-200'
            }`}
          >
            <Camera className="w-3 h-3 text-green-500" />
            <span>{customPhoto ? 'Change Photo' : 'Upload Real Photo'}</span>
          </button>

          <div className="flex items-center gap-1.5 text-green-400 font-mono text-[10px] uppercase tracking-widest font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Verified</span>
          </div>
        </div>

        {/* Quick status pill highlights */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
          <div className={`p-2.5 rounded-2xl border ${
            theme === 'dark' ? 'bg-zinc-900/60 border-white/5 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-700'
          }`}>
            <span className="text-[10px] uppercase text-zinc-500 block font-bold">Location</span>
            <span className="font-bold text-green-400">Meherpur, BD</span>
          </div>
          <div className={`p-2.5 rounded-2xl border ${
            theme === 'dark' ? 'bg-zinc-900/60 border-white/5 text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-700'
          }`}>
            <span className="text-[10px] uppercase text-zinc-500 block font-bold">Degree</span>
            <span className="font-bold text-white dark:text-zinc-200">Class of 2027</span>
          </div>
        </div>
      </div>
    </div>
  );
};
