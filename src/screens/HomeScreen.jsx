import {
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import DataWeatherLight from "../data/DataWeatherLight";

import CivilLightCard from "../components/CivilLightCard";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DataWeatherLight);
  }, []);
  console.log(data);

  return (
    <ImageBackground
      className="flex-1"
      source={require("../../assets/img/weatherDay.png")}
    >
      <View className="mt-10 justify-center items-center">
        <View>
          <Pressable
            onPress={() => navigation.navigate("Detail")}
            className="rounded-md bg-blue-500 p-2"
          >
            <Text className="text-xl">Details</Text>
          </Pressable>
        </View>
        <CivilLightCard />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
