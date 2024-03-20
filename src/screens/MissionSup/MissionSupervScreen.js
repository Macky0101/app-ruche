import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList , ScrollView, Modal , TextInput,KeyboardAvoidingView, Platform} from 'react-native';
import { Tab, TabView } from '@rneui/themed';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import ProgressCircle from 'react-native-progress-circle';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import PieCharts from './PieChart';
import { useNavigation } from '@react-navigation/native';





const MissionSup = () => {
  const navigation = useNavigation();

  const [isModalVisible, setIsModalVisible] =useState(false);
  const [isGraphModalVisible, setIsGraphModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const renderGraphModal = () => (
    <Modal
      visible={isGraphModalVisible}
      onRequestClose={() => setIsGraphModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet"
    >
     <View style={{flex:1, backgroundColor:"light",paddingTop:50,paddingLeft:20,paddingRight:20}}>
     <TouchableOpacity
        style={{ position: 'absolute', top: 10, right: 10 }}  
        onPress={() => setIsGraphModalVisible(false)}
     >
        <Icon name="close" size={30} color="#000" />  
     </TouchableOpacity>
     <Text style={styles.ModalTitle}>Graphique par Conventions</Text>
     <PieCharts/>
     </View>
    </Modal>
  );

  const AddRecommandation = () => (
    <Modal
      visible={isAddModalVisible}
      onRequestClose={() => setIsAddModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet"
    >
       <ScrollView vertical={true}>
           <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
           <View style={{flex:1, backgroundColor:"light",paddingTop:50,paddingLeft:20,paddingRight:20}}>
               <TouchableOpacity
                    style={{ position: 'absolute', top: 10, right: 10 }}  
                    onPress={() => setIsAddModalVisible(false)}
                >
                    <Icon name="close" size={30} color="#000" />  
                </TouchableOpacity>
              <Text style={styles.ModalTitle}>Modifier recommandation</Text>
              {/* imput */}
              <View style={styles.MesInput}>
                <Text style={styles.label}>Site</Text>
                <View style={styles.dropdownContainer}>
                  <SelectDropdown
                    data={site}
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
                        Veuillez sélectionner une site
                      </Text>
                    }
                    buttonStyle={styles.dropdownButton}
                    dropdownStyle={styles.dropdown}
                  />
                </View>
                <Text style={styles.label}>Domaine*</Text>
                <View style={styles.dropdownContainer}>
                  <SelectDropdown
                    data={Domaine}
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
                        Veuillez sélectionner une site
                      </Text>
                    }
                    buttonStyle={styles.dropdownButton}
                    dropdownStyle={styles.dropdown}
                  />
                </View>
                <Text style={styles.label}>Ref*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeRef}
                      value={Ref}
                      placeholder=""
                      keyboardType="default"
                    />
                  <Text style={styles.label}>Numero*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeNumero}
                      value={numero}
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
                <Text style={styles.label}>Date buttoir*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeDate}
                      value={Date}
                      placeholder=""
                      keyboardType="default"
                    />
                
                <Text style={styles.label}>Responsable*</Text>
                    <View style={styles.dropdownContainer}>
                      <SelectDropdown
                        data={responsable}
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
                <View style={styles.Contentdata}><Text style={styles.titleCard}>Observation :</Text></View>
                <TextInput
                      style={styles.textarea}
                      onChangeText={onChangeRecomm}
                      value={recommandation}
                      placeholder="Entrez votre texte ici"
                      multiline={true}
                      numberOfLines={4} 
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
                 <View style={styles.Contentdata}><Text style={styles.titleCard}>Observation :</Text></View>
                <TextInput
                      style={styles.textarea}
                      onChangeText={onChangeAutresResponsables}
                      value={Autre}
                      placeholder="Entrez votre texte ici"
                      multiline={true}
                      numberOfLines={4} 
                      keyboardType="default"
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
      </KeyboardAvoidingView>
           </ScrollView>
    </Modal>
  );
  

  const [Ref, onChangeRef] = React.useState('');
  const [numero, onChangeNumero] = React.useState('');
  const [Date, onChangeDate] = React.useState('');
  const [recommandation, onChangeRecomm] = React.useState('');
  const [observation, onChangeObservation] = React.useState('');
  const [Autre, onChangeAutresResponsables] = React.useState('');
  const site = ["UGP", "Selibabi", "Kiffa", "Auoin"];
  const Domaine = ["domaine 1", "domaine 2", "domaine 3", "domaine 4"];
  const type = ["type 1", "type 2", "type 3", "type 4"];
  const responsable = ["responsable 1", "responsable 2", "responsable 3", "responsable 4"];

  const resetFormFields = () =>{
    onChangeRef('');
    onChangeNumero('');
    onChangeDate('');
    onChangeRecomm('');
    onChangeObservation('');
    onChangeAutresResponsables('');
  }


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

  const data = [
    {
      id:'1',
      status:90,
      dommaine:'Gestion de projets',
      plan_action:'tache 100%',
      ref:'01',
      responsable:'DCI ( PF / FAO )',
      date_buttoir: 'contune',
      recommandation:"Assurer une distribution d’intrants agricoles (semences) à temps et en cohérence avec les calendriers culturaux des zones du programme",
      observation:"Les difficultés liées au déplacement sur certains tronçons occupés par les groupes armés ont retardé l'acheminement des intrants dans certaines zones"
    },
    {
      id:'2',
      status:20,
      dommaine:'Gestion de projets',
      plan_action:'tache 100%',
      ref:'01',
      responsable:'DCI ( PF / FAO )',
      date_buttoir: 'contune',
      recommandation:"Assurer une distribution d’intrants agricoles (semences) à temps et en cohérence avec les calendriers culturaux des zones du programme",
      observation:"Les difficultés liées au déplacement sur certains tronçons occupés par les groupes armés ont retardé l'acheminement des intrants dans certaines zones"
    },
    {
      id:'3',
      status:40,
      dommaine:'Gestion de projets',
      plan_action:'tache 100%',
      ref:'01',
      responsable:'DCI ( PF / FAO )',
      date_buttoir: 'contune',
      recommandation:"Assurer une distribution d’intrants agricoles (semences) à temps et en cohérence avec les calendriers culturaux des zones du programme",
      observation:"Les difficultés liées au déplacement sur certains tronçons occupés par les groupes armés ont retardé l'acheminement des intrants dans certaines zones"
    },
    {
      id:'4',
      status:100,
      dommaine:'Gestion de projets',
      plan_action:'tache 100%',
      ref:'01',
      responsable:'DCI ( PF / FAO )',
      date_buttoir: 'contune',
      recommandation:"Assurer une distribution d’intrants agricoles (semences) à temps et en cohérence avec les calendriers culturaux des zones du programme",
      observation:"Les difficultés liées au déplacement sur certains tronçons occupés par les groupes armés ont retardé l'acheminement des intrants dans certaines zones"
    },
    {
      id:'5',
      status:10,
      dommaine:'Gestion de projets',
      plan_action:'tache 100%',
      ref:'01',
      responsable:'DCI ( PF / FAO )',
      date_buttoir: 'contune',
      recommandation:"Assurer une distribution d’intrants agricoles (semences) à temps et en cohérence avec les calendriers culturaux des zones du programme",
      observation:"Les difficultés liées au déplacement sur certains tronçons occupés par les groupes armés ont retardé l'acheminement des intrants dans certaines zones"
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.contentCard}>
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.ContentdataStatus}>
          <Text style={styles.titleCardStatus}>Status</Text>
          <ProgressCircle
            style={styles.content}
            percent={item.status}
            radius={50}
            borderWidth={8}
            color={getColorBasedOnPercentage(item.status)}
            shadowColor="#999"
            bgColor="#FFF">
            <Text>{`${item.status}%`}</Text>
          </ProgressCircle>
        </View>
          
        <View style={styles.Contentdata}>
          <Text style={styles.titleCard}>Domaine :</Text>
          <Text style={styles.content}>{item.dommaine}</Text>
        </View>

        <View style={styles.Contentdata}>
          <Text style={styles.titleCard}>Plan d'action :</Text>
          <Text style={styles.content}>{item.plan_action}</Text>
        </View>

        <View style={styles.Contentdata}>
          <Text style={styles.titleCard}>Ref :</Text>
          <Text style={styles.content}>{item.ref}</Text>
        </View>

        <View style={styles.Contentdata}>
          <Text style={styles.titleCard}>Responsable :</Text>
          <Text style={styles.content}>{item.responsable}</Text>
        </View>

        <View style={styles.Contentdata}>
          <Text style={styles.titleCard}>Date buttoir :</Text>
          <Text style={styles.content}>{item.date_buttoir}</Text>
        </View>

        <View style={styles.ContentdataRecom}>
          <Text style={styles.titleCard}>Récommandation :</Text>
          <Text style={styles.content}>{item.recommandation}</Text>
        </View>

        <View style={styles.ContentdataObserv}>
          <Text style={styles.titleCard}>Observation :</Text>
          <Text style={styles.content}>{item.observation}</Text>
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
           <ScrollView vertical={true}>
           <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
           <View style={{flex:1, backgroundColor:"light",paddingTop:50,paddingLeft:20,paddingRight:20}}>
               <TouchableOpacity
                    style={{ position: 'absolute', top: 10, right: 10 }}  
                    onPress={() => setIsModalVisible(false)}
                >
                    <Icon name="close" size={30} color="#000" />  
                </TouchableOpacity>
              <Text style={styles.ModalTitle}>Modifier recommandation</Text>
              {/* imput */}
              <View style={styles.MesInput}>
                <Text style={styles.label}>Site</Text>
                <View style={styles.dropdownContainer}>
                  <SelectDropdown
                    data={site}
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
                        Veuillez sélectionner une site
                      </Text>
                    }
                    buttonStyle={styles.dropdownButton}
                    dropdownStyle={styles.dropdown}
                  />
                </View>
                <Text style={styles.label}>Domaine*</Text>
                <View style={styles.dropdownContainer}>
                  <SelectDropdown
                    data={Domaine}
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
                        Veuillez sélectionner une site
                      </Text>
                    }
                    buttonStyle={styles.dropdownButton}
                    dropdownStyle={styles.dropdown}
                  />
                </View>
                <Text style={styles.label}>Ref*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeRef}
                      value={Ref}
                      placeholder=""
                      keyboardType="default"
                    />
                  <Text style={styles.label}>Numero*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeNumero}
                      value={numero}
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
                <Text style={styles.label}>Date buttoir*</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeDate}
                      value={Date}
                      placeholder=""
                      keyboardType="default"
                    />
                
                <Text style={styles.label}>Responsable*</Text>
                    <View style={styles.dropdownContainer}>
                      <SelectDropdown
                        data={responsable}
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
                <View style={styles.Contentdata}><Text style={styles.titleCard}>Observation :</Text></View>
                <TextInput
                      style={styles.textarea}
                      onChangeText={onChangeRecomm}
                      value={recommandation}
                      placeholder="Entrez votre texte ici"
                      multiline={true}
                      numberOfLines={4} 
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
                 <View style={styles.Contentdata}><Text style={styles.titleCard}>Observation :</Text></View>
                <TextInput
                      style={styles.textarea}
                      onChangeText={onChangeAutresResponsables}
                      value={Autre}
                      placeholder="Entrez votre texte ici"
                      multiline={true}
                      numberOfLines={4} 
                      keyboardType="default"
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
      </KeyboardAvoidingView>
           </ScrollView>
     </Modal>
      </TouchableOpacity>
    </View>
  );

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
                <View style={styles.mesIcons}>
                  <Text style={styles.textIcon}>Graph</Text>
                  <TouchableOpacity onPress={() => setIsGraphModalVisible(true)}>
                    <Icon name="pie-chart" size={30} color="#fff" style={styles.GrapIcon}/>  
                    {renderGraphModal()}
                  </TouchableOpacity>
                  <Text style={styles.textIcon}>Nouv recomm</Text>
                  <TouchableOpacity onPress={() => setIsAddModalVisible(true)}>
                    <Icon name="add" size={30} color="#fff" style={styles.NouvIcon}/>  
                    {AddRecommandation()}
                  </TouchableOpacity>
                </View>
                <Text style={styles.textMission}>Mission</Text>
                <View style={styles.dropdownContainer}>
                  <SelectDropdown
                    data={Mission}
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
                        Veuillez sélectionner une Mission
                      </Text>
                    }
                    buttonStyle={styles.dropdownButton}
                    dropdownStyle={styles.dropdown}
                  />
                </View>
                {/* <Text>{tabContents[title]}</Text> */}
                
                <FlatList
                style={{marginBottom:150}}
                    data={data}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                  />
            </View>
          </TabView.Item>
        ))}
      </TabView>
    </SafeAreaView>
  );
};

export default MissionSup;
