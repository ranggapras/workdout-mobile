import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from 'native-base';

import React from 'react'
import { TouchableOpacity, BackHandler, Image, ScrollView, View } from 'react-native';
import { fontSize, width } from 'styled-system';
import ProfilePicture from '../assets/default.png'
import Crown from '../assets/crown.png'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';
import Models from '../models/Models';
const profile = ({ navigation }) => {
  const [dataUser, setdataUser] = useState(null)
  const [isMember, setIsMember] = useState(false)

  const press = () => {
    BackHandler.exitApp()
    AsyncStorage.removeItem('token')
  }

  useEffect(() => {
    const getProfil = async () => {
      const res = await Models.getProfil();
      if (res.code != '200') {
        // alert(`${res}`);
      } else {
        setdataUser(res.data)
        setIsMember(res.data.isMember)
      }
    }
    getProfil()
  }, [])

  return (
    <NativeBaseProvider >
      <ScrollView>
        <Box safeArea flex={1} p="2" py="8" w="100%" mx="auto" backgroundColor="#253334" justifyContent="flex-start">
          <Box alignItems='center' mt='1'>
            <View style={{ position: 'relative' }}>
              <Image source={Crown} style={{
                position: 'absolute',
                bottom: 10,
                left: 25,
                zIndex: 10,
                width: 45,
                display: isMember ? 'flex' : 'none'
              }} />
              <Image
                source={dataUser === null ? ProfilePicture : { uri: dataUser.photo }}
                style={{ width: 150, height: 150, borderRadius: 100 }} />
            </View>
            <Text mt='6' color='white' fontWeight='bold' fontSize='30'>{`${dataUser === null ? '' : dataUser.nameUser}`}</Text>
            <Text mt='6' pb='4' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="2" color='white' textAlign='center'>Profil</Text>
          </Box>
          <VStack space={3} mt="5" marginX="15">
            <Text pl='2' mt='4' pb='2' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="1" color='white' >{`${dataUser === null ? '' : dataUser.nameUser}`}</Text>
            <Text pl='2' mt='4' pb='2' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="1" color='white' >{`${dataUser === null ? '' : dataUser.email}`}</Text>
            <Text pl='2' mt='4' pb='2' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="1" color='white' >{`${dataUser === null ? '' : dataUser.phoneNumber}`}</Text>
            <Text pl='2' mt='4' pb='2' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="1" color='white' >{`${dataUser === null ? 'Alamat' : dataUser.address}`}</Text>
            <Box w='100%' flexDirection='row' justifyContent='flex-end'>
              <Button ml="3" mt="2" bgColor="#7C9A92" _text={{ color: 'white', fontSize: 18 }} w='160' h='39' borderRadius='10'
                onPress={press}>
                Keluar
              </Button>
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  )
}

export default profile
