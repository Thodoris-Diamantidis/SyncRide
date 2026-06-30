import { colors } from "@/constants/theme";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const OTP_LENGTH = 6;
const AUTH_PURPLE = "#8B2FC9";

type Props = {
  visible: boolean;
  email: string;
  onClose: () => void;
};

export default function OtpVerificationModal({ visible, email, onClose }: Props) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);
  // Guard: prevents onRequestClose firing twice mid-close on some Android versions
  const isClosing = useRef(false);

  useEffect(() => {
    if (visible) {
      isClosing.current = false;
      setCode("");
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  function dismiss() {
    if (isClosing.current) return;
    isClosing.current = true;
    Keyboard.dismiss();
    onClose();
  }

  function handleChange(value: string) {
    const cleaned = value.replace(/\D/g, "").slice(0, OTP_LENGTH);
    setCode(cleaned);
    if (cleaned.length === OTP_LENGTH) {
      Keyboard.dismiss();
      setTimeout(() => {
        onClose();
        router.replace("/");
      }, 200);
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={dismiss}
      statusBarTranslucent
    >
      {/*
        KeyboardAvoidingView with behavior=undefined on Android:
        Android's system keyboard management inside a Modal is sufficient.
        Enabling it here creates competing layout passes that cause flickering
        when the slide animation and keyboard dismiss run simultaneously.
      */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.overlay}
      >
        <TouchableOpacity
          style={styles.backdrop}
          onPress={dismiss}
          activeOpacity={1}
        />
        <View style={styles.sheet}>
          <View style={styles.handle} />

          <Text className="h3 text-text-primary text-center mb-2">
            Check your email!
          </Text>
          <Text className="body-md text-text-secondary text-center mb-8">
            We sent a 6-digit code to{"\n"}
            <Text
              className="body-md font-poppins-semibold"
              style={{ color: colors.neutral.textPrimary }}
            >
              {email || "your email"}
            </Text>
          </Text>

          {/* Hidden number-pad input captures all typing */}
          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleChange}
            keyboardType="number-pad"
            maxLength={OTP_LENGTH}
            style={styles.hiddenInput}
            caretHidden
          />

          {/* Digit display boxes */}
          <TouchableOpacity
            style={styles.digitRow}
            onPress={() => inputRef.current?.focus()}
            activeOpacity={1}
          >
            {Array.from({ length: OTP_LENGTH }).map((_, i) => (
              <View
                key={i}
                style={[
                  styles.digitBox,
                  code.length === i && styles.digitBoxActive,
                  i < code.length && styles.digitBoxFilled,
                ]}
              >
                <Text style={styles.digitText}>{code[i] ?? ""}</Text>
              </View>
            ))}
          </TouchableOpacity>

          <Text className="body-sm text-text-secondary text-center mt-6">
            Didn't receive a code?{" "}
            <Text
              className="body-sm font-poppins-semibold"
              style={{ color: AUTH_PURPLE }}
            >
              Resend
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  sheet: {
    backgroundColor: colors.neutral.background,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 12,
    paddingHorizontal: 28,
    paddingBottom: 52,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.neutral.border,
    alignSelf: "center",
    marginBottom: 28,
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
  digitRow: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  digitBox: {
    width: 46,
    height: 56,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.neutral.border,
    backgroundColor: colors.neutral.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  digitBoxActive: {
    borderColor: AUTH_PURPLE,
    backgroundColor: "#F5EEFF",
  },
  digitBoxFilled: {
    borderColor: AUTH_PURPLE,
    backgroundColor: colors.neutral.background,
  },
  digitText: {
    fontSize: 22,
    fontFamily: "Poppins-SemiBold",
    color: colors.neutral.textPrimary,
    includeFontPadding: false,
  },
});
