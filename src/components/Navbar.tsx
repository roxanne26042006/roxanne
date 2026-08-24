import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
// Ovdje "uvozimo" sliku kao varijablu - ovo je najsigurniji način u Reactu
import logoImg from '../assets/ballerina-logo.png';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  onOpenEnrollment: (programId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  toggleDarkMode,
  activeSection,
  onOpenEnrollment,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Početna', href: '#pocetna', id: 'pocetna' },
    { name: 'O nama', href: '#o-nama', id: 'o-nama' },
    { name: 'Grupe', href: '#programi', id: 'programi' }, 
    { name: 'Raspored', href: '#raspored', id: 'raspored' },
    { name: 'Kontakt', href: '#kontakt', id: 'kontakt' },
  ];

  return (
    <header className={isScrolled ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-950/85 backdrop-blur-md border-b border-cyan-900/40 shadow-lg" : "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO SEKCIJA SA SLIKOM */}
          <a href="#pocetna" className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-105">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] overflow-hidden">
              <img 
                src={logoImg} 
                alt="Roxanne Logo" 
                className="w-8 h-8 object-contain" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-wider font-heading bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">ROXANNE</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-400/80 font-medium -mt-1">Plesna Grupa</span>
            </div>
          </a>

          {/* Desktop Navigacija */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={activeSection === link.id ? "px-3.5 py-2 rounded-lg text-sm font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/40" : "px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-300"}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Akcije */}
          <div className="hidden sm:flex items-center gap-3">
            <button onClick={toggleDarkMode} className="p-2.5 rounded-xl border border-slate-700 text-yellow-400">
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => onOpenEnrollment()} className="px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 shadow-[0_0_20px_rgba(6,182,212,0.45)] transition-all transform hover:-translate-y-0.5">
              Upisi 2026/27
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-300">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-slate-300">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};