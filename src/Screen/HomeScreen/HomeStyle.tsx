import { StyleSheet } from "react-native";
import colors from "../../../constants/color";
import fonts from "../../../constants/font";

const styles = StyleSheet.create({
    container: {
      borderColor: colors.primaryGrey,
      borderWidth: 1,
  
      backgroundColor: colors.primaryDetails,
  
      height: 120,
      flex: 0.7,
      borderRadius: 20,
      margin: 25,
      marginBottom: 2,
    },
    TextStyle: {
      fontFamily: fonts.font2,
      fontSize: 25,
      marginVertical: 12,
      marginHorizontal: 10,
      color: colors.primaryText,
      textAlign: 'center',
    },
    data: {
      marginTop: 10,
      margin: 10,
      color: colors.primaryBlack,
      fontFamily: fonts.font2,
      fontSize: 22,
      marginBottom: 10,
    },
    imageStyle: {
      height: 200,
      width: 200,
      marginBottom: 70,
      alignSelf: 'center',
    },
  });


  export default styles