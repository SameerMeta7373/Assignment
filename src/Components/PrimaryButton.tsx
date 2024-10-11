import {Children} from 'react';
import {primaryButtonI} from '../Interface';
import {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/color';

const PrimaryButton: FC<primaryButtonI> = ({onpress, children}) => {
  return (
    <Pressable
      onPress={onpress}
      android_ripple={{color: colors.primaryRipple}}
      style={styles.buttonInnerContainer}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: colors.primaryBlack,
    paddingVertical: 10,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    marginTop: 50,
    marginHorizontal : 60
  },
  text: {
    color: colors.primarywhite,
    fontSize: 22,
  },
});
