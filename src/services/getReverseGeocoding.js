export const getReverseGeocoding = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=pt`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Deu Ruim reverseGeocoding", error);
  }
};
