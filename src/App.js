import React from 'react'
import { StyleSheet, Text, View,Alert } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Router from './router/index';
import { LogBox } from 'react-native'
import messaging from '@react-native-firebase/messaging';
import { useEffect,useState } from 'react';
import NotifService from '../NotificationService'

const MyTheme = {
  colors: {
    background: '#253334',
    text: '#ffffff'
  }
};

LogBox.ignoreLogs([
  `TypeError: destroy is not a function. (In 'destroy()', 'destroy' is an
  instance of Promise)`,
])
const App = () => {
const [registerToken, setregisterToken] = useState('');
const [fcmRegistered, setfcmRegistered] = useState(false);
const onRegister =(token) => {
  setregisterToken(token.token)
  setfcmRegistered(true)
}
const onNotif =(notif) => {
  Alert.alert(notif.title,notif.message)

}
const notif = new NotifService(onRegister,onNotif) 
const hadlePerm =  (perms) => {
  Alert.alert('Permissions',JSON.stringify(perms))
}
  return (
    <NavigationContainer theme={MyTheme}>
      <Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
