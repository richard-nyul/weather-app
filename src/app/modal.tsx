import React, { useEffect } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { getFourDaysForecastWeather } from "@/store/thunks/weathertunks";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/theme/theme";
import { forecastStyles as styles } from "@/styles";
import getDayOfWeek from "@/hooks/getTheDay";
import LoadingScreen from "./screens/LoadingScreen";
import ErrorScreen from "./screens/ErrorScreen";
import { getDataFromStorage } from "@/hooks/getDataFromStorage";
import { useState } from "react";

const ForecastModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const forecast = useSelector((state: RootState) => state.fourDaysForecastWeather);

  const [localWeatherData, setLocalWeatherData] = useState(null);
  interface DayProps {
    date: string;
    day: {
      mintemp_c: number;
      maxtemp_c: number;
      condition: {
        icon: string;
      };
    };
  }

  const fetchData = async () => {
    const data = await getDataFromStorage("forecast-weather-data");
    setLocalWeatherData(data);
  };

  useEffect(() => {
    dispatch(getFourDaysForecastWeather());
  }, []);

  useEffect(() => {
    if (forecast.status.hasError) {
      fetchData();
    }
  }, [forecast.status.hasError]);

  if (forecast.status.isLoading) {
    return <LoadingScreen />;
  }

  if (forecast.status.hasError && !localWeatherData) {
    return <ErrorScreen />;
  }

  const weatherData = localWeatherData || forecast.data;

  if (!weatherData) {
    return null;
  }

  return (
    <LinearGradient
      colors={[colors.mainGradientStart, colors.mainGradientEnd]}
      style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {weatherData.forecast &&
          weatherData.forecast.forecastday.map((day: DayProps) => {
            const { mintemp_c, maxtemp_c } = day.day;
            const { icon } = day.day.condition;

            return (
              <View key={day.date} style={styles.dayContainer}>
                <View>
                  <Text style={styles.dateText}>{getDayOfWeek(day.date)}</Text>
                </View>
                <View>
                  <Image source={{ uri: `https:${icon}` }} style={styles.icon} />
                </View>
                <View style={styles.tempContainer}>
                  <Text style={styles.tempText}>min: {mintemp_c}°</Text>
                  <Text style={styles.tempText}>max: {maxtemp_c}°</Text>
                </View>
              </View>
            );
          })}
      </ScrollView>
    </LinearGradient>
  );
};

export default ForecastModal;
