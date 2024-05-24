import React from "react";
import { ActivityIndicator, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/theme/theme";
import { loadingScreenStyles as styles } from "@/styles";

const LoadingScreen = () => {
  return (
    <LinearGradient
      colors={[colors.mainGradientStart, colors.mainGradientEnd]}
      style={styles.container}>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    </LinearGradient>
  );
};

export default LoadingScreen;
