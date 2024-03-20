import SelectDropdown from 'react-native-select-dropdown';
import { View, Text , SafeAreaView,TouchableOpacity, FlatList, Modal, ScrollView, KeyboardAvoidingView, Platform, TextInput} from 'react-native';
import React, { useState } from 'react';
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const EdMissionScreen = () => {
  const [isEditerMissionModalVisible, setIsMissionModalVisible] = useState(false);
  const [isEnregMissionhModalVisible, setIsEnregMissionModalVisible] = useState(false);


  
  const [code, onChangeCode] = React.useState('');
  const [objet, onChangeObjet] = React.useState('');
  const [resume, onChangeResume] = React.useState('');
  const [DateDebut, onChangeDateDebut] = React.useState('');
  const [DateFin, onChangeDateFin] = React.useState('');
  const [observation, onChangeObservation] = React.useState('');
  const type = ["type 1", "type 2", "type 3", "type 4"];


  const EnregistrerMission = () => (
    <Modal
      visible={isEnregMissionhModalVisible}
      onRequestClose={() => setIsEnregMissionModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet"
    >
     <View style={{flex:1, backgroundColor:"light",paddingTop:50,paddingLeft:20,paddingRight:20}}>
     <TouchableOpacity
        style={{ position: 'absolute', top: 10, right: 10 }}  
        onPress={() => setIsEnregMissionModalVisible(false)}
     >
        <Icon name="close" size={30} color="#000" />  
     </TouchableOpacity>
     <Text style={styles.ModalTitle}>Nouvelle de mission</Text>


         <ScrollView vertical={true} showsVerticalScrollIndicator={true}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
   {/* imput */}
      <View style={styles.MesInput}>
                <Text style={styles.label}>Code*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeCode}
                      value={code}
                      placeholder=""
                      keyboardType="default"
                    />
                  <Text style={styles.label}>Objet*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeObjet}
                      value={objet}
                      placeholder=""
                      keyboardType="default"
                    />
                   
                <Text style={styles.label}>Resume</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeResume}
                      value={resume}
                      placeholder=""
                      keyboardType="default"
                    />
                      <Text style={styles.label}>Type*</Text>
                    <View style={styles.dropdownContainer}>
                      <SelectDropdown
                        data={type}
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
                            Veuillez sélectionner 
                          </Text>
                        }
                        buttonStyle={styles.dropdownButton}
                        dropdownStyle={styles.dropdown}
                      />
                </View>
                <Text style={styles.label}>Date Début</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeDateDebut}
                      value={DateDebut}
                      placeholder=""
                      keyboardType="default"
                    />
                      <Text style={styles.label}>Date Fin</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeDateFin}
                      value={DateFin}
                      placeholder=""
                      keyboardType="default"
                    />
                
                <View style={styles.Contentdata}><Text style={styles.titleCard}>Observation :</Text></View>
                <TextInput
                      style={styles.textarea}
                      onChangeText={onChangeObservation}
                      value={observation}
                      placeholder="Entrez votre texte ici"
                      multiline={true}
                      numberOfLines={4} 
                      keyboardType="default"
                    />
                  <View style={styles.btnModifierMission}>
                  <TouchableOpacity
                    onPress={()=> console.log('clic')}
                    >
                      <Text style={styles.TextBtn}>Modifier</Text>
                  </TouchableOpacity>
                  </View>
              </View>
              {/* imput */}
      </KeyboardAvoidingView>
      </ScrollView>
     </View>
    </Modal>
  );

    const renderGraphModal = () => (
        <Modal
          visible={isEditerMissionModalVisible}
          onRequestClose={() => setIsMissionModalVisible(false)}
          animationType="slide"
          presentationStyle="pageSheet"
        >
         <View style={{flex:1, backgroundColor:"light",paddingTop:50,paddingLeft:20,paddingRight:20}}>
         <TouchableOpacity
            style={{ position: 'absolute', top: 10, right: 10 }}  
            onPress={() => setIsMissionModalVisible(false)}
         >
            <Icon name="close" size={30} color="#000" />  
         </TouchableOpacity>
         <Text style={styles.ModalTitle}>Modifier mission</Text>
         </View>
        </Modal>
      );

    const data =[
        {
            id:'1',
            objet :" Mission d'appui",
            type :" Supervision",
            debut : "2022-03-15",
            fin : "2022-06-25",
            observations : "Mission d'appui virtuelle ayant permis de faire le point sur le démarrage des activités, les difficultés rencontrées par les équipes. La mission a formulé des recommandations."
        },
        {
            id:'2',
            objet :" Mission d'appui",
            type :" Supervision",
            debut : "2022-03-15",
            fin : "2022-06-25",
            observations : "Mission d'appui virtuelle ayant permis de faire le point sur le démarrage des activités, les difficultés rencontrées par les équipes. La mission a formulé des recommandations."
        },
        {
            id:'3',
            objet :" Mission d'appui",
            type :" Supervision",
            debut : "2022-03-15",
            fin : "2022-06-25",
            observations : "Mission d'appui virtuelle ayant permis de faire le point sur le démarrage des activités, les difficultés rencontrées par les équipes. La mission a formulé des recommandations."
        },
        {
            id:'4',
            objet :" Mission d'appui",
            type :" Supervision",
            debut : "2022-03-15",
            fin : "2022-06-25",
            observations : "Mission d'appui virtuelle ayant permis de faire le point sur le démarrage des activités, les difficultés rencontrées par les équipes. La mission a formulé des recommandations."
        },
    ]
    const renderItem = ({ item }) => (
        <View style={styles.base}>
        <View style={styles.itemContainer}>
            <View style={styles.item}>

            <View style={styles.Contentdata}>
              <Text style={styles.titleCard}>Objet :</Text>
              <Text style={styles.content}>{item.objet}</Text>
            </View>

            <View style={styles.Contentdata}>
              <Text style={styles.titleCard}>Type :</Text>
              <Text style={styles.content}>{item.type}</Text>
            </View>

            <View style={styles.Contentdata}>
              <Text style={styles.titleCard}>Début :</Text>
              <Text style={styles.content}>{item.debut}</Text>
            </View>

            <View style={styles.Contentdata}>
              <Text style={styles.titleCard}>Fin :</Text>
              <Text style={styles.content}>{item.fin}</Text>
            </View>

            <View style={styles.ContentdataObserv}>
              <Text style={styles.titleCard}>Observation :</Text>
              <Text style={styles.content}>{item.observations}</Text>
            </View>
        
            <View style={styles.Contentdata}>
                <Text style={styles.titleCard}>Documents :</Text>
                <View style={styles.btn}>
                     <TouchableOpacity
                       onPress={()=> fichier()}
                       >
                         <Text style={styles.TextBtn}>choisir un fichier</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentbtn}>
                <TouchableOpacity onPress={() => setIsMissionModalVisible(true)}>
                    <MaterialCommunityIcons  style={styles.contentbtn1} name="pencil" size={24} color="black"/>
                    {renderGraphModal()} 
                </TouchableOpacity>
            
            <MaterialCommunityIcons name="delete" size={24} color="red" onPress={() => alert('sup')} />
            </View>
        
            </View>
        </View>
        </View>
        )
  return (
    <SafeAreaView styles={styles.safeAreaView}>
     <View style={styles.sectionHeading}>
         <View style={styles.sectionHeadingMain}>
          <Text style={styles.sectionHeadingText} numberOfLines={1}>
                Edition de mission
          </Text>
          <TouchableOpacity
              style={{ marginLeft: 60, borderRadius: 50 }}  
              onPress={() => setIsEnregMissionModalVisible(true)}
          >
              <Icon name="add" size={30} color="#009900" style={styles.addIcon}/>  
              {EnregistrerMission()}
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        />
  </SafeAreaView>
  )
}

export default EdMissionScreen