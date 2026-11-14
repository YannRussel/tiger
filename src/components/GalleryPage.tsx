import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Film,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { DocumentaryVideoPlayer } from '@/src/components/DocumentaryVideoPlayer';
import { GALLERY_ITEMS, SUBSPECIES_DATA } from '@/src/data/tigers';
import { GalleryCategory, GalleryItem } from '@/src/types/tiger';

interface GalleryPageProps {
  onSelectSubspecies: (id: string) => void;
}

const CATEGORIES: GalleryCategory[] = [
  'Tout voir',
  'Portraits',
  'En chasse',
  'Mère & petits',
  'Dans la neige',
  'Dans la jungle',
  'Archives historiques',
  'Vidéos documentaires',
];

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onSelectSubspecies,
}) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Tout voir');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'Tout voir') return GALLERY_ITEMS;
    if (activeCategory === 'Vidéos documentaires') return [];
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const documentarySubspecies = useMemo(
    () => SUBSPECIES_DATA.slice(0, 4),
    []
  );
  const [selectedVideoSubId, setSelectedVideoSubId] = useState<string>('bengale');

  const activeVideoSub =
    SUBSPECIES_DATA.find((s) => s.id === selectedVideoSubId) || SUBSPECIES_DATA[0];

  const selectedPhoto: GalleryItem | null =
    selectedIndex !== null ? filteredPhotos[selectedIndex] || null : null;

  useEffect(() => {
    setIsZoomed(false);
  }, [selectedIndex]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredPhotos.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex, filteredPhotos.length]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
          Exposition Visuelle & Films
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#FAFAF9]">
          Galerie Multimédia HD
        </h1>
        <p className="text-base text-[#D4D4D8] leading-relaxed">
          Portraits intimes, scènes de chasse, vie familiale, taïga enneigée, forêts pluviales,
          plaques historiques et séquences documentaires interactives. Cliquez sur chaque cliché
          pour l’ouvrir en plein écran avec zoom haute définition.
        </p>
      </div>

      {/* Category Filter Strip */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/10">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setActiveCategory(category);
              setSelectedIndex(null);
            }}
            className={`px-4 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors min-h-[38px] inline-flex items-center gap-1.5 ${
              activeCategory === category
                ? 'bg-[#EA580C] text-white'
                : 'bg-[#121216] text-[#D4D4D8] border border-white/10 hover:border-white/25 hover:text-white'
            }`}
          >
            {category === 'Vidéos documentaires' && <Film className="w-3.5 h-3.5" />}
            <span>{category}</span>
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      {activeCategory !== 'Vidéos documentaires' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item, idx) => (
            <figure
              key={item.id}
              onClick={() => setSelectedIndex(idx)}
              className={`group cursor-pointer rounded-xl overflow-hidden bg-[#121216] border border-white/10 hover:border-[#D4AF37]/60 transition-colors flex flex-col ${
                item.featured && activeCategory === 'Tout voir' && idx === 0
                  ? 'sm:col-span-2 lg:col-span-2'
                  : ''
              }`}
            >
              <div
                className={`relative overflow-hidden bg-black ${
                  item.featured && activeCategory === 'Tout voir' && idx === 0
                    ? 'aspect-[16/9]'
                    : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/80 text-[11px] text-white border border-white/15">
                    <Maximize2 className="w-3 h-3 text-[#D4AF37]" />
                    Plein écran
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#E8CA64]">
                      {item.category} · {item.subspeciesName}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-white mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              <figcaption className="p-4 flex items-center justify-between gap-4 text-xs text-[#A1A1AA]">
                <span className="truncate">{item.location}</span>
                <span className="font-mono text-[11px] text-[#71717A] shrink-0">
                  {item.exif}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {/* Documentary Video Reels Section */}
      {(activeCategory === 'Tout voir' || activeCategory === 'Vidéos documentaires') && (
        <section className="pt-8 border-t border-white/10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[#EA580C]">
                Cinémathèque Tiger World
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#FAFAF9]">
                Vidéos documentaires immersives
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {documentarySubspecies.map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedVideoSubId(sub.id)}
                  className={`px-3.5 py-2 rounded-md text-xs font-medium transition-colors ${
                    selectedVideoSubId === sub.id
                      ? 'bg-[#D4AF37] text-[#09090B]'
                      : 'bg-[#121216] text-[#D4D4D8] border border-white/10 hover:border-white/25'
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>

          <DocumentaryVideoPlayer
            title={activeVideoSub.documentaryTitle}
            duration={activeVideoSub.documentaryDuration}
            chapters={activeVideoSub.documentaryChapters}
          />
        </section>
      )}

      {/* Fullscreen Lightbox Viewer */}
      {selectedPhoto && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between gap-4 text-xs text-[#D4D4D8]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-mono tabular-nums">
              {selectedIndex + 1} / {filteredPhotos.length} · {selectedPhoto.exif}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsZoomed((z) => !z)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                <span>{isZoomed ? 'Zoom 1x' : 'Zoom 1.5x'}</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Fermer le plein écran"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Stage */}
          <div
            className="relative flex-1 flex items-center justify-center overflow-hidden my-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length
                )
              }
              aria-label="Image précédente"
              className="absolute left-2 sm:left-4 z-10 w-11 h-11 rounded-full bg-black/70 hover:bg-[#EA580C] text-white border border-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="max-w-5xl max-h-[72vh] overflow-auto rounded-lg">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                onClick={() => setIsZoomed((z) => !z)}
                className={`max-h-[72vh] w-auto mx-auto object-contain transition-transform duration-300 cursor-pointer ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % filteredPhotos.length)
              }
              aria-label="Image suivante"
              className="absolute right-2 sm:right-4 z-10 w-11 h-11 rounded-full bg-black/70 hover:bg-[#EA580C] text-white border border-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Caption & Subspecies Link */}
          <div
            className="max-w-3xl mx-auto w-full text-center space-y-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs uppercase tracking-widest text-[#D4AF37]">
              {selectedPhoto.category} · {selectedPhoto.location}
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">
              {selectedPhoto.title}
            </h3>
            <p className="text-sm text-[#D4D4D8]">{selectedPhoto.description}</p>
            <div className="pt-1">
              <button
                type="button"
                onClick={() => {
                  onSelectSubspecies(selectedPhoto.subspeciesId);
                  setSelectedIndex(null);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#EA580C] hover:underline"
              >
                <span>Voir la fiche : {selectedPhoto.subspeciesName}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
