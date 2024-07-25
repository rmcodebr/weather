export const getWeatherData = async (lat, lon) => {
  try {
    let weatherResponse = await fetch(
      `https://www.7timer.info/bin/civil.php?lon=${lon}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`
    );
    let weatherData = await weatherResponse.json();
    return weatherData;
  } catch (error) {
    console.error("Deu ruim getWeatherData", error);
    return null;
  }
};
