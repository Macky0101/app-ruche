import { useState } from 'react';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView , FlatList ,TouchableOpacity, Modal, Button, TextInput} from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Tab, TabView } from '@rneui/themed';


const PTBAScrenn = () => {
  const [index, setIndex] = useState(0);
  const tabContents = {
    initial_2021: "Contenu de l'onglet 'Recent'",
    initial_2022: "Contenu de l'onglet 'Favorite'",
    initial_2023: "Contenu de l'onglet 'Cart'",
    initial_2024: "Contenu de l'onglet 'Cart'",
    initial_2025: "Contenu de l'onglet 'Cart'",
  };
  const tabTitles = Object.keys(tabContents);

  // État pour stocker le texte de la recherche
  const [searchText, setSearchText] = useState('');


  const [isModalVisible, setIsModalVisible] =useState(false);
  // const [number, onChangeNumber] = React.useState('');
  const [executant, onChangeExecutant] = React.useState('');
  const [observation, onChangeObservation] = React.useState('');
  // const [selectedStatut, setSelectedStatut] = useState(null);
  const resetFormFields = () => {
    onChangeExecutant('');
    onChangeObservation('');
    // setSelectedStatut(null); 
  };

    const navigation = useNavigation();
    const SousComp = ["sous-composante 1", "sous-composante 2", "sous-composante 3", "sous-composante 4"];
    const Statut = ["Géré par le système", "Reporte", "Incertain", "annulé"];

    const getColorByPercentage = (Tache, indicateur) => {
        if (Tache >= 70) {
          return '#009900'; 
        } else if (indicateur  >= 70 ){
            return '#009900';
        } else if (indicateur  >= 30 ){
            return '#ffff00';
        } else if (Tache >= 30) {
          return '#ffff00'; 
        } else {
          return '#ff0000'; 
        }
      };

      const getColorObservations = (Observations)=>{
        if(Observations==='Nom exécutée'){
            return '#ff0000';
        } else if (Observations==='Exécutée') {
            return '#009900';
        } else{
            return '#F89405';
        }
      }
      

    const data=[
        {
            id: '1',
code:1211,
            Activite:'Identification et mise en place de sites CEP (y compris aménagements, équipements et outils de démonstration)',
            Acteurs: 'EGRN- PROGRES/',
            Tache: 20,
            Indicateurs: 40,
            preriode: 'Avr - Aout',
            Observations:'Nom exécutée',
        },
        {
            id: '2',
code:3111,
            Activite:'Identification et mise en place de sites CEP (y compris aménagements, équipements et outils de démonstration)',
            Acteurs: 'EGRN- PROGRES/',
            Tache: 50,
            Indicateurs: 70,
            preriode: 'Avr - Aout',
            Observations:'Exécutée'
        },
        {
            id: '3',
            code:4411,
            Activite:'Identification et mise en place de sites CEP (y compris aménagements, équipements et outils de démonstration)',
            Acteurs: 'EGRN- PROGRES/',
            Tache: 28,
            Indicateurs: 100,
            preriode: 'Avr - Aout',
            Observations:'En cours'
        },
    ];
 // Fonction de gestion des changements de texte dans la barre de recherche
 const handleSearch = (text) => {
  setSearchText(text);
};

const filteredData = data.filter(item =>
  item.code.toString().includes(searchText.toLowerCase())
);



    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
      <View>
        <View style={styles.item}>
          <View style={styles.codeContainer}>
                <Text style={styles.code}>
                  Code : {item.code}
                </Text>
           </View>
        <View style={styles.headerCard}>
            <Text style={styles.titleCard}>
                Activités
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(true);
                resetFormFields()}}
            >
                <View style={[styles.ObservContainer, { backgroundColor: getColorObservations(item.Observations) }]}>
                  <Text style={styles.Obser}>
                      {item.Observations}
                  </Text>
                </View>
            </TouchableOpacity>
          <Modal
           visible={isModalVisible}
           onRequestClose={() => {
            setIsModalVisible(false);
            resetFormFields();
          }}
           animationType="slide"
           presentationStyle="pageSheet"
          >
            <View style={{flex:1, backgroundColor:"light",paddingTop:50,paddingLeft:20,paddingRight:20}}>
               <TouchableOpacity
                    style={{ position: 'absolute', top: 10, right: 10 }}  
                    onPress={() => setIsModalVisible(false)}
                >
                    <Icon name="close" size={30} color="#000" />  
                </TouchableOpacity>
              <Text style={styles.ModalTitle}>Observation</Text>
              <Text style={styles.ModalText}> Protection (grillage) sites cordon et seuis en gabion</Text>
              {/* imput */}
              <View style={styles.MesInput}>
                <Text style={styles.label}>Exécutant</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeExecutant}
                      value={executant}
                      placeholder=""
                      keyboardType="default"
                    />
                <Text style={styles.label}>Statut</Text>
                <View style={styles.dropdownContainer}>
                  <SelectDropdown
                    data={Statut}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                      // setSelectedStatut(selectedItem); 
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                    defaultButtonText={
                      <Text style={styles.placeholderText}>
                        Veuillez sélectionner le Statut
                      </Text>
                    }
                    buttonStyle={styles.dropdownButton}
                    dropdownStyle={styles.dropdown}
                  />
                </View>
                <Text style={styles.label}>Observation</Text>
                  <TextInput
                      style={styles.textarea}
                      onChangeText={onChangeObservation}
                      value={observation}
                      placeholder="Entrez votre texte ici"
                      multiline={true}
                      numberOfLines={4} 

                    />
                  <View style={styles.btn}>
                  <TouchableOpacity
                    onPress={()=> console.log('clic')}
                    >
                      <Text style={styles.TextBtn}>Modifier</Text>
                    </TouchableOpacity>
                  </View>
              </View>
              {/* imput */}
            </View>
          </Modal>
         

        </View>
        <Text numberOfLines={5} ellipsizeMode="tail">{item.Activite}</Text>
        <Text style={styles.titleCard}>Acteurs</Text>
        <Text>{item.Acteurs}</Text>
        <View style={styles.tacheSuivre}>
        <Text style={styles.titleCard}>Tâches</Text>
        <TouchableOpacity
          style={styles.SuivreCard}
          onPress={() => navigation.navigate('SuivreTache', { id: item.id })}
        >
          <Text style={styles.SuivreCard}>Suivre Tâche</Text>
        </TouchableOpacity>
        </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressBarValueWrap, { width: `${item.Tache}%`, backgroundColor: getColorByPercentage(item.Tache) }]}>
              <Text style={styles.progressBarValue}>{item.Tache}%</Text>
            </View>
          </View>
         <View style={styles.tacheSuivre}>
            <Text style={styles.titleCard}>Indicateurs</Text>
            <TouchableOpacity
              style={styles.SuivreCard}
              onPress={() => navigation.navigate('SuivreIndicateurs', { id: item.id })}
            >
              <Text style={styles.SuivreCard}>Suivre Indicateurs</Text>
            </TouchableOpacity>
         </View>

          <View style={styles.progressBar}>
            <View style={[styles.progressBarValueWrap, { width: `${item.Indicateurs}%`, backgroundColor: getColorByPercentage(item.Indicateurs) }]}>
              <Text style={styles.progressBarValue}>{item.Indicateurs}%</Text>
            </View>
          </View>
          <View style={styles.Periode}>
            <Text style={styles.titleCard}>Période: </Text>
            <Text style={styles.Period}>{item.preriode}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    )
    return (
      <SafeAreaView styles={styles.safeAreaView}>
        <FlatList
          contentContainerStyle={styles.base}
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListHeaderComponent={
            <>
              <View style={styles.sectionHeading}>
                <View style={styles.sectionHeadingMain}>
                  <Text style={styles.sectionHeadingText} numberOfLines={1}>
                    SUIVI du PTBA
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
              {/* bar de recherche */}
    
              <View>
                <Text>
                  Projet de Gestion durable des Ressources naturelles, d’Equipement communal et des Structuration des producteursruraux (PROGRES)
                </Text>
             
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
                          containerStyle={{ backgroundColor: '#009900' }} 
                        />
                      ))}
                    </Tab>
                </ScrollView>
                <TabView value={index} onChange={setIndex} animationType="spring" >
                {tabTitles.map((title, tabIndex) => (
                  <TabView.Item key={tabIndex} style={{ width: '100%' }}>
                    <View >
                        <Text>{tabContents[title]}</Text>
                    </View>
                  </TabView.Item>
                ))}
              </TabView>
              </View>
              <View>
                <Text style={styles.composante}>
                  Sous-Composante
                </Text>
              </View>
              {/* select sous-composante */}
              <View style={styles.container}>
                <View style={styles.dropdownContainer}>
                  <SelectDropdown
                    data={SousComp}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                    defaultButtonText={
                      <Text style={styles.placeholderText}>
                        Veuillez sélectionner votre sous composante
                      </Text>
                    }
                    buttonStyle={styles.dropdownButton}
                    dropdownStyle={styles.dropdown}
                  />
                  {/* Ajoutez votre icône à droite ici à l'intérieur du rectangle */}
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>{'\u25BC'}</Text>
                  </View>
                </View>
              </View>
              {/* select sous-composante */}
            </>
          } 
        />
       
      </SafeAreaView>
    );
    
};

export default PTBAScrenn;
