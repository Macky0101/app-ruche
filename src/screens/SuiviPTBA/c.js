import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList , ScrollView, Modal , TextInput,KeyboardAvoidingView, Platform} from 'react-native';
import { Tab, TabView } from '@rneui/themed';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import ProgressCircle from 'react-native-progress-circle';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
const HomesScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const tabContents = {
    initial_2021: "Contenu de l'onglet 'Recent'",
    initial_2022: "Contenu de l'onglet 'Favorite'",
    initial_2023: "Contenu de l'onglet 'Cart'",
    initial_2024: "Contenu de l'onglet 'Cart'",
    initial_2025: "Contenu de l'onglet 'Cart'",
  };

  const tabTitles = Object.keys(tabContents);
  const Mission = ["Mission 1", "Mission 2", "Mission 3", "Mission 4"];

  const getColorBasedOnPercentage = (percent) => {
    if (percent >= 75) {
      return "#009900"; 
    } else if (percent >= 40) {
      return "#FFFF00"; 
    } else {
      return "#FF0000";
    }
  };



  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.sectionHeading}>
        <View style={styles.sectionHeadingMain}>
          <View style={styles.headerText}>
            <Text style={styles.sectionHeadingText} numberOfLines={1}>
              Mission supervision
            </Text>
            <TouchableOpacity
              style={{ marginLeft: 60, borderRadius: 50 }}  
              onPress={() => navigation.navigate('EdMissionScreen')}
            >
              <Icon name="add" size={30} color="#fff" style={styles.addIcon}/>  
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flex: 1, maxHeight: 50,  }}>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            height: 3,
          }}
          variant="primary"
        >
          {tabTitles.map((title, tabIndex) => (
            <Tab.Item
              key={tabIndex}
              title={title}
              titleStyle={{ fontSize: 14 }}
              onPress={() => setIndex(tabIndex)}
              containerStyle={{ backgroundColor: '#009900'}} 
            />
          ))}
        </Tab>
      </ScrollView>

      <TabView value={index} onChange={setIndex} animationType="spring" style={{ flexDirection: 'row' }}>
        {tabTitles.map((title, tabIndex) => (
          <TabView.Item key={tabIndex} style={{ width: '100%' }}>
            <View style={styles.contentContainer}>
                <Text>{tabContents[title]}</Text>
            </View>
          </TabView.Item>
        ))}
      </TabView>
    </SafeAreaView>
  );
};

export default HomesScreen;
