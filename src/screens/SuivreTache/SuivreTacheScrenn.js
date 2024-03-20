import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity,FlatList ,TextInput,KeyboardAvoidingView, Platform} from 'react-native';
import styles from './styles';
import { CheckBox } from '@rneui/themed';
import ProgressCircle from 'react-native-progress-circle';
import { launchImageLibrary } from 'react-native-image-picker';


const SuivreTache = ({ route }) => {
  const { id } = route.params;
  const fichier = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, response => {
      console.log(response);
    });
  };
  const [progressPercent, setProgressPercent] = useState(80);
  // Checkbox
  const [checked, setChecked] = React.useState(true);
     const toggleCheckbox = () => setChecked(!checked);

  const getColorBasedOnPercentage = (percent) => {
      if (percent >= 75) {
        return "#009900"; 
      } else if (percent >= 50) {
        return "#FFFF00"; 
      } else {
        return "#FF0000";
      }
    };
    const [lot, onChangeLot] = React.useState('');
    const [date, onChangeDate] = React.useState('');
    const [observation, onChangeObservation] = React.useState('');



  const data=[
    {
      id:'1',
      tache:"PV d'engagement des CVA pour la mise en valeur biologique",
      poids:0,
      valide:'V',
      lot:'1',
      dateSuivi: '21/12/2023',
      Observation:'',
    },
    {
      id:'2',
      tache:"PV d'engagement des CVA pour la mise en valeur biologique",
      poids:0,
      valide:'V',
      lot:'1',
      dateSuivi: '21/12/2023',
      Observation:'',
    }
  ]
  const renderItem = ({ item }) => (
<View style={styles.base}>
<View style={styles.itemContainer}>
    <View style={styles.item}>
    <View style={styles.headerCard}>
        <Text style={styles.titleCard}>
            Taches
        </Text>
    </View>
    <Text  style={styles.content} numberOfLines={5} ellipsizeMode="tail">{item.tache}</Text>
    <View style={styles.Contentdata}>
      <Text style={styles.titleCard}>Poids :</Text>
      <Text style={styles.content}>{item.poids}</Text>
    </View>
    <View style={styles.Contentdata}>
        <Text style={styles.titleCard}>Réalisation :</Text>
        <Text style={styles.content}>Validée :</Text>
        <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="red"
            style={{ backgroundColor: 'transparent', borderWidth: 0 }}
          />
        <Text style={styles.content}>Lot :</Text>
        <TextInput
              style={styles.input}
              onChangeText={onChangeLot}
              value={lot}
              placeholder=""
              keyboardType="default"
            />
    </View>
    <View style={styles.Contentdata}>
        <Text style={styles.titleCard}>Date de suivi :</Text>
        <TextInput
              style={styles.inputDate}
              onChangeText={onChangeDate}
              value={date}
              placeholder=""
              keyboardType="default"
            />
    </View>

    <View style={styles.Contentdata}>
        <Text style={styles.titleCard}>Sources de vérification :</Text>
        <View style={styles.btn}>
             <TouchableOpacity
               onPress={()=> fichier()}
               >
                 <Text style={styles.TextBtn}>choisir un fichier</Text>
            </TouchableOpacity>
        </View>
    </View>

    <View style={styles.Contentdata}>
        <Text style={styles.titleCard}>Observation :</Text>
    </View>
    <TextInput
           style={styles.textarea}
           onChangeText={onChangeObservation}
           value={observation}
           placeholder="Entrez votre texte ici"
           multiline={true}
           numberOfLines={4} 
           keyboardType="default"
         />
         <View style={styles.Contentdata}>
         <View style={styles.btn}>
             <TouchableOpacity
               onPress={()=> console.log('clic')}
               >
                 <Text style={styles.TextBtn}>Modifier</Text>
            </TouchableOpacity>
        </View>
         </View>
    </View>
</View>
</View>
)

  return (
    <SafeAreaView styles={styles.safeAreaView}>
             
      {/* <ScrollView contentContainerStyle={styles.base}> */}
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ListHeaderComponent={
              <>
               <View style={styles.sectionHeading}>
          <View style={styles.sectionHeadingMain}>
            <Text style={styles.sectionHeadingText} numberOfLines={1}>
              Activité
            </Text>
          </View>
        </View>
        {/* <Text>ID de l'élément suivi : {id}</Text> */}
      <View style={styles.base}>
        <TouchableOpacity style={styles.HeadersContent}>
          <View>
          <Text style={styles.titleText}>Niveau d'avancement</Text>
          </View>
            <View>
                <ProgressCircle
                  percent={progressPercent}
                  radius={50}
                  borderWidth={8}
                  color={getColorBasedOnPercentage(progressPercent)}
                  shadowColor="#999"
                  bgColor="#FFF">
                  <Text>{`${progressPercent}%`}</Text>
                </ProgressCircle>
              </View>
        </TouchableOpacity>
      </View>
              </>
            }
          />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SuivreTache;
