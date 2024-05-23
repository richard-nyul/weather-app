import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentWeather = createAsyncThunk("currentWeather/get", async () => {
  try {
    // cors link if not working
    // https://cors-anywhere.herokuapp.com/
    const data = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=0718c220c5794c42b25124208241605&q=Budapest&aqi=no",
    );
    const result = await data.json();
    return result;
  } catch (error) {
    console.error(error);
  }
});

export const getFourDaysForecastWeather = createAsyncThunk("currentWeather/get", async () => {
  try {
    const data = await fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=0718c220c5794c42b25124208241605&q=Budapest&days=4",
    );
    const result = await data.json();
    return result;
  } catch (error) {
    console.error(error);
  }
});
