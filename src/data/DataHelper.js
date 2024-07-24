const prec_amount = [
  { index: 1, description: "0%-6%" },
  { index: 2, description: "6%-19%" },
  { index: 3, description: "19%-31%" },
  { index: 4, description: "31%-44%" },
  { index: 5, description: "44%-56%" },
  { index: 6, description: "56%-69%" },
  { index: 7, description: "69%-81%" },
  { index: 8, description: "81%-94%" },
  { index: 9, description: "94%-100%" },
];

export function getCloudDescription(index) {
  const item = prec_amount.find((item) => item.index == index);
  return item ? item.description : "Description not found";
}

const wind_speed = [
  { index: 1, description: " 0.3m/s (calm)" },
  { index: 2, description: "0.3-3.4m/s (light)" },
  { index: 3, description: "3.4-8.0m/s (moderate)" },
  { index: 4, description: "8.0-10.8m/s (fresh)" },
  { index: 5, description: "10.8-17.2m/s (strong)" },
  { index: 6, description: "17.2-24.5m/s (gale)" },
  { index: 7, description: "24.5-32.6m/s (storm)" },
  { index: 8, description: "Over 32.6m/s (hurricane)" },
];

export function getWindDescription(index) {
  const item = wind_speed.find((item) => item.index == index);
  return item ? item.description : "Description not found";
}

const precipitation_type = [
  { index: "snow", description: "Snow" },
  { index: "rain", description: "Rain" },
  { index: "frzr", description: "Freezing rain" },
  { index: "icep", description: "Ice pellets" },
  { index: "none", description: "None" },
];

export function getPrecipitationType(index) {
  const item = precipitation_type.find((item) => item.index == index);
  return item ? item.description : "Description not found";
}

const precipitation_rate = [
  { index: "0", description: "None" },
  { index: "1", description: "0-0.25mm/hr" },
  { index: "2", description: "0.25-1mm/hr" },
  { index: "3", description: "1-4mm/hr" },
  { index: "4", description: "4-10mm/hr" },
  { index: "5", description: "10-16mm/hr" },
  { index: "6", description: "16-30mm/hr" },
  { index: "7", description: "30-50mm/hr" },
  { index: "8", description: "50-75mm/hr" },
  { index: "9", description: "Over 75mm/hr" },
];

export function getPrecipitationRate(index) {
  const item = precipitation_rate.find((item) => item.index == index);
  return item ? item.description : "Description not found";
}

const weather_type = [
  { index: "clearday", description: "clearnight" },
  { index: "pcloudyday", description: "pcloudynight" },
  { index: "mcloudyday", description: "mcloudynight" },
  { index: "cloudyday", description: "cloudynight" },
  { index: "humidday", description: "humidnight" },
  { index: "lightrainday", description: "lightrainnight" },
  { index: "oshowerday", description: "oshowernight" },
  { index: "ishowerday", description: "ishowernight" },
  { index: "lightsnowday", description: "lightsnownight" },
  { index: "rainday", description: "rainnight" },
  { index: "snowday", description: "snownight" },
  { index: "rainsnowday", description: "rainsnownight" },
  { index: "tsday", description: "tsnight" },
  { index: "tsrainday", description: "tsrainnight" },
];

export function getWeatherType(index) {
  const item = weather_type.find((item) => item.index == index);
  return item ? item.description : "Description not found";
}

const weather_description = [
  { index: "clearday", description: "Total cloud cover less than 20%" },
  { index: "pcloudyday", description: "Total cloud cover between 20%-60%" },
  { index: "mcloudyday", description: "Total cloud cover between 60%-80%" },
  { index: "cloudyday", description: "Total cloud cover over over 80%" },
  {
    index: "humidday",
    description:
      "Relative humidity over 90% with total cloud cover less than 60%",
  },
  {
    index: "lightrainday",
    description:
      "Precipitation rate less than 4mm/hr with total cloud cover more than 80%",
  },
  {
    index: "oshowerday",
    description:
      "Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%",
  },
  {
    index: "ishowerday",
    description:
      "Precipitation rate less than 4mm/hr with total cloud cover less than 60%",
  },
  { index: "lightsnowday", description: "Precipitation rate less than 4mm/hr" },
  { index: "rainday", description: "Precipitation rate over 4mm/hr" },
  { index: "snowday", description: "Precipitation rate over 4mm/hr" },
  {
    index: "rainsnowday",
    description: "Precipitation type to be ice pellets or freezing rain",
  },
  {
    index: "tsday",
    description:
      "Lifted Index less than -5 with precipitation rate below 4mm/hr",
  },
  {
    index: "tsrainday",
    description:
      "Lifted Index less than -5 with precipitation rate over 4mm/hr",
  },
];

export function getWeatherDescription(index) {
  const item = weather_description.find((item) => item.index == index);
  return item ? item.description : "Description not found";
}

const lifited_index = [
  { index: "-10", description: "Below -7" },
  { index: "-6", description: "-7 to -5" },
  { index: "-4", description: "-5 to -3" },
  { index: "-1", description: "-3 to 0" },
  { index: "2", description: "0 to 4" },
  { index: "6", description: "4 to 8" },
  { index: "10", description: "8 to 11" },
  { index: "15", description: "	Over 11" },
];

export function getLiftedIndex(index) {
  const item = lifited_index.find((item) => item.index == index);
  return item ? item.description : "Description not found";
}

export function addHoursToTimePoint(initialDateStr, hoursToAdd) {
  // Parse the initial date and time string
  const initialDate = new Date(
    `${initialDateStr.slice(0, 4)}-${initialDateStr.slice(
      4,
      6
    )}-${initialDateStr.slice(6, 8)}T${initialDateStr.slice(8, 10)}:00:00`
  );

  // Add hours to the date
  const newDate = new Date(initialDate.getTime() + hoursToAdd * 60 * 60 * 1000);

  // Format the new date to "YYYYMMDDHH" format
  const formattedDate = `${newDate.getFullYear()}${String(
    newDate.getMonth() + 1
  ).padStart(2, "0")}${String(newDate.getDate()).padStart(2, "0")}${String(
    newDate.getHours()
  ).padStart(2, "0")}`;

  return formattedDate;
}

export function extractDateInfo(dateStr) {
  // Parse the initial date and time string into a JavaScript Date object
  const date = new Date(
    `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(
      6,
      8
    )}T${dateStr.slice(8, 10)}:00:00`
  );

  // Extract year, month, day, hour, and day of the week
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are 0-based in JavaScript
  const day = date.getDate();
  const hour = date.getHours();
  const dayOfWeek = date.toLocaleDateString("pt-BR", { weekday: "long" }); // Full name of the day of the week

  return {
    year,
    month,
    day,
    hour,
    dayOfWeek,
  };
}

export function addHoursAndExtractInfo(dateStr, hoursToAdd) {
  // Parse the initial date and time string into a JavaScript Date object
  const initialDate = new Date(
    `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(
      6,
      8
    )}T${dateStr.slice(8, 10)}:00:00`
  );

  // Add hours to the date
  const newDate = new Date(initialDate.getTime() + hoursToAdd * 60 * 60 * 1000);

  // Extract year, month, day, hour, and day of the week
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1; // Months are 0-based in JavaScript
  const descMonth = newDate.toLocaleDateString("pt-BR", { month: "long" });
  const day = newDate.getDate();
  const hour = newDate.getHours();
  const dayOfWeek = newDate.toLocaleDateString("pt-BR", { weekday: "long" }); // Full name of the day of the week

  return [`${hour}h - ${dayOfWeek}, dia ${day} de ${descMonth} de ${year}`];
}
