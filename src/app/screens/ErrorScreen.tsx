import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/theme/theme";
import { currentWeatherStyles as styles } from "@/styles";
import { Text } from "react-native-elements";
import { View } from "react-native";

const ErrorScreen = () => {
  return (
    <LinearGradient
      colors={[colors.mainGradientStart, colors.mainGradientEnd]}
      style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.text}>Error loading weather data</Text>
      </View>
    </LinearGradient>
  );
};

export default ErrorScreen;
