import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Router from './router/index';

const MyTheme = {
  colors: {
    background: '#253334',
    text: '#ffffff'
  }
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
