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

import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native';
import { fontSize } from 'styled-system';
import Back from '../assets/back.svg'

const hasil = ({ navigation }) => {
  return (
    <NativeBaseProvider >
      <Box safeArea flex={1} p="2" py="8" w="100%" mx="auto" backgroundColor="#253334" justifyContent="flex-start">
        <Box flexDirection="row" justifyContent='space-between' pl='4' mb='4'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
        </Box>
        <Image source={require('../assets/logo.png')} ml='4' size="sm" marginX="2" alt="logo" />
        <Text color='white'>
          Hasil kalori harian anda adalah....berapa hayo
        </Text>
      </Box>
    </NativeBaseProvider>
  )
}
export default hasil
