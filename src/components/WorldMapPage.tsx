import React, { useState } from 'react';
import {
  ArrowRight,
  Layers,
  Minus,
  Plus,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import { SUBSPECIES_DATA } from '@/src/data/tigers';
import { Subspecies } from '@/src/types/tiger';

interface WorldMapPageProps {
  initialFocusId?: string;
  onSelectSubspecies: (id: string) => void;
}

export const WorldMapPage: React.FC<WorldMapPageProps> = ({
  initialFocusId,
  onSelectSubspecies,
}) => {
  const [selectedId, setSelectedId] = useState<string>(initialFocusId || 'bengale');
  const [showCurrentRange, setShowCurrentRange] = useState(true);
  const [showHistoricalRange, setShowHistoricalRange] = useState(true);
  const [showExtinctMarkers, setShowExtinctMarkers] = useState(true);
  const [zoom, setZoom] = useState(1);

  const selected: Subspecies =
    SUBSPECIES_DATA.find((s) => s.id === selectedId) || SUBSPECIES_DATA[0];

  const visibleSubspecies = SUBSPECIES_DATA.filter(
    (s) => showExtinctMarkers || !s.isExtinct
  );

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
            Biogéographie & Aires de Répartition
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#FAFAF9]">
            Carte Interactive du Monde
          </h1>
          <p className="text-base text-[#D4D4D8] leading-relaxed">
            Visualisez l’aire de répartition historique vers 1900 face aux bastions actuels de
            Panthera tigris, de l’Anatolie et du bassin caspien jusqu’à l’Extrême-Orient russe et
            aux îles indonésiennes.
          </p>
        </div>

        {/* Layer Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowCurrentRange((v) => !v)}
            className={`px-3.5 py-2 rounded-md text-xs font-medium border transition-colors inline-flex items-center gap-2 ${
              showCurrentRange
                ? 'border-[#EA580C] bg-[#EA580C]/15 text-white'
                : 'border-white/10 bg-[#121216] text-[#A1A1AA]'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-[#EA580C]" />
            Aire actuelle
          </button>

          <button
            type="button"
            onClick={() => setShowHistoricalRange((v) => !v)}
            className={`px-3.5 py-2 rounded-md text-xs font-medium border transition-colors inline-flex items-center gap-2 ${
              showHistoricalRange
                ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-white'
                : 'border-white/10 bg-[#121216] text-[#A1A1AA]'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-[#D4AF37]/60" />
            Aire historique (~1900)
          </button>

          <button
            type="button"
            onClick={() => setShowExtinctMarkers((v) => !v)}
            className={`px-3.5 py-2 rounded-md text-xs font-medium border transition-colors inline-flex items-center gap-2 ${
              showExtinctMarkers
                ? 'border-white/30 bg-white/10 text-white'
                : 'border-white/10 bg-[#121216] text-[#A1A1AA]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Sous-espèces éteintes
          </button>
        </div>
      </div>

      {/* Map + Detail Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Interactive Eurasia Map Canvas */}
        <div className="lg:col-span-8 rounded-xl bg-[#0D0D12] border border-white/10 overflow-hidden flex flex-col">
          <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between text-xs text-[#A1A1AA]">
            <span>Projection Eurasie & Archipel de la Sonde (20° E – 150° E)</span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(1, Number((z - 0.25).toFixed(2))))}
                aria-label="Zoom arrière"
                className="w-8 h-8 rounded border border-white/15 hover:border-white/30 flex items-center justify-center text-white"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono tabular-nums px-2 text-white">{zoom.toFixed(2)}x</span>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(2, Number((z + 0.25).toFixed(2))))}
                aria-label="Zoom avant"
                className="w-8 h-8 rounded border border-white/15 hover:border-white/30 flex items-center justify-center text-white"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
              {zoom !== 1 && (
                <button
                  type="button"
                  onClick={() => setZoom(1)}
                  aria-label="Réinitialiser le zoom"
                  className="w-8 h-8 rounded border border-white/15 hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="relative overflow-auto bg-[#07080B] min-h-[420px] sm:min-h-[500px] flex items-center justify-center">
            <div
              className="w-full transition-transform duration-300 origin-center"
              style={{ transform: `scale(${zoom})` }}
            >
              <svg
                viewBox="0 0 1100 620"
                className="w-full h-auto select-none"
                role="img"
                aria-label="Carte de répartition mondiale des sous-espèces de tigres"
              >
                {/* Graticule grid lines */}
                <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                  {[120, 240, 360, 480].map((y) => (
                    <line key={`lat-${y}`} x1="0" y1={y} x2="1100" y2={y} />
                  ))}
                  {[180, 360, 540, 720, 900].map((x) => (
                    <line key={`lon-${x}`} x1={x} y1="0" x2={x} y2="620" />
                  ))}
                </g>

                {/* Geographic Continents / Landmasses */}
                <g fill="#181920" stroke="#2B2D38" strokeWidth="1.2">
                  {/* Europe & Western Russia */}
                  <path d="M40,95 L130,65 L230,55 L320,70 L325,165 L250,205 L180,210 L110,195 L55,155 Z" />
                  {/* Middle East & Arabian Peninsula */}
                  <path d="M180,220 L285,220 L355,245 L370,320 L290,375 L220,340 L185,275 Z" />
                  {/* Siberia, Central Asia & Far East Russia */}
                  <path d="M320,70 L530,45 L770,52 L960,82 L945,175 L880,245 L830,235 L775,205 L665,215 L520,235 L360,245 L325,165 Z" />
                  {/* Indian Subcontinent */}
                  <path d="M485,245 L625,250 L665,305 L645,365 L595,445 L565,420 L530,335 L480,285 Z" />
                  {/* China & East Asia */}
                  <path d="M580,225 L780,205 L855,245 L845,335 L785,375 L705,360 L645,315 Z" />
                  {/* Indochina & Malay Peninsula */}
                  <path d="M665,315 L765,345 L772,415 L745,455 L722,455 L710,395 L665,365 Z" />
                  {/* Korean Peninsula & Japan */}
                  <path d="M862,250 L885,248 L885,292 L865,292 Z" />
                  <path d="M915,235 L955,215 L965,265 L922,300 Z" />
                  {/* Sumatra */}
                  <path d="M696,442 L722,445 L768,505 L746,515 L702,468 Z" />
                  {/* Java & Bali */}
                  <path d="M742,514 L782,518 L782,529 L742,524 Z" />
                  <path d="M786,518 L798,519 L796,529 L785,528 Z" />
                  {/* Borneo & Sulawesi */}
                  <path d="M780,430 L842,425 L848,488 L788,492 Z" />
                  <path d="M868,450 L908,448 L898,498 L866,492 Z" />
                  {/* Northern Africa edge */}
                  <path d="M25,235 L165,235 L180,355 L35,385 Z" />
                  {/* Northern Australia edge */}
                  <path d="M855,555 L1035,545 L1055,615 L840,615 Z" />
                </g>

                {/* Historical Range Layer (~1900) */}
                {showHistoricalRange &&
                  SUBSPECIES_DATA.map((sub) => (
                    <path
                      key={`hist-${sub.id}`}
                      d={sub.mapPosition.historicalRangePath}
                      fill={
                        selectedId === sub.id
                          ? 'rgba(212, 175, 55, 0.34)'
                          : 'rgba(212, 175, 55, 0.14)'
                      }
                      stroke="rgba(212, 175, 55, 0.45)"
                      strokeWidth={selectedId === sub.id ? 1.5 : 0.8}
                      strokeDasharray="4 3"
                      className="transition-all duration-300"
                    />
                  ))}

                {/* Current Range Layer */}
                {showCurrentRange &&
                  SUBSPECIES_DATA.map((sub) =>
                    sub.mapPosition.currentRangePath ? (
                      <path
                        key={`curr-${sub.id}`}
                        d={sub.mapPosition.currentRangePath}
                        fill={
                          selectedId === sub.id
                            ? 'rgba(234, 88, 12, 0.65)'
                            : 'rgba(234, 88, 12, 0.38)'
                        }
                        stroke="#F97316"
                        strokeWidth={selectedId === sub.id ? 2 : 1}
                        className="transition-all duration-300"
                      />
                    ) : null
                  )}

                {/* Subtle Continent Labels */}
                <g fill="#52525B" fontSize="10" fontFamily="Plus Jakarta Sans" letterSpacing="2">
                  <text x="540" y="135">SIBÉRIE & ASIE DU NORD</text>
                  <text x="345" y="210">ASIE CENTRALE</text>
                  <text x="530" y="340">INDE</text>
                  <text x="720" y="295">CHINE</text>
                  <text x="670" y="545">OCÉAN INDIEN</text>
                </g>

                {/* Interactive Subspecies Pins */}
                {visibleSubspecies.map((sub) => {
                  const isSelected = selectedId === sub.id;
                  return (
                    <g
                      key={`pin-${sub.id}`}
                      transform={`translate(${sub.mapPosition.x}, ${sub.mapPosition.y})`}
                      onClick={() => setSelectedId(sub.id)}
                      className="cursor-pointer group"
                      role="button"
                      tabIndex={0}
                      aria-label={`Sélectionner ${sub.name}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') setSelectedId(sub.id);
                      }}
                    >
                      {isSelected && (
                        <circle
                          r="18"
                          fill="none"
                          stroke={sub.isExtinct ? '#D4AF37' : '#EA580C'}
                          strokeWidth="1.5"
                          opacity="0.7"
                        />
                      )}
                      <circle
                        r={isSelected ? 8 : 6}
                        fill={sub.isExtinct ? '#27272A' : '#EA580C'}
                        stroke={sub.isExtinct ? '#D4AF37' : '#FAFAF9'}
                        strokeWidth="2"
                      />
                      <text
                        x="11"
                        y="4"
                        fill={isSelected ? '#FAFAF9' : '#D4D4D8'}
                        fontSize={isSelected ? '11.5' : '10'}
                        fontWeight={isSelected ? '600' : '400'}
                        fontFamily="Plus Jakarta Sans"
                      >
                        {sub.name.replace('Tigre ', '')}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Legend */}
          <div className="px-5 py-3.5 border-t border-white/10 bg-[#101015] flex flex-wrap items-center gap-6 text-xs text-[#A1A1AA]">
            <span className="inline-flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EA580C] border border-white" />
              Population vivante
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#27272A] border border-[#D4AF37]" />
              Sous-espèce éteinte (archive)
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-4 h-2.5 bg-[#D4AF37]/30 border border-dashed border-[#D4AF37]" />
              Aire historique (~1900)
            </span>
          </div>
        </div>

        {/* Right Side Info Drawer */}
        <aside className="lg:col-span-4 rounded-xl bg-[#121216] border border-white/10 overflow-hidden flex flex-col justify-between">
          <div>
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={selected.heroImage}
                alt={selected.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 text-white font-medium">
                  {selected.isExtinct ? (
                    <ShieldAlert className="w-3.5 h-3.5 text-[#D4AF37]" />
                  ) : (
                    <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
                  )}
                  {selected.statusLabel}
                </span>
                <span className="font-mono text-[#E8CA64]">
                  {selected.mapPosition.coordinatesLabel}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-[#FAFAF9]">
                  {selected.name}
                </h2>
                <p className="text-xs italic text-[#D4AF37] mt-0.5">
                  {selected.scientificName}
                </p>
              </div>

              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                {selected.dossier.originAndDistribution}
              </p>

              <dl className="space-y-2.5 pt-3 border-t border-white/10 text-xs">
                <div className="flex justify-between gap-4">
                  <dt className="text-[#A1A1AA]">Habitat</dt>
                  <dd className="text-[#FAFAF9] text-right">{selected.habitatCategory}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#A1A1AA]">Population estimée</dt>
                  <dd className="font-mono tabular-nums text-[#E8CA64] text-right">
                    {selected.metrics.wildPopulationLabel}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#A1A1AA]">Territoire moyen</dt>
                  <dd className="font-mono tabular-nums text-[#FAFAF9] text-right">
                    {selected.metrics.territoryKm2}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="p-6 pt-0 space-y-4">
            <button
              type="button"
              onClick={() => onSelectSubspecies(selected.id)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#EA580C] hover:bg-[#F97316] text-white text-sm font-semibold transition-colors"
            >
              <span>Ouvrir la fiche complète</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Quick jump list */}
            <div className="pt-3 border-t border-white/10">
              <p className="text-[11px] uppercase tracking-widest text-[#A1A1AA] mb-2">
                Accès rapide
              </p>
              <div className="flex flex-wrap gap-1.5">
                {visibleSubspecies.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedId(s.id)}
                    className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                      selectedId === s.id
                        ? 'bg-[#D4AF37] text-[#09090B] font-semibold'
                        : 'bg-[#09090B] text-[#A1A1AA] hover:text-white border border-white/10'
                    }`}
                  >
                    {s.name.replace('Tigre ', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
