import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { ImageBackground, Image, View, Text } from 'react-native'



const splash = ({ navigation }) => {

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('email');
          const res = await JSON.parse(jsonValue);
          if (jsonValue == null) {
            return null;
          } else {
            const response = await Models.login(res);
            console.log(response);
            if (res.code != '200') {
              alert(`${res.message}`);
              return true;
            }
            else
            return navigation.navigate('App');
          }
        } catch (e) {}
      };

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Onboard');
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


