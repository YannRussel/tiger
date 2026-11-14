import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  Search,
  ShieldAlert,
  ShieldCheck,
  X,
} from 'lucide-react';
import { SUBSPECIES_DATA } from '@/src/data/tigers';
import { HabitatCategory, RegionFilter, Subspecies } from '@/src/types/tiger';

interface CatalogPageProps {
  onSelectSubspecies: (id: string) => void;
}

const REGIONS: RegionFilter[] = [
  'Toutes',
  'Asie du Sud',
  'Asie du Nord-Est',
  'Asie du Sud-Est',
  'Îles de la Sonde',
  'Asie centrale',
];

const HABITATS: HabitatCategory[] = [
  'Tous',
  'Forêt tropicale',
  'Taïga enneigée',
  'Mangroves & Prairies',
  'Forêt de montagne',
];

export const CatalogPage: React.FC<CatalogPageProps> = ({
  onSelectSubspecies,
}) => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'living' | 'extinct'>('all');
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('Toutes');
  const [habitatFilter, setHabitatFilter] = useState<HabitatCategory>('Tous');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return SUBSPECIES_DATA.filter((sub) => {
      if (statusFilter === 'living' && sub.isExtinct) return false;
      if (statusFilter === 'extinct' && !sub.isExtinct) return false;
      if (regionFilter !== 'Toutes' && sub.regionGroup !== regionFilter) return false;
      if (habitatFilter !== 'Tous' && sub.habitatCategory !== habitatFilter) return false;
      if (!q) return true;
      return (
        sub.name.toLowerCase().includes(q) ||
        sub.scientificName.toLowerCase().includes(q) ||
        sub.originSummary.toLowerCase().includes(q) ||
        sub.summary.toLowerCase().includes(q)
      );
    });
  }, [search, statusFilter, regionFilter, habitatFilter]);

  const livingList = filtered.filter((s) => !s.isExtinct);
  const extinctList = filtered.filter((s) => s.isExtinct);

  const resetFilters = () => {
    setSearch('');
    setStatusFilter('all');
    setRegionFilter('Toutes');
    setHabitatFilter('Tous');
  };

  const renderCard = (sub: Subspecies) => (
    <article
      key={sub.id}
      onClick={() => onSelectSubspecies(sub.id)}
      className="group cursor-pointer rounded-xl overflow-hidden bg-[#131318] border border-white/10 hover:border-[#EA580C]/70 transition-all duration-200 flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-black">
        <img
          src={sub.heroImage}
          alt={sub.name}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            sub.isExtinct ? 'grayscale-[25%] contrast-[1.03]' : ''
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 text-[#FAFAF9] font-medium">
            {sub.isExtinct ? (
              <ShieldAlert className="w-3.5 h-3.5 text-[#A1A1AA]" />
            ) : (
              <ShieldCheck
                className={`w-3.5 h-3.5 ${
                  sub.statusCode === 'CR' ? 'text-[#EA580C]' : 'text-[#E8CA64]'
                }`}
              />
            )}
            <span>{sub.statusLabel}</span>
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="text-xs text-[#A1A1AA]">
            <span>{sub.regionGroup}</span>
            <span className="mx-1.5" aria-hidden="true">·</span>
            <span>{sub.habitatCategory}</span>
          </div>
          <h3 className="font-serif text-2xl font-semibold text-[#FAFAF9] group-hover:text-[#EA580C] transition-colors">
            {sub.name}
          </h3>
          <p className="text-xs italic text-[#D4AF37]">{sub.scientificName}</p>
          <p className="text-sm text-[#D4D4D8] leading-relaxed pt-1">
            {sub.summary}
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#A1A1AA]">Origine</span>
            <span className="text-[#FAFAF9] text-right truncate max-w-[65%]">
              {sub.originSummary}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#A1A1AA]">Population estimée</span>
            <span className="font-mono tabular-nums text-[#E8CA64] text-right">
              {sub.isExtinct ? sub.extinctionPeriod : sub.metrics.wildPopulationLabel}
            </span>
          </div>
          <div className="pt-2 flex items-center justify-end text-xs font-medium text-[#EA580C]">
            <span className="inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
              Ouvrir la fiche documentaire <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
          Catalogue Zoologique · 9 Sous-espèces historiques
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#FAFAF9]">
          Les Tigres du Monde Entier
        </h1>
        <p className="text-base text-[#D4D4D8] leading-relaxed">
          Explorez les six sous-espèces vivantes et les trois sous-espèces éteintes au XXe siècle.
          Chaque fiche détaille l’écologie, la morphologie, l’alimentation et l’état de conservation
          selon les données de l’IUCN, du WWF et du Smithsonian.
        </p>
      </div>

      {/* Interactive Filter Toolbar */}
      <div className="rounded-xl bg-[#121216] border border-white/10 p-5 space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Search Bar */}
          <div className="lg:col-span-5 relative">
            <Search className="w-4 h-4 text-[#A1A1AA] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filtrer par nom, nom scientifique, pays..."
              className="w-full pl-10 pr-9 py-2.5 rounded-lg bg-[#09090B] border border-white/15 focus:border-[#EA580C] focus:outline-none text-sm text-[#FAFAF9] placeholder-[#71717A]"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A1A1AA] hover:text-white"
                aria-label="Effacer la recherche"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Living vs Extinct Segmented Control */}
          <div className="lg:col-span-4 flex items-center gap-1 p-1 bg-[#09090B] rounded-lg border border-white/10">
            {[
              { id: 'all', label: 'Toutes (9)' },
              { id: 'living', label: 'Vivantes (6)' },
              { id: 'extinct', label: 'Éteintes (3)' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setStatusFilter(tab.id as 'all' | 'living' | 'extinct')}
                className={`flex-1 py-2 px-3 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                  statusFilter === tab.id
                    ? 'bg-[#EA580C] text-white'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-3 text-xs text-[#A1A1AA]">
            <span className="tabular-nums">
              {filtered.length} résultat{filtered.length > 1 ? 's' : ''}
            </span>
            {(search || statusFilter !== 'all' || regionFilter !== 'Toutes' || habitatFilter !== 'Tous') && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-[#D4AF37] hover:underline font-medium"
              >
                Réinitialiser
              </button>
            )}
          </div>
        </div>

        {/* Region & Habitat Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-white/10">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-[#A1A1AA] block">
              Origine géographique
            </span>
            <div className="flex flex-wrap gap-1.5">
              {REGIONS.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => setRegionFilter(region)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                    regionFilter === region
                      ? 'bg-[#D4AF37] text-[#09090B]'
                      : 'bg-[#09090B] text-[#D4D4D8] border border-white/10 hover:border-white/25'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-[#A1A1AA] block">
              Habitat naturel
            </span>
            <div className="flex flex-wrap gap-1.5">
              {HABITATS.map((habitat) => (
                <button
                  key={habitat}
                  type="button"
                  onClick={() => setHabitatFilter(habitat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                    habitatFilter === habitat
                      ? 'bg-[#D4AF37] text-[#09090B]'
                      : 'bg-[#09090B] text-[#D4D4D8] border border-white/10 hover:border-white/25'
                  }`}
                >
                  {habitat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-[#121216] p-12 text-center space-y-4">
          <p className="font-serif text-2xl text-[#FAFAF9]">
            Aucune sous-espèce trouvée pour ces critères
          </p>
          <p className="text-sm text-[#A1A1AA]">
            Modifiez la région, l’habitat ou les termes de recherche pour explorer les neuf lignées.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-md bg-[#EA580C] text-white text-xs font-semibold"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {/* Living Subspecies Section */}
          {livingList.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-baseline justify-between border-b border-white/15 pb-4">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAFAF9]">
                    Sous-espèces vivantes
                  </h2>
                  <p className="text-xs text-[#A1A1AA] mt-1">
                    Populations actuelles faisant l’objet de programmes de suivi et de protection
                  </p>
                </div>
                <span className="text-xs font-mono text-[#EA580C] tabular-nums">
                  {livingList.length} / 6
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {livingList.map(renderCard)}
              </div>
            </section>
          )}

          {/* Extinct Subspecies Section */}
          {extinctList.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-baseline justify-between border-b border-white/15 pb-4">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAFAF9]">
                    Sous-espèces éteintes au XXe siècle
                  </h2>
                  <p className="text-xs text-[#A1A1AA] mt-1">
                    Archives historiques et mémoires des lignées disparues entre 1937 et les années 1980
                  </p>
                </div>
                <span className="text-xs font-mono text-[#D4AF37] tabular-nums">
                  {extinctList.length} / 3
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {extinctList.map(renderCard)}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};
