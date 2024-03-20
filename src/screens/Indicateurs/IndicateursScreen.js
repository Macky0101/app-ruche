import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity ,FlatList, Modal,TextInput} from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';




const SuivreIndicateurs = ({ route }) => {
  const [isModalVisible, setIsModalVisible] =useState(false);
  const [date, onChangeDate] = React.useState('');
  const [resultat, onChangeresultat] = React.useState('');
  const Commune = ["Commune 1", "Commune 2", "Commune 3", "Commune 4"];

  const resetFormFields = () => {
    onChangeDate('');
    onChangeresultat('');
  };

  const { id } = route.params;
const data=[
  {
    id:'1',
    commune: 'Nouakchott',
    dateSuivi:'03/12/2023',
    valeur: '9',
  },
  {
    id:'2',
    commune: 'Nouakchott',
    dateSuivi:'03/12/2023',
    valeur: '9',
  },
  {
    id:'3',
    commune: 'Nouakchott',
    dateSuivi:'03/12/2023',
    valeur: '9',
  },
  {
    id:'4',
    commune: 'Nouakchott',
    dateSuivi:'03/12/2023',
    valeur: '9',
  },
  {
    id:'5',
    commune: 'Nouakchott',
    dateSuivi:'03/12/2023',
    valeur: '9',
  },
  {
    id:'6',
    commune: 'Nouakchott',
    dateSuivi:'03/12/2023',
    valeur: '9',
  },
  {
    id:'7',
    commune: 'Nouakchott',
    dateSuivi:'03/12/2023',
    valeur: '9',
  },
  {
    id:'8',
    commune: 'Nouakchott',
    dateSuivi:'03/12/2023',
    valeur: '9',
  },
  {
    id:'9',
    commune: 'Nouakchott',
    dateSuivi:'03/12/2023',
    valeur: '9',
  },
  {
    id:'10',
    commune: 'Nouakchott',
    dateSuivi:'03/12/2023',
    valeur: '9',
  },
  {
    id:'11',
    commune: 'Nouakchott',
    dateSuivi:'03/12/2023',
    valeur: '9',
  },
  {
    id:'12',
    commune: 'Nouakchott',
    dateSuivi:'03/12/2023',
    valeur: '9',
  },



];
const renderItem = ({ item }) => (
    <View style={styles.base}>
    <TouchableOpacity style={styles.itemContainer}>
    <View style={styles.content}>
      <Text style={styles.Title}>Commune :</Text>
      <Text style={styles.contentdata}>{item.commune}</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.Title}>Date suivi :</Text>
      <Text style={styles.contentdata}>{item.dateSuivi}</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.Title}>Valeur :</Text>
      <Text style={styles.contentdata}>{item.valeur}</Text>
    </View>
    <View style={styles.contentbtn}>
      <MaterialCommunityIcons  style={styles.contentbtn1} name="pencil" size={24} color="black" onPress={() => setIsModalVisible(true)} />
      <MaterialCommunityIcons name="delete" size={24} color="red" onPress={() => alert('sup')} />
    </View>
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
              <Text style={styles.ModalTitle}>Indicateurs</Text>
              <Text style={styles.ModalText}> Protection (Grillage) sites cordon et seuils en gabion</Text>
              {/* imput */}
              <View style={styles.MesInput}>
                <Text style={styles.label}>Commune*</Text>
                <View style={styles.dropdownContainer}>
                  <SelectDropdown
                    data={Commune}
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
                        Veuillez sélectionner une commune
                      </Text>
                    }
                    buttonStyle={styles.dropdownButton}
                    dropdownStyle={styles.dropdown}
                  />
                </View>
                <Text style={styles.label}>Date*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeDate}
                      value={date}
                      placeholder=""
                      keyboardType="default"
                    />
                  <Text style={styles.label}>Résultat (HA) *</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeresultat}
                      value={resultat}
                      placeholder=""
                      keyboardType="default"
                    />
                  <View style={styles.btn}>
                  <TouchableOpacity
                    onPress={()=> console.log('clic')}
                    >
                      <Text style={styles.TextBtn}>Ajouter</Text>
                    </TouchableOpacity>
                  </View>
              </View>
              {/* imput */}
            </View>
     </Modal>
  </TouchableOpacity>
    </View>
);


  return (
    <SafeAreaView styles={styles.safeAreaView}>
      <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ListHeaderComponent={
              <>
        <View style={styles.sectionHeading}>
           <View style={styles.sectionHeadingMain}>
            <Text style={styles.sectionHeadingText} numberOfLines={1}>
              Suivi des Indicateurs
            </Text>
          </View>
        </View>
              </>
            }
          />
    </SafeAreaView>
  );
};

export default SuivreIndicateurs;
