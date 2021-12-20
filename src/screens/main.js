import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, BackHandler, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Divider,
  Image
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from '../assets/calendar.svg';
import Calculator from '../assets/calculator.svg'
import Member from '../assets/member.svg'
import Topup from '../assets/topup.svg'
import Cart from '../assets/cart.svg'
import Bell from '../assets/bell.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Models from '../models/Models';

const [dataUser, setdataUser] = useState(null)


const main = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [saldo, setSaldo] = useState()

  const backAction = () => {
    if (navigation.isFocused()) {
      Alert.alert('Keluar', 'Apakah anda yakin akan keluar dari aplikasi?', [
        {
          text: 'Tidak',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Keluar', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
  }, []);

  useEffect(async () => {
    const getProfil = async () => {
      const res = await Models.getProfil();
      const name = await res.data.nameUser
      const saldo = await res.data.saldo
      setUsername(name);
      setSaldo(saldo);
      console.log(res);
      if (res.code != '200') {
        // alert(`${res}`);
      } else {
       setdataUser(res)
       console.log(res);
      }
    }
    getProfil()
  }, [])


  return (
    <View style={{ flex: 1, backgroundColor: '#253334' }}>
      <NativeBaseProvider >
        <Box safeArea flex={1} p="2" py="8" w="100%" mx="auto" backgroundColor="#253334" >
          <Heading size="lg" fontWeight="600" color="#FFFFFF" mt="0" marginX="15">
            Halo {username}
          </Heading>
          <Heading mt="1" color="#BEC2C2" fontWeight="medium" size="md" mt="5" marginX="15" marginBottom="35" >
            Siap untuk olahraga hari ini?
          </Heading>
          <Box flexDirection="row" justifyContent="space-between" w='80%' alignSelf='center'>
            <Box flex={1} flexDirection="column" w="160" h="50" pt="0.5" pl="5" borderRadius="120" backgroundColor="#CBF3E8">
              <Text style={{ color: "#3A5051", fontSize: 14 }}>Saldo:</Text>
              <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Rp {saldo}</Text>
            </Box>
            <Box flex={1} flexDirection='row' w="160" h="50" borderRadius="120" ml="-60" justifyContent='center' alignItems='center' backgroundColor="#58B4A7">
              <Topup />
              <Text style={{ color: "white", fontSize: 22, marginLeft: 10 }}>Isi Ulang</Text>
            </Box>
          </Box>
          <View style={{ flex: 1, flexDirection: "row", marginTop: 40, justifyContent: 'space-between' }}>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <TouchableOpacity onPress={() => navigation.navigate('JadwalWorkout')}>
                <View style={{ paddingLeft: 18, width: 62, height: 60, backgroundColor: "white", justifyContent: 'center', borderRadius: 20 }}>
                  <Calendar />
                </View>
              </TouchableOpacity>
              <Text style={{ color: "white", marginTop: 5, fontSize: 12, }}>
                {`Jadwal\nWorkout`}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <TouchableOpacity onPress={() => navigation.navigate('Kalkulator')}>
                <View style={{ paddingLeft: 14, width: 62, height: 60, backgroundColor: "white", justifyContent: 'center', borderRadius: 20 }}>
                  <Calculator />
                </View>
              </TouchableOpacity>
              <Text style={{ color: "white", marginTop: 5, fontSize: 12 }}>
                Kalkulator
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <TouchableOpacity onPress={() => navigation.navigate('Membership')}>
                <View style={{ paddingLeft: 14, width: 62, height: 60, backgroundColor: "white", justifyContent: 'center', borderRadius: 20 }}>
                  <Member />
                </View>
              </TouchableOpacity>
              <Text style={{ color: "white", marginTop: 5, fontSize: 12 }}>
                Membership
              </Text>
            </View>
          </View>
          <Image source={require('../assets/pt.png')} h="250" w="370" marginX="2" alt="logo" />

        </Box>
      </NativeBaseProvider>
    </View>
  )
}

export default main
