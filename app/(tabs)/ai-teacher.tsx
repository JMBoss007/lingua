import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AITeacherScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 items-center justify-center">
        <Text className="h3 text-ink">AI Teacher</Text>
        <Text className="body-md text-ink-secondary mt-2">
          AI Teacher screen coming soon
        </Text>
      </View>
    </SafeAreaView>
  );
}
