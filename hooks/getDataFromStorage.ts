import AsyncStorage from "@react-native-async-storage/async-storage";

export const getDataFromStorage = async (data: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(data);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
    return null;
  }
};
