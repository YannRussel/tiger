import React, { useState } from 'react';
import {
  ArrowLeft,
  Compass,
  Maximize2,
  Scale,
  ShieldAlert,
  ShieldCheck,
  X,
} from 'lucide-react';
import { DocumentaryVideoPlayer } from '@/src/components/DocumentaryVideoPlayer';
import { SUBSPECIES_DATA } from '@/src/data/tigers';
import { Subspecies } from '@/src/types/tiger';

interface SubspeciesDetailPageProps {
  subspeciesId: string;
  onBack: () => void;
  onCompareWith: (id: string) => void;
  onOpenOnMap: (id: string) => void;
  onSelectSubspecies: (id: string) => void;
}

export const SubspeciesDetailPage: React.FC<SubspeciesDetailPageProps> = ({
  subspeciesId,
  onBack,
  onCompareWith,
  onOpenOnMap,
  onSelectSubspecies,
}) => {
  const subspecies: Subspecies =
    SUBSPECIES_DATA.find((s) => s.id === subspeciesId) || SUBSPECIES_DATA[0];

  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    caption: string;
    credit: string;
  } | null>(null);

  const otherSubspecies = SUBSPECIES_DATA.filter((s) => s.id !== subspecies.id).slice(0, 3);

  const dossierSections = [
    { number: '01', title: 'Origine et répartition géographique', content: subspecies.dossier.originAndDistribution },
    { number: '02', title: 'Habitat naturel', content: subspecies.dossier.naturalHabitat },
    { number: '03', title: 'Taille et poids', content: subspecies.dossier.sizeAndWeight },
    { number: '04', title: 'Longueur du corps et de la queue', content: subspecies.dossier.bodyAndTailLength },
    { number: '05', title: 'Couleur du pelage', content: subspecies.dossier.coatColor },
    { number: '06', title: 'Particularités physiques', content: subspecies.dossier.physicalFeatures },
    { number: '07', title: 'Alimentation', content: subspecies.dossier.diet },
    { number: '08', title: 'Techniques de chasse', content: subspecies.dossier.huntingTechniques },
    { number: '09', title: 'Comportement', content: subspecies.dossier.behavior },
    { number: '10', title: 'Reproduction', content: subspecies.dossier.reproduction },
    { number: '11', title: 'Espérance de vie', content: subspecies.dossier.lifespan },
    { number: '12', title: 'Population estimée', content: subspecies.dossier.estimatedPopulation },
    { number: '13', title: 'Menaces et conservation', content: subspecies.dossier.threatsAndConservation },
  ];

  return (
    <div className="pb-20">
      {/* Top Action Breadcrumb Bar */}
      <div className="border-b border-white/10 bg-[#0D0D11]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-[#D4D4D8] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#EA580C]" />
            <span>Retour au catalogue</span>
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenOnMap(subspecies.id)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 hover:border-[#D4AF37] text-xs font-medium text-[#FAFAF9] transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Localiser sur la carte</span>
            </button>
            <button
              type="button"
              onClick={() => onCompareWith(subspecies.id)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#EA580C] hover:bg-[#F97316] text-xs font-medium text-white transition-colors"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Comparer cette sous-espèce</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Editorial Spread */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#09090B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA]">
                  <span className="inline-flex items-center gap-1.5 text-[#D4AF37] font-medium">
                    {subspecies.isExtinct ? (
                      <ShieldAlert className="w-4 h-4 text-[#A1A1AA]" />
                    ) : (
                      <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
                    )}
                    {subspecies.statusLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{subspecies.regionGroup}</span>
                  <span aria-hidden="true">·</span>
                  <span>{subspecies.habitatCategory}</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#FAFAF9] leading-[1.05]">
                  {subspecies.name}
                </h1>
                <p className="font-serif italic text-xl text-[#E8CA64]">
                  {subspecies.scientificName}
                </p>
                <p className="text-base text-[#D4D4D8] leading-relaxed max-w-xl">
                  {subspecies.summary}
                </p>
              </div>

              {/* Accession Biometric Grid */}
              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5 pt-6 border-t border-white/10">
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                    Poids mâle
                  </dt>
                  <dd className="font-mono tabular-nums text-sm font-medium text-[#FAFAF9] mt-1">
                    {subspecies.metrics.maleWeightMinKg} – {subspecies.metrics.maleWeightMaxKg} kg
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                    Poids femelle
                  </dt>
                  <dd className="font-mono tabular-nums text-sm font-medium text-[#FAFAF9] mt-1">
                    {subspecies.metrics.femaleWeightMinKg} – {subspecies.metrics.femaleWeightMaxKg} kg
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                    Longueur max
                  </dt>
                  <dd className="font-mono tabular-nums text-sm font-medium text-[#FAFAF9] mt-1">
                    {subspecies.metrics.maleLengthMaxCm} cm
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                    Queue
                  </dt>
                  <dd className="font-mono tabular-nums text-sm font-medium text-[#FAFAF9] mt-1">
                    {subspecies.metrics.tailLengthCm}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                    Espérance (nature)
                  </dt>
                  <dd className="font-mono tabular-nums text-sm font-medium text-[#FAFAF9] mt-1">
                    {subspecies.metrics.lifespanWildYears}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                    Territoire
                  </dt>
                  <dd className="font-mono tabular-nums text-sm font-medium text-[#FAFAF9] mt-1">
                    {subspecies.metrics.territoryKm2}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-6">
              <div
                onClick={() =>
                  setLightboxImage({
                    src: subspecies.heroImage,
                    caption: subspecies.name,
                    credit: `${subspecies.scientificName} · ${subspecies.originSummary}`,
                  })
                }
                className="relative h-full min-h-[340px] rounded-xl overflow-hidden border border-white/15 bg-black cursor-zoom-in group"
              >
                <img
                  src={subspecies.heroImage}
                  alt={subspecies.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/70 text-xs text-white border border-white/15">
                  <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Agrandir
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: 14 Documentary Sections + Sidebar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left 8 cols: 14 Detailed Dossier Chapters */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-2 border-b border-white/10 pb-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Monographie complète
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#FAFAF9]">
                Fiche scientifique et comportementale
              </h2>
            </div>

            <div className="divide-y divide-white/10">
              {dossierSections.map((sec) => (
                <section key={sec.number} className="py-7 first:pt-2 space-y-2.5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#EA580C] tabular-nums">
                      {sec.number}.
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-[#FAFAF9]">
                      {sec.title}
                    </h3>
                  </div>
                  <p className="text-base text-[#D4D4D8] leading-[1.8] max-w-prose pl-7">
                    {sec.content}
                  </p>
                </section>
              ))}

              {/* 14. Anecdotes et faits fascinants */}
              <section className="py-7 space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[#EA580C] tabular-nums">14.</span>
                  <h3 className="font-serif text-2xl font-semibold text-[#FAFAF9]">
                    Anecdotes et faits fascinants
                  </h3>
                </div>
                <ul className="space-y-3 pl-7">
                  {subspecies.dossier.anecdotes.map((fact, idx) => (
                    <li
                      key={idx}
                      className="text-base text-[#D4D4D8] leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-[#D4AF37] font-mono text-xs mt-1.5 shrink-0">
                        —
                      </span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Right 4 cols: Taxonomy, Population & Field Gallery */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="rounded-xl border border-white/10 bg-[#121216] p-6 space-y-4">
              <h3 className="font-serif text-xl font-semibold text-[#FAFAF9]">
                Classification & Statut
              </h3>
              <dl className="space-y-3 text-sm divide-y divide-white/10">
                <div className="pt-2 first:pt-0">
                  <dt className="text-xs text-[#A1A1AA]">Nom trinominal historique</dt>
                  <dd className="italic text-[#FAFAF9] mt-0.5">{subspecies.scientificName}</dd>
                </div>
                <div className="pt-3">
                  <dt className="text-xs text-[#A1A1AA]">Taxonomie IUCN (révision 2017)</dt>
                  <dd className="text-[#E8CA64] mt-0.5">{subspecies.iucnClade2017}</dd>
                </div>
                <div className="pt-3">
                  <dt className="text-xs text-[#A1A1AA]">Population sauvage estimée</dt>
                  <dd className="font-mono tabular-nums text-[#FAFAF9] mt-0.5">
                    {subspecies.metrics.wildPopulationLabel}
                  </dd>
                </div>
                <div className="pt-3">
                  <dt className="text-xs text-[#A1A1AA]">Coordonnées principales</dt>
                  <dd className="font-mono tabular-nums text-[#FAFAF9] mt-0.5">
                    {subspecies.mapPosition.coordinatesLabel}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Subspecies Photo Gallery */}
            <div className="rounded-xl border border-white/10 bg-[#121216] p-6 space-y-4">
              <h3 className="font-serif text-xl font-semibold text-[#FAFAF9]">
                Photographies de terrain
              </h3>
              <div className="space-y-4">
                {subspecies.galleryImages.map((img, i) => (
                  <figure
                    key={i}
                    onClick={() => setLightboxImage(img)}
                    className="cursor-pointer group space-y-2"
                  >
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-black">
                      <img
                        src={img.src}
                        alt={img.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="text-xs text-[#A1A1AA] leading-relaxed">
                      {img.caption}
                      <span className="block text-[11px] text-[#71717A] mt-0.5">{img.credit}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* Sources */}
            <div className="rounded-xl border border-white/10 bg-[#121216] p-6 space-y-3">
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#D4AF37]">
                Sources scientifiques
              </h3>
              <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                {subspecies.sources.map((src) => (
                  <li key={src}>· {src}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Documentary Video Section */}
        <section className="mt-16 pt-12 border-t border-white/10 space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-[#EA580C]">
              Vidéo documentaire interactive
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#FAFAF9]">
              {subspecies.documentaryTitle}
            </h2>
          </div>

          <DocumentaryVideoPlayer
            title={subspecies.documentaryTitle}
            duration={subspecies.documentaryDuration}
            chapters={subspecies.documentaryChapters}
          />
        </section>

        {/* Related Subspecies */}
        <section className="mt-16 pt-12 border-t border-white/10 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAFAF9]">
            Découvrir d’autres sous-espèces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherSubspecies.map((other) => (
              <button
                key={other.id}
                type="button"
                onClick={() => onSelectSubspecies(other.id)}
                className="text-left rounded-xl overflow-hidden bg-[#121216] border border-white/10 hover:border-[#EA580C]/60 transition-colors group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={other.heroImage}
                    alt={other.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="font-serif text-xl font-semibold text-[#FAFAF9] group-hover:text-[#EA580C] transition-colors">
                    {other.name}
                  </div>
                  <div className="text-xs italic text-[#A1A1AA] mt-0.5">
                    {other.scientificName} · {other.statusLabel}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="max-w-5xl w-full space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.caption}
              referrerPolicy="no-referrer"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center space-y-1">
              <p className="text-sm text-[#FAFAF9]">{lightboxImage.caption}</p>
              <p className="text-xs text-[#A1A1AA]">{lightboxImage.credit}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
