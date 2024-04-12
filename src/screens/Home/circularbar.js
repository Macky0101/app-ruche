import { View, Text } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import {PieChart} from "react-native-chart-kit";
import * as Animatable from 'react-native-animatable';

const graphStyle = {
  marginVertical: 8,
  borderRadius: 16
};

const Circular = () => {
    const screenWidth = Dimensions.get("window").width;
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#1E2923",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
      const data = [
        {
          name: "Seoul",
          population: 2150,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 12
        },
        {
          name: "Toronto",
          population: 2800,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 12
        },
        {
          name: "Beijing",
          population: 3276,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 12
        },
        {
          name: "New York",
          population: 1538,
          color: "#dddddd",
          legendFontColor: "#7F7F7F",
          legendFontSize: 12
        },
        {
          name: "Moscow",
          population: 1192,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 12
        }
      ];
  return (
    <Animatable.View animation="fadeInUpBig" duration={1500}>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        // center={[10, 50]}
        absolute
      />
    </Animatable.View>
  )
}

export default Circular
