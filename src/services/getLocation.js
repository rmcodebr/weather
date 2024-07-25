import * as Location from "expo-location";

export const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    setErrorMsg("Permission to access location was denied");
    return;
  }
  try {
    let location = await Location.getCurrentPositionAsync({});

    return location;
  } catch (error) {
    console.error("Deu Ruim na localização", error);
    return null;
  }
};
