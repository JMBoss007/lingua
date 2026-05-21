export type LanguageId =
  | "spanish"
  | "french"
  | "japanese"
  | "korean"
  | "german"
  | "chinese";

export type Language = {
  id: LanguageId;
  name: string;
  nativeName: string;
  flag: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  learnerCount: string;
  isPopular?: boolean;
};

export type Unit = {
  id: string;
  languageId: LanguageId;
  title: string;
  description: string;
  order: number;
  icon: string;
  bannerImage?: string;
};

export type LessonType = "vocabulary" | "phrase" | "audio" | "chat";

export type MultipleChoiceActivity = {
  id: string;
  type: "multiple-choice";
  question: string;
  options: string[];
  correctAnswer: string;
  hint?: string;
};

export type MatchPairActivity = {
  id: string;
  type: "match-pair";
  pairs: { word: string; translation: string }[];
};

export type FillBlankActivity = {
  id: string;
  type: "fill-blank";
  sentence: string;
  correctAnswer: string;
  hint?: string;
};

export type ListenRepeatActivity = {
  id: string;
  type: "listen-repeat";
  phrase: string;
  translation: string;
  pronunciation?: string;
};

export type Activity =
  | MultipleChoiceActivity
  | MatchPairActivity
  | FillBlankActivity
  | ListenRepeatActivity;

export type VocabItem = {
  word: string;
  translation: string;
  pronunciation?: string;
  example?: string;
};

export type Lesson = {
  id: string;
  unitId: string;
  title: string;
  type: LessonType;
  order: number;
  xpReward: number;
  estimatedMinutes: number;
  goal: string;
  aiTeacherPrompt?: string;
  vocabulary?: VocabItem[];
  activities: Activity[];
  image?: string;
};
