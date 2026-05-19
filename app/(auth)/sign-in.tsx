import VerificationModal from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { useSignIn, useSSO } from "@clerk/expo";
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

export default function SignInScreen() {
  const router = useRouter();
  const { signIn, errors, fetchStatus } = useSignIn();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setFormError(null);
    try {
      const { error } = await signIn.emailCode.sendCode({
        emailAddress: email,
      });
      if (error) {
        setFormError(error.longMessage ?? error.message);
        return;
      }
      setShowModal(true);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again.";
      setFormError(message);
    }
  };

  const handleVerify = async (code: string) => {
    try {
      const { error } = await signIn.emailCode.verifyCode({ code });
      if (error) {
        throw new Error(error.longMessage ?? error.message);
      }

      // Handle different sign-in states after code verification
      switch (signIn.status) {
        case "complete":
          // Code verified successfully, finalize the session
          await signIn.finalize({
            navigate: ({ session, decorateUrl }) => {
              if (session?.currentTask) return;
              const url = decorateUrl("/");
              router.replace(url as Href);
            },
          });
          break;

        case "needs_second_factor":
          // MFA required - keep modal open and show appropriate message
          throw new Error(
            "Two-factor authentication required. Please check your authenticator or email for the second factor.",
          );

        default:
          // Unexpected status - log and raise error to prevent silent failures
          console.warn(`Unexpected sign-in status: ${signIn.status}`);
          throw new Error(
            `Authentication state not ready. Current state: ${signIn.status}. Please try again or contact support.`,
          );
      }
    } catch (err) {
      throw err instanceof Error
        ? err
        : new Error("Verification failed. Please try again.");
    }
  };

  const handleResend = async () => {
    try {
      const { error } = await signIn.emailCode.sendCode({
        emailAddress: email,
      });
      if (error) {
        throw new Error(error.longMessage ?? error.message);
      }
    } catch (err) {
      throw err instanceof Error
        ? err
        : new Error("Failed to resend code. Please try again.");
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
      } else if (createdSessionId) {
        // Session created but setActive unavailable - unexpected state
        setFormError("Authentication incomplete. Please try again.");
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
          <Text className="h2 text-ink">Welcome back</Text>
          <Text className="body-md text-ink-secondary mt-1">
            Sign in to continue your journey ✨
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
        <View className="border border-border rounded-2xl px-4 pt-3 pb-3 mb-6">
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
        {errors?.fields?.identifier?.message && (
          <Text className="body-sm text-red-500 -mt-5 mb-3 px-1">
            {errors.fields.identifier.message}
          </Text>
        )}

        {formError && (
          <Text className="body-sm text-red-500 mb-4 text-center">
            {formError}
          </Text>
        )}

        {/* Sign In button */}
        <TouchableOpacity
          className="bg-primary rounded-[20px] py-4 items-center mb-6"
          activeOpacity={0.85}
          onPress={handleSignIn}
          disabled={!email || isLoading}
          style={!email || isLoading ? { opacity: 0.6 } : undefined}
        >
          <Text className="font-poppins-semibold text-[16px] leading-6 text-white">
            {isLoading ? "Sending code..." : "Sign In"}
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
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => router.replace("/(auth)/sign-up")}
            activeOpacity={0.7}
          >
            <Text className="body-sm text-primary font-poppins-semibold">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
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
