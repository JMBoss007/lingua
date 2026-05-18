import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 items-center justify-center">
        <Text className="h3 text-ink">Profile</Text>
        <Text className="body-md text-ink-secondary mt-2">
          Profile screen coming soon
        </Text>
      </View>
    </SafeAreaView>
  );
}
