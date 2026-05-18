import { useAuth, useClerk } from "@clerk/expo";
import { Redirect, router } from "expo-router";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
        <Text className="btn-label text-white">Choose a Language</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signOutButton}
        activeOpacity={0.85}
        onPress={async () => {
          try {
            await signOut();
          } catch (error) {
            const message =
              error instanceof Error
                ? error.message
                : "Failed to sign out. Please try again.";
            Alert.alert("Sign Out Error", message);
          }
        }}
      >
        <Text className="btn-label text-ink-secondary">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // TouchableOpacity — exempt per style exception rules
  langButton: {
    backgroundColor: "#6c4ef5",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  // TouchableOpacity — exempt per style exception rules
  signOutButton: {
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
});
