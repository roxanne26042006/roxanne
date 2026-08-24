export interface DanceProgram {
  id: string;
  title: string;
  category: 'contemporary' | 'jazz' | 'hiphop' | 'kids' | 'competition' | 'showdance';
  categoryLabel: string;
  ageGroup: string;
  level: 'Početni' | 'Srednji' | 'Napredni' | 'Svi uzrasti';
  duration: string;
  intensity: 'Srednji' | 'Visok' | 'Vrlo visok';
  description: string;
  highlights: string[];
  scheduleSnippet: string;
  image: string;
  trainer: string;
  trainerRole: string;
  pricePerMonth: number;
}

export interface Choreographer {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  specialties: string[];
  image: string;
}

export interface ScheduleClass {
  id: string;
  day: 'Ponedjeljak' | 'Utorak' | 'Srijeda' | 'Četvrtak' | 'Petak' | 'Subota';
  time: string;
  programTitle: string;
  ageGroup: string;
  level: string;
  hall: 'Dvorana 1 (Velika)' | 'Dvorana 2 (Mirrors)' | 'Dvorana 3 (Studio)';
  trainer: string;
  color: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'nastupi' | 'natjecanja' | 'dvorana' | 'radionice';
  categoryName: string;
  year: string;
  image: string;
  description: string;
  award?: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  yearsInRoxanne: number;
  avatar: string;
}

export interface AwardItem {
  id: string;
  year: string;
  competition: string;
  place: string;
  category: string;
  choreography: string;
  badgeColor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
