import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";
import VerificationModal from "@/components/VerificationModal";

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        className="flex-1 px-6"
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back arrow */}
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center mt-2"
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={24} color="#001132" />
        </TouchableOpacity>

        {/* Title */}
        <View className="mt-4">
          <Text className="h2 text-ink">Create your account</Text>
          <Text className="body-md text-ink-secondary mt-1">
            Start your language journey today ✨
          </Text>
        </View>

        {/* Mascot */}
        <View className="items-center my-6">
          <Image
            source={images.mascotAuth}
            style={styles.mascot}
            resizeMode="contain"
          />
        </View>

        {/* Email input */}
        <View className="border border-border rounded-2xl px-4 pt-3 pb-3 mb-4">
          <Text className="caption text-ink-secondary mb-1">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="alex@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Password input */}
        <View className="border border-border rounded-2xl px-4 pt-3 pb-3 mb-6 flex-row items-center">
          <View className="flex-1">
            <Text className="caption text-ink-secondary mb-1">Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholder="••••••••"
              style={styles.input}
              placeholderTextColor="#9ca3af"
            />
          </View>
          <TouchableOpacity
            onPress={() => setShowPassword((v) => !v)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#6b7280"
            />
          </TouchableOpacity>
        </View>

        {/* Sign Up button */}
        <TouchableOpacity
          className="bg-primary rounded-[20px] py-4 items-center mb-6"
          activeOpacity={0.85}
          onPress={() => setShowModal(true)}
        >
          <Text className="font-poppins-semibold text-[16px] leading-6 text-white">
            Sign Up
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center mb-6">
          <View className="flex-1 bg-border" style={styles.dividerLine} />
          <Text className="body-sm text-ink-secondary mx-4">
            or continue with
          </Text>
          <View className="flex-1 bg-border" style={styles.dividerLine} />
        </View>

        {/* Social buttons */}
        <View className="gap-3">
          <TouchableOpacity
            className="flex-row items-center border border-border rounded-2xl py-[14px] px-6"
            activeOpacity={0.7}
          >
            <Ionicons name="logo-google" size={20} color="#EA4335" />
            <Text className="font-poppins-medium text-[15px] text-ink flex-1 text-center">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center border border-border rounded-2xl py-[14px] px-6"
            activeOpacity={0.7}
          >
            <Ionicons name="logo-facebook" size={20} color="#1877F2" />
            <Text className="font-poppins-medium text-[15px] text-ink flex-1 text-center">
              Continue with Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center border border-border rounded-2xl py-[14px] px-6"
            activeOpacity={0.7}
          >
            <Ionicons name="logo-apple" size={20} color="#001132" />
            <Text className="font-poppins-medium text-[15px] text-ink flex-1 text-center">
              Continue with Apple
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom link */}
        <View className="flex-row items-center justify-center mt-8">
          <Text className="body-sm text-ink-secondary">
            Already have an account?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => router.replace("/(auth)/sign-in")}
            activeOpacity={0.7}
          >
            <Text className="body-sm text-primary font-poppins-semibold">
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <VerificationModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        email={email}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 32,
  },
  mascot: {
    width: 140,
    height: 140,
  },
  input: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: "#001132",
    padding: 0,
    margin: 0,
  },
  dividerLine: {
    height: 1,
  },
});
