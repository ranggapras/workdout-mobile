import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { Button, NativeBaseProvider, HStack, Link } from 'native-base'
import { marginTop } from 'styled-system'
import { NavigationContainer } from '@react-navigation/native';
const onboard = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/Background.png')} style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Image source={require('../assets/logo.png')} style={{ height: 250, width: 250, marginTop: 100 }} />
        <Text style={{ fontWeight: "bold", fontSize: 34, color: "#FFFFFF" }}>Selamat Datang</Text>
        <Text style={{ textAlign: "center", fontSize: 16, color: "#FFFFFF" }}>Olahraga untuk kesehatan </Text>
        <Text style={{ textAlign: "center", fontSize: 16, color: "#FFFFFF" }}>dan makan cukup untuk </Text>
        <Text style={{ textAlign: "center", fontSize: 16, color: "#FFFFFF", marginBottom: 20 }}>tetap hidup</Text>
        <NativeBaseProvider style={{ flex: 1 }}>
          <Button mt="20" bgColor="#7C9A92" _text={{ color: 'white', fontSize: 20 }} w='321' h='61'
            onPress={() => navigation.navigate('Login')}>
            Masuk
          </Button>
          <HStack mt="6"
            justifyContent="center">
            <Text style={{ textAlign: "center", fontSize: 16, color: "#FFFFFF" }}>
              Belum Punya Akun?{' '}
            </Text>
            <Link
              _text={{
                color: "#FFFFFF",
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => navigation.navigate('Register')}>
              Daftar
            </Link>
          </HStack>
        </NativeBaseProvider>
      </ImageBackground>

    </View>
  )
}

export default onboard
