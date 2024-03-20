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
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: '#E4E4E4',
        marginRight: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: '100%',
        height:'auto',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e9e9e9',
        shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: { width: 0, height: 1 }, // Déplacement de l'ombre
        opacity: 1, 
        shadowRadius: 4, // Rayon de l'ombre
        elevation: 3, // Pour les appareils Android
        marginBottom: 10,
        // borderRadius:15,
      },

      titleCard:{
        fontSize:16,
        fontWeight:'500',
        marginBottom:10
       
      },
      Contentdata:{
        flexDirection:'row',
        alignItems:'flex-end',
        marginBottom:10
      },
     
      content:{
        marginLeft:10,
        marginBottom:10

      },
      input: {
        height: 30,
        width:40,
        borderColor: 'gray',
        borderWidth: 0.5,
        backgroundColor: 'white',
        marginLeft:10,
        marginBottom:10
      },
      inputDate:{
        height: 30,
        width:200,
        borderColor: 'gray',
        borderWidth: 0.5,
        backgroundColor: 'white',
        marginLeft:10,
        marginBottom:10
      },
      textarea: {
        height: 120,
        width:"auto",
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius:5,
        marginBottom:10,
        // textAlignVertical: 'top',  
        backgroundColor: 'white',
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
        fontSize:16,
        color: 'white',
      },
      ContentdataObserv:{
        flexDirection:'column',
        alignItems:'flex-start',
      },
      contentbtn:{
        flexDirection:'row',
        justifyContent: 'flex-end',
        marginRight: 10,
      },
      contentbtn1:{
        marginRight: 15,
      },


      //Modal
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
          btnModifierMission :{
            marginTop:10,
            backgroundColor: '#009900',
            padding:10,
            borderColor:'none',
            borderRadius:7,
            marginBottom:30
          },
          // dropdown
      dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:10
      },
      dropdownButton: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        flex: 1,
      },
      dropdown: {
        backgroundColor: '#fff',
        borderRadius: 5,
      },
      icon: {
        marginLeft: 10,
      },
      placeholderText: {
        color: '#999', 
        fontSize: 12,   
        textAlign:'left'
       
      },
        
});

export default styles;
