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
  KeyboardAvoidingView
} from 'native-base';

import React from 'react'
import ProfilePicture from '../assets/default.png'
import { TouchableOpacity, View, ScrollView, Image } from 'react-native';
import Back from '../assets/back.svg'
import Models from '../models/Models';
import { useState, useEffect } from 'react';


const editprofile = ({ navigation }) => {
  const [dataUser, setdataUser] = useState(null)
  // const [edituser, setedituser] = useState(null)

  const simpan = async () => {
    const dat = { email: email, password: password };
    if (email === '' || password === '') {
      return alert('Data harus diisi !!!');
    }

    const res = await Models.login(dat);
    if (res.code != '200') {
      alert(`${res.message}`);
      return true;
    } else {
      const dataLokal = {
        token: res.accessToken
      };
      const userData = JSON.parse(atob(res.accessToken.split('.')[1]))
      storeToken(dataLokal);
      storeData(userData);
      return navigation.navigate('App');
    }
  };


  useEffect(() => {
    const getProfil = async () => {
      const res = await Models.getProfil();
      console.log(res);
      if (res.code != '200') {
        // alert(`${res}`);
      } else {
        setdataUser(res.data)
        //  setedituser(res)
        console.log(res);
      }
    }
    getProfil()
  }, [])
  return (
    <NativeBaseProvider >
      <ScrollView>
        <Box safeArea flex={1} p="2" py="8" w="100%" mx="auto" backgroundColor="#253334" justifyContent="flex-start">
          <Box flexDirection="row" justifyContent='space-between' pl='4'>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
          </Box>
          <Box alignItems='center' marginTop='10'>
            <Image source={dataUser === null ? ProfilePicture : {uri: dataUser.photo}} style={{ width: 150, height: 150, borderRadius: 100 }} />
            <Text mt='6' color='white' fontWeight='bold' fontSize='30'>{`${dataUser === null ? '' : dataUser.nameUser}`}</Text>
            <Text mt='6' pb='4' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="2" color='white' textAlign='center'>Profil</Text>
          </Box>
          <VStack space={3} mt="5" marginX="15">
            <Input onChangeText={(value) =>
              setdataUser({ ...dataUser, nameUser: value })
            } pl='2' mt='4' pb='2' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="1" color='white' value={`${dataUser === null ? '' : dataUser.nameUser}`} />
            <Input onChangeText={(value) =>
              setdataUser({ ...dataUser, email: value })
            } pl='2' mt='4' pb='2' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="1" color='white' value={`${dataUser === null ? '' : dataUser.email}`} />
            <Input onChangeText={(value) =>
              setdataUser({ ...dataUser, phoneNumber: value })
            } pl='2' mt='4' pb='2' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="1" color='white' value={`${dataUser === null ? '' : dataUser.phoneNumber}`} />
            <Input onChangeText={(value) =>
              setdataUser({ ...dataUser, address: value })
            } pl='2' mt='4' pb='2' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="1" color='white' value={`${dataUser === null ? '' : dataUser.address}`} />
            <Box w='100%' flexDirection='row' justifyContent='flex-end'>
              <Button ml="3" mt="2" bgColor="#7C9A92" _text={{ color: 'white', fontSize: 18 }} w='160' h='39' borderRadius='10'
                onPress={() => navigation.navigate("Profile")}>
                Simpan
              </Button>
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  )
}
export default editprofile
