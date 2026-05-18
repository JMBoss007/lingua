import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ProgressState = {
  dailyXpEarned: number;
  dailyXpGoal: number;
  streakDays: number;
  completedLessonIds: string[];
  hasHydrated: boolean;
  addXp: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
  setHasHydrated: (val: boolean) => void;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      dailyXpEarned: 15,
      dailyXpGoal: 20,
      streakDays: 12,
      completedLessonIds: [],
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
      setHasHydrated: (val) => set({ hasHydrated: val }),
    }),
    {
      name: "progress-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
