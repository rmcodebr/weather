export const getWeatherCivilLightData = async (lat, lon) => {
  try {
    let weatherCivilLightResponse = await fetch(
      `https://www.7timer.info/bin/civillight.php?lon=${lon}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`
    );
    let weatherCivilLightData = await weatherCivilLightResponse.json();
    return weatherCivilLightData;
  } catch (error) {
    console.error("Deu ruim getWeatherCivilLightData", error);
    return null;
  }
};
