import React from 'react';
import { TigerLogo } from '@/src/components/TigerLogo';
import { PageRoute } from '@/src/types/tiger';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/10 bg-[#070709] text-[#A1A1AA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <TigerLogo size={32} />
            <p className="text-sm leading-relaxed text-[#A1A1AA] max-w-xs">
              Entrez dans l’univers fascinant des grands félins. Plateforme documentaire
              consacrée à la zoologie, à l’histoire et à la conservation des tigres du monde entier.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Exploration
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('subspecies')}
                  className="hover:text-white transition-colors"
                >
                  Catalogue des sous-espèces
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Galerie multimédia HD
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('map')}
                  className="hover:text-white transition-colors"
                >
                  Carte de répartition
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Outils scientifiques
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('comparator')}
                  className="hover:text-white transition-colors"
                >
                  Comparateur morphologique
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('documentation')}
                  className="hover:text-white transition-colors"
                >
                  Documentation & Conservation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('quiz')}
                  className="hover:text-white transition-colors"
                >
                  Quiz zoologique interactif
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  À propos & Méthodologie
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Références scientifiques
            </h3>
            <ul className="space-y-2 text-xs leading-relaxed text-[#A1A1AA]">
              <li>IUCN Red List of Threatened Species (Panthera tigris)</li>
              <li>WWF — Global Tiger Programme & Initiative Tx2</li>
              <li>Smithsonian’s National Zoo & Conservation Biology Institute</li>
              <li>National Geographic & Global Tiger Forum</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>
            © {new Date().getFullYear()} TIGER WORLD — Portail documentaire sur les grands félins.
          </p>
          <p>
            Données vérifiées · Conservation & Zoologie · Panthera tigris
          </p>
        </div>
      </div>
    </footer>
  );
};
