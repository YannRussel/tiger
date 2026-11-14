import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, BookOpen, Compass, Search, X } from 'lucide-react';
import { DID_YOU_KNOW_FACTS, SUBSPECIES_DATA } from '@/src/data/tigers';
import { PageRoute } from '@/src/types/tiger';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSubspecies: (id: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectSubspecies,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 40);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        subspecies: SUBSPECIES_DATA.slice(0, 4),
        facts: DID_YOU_KNOW_FACTS.slice(0, 2),
      };
    }

    const subspecies = SUBSPECIES_DATA.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.scientificName.toLowerCase().includes(q) ||
        s.originSummary.toLowerCase().includes(q) ||
        s.habitatCategory.toLowerCase().includes(q) ||
        s.dossier.naturalHabitat.toLowerCase().includes(q) ||
        s.dossier.diet.toLowerCase().includes(q)
    );

    const facts = DID_YOU_KNOW_FACTS.filter(
      (f) =>
        f.title.toLowerCase().includes(q) ||
        f.fact.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q)
    );

    return { subspecies, facts };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Recherche globale TIGER WORLD"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#121216] border border-white/15 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
          <Search className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une sous-espèce, un habitat, un pays (ex: Sibérie, Sumatra, Bali...)"
            className="w-full bg-transparent text-sm sm:text-base text-[#FAFAF9] placeholder-[#71717A] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#A1A1AA] hover:text-white rounded-md transition-colors"
            aria-label="Fermer la recherche"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#A1A1AA] mb-3 px-2">
              {query.trim() ? 'Sous-espèces correspondantes' : 'Sous-espèces à découvrir'}
            </p>
            {results.subspecies.length === 0 ? (
              <p className="text-sm text-[#71717A] px-2 py-2">
                Aucune sous-espèce ne correspond à « {query} ».
              </p>
            ) : (
              <div className="space-y-1.5">
                {results.subspecies.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => {
                      onSelectSubspecies(sub.id);
                      onClose();
                    }}
                    className="w-full flex items-center gap-4 p-2.5 rounded-lg hover:bg-white/5 transition-colors text-left group"
                  >
                    <img
                      src={sub.heroImage}
                      alt={sub.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-12 object-cover rounded-md shrink-0 border border-white/10"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg font-semibold text-[#FAFAF9] group-hover:text-[#EA580C] transition-colors truncate">
                          {sub.name}
                        </span>
                        <span className="text-xs text-[#A1A1AA] shrink-0">
                          {sub.isExtinct ? '· Éteint' : `· ${sub.statusCode}`}
                        </span>
                      </div>
                      <p className="text-xs text-[#A1A1AA] truncate">
                        <span className="italic">{sub.scientificName}</span> · {sub.originSummary}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#71717A] group-hover:text-[#D4AF37] shrink-0" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {results.facts.length > 0 && (
            <div className="pt-2 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-[#A1A1AA] mb-3 px-2">
                Faits scientifiques
              </p>
              <div className="space-y-2">
                {results.facts.map((fact) => (
                  <button
                    key={fact.id}
                    type="button"
                    onClick={() => {
                      onNavigate('documentation');
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37] mb-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{fact.category}</span>
                      <span>·</span>
                      <span>{fact.source}</span>
                    </div>
                    <p className="text-sm font-medium text-[#FAFAF9]">{fact.title}</p>
                    <p className="text-xs text-[#A1A1AA] line-clamp-2 mt-0.5">{fact.fact}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 px-2">
            <span className="text-xs text-[#71717A]">
              Raccourcis directs
            </span>
            <div className="flex items-center gap-3 text-xs">
              <button
                type="button"
                onClick={() => {
                  onNavigate('map');
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 text-[#D4AF37] hover:underline"
              >
                <Compass className="w-3.5 h-3.5" />
                Carte mondiale
              </button>
              <button
                type="button"
                onClick={() => {
                  onNavigate('comparator');
                  onClose();
                }}
                className="text-[#EA580C] hover:underline"
              >
                Comparateur
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
