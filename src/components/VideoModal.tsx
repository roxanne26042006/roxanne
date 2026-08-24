import React from 'react';
import { X, Play, Sparkles, Volume2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-slate-900 border border-cyan-500/50 shadow-2xl shadow-cyan-950/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-6 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-sm font-bold text-white font-heading">
              Plesna Grupa Roxanne — Službeni Showreel
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {/* Animated Dance Visualizer Simulation */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-cyan-950/50 to-blue-950" />
          <img
            src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80"
            alt="Plesna predstava Roxanne"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          <div className="relative z-10 text-center space-y-4 p-6">
            <div className="w-20 h-20 rounded-full bg-cyan-400/90 text-slate-950 mx-auto flex items-center justify-center shadow-[0_0_35px_rgba(6,182,212,0.9)] animate-pulse">
              <Play className="w-10 h-10 fill-current ml-1" />
            </div>
            <div>
              <h3 className="text-2xl font-black font-heading text-white">
                Roxanne Dance Highlights 2025/2026
              </h3>
              <p className="text-xs text-cyan-300">
                Plesne predstave, europska natjecanja i energija studija
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/40 text-[11px] text-slate-300">
              <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Glazba: Roxanne Contemporary Symphony Mix</span>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-4 px-6 bg-slate-950 text-xs text-slate-400 flex items-center justify-between">
          <span>Koreografija: Ema Horvat & Roxanne Choreography Team</span>
          <a
            href="#upisi"
            onClick={onClose}
            className="text-cyan-400 hover:text-cyan-300 font-bold"
          >
            Prijavi se na upise →
          </a>
        </div>
      </div>
    </div>
  );
};
