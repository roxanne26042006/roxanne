import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../data/danceData';
import { Sparkles, Calendar, Clock, MapPin, User, Download, Check } from 'lucide-react';

interface ScheduleProps {
  isDarkMode: boolean;
  onOpenEnrollment: () => void;
}

export const Schedule: React.FC<ScheduleProps> = ({ isDarkMode, onOpenEnrollment }) => {
  const [selectedDay, setSelectedDay] = useState<string>('Ponedjeljak');
  const [selectedHall, setSelectedHall] = useState<string>('all');
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const days = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];

  const filteredSchedule = SCHEDULE_DATA.filter((item) => {
    const matchesDay = selectedDay === 'all' || item.day === selectedDay;
    const matchesHall = selectedHall === 'all' || item.hall.includes(selectedHall);
    return matchesDay && matchesHall;
  });

  const handleDownloadTimetable = () => {
    // Generate text/csv formatted schedule for immediate download
    const header = 'Dan,Vrijeme,Program,Dob,Dvorana,Trener\n';
    const rows = SCHEDULE_DATA.map(
      (s) => `"${s.day}","${s.time}","${s.programTitle}","${s.ageGroup}","${s.hall}","${s.trainer}"`
    ).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'Plesna_Grupa_Roxanne_Raspored_2025_2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <section id="raspored" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tjedni termini</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Raspored treninga za{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              sezonu 2025/2026
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Treninzi se održavaju u našim klimatiziranim dvoranama s vrhunskim ozvučenjem i profesionalnim baletnim podom.
          </p>
        </div>

        {/* Action & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Day switcher pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                  selectedDay === day
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Quick download schedule button */}
          <button
            type="button"
            onClick={handleDownloadTimetable}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition flex items-center gap-2 cursor-pointer ${
              downloadSuccess
                ? 'bg-teal-500/20 text-teal-300 border-teal-500'
                : 'bg-slate-900/80 text-cyan-300 border-cyan-500/30 hover:border-cyan-400'
            }`}
          >
            {downloadSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-teal-400" />
                <span>Preuzeto!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Preuzmi raspored (.csv)</span>
              </>
            )}
          </button>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSchedule.length > 0 ? (
            filteredSchedule.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                  isDarkMode
                    ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40'
                    : 'bg-white border-slate-200 hover:border-cyan-300 shadow-sm'
                }`}
              >
                {/* Header Time and Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold text-sm bg-cyan-950/70 px-3 py-1 rounded-lg border border-cyan-900">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {item.level}
                  </span>
                </div>

                {/* Class Title */}
                <h4 className="text-lg font-bold font-heading mb-1 text-slate-900 dark:text-white">
                  {item.programTitle}
                </h4>

                <div className="text-xs text-cyan-300 font-medium mb-4">
                  Dob: {item.ageGroup}
                </div>

                {/* Location and Trainer */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span className="text-slate-300">{item.hall}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Trener: <strong className="text-slate-200">{item.trainer}</strong></span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-end">
                  <button
                    onClick={onOpenEnrollment}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1"
                  >
                    Prijava na ovaj termin →
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-400">
              Nema zakazanih treninga za odabrani dan ili dvoranu.
            </div>
          )}
        </div>

        {/* Location / Dvorane Mini Info */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950/60 border border-cyan-900/40 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>Adresa studija: <strong>Glavna plesna avenija 14, 10000 Zagreb</strong></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> Dvorana 1 (180 m²)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400" /> Dvorana 2 (110 m²)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400" /> Dvorana 3 (80 m²)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
