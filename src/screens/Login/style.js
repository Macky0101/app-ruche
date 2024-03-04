import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    input: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 46,
      },
      inputField: {
        minWidth: 0,
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#a8bac1',
        paddingLeft: 15,
        paddingRight: 45,
        fontSize: 16,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        color: '#1c1c1c',
      },
      inputIsError: {
        borderColor: '#e15240',
      },
      inputIsFocus: {
        borderColor: '#169f94',
      },
      inputIcon: {
        position: 'absolute',
        top: 0,
        right: 15,
        bottom: 0,
        width: 20,
        height: null,
        tintColor: '#829aa3',
      },
      inputIconIsError: {
        tintColor: '#e15240',
      },
      inputIconIsFocus: {
        tintColor: '#169f94',
      },






  login: {
      flex: 1,
    },
    base: {
      flexGrow: 1,
    },
    loginTop: {
      minHeight: 300,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      paddingVertical: 48,
      backgroundColor: '#009900',
    },
    loginHeading: {
      fontSize: 22,
      color: '#ffffff',
      marginBottom: 24,
    },
    loginTopLogo: {
      width: 200,
      height: 105,
    },
    loginBody: {
      padding: 24,
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    grid: {
      overflow: 'hidden',
      flexShrink: 0,
    },
    gridContent: {
      flexShrink: 0,
      flexWrap: 'nowrap',
      marginVertical: -12,
    },
    gridItem: {
      paddingVertical: 12,
      minWidth: 0,
      minHeight: 0,
      flexShrink: 0,
    },
    formControl: {},
    formControlLabel: {
      marginBottom: 8,
      fontSize: 16,
    },
    formControlHelperText: {
      marginTop: 8,
      fontSize: 14,
      opacity: 0.5,
    },
    formControlError: {
      marginTop: 8,
      fontSize: 14,
      color: '#e15240',
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 34,
      height: 56,
      minWidth: 100,
      maxWidth: '100%',
      paddingHorizontal: 20,
      backgroundColor: '#009900',
      borderRadius: 8,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#299cd1',
      overflow: 'hidden',
    },
    btnText: {
      color: '#ffffff',
      fontSize: 20,
    },
    btnE: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 28,
      minWidth: 100,
      maxWidth: '100%',
      backgroundColor: '#00000000',
      overflow: 'hidden',
    },
    btnTextE: {
      color: '#299cd1',
      fontSize: 16,
    },
    btnF: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 20,
      maxWidth: '100%',
      paddingHorizontal: 4,
      backgroundColor: '#00000000',
      borderRadius: 8,
      overflow: 'hidden',
    },
    btnTextF: {
      color: '#299cd1',
      fontSize: 16,
    },
    flexA: {
      alignItems: 'flex-end',
      marginTop: 8,
    },
    flexB: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 24,
    },
    flexC: {
      paddingTop: 24,
      paddingBottom: 16,
    },
    typography: {
      fontSize: 16,
    },
});

export default styles;