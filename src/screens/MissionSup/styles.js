import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
      contentCard: {
        flexGrow: 1,
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
 
      code:{
        fontSize:16,
        color:'#ffffff',
        fontWeight:'bold'
      },
      title :{
        fontSize: 20,
        fontWeight:'600',
        marginBottom:10
      },
      desc:{
        fontSize:16,
        fontWeight:'300',
        marginBottom:10,
      },
      plus:{
        color:'#009900',
      },
      addIcon: {
        backgroundColor: '#009900',
        borderRadius: 50,
      },
      headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      GrapIcon:{
        color: '#009900',
        paddingRight:15
      },
      NouvIcon:{
        color: '#009900',
        paddingRight:15
      },
      mesIcons:{
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom:10,
      },
      textIcon:{
        marginTop:5,
        marginRight:10,
      },
      textMission:{
        fontSize:20,
        marginLeft:20,
        fontWeight:'500',
        // marginBottom:10

      },
      dropdownContainerMission:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom:10,
        padding:10,
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
      // card
      titleCard:{
        fontSize:16,
        fontWeight:'500',
        marginTop:10,
        marginBottom:5,
      },
      Contentdata:{
        flexDirection:'row',
        alignItems:'flex-end',
      },
      content:{
        marginLeft:10,
        marginBottom:5,
        fontWeight:'300'
      },
     
      itemContainer:{
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
      },
      ContentdataRecom:{
        flexDirection:'column',
        alignItems:'flex-start',
      },
      ContentdataObserv:{
        flexDirection:'column',
        alignItems:'flex-start',
      },
       // progress circular
       titleCardStatus:{
        fontSize:30,
        fontWeight:'500',
        marginBottom:25
      },
      ContentdataStatus:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        marginBottom:10,
        paddingRight:10
      },
       // progress circular
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
          marginBottom:30
        },
        TextBtn:{
          textAlign: 'center',
          fontSize:20,
          color: 'white',
        }
});

export default styles;