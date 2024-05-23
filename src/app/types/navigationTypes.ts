import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  CurrentScreen: undefined;
  forecastModal: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
