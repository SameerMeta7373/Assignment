import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {primaryButtonI} from '../Interface';
import fonts from '../../constants/font';
import colors from '../../constants/color';

const Title: FC<primaryButtonI> = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontFamily : fonts.font2,
    color : colors.primaryBlack,
    textAlign: 'center',
    borderWidth: 6,
    borderColor: colors.primaryBlack,
    height: 70,
    backgroundColor : colors.primaryDetails,
    margin : 20,
    borderRadius: 20,
    paddingTop : 7

  },
});

export default Title;
