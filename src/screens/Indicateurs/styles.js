import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    safeAreaView: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
      base: {
        flexGrow: 1,
        // paddingVertical: 24,
        marginLeft:10,
        marginRight:10,
      },
      section: {},
      sectionHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 30,
        paddingHorizontal: 24,
        marginBottom:10
      },
      sectionHeadingMain: {
        flexShrink: 1,
      },
      sectionHeadingText: {
        fontSize: 24,
        color: '#1c1c1c',
        fontWeight: 'bold',
      },
      sectionContent: {
        paddingHorizontal: 24,
        paddingVertical: 10,
      },
      itemContainer:{
        backgroundColor: '#E4E4E4',
        marginRight: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: '100%',
        height:'auto',
        borderColor: '#e9e9e9',
        shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: { width: 0, height: 1 }, // Déplacement de l'ombre
        opacity: 4, 
        shadowRadius: 4, // Rayon de l'ombre
        elevation: 3, // Pour les appareils Android
        marginBottom: 10,
        borderRadius:5,
      },
      Title:{
        fontWeight:'500'
      },
      contentdata:{
        fontWeight:'300',
        paddingLeft: 15,
      },
      content:{
        flexDirection:'row',
        marginBottom: 10,
      },
      contentbtn:{
        flexDirection:'row',
        justifyContent: 'flex-end',
        marginRight: 10,
      },
      contentbtn1:{
        marginRight: 15,
      },
        // Modal
        ModalTitle :{
          fontSize: 24,
          fontWeight:'500',
          marginBottom: 10,
        },
        label:{
          marginBottom:5,
        },
        MesInput:{
          marginTop:10,
        },
        input: {
          height: 40,
          width:"100%",
          borderColor: 'gray',
          borderWidth: 0.5,
          borderRadius:5,
          marginBottom:10,
        },
        textarea: {
          height: 120,  
          borderColor: 'gray',
          borderWidth: 0.5,
          borderRadius:5,
          marginBottom:10,
          textAlignVertical: 'top',  
        },
        btn :{
          marginTop:10,
          backgroundColor: '#009900',
          padding:10,
          borderColor:'none',
          borderRadius:7,
        },
        TextBtn:{
          textAlign: 'center',
          fontSize:20,
          color: 'white',
        }
});



export default styles;