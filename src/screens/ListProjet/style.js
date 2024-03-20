import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
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
      card: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e9e9e9',
        backgroundColor: '#ffffff',
        padding: 20,
        shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: { width: 0, height: 2 }, // Déplacement de l'ombre
        shadowOpacity: 0.3, // Opacité de l'ombre
        shadowRadius: 4, // Rayon de l'ombre
        elevation: 3, // Pour les appareils Android
        marginBottom: 10, 
      }, 
      codeContainer:{
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
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom:10,

      },
      searchIcon: {
        marginRight: 10,
      },
      searchbar: {
        flex: 1,
        fontSize: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
      },

});

export default styles;