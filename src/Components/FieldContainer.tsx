import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import fonts from '../../constants/font';
import colors from '../../constants/color';
import {IFieldContainer} from '../Interface';

const FieldContainer: FC<IFieldContainer> = ({field, value}) => {
  return (
    <Text style={[styles.data, {color: colors.primaryText}]}>
      <Text style={[styles.data, {color: colors.primaryBlack}]}>{field}: </Text> {value}</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.primaryGrey,
    borderWidth: 1,

    backgroundColor: colors.primaryDetails,

    height: 120,
    flex: 0.7,
    borderRadius: 20,
    margin: 25,
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
export default FieldContainer;
