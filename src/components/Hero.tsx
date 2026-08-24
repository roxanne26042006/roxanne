import React from 'react';
import { ArrowRight, Play, Award, Sparkles, Flame, Users, Calendar } from 'lucide-react';
import { ParticleDancerCanvas } from './ParticleDancerCanvas';

interface HeroProps {
  isDarkMode: boolean;
  onOpenEnrollment: () => void;
  onOpenVideoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  isDarkMode,
  onOpenEnrollment,
  onOpenVideoModal,
}) => {
  return (
    <section id="pocetna" className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic Interactive Particle Dancer Background Canvas */}
      <div className="absolute inset-0 z-0">
        <ParticleDancerCanvas isDarkMode={isDarkMode} className="w-full h-full" interactive={true} />
        {/* Subtle radial vignette gradient to ensure maximum text readability */}
        <div
          className={`absolute inset-0 pointer-events-none ${
            isDarkMode
              ? 'bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/30 lg:from-slate-950/90 lg:via-slate-950/60 lg:to-transparent'
              : 'bg-gradient-to-r from-white/95 via-white/80 to-white/40 lg:from-white/95 lg:via-white/70 lg:to-transparent'
          }`}
        />
        {/* Fluorescent glow orb in the backdrop */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content Column */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Announcement badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>Otvoreni upisi za novu plesnu sezonu 2026/2027.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-white font-normal">Prvi sat je besplatan!</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] font-heading">
                <span className="block text-slate-900 dark:text-white">Osjeti ritam.</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  Izrazi se kroz pokret.
                </span>
                <span className="block text-slate-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-1">
                  Plesna grupa <span className="underline decoration-cyan-400 decoration-wavy decoration-2">Roxanne</span>
                </span>
              </h1>
              <p className={`text-base sm:text-lg max-w-2xl font-normal leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Vodeći plesni studio suvremenog, jazz i urbanog plesa za djecu, mlade i odrasle.
                Pronađi svoju strast, usavrši tehniku i zapleši s nama na prestižnim pozornicama i natjecanjima.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenEnrollment}
                className="px-7 py-3.5 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_25px_rgba(6,182,212,0.55)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
              >
                <span>Upiši se na besplatni sat</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={onOpenVideoModal}
                className={`px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 flex items-center gap-2.5 border backdrop-blur-md cursor-pointer ${
                  isDarkMode
                    ? 'bg-slate-900/80 border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/60 hover:border-cyan-400 hover:text-white'
                    : 'bg-white/80 border-cyan-300 text-slate-900 hover:bg-cyan-50 hover:border-cyan-500'
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Pogledaj video nastupe</span>
              </button>
            </div>

            {/* Social Proof / Metrics Row */}
            <div className="pt-6 border-t border-cyan-900/30 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-2xl sm:text-3xl font-heading">
                  <span>16+</span>
                  <Award className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-xs text-slate-400 font-medium">Godina tradicije</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-teal-400 font-bold text-2xl sm:text-3xl font-heading">
                  <span>120+</span>
                  <Flame className="w-4 h-4 text-teal-400" />
                </div>
                <p className="text-xs text-slate-400 font-medium">Osvojenih medalja</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-sky-400 font-bold text-2xl sm:text-3xl font-heading">
                  <span>350+</span>
                  <Users className="w-4 h-4 text-sky-400" />
                </div>
                <p className="text-xs text-slate-400 font-medium">Aktivnih članova</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-2xl sm:text-3xl font-heading">
                  <span>6</span>
                  <Calendar className="w-4 h-4 text-cyan-300" />
                </div>
                <p className="text-xs text-slate-400 font-medium">Plesnih programa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
