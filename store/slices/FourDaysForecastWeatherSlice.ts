import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getFourDaysForecastWeather } from "../thunks/weathertunks";

interface FourDaysForecastWeatherState {
  data: any;
  status: {
    isLoading: boolean;
    hasError: boolean;
  };
}

const initialState: FourDaysForecastWeatherState = {
  data: [],
  status: {
    isLoading: true,
    hasError: false,
  },
};

const FourDaysForecastWeatherSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFourDaysForecastWeather.pending, (state: FourDaysForecastWeatherState) => {
        state.status.isLoading = true;
        state.status.hasError = false;
      })
      .addCase(
        getFourDaysForecastWeather.fulfilled,
        (state: FourDaysForecastWeatherState, action: PayloadAction<any>) => {
          state.data = action.payload;
          state.status.isLoading = false;
          state.status.hasError = false;
        },
      )

      .addCase(getFourDaysForecastWeather.rejected, (state: FourDaysForecastWeatherState) => {
        state.status.isLoading = false;
        state.status.hasError = true;
      });
  },
});

export default FourDaysForecastWeatherSlice.reducer;
