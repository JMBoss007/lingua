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
      { id: "es-u1-l1-a1", type: "multiple-choice", question: "What does \"hola\" mean?", options: ["goodbye", "hello", "thank you", "please"], correctAnswer: "hello" },
      { id: "es-u1-l1-a2", type: "multiple-choice", question: "How do you say \"thank you\" in Spanish?", options: ["por favor", "adiós", "gracias", "sí"], correctAnswer: "gracias" },
      { id: "es-u1-l1-a3", type: "match-pair", pairs: [{ word: "hola", translation: "hello" }, { word: "adiós", translation: "goodbye" }, { word: "gracias", translation: "thank you" }, { word: "por favor", translation: "please" }] },
      { id: "es-u1-l1-a4", type: "fill-blank", sentence: "_____, ¿cómo estás? (hello)", correctAnswer: "Hola", hint: "A friendly greeting that starts with H." },
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
      { id: "es-u1-l2-a1", type: "multiple-choice", question: "How do you say \"my name is\" in Spanish?", options: ["soy de", "mucho gusto", "me llamo", "¿cómo te llamas?"], correctAnswer: "me llamo" },
      { id: "es-u1-l2-a2", type: "fill-blank", sentence: "_____ gusto, encantado. (nice to meet you)", correctAnswer: "Mucho", hint: "Starts with M and means \"much\"." },
      { id: "es-u1-l2-a3", type: "listen-repeat", phrase: "Me llamo Carlos. ¿Cómo te llamas?", translation: "My name is Carlos. What is your name?", pronunciation: "meh YAH-moh KAR-los. KOH-moh teh YAH-mas?" },
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
      { id: "es-u1-l3-a1", type: "listen-repeat", phrase: "Hola, ¿cómo estás?", translation: "Hello, how are you?", pronunciation: "OH-lah, KOH-moh es-TAS" },
      { id: "es-u1-l3-a2", type: "listen-repeat", phrase: "Estoy bien, gracias.", translation: "I am fine, thank you.", pronunciation: "es-TOY bien, GRAH-see-as" },
    ],
  },

  {
    id: "es-u1-l4",
    unitId: "es-unit-1",
    title: "Common Expressions",
    type: "phrase",
    order: 4,
    xpReward: 15,
    estimatedMinutes: 4,
    goal: "Learn polite everyday expressions used in Spanish conversations.",
    vocabulary: [
      { word: "¿cómo estás?", translation: "how are you?", pronunciation: "KOH-moh es-TAS", example: "¡Hola! ¿Cómo estás?" },
      { word: "estoy bien", translation: "I am fine", pronunciation: "es-TOY byen", example: "Estoy bien, gracias." },
      { word: "perdón", translation: "sorry / excuse me", pronunciation: "pehr-DON", example: "Perdón, ¿dónde está el baño?" },
      { word: "con permiso", translation: "excuse me (passing)", pronunciation: "kon pehr-MEE-soh", example: "Con permiso, por favor." },
      { word: "de nada", translation: "you're welcome", pronunciation: "deh NAH-dah", example: "De nada, fue un placer." },
    ],
    activities: [
      { id: "es-u1-l4-a1", type: "multiple-choice", question: "What does \"de nada\" mean?", options: ["sorry", "please", "you're welcome", "excuse me"], correctAnswer: "you're welcome" },
      { id: "es-u1-l4-a2", type: "fill-blank", sentence: "_____, ¿cómo estás? — Estoy bien. (sorry / excuse me)", correctAnswer: "Perdón", hint: "A polite way to get someone's attention." },
      { id: "es-u1-l4-a3", type: "listen-repeat", phrase: "Con permiso. De nada.", translation: "Excuse me. You're welcome.", pronunciation: "kon pehr-MEE-soh. deh NAH-dah." },
    ],
  },

  {
    id: "es-u1-l5",
    unitId: "es-unit-1",
    title: "Basic Colors",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 4,
    goal: "Name six common colors in Spanish.",
    vocabulary: [
      { word: "rojo", translation: "red", pronunciation: "ROH-hoh", example: "El tomate es rojo." },
      { word: "azul", translation: "blue", pronunciation: "ah-SOOL", example: "El cielo es azul." },
      { word: "verde", translation: "green", pronunciation: "BEHR-deh", example: "La hierba es verde." },
      { word: "amarillo", translation: "yellow", pronunciation: "ah-mah-REE-yoh", example: "El sol es amarillo." },
      { word: "negro", translation: "black", pronunciation: "NEH-groh", example: "La noche es negra." },
      { word: "blanco", translation: "white", pronunciation: "BLAHN-koh", example: "La nieve es blanca." },
    ],
    activities: [
      { id: "es-u1-l5-a1", type: "multiple-choice", question: "What does \"azul\" mean?", options: ["red", "green", "blue", "yellow"], correctAnswer: "blue" },
      { id: "es-u1-l5-a2", type: "match-pair", pairs: [{ word: "rojo", translation: "red" }, { word: "verde", translation: "green" }, { word: "negro", translation: "black" }, { word: "blanco", translation: "white" }] },
      { id: "es-u1-l5-a3", type: "fill-blank", sentence: "El cielo es _____. (blue)", correctAnswer: "azul", hint: "The color of a clear sky." },
    ],
  },

  {
    id: "es-u1-l6",
    unitId: "es-unit-1",
    title: "AI Practice: Daily Chat",
    type: "audio",
    order: 6,
    xpReward: 25,
    estimatedMinutes: 6,
    goal: "Practice all Unit 1 vocabulary in a flowing conversation with an AI teacher.",
    aiTeacherPrompt:
      "You are Luna, a friendly Spanish teacher for beginners. In this review session, guide the student through Unit 1 content: greetings, self-introductions, polite expressions, and basic colors. Ask them simple questions in Spanish, praise their answers, and gently correct mistakes. Keep it fun and under six minutes.",
    activities: [
      { id: "es-u1-l6-a1", type: "listen-repeat", phrase: "¿De qué color es el cielo?", translation: "What color is the sky?", pronunciation: "deh keh koh-LOR es el SYEH-loh?" },
      { id: "es-u1-l6-a2", type: "listen-repeat", phrase: "El cielo es azul y las nubes son blancas.", translation: "The sky is blue and the clouds are white.", pronunciation: "el SYEH-loh es ah-SOOL ee las NOO-behs son BLAHN-kas." },
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
      { id: "es-u2-l1-a1", type: "multiple-choice", question: "What does \"cinco\" mean?", options: ["three", "four", "five", "six"], correctAnswer: "five" },
      { id: "es-u2-l1-a2", type: "match-pair", pairs: [{ word: "uno", translation: "one" }, { word: "dos", translation: "two" }, { word: "tres", translation: "three" }, { word: "cuatro", translation: "four" }] },
      { id: "es-u2-l1-a3", type: "fill-blank", sentence: "uno, dos, _____, cuatro (three)", correctAnswer: "tres", hint: "Comes after two." },
    ],
  },

  {
    id: "es-u2-l2",
    unitId: "es-unit-2",
    title: "Numbers 11–20",
    type: "vocabulary",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    goal: "Count from eleven to twenty in Spanish.",
    vocabulary: [
      { word: "once", translation: "eleven", pronunciation: "ON-seh" },
      { word: "doce", translation: "twelve", pronunciation: "DOH-seh" },
      { word: "trece", translation: "thirteen", pronunciation: "TREH-seh" },
      { word: "catorce", translation: "fourteen", pronunciation: "kah-TOR-seh" },
      { word: "quince", translation: "fifteen", pronunciation: "KEEN-seh" },
      { word: "veinte", translation: "twenty", pronunciation: "BAYN-teh" },
    ],
    activities: [
      { id: "es-u2-l2-a1", type: "multiple-choice", question: "What does \"quince\" mean?", options: ["twelve", "thirteen", "fourteen", "fifteen"], correctAnswer: "fifteen" },
      { id: "es-u2-l2-a2", type: "match-pair", pairs: [{ word: "once", translation: "eleven" }, { word: "doce", translation: "twelve" }, { word: "trece", translation: "thirteen" }, { word: "veinte", translation: "twenty" }] },
      { id: "es-u2-l2-a3", type: "fill-blank", sentence: "diez, once, _____, trece (twelve)", correctAnswer: "doce", hint: "Comes after eleven." },
    ],
  },

  {
    id: "es-u2-l3",
    unitId: "es-unit-2",
    title: "More Colors",
    type: "vocabulary",
    order: 3,
    xpReward: 10,
    estimatedMinutes: 4,
    goal: "Learn six more colors and how to describe objects.",
    vocabulary: [
      { word: "naranja", translation: "orange", pronunciation: "nah-RAHN-hah", example: "La naranja es naranja." },
      { word: "morado", translation: "purple", pronunciation: "moh-RAH-doh", example: "Las uvas son moradas." },
      { word: "rosa", translation: "pink", pronunciation: "ROH-sah", example: "La flor es rosa." },
      { word: "marrón", translation: "brown", pronunciation: "mah-RRON", example: "El chocolate es marrón." },
      { word: "gris", translation: "gray", pronunciation: "grees", example: "El elefante es gris." },
      { word: "dorado", translation: "golden", pronunciation: "doh-RAH-doh", example: "El anillo es dorado." },
    ],
    activities: [
      { id: "es-u2-l3-a1", type: "multiple-choice", question: "What does \"morado\" mean?", options: ["orange", "pink", "purple", "brown"], correctAnswer: "purple" },
      { id: "es-u2-l3-a2", type: "match-pair", pairs: [{ word: "naranja", translation: "orange" }, { word: "rosa", translation: "pink" }, { word: "gris", translation: "gray" }, { word: "marrón", translation: "brown" }] },
      { id: "es-u2-l3-a3", type: "fill-blank", sentence: "Las uvas son _____. (purple)", correctAnswer: "moradas", hint: "Think of grapes." },
    ],
  },

  {
    id: "es-u2-l4",
    unitId: "es-unit-2",
    title: "Telling the Time",
    type: "phrase",
    order: 4,
    xpReward: 15,
    estimatedMinutes: 5,
    goal: "Ask and answer what time it is in Spanish.",
    vocabulary: [
      { word: "¿qué hora es?", translation: "what time is it?", pronunciation: "keh OH-rah es", example: "Perdón, ¿qué hora es?" },
      { word: "es la una", translation: "it is one o'clock", pronunciation: "es lah OO-nah", example: "Es la una de la tarde." },
      { word: "son las tres", translation: "it is three o'clock", pronunciation: "son las trays", example: "Son las tres de la mañana." },
      { word: "de la mañana", translation: "in the morning", pronunciation: "deh lah mah-NYAH-nah", example: "Son las ocho de la mañana." },
    ],
    activities: [
      { id: "es-u2-l4-a1", type: "multiple-choice", question: "How do you ask \"what time is it?\"", options: ["¿cómo estás?", "¿qué hora es?", "¿dónde estás?", "¿cuánto cuesta?"], correctAnswer: "¿qué hora es?" },
      { id: "es-u2-l4-a2", type: "listen-repeat", phrase: "¿Qué hora es? — Son las dos.", translation: "What time is it? — It is two o'clock.", pronunciation: "keh OH-rah es? — son las dohs." },
      { id: "es-u2-l4-a3", type: "fill-blank", sentence: "Son las _____ de la mañana. (eight)", correctAnswer: "ocho", hint: "The number 8 in Spanish." },
    ],
  },

  {
    id: "es-u2-l5",
    unitId: "es-unit-2",
    title: "Days of the Week",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 5,
    goal: "Name all seven days of the week in Spanish.",
    vocabulary: [
      { word: "lunes", translation: "Monday", pronunciation: "LOO-nes" },
      { word: "martes", translation: "Tuesday", pronunciation: "MAR-tes" },
      { word: "miércoles", translation: "Wednesday", pronunciation: "mee-EHR-koh-les" },
      { word: "jueves", translation: "Thursday", pronunciation: "HWEH-ves" },
      { word: "viernes", translation: "Friday", pronunciation: "bee-EHR-nes" },
      { word: "sábado", translation: "Saturday", pronunciation: "SAH-bah-doh" },
      { word: "domingo", translation: "Sunday", pronunciation: "doh-MEEN-goh" },
    ],
    activities: [
      { id: "es-u2-l5-a1", type: "multiple-choice", question: "What does \"viernes\" mean?", options: ["Thursday", "Friday", "Saturday", "Sunday"], correctAnswer: "Friday" },
      { id: "es-u2-l5-a2", type: "match-pair", pairs: [{ word: "lunes", translation: "Monday" }, { word: "martes", translation: "Tuesday" }, { word: "sábado", translation: "Saturday" }, { word: "domingo", translation: "Sunday" }] },
      { id: "es-u2-l5-a3", type: "fill-blank", sentence: "El fin de semana: _____ y domingo. (Saturday)", correctAnswer: "sábado", hint: "The first day of the weekend." },
    ],
  },

  {
    id: "es-u2-l6",
    unitId: "es-unit-2",
    title: "AI Lesson: Numbers in Action",
    type: "audio",
    order: 6,
    xpReward: 25,
    estimatedMinutes: 6,
    goal: "Use numbers, colors, and days in real conversation with an AI teacher.",
    aiTeacherPrompt:
      "You are Luna, a friendly Spanish teacher. Guide the student through a Unit 2 review using numbers, colors, and days of the week. Ask them fun questions like 'what day is today?' and 'how many colors can you name?'. Encourage them and celebrate every correct answer. Keep the session engaging and under six minutes.",
    activities: [
      { id: "es-u2-l6-a1", type: "listen-repeat", phrase: "Hoy es lunes. ¿Qué día es mañana?", translation: "Today is Monday. What day is tomorrow?", pronunciation: "oy es LOO-nes. keh DEE-ah es mah-NYAH-nah?" },
      { id: "es-u2-l6-a2", type: "listen-repeat", phrase: "Mañana es martes.", translation: "Tomorrow is Tuesday.", pronunciation: "mah-NYAH-nah es MAR-tes." },
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
      { id: "fr-u1-l1-a1", type: "multiple-choice", question: "What does \"bonjour\" mean?", options: ["goodbye", "please", "hello", "thank you"], correctAnswer: "hello" },
      { id: "fr-u1-l1-a2", type: "multiple-choice", question: "How do you say \"thank you\" in French?", options: ["oui", "merci", "non", "bonjour"], correctAnswer: "merci" },
      { id: "fr-u1-l1-a3", type: "match-pair", pairs: [{ word: "bonjour", translation: "hello" }, { word: "au revoir", translation: "goodbye" }, { word: "merci", translation: "thank you" }, { word: "oui", translation: "yes" }] },
      { id: "fr-u1-l1-a4", type: "fill-blank", sentence: "_____, comment ça va? (hello)", correctAnswer: "Bonjour", hint: "The most common French greeting." },
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
      { id: "fr-u1-l2-a1", type: "multiple-choice", question: "How do you say \"my name is\" in French?", options: ["je suis de", "enchanté", "je m'appelle", "au revoir"], correctAnswer: "je m'appelle" },
      { id: "fr-u1-l2-a2", type: "fill-blank", sentence: "_____, je m'appelle Claire. (nice to meet you)", correctAnswer: "Enchantée", hint: "What you say when meeting someone for the first time." },
      { id: "fr-u1-l2-a3", type: "listen-repeat", phrase: "Je m'appelle Marie. Et vous?", translation: "My name is Marie. And you?", pronunciation: "zhuh mah-PELL mah-REE. eh voo?" },
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
      { id: "fr-u1-l3-a1", type: "listen-repeat", phrase: "Bonjour! Comment ça va?", translation: "Hello! How are you?", pronunciation: "bon-ZHOOR, koh-mahn sah VAH?" },
      { id: "fr-u1-l3-a2", type: "listen-repeat", phrase: "Ça va bien, merci.", translation: "I am doing well, thank you.", pronunciation: "sah VAH byahn, mair-SEE" },
    ],
  },

  {
    id: "fr-u1-l4",
    unitId: "fr-unit-1",
    title: "Common Expressions",
    type: "phrase",
    order: 4,
    xpReward: 15,
    estimatedMinutes: 4,
    goal: "Learn polite everyday expressions used in French conversations.",
    vocabulary: [
      { word: "comment allez-vous?", translation: "how are you? (formal)", pronunciation: "koh-mahn tah-lay-voo", example: "Bonjour, comment allez-vous?" },
      { word: "je vais bien", translation: "I am doing well", pronunciation: "zhuh veh byahn", example: "Je vais bien, merci." },
      { word: "pardon", translation: "sorry / pardon", pronunciation: "par-DON", example: "Pardon, je ne comprends pas." },
      { word: "excusez-moi", translation: "excuse me", pronunciation: "ex-koo-ZAY mwah", example: "Excusez-moi, où est la gare?" },
      { word: "de rien", translation: "you're welcome", pronunciation: "duh ryahn", example: "De rien, c'était un plaisir." },
    ],
    activities: [
      { id: "fr-u1-l4-a1", type: "multiple-choice", question: "What does \"de rien\" mean?", options: ["sorry", "excuse me", "you're welcome", "how are you?"], correctAnswer: "you're welcome" },
      { id: "fr-u1-l4-a2", type: "fill-blank", sentence: "_____, je ne comprends pas. (sorry / pardon)", correctAnswer: "Pardon", hint: "Used to apologize or get attention." },
      { id: "fr-u1-l4-a3", type: "listen-repeat", phrase: "Excusez-moi, parlez-vous anglais?", translation: "Excuse me, do you speak English?", pronunciation: "ex-koo-ZAY mwah, par-LAY voo ahn-GLEH?" },
    ],
  },

  {
    id: "fr-u1-l5",
    unitId: "fr-unit-1",
    title: "Basic Colors",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 4,
    goal: "Name six common colors in French.",
    vocabulary: [
      { word: "rouge", translation: "red", pronunciation: "roozh", example: "La rose est rouge." },
      { word: "bleu", translation: "blue", pronunciation: "bluh", example: "Le ciel est bleu." },
      { word: "vert", translation: "green", pronunciation: "vehr", example: "L'herbe est verte." },
      { word: "jaune", translation: "yellow", pronunciation: "zhohn", example: "Le soleil est jaune." },
      { word: "noir", translation: "black", pronunciation: "nwahr", example: "La nuit est noire." },
      { word: "blanc", translation: "white", pronunciation: "blahn", example: "La neige est blanche." },
    ],
    activities: [
      { id: "fr-u1-l5-a1", type: "multiple-choice", question: "What does \"bleu\" mean?", options: ["red", "green", "blue", "yellow"], correctAnswer: "blue" },
      { id: "fr-u1-l5-a2", type: "match-pair", pairs: [{ word: "rouge", translation: "red" }, { word: "vert", translation: "green" }, { word: "noir", translation: "black" }, { word: "blanc", translation: "white" }] },
      { id: "fr-u1-l5-a3", type: "fill-blank", sentence: "Le ciel est _____. (blue)", correctAnswer: "bleu", hint: "The color of a clear sky." },
    ],
  },

  {
    id: "fr-u1-l6",
    unitId: "fr-unit-1",
    title: "AI Practice: Daily Chat",
    type: "audio",
    order: 6,
    xpReward: 25,
    estimatedMinutes: 6,
    goal: "Practice all Unit 1 vocabulary in a flowing conversation with an AI French teacher.",
    aiTeacherPrompt:
      "You are Camille, a warm French teacher for beginners. In this review session, guide the student through Unit 1: greetings, introductions, polite expressions, and colors. Ask simple questions in French, encourage responses, and gently correct mistakes. Keep it friendly and under six minutes.",
    activities: [
      { id: "fr-u1-l6-a1", type: "listen-repeat", phrase: "De quelle couleur est le ciel?", translation: "What color is the sky?", pronunciation: "duh kel koo-LUHR eh luh syel?" },
      { id: "fr-u1-l6-a2", type: "listen-repeat", phrase: "Le ciel est bleu et les nuages sont blancs.", translation: "The sky is blue and the clouds are white.", pronunciation: "luh syel eh bluh eh lay noo-AZH son blahn." },
    ],
  },

  // ─── French · Unit 2 ────────────────────────────────────────────────────────

  {
    id: "fr-u2-l1",
    unitId: "fr-unit-2",
    title: "Numbers 1–10",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 4,
    goal: "Count from one to ten in French.",
    vocabulary: [
      { word: "un", translation: "one", pronunciation: "uhn" },
      { word: "deux", translation: "two", pronunciation: "duh" },
      { word: "trois", translation: "three", pronunciation: "twah" },
      { word: "quatre", translation: "four", pronunciation: "KAH-truh" },
      { word: "cinq", translation: "five", pronunciation: "sank" },
      { word: "six", translation: "six", pronunciation: "sees" },
      { word: "sept", translation: "seven", pronunciation: "set" },
      { word: "huit", translation: "eight", pronunciation: "weet" },
      { word: "neuf", translation: "nine", pronunciation: "nuhf" },
      { word: "dix", translation: "ten", pronunciation: "dees" },
    ],
    activities: [
      { id: "fr-u2-l1-a1", type: "multiple-choice", question: "What does \"cinq\" mean?", options: ["three", "four", "five", "six"], correctAnswer: "five" },
      { id: "fr-u2-l1-a2", type: "match-pair", pairs: [{ word: "un", translation: "one" }, { word: "deux", translation: "two" }, { word: "trois", translation: "three" }, { word: "quatre", translation: "four" }] },
      { id: "fr-u2-l1-a3", type: "fill-blank", sentence: "un, deux, _____, quatre (three)", correctAnswer: "trois", hint: "Comes after two." },
    ],
  },

  {
    id: "fr-u2-l2",
    unitId: "fr-unit-2",
    title: "Numbers 11–20",
    type: "vocabulary",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    goal: "Count from eleven to twenty in French.",
    vocabulary: [
      { word: "onze", translation: "eleven", pronunciation: "onz" },
      { word: "douze", translation: "twelve", pronunciation: "dooz" },
      { word: "treize", translation: "thirteen", pronunciation: "trehz" },
      { word: "quatorze", translation: "fourteen", pronunciation: "kah-TORZ" },
      { word: "quinze", translation: "fifteen", pronunciation: "kanz" },
      { word: "vingt", translation: "twenty", pronunciation: "vahn" },
    ],
    activities: [
      { id: "fr-u2-l2-a1", type: "multiple-choice", question: "What does \"quinze\" mean?", options: ["twelve", "thirteen", "fourteen", "fifteen"], correctAnswer: "fifteen" },
      { id: "fr-u2-l2-a2", type: "match-pair", pairs: [{ word: "onze", translation: "eleven" }, { word: "douze", translation: "twelve" }, { word: "treize", translation: "thirteen" }, { word: "vingt", translation: "twenty" }] },
      { id: "fr-u2-l2-a3", type: "fill-blank", sentence: "dix, onze, _____, treize (twelve)", correctAnswer: "douze", hint: "Comes after eleven." },
    ],
  },

  {
    id: "fr-u2-l3",
    unitId: "fr-unit-2",
    title: "More Colors",
    type: "vocabulary",
    order: 3,
    xpReward: 10,
    estimatedMinutes: 4,
    goal: "Learn six more colors in French.",
    vocabulary: [
      { word: "orange", translation: "orange", pronunciation: "oh-RANZH", example: "L'orange est orange." },
      { word: "violet", translation: "purple", pronunciation: "vyoh-LEH", example: "La lavande est violette." },
      { word: "rose", translation: "pink", pronunciation: "rohz", example: "La fleur est rose." },
      { word: "marron", translation: "brown", pronunciation: "mah-RON", example: "Le chocolat est marron." },
      { word: "gris", translation: "gray", pronunciation: "gree", example: "L'éléphant est gris." },
      { word: "doré", translation: "golden", pronunciation: "doh-RAY", example: "La couronne est dorée." },
    ],
    activities: [
      { id: "fr-u2-l3-a1", type: "multiple-choice", question: "What does \"violet\" mean?", options: ["orange", "pink", "purple", "brown"], correctAnswer: "purple" },
      { id: "fr-u2-l3-a2", type: "match-pair", pairs: [{ word: "orange", translation: "orange" }, { word: "rose", translation: "pink" }, { word: "gris", translation: "gray" }, { word: "marron", translation: "brown" }] },
      { id: "fr-u2-l3-a3", type: "fill-blank", sentence: "La lavande est _____. (purple)", correctAnswer: "violette", hint: "Think of lavender." },
    ],
  },

  {
    id: "fr-u2-l4",
    unitId: "fr-unit-2",
    title: "Telling the Time",
    type: "phrase",
    order: 4,
    xpReward: 15,
    estimatedMinutes: 5,
    goal: "Ask and answer what time it is in French.",
    vocabulary: [
      { word: "quelle heure est-il?", translation: "what time is it?", pronunciation: "kel uhr eh-TEEL", example: "Pardon, quelle heure est-il?" },
      { word: "il est une heure", translation: "it is one o'clock", pronunciation: "eel eh oon uhr", example: "Il est une heure de l'après-midi." },
      { word: "il est trois heures", translation: "it is three o'clock", pronunciation: "eel eh twah zuhr", example: "Il est trois heures du matin." },
      { word: "du matin", translation: "in the morning", pronunciation: "doo mah-TAN", example: "Il est huit heures du matin." },
    ],
    activities: [
      { id: "fr-u2-l4-a1", type: "multiple-choice", question: "How do you ask \"what time is it?\" in French?", options: ["comment allez-vous?", "quelle heure est-il?", "où est la gare?", "quel jour sommes-nous?"], correctAnswer: "quelle heure est-il?" },
      { id: "fr-u2-l4-a2", type: "listen-repeat", phrase: "Quelle heure est-il? — Il est deux heures.", translation: "What time is it? — It is two o'clock.", pronunciation: "kel uhr eh-TEEL? — eel eh duh zuhr." },
      { id: "fr-u2-l4-a3", type: "fill-blank", sentence: "Il est _____ heures du matin. (eight)", correctAnswer: "huit", hint: "The number 8 in French." },
    ],
  },

  {
    id: "fr-u2-l5",
    unitId: "fr-unit-2",
    title: "Days of the Week",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 5,
    goal: "Name all seven days of the week in French.",
    vocabulary: [
      { word: "lundi", translation: "Monday", pronunciation: "luhn-DEE" },
      { word: "mardi", translation: "Tuesday", pronunciation: "mar-DEE" },
      { word: "mercredi", translation: "Wednesday", pronunciation: "mehr-kruh-DEE" },
      { word: "jeudi", translation: "Thursday", pronunciation: "zhuh-DEE" },
      { word: "vendredi", translation: "Friday", pronunciation: "vahn-druh-DEE" },
      { word: "samedi", translation: "Saturday", pronunciation: "sam-DEE" },
      { word: "dimanche", translation: "Sunday", pronunciation: "dee-MAHNSH" },
    ],
    activities: [
      { id: "fr-u2-l5-a1", type: "multiple-choice", question: "What does \"vendredi\" mean?", options: ["Thursday", "Friday", "Saturday", "Sunday"], correctAnswer: "Friday" },
      { id: "fr-u2-l5-a2", type: "match-pair", pairs: [{ word: "lundi", translation: "Monday" }, { word: "mardi", translation: "Tuesday" }, { word: "samedi", translation: "Saturday" }, { word: "dimanche", translation: "Sunday" }] },
      { id: "fr-u2-l5-a3", type: "fill-blank", sentence: "Le week-end: _____ et dimanche. (Saturday)", correctAnswer: "samedi", hint: "The first day of the weekend." },
    ],
  },

  {
    id: "fr-u2-l6",
    unitId: "fr-unit-2",
    title: "AI Lesson: Numbers in Action",
    type: "audio",
    order: 6,
    xpReward: 25,
    estimatedMinutes: 6,
    goal: "Use numbers, colors, and days in real conversation with an AI French teacher.",
    aiTeacherPrompt:
      "You are Camille, a warm French teacher. Guide the student through a Unit 2 review: numbers, colors, and days of the week. Ask fun questions like 'quel jour sommes-nous?' and 'combien de couleurs connaissez-vous?'. Encourage them and celebrate every answer. Keep it lively and under six minutes.",
    activities: [
      { id: "fr-u2-l6-a1", type: "listen-repeat", phrase: "Aujourd'hui c'est lundi. Et demain?", translation: "Today is Monday. And tomorrow?", pronunciation: "oh-zhoor-DWEE seh luhn-DEE. eh duh-MAN?" },
      { id: "fr-u2-l6-a2", type: "listen-repeat", phrase: "Demain c'est mardi.", translation: "Tomorrow is Tuesday.", pronunciation: "duh-MAN seh mar-DEE." },
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
      { id: "ja-u1-l1-a1", type: "multiple-choice", question: "What does \"こんにちは\" mean?", options: ["goodbye", "thank you", "hello", "please"], correctAnswer: "hello" },
      { id: "ja-u1-l1-a2", type: "multiple-choice", question: "How do you say \"yes\" in Japanese?", options: ["いいえ", "はい", "ありがとう", "さようなら"], correctAnswer: "はい" },
      { id: "ja-u1-l1-a3", type: "match-pair", pairs: [{ word: "こんにちは", translation: "hello" }, { word: "ありがとう", translation: "thank you" }, { word: "はい", translation: "yes" }, { word: "いいえ", translation: "no" }] },
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
      { id: "ja-u1-l2-a1", type: "multiple-choice", question: "What does \"はじめまして\" mean?", options: ["goodbye", "nice to meet you", "thank you", "yes"], correctAnswer: "nice to meet you" },
      { id: "ja-u1-l2-a2", type: "fill-blank", sentence: "わたしは___です。(Ken)", correctAnswer: "ケン", hint: "Write the name in the blank." },
      { id: "ja-u1-l2-a3", type: "listen-repeat", phrase: "はじめまして。わたしはさくらです。", translation: "Nice to meet you. I am Sakura.", pronunciation: "ha-ji-me-ma-shi-te. wa-ta-shi wa sa-ku-ra des." },
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
      { id: "ja-u1-l3-a1", type: "listen-repeat", phrase: "こんにちは！お元気ですか？", translation: "Hello! How are you?", pronunciation: "kon-ni-chi-wa! o-gen-ki des ka?" },
      { id: "ja-u1-l3-a2", type: "listen-repeat", phrase: "はい、元気です。ありがとう。", translation: "Yes, I am fine. Thank you.", pronunciation: "hai, gen-ki des. a-ri-ga-to-u." },
    ],
  },

  {
    id: "ja-u1-l4",
    unitId: "ja-unit-1",
    title: "Common Expressions",
    type: "phrase",
    order: 4,
    xpReward: 15,
    estimatedMinutes: 4,
    goal: "Learn polite everyday expressions used in Japanese conversations.",
    vocabulary: [
      { word: "おげんきですか", translation: "how are you?", pronunciation: "o-gen-ki des-ka", example: "こんにちは、おげんきですか？" },
      { word: "げんきです", translation: "I am fine", pronunciation: "gen-ki des", example: "はい、げんきです。" },
      { word: "すみません", translation: "excuse me / sorry", pronunciation: "su-mi-ma-sen", example: "すみません、えいごをはなせますか？" },
      { word: "どういたしまして", translation: "you're welcome", pronunciation: "do-u-i-ta-shi-ma-shi-te", example: "どういたしまして。" },
      { word: "もういちど", translation: "one more time", pronunciation: "mo-u i-chi-do", example: "もういちど、おねがいします。" },
    ],
    activities: [
      { id: "ja-u1-l4-a1", type: "multiple-choice", question: "What does \"すみません\" mean?", options: ["thank you", "you're welcome", "excuse me / sorry", "how are you?"], correctAnswer: "excuse me / sorry" },
      { id: "ja-u1-l4-a2", type: "fill-blank", sentence: "___、えいごをはなせますか？(excuse me)", correctAnswer: "すみません", hint: "A polite way to get someone's attention." },
      { id: "ja-u1-l4-a3", type: "listen-repeat", phrase: "すみません。もういちどおねがいします。", translation: "Excuse me. Please say it one more time.", pronunciation: "su-mi-ma-sen. mo-u i-chi-do o-ne-gai-shi-mas." },
    ],
  },

  {
    id: "ja-u1-l5",
    unitId: "ja-unit-1",
    title: "Basic Colors",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 4,
    goal: "Name six common colors in Japanese.",
    vocabulary: [
      { word: "あか", translation: "red", pronunciation: "a-ka", example: "トマトはあかです。" },
      { word: "あお", translation: "blue", pronunciation: "a-o", example: "そらはあおです。" },
      { word: "みどり", translation: "green", pronunciation: "mi-do-ri", example: "くさはみどりです。" },
      { word: "きいろ", translation: "yellow", pronunciation: "ki-i-ro", example: "たいようはきいろです。" },
      { word: "しろ", translation: "white", pronunciation: "shi-ro", example: "ゆきはしろです。" },
      { word: "くろ", translation: "black", pronunciation: "ku-ro", example: "よるはくろです。" },
    ],
    activities: [
      { id: "ja-u1-l5-a1", type: "multiple-choice", question: "What does \"あお\" mean?", options: ["red", "green", "blue", "yellow"], correctAnswer: "blue" },
      { id: "ja-u1-l5-a2", type: "match-pair", pairs: [{ word: "あか", translation: "red" }, { word: "みどり", translation: "green" }, { word: "しろ", translation: "white" }, { word: "くろ", translation: "black" }] },
      { id: "ja-u1-l5-a3", type: "fill-blank", sentence: "そらは___です。(blue)", correctAnswer: "あお", hint: "The color of a clear sky." },
    ],
  },

  {
    id: "ja-u1-l6",
    unitId: "ja-unit-1",
    title: "AI Practice: Daily Chat",
    type: "audio",
    order: 6,
    xpReward: 25,
    estimatedMinutes: 6,
    goal: "Practice all Unit 1 vocabulary in a flowing conversation with an AI Japanese teacher.",
    aiTeacherPrompt:
      "You are Hana, a warm Japanese teacher for beginners. In this review session, guide the student through Unit 1: greetings, introductions, polite expressions, and colors. Ask simple questions in Japanese with English translations, encourage responses, and gently correct mistakes. Keep it friendly and under six minutes.",
    activities: [
      { id: "ja-u1-l6-a1", type: "listen-repeat", phrase: "そらはなにいろですか？", translation: "What color is the sky?", pronunciation: "so-ra wa na-ni i-ro des-ka?" },
      { id: "ja-u1-l6-a2", type: "listen-repeat", phrase: "そらはあおです。くもはしろです。", translation: "The sky is blue. The clouds are white.", pronunciation: "so-ra wa a-o des. ku-mo wa shi-ro des." },
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
      { id: "ja-u2-l1-a1", type: "multiple-choice", question: "What does \"さん\" mean?", options: ["one", "two", "three", "four"], correctAnswer: "three" },
      { id: "ja-u2-l1-a2", type: "match-pair", pairs: [{ word: "いち", translation: "one" }, { word: "に", translation: "two" }, { word: "さん", translation: "three" }, { word: "ご", translation: "five" }] },
      { id: "ja-u2-l1-a3", type: "fill-blank", sentence: "いち、に、___、し (three)", correctAnswer: "さん", hint: "The Japanese word for three." },
    ],
  },

  {
    id: "ja-u2-l2",
    unitId: "ja-unit-2",
    title: "Numbers 11–20",
    type: "vocabulary",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    goal: "Count from eleven to twenty in Japanese.",
    vocabulary: [
      { word: "じゅういち", translation: "eleven", pronunciation: "juu-i-chi" },
      { word: "じゅうに", translation: "twelve", pronunciation: "juu-ni" },
      { word: "じゅうさん", translation: "thirteen", pronunciation: "juu-san" },
      { word: "じゅうし", translation: "fourteen", pronunciation: "juu-shi" },
      { word: "じゅうご", translation: "fifteen", pronunciation: "juu-go" },
      { word: "にじゅう", translation: "twenty", pronunciation: "ni-juu" },
    ],
    activities: [
      { id: "ja-u2-l2-a1", type: "multiple-choice", question: "What does \"じゅうご\" mean?", options: ["twelve", "thirteen", "fourteen", "fifteen"], correctAnswer: "fifteen" },
      { id: "ja-u2-l2-a2", type: "match-pair", pairs: [{ word: "じゅういち", translation: "eleven" }, { word: "じゅうに", translation: "twelve" }, { word: "じゅうさん", translation: "thirteen" }, { word: "にじゅう", translation: "twenty" }] },
      { id: "ja-u2-l2-a3", type: "fill-blank", sentence: "じゅう、じゅういち、___、じゅうさん (twelve)", correctAnswer: "じゅうに", hint: "Comes after eleven." },
    ],
  },

  {
    id: "ja-u2-l3",
    unitId: "ja-unit-2",
    title: "More Colors",
    type: "vocabulary",
    order: 3,
    xpReward: 10,
    estimatedMinutes: 4,
    goal: "Learn six more colors in Japanese.",
    vocabulary: [
      { word: "オレンジ", translation: "orange", pronunciation: "o-ren-ji", example: "オレンジはオレンジいろです。" },
      { word: "むらさき", translation: "purple", pronunciation: "mu-ra-sa-ki", example: "ラベンダーはむらさきです。" },
      { word: "ももいろ", translation: "pink", pronunciation: "mo-mo-i-ro", example: "はなはももいろです。" },
      { word: "ちゃいろ", translation: "brown", pronunciation: "cha-i-ro", example: "チョコレートはちゃいろです。" },
      { word: "はいいろ", translation: "gray", pronunciation: "ha-i-i-ro", example: "ぞうははいいろです。" },
      { word: "きんいろ", translation: "golden", pronunciation: "kin-i-ro", example: "たからはきんいろです。" },
    ],
    activities: [
      { id: "ja-u2-l3-a1", type: "multiple-choice", question: "What does \"むらさき\" mean?", options: ["orange", "pink", "purple", "brown"], correctAnswer: "purple" },
      { id: "ja-u2-l3-a2", type: "match-pair", pairs: [{ word: "オレンジ", translation: "orange" }, { word: "ももいろ", translation: "pink" }, { word: "はいいろ", translation: "gray" }, { word: "ちゃいろ", translation: "brown" }] },
      { id: "ja-u2-l3-a3", type: "fill-blank", sentence: "ラベンダーは___です。(purple)", correctAnswer: "むらさき", hint: "Think of lavender." },
    ],
  },

  {
    id: "ja-u2-l4",
    unitId: "ja-unit-2",
    title: "Telling the Time",
    type: "phrase",
    order: 4,
    xpReward: 15,
    estimatedMinutes: 5,
    goal: "Ask and answer what time it is in Japanese.",
    vocabulary: [
      { word: "いまなんじですか", translation: "what time is it?", pronunciation: "i-ma nan-ji des-ka", example: "すみません、いまなんじですか？" },
      { word: "いちじです", translation: "it is one o'clock", pronunciation: "i-chi-ji des", example: "いまいちじです。" },
      { word: "さんじです", translation: "it is three o'clock", pronunciation: "san-ji des", example: "いまさんじです。" },
      { word: "ごぜん", translation: "AM / morning", pronunciation: "go-zen", example: "ごぜんはちじです。" },
    ],
    activities: [
      { id: "ja-u2-l4-a1", type: "multiple-choice", question: "How do you ask \"what time is it?\" in Japanese?", options: ["おなまえは？", "いまなんじですか", "おげんきですか", "なにいろですか"], correctAnswer: "いまなんじですか" },
      { id: "ja-u2-l4-a2", type: "listen-repeat", phrase: "いまなんじですか？ — にじです。", translation: "What time is it? — It is two o'clock.", pronunciation: "i-ma nan-ji des-ka? — ni-ji des." },
      { id: "ja-u2-l4-a3", type: "fill-blank", sentence: "ごぜん___じです。(eight)", correctAnswer: "はち", hint: "The number 8 in Japanese." },
    ],
  },

  {
    id: "ja-u2-l5",
    unitId: "ja-unit-2",
    title: "Days of the Week",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 5,
    goal: "Name all seven days of the week in Japanese.",
    vocabulary: [
      { word: "げつようび", translation: "Monday", pronunciation: "ge-tsu-yo-u-bi" },
      { word: "かようび", translation: "Tuesday", pronunciation: "ka-yo-u-bi" },
      { word: "すいようび", translation: "Wednesday", pronunciation: "su-i-yo-u-bi" },
      { word: "もくようび", translation: "Thursday", pronunciation: "mo-ku-yo-u-bi" },
      { word: "きんようび", translation: "Friday", pronunciation: "kin-yo-u-bi" },
      { word: "どようび", translation: "Saturday", pronunciation: "do-yo-u-bi" },
      { word: "にちようび", translation: "Sunday", pronunciation: "ni-chi-yo-u-bi" },
    ],
    activities: [
      { id: "ja-u2-l5-a1", type: "multiple-choice", question: "What does \"きんようび\" mean?", options: ["Thursday", "Friday", "Saturday", "Sunday"], correctAnswer: "Friday" },
      { id: "ja-u2-l5-a2", type: "match-pair", pairs: [{ word: "げつようび", translation: "Monday" }, { word: "かようび", translation: "Tuesday" }, { word: "どようび", translation: "Saturday" }, { word: "にちようび", translation: "Sunday" }] },
      { id: "ja-u2-l5-a3", type: "fill-blank", sentence: "しゅうまつ：___とにちようび。(Saturday)", correctAnswer: "どようび", hint: "The first day of the weekend." },
    ],
  },

  {
    id: "ja-u2-l6",
    unitId: "ja-unit-2",
    title: "AI Lesson: Numbers in Action",
    type: "audio",
    order: 6,
    xpReward: 25,
    estimatedMinutes: 6,
    goal: "Use numbers, colors, and days in real conversation with an AI Japanese teacher.",
    aiTeacherPrompt:
      "You are Hana, a warm Japanese teacher. Guide the student through a Unit 2 review: numbers, colors, and days of the week. Ask fun questions like 'きょうはなんようびですか？' and 'なんしょくしっていますか？'. Encourage them, translate everything, and celebrate every correct answer. Keep it engaging and under six minutes.",
    activities: [
      { id: "ja-u2-l6-a1", type: "listen-repeat", phrase: "きょうはげつようびです。あしたは？", translation: "Today is Monday. What about tomorrow?", pronunciation: "kyo-u wa ge-tsu-yo-u-bi des. a-shi-ta wa?" },
      { id: "ja-u2-l6-a2", type: "listen-repeat", phrase: "あしたはかようびです。", translation: "Tomorrow is Tuesday.", pronunciation: "a-shi-ta wa ka-yo-u-bi des." },
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
