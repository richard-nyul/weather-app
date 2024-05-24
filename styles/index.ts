import { colors, fontSize } from "../theme/theme";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: fontSize.base,
    color: colors.text,
  },
});

export const currentWeatherStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 20,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    color: colors.text,
    fontSize: fontSize.lg,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: "center",
  },

  button: {
    backgroundColor: colors.mainGradientStart,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 70,
  },
  attrisContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    height: "40%",
    marginTop: 30,
  },
  attris: {
    width: "40%",
    height: "40%",
    margin: 5,
    borderRadius: 10,
    backgroundColor: "rgba(31, 148, 184, 0.2)",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  attritext: {
    fontSize: fontSize.base,
    color: colors.text,
  },
});

export const forecastStyles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  loadingText: {
    fontSize: fontSize.sm,
    color: colors.text,
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    fontSize: fontSize.sm,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  noDataText: {
    fontSize: fontSize.sm,
    color: colors.text,
    textAlign: "center",
    marginTop: 20,
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
  },
  dateText: {
    fontSize: fontSize.sm,
    color: colors.text,
    width: 85,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  tempContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tempText: {
    fontSize: fontSize.sm,
    color: colors.text,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: colors.mainGradientStart,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 70,
  },
});

export const loadingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
