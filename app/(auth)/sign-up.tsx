import VerificationModal from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { useSignUp, useSSO } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, type Href } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const router = useRouter();
  const { signUp, errors, fetchStatus } = useSignUp();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSignUp = async () => {
    setFormError(null);
    try {
      const { error } = await signUp.password({
        emailAddress: email,
        password,
      });
      if (error) {
        setFormError(error.longMessage ?? error.message);
        return;
      }
      const { error: sendError } = await signUp.verifications.sendEmailCode();
      if (sendError) {
        setFormError(sendError.longMessage ?? sendError.message);
        return;
      }
      setShowModal(true);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "An error occurred during sign up. Please try again.";
      setFormError(message);
    }
  };

  const handleVerify = async (code: string) => {
    const { error } = await signUp.verifications.verifyEmailCode({ code });
    if (error) {
      throw new Error(error.longMessage ?? error.message);
    }
    if (signUp.status === "complete") {
      await signUp.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) return;
          const url = decorateUrl("/");
          router.replace(url as Href);
        },
      });
    } else {
      // Handle non-complete states
      console.warn(`Sign-up status after email verification: ${signUp.status}`);
      throw new Error(
        `Email verified, but additional verification is required (${signUp.status}). Please try again or contact support if this persists.`,
      );
    }
  };

  const handleResend = async () => {
    try {
      const { error } = await signUp.verifications.sendEmailCode();
      if (error) {
        throw new Error(error.longMessage ?? error.message);
      }
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to resend code. Please try again.";
      throw new Error(message);
    }
  };

  const handleSSOAuth = async (
    strategy: "oauth_google" | "oauth_facebook" | "oauth_apple",
  ) => {
    setFormError(null);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
      } else if (createdSessionId && !setActive) {
        // Session created but activation step is missing
        setFormError(
          "SSO initiated but session activation failed — please check your email or try signing in again.",
        );
      } else {
        // Neither createdSessionId nor setActive provided
        setFormError("SSO authentication did not complete. Please try again.");
      }
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Authentication failed. Please try again.";
      setFormError(message);
    }
  };

  const isLoading = fetchStatus === "fetching";

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
        {errors?.fields?.emailAddress && (
          <Text className="body-sm text-red-500 -mt-3 mb-3 px-1">
            {errors?.fields?.emailAddress?.message}
          </Text>
        )}

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
        {errors?.fields?.password && (
          <Text className="body-sm text-red-500 -mt-5 mb-3 px-1">
            {errors?.fields?.password?.message}
          </Text>
        )}

        {formError && (
          <Text className="body-sm text-red-500 mb-4 text-center">
            {formError}
          </Text>
        )}

        {/* Sign Up button */}
        <TouchableOpacity
          className="bg-primary rounded-[20px] py-4 items-center mb-6"
          activeOpacity={0.85}
          onPress={handleSignUp}
          disabled={!email || !password || isLoading}
          style={
            !email || !password || isLoading ? { opacity: 0.6 } : undefined
          }
        >
          <Text className="font-poppins-semibold text-[16px] leading-6 text-white">
            {isLoading ? "Creating account..." : "Sign Up"}
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
            className="flex-row items-center border border-border rounded-2xl py-3.5 px-6"
            activeOpacity={0.7}
            onPress={() => handleSSOAuth("oauth_google")}
          >
            <Ionicons name="logo-google" size={20} color="#EA4335" />
            <Text className="font-poppins-medium text-[15px] text-ink flex-1 text-center">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center border border-border rounded-2xl py-3.5 px-6"
            activeOpacity={0.7}
            onPress={() => handleSSOAuth("oauth_facebook")}
          >
            <Ionicons name="logo-facebook" size={20} color="#1877F2" />
            <Text className="font-poppins-medium text-[15px] text-ink flex-1 text-center">
              Continue with Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center border border-border rounded-2xl py-3.5 px-6"
            activeOpacity={0.7}
            onPress={() => handleSSOAuth("oauth_apple")}
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

        {/* Required for Clerk's bot sign-up protection */}
        <View nativeID="clerk-captcha" />
      </ScrollView>

      <VerificationModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        email={email}
        onVerify={handleVerify}
        onResendCode={handleResend}
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
