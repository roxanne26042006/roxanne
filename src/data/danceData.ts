import { DanceProgram, Choreographer, ScheduleClass, GalleryItem, Testimonial, AwardItem, FAQItem } from '../types';

export const DANCE_PROGRAMS: DanceProgram[] = [
  {
    id: 'suvremeni-ples',
    title: 'Suvremeni Ples & Lyrical',
    category: 'contemporary',
    categoryLabel: 'Suvremeni & Lyrical',
    ageGroup: 'Juniori & Seniori (12+ god.)',
    level: 'Svi uzrasti',
    duration: '90 min / 3x tjedno',
    intensity: 'Visok',
    description: 'Fuzija suvremenih tehnika (Release, Floorwork, Cunningham) i lirske ekspresije. Razvijamo fluidnost pokreta, elastičnost, dinamiku i scensku prisutnost.',
    highlights: ['Tehnika poda (Floorwork)', 'Partnering & kontakt improvizacija', 'Scensko izvođenje & solo dionice', 'Emocionalna interpretacija glazbe'],
    scheduleSnippet: 'Pon / Sri / Pet: 19:30 - 21:00',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=80',
    trainer: 'Ema Horvat',
    trainerRole: 'Glavna koreografkinja za suvremeni ples',
    pricePerMonth: 45
  },
  {
    id: 'jazz-dance',
    title: 'Modern Jazz & Broadway',
    category: 'jazz',
    categoryLabel: 'Modern Jazz',
    ageGroup: 'Juniori & Odrasli (14+ god.)',
    level: 'Srednji',
    duration: '75 min / 2x tjedno',
    intensity: 'Visok',
    description: 'Eksplozivni skokovi, tehnički okreti (piruete), precizna izolacija tijela i snažna ritmika uz moderne i broadwayske melodije.',
    highlights: ['Piruete, fouetté i skokovi', 'Fleksibilnost i snaga tijela', 'Muzikalnost i teatralnost', 'Koreografije za festivale'],
    scheduleSnippet: 'Uto / Čet: 18:00 - 19:15',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=900&q=80',
    trainer: 'Lana Kovačević',
    trainerRole: 'Specijalistica za Jazz Dance & Scenski pokret',
    pricePerMonth: 40
  },
  {
    id: 'hip-hop-urban',
    title: 'Hip Hop & Urban Fusion',
    category: 'hiphop',
    categoryLabel: 'Hip Hop & Urban',
    ageGroup: 'Djeca, Juniori & Mladi (9 - 25 god.)',
    level: 'Svi uzrasti',
    duration: '75 min / 2x tjedno',
    intensity: 'Vrlo visok',
    description: 'Groove, freestyle, locking, popping i komercijalne koreografije. Učimo povijest urbane kulture, stav na sceni i energične formacije.',
    highlights: ['Urbani ritmovi & bounce', 'Freestyle krugovi i battle priprema', 'Sinkronizacija u timu', 'Video produkcija koreografija'],
    scheduleSnippet: 'Pon / Sri: 18:00 - 19:15',
    image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=900&q=80',
    trainer: 'Marko Vidović',
    trainerRole: 'Urban Core & Freestyle mentor',
    pricePerMonth: 40
  },
  {
    id: 'mtv-show-dance',
    title: 'MTV Commercial & Show Dance',
    category: 'showdance',
    categoryLabel: 'MTV & Show Dance',
    ageGroup: 'Mladi & Odrasli (15+ god.)',
    level: 'Srednji',
    duration: '60 min / 2x tjedno',
    intensity: 'Srednji',
    description: 'Dinamične i atraktivne koreografije poput onih u glazbenim spotovima vodećih svjetskih izvođača uz energiju, samopouzdanje i zabavu.',
    highlights: ['Scensko samopouzdanje', 'Komercijalni video stil', 'Kardio trening uz vrhunsku glazbu', 'Nastupi na eventima'],
    scheduleSnippet: 'Uto / Čet: 19:30 - 20:30',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=900&q=80',
    trainer: 'Sara Babić',
    trainerRole: 'Komercijalna koreografkinja & performerica',
    pricePerMonth: 38
  },
  {
    id: 'mini-roxanne-kids',
    title: 'Mini Roxanne (Dječji plesni vrtić)',
    category: 'kids',
    categoryLabel: 'Plesni vrtić & Kids',
    ageGroup: 'Predškolci i školarci (4 - 8 god.)',
    level: 'Početni',
    duration: '50 min / 2x tjedno',
    intensity: 'Srednji',
    description: 'Kroz igru, glazbu i maštovite vježbe djeca razvijaju motoriku, koordinaciju, osjećaj za ritam, socijalizaciju i ljubav prema plesu.',
    highlights: ['Razvoj pravilnog držanja', 'Ritam i motoričke igre', 'Godišnje produkcije i priredbe', 'Sigurno i poticajno okruženje'],
    scheduleSnippet: 'Pon / Sri: 17:00 - 17:50',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
    trainer: 'Ivana Jurić',
    trainerRole: 'Plesna pedagoginja za rani uzrast',
    pricePerMonth: 35
  },
  {
    id: 'competition-team',
    title: 'Roxanne Competition Elite Team',
    category: 'competition',
    categoryLabel: 'Natjecateljski tim',
    ageGroup: 'Odabrani plesači (Audicija)',
    level: 'Napredni',
    duration: '120 min / 4x tjedno',
    intensity: 'Vrlo visok',
    description: 'Intenzivne pripreme za državna, europska i svjetska plesna prvenstva (ESDU, DanceStar, IDO). Akrobatika, mentalna snaga i vrhunska izvedba.',
    highlights: ['Državna i međunarodna natjecanja', 'Kondicijska i akrobatska priprema', 'Gostujući inozemni pedagozi', 'Profesionalni kostimi i scenografija'],
    scheduleSnippet: 'Pon / Sri / Pet / Sub: Intenzivni blokovi',
    image: 'https://images.unsplash.com/photo-1545959570-a94084071b5d?auto=format&fit=crop&w=900&q=80',
    trainer: 'Ema Horvat & gostujući koreografi',
    trainerRole: 'Stručni trenerski stožer',
    pricePerMonth: 60
  }
];

