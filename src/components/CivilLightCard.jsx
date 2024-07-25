import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import DataWeatherLight from "../data/DataWeatherLight";
import { getDateDetailsWeatherCivil } from "../data/DataHelper";
import { IMAGESCIVILLIGHT } from "../services/ImageHelper";

const CivilLightCard = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DataWeatherLight);
  }, []);
  console.log(data);

  return (
    <>
      {data ? (
        <View className="w-11/12">
          <ScrollView showsVerticalScrollIndicator={false} className="">
            {data?.dataseries?.map((d, index) => (
              <View key={index}>
                <View className="rounded-xl my-4 p-4 bg-slate-700/40 shadow-md ">
                  <View className="flex-row p-2 justify-between items-center rounded-md bg-slate-500/10">
                    <Text className="text-3xl font-semibold">
                      {getDateDetailsWeatherCivil(d.date).weekday}
                    </Text>
                    <View className="items-center">
                      <Text className="text-4xl font-semibold">
                        {getDateDetailsWeatherCivil(d.date).day}
                      </Text>
                      <Text className="text-2xl">
                        de {getDateDetailsWeatherCivil(d.date).month}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row justify-between">
                    <View className="right-5">
                      <Image
                        className="w-52 h-52"
                        resizeMode="contain"
                        source={IMAGESCIVILLIGHT[d.weather]}
                      />
                    </View>

                    <View className="flex-row justify-between items-center">
                      <Image
                        className="w-14 h-14 mr-2 right-6"
                        resizeMode="cover"
                        source={require("../../assets/img/maxMinTemp.png")}
                      />
                      <View className="right-5">
                        <Text className="text-5xl font-bold text-red-500">
                          {d.temp2m.max}
                        </Text>
                        <Text className="text-5xl font-bold text-blue-700">
                          {d.temp2m.min}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View className="flex-1 flex-row justify-evenly items-center">
                      <Image
                        className="h-15 w-15"
                        source={require("../../assets/img/windy.png")}
                      />
                      <Text className="text-4xl font-semibold">
                        {d.wind10m_max * 3.6}{" "}
                        <Text className="text-2xl">km/h</Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </>
  );
};

export default CivilLightCard;
