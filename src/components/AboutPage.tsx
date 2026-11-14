import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TigerLogo } from '@/src/components/TigerLogo';
import { TIGER_IMAGES } from '@/src/data/tigers';
import { PageRoute } from '@/src/types/tiger';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <TigerLogo size={36} showWordmark={false} />
            <span className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
              À propos de TIGER WORLD
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#FAFAF9] leading-tight">
            Un portail documentaire dédié à la connaissance et à la sauvegarde des tigres
          </h1>

          <div className="space-y-5 text-base text-[#D4D4D8] leading-[1.8] max-w-2xl">
            <p>
              TIGER WORLD a été conçu comme une revue animalière numérique et une encyclopédie
              zoologique de référence consacrée exclusivement à Panthera tigris. Notre ambition est
              d’offrir au grand public, aux étudiants et aux passionnés de faune sauvage un accès
              clair, structuré et rigoureusement vérifié aux connaissances scientifiques actuelles.
            </p>
            <p>
              Toutes les données biométriques, estimations de populations sauvages, cartes de
              répartition et analyses taxonomiques s’appuient exclusivement sur les publications de
              référence internationale : la Liste rouge de l’IUCN, les bilans du WWF Global Tiger
              Programme, les fiches du Smithsonian’s National Zoo et les reportages documentaires de
              National Geographic.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              type="button"
              onClick={() => onNavigate('subspecies')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#EA580C] hover:bg-[#F97316] text-white text-sm font-semibold transition-colors"
            >
              <span>Parcourir les 9 sous-espèces</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('documentation')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/15 hover:border-[#D4AF37] text-sm font-medium text-[#FAFAF9] transition-colors"
            >
              <span>Dossier Conservation</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <figure className="h-full flex flex-col">
            <div className="flex-1 min-h-[340px] rounded-xl overflow-hidden border border-white/10 bg-[#121216]">
              <img
                src={TIGER_IMAGES.bengalHero}
                alt="Tigre du Bengale dans son habitat forestier"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-xs font-serif italic text-[#A1A1AA] mt-3">
              « Sauver le tigre, c’est préserver des forêts entières dont dépendent des millions de
              vies humaines et animales. »
            </figcaption>
          </figure>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
        <div className="p-6 rounded-xl bg-[#121216] border border-white/10 space-y-2">
          <p className="text-xs font-mono text-[#D4AF37]">01. RIGUEUR SCIENTIFIQUE</p>
          <h2 className="font-serif text-2xl font-semibold text-[#FAFAF9]">
            Zéro chiffre inventé
          </h2>
          <p className="text-sm text-[#D4D4D8] leading-relaxed">
            Chaque fourchette de poids, longueur, durée de gestation ou estimation démographique
            reflète les consensus zoologiques documentés.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#121216] border border-white/10 space-y-2">
          <p className="text-xs font-mono text-[#D4AF37]">02. MÉMOIRE DES DISPARUS</p>
          <h2 className="font-serif text-2xl font-semibold text-[#FAFAF9]">
            Archives du XXe siècle
          </h2>
          <p className="text-sm text-[#D4D4D8] leading-relaxed">
            Les tigres de Bali, de Java et de la Caspienne rappellent combien l’extinction peut être
            rapide lorsque habitats et proies s’effondrent.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#121216] border border-white/10 space-y-2">
          <p className="text-xs font-mono text-[#D4AF37]">03. PÉDAGOGIE INTERACTIVE</p>
          <h2 className="font-serif text-2xl font-semibold text-[#FAFAF9]">
            Outils d’exploration
          </h2>
          <p className="text-sm text-[#D4D4D8] leading-relaxed">
            Comparateur morphologique, carte biogéographique, lecteur documentaire chapitré et quiz
            transforment la lecture en exploration active.
          </p>
        </div>
      </section>
    </div>
  );
};
