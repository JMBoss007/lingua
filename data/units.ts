import type { Unit } from "@/types/learning";

export const units: Unit[] = [
  // Spanish
  {
    id: "es-unit-1",
    languageId: "spanish",
    title: "Greetings & Basics",
    description: "Learn how to say hello, goodbye, and introduce yourself.",
    order: 1,
    icon: "👋",
    bannerImage: "https://picsum.photos/seed/es-unit-1/800/400",
  },
  {
    id: "es-unit-2",
    languageId: "spanish",
    title: "Numbers & Colors",
    description: "Count to twenty and name common colors in Spanish.",
    order: 2,
    icon: "🔢",
    bannerImage: "https://picsum.photos/seed/es-unit-2/800/400",
  },

  // French
  {
    id: "fr-unit-1",
    languageId: "french",
    title: "Greetings & Basics",
    description: "Learn how to say hello, goodbye, and introduce yourself.",
    order: 1,
    icon: "👋",
    bannerImage: "https://picsum.photos/seed/fr-unit-1/800/400",
  },
  {
    id: "fr-unit-2",
    languageId: "french",
    title: "Numbers & Colors",
    description: "Count to twenty and name common colors in French.",
    order: 2,
    icon: "🔢",
    bannerImage: "https://picsum.photos/seed/fr-unit-2/800/400",
  },

  // Japanese
  {
    id: "ja-unit-1",
    languageId: "japanese",
    title: "Greetings & Basics",
    description: "Learn essential Japanese greetings and polite expressions.",
    order: 1,
    icon: "👋",
    bannerImage: "https://picsum.photos/seed/ja-unit-1/800/400",
  },
  {
    id: "ja-unit-2",
    languageId: "japanese",
    title: "Numbers & Colors",
    description: "Learn to count and name colors in Japanese.",
    order: 2,
    icon: "🔢",
    bannerImage: "https://picsum.photos/seed/ja-unit-2/800/400",
  },
];

export function getUnitsByLanguage(languageId: string): Unit[] {
  return units
    .filter((u) => u.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}
