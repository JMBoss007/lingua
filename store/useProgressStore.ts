import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Helper to get today's date in local YYYY-MM-DD format
const getLocalDateString = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

type ProgressState = {
  dailyXpEarned: number;
  dailyXpGoal: number;
  streakDays: number;
  completedLessonIds: string[];
  lastResetDate: string | null;
  hasHydrated: boolean;
  addXp: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
  resetDailyXp: () => void;
  setHasHydrated: (val: boolean) => void;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      dailyXpEarned: 15,
      dailyXpGoal: 20,
      streakDays: 12,
      completedLessonIds: [],
      lastResetDate: getLocalDateString(),
      hasHydrated: false,
      addXp: (amount) =>
        set((s) => ({
          dailyXpEarned: Math.min(s.dailyXpEarned + amount, s.dailyXpGoal),
        })),
      completeLesson: (id) =>
        set((s) => ({
          completedLessonIds: s.completedLessonIds.includes(id)
            ? s.completedLessonIds
            : [...s.completedLessonIds, id],
        })),
      resetDailyXp: () =>
        set({
          dailyXpEarned: 0,
          lastResetDate: getLocalDateString(),
        }),
      setHasHydrated: (val) => set({ hasHydrated: val }),
    }),
    {
      name: "progress-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const today = getLocalDateString();
          const lastReset = state.lastResetDate;

          // Reset daily XP if the date has changed or lastResetDate is missing
          if (!lastReset || lastReset !== today) {
            state.resetDailyXp();
          }

          state.setHasHydrated(true);
        }
      },
    },
  ),
);
