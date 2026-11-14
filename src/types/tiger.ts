export type PageRoute =
  | 'home'
  | 'subspecies'
  | 'detail'
  | 'gallery'
  | 'comparator'
  | 'map'
  | 'documentation'
  | 'quiz'
  | 'about';

export type ConservationStatusCode = 'EN' | 'CR' | 'EX';

export type RegionFilter =
  | 'Toutes'
  | 'Asie du Sud'
  | 'Asie du Nord-Est'
  | 'Asie du Sud-Est'
  | 'Îles de la Sonde'
  | 'Asie centrale';

export type HabitatCategory =
  | 'Tous'
  | 'Forêt tropicale'
  | 'Taïga enneigée'
  | 'Mangroves & Prairies'
  | 'Forêt de montagne';

export interface DocumentaryChapter {
  timecode: string;
  title: string;
  caption: string;
  image: string;
  location: string;
}

export interface Subspecies {
  id: string;
  name: string;
  scientificName: string;
  iucnClade2017: string;
  isExtinct: boolean;
  extinctionPeriod?: string;
  statusCode: ConservationStatusCode;
  statusLabel: string;
  regionGroup: Exclude<RegionFilter, 'Toutes'>;
  habitatCategory: Exclude<HabitatCategory, 'Tous'>;
  originSummary: string;
  heroImage: string;
  galleryImages: {
    src: string;
    caption: string;
    credit: string;
  }[];
  summary: string;
  // Numeric metrics for accurate tabular display & comparator
  metrics: {
    maleWeightMinKg: number;
    maleWeightMaxKg: number;
    femaleWeightMinKg: number;
    femaleWeightMaxKg: number;
    maleLengthMaxCm: number;
    tailLengthCm: string;
    shoulderHeightCm: string;
    wildPopulationLabel: string;
    wildPopulationNumeric: number;
    lifespanWildYears: string;
    lifespanCaptivityYears: string;
    lifespanNumericMax: number;
    territoryKm2: string;
    territoryNumericMax: number;
  };
  // Coordinates on our calibrated Eurasia SVG map (viewBox 0 0 1200 680)
  mapPosition: {
    x: number;
    y: number;
    currentRangePath?: string;
    historicalRangePath: string;
    coordinatesLabel: string;
  };
  // 14 required documentary sections
  dossier: {
    originAndDistribution: string;
    naturalHabitat: string;
    sizeAndWeight: string;
    bodyAndTailLength: string;
    coatColor: string;
    physicalFeatures: string;
    diet: string;
    huntingTechniques: string;
    behavior: string;
    reproduction: string;
    lifespan: string;
    estimatedPopulation: string;
    threatsAndConservation: string;
    anecdotes: string[];
  };
  documentaryTitle: string;
  documentaryDuration: string;
  documentaryChapters: DocumentaryChapter[];
  sources: string[];
}

export type GalleryCategory =
  | 'Tout voir'
  | 'Portraits'
  | 'En chasse'
  | 'Mère & petits'
  | 'Dans la neige'
  | 'Dans la jungle'
  | 'Archives historiques'
  | 'Vidéos documentaires';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'Tout voir' | 'Vidéos documentaires'>;
  subspeciesId: string;
  subspeciesName: string;
  image: string;
  location: string;
  exif: string;
  description: string;
  featured?: boolean;
}

export interface FactItem {
  id: string;
  title: string;
  category: string;
  fact: string;
  source: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  source: string;
}

export interface ConservationInitiative {
  id: string;
  title: string;
  organization: string;
  region: string;
  metric: string;
  description: string;
}
