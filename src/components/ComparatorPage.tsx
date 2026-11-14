import React, { useState } from 'react';
import { ArrowRight, ArrowLeftRight } from 'lucide-react';
import { SUBSPECIES_DATA } from '@/src/data/tigers';
import { Subspecies } from '@/src/types/tiger';

interface ComparatorPageProps {
  initialSubspeciesId?: string;
  onSelectSubspecies: (id: string) => void;
}

export const ComparatorPage: React.FC<ComparatorPageProps> = ({
  initialSubspeciesId,
  onSelectSubspecies,
}) => {
  const [leftId, setLeftId] = useState<string>(initialSubspeciesId || 'siberie');
  const [rightId, setRightId] = useState<string>(
    initialSubspeciesId === 'sumatra' ? 'bengale' : 'sumatra'
  );

  const left: Subspecies =
    SUBSPECIES_DATA.find((s) => s.id === leftId) || SUBSPECIES_DATA[1];
  const right: Subspecies =
    SUBSPECIES_DATA.find((s) => s.id === rightId) || SUBSPECIES_DATA[2];

  const handleSwap = () => {
    setLeftId(rightId);
    setRightId(leftId);
  };

  const presets = [
    { label: 'Sibérie vs Sumatra (Extrêmes)', a: 'siberie', b: 'sumatra' },
    { label: 'Bengale vs Caspienne', a: 'bengale', b: 'caspienne' },
    { label: 'Malaisie vs Indochine', a: 'malaisie', b: 'indochine' },
    { label: 'Java vs Bali (Éteints)', a: 'java', b: 'bali' },
  ];

  const metricBars = [
    {
      label: 'Poids maximal mâle',
      leftVal: left.metrics.maleWeightMaxKg,
      rightVal: right.metrics.maleWeightMaxKg,
      unit: 'kg',
      maxScale: 320,
    },
    {
      label: 'Longueur totale maximale',
      leftVal: left.metrics.maleLengthMaxCm,
      rightVal: right.metrics.maleLengthMaxCm,
      unit: 'cm',
      maxScale: 350,
    },
    {
      label: 'Population sauvage estimée',
      leftVal: left.metrics.wildPopulationNumeric,
      rightVal: right.metrics.wildPopulationNumeric,
      unit: 'individus',
      maxScale: 4200,
    },
    {
      label: 'Territoire maximal estimé',
      leftVal: left.metrics.territoryNumericMax,
      rightVal: right.metrics.territoryNumericMax,
      unit: 'km²',
      maxScale: 1000,
    },
  ];

  const qualitativeRows = [
    {
      label: 'Nom scientifique',
      left: left.scientificName,
      right: right.scientificName,
      italic: true,
    },
    {
      label: 'Statut IUCN',
      left: left.statusLabel,
      right: right.statusLabel,
    },
    {
      label: 'Origine géographique',
      left: left.originSummary,
      right: right.originSummary,
    },
    {
      label: 'Habitat principal',
      left: left.habitatCategory,
      right: right.habitatCategory,
    },
    {
      label: 'Poids femelle',
      left: `${left.metrics.femaleWeightMinKg} – ${left.metrics.femaleWeightMaxKg} kg`,
      right: `${right.metrics.femaleWeightMinKg} – ${right.metrics.femaleWeightMaxKg} kg`,
      mono: true,
    },
    {
      label: 'Longueur de la queue',
      left: left.metrics.tailLengthCm,
      right: right.metrics.tailLengthCm,
      mono: true,
    },
    {
      label: 'Espérance de vie (nature)',
      left: left.metrics.lifespanWildYears,
      right: right.metrics.lifespanWildYears,
      mono: true,
    },
    {
      label: 'Pelage & rayures',
      left: left.dossier.coatColor,
      right: right.dossier.coatColor,
    },
    {
      label: 'Régime alimentaire',
      left: left.dossier.diet,
      right: right.dossier.diet,
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
          Analyse Morphologique & Écologique
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#FAFAF9]">
          Comparateur de Sous-espèces
        </h1>
        <p className="text-base text-[#D4D4D8] leading-relaxed">
          Sélectionnez deux sous-espèces pour confronter leurs mensurations, leurs adaptations
          climatiques, leur régime alimentaire et leur situation démographique.
        </p>
      </div>

      {/* Quick Presets */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-[#A1A1AA] mr-2">Duels suggérés :</span>
        {presets.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => {
              setLeftId(p.a);
              setRightId(p.b);
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
              leftId === p.a && rightId === p.b
                ? 'border-[#EA580C] bg-[#EA580C]/15 text-white'
                : 'border-white/10 bg-[#121216] text-[#D4D4D8] hover:border-white/25'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Selector Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-stretch">
        {/* Left Specimen */}
        <div className="lg:col-span-5 rounded-xl bg-[#121216] border border-white/10 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-white/10 bg-[#0D0D11]">
            <label
              htmlFor="select-left"
              className="block text-[11px] uppercase tracking-widest text-[#EA580C] mb-2"
            >
              Spécimen A
            </label>
            <select
              id="select-left"
              value={leftId}
              onChange={(e) => setLeftId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#09090B] border border-white/15 text-sm text-[#FAFAF9] focus:border-[#EA580C] focus:outline-none"
            >
              {SUBSPECIES_DATA.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.isExtinct ? 'Éteint' : s.statusCode})
                </option>
              ))}
            </select>
          </div>
          <div className="relative aspect-[16/10] bg-black">
            <img
              src={left.heroImage}
              alt={left.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-white">{left.name}</h2>
                <p className="text-xs italic text-[#E8CA64]">{left.scientificName}</p>
              </div>
              <button
                type="button"
                onClick={() => onSelectSubspecies(left.id)}
                className="text-xs text-[#EA580C] hover:underline inline-flex items-center gap-1 shrink-0"
              >
                Fiche <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Center Swap Button */}
        <div className="lg:col-span-1 flex items-center justify-center">
          <button
            type="button"
            onClick={handleSwap}
            aria-label="Inverser les deux sous-espèces"
            className="w-11 h-11 rounded-full border border-white/15 bg-[#121216] hover:border-[#D4AF37] text-[#D4AF37] flex items-center justify-center transition-colors"
          >
            <ArrowLeftRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Specimen */}
        <div className="lg:col-span-5 rounded-xl bg-[#121216] border border-white/10 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-white/10 bg-[#0D0D11]">
            <label
              htmlFor="select-right"
              className="block text-[11px] uppercase tracking-widest text-[#D4AF37] mb-2"
            >
              Spécimen B
            </label>
            <select
              id="select-right"
              value={rightId}
              onChange={(e) => setRightId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#09090B] border border-white/15 text-sm text-[#FAFAF9] focus:border-[#D4AF37] focus:outline-none"
            >
              {SUBSPECIES_DATA.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.isExtinct ? 'Éteint' : s.statusCode})
                </option>
              ))}
            </select>
          </div>
          <div className="relative aspect-[16/10] bg-black">
            <img
              src={right.heroImage}
              alt={right.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-white">{right.name}</h2>
                <p className="text-xs italic text-[#E8CA64]">{right.scientificName}</p>
              </div>
              <button
                type="button"
                onClick={() => onSelectSubspecies(right.id)}
                className="text-xs text-[#D4AF37] hover:underline inline-flex items-center gap-1 shrink-0"
              >
                Fiche <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quantitative Bars */}
      <section className="rounded-xl bg-[#121216] border border-white/10 p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <h3 className="font-serif text-2xl font-semibold text-[#FAFAF9]">
            Comparaison biométrique et démographique
          </h3>
          <div className="flex items-center gap-5 text-xs">
            <span className="inline-flex items-center gap-2 text-[#FAFAF9]">
              <span className="w-3 h-3 rounded-sm bg-[#EA580C]" />
              {left.name}
            </span>
            <span className="inline-flex items-center gap-2 text-[#FAFAF9]">
              <span className="w-3 h-3 rounded-sm bg-[#D4AF37]" />
              {right.name}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {metricBars.map((bar) => {
            const leftPct = Math.min(100, Math.round((bar.leftVal / bar.maxScale) * 100));
            const rightPct = Math.min(100, Math.round((bar.rightVal / bar.maxScale) * 100));
            return (
              <div key={bar.label} className="space-y-3">
                <div className="text-sm font-medium text-[#FAFAF9]">{bar.label}</div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#A1A1AA]">{left.name}</span>
                    <span className="font-mono tabular-nums text-[#FAFAF9]">
                      {bar.leftVal.toLocaleString('fr-FR')} {bar.unit}
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-[#EA580C] rounded-full transition-all duration-500"
                      style={{ width: `${Math.max(leftPct, bar.leftVal > 0 ? 4 : 0)}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#A1A1AA]">{right.name}</span>
                    <span className="font-mono tabular-nums text-[#FAFAF9]">
                      {bar.rightVal.toLocaleString('fr-FR')} {bar.unit}
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-[#D4AF37] rounded-full transition-all duration-500"
                      style={{ width: `${Math.max(rightPct, bar.rightVal > 0 ? 4 : 0)}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Side-by-Side Matrix */}
      <section className="rounded-xl bg-[#121216] border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="font-serif text-2xl font-semibold text-[#FAFAF9]">
            Tableau comparatif détaillé
          </h3>
        </div>
        <div className="divide-y divide-white/10">
          {qualitativeRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 sm:px-6 items-start"
            >
              <div className="md:col-span-3 text-xs uppercase tracking-wider text-[#A1A1AA] font-medium pt-0.5">
                {row.label}
              </div>
              <div
                className={`md:col-span-4 text-sm text-[#FAFAF9] leading-relaxed ${
                  row.italic ? 'italic text-[#EA580C]' : ''
                } ${row.mono ? 'font-mono tabular-nums' : ''}`}
              >
                {row.left}
              </div>
              <div className="hidden md:block md:col-span-1 text-center text-[#71717A] text-xs">
                vs
              </div>
              <div
                className={`md:col-span-4 text-sm text-[#FAFAF9] leading-relaxed ${
                  row.italic ? 'italic text-[#D4AF37]' : ''
                } ${row.mono ? 'font-mono tabular-nums' : ''}`}
              >
                {row.right}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
