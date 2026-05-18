import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function Index() {
  const { isLoaded } = useAuth();
  const { hasHydrated } = useLanguageStore();

  if (!isLoaded || !hasHydrated) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#6c4ef5" />
      </View>
    );
  }

  return <Redirect href="/home" />;
}
