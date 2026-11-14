import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HERO_BANNERS, TIGER_IMAGES } from '@/src/data/tigers';
import { TigerLogo } from '@/src/components/TigerLogo';

interface AnimatedHeroBannerProps {
  onExploreSubspecies: () => void;
  onSelectSubspecies: (id: string) => void;
}

export const AnimatedHeroBanner: React.FC<AnimatedHeroBannerProps> = ({
  onExploreSubspecies,
  onSelectSubspecies,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const current = HERO_BANNERS[activeSlide];

  return (
    <section className="relative min-h-[78vh] lg:min-h-[86vh] flex items-end overflow-hidden bg-[#09090B]">
      {/* Animated background slides */}
      {HERO_BANNERS.map((banner, index) => (
        <div
          key={banner.id}
          aria-hidden={index !== activeSlide}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center animate-ken-burns"
          />
        </div>
      ))}

      {/* Measured contrast scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/45 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/90 via-[#09090B]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 pt-28">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <TigerLogo size={42} showWordmark={false} />
            <span className="text-xs uppercase tracking-[0.22em] text-[#D4AF37] font-medium">
              Portail Documentaire · Panthera tigris
            </span>
          </div>

          <h1
            className="font-serif font-semibold text-[#FAFAF9] leading-[1.04] tracking-tight"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              textWrap: 'balance',
            }}
          >
            TIGER <span className="text-[#EA580C]">WORLD</span>
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#E8CA64] leading-snug max-w-2xl">
            « Entrez dans l’univers fascinant des grands félins. »
          </p>

          <p className="text-sm sm:text-base text-[#D4D4D8] max-w-xl leading-relaxed">
            {current.habitatLabel} — {current.subtitle}.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onExploreSubspecies}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#EA580C] hover:bg-[#F97316] text-white text-sm font-semibold tracking-wide transition-colors duration-150 min-h-[46px]"
            >
              <span>Explorer les tigres</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onSelectSubspecies(current.subspeciesId)}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-[#D4AF37]/50 hover:border-[#D4AF37] bg-black/45 backdrop-blur-sm text-[#FAFAF9] text-sm font-medium transition-colors duration-150 min-h-[46px]"
            >
              <span>Fiche : {current.title}</span>
            </button>
          </div>
        </div>

        {/* Slide navigation bar */}
        <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {HERO_BANNERS.map((banner, idx) => (
              <button
                key={banner.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                className={`text-left transition-all duration-200 pr-4 ${
                  idx === activeSlide ? 'opacity-100' : 'opacity-45 hover:opacity-80'
                }`}
              >
                <div className="text-[11px] font-mono text-[#D4AF37] tabular-nums">
                  0{idx + 1}
                </div>
                <div className="text-xs font-medium text-white whitespace-nowrap">
                  {banner.title}
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setActiveSlide((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length)
              }
              aria-label="Bannière précédente"
              className="w-10 h-10 rounded-md border border-white/20 hover:border-[#D4AF37] flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_BANNERS.length)}
              aria-label="Bannière suivante"
              className="w-10 h-10 rounded-md border border-white/20 hover:border-[#D4AF37] flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ParallaxEnvironmentBannerProps {
  onSelectSubspecies: (id: string) => void;
}

export const ParallaxEnvironmentBanner: React.FC<ParallaxEnvironmentBannerProps> = ({
  onSelectSubspecies,
}) => {
  const { scrollYProgress } = useScroll();
  const yShift = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  const environments = [
    {
      id: 'siberie',
      title: 'Sous les blizzards de la taïga',
      habitat: 'Extrême-Orient russe · -40 °C',
      description:
        'Un manteau hivernal d’une densité exceptionnelle et des territoires de plus de 800 km² pour traquer cerfs et sangliers dans la neige profonde.',
      image: TIGER_IMAGES.siberianSnow,
    },
    {
      id: 'sumatra',
      title: 'Dans l’émeraude des forêts pluviales',
      habitat: 'Sumatra · Indonésie',
      description:
        'Des rayures sombres et serrées épousant les jeux d’ombre de la canopée équatoriale, là où le dernier tigre insulaire nage entre les berges moussues.',
      image: TIGER_IMAGES.sumatranJungle,
    },
    {
      id: 'bengale',
      title: 'Maîtres des eaux et des rivières',
      habitat: 'Sundarbans & Ranthambore · Inde',
      description:
        'Contrairement à presque tous les félins, le tigre chasse, rafraîchit sa masse musculaire et traverse des bras de mer et grands fleuves avec puissance.',
      image: TIGER_IMAGES.huntingAction,
    },
  ];

  const [selectedEnv, setSelectedEnv] = useState(0);
  const env = environments[selectedEnv];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#09090B]">
      <div className="relative min-h-[520px] flex items-center overflow-hidden">
        <motion.div
          style={{ y: yShift }}
          className="absolute -inset-8 pointer-events-none"
        >
          <img
            src={env.image}
            alt={env.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-opacity duration-700"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/95 via-[#09090B]/70 to-[#09090B]/30" />

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                Immersion Écologique · {env.habitat}
              </p>
              <h2
                className="font-serif text-3xl sm:text-5xl font-semibold text-[#FAFAF9] leading-tight"
                style={{ textWrap: 'balance' }}
              >
                {env.title}
              </h2>
              <p className="text-base text-[#D4D4D8] max-w-xl leading-relaxed">
                {env.description}
              </p>
              <button
                type="button"
                onClick={() => onSelectSubspecies(env.id)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#E8CA64] hover:text-white transition-colors"
              >
                <span>Découvrir la fiche documentaire</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-2">
              {environments.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedEnv(idx)}
                  className={`text-left p-4 rounded-lg border transition-all duration-150 ${
                    selectedEnv === idx
                      ? 'bg-black/75 border-[#EA580C] text-white'
                      : 'bg-black/45 border-white/10 text-[#A1A1AA] hover:border-white/25 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-mono text-[#D4AF37]">{item.habitat}</div>
                  <div className="font-serif text-lg font-medium mt-0.5">{item.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
