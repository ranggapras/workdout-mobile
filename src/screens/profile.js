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
  Image
} from 'native-base';

import React from 'react'
import { TouchableOpacity } from 'react-native';
import { fontSize } from 'styled-system';
import ProfilePicture from '../assets/profil.png'

const profile = ({ navigation }) => {
  return (
    <NativeBaseProvider >
      <Box safeArea flex={1} p="2" py="8" w="100%" mx="auto" backgroundColor="#253334" justifyContent="flex-start">
        <Box alignItems='center' mt='1'>
          <Image source={ProfilePicture} size="150" marginX="2" alt="logo" />
          <Text mt='6' color='white' fontWeight='bold' fontSize='30'>Eka</Text>
          <Text mt='6' pb='4' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="2" color='white' textAlign='center'>Profil</Text>
        </Box>
        <VStack space={3} mt="5" marginX="15">
          <Text pl='2' mt='4' pb='2' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="1" color='white' >Eka</Text>
          <Text pl='2' mt='4' pb='2' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="1" color='white' >Eka@gmail.com</Text>
          <Text pl='2' mt='4' pb='2' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="1" color='white' >082112212</Text>
          <Text pl='2' mt='4' pb='2' w='100%' borderWidth="0" borderColor="white" borderBottomWidth="1" color='white' >Jl. Jalan Hayuk no.69</Text>
          <Box w='100%' flexDirection='row' justifyContent='flex-end'>
            <Button ml="3" mt="2" bgColor="#7C9A92" _text={{ color: 'white', fontSize: 18 }} w='160' h='39' borderRadius='10'
              onPress={() => navigation.navigate("Login")}>
              Keluar
            </Button>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  )
}

export default profile
