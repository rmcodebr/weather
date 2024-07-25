import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import DataWeatherLight from "../data/DataWeatherLight";
import { getDateDetailsWeatherCivil } from "../data/DataHelper";
import { IMAGESCIVILLIGHT } from "../services/ImageHelper";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DataWeatherLight);
  }, []);
  console.log(data);

  return (
    <View className="mt-10 justify-center items-center">
      <View>
        <Pressable
          onPress={() => navigation.navigate("Detail")}
          className="rounded-md bg-blue-500 p-2"
        >
          <Text className="text-xl">Details</Text>
        </Pressable>
      </View>

      {data ? (
        <View className="w-11/12">
          <ScrollView showsVerticalScrollIndicator={false} className="">
            {data?.dataseries?.map((d, index) => (
              <View key={index}>
                <View className="rounded-md my-4 p-4 bg-indigo-600/10 ">
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
                    <View className="right-10 bottom-10">
                      <Image
                        className="w-52 h-52"
                        resizeMode="contain"
                        source={IMAGESCIVILLIGHT[d.weather]}
                      />
                    </View>

                    <View className="flex-row justify-between items-center">
                      <Image
                        className="w-14 h-14 mr-2 right-6 bottom-8"
                        resizeMode="cover"
                        source={require("../../assets/img/maxMinTemp.png")}
                      />
                      <View className="right-5">
                        <Text className="bottom-10 text-5xl font-semibold text-blue-600">
                          {d.temp2m.max}
                        </Text>
                        <Text className="bottom-5 text-5xl font-semibold text-red-600">
                          {d.temp2m.min}
                        </Text>
                      </View>
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
    </View>
  );
};

export default HomeScreen;
