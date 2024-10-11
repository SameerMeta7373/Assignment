import {StyleSheet, View} from 'react-native';
import Signup from './src/Screen/SignUpScreen/SignupScreen';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Screen/HomeScreen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskScreen from './src/Screen/TaskScreen/TaskScreen';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {


 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign-Up"
          component={Signup}
          options={{title: 'Welcome To your Own Library'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Tasks"
          component={TaskScreen}
          options={{title: 'Tasks'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
