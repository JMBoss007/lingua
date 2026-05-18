import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LearnScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 items-center justify-center">
        <Text className="h3 text-ink">Learn</Text>
        <Text className="body-md text-ink-secondary mt-2">
          Learn screen coming soon
        </Text>
      </View>
    </SafeAreaView>
  );
}
