import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { defaultStyles } from "@/styles";
import { Provider } from "react-redux";
import store from "@/store/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";
import ForecastModal from "./modal";

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={defaultStyles.container}>
          <RootNavigation />
          <StatusBar translucent={true} backgroundColor={"transparent"} />
        </View>
      </GestureHandlerRootView>
    </Provider>
  );
};

const RootNavigation = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            headerShown: true,
            gestureEnabled: true,
            gestureDirection: "vertical",
            title: "Forecast",
          }}
        />
      </Stack>
    </View>
  );
};

export default App;
