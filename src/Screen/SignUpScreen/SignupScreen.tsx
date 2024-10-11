import React, {useEffect, useState} from 'react';
import {Formik, useFormik} from 'formik';
import styles from './SignUpStyle';
import * as Yup from 'yup';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Button,
  Switch,
  Pressable,
} from 'react-native';
import PrimaryButton from '../../Components/PrimaryButton';
import {isEnabled} from 'react-native/Libraries/Performance/Systrace';
import colors from '../../../constants/color';
import SplashScreen from 'react-native-splash-screen';

const Signup: React.FC = (props: any) => {
  const [showPassword, setShowPassword] = useState(true);
  const ValidateForm = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    email: Yup.string().email('Invalid Email').required('Email is Required'),
    password: Yup.string()
      .min(8, 'Password must be of atleast 8 characters')
      .required('Password is Required'),
  });

  function Password() {
    setShowPassword(!showPassword);
  }
  useEffect(()=>{
    SplashScreen.hide()
  },[])

  return (
    
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.ImageStyle}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/signup.png')}></Image>
          <Text
            style={{
              paddingTop: 2,
              fontSize: 15,
            }}>
            Enter Your Credentials
          </Text>
        </View>
        <Formik
          initialValues={{name: '', email: '', password: ''}}
          validationSchema={ValidateForm}
          onSubmit={values =>
            props?.navigation.navigate('Home', {data: values})
          }>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.button}>
              <Text style={styles.Text}>Name</Text>
              <TextInput
                style={styles.Textinput}
                placeholder="Enter Your Name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              {touched.name && errors.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}
              <Text style={styles.Text}>Email</Text>
              <TextInput
                style={styles.Textinput}
                placeholder="Enter Your Email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
              <Text style={styles.Text}>Password</Text>
              <View
                style={[
                  styles.Textinput,
                  {flexDirection: 'row', justifyContent: 'space-between'},
                ]}>
                <TextInput
                  style={{fontSize: 20}}
                  secureTextEntry={showPassword}
                  placeholder="Enter your Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                <Pressable onPress={Password}>
                  <Image
                    style={styles.iconStyle}
                    source={
                      !showPassword
                        ? require('../../../assets/images/Show.jpg')
                        : require('../../../assets/images/Hide.jpg')
                    }
                  />
                </Pressable>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <PrimaryButton onpress={handleSubmit}>Sign Up</PrimaryButton>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Signup;
