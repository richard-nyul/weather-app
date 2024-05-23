import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { getCurrentWeather } from "@/store/thunks/weathertunks";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-elements";
import { colors } from "@/theme/theme";
import { currentWeatherStyles as styles } from "@/styles";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { RootStackNavigationProp } from "@/src/app/types/navigationTypes";

const CurrentScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentWeather = useSelector((state: RootState) => state.currentWeather);
  // const navigation = useNavigation<RootStackNavigationProp>();
  const navigation = useRouter();

  useEffect(() => {
    dispatch(getCurrentWeather());
  }, []);

  if (currentWeather.status.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (currentWeather.status.hasError) {
    return <Text>Error loading weather data</Text>;
  }

  const { name } = currentWeather.data.location;
  const { temp_c, feelslike_c, wind_kph, precip_mm, uv, humidity, cloud } =
    currentWeather.data.current;
  const { text, icon } = currentWeather.data.current.condition;

  const attris = [
    { name: feelslike_c, logo: "🌡️", unit: "°C" },
    { name: wind_kph, logo: "🌪️", unit: "kph" },
    { name: precip_mm, logo: "☔", unit: "mm" },
    { name: uv, logo: "☀️", unit: "" },
    { name: humidity, logo: "💧", unit: "%" },
    { name: cloud, logo: "☁️", unit: "%" },
  ];

  return (
    <LinearGradient
      colors={[colors.mainGradientStart, colors.mainGradientEnd]}
      style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.text}>{name}</Text>
          <Image source={{ uri: `https:${icon}` }} style={styles.image} />
          <Text style={styles.text}>{temp_c} °C</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.attrisContainer}>
          {attris.map((attri, index) => (
            <View key={index} style={styles.attris}>
              <Text style={styles.text}>{attri.logo}</Text>
              <Text style={styles.attritext}>
                {attri.name} {attri.unit}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="4 Day Forecast"
            buttonStyle={styles.button}
            onPress={() => navigation.push("/modal")}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CurrentScreen;
