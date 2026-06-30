import OtpVerificationModal from "@/components/OtpVerificationModal";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  function handleSignIn() {
    if (!email.trim()) return;
    setShowOtp(true);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.kav}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <View className="items-center mt-3">
            <Image
              source={images.syncRideIcon}
              className="w-50 h-50"
              resizeMode="contain"
            />
          </View>

          {/* Heading */}
          <Text className="h1 text-text-primary text-center">
            Welcome Back!
          </Text>
          <Text className="body-md text-text-secondary text-center mt-2">
            Sign in to sync with your crew.
          </Text>

          {/* Email field */}
          <View className="mt-5">
            <Text className="font-poppins-medium text-sm text-text-primary mb-3">
              Email
            </Text>
            <View className="flex-row items-center border-b border-border pb-3">
              <Ionicons
                name="mail-outline"
                size={20}
                color={colors.neutral.textSecondary}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={colors.neutral.textSecondary}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* Sign In button */}
          <TouchableOpacity
            className="w-full h-14.5 rounded-full bg-brand-deep-purple items-center justify-center mt-8"
            onPress={handleSignIn}
            activeOpacity={0.85}
          >
            <Text
              className="text-white text-[17px] font-poppins-semibold"
              style={styles.btnText}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center mt-5">
            <View className="flex-1 h-px bg-border" />
            <Text className="body-sm text-text-secondary mx-3">
              or continue with
            </Text>
            <View className="flex-1 h-px bg-border" />
          </View>

          {/* Google button */}
          <TouchableOpacity
            className="w-full h-13.5 rounded-full bg-white border border-border items-center justify-center mt-3"
            activeOpacity={0.85}
          >
            <View className="flex-row items-center gap-3">
              <Ionicons name="logo-google" size={20} color="#4285F4" />
              <Text className="body-lg text-text-primary font-poppins-semibold">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          {/* Apple button */}
          <TouchableOpacity
            className="w-full h-13.5 rounded-full bg-white border border-border items-center justify-center mt-2"
            activeOpacity={0.85}
          >
            <View className="flex-row items-center gap-3">
              <Ionicons
                name="logo-apple"
                size={22}
                color={colors.neutral.textPrimary}
              />
              <Text className="body-lg text-text-primary font-poppins-semibold">
                Continue with Apple
              </Text>
            </View>
          </TouchableOpacity>

          {/* Footer */}
          <View className="flex-row justify-center mt-5 mb-2">
            <Text className="body-md text-text-secondary">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
              <Text className="body-md font-poppins-semibold text-brand-deep-purple">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <OtpVerificationModal
        visible={showOtp}
        email={email}
        onClose={() => setShowOtp(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.neutral.background,
  },
  kav: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: colors.neutral.textPrimary,
    paddingVertical: 0,
    includeFontPadding: false,
  },
  btnText: {
    includeFontPadding: false,
  },
});
