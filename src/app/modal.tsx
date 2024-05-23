import React, { useEffect } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { getFourDaysForecastWeather } from "@/store/thunks/weathertunks";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/theme/theme";
import { forecastStyles as styles } from "@/styles";
import getDayOfWeek from "@/hooks/getTheDay";

const ForecastModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const forecast = useSelector((state: RootState) => state.fourDaysForecastWeather);

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

  useEffect(() => {
    dispatch(getFourDaysForecastWeather());
  }, []);

  if (forecast.status.isLoading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (forecast.status.hasError) {
    return <Text style={styles.errorText}>Error loading weather data</Text>;
  }

  return (
    <LinearGradient
      colors={[colors.mainGradientStart, colors.mainGradientEnd]}
      style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {forecast.data &&
        forecast.data.forecast &&
        Array.isArray(forecast.data.forecast.forecastday) ? (
          forecast.data.forecast.forecastday.map((day: DayProps) => {
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
          })
        ) : (
          <Text style={styles.noDataText}>No forecast data available</Text>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default ForecastModal;
