import tigerBengalHero from '@/src/assets/images/tiger_bengal_hero_1794675083728.jpg';
import tigerSiberianSnow from '@/src/assets/images/tiger_siberian_snow_1794675084242.jpg';
import tigerSumatranJungle from '@/src/assets/images/tiger_sumatran_jungle_1794675084228.jpg';
import tigerIndochineseForest from '@/src/assets/images/tiger_indochinese_forest_1794675084784.jpg';
import tigerMalayanUndergrowth from '@/src/assets/images/tiger_malayan_undergrowth_1794675085711.jpg';
import tigerSouthChina from '@/src/assets/images/tiger_south_china_1794675085896.jpg';
import tigerBaliArchival from '@/src/assets/images/tiger_bali_archival_1794675085847.jpg';
import tigerJavanArchival from '@/src/assets/images/tiger_javan_archival_1794675086475.jpg';
import tigerCaspianArchival from '@/src/assets/images/tiger_caspian_archival_1794675087501.jpg';
import tigerHuntingAction from '@/src/assets/images/tiger_hunting_action_1794675087997.jpg';
import tigerMotherCubs from '@/src/assets/images/tiger_mother_cubs_1794675088378.jpg';
import tigerCloseupPortrait from '@/src/assets/images/tiger_closeup_portrait_1794675088752.jpg';

import {
  ConservationInitiative,
  FactItem,
  GalleryItem,
  QuizQuestion,
  Subspecies,
} from '@/src/types/tiger';

export const TIGER_IMAGES = {
  bengalHero: tigerBengalHero,
  siberianSnow: tigerSiberianSnow,
  sumatranJungle: tigerSumatranJungle,
  indochineseForest: tigerIndochineseForest,
  malayanUndergrowth: tigerMalayanUndergrowth,
  southChina: tigerSouthChina,
  baliArchival: tigerBaliArchival,
  javanArchival: tigerJavanArchival,
  caspianArchival: tigerCaspianArchival,
  huntingAction: tigerHuntingAction,
  motherCubs: tigerMotherCubs,
  closeupPortrait: tigerCloseupPortrait,
};

export const HERO_BANNERS = [
  {
    id: 'bengal',
    image: tigerBengalHero,
    habitatLabel: 'Forêts de sal et prairies du Teraï · Inde & Népal',
    title: 'Le souverain des brumes dorées',
    subtitle: 'Panthera tigris tigris — Plus de 70 % de la population mondiale sauvage',
    subspeciesId: 'bengale',
  },
  {
    id: 'siberie',
    image: tigerSiberianSnow,
    habitatLabel: 'Taïga enneigée du Primorié · Extrême-Orient russe',
    title: 'L’empereur de la taïga boréale',
    subtitle: 'Panthera tigris altaica — Adapté aux hivers de -40 °C sur des territoires immenses',
    subspeciesId: 'siberie',
  },
  {
    id: 'sumatra',
    image: tigerSumatranJungle,
    habitatLabel: 'Forêts pluviales de Sumatra · Indonésie',
    title: 'Le fantôme des rivières émeraude',
    subtitle: 'Panthera tigris sumatrae — Dernier tigre insulaire de la planète',
    subspeciesId: 'sumatra',
  },
];

