import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import DataWeather from "../data/DataWeather";
import {
  addHoursAndExtractInfo,
  addHoursToTimePoint,
  getCloudDescription,
  getLiftedIndex,
  getPrecipitationRate,
  getPrecipitationType,
  getWeatherDescription,
  getWeatherType,
  getWindDescription,
} from "../data/DataHelper";

const HomeScreen = ({ navigation }) => {
  const [dataWeather, setDataWeather] = useState([]);

  useEffect(() => {
    setDataWeather(DataWeather.dataseries);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Pressable
        onPress={() => navigation.navigate("Detail")}
        className="rounded-md bg-blue-500 p-2"
      >
        <Text className="text-xl">Details</Text>
      </Pressable>
      <Text className="text-xl">{DataWeather.init}</Text>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="p-2"
        >
          {dataWeather.map((w, key) => (
            <View key={key} className="p-1">
              <View className="border p-2 bg-slate-300 rounded-md">
                <View>
                  <Text>{w.timepoint}</Text>
                  <Text>
                    {addHoursAndExtractInfo(DataWeather.init, w.timepoint)}
                  </Text>
                  <Text>Tempo: {getWeatherType(w.weather)}</Text>
                  <Text>Descr: {getWeatherDescription(w.weather)}</Text>
                  <Text>Temp: {w.temp2m}</Text>
                  <Text>Humidade: {w.rh2m}</Text>
                  <Text>Nuvem: {getCloudDescription(w.cloudcover)}</Text>
                  <Text>Prec: {getPrecipitationType(w.prec_type)}</Text>
                  <Text>Prec qty: {getPrecipitationRate(w.prec_amount)}</Text>

                  <Text>Vento: {getWindDescription(w.wind10m.speed)}</Text>
                  <Text>Vento dir: {w.wind10m.direction}</Text>
                  <Text>Lifited Index: {getLiftedIndex(w.lifted_index)}</Text>
                  <Text></Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View></View>
    </View>
  );
};

export default HomeScreen;
