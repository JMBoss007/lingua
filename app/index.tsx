import { useEffect, useState } from "react";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function Index() {
  const { isLoaded } = useAuth();
  const [languageHydrated, setLanguageHydrated] = useState(
    () => useLanguageStore.persist.hasHydrated()
  );
  const selectedLanguageId = useLanguageStore((s) => s.selectedLanguageId);

  useEffect(() => {
    if (languageHydrated) return;
    return useLanguageStore.persist.onFinishHydration(() => {
      setLanguageHydrated(true);
    });
  }, [languageHydrated]);

  if (!isLoaded || !languageHydrated) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#6c4ef5" />
      </View>
    );
  }

  if (!selectedLanguageId) {
    return <Redirect href="/language-selection" />;
  }

  return <Redirect href="/home" />;
}