export const SUBSPECIES_DATA: Subspecies[] = [
  {
    id: 'bengale',
    name: 'Tigre du Bengale',
    scientificName: 'Panthera tigris tigris',
    iucnClade2017: 'Panthera tigris tigris (clade continental)',
    isExtinct: false,
    statusCode: 'EN',
    statusLabel: 'En danger (EN)',
    regionGroup: 'Asie du Sud',
    habitatCategory: 'Mangroves & Prairies',
    originSummary: 'Inde, Népal, Bhoutan, Bangladesh',
    heroImage: tigerBengalHero,
    galleryImages: [
      {
        src: tigerBengalHero,
        caption: 'Mâle adulte patrouillant dans la brume matinale d’une forêt de sal.',
        credit: 'Collection Tiger World · Inde centrale',
      },
      {
        src: tigerHuntingAction,
        caption: 'Assaut fulgurant en rivière peu profonde lors d’une chasse crépusculaire.',
        credit: 'Collection Tiger World · Parc national de Ranthambore',
      },
      {
        src: tigerMotherCubs,
        caption: 'Tigresse veillant sur ses deux jeunes dans les hautes herbes du Teraï.',
        credit: 'Collection Tiger World · Réserve de Corbett',
      },
      {
        src: tigerCloseupPortrait,
        caption: 'Portrait rapproché soulignant le motif unique des rayures faciales.',
        credit: 'Collection Tiger World · Archive optique 400 mm',
      },
    ],
    summary:
      'Sous-espèce la plus abondante à l’état sauvage, le tigre du Bengale règne des contreforts himalayens jusqu’aux mangroves salées des Sundarbans.',
    metrics: {
      maleWeightMinKg: 180,
      maleWeightMaxKg: 258,
      femaleWeightMinKg: 100,
      femaleWeightMaxKg: 160,
      maleLengthMaxCm: 310,
      tailLengthCm: '85 – 110 cm',
      shoulderHeightCm: '90 – 110 cm',
      wildPopulationLabel: '~3 900 – 4 200 individus',
      wildPopulationNumeric: 4050,
      lifespanWildYears: '10 – 15 ans',
      lifespanCaptivityYears: '18 – 22 ans',
      lifespanNumericMax: 15,
      territoryKm2: '20 – 100 km²',
      territoryNumericMax: 100,
    },
    mapPosition: {
      x: 590,
      y: 355,
      coordinatesLabel: '22.0° N, 80.5° E',
      currentRangePath:
        'M545,320 C568,308 605,305 632,328 C646,348 634,392 602,422 C582,428 566,396 556,368 Z M622,334 C644,330 658,346 649,366 C635,374 620,356 622,334 Z',
      historicalRangePath:
        'M505,280 C558,270 645,282 678,332 C682,380 632,445 588,456 C552,440 520,382 505,280 Z',
    },
    dossier: {
      originAndDistribution:
        'Le tigre du Bengale est originaire du sous-continent indien. Aujourd’hui, l’Inde abrite à elle seule près de 75 % des tigres sauvages de la planète (3 682 individus estimés lors du recensement national NTCA 2022-2023), complétés par des populations au Népal (~355), au Bhoutan (~131) et dans les mangroves transfrontalières des Sundarbans au Bangladesh (~114-125).',
      naturalHabitat:
        'Il fréquente une remarquable diversité de milieux : forêts tropicales sèches et humides de feuillus (forêts de sal), prairies alluviales d’herbes hautes de l’arc du Teraï, forêts de piémont himalayen jusqu’à plus de 3 000 m d’altitude au Bhoutan, et mangroves intertidales des Sundarbans.',
      sizeAndWeight:
        'Les mâles mesurent de 90 à 110 cm au garrot et pèsent généralement entre 180 et 258 kg (moyenne d’environ 220 kg, avec quelques grands mâles du nord de l’Inde et du Népal dépassant 260 kg). Les femelles sont plus menues, pesant de 100 à 160 kg (moyenne ~140 kg).',
      bodyAndTailLength:
        'La longueur totale (museau à l’extrémité de la queue) atteint 270 à 310 cm chez le mâle et 240 à 265 cm chez la femelle. La queue robuste mesure à elle seule entre 85 et 110 cm et sert de balancier lors des courses et des virages serrés.',
      coatColor:
        'Sa robe arbore un orange vif à fauve doré barré de rayures noires ou brun très foncé, avec un ventre, une gorge, une poitrine et l’intérieur des membres d’un blanc pur. Des mutations génétiques récessives rares produisent des tigres blancs (allèle SLC45A2) ou dorés en captivité.',
      physicalFeatures:
        'Il possède des canines coniques longues de 7,5 à 10 cm, les plus longues de tous les félins actuels, associées à une force de morsure dépassant 4 600 Newtons. Ses pattes antérieures musclées sont armées de griffes rétractiles courbes pouvant atteindre 10 cm.',
      diet:
        'Strictement carnivore, il chasse principalement de grands ongulés : cerf axis (chital), cerf sambar, sanglier d’Inde, nilgaut, barasingha et, plus rarement, le gaur (bovin sauvage de plus de 800 kg) ou le buffle d’eau.',
      huntingTechniques:
        'Prédateur d’embuscade solitaire et essentiellement crépusculaire ou nocturne, il approche sa proie silencieusement jusqu’à 10–20 mètres en profitant du couvert végétal avant de déclencher un sprint bref (jusqu’à 60–65 km/h). Il tue les grandes proies par strangulation à la gorge ou par rupture des vertèbres cervicales sur les proies plus petites.',
      behavior:
        'Animal territorial, il délimite son domaine par des jets d’urine mêlés de sécrétions glandulaires, des griffades sur les troncs et des grattages au sol. Contrairement à la majorité des félins, le tigre du Bengale adore l’eau et traverse aisément des rivières larges de plusieurs kilomètres.',
      reproduction:
        'Après une gestation brève de 93 à 112 jours (en moyenne ~103 jours), la femelle met bas de 2 à 4 petits aveugles pesant environ 1 kg. Allaités durant 5 à 6 mois, les jeunes restent avec leur mère jusqu’à l’âge de 18 à 24 mois pour maîtriser les techniques de chasse.',
      lifespan:
        'Dans la nature, l’espérance de vie est généralement de 10 à 15 ans (rarement plus de 16 ans en raison des conflits territoriaux et de l’usure dentaire). En captivité protégée, elle s’étend de 18 à 22 ans.',
      estimatedPopulation:
        'Selon le Global Tiger Forum, l’IUCN et les recensements nationaux récents (2022-2024), la population sauvage est estimée entre 3 900 et 4 200 individus, en progression lente mais constante en Inde et au Népal grâce aux réserves strictes.',
      threatsAndConservation:
        'Classé « En danger » (EN) sur la Liste rouge de l’IUCN. Les principales menaces sont la fragmentation des habitats par les infrastructures, les conflits homme-tigre en périphérie des réserves et le braconnage pour les peaux et os. Le programme indien « Project Tiger » (lancé en 1973, comptant plus de 55 réserves) et les corridors du Teraï constituent des modèles de conservation.',
      anecdotes: [
        'Chaque tigre possède un motif de rayures unique, équivalent à une empreinte digitale humaine, et ces rayures sont également pigmentées sur sa peau.',
        'Les taches blanches situées à l’arrière de ses oreilles (ocelles) jouent un rôle de communication visuelle pour les petits dans les hautes herbes.',
        'Leur rugissement basse fréquence peut s’entendre jusqu’à 3 kilomètres de distance dans les vallées silencieuses.',
      ],
    },
    documentaryTitle: 'Les Seigneurs du Teraï : Vie secrète du Tigre du Bengale',
    documentaryDuration: '04:18',
    documentaryChapters: [
      {
        timecode: '00:00',
        title: 'L’éveil dans la forêt de sal',
        caption: 'À l’aube, la brume dissipe les traces nocturnes le long des pistes sablonneuses.',
        image: tigerBengalHero,
        location: 'Parc national de Kanha, Inde',
      },
      {
        timecode: '01:05',
        title: 'L’affût aquatique',
        caption: 'Maître des rivières et des mangroves, le tigre exploite l’eau pour masquer son approche.',
        image: tigerHuntingAction,
        location: 'Ranthambore, Rajasthan',
      },
      {
        timecode: '02:20',
        title: 'L’apprentissage des jeunes',
        caption: 'Pendant deux années décisives, la tigresse transmet l’art du camouflage et de l’embuscade.',
        image: tigerMotherCubs,
        location: 'Arc du Teraï, Népal',
      },
      {
        timecode: '03:30',
        title: 'L’empreinte rayée',
        caption: 'Suivis par pièges photographiques, chaque individu est identifié grâce à son pelage unique.',
        image: tigerCloseupPortrait,
        location: 'Réserve de Corbett, Uttarakhand',
      },
    ],
    sources: ['IUCN Red List', 'WWF Global Tiger Programme', 'NTCA India Census 2022', 'Smithsonian National Zoo'],
  },
  {
    id: 'siberie',
    name: 'Tigre de Sibérie',
    scientificName: 'Panthera tigris altaica',
    iucnClade2017: 'Panthera tigris tigris (clade continental)',
    isExtinct: false,
    statusCode: 'EN',
    statusLabel: 'En danger (EN)',
    regionGroup: 'Asie du Nord-Est',
    habitatCategory: 'Taïga enneigée',
    originSummary: 'Extrême-Orient russe (Primorié, Khabarovsk), Nord-Est de la Chine',
    heroImage: tigerSiberianSnow,
    galleryImages: [
      {
        src: tigerSiberianSnow,
        caption: 'Grand mâle traversant la neige profonde sous une épaisse fourrure hivernale.',
        credit: 'Collection Tiger World · Sikhote-Aline, Russie',
      },
      {
        src: tigerCloseupPortrait,
        caption: 'Regard ambré et collerette hivernale dense face au vent glacé de l’Amour.',
        credit: 'Collection Tiger World · Primorié',
      },
    ],
    summary:
      'Également appelé tigre de l’Amour, c’est l’un des plus grands félins de la planète, taillé pour survivre aux hivers rigoureux de la taïga russe.',
    metrics: {
      maleWeightMinKg: 180,
      maleWeightMaxKg: 306,
      femaleWeightMinKg: 100,
      femaleWeightMaxKg: 167,
      maleLengthMaxCm: 330,
      tailLengthCm: '90 – 105 cm',
      shoulderHeightCm: '95 – 115 cm',
      wildPopulationLabel: '~500 – 600 adultes/subadultes (~750 total)',
      wildPopulationNumeric: 600,
      lifespanWildYears: '10 – 15 ans',
      lifespanCaptivityYears: '20 – 25 ans',
      lifespanNumericMax: 15,
      territoryKm2: '300 – 1 000+ km²',
      territoryNumericMax: 1000,
    },
    mapPosition: {
      x: 840,
      y: 205,
      coordinatesLabel: '45.5° N, 135.8° E',
      currentRangePath:
        'M818,185 C845,172 868,186 866,216 C856,238 830,240 815,218 Z',
      historicalRangePath:
        'M750,150 C820,142 885,165 892,226 C875,265 785,268 742,218 Z',
    },
    dossier: {
      originAndDistribution:
        'Originaire des bassins des fleuves Amour et Oussouri, il survit principalement dans les montagnes de Sikhote-Aline (Kraï du Primorié et de Khabarovsk) en Extrême-Orient russe, avec une petite population transfrontalière en expansion dans les provinces du Jilin et du Heilongjiang (nord-est de la Chine).',
      naturalHabitat:
        'Taïga mixte tempérée dominée par le pin de Corée (Pinus koraiensis) et le chêne de Mongolie, où les températures hivernales descendent régulièrement sous -30 °C à -40 °C sous un manteau neigeux épais.',
      sizeAndWeight:
        'Historiquement le plus grand des tigres, les mâles pèsent entre 180 et 306 kg (moyenne contemporaine à l’état sauvage autour de 190–220 kg, les très grands spécimens historiques atteignant ~306 kg). Les femelles pèsent de 100 à 167 kg.',
      bodyAndTailLength:
        'Les grands mâles mesurent de 270 à 330 cm de longueur totale (incluant une queue épaisse de 90 à 105 cm) ; les femelles mesurent entre 240 et 275 cm.',
      coatColor:
        'Son pelage est nettement plus pâle et plus clair que celui des tigres tropicaux : fond ocre pâle à doré clair l’hiver, avec des rayures brun foncé plutôt que noir de jais, et de larges zones blanches sur le ventre et la gorge pour le camouflage neigeux.',
      physicalFeatures:
        'Sa fourrure d’hiver atteint une densité exceptionnelle (jusqu’à 3 000 poils/cm²), accompagnée d’une épaisse couche de graisse sous-cutanée sur les flancs et le ventre (jusqu’à 5 cm) ainsi que de larges coussinets velus agissant comme des raquettes sur la neige.',
      diet:
        'En raison de la faible densité de proies dans la taïga, il parcourt de vastes distances pour chasser le sanglier d’Eurasie, le cerf élaphe (wapiti de Mandchourie), le cerf sika, le chevreuil de Sibérie, et occasionnellement le porte-musc ou de jeunes ours noirs d’Asie et ours bruns.',
      huntingTechniques:
        'Il patrouille silencieusement le long des crêtes et des cours d’eau gelés, exploitant son ouïe fine et sa vision nocturne six fois supérieure à celle de l’homme. L’attaque est brève et explosive afin de ne pas gaspiller une énergie vitale en climat glacial.',
      behavior:
        'Solitaire mais exigeant des domaines vitaux immenses en raison des hivers rudes : un mâle peut occuper un territoire de 500 à plus de 1 000 km², englobant ceux de plusieurs femelles. Il est capable de parcourir plus de 40 km en une seule nuit.',
      reproduction:
        'La reproduction peut survenir toute l’année, mais les naissances se concentrent souvent à la fin du printemps pour profiter des mois chauds. La gestation dure 95 à 107 jours pour une portée de 2 à 4 petits.',
      lifespan:
        'Environ 10 à 15 ans dans la taïga sauvage, et jusqu’à 20 à 25 ans en parc zoologique.',
      estimatedPopulation:
        'Tomber à moins de 40 individus dans les années 1940, le tigre de Sibérie compte aujourd’hui environ 500 à 600 adultes/subadultes (près de 750 tigres au total incluant les jeunes selon le recensement russe de 2022, dont une cinquantaine côté chinois).',
      threatsAndConservation:
        'Classé « En danger » (EN) par l’IUCN. Menacé par le braconnage, l’exploitation forestière illégale (qui détruit les pins de Corée nourrissant sangliers et cerfs), la peste porcine africaine décimant les sangliers, et le faible brassage génétique.',
      anecdotes: [
        'Dans les années 1940, il fut le premier félin au monde à bénéficier d’une interdiction totale de chasse en URSS, ce qui le sauva in extremis de l’extinction.',
        'Des études génétiques (Driscoll et al., 2009) ont montré que le tigre de Sibérie est génétiquement quasi-indiscernable du tigre de la Caspienne disparu.',
        'Son métabolisme hivernal lui permet de consommer jusqu’à 30 à 40 kg de viande lors d’un seul repas après une longue période de jeûne.',
      ],
    },
    documentaryTitle: 'Sur la piste blanche : Le Tigre de l’Amour',
    documentaryDuration: '03:54',
    documentaryChapters: [
      {
        timecode: '00:00',
        title: 'La grande traversée hivernale',
        caption: 'Par -32 °C, chaque empreinte dans la poudreuse révèle le passage d’un mâle de 210 kg.',
        image: tigerSiberianSnow,
        location: 'Monts Sikhote-Aline, Russie',
      },
      {
        timecode: '01:28',
        title: 'Adaptations au grand froid',
        caption: 'Fourrure épaisse, collerette hivernale et coussinets isolants défient le blizzard.',
        image: tigerCloseupPortrait,
        location: 'Réserve de Lazovsky, Primorié',
      },
      {
        timecode: '02:40',
        title: 'Reconquête transfrontalière',
        caption: 'Des corridors protégés entre la Russie et la Chine permettent aux jeunes de disperser.',
        image: tigerSiberianSnow,
        location: 'Parc national du Tigre et du Léopard du Nord-Est',
      },
    ],
    sources: ['IUCN Red List', 'WWF Russia / Amur Tiger Center', 'Smithsonian National Zoo', 'National Geographic'],
  },
  {
    id: 'sumatra',
    name: 'Tigre de Sumatra',
    scientificName: 'Panthera tigris sumatrae',
    iucnClade2017: 'Panthera tigris sondaica (clade insulaire)',
    isExtinct: false,
    statusCode: 'CR',
    statusLabel: 'En danger critique (CR)',
    regionGroup: 'Îles de la Sonde',
    habitatCategory: 'Forêt tropicale',
    originSummary: 'Île de Sumatra, Indonésie',
    heroImage: tigerSumatranJungle,
    galleryImages: [
      {
        src: tigerSumatranJungle,
        caption: 'Progression silencieuse le long d’un cours d’eau de forêt pluviale à Sumatra.',
        credit: 'Collection Tiger World · Parc national de Kerinci Seblat',
      },
      {
        src: tigerHuntingAction,
        caption: 'Excellente capacité de nage grâce aux membranes interdigitales prononcées.',
        credit: 'Collection Tiger World · Bassin de Riau',
      },
    ],
    summary:
      'Plus petite sous-espèce vivante et dernier représentant insulaire après la disparition des tigres de Bali et de Java, adapté aux jungles denses de Sumatra.',
    metrics: {
      maleWeightMinKg: 100,
      maleWeightMaxKg: 140,
      femaleWeightMinKg: 75,
      femaleWeightMaxKg: 110,
      maleLengthMaxCm: 255,
      tailLengthCm: '60 – 75 cm',
      shoulderHeightCm: '75 – 85 cm',
      wildPopulationLabel: '~400 – 600 individus (< 400 matures)',
      wildPopulationNumeric: 400,
      lifespanWildYears: '12 – 15 ans',
      lifespanCaptivityYears: '18 – 20 ans',
      lifespanNumericMax: 15,
      territoryKm2: '40 – 110 km²',
      territoryNumericMax: 110,
    },
    mapPosition: {
      x: 728,
      y: 472,
      coordinatesLabel: '0.5° S, 101.4° E',
      currentRangePath:
        'M708,452 C724,458 742,478 750,495 C738,498 720,480 708,452 Z',
      historicalRangePath:
        'M702,445 C725,450 752,482 762,506 C746,512 715,488 702,445 Z',
    },
    dossier: {
      originAndDistribution:
        'Endémique de l’île indonésienne de Sumatra, cette lignée s’est trouvée isolée des populations continentales lors de la montée des eaux suivant la dernière glaciation, il y a environ 6 000 à 12 000 ans.',
      naturalHabitat:
        'Forêts tropicales humides de basse altitude, tourbières marécageuses et forêts nuageuses de montagne (chaîne des Bukit Barisan) jusqu’à 2 000 m d’altitude, notamment dans les parcs nationaux de Gunung Leuser, Kerinci Seblat et Bukit Barisan Selatan.',
      sizeAndWeight:
        'La plus petite sous-espèce vivante : les mâles pèsent de 100 à 140 kg (moyenne ~120 kg) et les femelles de 75 à 110 kg (moyenne ~90 kg). Cette taille compacte facilite les déplacements rapides dans les fourrés impénétrables.',
      bodyAndTailLength:
        'Longueur totale de 220 à 255 cm chez les mâles (queue de 60 à 75 cm) et de 215 à 230 cm chez les femelles.',
      coatColor:
        'Sa robe est la plus sombre et la plus saturée : un orange roux profond strié de rayures noires très rapprochées, souvent dédoublées sur les flancs et descendant jusqu’aux pattes antérieures.',
      physicalFeatures:
        'Les mâles portent d’impressionnants favoris touffus encadrant la mâchoire. Particularité anatomique notable : il possède des membranes interdigitales légèrement plus développées entre les doigts, faisant de lui un nageur exceptionnel.',
      diet:
        'Cerf sambar, sanglier à barbe, muntjac, chevrotain, tapir de Malaisie (plus rarement), porc-épic et grands oiseaux terrestres comme l’argus géant.',
      huntingTechniques:
        'Chasseur ultra-discret en sous-bois fermé, il pousse parfois ses proies vers les berges marécageuses ou les rivières où son agilité aquatique lui confère un avantage décisif.',
      behavior:
        'Strictement solitaire et très furtif ; ses domaines varient selon la densité de proies, mais les forêts fragmentées contraignent certains individus à traverser des zones agricoles, augmentant les frictions humaines.',
      reproduction:
        'Gestation d’environ 103 jours, suivie de 2 à 3 petits qui naissent dans des cavités rocheuses ou des fourrés denses. Les jeunes s’émancipent vers 18–24 mois.',
      lifespan:
        '12 à 15 ans en milieu naturel ; jusqu’à 20 ans dans les programmes de conservation ex situ.',
      estimatedPopulation:
        'Moins de 400 individus matures (estimations globales entre 400 et 600 tigres au total) fragmentés dans une douzaine d’îlots forestiers.',
      threatsAndConservation:
        'Classé « En danger critique d’extinction » (CR) par l’IUCN. La déforestation massive liée aux plantations d’huile de palme, au papier et aux routes réduit drastiquement son habitat, tandis que les pièges à collet posés par les braconniers provoquent une mortalité sévère.',
      anecdotes: [
        'C’est le dernier survivant de la lignée insulaire de la Sonde (Panthera tigris sondaica).',
        'Ses rayures étroites et denses brisent parfaitement sa silhouette dans les jeux d’ombre de la canopée tropicale.',
        'L’écosystème de Leuser à Sumatra est le seul endroit sur Terre où tigres, orangs-outans, rhinocéros et éléphants cohabitent encore.',
      ],
    },
    documentaryTitle: 'Dernier refuge à Sumatra : Les tigres des forêts pluviales',
    documentaryDuration: '03:42',
    documentaryChapters: [
      {
        timecode: '00:00',
        title: 'Dans l’ombre de la canopée',
        caption: 'Sous les pluies équatoriales, sa robe sombre et densément rayée devient invisible.',
        image: tigerSumatranJungle,
        location: 'Gunung Leuser, Aceh',
      },
      {
        timecode: '01:35',
        title: 'Nageur des tourbières',
        caption: 'Grâce à ses pattes semi-palmées, il franchit rivières et marais avec aisance.',
        image: tigerHuntingAction,
        location: 'Parc national de Tesso Nilo',
      },
    ],
    sources: ['IUCN Red List', 'WWF Indonesia', 'Smithsonian National Zoo'],
  },
  {
    id: 'indochine',
    name: 'Tigre d’Indochine',
    scientificName: 'Panthera tigris corbetti',
    iucnClade2017: 'Panthera tigris tigris (clade continental)',
    isExtinct: false,
    statusCode: 'EN',
    statusLabel: 'En danger (EN)',
    regionGroup: 'Asie du Sud-Est',
    habitatCategory: 'Forêt de montagne',
    originSummary: 'Thaïlande, Myanmar (historiquement Laos, Vietnam, Cambodge)',
    heroImage: tigerIndochineseForest,
    galleryImages: [
      {
        src: tigerIndochineseForest,
        caption: 'Tigre d’Indochine attentif au cœur des forêts de bambous montagneuses de Thaïlande.',
        credit: 'Collection Tiger World · Complexe forestier occidental',
      },
    ],
    summary:
      'Furtif habitant des massifs boisés d’Asie du Sud-Est, le tigre d’Indochine a malheureusement disparu de plusieurs pays de la péninsule au XXIe siècle.',
    metrics: {
      maleWeightMinKg: 150,
      maleWeightMaxKg: 195,
      femaleWeightMinKg: 100,
      femaleWeightMaxKg: 130,
      maleLengthMaxCm: 285,
      tailLengthCm: '75 – 95 cm',
      shoulderHeightCm: '85 – 100 cm',
      wildPopulationLabel: '~200 – 250 individus',
      wildPopulationNumeric: 225,
      lifespanWildYears: '12 – 15 ans',
      lifespanCaptivityYears: '18 – 20 ans',
      lifespanNumericMax: 15,
      territoryKm2: '50 – 150 km²',
      territoryNumericMax: 150,
    },
    mapPosition: {
      x: 722,
      y: 382,
      coordinatesLabel: '15.6° N, 99.2° E',
      currentRangePath:
        'M705,360 C720,358 730,375 724,398 C712,402 702,382 705,360 Z',
      historicalRangePath:
        'M690,340 C745,335 768,365 760,415 C732,425 692,395 690,340 Z',
    },
    dossier: {
      originAndDistribution:
        'Nommé en hommage au naturaliste Jim Corbett, il occupait autrefois tout le sud-est asiatique continental (Thaïlande, Myanmar, Laos, Vietnam, Cambodge et sud du Yunnan). Aujourd’hui, les études montrent qu’il est fonctionnellement éteint au Cambodge, au Laos et au Vietnam ; ses derniers bastions reproducteurs sont en Thaïlande (Complexe forestier occidental : Huai Kha Khaeng et Thungyai Naresuan) et dans certaines zones frontalières du Myanmar.',
      naturalHabitat:
        'Forêts tropicales et subtropicales de montagne, forêts de bambous denses et vallées escarpées difficiles d’accès, souvent entre 500 et 1 800 m d’altitude.',
      sizeAndWeight:
        'De taille intermédiaire : les mâles pèsent de 150 à 195 kg et les femelles de 100 à 130 kg.',
      bodyAndTailLength:
        'Longueur totale de 255 à 285 cm chez le mâle, 230 à 255 cm chez la femelle, avec une queue de 75 à 95 cm.',
      coatColor:
        'Pelage orange plus foncé et plus cuivré que celui du tigre du Bengale, parsemé de rayures noires plus étroites, plus courtes et parfois légèrement fragmentées en tirets.',
      physicalFeatures:
        'Crâne légèrement plus fin que le tigre du Bengale et musculature très sèche adaptée aux pentes abruptes des massifs karstiques.',
      diet:
        'Cerf sambar, banteng, gaur, sanglier sauvage, muntjac, serow et occasionnellement des primates ou porcs-épics lorsque les grands ongulés se raréfient.',
      huntingTechniques:
        'Utilise les pentes boisées et les sentiers d’animaux sauvages en crête pour tendre des embuscades silencieuses au crépuscule.',
      behavior:
        'Particulièrement discret et méfiant envers l’humain en raison de décennies de chasse et de conflits armés historiques dans la région.',
      reproduction:
        'Gestation d’environ 103 jours, portée moyenne de 2 à 3 petits élevés exclusivement par la femelle pendant près de deux ans.',
      lifespan:
        '12 à 15 ans dans la nature ; près de 20 ans en captivité.',
      estimatedPopulation:
        'Environ 200 à 250 individus à l’état sauvage (dont ~150–180 concentrés en Thaïlande grâce à une protection exemplaire des gardes forestiers).',
      threatsAndConservation:
        'Classé « En danger » (EN) au niveau de la sous-espèce (mais en situation critique sur une grande partie de son aire). Les collets industriels (« snaring crisis ») posés pour la viande de brousse et le commerce illégal de parties du corps menacent les proies comme les prédateurs. La Thaïlande mène des patrouilles SMART très efficaces qui permettent désormais un lent rétablissement local.',
      anecdotes: [
        'En 2017, pour la première fois en 15 ans, des pièges photographiques ont confirmé la présence d’une nouvelle population reproductrice dans l’est de la Thaïlande.',
        'Le Cambodge prépare actuellement un programme ambitieux de réintroduction de tigres dans les montagnes des Cardamomes.',
      ],
    },
    documentaryTitle: 'Les sentinelles de Huai Kha Khaeng',
    documentaryDuration: '03:18',
    documentaryChapters: [
      {
        timecode: '00:00',
        title: 'Dans le labyrinthe de bambou',
        caption: 'Les crêtes karstiques d’Asie du Sud-Est protègent les derniers groupes reproducteurs.',
        image: tigerIndochineseForest,
        location: 'Huai Kha Khaeng, Thaïlande',
      },
      {
        timecode: '01:45',
        title: 'Les patrouilles de l’espoir',
        caption: 'La surveillance intensive des corridors forestiers permet aux jeunes de reconquérir d’anciens territoires.',
        image: tigerCloseupPortrait,
        location: 'Complexe forestier Dong Phayayen',
      },
    ],
    sources: ['IUCN Red List', 'WWF Greater Mekong', 'Panthera / Thailand DNP'],
  },
  {
    id: 'malaisie',
    name: 'Tigre de Malaisie',
    scientificName: 'Panthera tigris jacksoni',
    iucnClade2017: 'Panthera tigris tigris (clade continental)',
    isExtinct: false,
    statusCode: 'CR',
    statusLabel: 'En danger critique (CR)',
    regionGroup: 'Asie du Sud-Est',
    habitatCategory: 'Forêt tropicale',
    originSummary: 'Péninsule Malaise (Malaisie)',
    heroImage: tigerMalayanUndergrowth,
    galleryImages: [
      {
        src: tigerMalayanUndergrowth,
        caption: 'Progression dans la végétation humide de Taman Negara, péninsule Malaise.',
        credit: 'Collection Tiger World · Malaisie péninsulaire',
      },
    ],
    summary:
      'Symbole national de la Malaisie, identifié génétiquement comme sous-espèce distincte en 2004, aujourd’hui au bord de l’extinction avec moins de 150 survivants.',
    metrics: {
      maleWeightMinKg: 100,
      maleWeightMaxKg: 130,
      femaleWeightMinKg: 75,
      femaleWeightMaxKg: 110,
      maleLengthMaxCm: 260,
      tailLengthCm: '65 – 80 cm',
      shoulderHeightCm: '75 – 90 cm',
      wildPopulationLabel: '< 150 individus',
      wildPopulationNumeric: 140,
      lifespanWildYears: '12 – 15 ans',
      lifespanCaptivityYears: '18 – 20 ans',
      lifespanNumericMax: 15,
      territoryKm2: '35 – 100 km²',
      territoryNumericMax: 100,
    },
    mapPosition: {
      x: 734,
      y: 438,
      coordinatesLabel: '4.4° N, 102.4° E',
      currentRangePath:
        'M728,425 C738,426 745,442 740,454 C732,456 725,440 728,425 Z',
      historicalRangePath:
        'M722,418 C740,420 750,446 744,462 C730,464 720,442 722,418 Z',
    },
    dossier: {
      originAndDistribution:
        'Présent exclusivement dans le centre et le nord de la péninsule Malaise (États de Pahang, Perak, Kelantan et Terengganu), notamment autour du parc national de Taman Negara et de la forêt de Belum-Temengor.',
      naturalHabitat:
        'Forêts pluviales tropicales de diptérocarpacées extrêmement denses, forêts marécageuses et collines boisées humides.',
      sizeAndWeight:
        'Proche en taille du tigre de Sumatra : les mâles pèsent entre 100 et 130 kg (moyenne ~120 kg) et les femelles entre 75 et 110 kg.',
      bodyAndTailLength:
        'Longueur totale de 230 à 260 cm chez les mâles et de 200 à 230 cm chez les femelles.',
      coatColor:
        'Morphologiquement très proche du tigre d’Indochine avec une robe orange soutenue et des rayures noires bien dessinées, parfois légèrement plus serrées sur l’arrière-train.',
      physicalFeatures:
        'Gabarit compact et trapu, idéal pour se faufiler sous la strate arbustive dense des jungles primaires malaisiennes.',
      diet:
        'Sanglier à barbe, sanglier d’Eurasie, cerf sambar, muntjac, tapir de Malaisie, chevrotain et ours malais occasionnellement.',
      huntingTechniques:
        'Chasseur crépusculaire parcourant les pistes forestières et les salines naturelles où se regroupent les ongulés.',
      behavior:
        'Solitaire et territorial, chaque individu évite autant que possible l’activité humaine mais souffre de la fragmentation de la forêt par les autoroutes.',
      reproduction:
        'Gestation de 100 à 105 jours, 2 à 3 petits par portée.',
      lifespan:
        '12 à 15 ans dans la nature ; jusqu’à 20 ans en captivité.',
      estimatedPopulation:
        'Moins de 150 individus estimés lors de la première enquête nationale malaisienne (PERHILITAN 2016–2020), contre environ 3 000 dans les années 1950.',
      threatsAndConservation:
        'Classé « En danger critique d’extinction » (CR) par l’IUCN. L’effondrement rapide est dû au braconnage organisé par des équipes transfrontalières armées de collets, à la perte des proies (peste porcine) et au morcellement forestier.',
      anecdotes: [
        'Jusqu’en 2004, il était confondu avec le tigre d’Indochine ; des analyses d’ADN réalisées par Shu-Jin Luo (National Cancer Institute) ont révélé sa divergence génétique.',
        'Son nom scientifique jacksoni rend hommage au journaliste et spécialiste des félins Peter Jackson.',
        'Il figure fièrement sur les armoiries officielles de la Malaisie sous le nom de « Harimau Malaya ».',
      ],
    },
    documentaryTitle: 'Harimau Malaya : Course contre la montre',
    documentaryDuration: '03:10',
    documentaryChapters: [
      {
        timecode: '00:00',
        title: 'Sous les géants de Taman Negara',
        caption: 'Dans l’une des plus anciennes forêts tropicales du monde, moins de 150 tigres subsistent.',
        image: tigerMalayanUndergrowth,
        location: 'Taman Negara, Pahang',
      },
    ],
    sources: ['IUCN Red List', 'WWF Malaysia', 'Luo et al. (2004)', 'PERHILITAN'],
  },
  {
    id: 'chine-meridionale',
    name: 'Tigre de Chine méridionale',
    scientificName: 'Panthera tigris amoyensis',
    iucnClade2017: 'Panthera tigris tigris (clade continental)',
    isExtinct: false,
    statusCode: 'CR',
    statusLabel: 'En danger critique (CR) — Probablement éteint à l’état sauvage',
    regionGroup: 'Asie du Sud-Est',
    habitatCategory: 'Forêt de montagne',
    originSummary: 'Sud et centre de la Chine (Fujian, Guangdong, Hunan, Jiangxi)',
    heroImage: tigerSouthChina,
    galleryImages: [
      {
        src: tigerSouthChina,
        caption: 'Spécimen au pelage orange vif orné de larges rayures espacées sur un promontoire brumeux.',
        credit: 'Collection Tiger World · Archive génétique chinoise',
      },
    ],
    summary:
      'Considéré par de nombreux biologistes comme la lignée basale proche de l’ancêtre des tigres modernes, il n’a plus été observé de façon confirmée dans la nature depuis des décennies.',
    metrics: {
      maleWeightMinKg: 130,
      maleWeightMaxKg: 175,
      femaleWeightMinKg: 100,
      femaleWeightMaxKg: 115,
      maleLengthMaxCm: 265,
      tailLengthCm: '75 – 85 cm',
      shoulderHeightCm: '80 – 95 cm',
      wildPopulationLabel: '0 confirmé (éteint en liberté ; ~150–200 en captivité)',
      wildPopulationNumeric: 0,
      lifespanWildYears: '10 – 15 ans (historique)',
      lifespanCaptivityYears: '18 – 22 ans',
      lifespanNumericMax: 15,
      territoryKm2: '50 – 120 km² (historique)',
      territoryNumericMax: 120,
    },
    mapPosition: {
      x: 785,
      y: 325,
      coordinatesLabel: '26.5° N, 114.2° E',
      historicalRangePath:
        'M735,280 C795,270 835,302 825,355 C795,375 740,360 735,280 Z',
    },
    dossier: {
      originAndDistribution:
        'Originaire des provinces du sud et du centre de la Chine (Fujian, Hunan, Jiangxi, Guangdong). Dans les années 1950, plus de 4 000 individus vivaient encore en Chine avant d’être déclarés « nuisibles ».',
      naturalHabitat:
        'Forêts subtropicales humides de moyenne montagne, vallées de bambous et collines granitiques brumeuses.',
      sizeAndWeight:
        'Les mâles pèsent de 130 à 175 kg et les femelles de 100 à 115 kg.',
      bodyAndTailLength:
        'Longueur totale de 230 à 265 cm chez les mâles et de 220 à 240 cm chez les femelles.',
      coatColor:
        'Robe orange vif lumineux avec des rayures noires nettement plus larges et plus espacées que chez les autres sous-espèces.',
      physicalFeatures:
        'Crâne plus court et plus large présentant des traits morphologiques proches des premiers tigres pléistocènes.',
      diet:
        'Historiquement : cerfs sika, sangliers, muntjacs, serows et porcs-épics.',
      huntingTechniques:
        'Embuscade dans les pentes boisées subtropicales et le long des ruisseaux encaissés.',
      behavior:
        'Solitaire et territorial ; les individus élevés aujourd’hui en réserves fermées en Chine et en Afrique du Sud font l’objet de programmes de réapprentissage de la chasse.',
      reproduction:
        'Gestation d’environ 103 jours ; portées de 2 à 4 petits.',
      lifespan:
        'Environ 18 à 22 ans en captivité (aucune donnée contemporaine sauvage).',
      estimatedPopulation:
        'Aucune preuve confirmée d’individu sauvage depuis plus de 30 ans (classé « Probablement éteint à l’état sauvage » par les spécialistes IUCN). Environ 150 à 200 individus vivent en captivité, tous issus de seulement 6 animaux fondateurs capturés entre 1958 et 1970.',
      threatsAndConservation:
        'Classé « En danger critique d’extinction » (CR). Campagnes d’extermination massive entre 1959 et 1976, déforestation totale des couloirs montagneux et déclin des proies. Les programmes actuels luttent contre une forte consanguinité en captivité.',
      anecdotes: [
        'Tous les tigres de Chine méridionale existant aujourd’hui descendent de seulement 6 individus sauvages capturés dans les années 1950–1970.',
        'La totalité de son aire de répartition historique était estimée à près de 2 000 km de large avant son effondrement en moins de trente ans.',
      ],
    },
    documentaryTitle: 'Le silence des monts du Fujian : L’héritage Amoyensis',
    documentaryDuration: '02:58',
    documentaryChapters: [
      {
        timecode: '00:00',
        title: 'Les brumes sans rugissement',
        caption: 'Autrefois maître des montagnes du sud de la Chine, il ne subsiste désormais qu’en captivité.',
        image: tigerSouthChina,
        location: 'Monts Wuyi, Fujian',
      },
    ],
    sources: ['IUCN Red List', 'Save China’s Tigers', 'Smithsonian Conservation Biology Institute'],
  },
  {
    id: 'bali',
    name: 'Tigre de Bali',
    scientificName: 'Panthera tigris balica',
    iucnClade2017: 'Panthera tigris sondaica (éteinte)',
    isExtinct: true,
    extinctionPeriod: 'Éteint (années 1930 – 1940)',
    statusCode: 'EX',
    statusLabel: 'Éteint (EX)',
    regionGroup: 'Îles de la Sonde',
    habitatCategory: 'Forêt tropicale',
    originSummary: 'Île de Bali, Indonésie',
    heroImage: tigerBaliArchival,
    galleryImages: [
      {
        src: tigerBaliArchival,
        caption: 'Plaque historique reconstituée : dernier petit félin insulaire de l’île de Bali.',
        credit: 'Archives muséales Tiger World · Indes orientales néerlandaises',
      },
    ],
    summary:
      'La plus petite de toutes les sous-espèces de tigres connues, rayée de la carte dans les années 1930 sous la pression conjointe de la chasse sportive et de la déforestation.',
    metrics: {
      maleWeightMinKg: 90,
      maleWeightMaxKg: 100,
      femaleWeightMinKg: 65,
      femaleWeightMaxKg: 80,
      maleLengthMaxCm: 230,
      tailLengthCm: '55 – 65 cm',
      shoulderHeightCm: '65 – 75 cm',
      wildPopulationLabel: '0 (Éteint depuis ~1937)',
      wildPopulationNumeric: 0,
      lifespanWildYears: '8 – 12 ans (estimé)',
      lifespanCaptivityYears: 'Aucun spécimen captif documenté durablement',
      lifespanNumericMax: 12,
      territoryKm2: '20 – 40 km² (estimé)',
      territoryNumericMax: 40,
    },
    mapPosition: {
      x: 785,
      y: 522,
      coordinatesLabel: '8.3° S, 114.9° E',
      historicalRangePath:
        'M778,518 C788,516 794,522 790,528 C782,530 776,524 778,518 Z',
    },
    dossier: {
      originAndDistribution:
        'Strictement endémique de la petite île volcanique de Bali (environ 5 780 km²), en Indonésie. Isolé de Java par le détroit de Bali large de seulement 2,4 km.',
      naturalHabitat:
        'Forêts tropicales sèches de l’ouest de Bali, savanes boisées et forêts de palmiers et de manguiers.',
      sizeAndWeight:
        'Le plus petit tigre de l’histoire moderne (nanisme insulaire) : les mâles pesaient de 90 à 100 kg et les femelles seulement 65 à 80 kg, soit la taille d’un grand léopard ou d’un puma.',
      bodyAndTailLength:
        'Longueur totale de 220 à 230 cm chez le mâle et de 190 à 210 cm chez la femelle.',
      coatColor:
        'Fourrure courte d’un orange foncé très intense, ornée de rayures noires plus larges et moins nombreuses que le tigre de Java, avec occasionnellement de petites taches sombres entre les bandes.',
      physicalFeatures:
        'Silhouette légère, pelage très court adapté au climat équatorial et crâne proportionnellement étroit.',
      diet:
        'Cerf rusa de Java, muntjac, sanglier de Sulawesi/Java, banteng sauvage, singes et grands reptiles.',
      huntingTechniques:
        'Embuscade opportuniste le long des lisières forestières et des points d’eau rares en saison sèche.',
      behavior:
        'Territorialité restreinte par l’exiguïté même de l’île, rendant chaque perte d’individu fatale pour la démographie locale.',
      reproduction:
        'Comparable aux autres tigres : gestation d’environ 100–103 jours, portées probables de 2 à 3 petits.',
      lifespan:
        'Estimée entre 8 et 12 ans dans la nature avant son éradication.',
      estimatedPopulation:
        '0 individu. Le dernier spécimen officiellement documenté (une femelle adulte) fut abattu à Sumbar Kima, dans l’ouest de Bali, le 27 septembre 1937.',
      threatsAndConservation:
        'Classé « Éteint » (EX) par l’IUCN. L’île était trop petite pour supporter à la fois la conversion agricole rapide des plaines fertiles et les battues organisées à l’arme à feu au début du XXe siècle. Seuls quelques crânes et peaux subsistent dans des musées européens et indonésiens.',
      anecdotes: [
        'Dans la culture balinaise, le tigre (« Harimau Bali ») occupait un statut sacré à la fois redouté et vénéré dans les danses et masques rituels.',
        'Il n’existe aucune photographie connue d’un tigre de Bali vivant prise dans la nature ; toutes les archives montrent des trophées ou spécimens muséaux.',
      ],
    },
    documentaryTitle: 'Archives d’une disparition : Le Tigre de Bali',
    documentaryDuration: '02:45',
    documentaryChapters: [
      {
        timecode: '00:00',
        title: '1937 — L’adieu à Sumbar Kima',
        caption: 'Sur une île de 5 700 km², le plus petit des tigres n’a trouvé aucun refuge face aux battues.',
        image: tigerBaliArchival,
        location: 'Ouest de Bali, Indonésie',
      },
    ],
    sources: ['IUCN Red List', 'Natural History Museum London Archives', 'Smithsonian'],
  },
  {
    id: 'java',
    name: 'Tigre de Java',
    scientificName: 'Panthera tigris sondaica',
    iucnClade2017: 'Panthera tigris sondaica (éteinte)',
    isExtinct: true,
    extinctionPeriod: 'Éteint (années 1970 – 1980)',
    statusCode: 'EX',
    statusLabel: 'Éteint (EX)',
    regionGroup: 'Îles de la Sonde',
    habitatCategory: 'Forêt tropicale',
    originSummary: 'Île de Java, Indonésie',
    heroImage: tigerJavanArchival,
    galleryImages: [
      {
        src: tigerJavanArchival,
        caption: 'Tirage argentique documentaire d’un tigre de Java dans les forêts volcaniques brumeuses.',
        credit: 'Archives historiques Tiger World · Meru Betiri, Java',
      },
    ],
    summary:
      'Autrefois répandu sur toute l’île de Java, ce tigre aux rayures fines et denses s’est éteint à la fin du XXe siècle face à l’explosion démographique et la perte des forêts.',
    metrics: {
      maleWeightMinKg: 100,
      maleWeightMaxKg: 141,
      femaleWeightMinKg: 75,
      femaleWeightMaxKg: 115,
      maleLengthMaxCm: 250,
      tailLengthCm: '60 – 75 cm',
      shoulderHeightCm: '75 – 85 cm',
      wildPopulationLabel: '0 (Éteint depuis les années 1980)',
      wildPopulationNumeric: 0,
      lifespanWildYears: '10 – 14 ans (historique)',
      lifespanCaptivityYears: '18 ans (archives historiques)',
      lifespanNumericMax: 14,
      territoryKm2: '30 – 80 km² (historique)',
      territoryNumericMax: 80,
    },
    mapPosition: {
      x: 762,
      y: 518,
      coordinatesLabel: '8.4° S, 113.8° E',
      historicalRangePath:
        'M744,512 C758,510 775,516 776,524 C762,528 746,522 744,512 Z',
    },
    dossier: {
      originAndDistribution:
        'Endémique de l’île de Java (Indonésie). Au XIXe siècle, il était si commun qu’il était considéré comme un fléau dans certaines campagnes ; en 1950, il n’en restait plus qu’une vingtaine dans l’est de l’île, puis seulement 3 à 5 dans la réserve de Meru Betiri en 1976.',
      naturalHabitat:
        'Forêts tropicales de plaine, forêts de teck et massifs volcaniques montagneux jusqu’à 2 000 m d’altitude.',
      sizeAndWeight:
        'Légèrement plus grand que le tigre de Bali : mâles de 100 à 141 kg, femelles de 75 à 115 kg.',
      bodyAndTailLength:
        'Longueur totale de 245 à 250 cm chez le mâle et d’environ 215 cm chez la femelle.',
      coatColor:
        'Fond fauve-orange avec des rayures noires très fines, longues et serrées — souvent plus nombreuses que chez le tigre de Sumatra.',
      physicalFeatures:
        'Il présentait un nez long et étroit ainsi que des vibrisses (moustaches) remarquablement longues pour détecter les obstacles dans la jungle nocturne.',
      diet:
        'Cerf rusa, sanglier de Java, banteng sauvage, paon vert et petits mammifères lorsque les ongulés se raréfiaient.',
      huntingTechniques:
        'Embuscade silencieuse dans les fourrés montagneux escarpés de l’est javanais.',
      behavior:
        'Les derniers individus observés dans les années 1970 avaient adopté un comportement quasi exclusivement nocturne et montagnard pour fuir l’homme.',
      reproduction:
        'Gestation d’environ 103 jours, 2 à 3 petits par portée.',
      lifespan:
        '10 à 14 ans dans la nature ; rares individus maintenus en captivité jusqu’aux années 1960.',
      estimatedPopulation:
        '0 individu confirmé. Les dernières empreintes et observations fiables datent de 1976 à Meru Betiri. Une étude de 2024 analysant un poil trouvé à Sukabumi en 2019 a suscité un débat scientifique mais reste non validée comme preuve de survie par l’IUCN.',
      threatsAndConservation:
        'Classé « Éteint » (EX) par l’IUCN. Victime de la conversion massive de Java en terres agricoles (rizières, plantations de café et de caoutchouc), de l’empoisonnement des proies et de la chasse intensive.',
      anecdotes: [
        'Le nom scientifique Panthera tigris sondaica donné à l’origine au tigre de Java désigne aujourd’hui l’ensemble du clade insulaire de la Sonde (incluant Sumatra).',
        'En 1976, des traces de 3 à 5 tigres furent encore relevées à Meru Betiri avant que tout signe ne s’éteigne définitivement.',
      ],
    },
    documentaryTitle: 'Meru Betiri 1976 : Les dernières empreintes de Java',
    documentaryDuration: '03:02',
    documentaryChapters: [
      {
        timecode: '00:00',
        title: 'Les volcans de l’Est javanais',
        caption: 'Dernier refuge montagneux avant que la forêt ne cède devant l’urbanisation de l’île la plus peuplée.',
        image: tigerJavanArchival,
        location: 'Parc national de Meru Betiri, Java',
      },
    ],
    sources: ['IUCN Red List', 'WWF', 'National Geographic'],
  },
  {
    id: 'caspienne',
    name: 'Tigre de la Caspienne',
    scientificName: 'Panthera tigris virgata',
    iucnClade2017: 'Panthera tigris tigris (éteinte)',
    isExtinct: true,
    extinctionPeriod: 'Éteint (années 1970)',
    statusCode: 'EX',
    statusLabel: 'Éteint (EX)',
    regionGroup: 'Asie centrale',
    habitatCategory: 'Mangroves & Prairies',
    originSummary: 'Bassin de la mer Caspienne, Asie centrale, Caucase, Iran, Turquie orientale',
    heroImage: tigerCaspianArchival,
    galleryImages: [
      {
        src: tigerCaspianArchival,
        caption: 'Spécimen massif évoluant dans les roseaux riverains (tugai) le long de l’Amou-Daria.',
        credit: 'Archives naturalistes Tiger World · Asie centrale',
      },
    ],
    summary:
      'Le plus occidental de tous les tigres, véritable colosse des roselières d’Asie centrale et du Caucase, disparu dans les années 1970.',
    metrics: {
      maleWeightMinKg: 170,
      maleWeightMaxKg: 240,
      femaleWeightMinKg: 85,
      femaleWeightMaxKg: 135,
      maleLengthMaxCm: 295,
      tailLengthCm: '80 – 95 cm',
      shoulderHeightCm: '90 – 105 cm',
      wildPopulationLabel: '0 (Éteint depuis ~1970)',
      wildPopulationNumeric: 0,
      lifespanWildYears: '10 – 15 ans (historique)',
      lifespanCaptivityYears: '18 – 20 ans (archives)',
      lifespanNumericMax: 15,
      territoryKm2: '150 – 500 km² (corridors fluviaux)',
      territoryNumericMax: 500,
    },
    mapPosition: {
      x: 365,
      y: 255,
      coordinatesLabel: '41.2° N, 60.4° E',
      historicalRangePath:
        'M265,245 C325,220 430,222 495,250 C485,285 370,295 275,275 Z',
    },
    dossier: {
      originAndDistribution:
        'Aire historique fascinante s’étendant de l’est de la Turquie, du Caucase et du nord de l’Iran autour de la mer Caspienne jusqu’au bassin de la mer d’Aral (Amou-Daria, Syr-Daria), au Kazakhstan et au bassin du Tarim (Xinjiang, Chine).',
      naturalHabitat:
        'Il dépendait étroitement des « tugai » : denses forêts galeries de peupliers, saules, tamaris et roselières géantes bordant les grands fleuves au milieu des déserts et steppes arides.',
      sizeAndWeight:
        'Troisième plus grand félin moderne après les tigres de Sibérie et du Bengale : les mâles pesaient de 170 à 240 kg et les femelles de 85 à 135 kg.',
      bodyAndTailLength:
        'Longueur totale de 270 à 295 cm chez les mâles et de 240 à 260 cm chez les femelles.',
      coatColor:
        'Robe fauve-orangé plus pâle et plus brunâtre, dotée de rayures brun foncé à noires plus étroites et très rapprochées. Ventre blanc très développé.',
      physicalFeatures:
        'En hiver, il développait une longue collerette de poils autour des joues et du cou, ainsi qu’une fourrure épaisse et soyeuse pour affronter les gels steppiques.',
      diet:
        'Sangliers d’Asie centrale, cerfs de Boukhara, chevreuils, gazelles à goitre, antilopes saïgas et castors/lièvres.',
      huntingTechniques:
        'Il suivait les corridors fluviaux à travers les déserts sur des centaines de kilomètres, chassant à l’affût dans les roselières impénétrables.',
      behavior:
        'Capable de déplacements saisonniers spectaculaires le long des bassins versants d’Asie centrale à la suite des migrations de sangliers et de cerfs.',
      reproduction:
        'Gestation d’environ 103 jours ; portées de 2 à 3 petits.',
      lifespan:
        '10 à 15 ans dans la nature ; quelques spécimens historiques vécurent jusqu’à 20 ans dans des zoos européens (notamment à Berlin et Moscou).',
      estimatedPopulation:
        '0 individu. Déclaré éteint après les dernières observations fiables dans les années 1950–1960 en Asie centrale et la capture du dernier spécimen connu en 1970 dans le sud-est de la Turquie (province de Hakkari).',
      threatsAndConservation:
        'Classé « Éteint » (EX) par l’IUCN. L’assèchement des rivières pour la culture du coton à l’époque soviétique a détruit les forêts tugai ; s’y sont ajoutées les campagnes militaires d’éradication de l’armée russe au début du XXe siècle et la disparition des sangliers.',
      anecdotes: [
        'Dans la Rome antique, c’est le tigre de la Caspienne (d’Hyrcanie) qui était capturé pour combattre dans les arènes du Colisée.',
        'L’analyse ADN réalisée en 2009 a révélé que le tigre de la Caspienne et celui de Sibérie ne diffèrent que par un seul nucléotide mitochondrial : un projet pilote au Kazakhstan (réserve d’Ile-Balkhash) vise à réintroduire des tigres de l’Amour sur son ancien territoire !',
      ],
    },
    documentaryTitle: 'Le Tigre de la Route de la Soie',
    documentaryDuration: '03:30',
    documentaryChapters: [
      {
        timecode: '00:00',
        title: 'Les roselières de l’Amou-Daria',
        caption: 'Entre déserts brûlants et steppes gelées, des corridors verts abritaient le grand fauve d’Asie centrale.',
        image: tigerCaspianArchival,
        location: 'Bassin de la mer d’Aral',
      },
    ],
    sources: ['IUCN Red List', 'Driscoll et al. (2009) PLoS ONE', 'WWF Central Asia', 'Smithsonian'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-portrait-1',
    title: 'Regard d’ambre dans l’ombre',
    category: 'Portraits',
    subspeciesId: 'bengale',
    subspeciesName: 'Tigre du Bengale',
    image: tigerCloseupPortrait,
    location: 'Réserve de Corbett, Inde',
    exif: '600mm · f/4 · 1/800s · ISO 1600',
    description: 'Chaque tigre porte un masque facial asymétrique unique permettant son identification scientifique.',
    featured: true,
  },
  {
    id: 'g-hunt-1',
    title: 'L’assaut dans les eaux dorées',
    category: 'En chasse',
    subspeciesId: 'bengale',
    subspeciesName: 'Tigre du Bengale',
    image: tigerHuntingAction,
    location: 'Ranthambore, Rajasthan',
    exif: '400mm · f/2.8 · 1/3200s · ISO 800',
    description: 'Propulsion musculaire hors de l’eau lors d’une poursuite crépusculaire en milieu lacustre.',
    featured: true,
  },
  {
    id: 'g-snow-1',
    title: 'Souverain de l’Oussouri',
    category: 'Dans la neige',
    subspeciesId: 'siberie',
    subspeciesName: 'Tigre de Sibérie',
    image: tigerSiberianSnow,
    location: 'Sikhote-Aline, Russie',
    exif: '500mm · f/4 · 1/1600s · ISO 640',
    description: 'Sous -28 °C, la fourrure hivernale dense et les coussinets velus isolent parfaitement le félin.',
    featured: true,
  },
  {
    id: 'g-cubs-1',
    title: 'Tendresse dans les hautes herbes',
    category: 'Mère & petits',
    subspeciesId: 'bengale',
    subspeciesName: 'Tigre du Bengale',
    image: tigerMotherCubs,
    location: 'Parc national de Bandhavgarh, Inde',
    exif: '300mm · f/2.8 · 1/1000s · ISO 500',
    description: 'La tigresse assure seule l’éducation et la protection de sa portée pendant près de deux ans.',
  },
  {
    id: 'g-jungle-1',
    title: 'Sous les pluies de Sumatra',
    category: 'Dans la jungle',
    subspeciesId: 'sumatra',
    subspeciesName: 'Tigre de Sumatra',
    image: tigerSumatranJungle,
    location: 'Gunung Leuser, Indonésie',
    exif: '200mm · f/2.8 · 1/500s · ISO 1250',
    description: 'Des rayures étroites et contrastées camouflent le tigre dans le clair-obscur des rivières tropicales.',
  },
  {
    id: 'g-jungle-2',
    title: 'Sentinelle des bambous',
    category: 'Dans la jungle',
    subspeciesId: 'indochine',
    subspeciesName: 'Tigre d’Indochine',
    image: tigerIndochineseForest,
    location: 'Huai Kha Khaeng, Thaïlande',
    exif: '400mm · f/4 · 1/640s · ISO 1000',
    description: 'Observation rare au cœur des forêts de bambous montagneuses de l’ouest thaïlandais.',
  },
  {
    id: 'g-jungle-3',
    title: 'Furtivité de Taman Negara',
    category: 'Dans la jungle',
    subspeciesId: 'malaisie',
    subspeciesName: 'Tigre de Malaisie',
    image: tigerMalayanUndergrowth,
    location: 'Pahang, Malaisie',
    exif: '300mm · f/2.8 · 1/500s · ISO 1600',
    description: 'Le tigre de Malaisie évolue sous une canopée humide parmi les plus anciennes du globe.',
  },
  {
    id: 'g-portrait-2',
    title: 'Patrouille matinale',
    category: 'Portraits',
    subspeciesId: 'bengale',
    subspeciesName: 'Tigre du Bengale',
    image: tigerBengalHero,
    location: 'Parc national de Kanha, Inde',
    exif: '400mm · f/4 · 1/1250s · ISO 400',
    description: 'Lumière dorée filtrant à travers les forêts de sal à l’aube.',
  },
  {
    id: 'g-portrait-3',
    title: 'Sur le granit brumeux',
    category: 'Portraits',
    subspeciesId: 'chine-meridionale',
    subspeciesName: 'Tigre de Chine méridionale',
    image: tigerSouthChina,
    location: 'Monts du Fujian (archive)',
    exif: '200mm · f/4 · 1/640s · ISO 800',
    description: 'Les larges rayures espacées caractérisent la lignée ancestrale de Chine méridionale.',
  },
  {
    id: 'g-archive-1',
    title: 'Plaque historique de Bali (1933)',
    category: 'Archives historiques',
    subspeciesId: 'bali',
    subspeciesName: 'Tigre de Bali',
    image: tigerBaliArchival,
    location: 'Ouest de Bali, Indonésie',
    exif: 'Archive muséale · Plaque historique',
    description: 'Témoignage du plus petit tigre ayant jamais existé, éteint à la fin des années 1930.',
  },
  {
    id: 'g-archive-2',
    title: 'Forêts volcaniques de Java',
    category: 'Archives historiques',
    subspeciesId: 'java',
    subspeciesName: 'Tigre de Java',
    image: tigerJavanArchival,
    location: 'Meru Betiri, Java',
    exif: 'Archive argentique · Milieu XXe s.',
    description: 'Vibrisses allongées et fines rayures serrées propres à la sous-espèce javanaise.',
  },
  {
    id: 'g-archive-3',
    title: 'Les roseaux de la Caspienne',
    category: 'Archives historiques',
    subspeciesId: 'caspienne',
    subspeciesName: 'Tigre de la Caspienne',
    image: tigerCaspianArchival,
    location: 'Bassin de l’Amou-Daria',
    exif: 'Archive historique · Début XXe s.',
    description: 'Grand tigre occidental évoluant dans les forêts galeries tugai d’Asie centrale.',
  },
];

export const DID_YOU_KNOW_FACTS: FactItem[] = [
  {
    id: 'f1',
    title: 'Des rayures jusque sur la peau',
    category: 'Anatomie',
    fact: 'Si l’on rasait un tigre, ses rayures resteraient parfaitement visibles : elles sont directement pigmentées dans les follicules et le derme, et chaque individu possède un motif unique au monde.',
    source: 'Smithsonian National Zoo',
  },
  {
    id: 'f2',
    title: 'Une vision nocturne six fois supérieure',
    category: 'Sensoriel',
    fact: 'Grâce au tapetum lucidum — une membrane réfléchissante tapissant le fond de l’œil — et à une forte concentration de bâtonnets, le tigre voit environ 6 fois mieux que l’humain dans l’obscurité.',
    source: 'National Geographic',
  },
  {
    id: 'f3',
    title: 'Le mirage des « faux yeux »',
    category: 'Comportement',
    fact: 'Les taches blanches situées au dos des oreilles des tigres servent à la fois de balises pour que les petits suivent leur mère dans la végétation haute et de leurre dissuasif face aux attaques par-derrière.',
    source: 'WWF Global',
  },
  {
    id: 'f4',
    title: '93 % de territoire perdu en un siècle',
    category: 'Conservation',
    fact: 'Vers 1900, environ 100 000 tigres sauvages peuplaient l’Asie. Leur aire de répartition géographique s’est contractée de près de 93 % en un siècle, et leur nombre avait chuté à ~3 200 individus en 2010.',
    source: 'IUCN Red List / WWF',
  },
  {
    id: 'f5',
    title: 'L’énigme génétique Caspienne–Sibérie',
    category: 'Génétique',
    fact: 'En 2009, le séquençage d’ADN ancien a démontré que le tigre de la Caspienne (éteint) et le tigre de Sibérie (vivant) ne divergeaient génétiquement que par un seul nucléotide sur les régions analysées.',
    source: 'Driscoll et al. / Smithsonian',
  },
  {
    id: 'f6',
    title: 'Une langue râpeuse comme du papier de verre',
    category: 'Anatomie',
    fact: 'La langue du tigre est couverte de papilles cornées orientées vers l’arrière, si résistantes qu’elles permettent de détacher jusqu’aux derniers lambeaux de viande collés aux os ou de nettoyer les parasites du pelage.',
    source: 'Smithsonian National Zoo',
  },
];

export const CONSERVATION_INITIATIVES: ConservationInitiative[] = [
  {
    id: 'tx2',
    title: 'Initiative mondiale Tx2',
    organization: 'WWF & Global Tiger Forum',
    region: '13 pays de l’aire de répartition',
    metric: '+74 % depuis 2010 (~3 200 → ~5 574)',
    description:
      'Engagement historique pris en 2010 visant à doubler la population mondiale de tigres sauvages. L’Inde et le Népal ont atteint et dépassé leurs objectifs nationaux grâce aux aires protégées.',
  },
  {
    id: 'smart',
    title: 'Patrouilles SMART & Lutte anti-braconnage',
    organization: 'IUCN / Panthera / Gouvernements nationaux',
    region: 'Thaïlande, Inde, Russie, Malaisie',
    metric: 'Réduction ciblée des collets',
    description:
      'Outil de géolocalisation et de suivi en temps réel permettant aux écogardes de cartographier les zones à risque, retirer les pièges à collet et sécuriser les naissances.',
  },
  {
    id: 'corridors',
    title: 'Corridors écologiques du Teraï & d’Asie',
    organization: 'WWF / NTCA',
    region: 'Arc du Teraï (Inde–Népal) & Sikhote-Aline',
    metric: 'Connexion génétique inter-réserves',
    description:
      'Maintien de passages forestiers sans obstacles urbains pour permettre la dispersion des jeunes tigres et éviter la consanguinité entre populations isolées.',
  },
  {
    id: 'balkhash',
    title: 'Restauration du bassin d’Ile-Balkhash',
    organization: 'WWF Central Asia & République du Kazakhstan',
    region: 'Kazakhstan (ancienne aire Caspienne)',
    metric: 'Réintroduction amorcée 2024–2025',
    description:
      'Reboisement des forêts riveraines tugai, retour des cerfs de Boukhara et préparation du premier retour historique du tigre en Asie centrale via des individus apparentés.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Combien de sous-espèces traditionnelles de tigres se sont éteintes au cours du XXe siècle ?',
    options: ['Aucune', '1 sous-espèce', '3 sous-espèces', '5 sous-espèces'],
    correctIndex: 2,
    explanation:
      'Trois sous-espèces traditionnelles ont disparu au XXe siècle : le tigre de Bali (années 1930), le tigre de la Caspienne (années 1970) et le tigre de Java (années 1970–1980).',
    source: 'IUCN Red List',
  },
  {
    id: 'q2',
    question: 'Quelle est la plus petite sous-espèce de tigre encore vivante aujourd’hui ?',
    options: ['Tigre de Malaisie', 'Tigre de Sumatra', 'Tigre d’Indochine', 'Tigre de Chine méridionale'],
    correctIndex: 1,
    explanation:
      'Le tigre de Sumatra (Panthera tigris sumatrae) est le plus petit survivant, avec des mâles de 100 à 140 kg et des femelles de 75 à 110 kg, adapté aux jungles denses de l’île.',
    source: 'WWF & Smithsonian National Zoo',
  },
  {
    id: 'q3',
    question: 'Quel pays abrite aujourd’hui plus de 70 % de tous les tigres sauvages du monde ?',
    options: ['La Russie', 'L’Indonésie', 'L’Inde', 'La Thaïlande'],
    correctIndex: 2,
    explanation:
      'Selon le recensement officiel NTCA 2022-2023, l’Inde compte plus de 3 680 tigres sauvages sur les ~5 574 estimés dans le monde entier.',
    source: 'Global Tiger Forum / NTCA',
  },
  {
    id: 'q4',
    question: 'Depuis la révision taxonomique officielle de l’IUCN en 2017, combien de sous-espèces de tigres sont génétiquement reconnues ?',
    options: ['2 sous-espèces', '6 sous-espèces', '9 sous-espèces', '12 sous-espèces'],
    correctIndex: 0,
    explanation:
      'Le groupe d’experts des félins de l’IUCN (2017) distingue désormais 2 grands clades : Panthera tigris tigris (tigre continental) et Panthera tigris sondaica (tigre de la Sonde), tout en conservant les 9 populations historiques pour la gestion.',
    source: 'IUCN Cat Specialist Group (2017)',
  },
  {
    id: 'q5',
    question: 'Quelle proportion de son aire de répartition historique le tigre a-t-il perdue depuis 1900 ?',
    options: ['Environ 35 %', 'Environ 55 %', 'Environ 75 %', 'Environ 93 %'],
    correctIndex: 3,
    explanation:
      'En un siècle, la déforestation, l’urbanisation et la chasse ont réduit l’aire de répartition mondiale du tigre d’environ 93 %.',
    source: 'WWF Global Tiger Programme',
  },
  {
    id: 'q6',
    question: 'À quoi servent principalement les taches blanches (ocelles) situées derrière les oreilles des tigres ?',
    options: [
      'À réguler la température corporelle',
      'De signaux visuels pour les jeunes et de leurres défensifs',
      'À absorber les ultraviolets',
      'Elles n’existent que chez les mâles adultes',
    ],
    correctIndex: 1,
    explanation:
      'Ces taches blanches permettent aux petits de repérer leur mère dans les hautes herbes et simulent des yeux ouverts pour dissuader d’éventuels agresseurs venant de dos.',
    source: 'National Geographic',
  },
  {
    id: 'q7',
    question: 'Quelle est la durée moyenne de gestation chez une tigresse ?',
    options: ['Environ 65 jours', 'Environ 103 jours', 'Environ 150 jours', 'Environ 210 jours'],
    correctIndex: 1,
    explanation:
      'La gestation dure entre 93 et 112 jours (moyenne de 103 jours). Les petits naissent aveugles et dépendent entièrement de leur mère pendant 18 à 24 mois.',
    source: 'Smithsonian National Zoo',
  },
  {
    id: 'q8',
    question: 'Avec quelle sous-espèce éteinte le tigre de Sibérie partage-t-il une quasi-identité génétique ?',
    options: ['Tigre de Bali', 'Tigre de Java', 'Tigre de la Caspienne', 'Tigre de Malaisie'],
    correctIndex: 2,
    explanation:
      'Une étude génétique de 2009 a montré que le tigre de la Caspienne (éteint vers 1970) et le tigre de Sibérie descendaient d’une population ancêtre récente et ne présentaient qu’une divergence minime.',
    source: 'Driscoll et al., 2009',
  },
  {
    id: 'q9',
    question: 'Comment appelle-t-on les forêts riveraines où vivait le tigre de la Caspienne ?',
    options: ['La taïga', 'Le teraï', 'Les forêts tugai', 'La steppe boréale'],
    correctIndex: 2,
    explanation:
      'Les forêts galeries tugai — constituées de peupliers, saules et roseaux géants — longeaient les fleuves Amou-Daria et Syr-Daria en Asie centrale.',
    source: 'WWF Central Asia',
  },
  {
    id: 'q10',
    question: 'Pourquoi les rayures d’un tigre sont-elles utiles aux chercheurs sur le terrain ?',
    options: [
      'Elles changent de couleur selon l’âge',
      'Elles indiquent le poids exact de l’animal',
      'Elles sont uniques à chaque individu, comme des empreintes digitales',
      'Elles brillent sous lampe UV',
    ],
    correctIndex: 2,
    explanation:
      'Aucun tigre n’a exactement le même motif de rayures : les biologistes utilisent les pièges photographiques pour recenser et suivre individuellement chaque félin.',
    source: 'WWF & NTCA',
  },
];
