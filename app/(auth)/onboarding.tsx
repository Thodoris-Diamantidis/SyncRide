import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background glow blob — top centre */}
      <View className="absolute -top-20 self-center w-110 h-110 rounded-full bg-[#E8E0FF]/55" />

      <View className="flex-1 items-center px-6">
        {/* Icon + concentric glow rings */}
        <View className="flex-1 items-center justify-center">
          <View className="w-70 h-70 rounded-full bg-[#EAE4FF]/60 items-center justify-center">
            <View className="w-55 h-55 rounded-full bg-[#DDD4FF]/80 items-center justify-center">
              <Image
                source={images.syncRideIcon}
                className="w-42.5 h-42.5"
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* Heading */}
        <Text className="h1 text-text-primary text-center mt-2">
          Move Together,{"\n"}Arrive Smarter.
        </Text>

        {/* Subtitle */}
        <Text className="body-md text-text-secondary text-center mt-4">
          Real-time social mobility app{"\n"}connecting riders across the city.
        </Text>

        {/* Get Started button */}
        <TouchableOpacity
          className="w-full h-14 rounded-full bg-[#5C4BFF] items-center justify-center mt-10"
          onPress={() => router.push("/(auth)/sign-up")}
          activeOpacity={0.85}
        >
          <Text
            className="text-white text-[17px] font-poppins-semibold"
            style={styles.btnText}
          >
            Get Started
          </Text>
        </TouchableOpacity>

        {/* Version */}
        <Text className="caption text-text-secondary mt-4 mb-3">
          v1.0 - June 2026
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.neutral.background,
  },
  btnText: {
    includeFontPadding: false,
  },
});
