import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Programs } from './components/Programs';
import { Schedule } from './components/Schedule';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Enrollment } from './components/Enrollment';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('roxanne-theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [activeSection, setActiveSection] = useState<string>('pocetna');
  const [selectedProgramForEnroll, setSelectedProgramForEnroll] = useState<string>('suvremeni-ples');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('roxanne-theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const sections = ['pocetna', 'o-nama', 'programi', 'raspored', 'galerija', 'upisi', 'kontakt'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenEnrollment = (programId?: string) => {
    if (programId) {
      setSelectedProgramForEnroll(programId);
    }
    const enrollElem = document.getElementById('upisi');
    if (enrollElem) {
      enrollElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        onOpenEnrollment={handleOpenEnrollment}
      />

      <main>
        <Hero
          isDarkMode={isDarkMode}
          onOpenEnrollment={() => handleOpenEnrollment()}
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
        />

        <AboutUs isDarkMode={isDarkMode} />

        <Programs
          isDarkMode={isDarkMode}
          onSelectProgram={handleOpenEnrollment}
        />

        <Schedule
          isDarkMode={isDarkMode}
          onOpenEnrollment={() => handleOpenEnrollment()}
        />

        {/* --- GALERIJA JE SAKRIVENA ISPOD --- */}
        {false && (
          <Gallery
            isDarkMode={isDarkMode}
            onOpenVideoModal={() => setIsVideoModalOpen(true)}
          />
        )}

        <Testimonials isDarkMode={isDarkMode} />

        <Enrollment
          isDarkMode={isDarkMode}
          preselectedProgramId={selectedProgramForEnroll}
        />

        <Contact isDarkMode={isDarkMode} />
      </main>

      <Footer isDarkMode={isDarkMode} />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}