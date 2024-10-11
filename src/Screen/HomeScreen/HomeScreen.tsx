import {Image, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../Components/PrimaryButton';
import FieldContainer from '../../Components/FieldContainer';
import styles from './HomeStyle';

function HomeScreen({route, navigation}: any) {
  const handleNavigaion = () => {};

  console.log(route?.params?.data?.password);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.TextStyle}>Sign-Up Details</Text>
        <Image
          style={styles.imageStyle}
          source={require('../../../assets/images/profilepic.png')}></Image>
        <View style={styles.data}>
          <FieldContainer field={'Name'} value={route?.params?.data?.name} />
          <FieldContainer field={'Email'} value={route?.params?.data?.email} />
          <FieldContainer field={'Password'} value={route?.params?.data?.password} />
        </View>
        <View
          style={{
            marginTop: 100,
          }}>
          <PrimaryButton onpress={() => navigation.navigate('Tasks')}>
            Click To Add Task
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}


export default HomeScreen;
