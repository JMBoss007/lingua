import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center gap-6 px-6">
      <Text className="h2 text-center text-primary">MBD Performance</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={() => router.push("/onboarding")}
      >
        <Text style={styles.buttonText}>Open Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6c4ef5",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    lineHeight: 24,
  },
});
