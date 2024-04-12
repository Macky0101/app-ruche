import { View, Text } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import {BarChart} from "react-native-chart-kit";
import * as Animatable from 'react-native-animatable';

const graphStyle = {
  marginVertical: 0,
  
};

const Barcharts = () => {
    const screenWidth = Dimensions.get("window").width;
    const chartConfig = {
        background: "#ffffff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#ffffff",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      };
  return (
    <Animatable.View animation="fadeInUpBig" duration={1500}>
      <BarChart
        style={graphStyle}
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        />
    </Animatable.View>
  )
}

export default Barcharts
