import { useAuth } from "@clerk/expo";
import { Redirect, Tabs } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useLanguageStore } from "@/store/useLanguageStore";
import { CustomTabBar } from "@/components/CustomTabBar";

export default function TabsLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const { selectedLanguageId, hasHydrated } = useLanguageStore();

  if (!isLoaded || !hasHydrated) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#6c4ef5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (!selectedLanguageId) {
    return <Redirect href="/language-selection" />;
  }

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="learn" />
      <Tabs.Screen name="ai-teacher" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
