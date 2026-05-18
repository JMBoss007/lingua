import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LanguageState = {
  selectedLanguageId: string | null;
  hasHydrated: boolean;
  setSelectedLanguage: (id: string) => void;
  clearSelectedLanguage: () => void;
  setHasHydrated: (value: boolean) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      hasHydrated: false,
      setSelectedLanguage: (id) => set({ selectedLanguageId: id }),
      clearSelectedLanguage: () => set({ selectedLanguageId: null }),
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
