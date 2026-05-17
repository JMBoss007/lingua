import type { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ─── Spanish · Unit 1 ───────────────────────────────────────────────────────

  {
    id: "es-u1-l1",
    unitId: "es-unit-1",
    title: "First Words",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 3,
    goal: "Learn six essential Spanish words used every day.",
    vocabulary: [
      { word: "hola", translation: "hello", pronunciation: "OH-lah", example: "¡Hola! ¿Cómo estás?" },
      { word: "adiós", translation: "goodbye", pronunciation: "ah-dee-OHS", example: "¡Adiós! Hasta luego." },
      { word: "gracias", translation: "thank you", pronunciation: "GRAH-see-as", example: "Gracias por tu ayuda." },
      { word: "por favor", translation: "please", pronunciation: "por fah-BOR", example: "Un café, por favor." },
      { word: "sí", translation: "yes", pronunciation: "see", example: "Sí, entiendo." },
      { word: "no", translation: "no", pronunciation: "noh", example: "No, gracias." },
    ],
    activities: [
      {
        id: "es-u1-l1-a1",
        type: "multiple-choice",
        question: "What does \"hola\" mean?",
        options: ["goodbye", "hello", "thank you", "please"],
        correctAnswer: "hello",
      },
      {
        id: "es-u1-l1-a2",
        type: "multiple-choice",
        question: "How do you say \"thank you\" in Spanish?",
        options: ["por favor", "adiós", "gracias", "sí"],
        correctAnswer: "gracias",
      },
      {
        id: "es-u1-l1-a3",
        type: "match-pair",
        pairs: [
          { word: "hola", translation: "hello" },
          { word: "adiós", translation: "goodbye" },
          { word: "gracias", translation: "thank you" },
          { word: "por favor", translation: "please" },
        ],
      },
      {
        id: "es-u1-l1-a4",
        type: "fill-blank",
        sentence: "_____, ¿cómo estás? (hello)",
        correctAnswer: "Hola",
        hint: "A friendly greeting that starts with H.",
      },
    ],
  },

  {
    id: "es-u1-l2",
    unitId: "es-unit-1",
    title: "Introducing Yourself",
    type: "phrase",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 5,
    goal: "Say your name and ask someone else for theirs.",
    vocabulary: [
      { word: "me llamo", translation: "my name is", pronunciation: "meh YAH-moh", example: "Me llamo Ana." },
      { word: "¿cómo te llamas?", translation: "what is your name?", pronunciation: "KOH-moh teh YAH-mas", example: "¿Cómo te llamas?" },
      { word: "mucho gusto", translation: "nice to meet you", pronunciation: "MOO-choh GOOS-toh", example: "Mucho gusto, María." },
      { word: "soy de", translation: "I am from", pronunciation: "soy deh", example: "Soy de México." },
    ],
    activities: [
      {
        id: "es-u1-l2-a1",
        type: "multiple-choice",
        question: "How do you say \"my name is\" in Spanish?",
        options: ["soy de", "mucho gusto", "me llamo", "¿cómo te llamas?"],
        correctAnswer: "me llamo",
      },
      {
        id: "es-u1-l2-a2",
        type: "fill-blank",
        sentence: "_____ gusto, encantado. (nice to meet you)",
        correctAnswer: "Mucho",
        hint: "Starts with M and means \"much\".",
      },
      {
        id: "es-u1-l2-a3",
        type: "listen-repeat",
        phrase: "Me llamo Carlos. ¿Cómo te llamas?",
        translation: "My name is Carlos. What is your name?",
        pronunciation: "meh YAH-moh KAR-los. KOH-moh teh YAH-mas?",
      },
    ],
  },

  {
    id: "es-u1-l3",
    unitId: "es-unit-1",
    title: "AI Lesson: Greetings",
    type: "audio",
    order: 3,
    xpReward: 20,
    estimatedMinutes: 5,
    goal: "Practice a real greeting conversation with an AI Spanish teacher.",
    aiTeacherPrompt:
      "You are Luna, a friendly and encouraging Spanish teacher for beginners. " +
      "Start by greeting the student warmly in Spanish, then slowly teach them how to say hello, " +
      "introduce themselves, and say goodbye. Speak clearly, use simple words, and always provide " +
      "the English translation right after each Spanish phrase. Celebrate small wins with enthusiasm. " +
      "Keep the session under five minutes and end with a warm goodbye.",
    activities: [
      {
        id: "es-u1-l3-a1",
        type: "listen-repeat",
        phrase: "Hola, ¿cómo estás?",
        translation: "Hello, how are you?",
        pronunciation: "OH-lah, KOH-moh es-TAS",
      },
      {
        id: "es-u1-l3-a2",
        type: "listen-repeat",
        phrase: "Estoy bien, gracias.",
        translation: "I am fine, thank you.",
        pronunciation: "es-TOY bien, GRAH-see-as",
      },
    ],
  },

  // ─── Spanish · Unit 2 ───────────────────────────────────────────────────────

  {
    id: "es-u2-l1",
    unitId: "es-unit-2",
    title: "Numbers 1–10",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 4,
    goal: "Count from one to ten in Spanish.",
    vocabulary: [
      { word: "uno", translation: "one", pronunciation: "OO-noh" },
      { word: "dos", translation: "two", pronunciation: "dohs" },
      { word: "tres", translation: "three", pronunciation: "trays" },
      { word: "cuatro", translation: "four", pronunciation: "KWAH-troh" },
      { word: "cinco", translation: "five", pronunciation: "SEEN-koh" },
      { word: "seis", translation: "six", pronunciation: "says" },
      { word: "siete", translation: "seven", pronunciation: "see-EH-teh" },
      { word: "ocho", translation: "eight", pronunciation: "OH-choh" },
      { word: "nueve", translation: "nine", pronunciation: "NWEH-beh" },
      { word: "diez", translation: "ten", pronunciation: "dee-EHS" },
    ],
    activities: [
      {
        id: "es-u2-l1-a1",
        type: "multiple-choice",
        question: "What does \"cinco\" mean?",
        options: ["three", "four", "five", "six"],
        correctAnswer: "five",
      },
      {
        id: "es-u2-l1-a2",
        type: "match-pair",
        pairs: [
          { word: "uno", translation: "one" },
          { word: "dos", translation: "two" },
          { word: "tres", translation: "three" },
          { word: "cuatro", translation: "four" },
        ],
      },
      {
        id: "es-u2-l1-a3",
        type: "fill-blank",
        sentence: "uno, dos, _____, cuatro (three)",
        correctAnswer: "tres",
        hint: "Comes after two.",
      },
    ],
  },

  // ─── French · Unit 1 ────────────────────────────────────────────────────────

  {
    id: "fr-u1-l1",
    unitId: "fr-unit-1",
    title: "First Words",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 3,
    goal: "Learn six essential French words used every day.",
    vocabulary: [
      { word: "bonjour", translation: "hello / good morning", pronunciation: "bon-ZHOOR", example: "Bonjour! Comment ça va?" },
      { word: "au revoir", translation: "goodbye", pronunciation: "oh reh-VWAHR", example: "Au revoir! À bientôt." },
      { word: "merci", translation: "thank you", pronunciation: "mair-SEE", example: "Merci beaucoup!" },
      { word: "s'il vous plaît", translation: "please", pronunciation: "seel voo PLEH", example: "Un café, s'il vous plaît." },
      { word: "oui", translation: "yes", pronunciation: "wee", example: "Oui, je comprends." },
      { word: "non", translation: "no", pronunciation: "noh", example: "Non, merci." },
    ],
    activities: [
      {
        id: "fr-u1-l1-a1",
        type: "multiple-choice",
        question: "What does \"bonjour\" mean?",
        options: ["goodbye", "please", "hello", "thank you"],
        correctAnswer: "hello",
      },
      {
        id: "fr-u1-l1-a2",
        type: "multiple-choice",
        question: "How do you say \"thank you\" in French?",
        options: ["oui", "merci", "non", "bonjour"],
        correctAnswer: "merci",
      },
      {
        id: "fr-u1-l1-a3",
        type: "match-pair",
        pairs: [
          { word: "bonjour", translation: "hello" },
          { word: "au revoir", translation: "goodbye" },
          { word: "merci", translation: "thank you" },
          { word: "oui", translation: "yes" },
        ],
      },
      {
        id: "fr-u1-l1-a4",
        type: "fill-blank",
        sentence: "_____, comment ça va? (hello)",
        correctAnswer: "Bonjour",
        hint: "The most common French greeting.",
      },
    ],
  },

  {
    id: "fr-u1-l2",
    unitId: "fr-unit-1",
    title: "Introducing Yourself",
    type: "phrase",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 5,
    goal: "Say your name and ask someone else for theirs.",
    vocabulary: [
      { word: "je m'appelle", translation: "my name is", pronunciation: "zhuh mah-PELL", example: "Je m'appelle Sophie." },
      { word: "comment vous appelez-vous?", translation: "what is your name? (formal)", pronunciation: "koh-mahn voo zah-play-voo", example: "Comment vous appelez-vous?" },
      { word: "enchanté(e)", translation: "nice to meet you", pronunciation: "ahn-shahn-TAY", example: "Enchanté, je m'appelle Paul." },
      { word: "je suis de", translation: "I am from", pronunciation: "zhuh swee duh", example: "Je suis de Paris." },
    ],
    activities: [
      {
        id: "fr-u1-l2-a1",
        type: "multiple-choice",
        question: "How do you say \"my name is\" in French?",
        options: ["je suis de", "enchanté", "je m'appelle", "au revoir"],
        correctAnswer: "je m'appelle",
      },
      {
        id: "fr-u1-l2-a2",
        type: "fill-blank",
        sentence: "_____, je m'appelle Claire. (nice to meet you)",
        correctAnswer: "Enchantée",
        hint: "What you say when meeting someone for the first time.",
      },
      {
        id: "fr-u1-l2-a3",
        type: "listen-repeat",
        phrase: "Je m'appelle Marie. Et vous?",
        translation: "My name is Marie. And you?",
        pronunciation: "zhuh mah-PELL mah-REE. eh voo?",
      },
    ],
  },

  {
    id: "fr-u1-l3",
    unitId: "fr-unit-1",
    title: "AI Lesson: Greetings",
    type: "audio",
    order: 3,
    xpReward: 20,
    estimatedMinutes: 5,
    goal: "Practice a real greeting conversation with an AI French teacher.",
    aiTeacherPrompt:
      "You are Camille, a warm and patient French teacher for absolute beginners. " +
      "Start by greeting the student in French, then teach them how to say hello, introduce themselves, " +
      "and say goodbye. Speak each French phrase slowly and clearly, then repeat it at natural speed. " +
      "Always follow up with the English meaning. Encourage mistakes — they are part of learning. " +
      "Keep the session conversational, fun, and under five minutes.",
    activities: [
      {
        id: "fr-u1-l3-a1",
        type: "listen-repeat",
        phrase: "Bonjour! Comment ça va?",
        translation: "Hello! How are you?",
        pronunciation: "bon-ZHOOR, koh-mahn sah VAH?",
      },
      {
        id: "fr-u1-l3-a2",
        type: "listen-repeat",
        phrase: "Ça va bien, merci.",
        translation: "I am doing well, thank you.",
        pronunciation: "sah VAH byahn, mair-SEE",
      },
    ],
  },

  // ─── Japanese · Unit 1 ──────────────────────────────────────────────────────

  {
    id: "ja-u1-l1",
    unitId: "ja-unit-1",
    title: "First Words",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 4,
    goal: "Learn six essential Japanese greetings and polite expressions.",
    vocabulary: [
      { word: "こんにちは", translation: "hello / good afternoon", pronunciation: "kon-ni-chi-wa", example: "こんにちは！元気ですか?" },
      { word: "さようなら", translation: "goodbye", pronunciation: "sa-yo-u-na-ra", example: "さようなら。またね。" },
      { word: "ありがとう", translation: "thank you", pronunciation: "a-ri-ga-to-u", example: "ありがとうございます。" },
      { word: "おねがいします", translation: "please", pronunciation: "o-ne-ga-i-shi-mas", example: "コーヒー、おねがいします。" },
      { word: "はい", translation: "yes", pronunciation: "hai", example: "はい、わかりました。" },
      { word: "いいえ", translation: "no", pronunciation: "i-i-e", example: "いいえ、けっこうです。" },
    ],
    activities: [
      {
        id: "ja-u1-l1-a1",
        type: "multiple-choice",
        question: "What does \"こんにちは\" mean?",
        options: ["goodbye", "thank you", "hello", "please"],
        correctAnswer: "hello",
      },
      {
        id: "ja-u1-l1-a2",
        type: "multiple-choice",
        question: "How do you say \"yes\" in Japanese?",
        options: ["いいえ", "はい", "ありがとう", "さようなら"],
        correctAnswer: "はい",
      },
      {
        id: "ja-u1-l1-a3",
        type: "match-pair",
        pairs: [
          { word: "こんにちは", translation: "hello" },
          { word: "ありがとう", translation: "thank you" },
          { word: "はい", translation: "yes" },
          { word: "いいえ", translation: "no" },
        ],
      },
    ],
  },

  {
    id: "ja-u1-l2",
    unitId: "ja-unit-1",
    title: "Introducing Yourself",
    type: "phrase",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 5,
    goal: "Say your name and greet someone politely in Japanese.",
    vocabulary: [
      { word: "わたしは〜です", translation: "I am ~", pronunciation: "wa-ta-shi wa ~ des", example: "わたしはケンです。" },
      { word: "おなまえは？", translation: "what is your name?", pronunciation: "o-na-ma-e wa?", example: "おなまえは？" },
      { word: "はじめまして", translation: "nice to meet you", pronunciation: "ha-ji-me-ma-shi-te", example: "はじめまして！よろしく。" },
      { word: "よろしくおねがいします", translation: "pleased to meet you (polite)", pronunciation: "yo-ro-shi-ku o-ne-gai-shi-mas", example: "よろしくおねがいします。" },
    ],
    activities: [
      {
        id: "ja-u1-l2-a1",
        type: "multiple-choice",
        question: "What does \"はじめまして\" mean?",
        options: ["goodbye", "nice to meet you", "thank you", "yes"],
        correctAnswer: "nice to meet you",
      },
      {
        id: "ja-u1-l2-a2",
        type: "fill-blank",
        sentence: "わたしは___です。(Ken)",
        correctAnswer: "ケン",
        hint: "Write the name in the blank.",
      },
      {
        id: "ja-u1-l2-a3",
        type: "listen-repeat",
        phrase: "はじめまして。わたしはさくらです。",
        translation: "Nice to meet you. I am Sakura.",
        pronunciation: "ha-ji-me-ma-shi-te. wa-ta-shi wa sa-ku-ra des.",
      },
    ],
  },

  {
    id: "ja-u1-l3",
    unitId: "ja-unit-1",
    title: "AI Lesson: Greetings",
    type: "audio",
    order: 3,
    xpReward: 20,
    estimatedMinutes: 5,
    goal: "Practice Japanese greetings in a conversation with an AI teacher.",
    aiTeacherPrompt:
      "You are Hana, a gentle and encouraging Japanese teacher for absolute beginners. " +
      "Begin with a warm Japanese greeting, then guide the student through basic expressions: " +
      "hello, thank you, yes, no, and introducing themselves. " +
      "After each Japanese phrase, give the English meaning and a simple pronunciation guide in roman letters. " +
      "Keep explanations short, repeat phrases twice, and celebrate every correct answer. " +
      "End the session with a polite Japanese farewell.",
    activities: [
      {
        id: "ja-u1-l3-a1",
        type: "listen-repeat",
        phrase: "こんにちは！お元気ですか？",
        translation: "Hello! How are you?",
        pronunciation: "kon-ni-chi-wa! o-gen-ki des ka?",
      },
      {
        id: "ja-u1-l3-a2",
        type: "listen-repeat",
        phrase: "はい、元気です。ありがとう。",
        translation: "Yes, I am fine. Thank you.",
        pronunciation: "hai, gen-ki des. a-ri-ga-to-u.",
      },
    ],
  },

  // ─── Japanese · Unit 2 ──────────────────────────────────────────────────────

  {
    id: "ja-u2-l1",
    unitId: "ja-unit-2",
    title: "Numbers 1–10",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 4,
    goal: "Count from one to ten in Japanese.",
    vocabulary: [
      { word: "いち", translation: "one", pronunciation: "i-chi" },
      { word: "に", translation: "two", pronunciation: "ni" },
      { word: "さん", translation: "three", pronunciation: "san" },
      { word: "し / よん", translation: "four", pronunciation: "shi / yon" },
      { word: "ご", translation: "five", pronunciation: "go" },
      { word: "ろく", translation: "six", pronunciation: "ro-ku" },
      { word: "しち / なな", translation: "seven", pronunciation: "shi-chi / na-na" },
      { word: "はち", translation: "eight", pronunciation: "ha-chi" },
      { word: "く / きゅう", translation: "nine", pronunciation: "ku / kyuu" },
      { word: "じゅう", translation: "ten", pronunciation: "juu" },
    ],
    activities: [
      {
        id: "ja-u2-l1-a1",
        type: "multiple-choice",
        question: "What does \"さん\" mean?",
        options: ["one", "two", "three", "four"],
        correctAnswer: "three",
      },
      {
        id: "ja-u2-l1-a2",
        type: "match-pair",
        pairs: [
          { word: "いち", translation: "one" },
          { word: "に", translation: "two" },
          { word: "さん", translation: "three" },
          { word: "ご", translation: "five" },
        ],
      },
      {
        id: "ja-u2-l1-a3",
        type: "fill-blank",
        sentence: "いち、に、___、し (three)",
        correctAnswer: "さん",
        hint: "The Japanese word for three.",
      },
    ],
  },
];

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((l) => l.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonById(lessonId: string): Lesson | undefined {
  return lessons.find((l) => l.id === lessonId);
}
