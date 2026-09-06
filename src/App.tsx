import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Sports } from './components/Sports';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Values } from './components/Values';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Sports />
          <Experience />
          <Skills />
          <Education />
          <Values />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

