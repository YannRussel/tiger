import React, { useEffect, useState } from 'react';
import { Maximize2, Minimize2, Pause, Play, RotateCcw, SkipForward } from 'lucide-react';
import { DocumentaryChapter } from '@/src/types/tiger';

interface DocumentaryVideoPlayerProps {
  title: string;
  duration: string;
  chapters: DocumentaryChapter[];
}

export const DocumentaryVideoPlayer: React.FC<DocumentaryVideoPlayerProps> = ({
  title,
  duration,
  chapters,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const activeChapter = chapters[activeIndex] || chapters[0];

  useEffect(() => {
    setActiveIndex(0);
    setProgress(0);
    setIsPlaying(false);
  }, [title]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (activeIndex < chapters.length - 1) {
            setActiveIndex((idx) => idx + 1);
            return 0;
          }
          setIsPlaying(false);
          return 100;
        }
        return prev + 1.25;
      });
    }, 100);
    return () => window.clearInterval(interval);
  }, [isPlaying, activeIndex, chapters.length]);

  const handleRestart = () => {
    setActiveIndex(0);
    setProgress(0);
    setIsPlaying(true);
  };

  const handleNextChapter = () => {
    setActiveIndex((prev) => (prev + 1) % chapters.length);
    setProgress(0);
  };

  const overallPercent = Math.round(
    ((activeIndex + progress / 100) / Math.max(chapters.length, 1)) * 100
  );

  return (
    <div
      className={`${
        isExpanded
          ? 'fixed inset-0 z-50 bg-black/95 p-4 sm:p-8 flex flex-col justify-center'
          : 'relative rounded-xl overflow-hidden border border-white/10 bg-[#121216]'
      }`}
    >
      <div
        className={`relative overflow-hidden bg-black ${
          isExpanded ? 'flex-1 max-h-[75vh] rounded-xl border border-white/15' : 'aspect-video'
        }`}
      >
        <img
          key={activeChapter.image + activeIndex}
          src={activeChapter.image}
          alt={activeChapter.title}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
            isPlaying ? 'scale-110' : 'scale-100'
          }`}
        />

        {/* Editorial film scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

        {/* Top documentary metadata */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between gap-4">
          <div className="text-xs text-[#D4D4D8] tracking-wide">
            <span className="text-[#D4AF37] font-medium uppercase">Séquence documentaire</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>{activeChapter.location}</span>
          </div>
          <div className="text-xs font-mono tabular-nums text-[#D4D4D8]">
            {activeChapter.timecode} / {duration}
          </div>
        </div>

        {/* Center play button when paused */}
        {!isPlaying && (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Lire la séquence documentaire"
            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#EA580C]/90 hover:bg-[#EA580C] text-white flex items-center justify-center shadow-2xl transition-transform duration-150 hover:scale-105"
          >
            <Play className="w-7 h-7 ml-0.5" fill="currentColor" />
          </button>
        )}

        {/* Bottom narration & title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 space-y-2">
          <p className="text-xs font-mono text-[#E8CA64] uppercase tracking-wider">
            Chapitre {activeIndex + 1} sur {chapters.length} — {activeChapter.title}
          </p>
          <p className="text-sm sm:text-base text-[#FAFAF9] max-w-3xl leading-relaxed">
            « {activeChapter.caption} »
          </p>
        </div>
      </div>

      {/* Controls & Chapter timeline */}
      <div className="p-4 sm:p-5 bg-[#121216] border-t border-white/10 space-y-4">
        {/* Progress rail */}
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#EA580C] transition-all duration-150"
            style={{ width: `${overallPercent}%` }}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#EA580C] hover:bg-[#F97316] text-white text-xs font-medium transition-colors min-h-[38px]"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause' : 'Lire'}</span>
            </button>

            {chapters.length > 1 && (
              <button
                type="button"
                onClick={handleNextChapter}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-white/15 hover:border-white/30 text-xs text-[#D4D4D8] transition-colors min-h-[38px]"
              >
                <SkipForward className="w-3.5 h-3.5" />
                <span>Chapitre suivant</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleRestart}
              className="p-2 rounded-md border border-white/15 hover:border-white/30 text-[#A1A1AA] hover:text-white transition-colors min-h-[38px]"
              aria-label="Recommencer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#A1A1AA] hidden sm:inline truncate max-w-xs">
              {title}
            </span>
            <button
              type="button"
              onClick={() => setIsExpanded((e) => !e)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-white/15 hover:border-[#D4AF37]/60 text-xs text-[#D4D4D8] transition-colors min-h-[38px]"
              aria-label={isExpanded ? 'Quitter le plein écran' : 'Plein écran'}
            >
              {isExpanded ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span>Réduire</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Plein écran</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Chapter quick selector */}
        {chapters.length > 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-1">
            {chapters.map((ch, idx) => (
              <button
                key={ch.timecode + ch.title}
                type="button"
                onClick={() => {
                  setActiveIndex(idx);
                  setProgress(0);
                  setIsPlaying(true);
                }}
                className={`text-left p-2.5 rounded-lg border transition-colors ${
                  idx === activeIndex
                    ? 'border-[#EA580C]/70 bg-[#EA580C]/10'
                    : 'border-white/10 hover:border-white/25 bg-white/[0.02]'
                }`}
              >
                <div className="text-[11px] font-mono text-[#D4AF37] tabular-nums">
                  {ch.timecode}
                </div>
                <div className="text-xs font-medium text-[#FAFAF9] truncate mt-0.5">
                  {ch.title}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
