import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



const ListeProjets = () => {
  const navigation = useNavigation();
  
  // État pour stocker le texte de la recherche
  const [searchText, setSearchText] = useState('');
  
  // Fonction de gestion des changements de texte dans la barre de recherche
  const handleSearch = (text) => {
    setSearchText(text);
  };

  // Données de projet simulées
  const projets = [
    { code: '20800202030', titre: 'Gestion Du Projet 1', description: 'Projet de gestion durable des ressources naturelles dequipement ccommunal et des structuration' },
    { code: '20800202031', titre: 'Autre Du Projet 2', description: 'Projet de gestion durable des ressources naturelles dequipement ccommunal et des structuration' },
    { code: '20800202032', titre: 'Titre Du Projet 3', description: 'Projet de gestion durable des ressources naturelles dequipement ccommunal et des structuration' },
  ];

  // Filtrer les projets en fonction du texte de recherche
  const filteredProjets = projets.filter(projet =>
    projet.titre.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.base}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeadingMain}>
            <Text style={styles.sectionHeadingText} numberOfLines={1}>
              Projets
            </Text>
          </View>
        </View>
      {/* Barre de recherche */}
        <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" size={24} color="black" style={styles.searchIcon} />
        <TextInput
            style={styles.searchbar}
            placeholder="Rechercher un projet"
            onChangeText={handleSearch}
            value={searchText}
        />
        </View>
        {/* Liste filtrée des projets */}
        {filteredProjets.map(projet => (
          <TouchableOpacity
            key={projet.code}
            style={styles.card}
            activeOpacity={0.4}
            onPress={() => {
              navigation.navigate('BottomTabNavigator');
            }}
          >
            <View>
              <View style={styles.codeContainer}>
                <Text style={styles.code}>
                  Code : {projet.code}
                </Text>
              </View>
              <View>
                <Text style={styles.title}>
                  {projet.titre}
                </Text>
              </View>
              <View>
                <Text style={styles.desc} numberOfLines={2}>
                  {projet.description}
                </Text>
              </View>
              <View>
                <Text style={styles.plus} numberOfLines={2}>
                  Lire plus
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListeProjets;
