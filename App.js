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
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Register from './src/screens/register'
import Login from './src/screens/login'
import Splash from './src/screens/splash';
import Onboard from './src/screens/onboard';
import Main from './src/screens/main';
import Product from './src/screens/product';
import Profile from './src/screens/profile';
import Editprofile from './src/screens/editprofile';
import Kalkulator from './src/screens/kalkulator';
import Kalkulatorkalori from './src/screens/kalkulatorkalori';
import Hasil from './src/screens/hasil';
import Kalkulatorbb from './src/screens/kalkulatorbb';
import Chat from './src/screens/chat';

import HomeIcon from './src/assets/home.svg'
import ChatIcon from './src/assets/chat.svg'
import ProductIcon from './src/assets/product.svg'
import ProfileIcon from './src/assets/profile.svg'

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();



const TabNavigator = () => {
  return (
    <Tab.Navigator  initialRouteName="Home" screenOptions={{headerShown:false}}  activeColor={'white'}
    tabBarActiveTintColor="#7C9A92"
    
    barStyle={{backgroundColor: '#2B4244', paddingBottom:10}}
    fgda
    fsgbn3
    fhsx>
      <Tab.Screen name="Main" component={Main} tabBarBadge = "Home"
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <HomeIcon/>,
          backgroundColor: 'white',}}  />
      <Tab.Screen name="Prodcut" component={Product} showLabel={true}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <ProductIcon/>,
          backgroundColor: 'white',}} />
      <Tab.Screen name="Chat" component={Chat} showLabel={false}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <ChatIcon/>,
          backgroundColor: 'white',}}  />
          <Tab.Screen name="Profile" component={Profile} showLabel={false}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <ProfileIcon/>,
          backgroundColor: 'white',}}  /> 
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
    <Stack.Screen name="Kalkulatorkalori" component={Kalkulatorkalori}/>
    <Stack.Screen name="Hasil" component={Hasil}/>
    <Stack.Screen name="Kalkulatorbb" component={Kalkulatorbb}/>
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
