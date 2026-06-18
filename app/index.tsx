import { colors } from "@/constants/theme";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-background px-6">
      <Text className="h2 text-text-primary text-center mb-2">SyncRide</Text>
      <Text className="body-md text-text-secondary text-center mb-10">
        Social ride-sharing companion
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/(auth)/onboarding")}
        activeOpacity={0.85}
      >
        <Text
          className="text-white text-[17px] font-poppins-semibold"
          style={styles.btnText}
        >
          View Onboarding
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 50,
    backgroundColor: colors.brand.deepPurple,
  },
  btnText: {
    includeFontPadding: false,
  },
});
