import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#ffffff',
        // marginLeft:10,
        // marginRight:10,
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
        justifyContent: 'center',
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
      realis:{
        // minHeight: 30,
        paddingHorizontal: 24,
        marginBottom:10,
        fontSize:16
      },
      itemContainer: {
        backgroundColor: '#E4E4E4',
        marginRight: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: 250,
        height:240,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e9e9e9',
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 1 }, 
        opacity: 1, 
        shadowRadius: 4,
        elevation: 3, 
        borderRadius:15,
      },
      itemTitle:{
        fontSize:16,
        fontWeight:'300',
        marginBottom:10,
      },
      total:{
        fontSize:20,
        fontWeight:'500',
        marginBottom:10,
      },
      totalP:{
        fontSize:20,
        fontWeight:'500',
        marginBottom:10,
        color:'#FF0000'
      },
        // progresse bar
        progressBar: {
          width: '100%',
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

    
     
      
});

export default styles