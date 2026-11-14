import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { TigerLogo } from '@/src/components/TigerLogo';
import { PageRoute } from '@/src/types/tiger';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenSearch: () => void;
}

const NAV_ITEMS: { id: PageRoute; label: string }[] = [
  { id: 'home', label: 'Accueil' },
  { id: 'subspecies', label: 'Sous-espèces' },
  { id: 'gallery', label: 'Galerie' },
  { id: 'comparator', label: 'Comparateur' },
  { id: 'map', label: 'Carte du monde' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'about', label: 'À propos' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#09090B]/92 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title */}
        <button
          type="button"
          onClick={() => handleLinkClick('home')}
          className="text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EA580C] rounded-sm shrink-0"
          aria-label="TIGER WORLD — Retour à l'accueil"
        >
          <TigerLogo size={34} />
        </button>

        {/* Zone 2: Primary Nav Links */}
        <nav
          aria-label="Navigation principale"
          className="hidden xl:flex items-center gap-6 text-sm font-medium"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              currentPage === item.id ||
              (currentPage === 'detail' && item.id === 'subspecies');
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleLinkClick(item.id)}
                className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EA580C] ${
                  isActive
                    ? 'text-[#FAFAF9]'
                    : 'text-[#A1A1AA] hover:text-[#FAFAF9]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#EA580C]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenSearch}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide text-[#09090B] bg-[#D4AF37] hover:bg-[#E8CA64] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[38px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
            aria-label="Rechercher dans TIGER WORLD"
          >
            <Search className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Rechercher</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/15 text-[#FAFAF9] hover:border-[#D4AF37]/60 transition-colors"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Tablet / Mobile Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Navigation mobile"
          className="xl:hidden border-t border-white/10 bg-[#09090B] px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              currentPage === item.id ||
              (currentPage === 'detail' && item.id === 'subspecies');
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-between min-h-[44px] ${
                  isActive
                    ? 'bg-[#1A1A20] text-[#EA580C]'
                    : 'text-[#D4D4D8] hover:bg-[#141418] hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="text-xs font-mono text-[#D4AF37]">Actif</span>
                )}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};
