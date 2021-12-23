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
  Image,
  Select
} from 'native-base';

import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native';
import Back from '../assets/back.svg'
import Laki from '../assets/lk.svg'
import Perempuan from '../assets/pr.svg'
import { useTheme } from 'styled-components';


const kalkulatorbb = ({ navigation }) => {

  const [beratBadan, setBeratBadan] = useState('')
  const [tinggiBadan, setTinggiBadan] = useState('')
  const [hitungtotal, sethitungtotal] = useState(0)
  

  const onChangebb = (text) => {
    setBeratBadan(text.replace(/[^0-9]/g, ''));
  }
  const onChangeumur = (text) => {
    setUmur(text.replace(/[^0-9]/g, ''));
  }
  const onChangetb = (text) => {
    setTinggiBadan(text.replace(/[^0-9]/g, ''));
  }
  const [aktivitas, setAktivitas] = useState();

  const hitung = () => {
    const total = beratBadan/((tinggiBadan/100)*(tinggiBadan/100))
    sethitungtotal(total)
  }
  return (
    <NativeBaseProvider >
      <Box safeArea flex={1} p="2" py="8" w="100%" mx="auto" backgroundColor="#253334" justifyContent="flex-start">
        <Box flexDirection="row" justifyContent='space-between' pl='4' mb='4'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
        </Box>
        <Image source={require('../assets/logo.png')} ml='4' size="sm" marginX="2" alt="logo" />
        <Heading size="xl" fontWeight="600" color="#FFFFFF" mt="5" marginX="15">
          Indeks Massa Tubuh
        </Heading>
        <Box mt='5' flexDirection='column' alignSelf='center' justifyContent='center'>
          <FormControl flexDirection='row'>
            <Text color='white'>
              Tinggi(cm)
            </Text>
            <Input textAlign='center' ml='20%' h='70' w='120' bgColor='white' keyboardType='numeric' borderRadius='20' onChangeText={(text) => onChangetb(text)}
              value={tinggiBadan} />
          </FormControl>
          <FormControl mt='10%' flexDirection='row'>
            <Text color='white'>
              Berat(kg)
            </Text>
            <Input textAlign='center' ml='22.5%' h='70' w='120' bgColor='white' keyboardType='numeric' borderRadius='20' onChangeText={(text) => onChangebb(text)}
              value={beratBadan} />
          </FormControl>
          <Box size='sm' backgroundColor='white' h='70' w='120' borderRadius='20' alignSelf='center' mt='15%' >
          <Text textAlign='center' marginTop='6'>{(hitungtotal).toFixed(1)}</Text>
          </Box>
          
          <TouchableOpacity onPress={() => navigation.navigate("Tabel")}>
            <Text mt='5' color='white' alignSelf='center' fontSize='18' borderBottomColor='white' borderBottomWidth="1">
              Lihat Tabel IMT
            </Text>
          </TouchableOpacity>
          <Button mt='20%' bgColor='#CBF3E8' borderRadius='10' w='284' h='71'
            _text={{
              color: "black",
              fontSize: 20
            }}
            onPress={() =>hitung() }>
            Hitung
          </Button>
        </Box>
      </Box>
    </NativeBaseProvider>
  )
}

export default kalkulatorbb
