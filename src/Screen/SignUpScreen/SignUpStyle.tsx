import { StyleSheet } from "react-native";
import colors from "../../../constants/color";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      margin: 10,
    },
    Textinput: {
      borderWidth: 1,
      borderColor: colors.primaryBlack,
      marginBottom: 6,
      fontSize: 20,
      borderRadius: 10,
      paddingHorizontal: 10,
    },
    Text: {
      fontWeight: 'bold',
      color: colors.primaryBlack,
      fontSize: 18,
      paddingBottom: 6,
      paddingHorizontal: 10,
    },
    image: {
      height: 250,
      width: 250,
    },
    ImageStyle: {
      height: 300,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    button: {
      paddingBottom: 80,
    },
    error: {
      color: colors.primaryError,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    iconStyle : {
      height : 28,
      width : 30,
      margin : 10
    }
  });

  export default styles

