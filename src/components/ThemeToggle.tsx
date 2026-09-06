import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400/50 flex items-center p-0.5 border ${
        theme === 'dark'
          ? 'bg-zinc-800 border-zinc-700/80 justify-start'
          : 'bg-zinc-200 border-zinc-300 justify-end'
      } ${className}`}
    >
      <div
        className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
          theme === 'dark'
            ? 'bg-white text-zinc-950 translate-x-0.5'
            : 'bg-zinc-950 text-white -translate-x-0.5'
        }`}
      >
        {theme === 'dark' ? (
          <Sun className="w-2.5 h-2.5 text-zinc-900" />
        ) : (
          <Moon className="w-2.5 h-2.5 text-white" />
        )}
      </div>
    </button>
  );
};
