import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from '../screens/Home/BottomTabNavigator';
import UILogin from '../screens/Login/LoginScreens'; 
import ListeProjets from '../screens/ListProjet/ListProjetScreens';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={UILogin} />
        <Stack.Screen name="ListeProjets" component={ListeProjets} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
