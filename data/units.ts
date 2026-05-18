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
  },
  {
    id: "es-unit-2",
    languageId: "spanish",
    title: "Numbers & Colors",
    description: "Count to ten and name common colors in Spanish.",
    order: 2,
    icon: "🔢",
  },

  // French
  {
    id: "fr-unit-1",
    languageId: "french",
    title: "Greetings & Basics",
    description: "Learn how to say hello, goodbye, and introduce yourself.",
    order: 1,
    icon: "👋",
  },
  {
    id: "fr-unit-2",
    languageId: "french",
    title: "Numbers & Colors",
    description: "Count to ten and name common colors in French.",
    order: 2,
    icon: "🔢",
  },

  // Japanese
  {
    id: "ja-unit-1",
    languageId: "japanese",
    title: "Greetings & Basics",
    description: "Learn essential Japanese greetings and polite expressions.",
    order: 1,
    icon: "👋",
  },
  {
    id: "ja-unit-2",
    languageId: "japanese",
    title: "Numbers",
    description: "Learn to count from one to ten in Japanese.",
    order: 2,
    icon: "🔢",
  },
];

export function getUnitsByLanguage(languageId: string): Unit[] {
  return units
    .filter((u) => u.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}
