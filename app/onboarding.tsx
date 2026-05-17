import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="flex-1 px-6 pt-6">
        {/* Header: Logo + App Name */}
        <View className="flex-row items-center justify-center gap-2">
          <Image source={images.mascotLogo} className="w-9 h-9" resizeMode="contain" />
          <Text className="h3 text-ink">MBD Performance</Text>
        </View>

        {/* Hero Text */}
        <View className="mt-12">
          <Text className="h1 text-ink">Your AI language</Text>
          <View className="flex-row">
            <Text className="h1 text-primary">teacher</Text>
            <Text className="h1 text-ink">.</Text>
          </View>
          <Text className="body-md text-ink-secondary mt-3">
            Real conversations, personalized{"\n"}lessons, anytime, anywhere.
          </Text>
        </View>

        {/* Mascot + Speech Bubbles */}
        <View className="flex-1 relative mt-3">
          {/* Hello! bubble */}
          <View className="absolute top-14 left-1 bg-white rounded-[18px] px-[14px] py-[9px] z-10 border border-border" style={styles.shadow}>
            <Text className="font-poppins-medium text-[14px] leading-5 text-ink">Hello!</Text>
          </View>

          {/* ¡Hola! bubble */}
          <View className="absolute top-10 right-2 bg-white rounded-[18px] px-[14px] py-[9px] z-10 border border-border" style={styles.shadow}>
            <Text className="font-poppins-medium text-[14px] leading-5 text-primary">¡Hola!</Text>
          </View>

          {/* 你好! bubble */}
          <View className="absolute bottom-[52px] right-4 bg-white rounded-[18px] px-[14px] py-[9px] z-10 border border-border" style={styles.shadow}>
            <Text className="font-poppins-medium text-[14px] leading-5 text-[#e53935]">你好!</Text>
          </View>

          <Image source={images.mascotWelcome} className="w-full h-full" resizeMode="contain" />
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          className="flex-row items-center justify-center bg-primary rounded-[20px] py-[10px] gap-[10px] mt-2"
          activeOpacity={0.85}
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text className="font-poppins-semibold text-[18px] leading-[26px] text-white">Get Started</Text>
          <Text className="font-poppins-bold text-[26px] leading-[26px] text-white">›</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
});
