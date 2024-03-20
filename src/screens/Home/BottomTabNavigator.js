
import HomeScreen from './HomeScreen';
import PTBAScrenn from '../SuiviPTBA/PTBAScreen';
import MissionSup from '../MissionSup/MissionSupervScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator () {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#009900"
      barStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
    > 
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PTBAScrenn"
        component={PTBAScrenn}
        options={{
          tabBarLabel: 'Suivi',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="timeline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Mission"
        component={MissionSup}
        options={{
          tabBarLabel: 'Mission',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="target" color={color} size={26} />
            // <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigator;