import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/danceData';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, Play, Trophy, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface GalleryProps {
  isDarkMode: boolean;
  onOpenVideoModal: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ isDarkMode, onOpenVideoModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'Sve fotografije' },
    { id: 'nastupi', label: 'Nastupi & Gala' },
    { id: 'natjecanja', label: 'Natjecanja & Zlato' },
    { id: 'dvorana', label: 'Studio & Atmosfera' },
    { id: 'radionice', label: 'Radionice & Kampovi' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  const openLightbox = (index: number) => {
    setActiveItemIndex(index);
  };

  const closeLightbox = () => {
    setActiveItemIndex(null);
  };

  const nextImage = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  return (
    <section id="galerija" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trenuci na sceni i izvan nje</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Galerija plesa i{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              nezaboravnih emocija
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Pogledaj kako izgledaju naši nastupi pod svjetlima reflektora, pobjednička postolja i svakodnevna energija u Roxanne dvoranama.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                selectedFilter === f.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : isDarkMode
                  ? 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  : 'bg-slate-100 text-slate-700 hover:text-cyan-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-slate-800/80 hover:border-cyan-400/80 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Award or Video Pill Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                  {item.categoryName}
                </span>

                {item.isVideo && (
                  <span className="w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </span>
                )}
                {item.award && !item.isVideo && (
                  <span className="w-8 h-8 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-[0_0_10px_rgba(20,184,166,0.8)]">
                    <Trophy className="w-4 h-4" />
                  </span>
                )}
              </div>

              {/* Hover Details */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1.5 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="text-[11px] text-cyan-400 font-semibold flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{item.year}</span>
                </div>
                <h4 className="text-base font-bold text-white font-heading leading-tight drop-shadow-md">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3" />
                  <span>Otvori u punoj veličini</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Reel Promo Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenVideoModal}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:scale-105 transition cursor-pointer shrink-0"
              title="Pokreni video"
            >
              <Play className="w-7 h-7 fill-current ml-1" />
            </button>
            <div>
              <h4 className="text-lg font-bold text-white font-heading">
                Pogledaj naš službeni video pregled sezone
              </h4>
              <p className="text-xs text-slate-400">
                Plesne predstave, backstage trenuci i atmosfere s natjecanja u HD kvaliteti.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenVideoModal}
            className="px-5 py-2.5 rounded-xl font-bold text-xs bg-cyan-950 text-cyan-300 border border-cyan-700 hover:bg-cyan-900 transition whitespace-nowrap cursor-pointer"
          >
            Pokreni Roxanne Showreel (3:45)
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-400 transition z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-400 transition z-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-400 transition z-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col rounded-3xl overflow-hidden bg-slate-900 border border-cyan-500/40 shadow-2xl shadow-cyan-950/80"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[340px] sm:min-h-[480px]">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[65vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-slate-950 space-y-2 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 font-bold border border-cyan-800">
                  {currentItem.categoryName} • {currentItem.year}
                </span>
                {currentItem.award && (
                  <span className="px-3 py-1 rounded-full bg-teal-950 text-teal-300 font-bold border border-teal-800 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" />
                    {currentItem.award}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold font-heading text-white">
                {currentItem.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
