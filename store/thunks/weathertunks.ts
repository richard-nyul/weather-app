import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCurrentWeather = createAsyncThunk("currentWeather/get", async () => {
  try {
    // cors link if not working
    // https://cors-anywhere.herokuapp.com/
    const data = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=0718c220c5794c42b25124208241605&q=Budapest&aqi=no",
    );
    const result = await data.json();
    if (result.loaction) {
      const jsonValue = JSON.stringify(result);
      await AsyncStorage.setItem("current-weather-data", jsonValue);
      return result;
    }
    throw new Error();
  } catch (error) {
    throw new Error();
  }
});

export const getFourDaysForecastWeather = createAsyncThunk("forecastWeather/get", async () => {
  try {
    const data = await fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=0718c220c5794c42b25124208241605&q=Budapest&days=4",
    );
    const result = await data.json();
    if (result.loaction) {
      const jsonValue = JSON.stringify(result);
      await AsyncStorage.setItem("forecast-weather-data", jsonValue);
      return result;
    }
    throw new Error();
  } catch (error) {
    throw new Error();
  }
});
