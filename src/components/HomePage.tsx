import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Scale,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import {
  AnimatedHeroBanner,
  ParallaxEnvironmentBanner,
} from '@/src/components/AnimatedBanners';
import {
  CONSERVATION_INITIATIVES,
  DID_YOU_KNOW_FACTS,
  SUBSPECIES_DATA,
  TIGER_IMAGES,
} from '@/src/data/tigers';
import { PageRoute } from '@/src/types/tiger';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectSubspecies: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectSubspecies,
}) => {
  const [factIndex, setFactIndex] = useState(0);

  const featuredSubspecies = [
    SUBSPECIES_DATA[0], // Bengale
    SUBSPECIES_DATA[1], // Sibérie
    SUBSPECIES_DATA[2], // Sumatra
    SUBSPECIES_DATA[8], // Caspienne (archive)
  ];

  const currentFact = DID_YOU_KNOW_FACTS[factIndex];

  return (
    <div>
      {/* 1. Animated Cinematic Hero Banner */}
      <AnimatedHeroBanner
        onExploreSubspecies={() => onNavigate('subspecies')}
        onSelectSubspecies={onSelectSubspecies}
      />

      {/* 2. Key Scientific Metrics Strip (WWF / IUCN / GTF) */}
      <section className="border-y border-white/10 bg-[#101014]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-semibold text-[#FAFAF9] tabular-nums">
                ~5 574
              </div>
              <div className="text-xs uppercase tracking-wider text-[#D4AF37]">
                Tigres à l’état sauvage
              </div>
              <p className="text-xs text-[#A1A1AA]">
                Estimation mondiale (Global Tiger Forum / WWF, 2023)
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-semibold text-[#EA580C] tabular-nums">
                6 / 3
              </div>
              <div className="text-xs uppercase tracking-wider text-[#D4AF37]">
                Sous-espèces vivantes / éteintes
              </div>
              <p className="text-xs text-[#A1A1AA]">
                9 lignées historiques (2 clades IUCN depuis 2017)
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-semibold text-[#FAFAF9] tabular-nums">
                -93 %
              </div>
              <div className="text-xs uppercase tracking-wider text-[#D4AF37]">
                Contraction de l’aire historique
              </div>
              <p className="text-xs text-[#A1A1AA]">
                Perte géographique mesurée depuis 1900 (IUCN)
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-semibold text-[#FAFAF9] tabular-nums">
                306 kg
              </div>
              <div className="text-xs uppercase tracking-wider text-[#D4AF37]">
                Masse maximale documentée
              </div>
              <p className="text-xs text-[#A1A1AA]">
                Grands mâles de Sibérie et du nord de l’Inde
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Editorial Presentation of the World of Tigers */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium">
                Monographie Zoologique · Panthera tigris
              </p>
              <h2
                className="font-serif text-3xl sm:text-5xl font-semibold text-[#FAFAF9] leading-[1.1]"
                style={{ textWrap: 'balance' }}
              >
                L’architecture d’un prédateur absolu
              </h2>
              <div className="w-20 h-[1px] bg-[#D4AF37]/60" />
            </div>

            <div className="space-y-5 text-base text-[#D4D4D8] leading-[1.8] max-w-2xl">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#EA580C] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Plus grand représentant de la famille des félidés, le tigre (Panthera tigris) incarne
                depuis près de deux millions d’années l’équilibre écologique des grands écosystèmes
                asiatiques. De la taïga glacée de l’Extrême-Orient russe aux mangroves saumâtres des
                Sundarbans, son évolution a sculpté neuf lignées régionales aux adaptations remarquables.
              </p>
              <p>
                Au début du XXe siècle, environ 100 000 tigres parcouraient l’Asie, des rives de la
                mer Noire jusqu’aux îles de la Sonde. En moins d’un siècle, trois sous-espèces — Bali,
                Caspienne et Java — ont disparu à jamais. Pourtant, grâce aux efforts scientifiques et
                aux patrouilles de terrain, les populations sauvages amorcent un fragile rétablissement.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => onNavigate('documentation')}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#EA580C] hover:text-[#F97316] transition-colors"
              >
                <span>Lire le dossier scientifique complet</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('map')}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] hover:text-[#E8CA64] transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Explorer la carte de répartition</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="h-full flex flex-col">
              <div className="relative flex-1 min-h-[380px] rounded-xl overflow-hidden border border-white/10 bg-[#121216]">
                <img
                  src={TIGER_IMAGES.closeupPortrait}
                  alt="Portrait rapproché d’un tigre sauvage"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <figcaption className="text-xs font-serif italic text-[#A1A1AA] mt-3">
                Fig. 1 — Détail des vibrisses et du masque facial asymétrique, propre à chaque individu
                de l’espèce Panthera tigris.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 4. Curated Subspecies Selection */}
      <section className="border-t border-white/10 bg-[#0D0D11]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Sélection du Catalogue
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#FAFAF9]">
                Sous-espèces emblématiques & archives
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('comparator')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/15 hover:border-[#D4AF37] text-xs font-medium text-[#FAFAF9] transition-colors"
              >
                <Scale className="w-4 h-4 text-[#D4AF37]" />
                <span>Comparer deux tigres</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('subspecies')}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#EA580C] hover:text-[#F97316] transition-colors whitespace-nowrap"
              >
                <span>Voir les 9 sous-espèces</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSubspecies.map((sub) => (
              <article
                key={sub.id}
                onClick={() => onSelectSubspecies(sub.id)}
                className="group cursor-pointer rounded-xl overflow-hidden bg-[#141419] border border-white/10 hover:border-[#EA580C]/60 transition-colors duration-200 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={sub.heroImage}
                    alt={sub.name}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      sub.isExtinct ? 'sepia-[0.2]' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#D4D4D8]">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      {sub.isExtinct ? (
                        <ShieldAlert className="w-3.5 h-3.5 text-[#A1A1AA]" />
                      ) : (
                        <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
                      )}
                      <span>{sub.isExtinct ? 'Éteint (EX)' : `IUCN ${sub.statusCode}`}</span>
                    </span>
                    <span className="font-mono tabular-nums text-[#E8CA64]">
                      {sub.isExtinct ? 'Archive' : `${sub.metrics.maleWeightMaxKg} kg max`}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#FAFAF9] group-hover:text-[#EA580C] transition-colors">
                      {sub.name}
                    </h3>
                    <p className="text-xs italic text-[#A1A1AA] mt-0.5">
                      {sub.scientificName} · {sub.regionGroup}
                    </p>
                    <p className="text-sm text-[#D4D4D8] mt-3 line-clamp-3 leading-relaxed">
                      {sub.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#D4AF37]">
                    <span>{sub.originSummary.split(',')[0]}</span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Lire la fiche <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Parallax Environment Banners */}
      <ParallaxEnvironmentBanner onSelectSubspecies={onSelectSubspecies} />

      {/* 6. « Le saviez-vous ? » Interactive Scientific Facts + Conservation Preview */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Interactive "Le saviez-vous ?" reader */}
          <div className="lg:col-span-6 rounded-xl border border-white/10 bg-[#121216] p-8 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  Le saviez-vous ?
                </p>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  Fait {factIndex + 1} sur {DID_YOU_KNOW_FACTS.length} · {currentFact.category}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setFactIndex(
                      (prev) => (prev - 1 + DID_YOU_KNOW_FACTS.length) % DID_YOU_KNOW_FACTS.length
                    )
                  }
                  aria-label="Fait précédent"
                  className="w-9 h-9 rounded-md border border-white/15 hover:border-[#D4AF37] flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFactIndex((prev) => (prev + 1) % DID_YOU_KNOW_FACTS.length)
                  }
                  aria-label="Fait suivant"
                  className="w-9 h-9 rounded-md border border-white/15 hover:border-[#D4AF37] flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAFAF9]">
                {currentFact.title}
              </h3>
              <p className="text-base text-[#D4D4D8] leading-relaxed">
                {currentFact.fact}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-[#A1A1AA]">Source : {currentFact.source}</span>
              <button
                type="button"
                onClick={() => onNavigate('quiz')}
                className="text-[#EA580C] hover:underline font-medium"
              >
                Tester vos connaissances au Quiz →
              </button>
            </div>
          </div>

          {/* Conservation spotlight */}
          <div className="lg:col-span-6 rounded-xl border border-white/10 bg-[#121216] p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[#EA580C]">
                Protection & Sauvegarde
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAFAF9]">
                Enjeux de conservation mondiale
              </h3>
              <p className="text-sm text-[#A1A1AA]">
                De 3 200 individus en 2010 à plus de 5 570 aujourd’hui : la mobilisation scientifique
                inverse la courbe dans les bastions protégés.
              </p>
            </div>

            <div className="divide-y divide-white/10">
              {CONSERVATION_INITIATIVES.slice(0, 3).map((item) => (
                <div key={item.id} className="py-3.5 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-medium text-sm text-[#FAFAF9]">{item.title}</span>
                    <span className="text-xs font-mono text-[#D4AF37]">{item.metric}</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] mt-1">{item.organization} · {item.region}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => onNavigate('documentation')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FAFAF9] hover:bg-[#E4E4E7] text-[#09090B] text-xs font-semibold transition-colors"
              >
                <span>Explorer le dossier Conservation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('gallery')}
                className="text-xs font-medium text-[#D4AF37] hover:underline"
              >
                Visiter la galerie HD →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
