import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Register from './src/screens/register'
import Login from './src/screens/login'
import Splash from './src/screens/splash';
import Onboard from './src/screens/onboard';
import Main from './src/screens/main';
import Product from './src/screens/product';
import Profile from './src/screens/profile';
import Editprofile from './src/screens/editprofile';
import Kalkulator from './src/screens/kalkulator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Main" component={Main}  />
      <Tab.Screen name="Prodcut" component={Product} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}



const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Onboard" screenOptions={{headerShown:false}}>
    <Stack.Screen name="Splash" component={Splash}/>
    <Stack.Screen name="Onboard" component={Onboard} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Editprofile" component={Editprofile}/>
    <Stack.Screen name="Kalkulator" component={Kalkulator}/>
    <Stack.Screen
    name="Front"
    component={TabNavigator}
    options={{ headerShown: false }}
  />
  </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
