import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  email: string;
  onResendCode: () => Promise<void>;
}

export default function VerificationModal({
  visible,
  onClose,
  email,
  onResendCode,
}: Props) {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isResending, setIsResending] = useState(false);
  const [resendError, setResendError] = useState<string | null>(null);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (visible) {
      setCode(["", "", "", "", "", ""]);
      setResendError(null);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }
  }, [visible]);

  const handleChange = (text: string, index: number) => {
    const digit = text.replace(/[^0-9]/g, "").slice(-1);
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);

    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (digit && newCode.every((d) => d !== "")) {
      setTimeout(() => {
        onClose();
        router.replace("/");
      }, 300);
    }
  };

  const handleKeyPress = (
    e: { nativeEvent: { key: string } },
    index: number,
  ) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    setResendError(null);
    try {
      await onResendCode();
    } catch (error) {
      setResendError(
        error instanceof Error ? error.message : "Failed to resend code"
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={onClose}
        />

        <View style={styles.card}>
          {/* Handle bar */}
          <View style={styles.handle} />

          <Text className="h3 text-ink mb-2">Check your email</Text>
          <Text className="body-md text-ink-secondary mb-8">
            We sent a 6-digit code to{" "}
            <Text className="font-poppins-medium text-ink">
              {email || "your email"}
            </Text>
            . Enter it below to continue.
          </Text>

          {/* Code boxes */}
          <View className="flex-row justify-between mb-8">
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                style={[styles.codeBox, digit ? styles.codeBoxFilled : null]}
                textAlign="center"
                selectTextOnFocus
              />
            ))}
          </View>

          {resendError && (
            <Text className="body-sm text-red-500 mb-4 text-center">
              {resendError}
            </Text>
          )}

          <TouchableOpacity
            onPress={handleResend}
            disabled={isResending}
            className="items-center"
          >
            <Text className="body-sm text-ink-secondary">
              Didn't receive it?{" "}
              <Text className="text-primary font-poppins-medium">
                {isResending ? "Sending..." : "Resend"}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 48,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 20,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#e5e7eb",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 24,
  },
  codeBox: {
    width: 48,
    height: 56,
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    fontSize: 22,
    fontFamily: "Poppins-Bold",
    color: "#001132",
    backgroundColor: "#f6f7fb",
  },
  codeBoxFilled: {
    borderColor: "#6c4ef5",
    backgroundColor: "#ffffff",
  },
});
