import { configureStore } from "@reduxjs/toolkit";
import currentWeatherSlice from "./slices/CurrentWeatherSlice";
import FourDaysForecastWeatherSlice from "./slices/FourDaysForecastWeatherSlice";

const isDevelopment = process.env.NODE_ENV === "development";

const store = configureStore({
  reducer: {
    currentWeather: currentWeatherSlice,
    fourDaysForecastWeather: FourDaysForecastWeatherSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: isDevelopment ? false : true,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
