import React from 'react';
import { TESTIMONIALS } from '../data/danceData';
import { Star, Sparkles, Quote } from 'lucide-react';

interface TestimonialsProps {
  isDarkMode: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ isDarkMode }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Iskustva članova i roditelja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Što kažu naši{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              plesači i obitelji
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Iskrena iskustva onih koji svakodnevno dijele plesne dvorane, putovanja i pobjede s nama.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl border relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                isDarkMode
                  ? 'bg-slate-900/75 border-slate-800 hover:border-cyan-500/50'
                  : 'bg-white border-slate-200 hover:border-cyan-300 shadow-sm'
              }`}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Quote className="w-5 h-5" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              {/* Content */}
              <p className={`text-sm leading-relaxed mb-6 flex-1 italic ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                "{item.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white font-heading">
                    {item.name}
                  </h4>
                  <p className="text-xs text-cyan-400 font-medium">{item.role}</p>
                  <p className="text-[11px] text-slate-400">{item.yearsInRoxanne} god. u Roxanne</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
