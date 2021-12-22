import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Router from './router/index';
import { LogBox } from 'react-native'

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
  return (
    <NavigationContainer theme={MyTheme}>
      <Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
