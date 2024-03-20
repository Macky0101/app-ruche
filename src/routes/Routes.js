import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from '../screens/Home/BottomTabNavigator';
import UILogin from '../screens/Login/LoginScreens'; 
import ListeProjets from '../screens/ListProjet/ListProjetScreens';
import SuivreTache from '../screens/SuivreTache/SuivreTacheScrenn';
import SuivreIndicateurs from '../screens/Indicateurs/IndicateursScreen';
import EdMissionScreen from '../screens/EditionMission/EdMissionScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={UILogin} />
        <Stack.Screen name="ListeProjets" component={ListeProjets} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        <Stack.Screen name="SuivreTache" component={SuivreTache} />
        <Stack.Screen name="SuivreIndicateurs" component={SuivreIndicateurs} />
        <Stack.Screen name="EdMissionScreen" component={EdMissionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