export const CHOREOGRAPHERS: Choreographer[] = [
  {
    id: 'ema-horvat',
    name: 'Ema Horvat',
    role: 'Umjetnička voditeljica & Glavna koreografkinja',
    bio: 'Magistrica plesne pedagogije s preko 16 godina iskustva. Bivša solistica nacionalnog teatra i višestruko nagrađivana autorica koreografija na europskim prvenstvima.',
    experience: '16+ god. iskustva',
    specialties: ['Suvremeni ples', 'Lyrical Jazz', 'Režija plesnih predstava'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'marko-vidovic',
    name: 'Marko Vidović "Vido"',
    role: 'Urban & Hip Hop koreograf',
    bio: 'Pobjednik brojnih regionalnih battleova, član međunarodnih plesnih trupa i voditelj urbanih radionica u Berlinu, Beču i Zagrebu.',
    experience: '11 god. iskustva',
    specialties: ['Hip Hop Freestyle', 'Choreography', 'House & Popping'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'lana-kovacevic',
    name: 'Lana Kovačević',
    role: 'Jazz & Akrobatika pedagoginja',
    bio: 'Certificirana instruktorica plesa i kondicijske pripreme plesača. Fokusirana na tehničku preciznost, prevenciju ozljeda i scensku dinamiku.',
    experience: '9 god. iskustva',
    specialties: ['Modern Jazz', 'Gimnastika za plesače', 'Flexibility & Strength'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ivana-juric',
    name: 'Ivana Jurić',
    role: 'Plesna pedagoginja za djecu',
    bio: 'Specijalizirana za rad s predškolskim i ranim školskim uzrastom. Spaja elemente ritmike, bajkovitog pokreta i suvremene dječje motorike.',
    experience: '8 god. iskustva',
    specialties: ['Plesni vrtić', 'Dječja ritmika', 'Kreativni pokret'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80'
  }
];

export const SCHEDULE_DATA: ScheduleClass[] = [
  // Ponedjeljak
  { id: 's1', day: 'Ponedjeljak', time: '17:00 - 17:50', programTitle: 'Mini Roxanne (Dječji vrtić)', ageGroup: '4-8 god.', level: 'Početni', hall: 'Dvorana 1 (Velika)', trainer: 'Ivana Jurić', color: 'border-cyan-400/40 bg-cyan-950/30' },
  { id: 's2', day: 'Ponedjeljak', time: '18:00 - 19:15', programTitle: 'Hip Hop & Urban Fusion', ageGroup: '9-14 god.', level: 'Svi uzrasti', hall: 'Dvorana 1 (Velika)', trainer: 'Marko Vidović', color: 'border-blue-400/40 bg-blue-950/30' },
  { id: 's3', day: 'Ponedjeljak', time: '19:30 - 21:00', programTitle: 'Suvremeni Ples (Contemporary)', ageGroup: '14+ god.', level: 'Srednji/Napredni', hall: 'Dvorana 1 (Velika)', trainer: 'Ema Horvat', color: 'border-teal-400/40 bg-teal-950/30' },
  { id: 's4', day: 'Ponedjeljak', time: '18:30 - 19:45', programTitle: 'Plesna priprema & Stretching', ageGroup: 'Odrasli', level: 'Početni', hall: 'Dvorana 2 (Mirrors)', trainer: 'Lana Kovačević', color: 'border-sky-400/40 bg-sky-950/30' },

  // Utorak
  { id: 's5', day: 'Utorak', time: '17:30 - 18:45', programTitle: 'Jazz Dance Kids', ageGroup: '8-12 god.', level: 'Početni/Srednji', hall: 'Dvorana 1 (Velika)', trainer: 'Lana Kovačević', color: 'border-cyan-400/40 bg-cyan-950/30' },
  { id: 's6', day: 'Utorak', time: '18:00 - 19:15', programTitle: 'Modern Jazz & Broadway', ageGroup: '14+ god.', level: 'Srednji', hall: 'Dvorana 2 (Mirrors)', trainer: 'Lana Kovačević', color: 'border-blue-400/40 bg-blue-950/30' },
  { id: 's7', day: 'Utorak', time: '19:30 - 20:45', programTitle: 'MTV Commercial & Show', ageGroup: '15+ god.', level: 'Otvoreni sat', hall: 'Dvorana 1 (Velika)', trainer: 'Sara Babić', color: 'border-teal-400/40 bg-teal-950/30' },
  { id: 's8', day: 'Utorak', time: '20:45 - 22:00', programTitle: 'Competition Elite Team (Koreografija)', ageGroup: 'Natjecatelji', level: 'Napredni', hall: 'Dvorana 1 (Velika)', trainer: 'Ema Horvat', color: 'border-indigo-400/40 bg-indigo-950/30' },

  // Srijeda
  { id: 's9', day: 'Srijeda', time: '17:00 - 17:50', programTitle: 'Mini Roxanne (Dječji vrtić)', ageGroup: '4-8 god.', level: 'Početni', hall: 'Dvorana 1 (Velika)', trainer: 'Ivana Jurić', color: 'border-cyan-400/40 bg-cyan-950/30' },
  { id: 's10', day: 'Srijeda', time: '18:00 - 19:15', programTitle: 'Hip Hop & Urban Fusion', ageGroup: '13-18 god.', level: 'Srednji', hall: 'Dvorana 1 (Velika)', trainer: 'Marko Vidović', color: 'border-blue-400/40 bg-blue-950/30' },
  { id: 's11', day: 'Srijeda', time: '19:30 - 21:00', programTitle: 'Suvremeni Ples (Contemporary)', ageGroup: '14+ god.', level: 'Svi uzrasti', hall: 'Dvorana 1 (Velika)', trainer: 'Ema Horvat', color: 'border-teal-400/40 bg-teal-950/30' },

  // Četvrtak
  { id: 's12', day: 'Četvrtak', time: '18:00 - 19:15', programTitle: 'Modern Jazz & Broadway', ageGroup: 'Juniori/Seniori', level: 'Srednji', hall: 'Dvorana 1 (Velika)', trainer: 'Lana Kovačević', color: 'border-blue-400/40 bg-blue-950/30' },
  { id: 's13', day: 'Četvrtak', time: '19:30 - 20:30', programTitle: 'MTV Commercial & Show', ageGroup: '15+ god.', level: 'Svi uzrasti', hall: 'Dvorana 1 (Velika)', trainer: 'Sara Babić', color: 'border-cyan-400/40 bg-cyan-950/30' },
  { id: 's14', day: 'Četvrtak', time: '20:30 - 22:00', programTitle: 'Acro & Flexibility Masterclass', ageGroup: '12+ god.', level: 'Srednji/Napredni', hall: 'Dvorana 2 (Mirrors)', trainer: 'Lana Kovačević', color: 'border-teal-400/40 bg-teal-950/30' },

  // Petak
  { id: 's15', day: 'Petak', time: '17:30 - 19:00', programTitle: 'Urban Freestyle & Battle Lab', ageGroup: 'Svi uzrasti', level: 'Otvoreno', hall: 'Dvorana 2 (Mirrors)', trainer: 'Marko Vidović', color: 'border-cyan-400/40 bg-cyan-950/30' },
  { id: 's16', day: 'Petak', time: '19:00 - 21:00', programTitle: 'Contemporary Project Ensemble', ageGroup: 'Seniori', level: 'Napredni', hall: 'Dvorana 1 (Velika)', trainer: 'Ema Horvat', color: 'border-blue-400/40 bg-blue-950/30' },

  // Subota
  { id: 's17', day: 'Subota', time: '10:00 - 11:30', programTitle: 'Vikend intenziv za djecu', ageGroup: '6-11 god.', level: 'Svi', hall: 'Dvorana 1 (Velika)', trainer: 'Ivana Jurić', color: 'border-teal-400/40 bg-teal-950/30' },
  { id: 's18', day: 'Subota', time: '11:30 - 14:00', programTitle: 'Elite Competition Team Pripreme', ageGroup: 'Natjecatelji', level: 'Vrhunski', hall: 'Dvorana 1 (Velika)', trainer: 'Stručni tim Roxanne', color: 'border-indigo-400/40 bg-indigo-950/30' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Gala Predstava "Iskra u tami"',
    category: 'nastupi',
    categoryName: 'Nastupi & Predstave',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1000&q=80',
    description: 'Cjelovečernja plesna produkcija u Hrvatskom narodnom kazalištu. Preko 120 plesača na sceni u očaravajućoj igri svjetla i sjene.'
  },
  {
    id: 'g2',
    title: 'Zlato na DanceStar World Dance Masters',
    category: 'natjecanja',
    categoryName: 'Natjecanja & Nagrade',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1000&q=80',
    description: 'Naš juniorski contemporary tim osvojio je 1. mjesto u kategoriji Lyrical Formation među 35 međunarodnih timova.',
    award: '1. Mjesto - Svjetsko zlato (Poreč 2025)'
  },
  {
    id: 'g3',
    title: 'Atmosfera u Dvorani 1 - Treninzi i pripreme',
    category: 'dvorana',
    categoryName: 'Studio & Dvorana',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80',
    description: 'Naš moderan studio opremljen profesionalnim baletnim podom (Harlequin), zrcalima i vrhunskim ozvučenjem.'
  },
  {
    id: 'g4',
    title: 'Urbani plesni video "Rhythm of Roxanne"',
    category: 'nastupi',
    categoryName: 'Nastupi & Predstave',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=1000&q=80',
    description: 'Snimanje plesnog konceptualnog spota pod neonskim rasvjetnim instalacijama u staroj industrijskoj hali.',
    isVideo: true
  },
  {
    id: 'g5',
    title: 'Međunarodna Masterclass radionica sa gostima iz Pariza',
    category: 'radionice',
    categoryName: 'Radionice & Kampovi',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1545959570-a94084071b5d?auto=format&fit=crop&w=1000&q=80',
    description: 'Vikend intenziv suvremene floorwork tehnike i improvizacije s gostujućim francuskim koreografom.'
  },
  {
    id: 'g6',
    title: 'Državno Prvenstvo u Show Danceu',
    category: 'natjecanja',
    categoryName: 'Natjecanja & Nagrade',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1000&q=80',
    description: 'Senior tim osvojio je Grand Prix za najbolju koreografiju i scenski kostim sezone.',
    award: 'Grand Prix sezone & 1. Mjesto'
  },
  {
    id: 'g7',
    title: 'Mini Roxanne - Prvi nastup na pozornici',
    category: 'nastupi',
    categoryName: 'Nastupi & Predstave',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
    description: 'Naši najmlađi plesači (4-7 god.) u bajkovitoj koreografiji "Ples leptira" pred rasprodanom dvoranom.'
  },
  {
    id: 'g8',
    title: 'Ljetni plesni kamp Roxanne Summer Intensive',
    category: 'radionice',
    categoryName: 'Radionice & Kampovi',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1000&q=80',
    description: '7 dana intenzivnog plesa, kupanja, radionica koreografije i nezaboravnog prijateljstva na moru.'
  }
];

export const AWARDS: AwardItem[] = [
  {
    id: 'a1',
    year: '2025',
    competition: 'DanceStar World Dance Masters',
    place: '1. Mjesto (Zlatna medalja)',
    category: 'Contemporary / Modern Group',
    choreography: 'Ocean Whispers (Ema Horvat)',
    badgeColor: 'border-cyan-400 bg-cyan-950/60 text-cyan-300'
  },
  {
    id: 'a2',
    year: '2024',
    competition: 'ESDU European Championship',
    place: '1. Mjesto & Najbolji scenski dojam',
    category: 'Jazz Dance Formation',
    choreography: 'City of Neon Lights',
    badgeColor: 'border-teal-400 bg-teal-950/60 text-teal-300'
  },
  {
    id: 'a3',
    year: '2024',
    competition: 'Hrvatski Plesni Kup (HPS)',
    place: 'Državni prvaci',
    category: 'Urban & Hip Hop Crew',
    choreography: 'Cybernetic Groove (Marko Vidović)',
    badgeColor: 'border-blue-400 bg-blue-950/60 text-blue-300'
  },
  {
    id: 'a4',
    year: '2023',
    competition: 'Vienna Dance Open',
    place: '2. Mjesto & Specijalna nagrada žirija',
    category: 'Lyrical Solo & Duo',
    choreography: 'Unspoken Words',
    badgeColor: 'border-sky-400 bg-sky-950/60 text-sky-300'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Lucija Matić',
    role: 'Članica seniorskog tima',
    content: 'U Roxanne sam već 6 godina i ovo nije samo plesni klub, nego moja druga obitelj. Treneri nas potiču da pomičemo vlastite granice, a energija na treninzima i natjecanjima je neopisiva!',
    rating: 5,
    yearsInRoxanne: 6,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 't2',
    name: 'Sanja & Damir Perić',
    role: 'Roditelji članice Mini Roxanne tima (7 god.)',
    content: 'Naša kćerka je prije bila izrazito sramežljiva. Kroz rad s pedagoginjom Ivanom nevjerojatno je procvjetala, dobila samopouzdanje, ritam i divne prijateljice. Preporučujemo od srca svima!',
    rating: 5,
    yearsInRoxanne: 2,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 't3',
    name: 'Filip Novosel',
    role: 'Hip Hop Crew plesač',
    content: 'Vrhunski treninzi, brutalni ritmovi i koreografije koje su u koraku sa svjetskim trendovima. Marko je mentor koji stvarno prenosi strast za plesom i kulturom.',
    rating: 5,
    yearsInRoxanne: 4,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: 'Trebam li prethodno plesno iskustvo za upis u Roxanne?',
    answer: 'Apsolutno ne! Imamo grupe za sve razine – od potpunih početnika (djeca i odrasli rekreativci) pa sve do naprednih natjecateljskih timova. Naši pedagozi prilagođavaju tempo svakom polazniku.',
    category: 'Upisi'
  },
  {
    question: 'Kada traju upisi i mogu li doći na besplatni probni trening?',
    answer: 'Glavni upisi traju tijekom rujna i veljače, no upis u rekreativne grupe moguć je tijekom cijele godine ako ima slobodnih mjesta. Prvi probni trening je u potpunosti BESPLATAN za sve nove članove!',
    category: 'Upisi'
  },
  {
    question: 'Što mi je potrebno ponijeti na prvi trening?',
    answer: 'Udobna odjeća u kojoj se možete slobodno kretati (tajice/trenirka, majica kratkih rukava), čiste dvoranske tenisice ili čarape (za suvremeni ples/jazz plešemo u čarapama ili bosi) i bočicu vode.',
    category: 'Oprema'
  },
  {
    question: 'Kako funkcioniraju natjecanja i putovanja?',
    answer: 'Za natjecateljske grupe organiziramo sudjelovanja na državnim prvenstvima i prestižnim međunarodnim turnirima (DanceStar, ESDU, IDO). Članstvo u natjecateljskom timu ostvaruje se putem audicije na početku plesne sezone.',
    category: 'Natjecanja'
  },
  {
    question: 'Imate li popust za više članova iste obitelji?',
    answer: 'Da! Nudimo obiteljski popust: 10% popusta na članarinu za drugog člana obitelji, te 20% popusta za svakog sljedećeg člana.',
    category: 'Plaćanje'
  }
];
