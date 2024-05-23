import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCurrentWeather } from "../thunks/weathertunks";

interface CurrentWeatherState {
  data: any;
  status: {
    isLoading: boolean;
    hasError: boolean;
  };
}

const initialState: CurrentWeatherState = {
  data: [],
  status: {
    isLoading: true,
    hasError: false,
  },
};

const currrentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeather.pending, (state: CurrentWeatherState) => {
        state.status.isLoading = true;
        state.status.hasError = false;
      })
      .addCase(
        getCurrentWeather.fulfilled,
        (state: CurrentWeatherState, action: PayloadAction<any>) => {
          state.data = action.payload;
          state.status.isLoading = false;
          state.status.hasError = false;
        },
      )

      .addCase(getCurrentWeather.rejected, (state: CurrentWeatherState) => {
        state.status.isLoading = false;
        state.status.hasError = true;
      });
  },
});

export default currrentWeatherSlice.reducer;
