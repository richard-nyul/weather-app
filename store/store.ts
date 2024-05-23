import { configureStore } from "@reduxjs/toolkit";
import currentWeatherSlice from "./slices/CurrentWeatherSlice";
import FourDaysForecastWeatherSlice from "./slices/FourDaysForecastWeatherSlice";

const store = configureStore({
  reducer: {
    currentWeather: currentWeatherSlice,
    fourDaysForecastWeather: FourDaysForecastWeatherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
