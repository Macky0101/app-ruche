import { StyleSheet } from "react-native";


const styles= StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
      base: {
        flexGrow: 1,
        paddingVertical: 24,
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
      composante:{
        fontSize:20,
        fontWeight:'400',
        marginBottom:10,
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
    //   card
    itemContainer: {
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
        // shadowOpacity: 0.2, // Opacité de l'ombre
        opacity: 1, 
        shadowRadius: 4, // Rayon de l'ombre
        elevation: 3, // Pour les appareils Android
        marginBottom: 1,
        // borderRadius:15,
        
      },
    headerCard:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Periode:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    Period:{
      marginTop:10,
    },
    titleCard:{
        fontSize:16,
        fontWeight:'500',
        marginTop:10,
        marginBottom:5,
    },
    Obser:{
        fontSize:16,
        color:'#ffffff',
        fontWeight:'bold'
    },
    ObservContainer:{
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e9e9e9',
        borderRadius: 10,
        backgroundColor: '#009900',
        padding: 8,
        shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: { width: 0, height: 2 }, // Déplacement de l'ombre
        shadowOpacity: 0.3, // Opacité de l'ombre
        shadowRadius: 10, // Rayon de l'ombre
        elevation: 2,
        marginBottom:10
      },
        // progresse bar
        progressBar: {
            width: '100%',
            height: 14,
            minHeight: 14,
            justifyContent: 'center',
            flexShrink: 0,
            flexBasis: 0,
            borderRadius: 7,
            backgroundColor: '#f1f6f8',
            overflow: 'hidden',
          },
          progressBarValueWrap: {
            position: 'absolute',
            left: 0,
            height: '100%',
          },
          progressBarValue: {
            lineHeight: 14,
            textAlign: 'center',
            color: '#ffffff',
            fontSize: 12,
            width: '100%',
          },
          SuivreCard:{
            marginTop:15,
            color:'#FF0000'
          },
          tacheSuivre:{
            flexDirection: 'row',
            justifyContent: 'space-between'
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
          },
          searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            paddingHorizontal: 10,
            marginHorizontal: 20,
            marginTop: 10,
            marginBottom:10,
            padding:15
    
          },
          searchIcon: {
            marginRight: 10,
          },
          searchbar: {
            flex: 1,
            fontSize: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
          },
          codeContainer:{
            alignSelf: 'flex-start',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#e9e9e9',
            borderRadius: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: 8,
            shadowColor: '#000', // Couleur de l'ombre
            shadowOffset: { width: 0, height: 2 }, // Déplacement de l'ombre
            shadowOpacity: 0.3, // Opacité de l'ombre
            shadowRadius: 10, // Rayon de l'ombre
            elevation: 2,
            marginBottom:10
          },
          code:{
            fontSize:16,
            color:'#000000',
            fontWeight:'bold'
          },


});

export default styles;