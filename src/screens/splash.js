import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { ImageBackground, Image, View, Text } from 'react-native'
import Models from '../models/Models';

const splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(async () => {
      const jsonValue = await AsyncStorage.getItem('token');
      const res = await JSON.parse(jsonValue);
      console.log(jsonValue)
      if (jsonValue == null) {
        return navigation.replace('Onboard');
      } else {
        return navigation.replace('App');
      }
    }, 3000)
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/Background.png')} style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Image source={require('../assets/logo.png')} style={{ height: 250, width: 250 }} />
        <Text style={{ fontWeight: "bold", fontSize: 34, color: "#FFFFFF" }}>Workd Out</Text>
      </ImageBackground>
    </View>
  )


}

export default splash


