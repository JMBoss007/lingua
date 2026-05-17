import { useAuth, useClerk } from "@clerk/expo";
import { Redirect, router } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#6c4ef5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 items-center justify-center gap-6 px-6">
      <Text className="h2 text-center text-primary">MBD Performance</Text>
      <TouchableOpacity
        style={styles.langButton}
        activeOpacity={0.85}
        onPress={() => router.push("/language-selection")}
      >
        <Text style={styles.langButtonText}>Choose a Language</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signOutButton}
        activeOpacity={0.85}
        onPress={() => signOut()}
      >
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  langButton: {
    backgroundColor: "#6c4ef5",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  langButtonText: {
    color: "#ffffff",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    lineHeight: 24,
  },
  signOutButton: {
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  signOutText: {
    color: "#6b7280",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    lineHeight: 24,
  },
});
