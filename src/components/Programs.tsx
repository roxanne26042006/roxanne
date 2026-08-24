import React, { useState } from 'react';
import { DANCE_PROGRAMS } from '../data/danceData';
import { DanceProgram } from '../types';
import { Sparkles, Clock, Calendar, CheckCircle2, ArrowRight, UserCheck, Flame } from 'lucide-react';

interface ProgramsProps {
  isDarkMode: boolean;
  onSelectProgram: (programId: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ isDarkMode, onSelectProgram }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<DanceProgram | null>(null);

  const categories = [
    { id: 'all', label: 'Svi programi' },
    { id: 'contemporary', label: 'Suvremeni & Lyrical' },
    { id: 'jazz', label: 'Modern Jazz' },
    { id: 'hiphop', label: 'Hip Hop & Urban' },
    { id: 'showdance', label: 'Show Dance' },
    { id: 'kids', label: 'Djeca & Vrtić' },
    { id: 'competition', label: 'Natjecateljski tim' },
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? DANCE_PROGRAMS
    : DANCE_PROGRAMS.filter((p) => p.category === selectedCategory);

  return (
    <section id="programi" className="py-24 relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Plesni stilovi & tečajevi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Odaberi svoj plesni smjer u{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              Roxanne studiju
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Programi prilagođeni svim uzrastima i razinama predznanja — od razigranih dječjih početaka do profesionalnih natjecateljskih formacija.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : isDarkMode
                  ? 'bg-slate-900/80 text-slate-300 hover:text-cyan-300 hover:bg-slate-800 border border-slate-800'
                  : 'bg-slate-100 text-slate-700 hover:text-cyan-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className={`rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col group hover:-translate-y-1.5 hover:shadow-2xl ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/50 hover:shadow-cyan-950/50'
                  : 'bg-white border-slate-200 hover:border-cyan-400 hover:shadow-cyan-100'
              }`}
            >
              {/* Card Image Cover with Badges */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Level / Category Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/85 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                    {program.categoryLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-900/85 text-teal-300 border border-teal-500/40 backdrop-blur-md">
                    {program.level}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold font-heading text-white drop-shadow-md">
                    {program.title}
                  </h3>
                  <p className="text-xs text-cyan-300 font-medium">{program.ageGroup}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {program.description}
                </p>

                {/* Program Details List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60 text-xs">
                  <div className="flex items-center gap-2 text-slate-300 dark:text-slate-300">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 dark:text-slate-300">
                    <Calendar className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{program.scheduleSnippet}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 dark:text-slate-300">
                    <UserCheck className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Trener: <strong className="text-cyan-300">{program.trainer}</strong></span>
                  </div>
                </div>

                {/* Key Highlights Pill Tags */}
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Fokus treninga:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {program.highlights.slice(0, 3).map((hl, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-cyan-950/40 text-cyan-300 border border-cyan-900/60"
                      >
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action Button */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-medium">Mjesečna članarina</div>
                    <div className="text-2xl font-black text-white font-heading">
                      {program.pricePerMonth} €<span className="text-xs text-slate-400 font-normal"> / mj.</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProgram(program.id)}
                    className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Upiši program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Trial Class Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border border-cyan-500/40 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-cyan-500/10 blur-2xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                <Flame className="w-3.5 h-3.5 text-cyan-400" />
                <span>Nisi siguran koji je stil za tebe?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Dođi na besplatan probni sat i isprobaj više stilova!
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl">
                Bez ikakvih obveza dođi u studio, upoznaj trenere i osjeti energiju naše plesne dvorane.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectProgram('probni-sat')}
              className="px-6 py-3.5 rounded-xl font-extrabold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_20px_rgba(6,182,212,0.6)] whitespace-nowrap self-start lg:self-auto cursor-pointer flex items-center gap-2"
            >
              <span>Rezerviraj besplatni sat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
