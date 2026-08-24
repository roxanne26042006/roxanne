import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon, Menu, X, ArrowRight, Phone } from 'lucide-react';

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
    { name: 'Programi', href: '#programi', id: 'programi' },
    { name: 'Raspored', href: '#raspored', id: 'raspored' },
    { name: 'Galerija', href: '#galerija', id: 'galerija' },
    { name: 'Upisi', href: '#upisi', id: 'upisi' },
    { name: 'Kontakt', href: '#kontakt', id: 'kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-cyan-900/40 shadow-lg shadow-cyan-950/20'
            : 'bg-white/90 backdrop-blur-md border-b border-cyan-100 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand zone: Single clean wordmark with glowing accent */}
          <a
            href="#pocetna"
            className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)]">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-wider font-heading bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                ROXANNE
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-400/80 font-medium -mt-1">
                Plesna Grupa
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? isDarkMode
                        ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                        : 'text-cyan-700 bg-cyan-50 border border-cyan-200'
                      : isDarkMode
                      ? 'text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60'
                      : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Zone: Theme Toggle & Call To Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-all duration-200 border ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-700 text-yellow-400 hover:border-yellow-400/50 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:border-cyan-400 hover:text-cyan-600'
              }`}
              title={isDarkMode ? 'Prebaci na svijetlu temu' : 'Prebaci na tamnu temu'}
              aria-label="Promijeni temu"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => onOpenEnrollment()}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_20px_rgba(6,182,212,0.45)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                Upisi 2026/27
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-300 hover:text-cyan-400"
              aria-label="Promijeni temu"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Otvori navigaciju"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b ${
            isDarkMode
              ? 'bg-slate-950/95 border-cyan-900/50 backdrop-blur-xl'
              : 'bg-white/95 border-cyan-200 backdrop-blur-xl'
          } px-4 pt-2 pb-6 space-y-2 shadow-2xl`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-base font-medium transition ${
                activeSection === link.id
                  ? isDarkMode
                    ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-500/40'
                    : 'text-cyan-700 bg-cyan-50 border border-cyan-200'
                  : isDarkMode
                  ? 'text-slate-300 hover:text-cyan-300 hover:bg-slate-900'
                  : 'text-slate-800 hover:text-cyan-600 hover:bg-slate-100'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="w-full py-3 rounded-xl font-bold text-center text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2"
            >
              <span>Upiši se sada</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
