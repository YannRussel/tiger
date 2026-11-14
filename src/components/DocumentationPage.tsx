import React, { useState } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import {
  CONSERVATION_INITIATIVES,
  DID_YOU_KNOW_FACTS,
  TIGER_IMAGES,
} from '@/src/data/tigers';
import { PageRoute } from '@/src/types/tiger';

interface DocumentationPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const DocumentationPage: React.FC<DocumentationPageProps> = ({
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<
    'biology' | 'conservation' | 'taxonomy' | 'facts'
  >('biology');

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
          Dossier Scientifique & Conservation
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#FAFAF9]">
          Documentation Zoologique
        </h1>
        <p className="text-base text-[#D4D4D8] leading-relaxed">
          Anatomie comparée, génétique évolutive, écologie de la prédation et stratégies mondiales
          de protection. Synthèse rigoureuse issue des publications de l’IUCN, du WWF, du
          Smithsonian National Zoo et de National Geographic.
        </p>
      </div>

      {/* Section Switch Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/10">
        {[
          { id: 'biology', label: '01. Anatomie & Biologie' },
          { id: 'conservation', label: '02. Protection des tigres' },
          { id: 'taxonomy', label: '03. Taxonomie & Génétique' },
          { id: 'facts', label: '04. Le saviez-vous ?' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() =>
              setActiveTab(tab.id as 'biology' | 'conservation' | 'taxonomy' | 'facts')
            }
            className={`px-4 py-2.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-[#EA580C] text-white'
                : 'bg-[#121216] text-[#D4D4D8] border border-white/10 hover:border-white/25'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Biology & Anatomy */}
      {activeTab === 'biology' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <article className="space-y-4">
              <h2 className="font-serif text-3xl font-semibold text-[#FAFAF9]">
                Biomécanique d’un superprédateur solitaire
              </h2>
              <p className="text-base text-[#D4D4D8] leading-[1.8] max-w-prose">
                Le squelette et la musculature de Panthera tigris sont optimisés pour la puissance
                explosive à courte portée plutôt que pour l’endurance. Ses membres antérieurs massifs
                et ses omoplates libres lui confèrent une force de frappe capable de terrasser des
                bovidés de plus de 800 kg tels que le gaur ou le buffle d’eau.
              </p>
            </article>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-[#121216] border border-white/10 space-y-2">
                <span className="text-xs font-mono text-[#D4AF37]">DENTITION</span>
                <h3 className="font-serif text-xl font-semibold text-[#FAFAF9]">
                  30 dents spécialisées
                </h3>
                <p className="text-sm text-[#D4D4D8] leading-relaxed">
                  Canines coniques de 7,5 à 10 cm équipées de mécanorécepteurs nerveux permettant de
                  localiser précisément l’interstice entre les vertèbres cervicales de la proie.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#121216] border border-white/10 space-y-2">
                <span className="text-xs font-mono text-[#D4AF37]">VISION & OUÏE</span>
                <h3 className="font-serif text-xl font-semibold text-[#FAFAF9]">
                  Sens crépusculaires
                </h3>
                <p className="text-sm text-[#D4D4D8] leading-relaxed">
                  Vision nocturne environ six fois supérieure à celle de l’homme grâce au tapetum
                  lucidum. Audition sensible aux infrasons sous 20 Hz portant à plusieurs kilomètres.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#121216] border border-white/10 space-y-2">
                <span className="text-xs font-mono text-[#D4AF37]">LOCOMOTION</span>
                <h3 className="font-serif text-xl font-semibold text-[#FAFAF9]">
                  Griffes rétractiles et coussinets
                </h3>
                <p className="text-sm text-[#D4D4D8] leading-relaxed">
                  Cinq doigts aux pattes antérieures et quatre aux pattes postérieures ; les griffes
                  restent gainées au repos pour préserver leur tranchant lors de la marche silencieuse.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#121216] border border-white/10 space-y-2">
                <span className="text-xs font-mono text-[#D4AF37]">CAMOUFLAGE</span>
                <h3 className="font-serif text-xl font-semibold text-[#FAFAF9]">
                  Paradoxe de la robe orange
                </h3>
                <p className="text-sm text-[#D4D4D8] leading-relaxed">
                  La plupart des ongulés proies (cerfs, sangliers) possèdent une vision dichromatique
                  et perçoivent le pelage orange du tigre comme un vert terne fondu dans la végétation.
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <figure className="rounded-xl overflow-hidden bg-[#121216] border border-white/10">
              <img
                src={TIGER_IMAGES.huntingAction}
                alt="Tigre bondissant dans l’eau"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              <figcaption className="p-4 text-xs font-serif italic text-[#A1A1AA]">
                Fig. 2 — Détente musculaire en milieu aquatique : la queue sert de gouvernail
                dynamique lors de l’assaut.
              </figcaption>
            </figure>

            <div className="p-6 rounded-xl bg-[#121216] border border-white/10 space-y-3">
              <h3 className="font-serif text-xl font-semibold text-[#FAFAF9]">
                Constantes biologiques
              </h3>
              <dl className="divide-y divide-white/10 text-xs">
                <div className="py-2.5 flex justify-between">
                  <dt className="text-[#A1A1AA]">Vitesse de pointe</dt>
                  <dd className="font-mono tabular-nums text-[#FAFAF9]">55 – 65 km/h (sur &lt; 100 m)</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-[#A1A1AA]">Longueur de bond</dt>
                  <dd className="font-mono tabular-nums text-[#FAFAF9]">Jusqu’à 8 – 10 m</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-[#A1A1AA]">Gestation moyenne</dt>
                  <dd className="font-mono tabular-nums text-[#FAFAF9]">~103 jours (93–112 j)</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-[#A1A1AA]">Succès de chasse</dt>
                  <dd className="font-mono tabular-nums text-[#FAFAF9]">~1 attaque sur 10 à 20</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      )}

      {/* Tab 2: Protection & Conservation */}
      {activeTab === 'conservation' && (
        <div className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-3xl font-semibold text-[#FAFAF9]">
                Protection des tigres : menaces critiques et victoires de terrain
              </h2>
              <p className="text-base text-[#D4D4D8] leading-[1.8]">
                En 2010, lors du Sommet du Tigre à Saint-Pétersbourg, les treize pays de l’aire de
                répartition se sont engagés dans le programme Tx2 afin d’enrayer la chute historique
                qui avait ramené les populations mondiales à environ 3 200 individus. L’inversion de
                la tendance en Inde, au Népal et en Russie démontre qu’une protection rigoureuse des
                proies et des corridors permet un rétablissement rapide.
              </p>
              <p className="text-base text-[#D4D4D8] leading-[1.8]">
                En revanche, l’Asie du Sud-Est connaît une crise aiguë liée aux pièges à collet
                industriels (« snaring crisis ») et à la déforestation, provoquant la disparition
                locale des tigres au Cambodge, au Laos et au Vietnam, ainsi qu’une situation critique
                en Malaisie et à Sumatra.
              </p>
            </div>
            <div className="lg:col-span-5">
              <figure className="rounded-xl overflow-hidden border border-white/10 bg-[#121216]">
                <img
                  src={TIGER_IMAGES.motherCubs}
                  alt="Tigresse avec ses petits dans la réserve"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
                <figcaption className="p-4 text-xs text-[#A1A1AA]">
                  La survie des portées dépend directement de la tranquillité des zones noyaux des
                  réserves et de l’abondance des ongulés.
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONSERVATION_INITIATIVES.map((item) => (
              <article
                key={item.id}
                className="p-6 rounded-xl bg-[#121216] border border-white/10 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-[#EA580C] font-medium">{item.organization}</span>
                  <span className="font-mono text-[#D4AF37]">{item.metric}</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#FAFAF9]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A1A1AA]">Zone d’action : {item.region}</p>
                <p className="text-sm text-[#D4D4D8] leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Taxonomy & Genetics */}
      {activeTab === 'taxonomy' && (
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-semibold text-[#FAFAF9]">
              9 sous-espèces traditionnelles ou 2 clades IUCN ?
            </h2>
            <p className="text-base text-[#D4D4D8] leading-[1.8]">
              Pendant plus d’un siècle, la zoologie a classifié les tigres selon neuf sous-espèces
              morphologiques et géographiques (six vivantes et trois éteintes au XXe siècle). En
              2017, la Task Force de classification des félins de l’IUCN (Kitchener et al.,
              *Cat News*) a officiellement révisé la taxonomie sur la base des analyses génomiques
              et morphologiques modernes en reconnaissant deux sous-espèces principales :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#121216] border border-white/10 space-y-3">
              <div className="text-xs font-mono text-[#EA580C]">CLADE CONTINENTAL</div>
              <h3 className="font-serif text-2xl font-semibold italic text-[#FAFAF9]">
                Panthera tigris tigris
              </h3>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                Regroupe toutes les populations du continent asiatique : Bengale, Sibérie (Amour),
                Indochine, Malaisie, Chine méridionale et l’ancienne population éteinte de la
                Caspienne.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#121216] border border-white/10 space-y-3">
              <div className="text-xs font-mono text-[#D4AF37]">CLADE INSULAIRE DE LA SONDE</div>
              <h3 className="font-serif text-2xl font-semibold italic text-[#FAFAF9]">
                Panthera tigris sondaica
              </h3>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                Regroupe les tigres des îles de la Sonde isolés par la montée des océans après le
                Pléistocène : le tigre de Sumatra (seul survivant) ainsi que les tigres éteints de
                Java et de Bali.
              </p>
            </div>
          </div>

          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            Note éditoriale : Dans le cadre de la conservation régionale et des plans de gestion
            nationaux, les six lignées vivantes et les trois lignées disparues restent étudiées
            distinctement — c’est pourquoi TIGER WORLD présente les neuf fiches complètes tout en
            indiquant leur clade IUCN 2017.
          </p>
        </div>
      )}

      {/* Tab 4: Le saviez-vous ? */}
      {activeTab === 'facts' && (
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-serif text-3xl font-semibold text-[#FAFAF9]">
              Le saviez-vous ? Faits vérifiés
            </h2>
            <button
              type="button"
              onClick={() => onNavigate('quiz')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#EA580C] hover:underline"
            >
              <span>Passer au Quiz zoologique</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DID_YOU_KNOW_FACTS.map((fact) => (
              <article
                key={fact.id}
                className="p-6 rounded-xl bg-[#121216] border border-white/10 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                    {fact.category}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#FAFAF9]">
                    {fact.title}
                  </h3>
                  <p className="text-sm text-[#D4D4D8] leading-relaxed">{fact.fact}</p>
                </div>
                <div className="pt-3 border-t border-white/10 text-xs text-[#A1A1AA]">
                  Source : {fact.source}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Verified Sources Block */}
      <section className="rounded-xl bg-[#101014] border border-white/10 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37]">
          <BookOpen className="w-4 h-4" />
          <span>Référentiel bibliographique de TIGER WORLD</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#A1A1AA] leading-relaxed">
          <div>
            <strong className="text-[#FAFAF9] block mb-1">IUCN Red List</strong>
            Évaluations mondiales des sous-espèces et révision taxonomique du Cat Specialist Group.
          </div>
          <div>
            <strong className="text-[#FAFAF9] block mb-1">WWF Global Tiger Programme</strong>
            Suivi de l’initiative Tx2, corridors écologiques et estimations démographiques par pays.
          </div>
          <div>
            <strong className="text-[#FAFAF9] block mb-1">Smithsonian National Zoo</strong>
            Données biométriques, biologie de la reproduction, éthologie et génétique évolutive.
          </div>
          <div>
            <strong className="text-[#FAFAF9] block mb-1">National Geographic & GTF</strong>
            Recensements de terrain, écologie des proies et histoire de la conservation.
          </div>
        </div>
      </section>
    </div>
  );
};
