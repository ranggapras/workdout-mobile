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

import React,{useState} from 'react'
import { fontSize } from 'styled-system';
import Logo from '../assets/logoworkdout.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Models from '../models/Models';



const login = ({ navigation }) => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

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
const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('email', jsonValue);
  } catch (e) {}
};
getData();
const loginReq = async () => {
  const dat = {email: email, password: password};
  if (email === '' || password === '') {
    return alert('Data harus diisi !!!');
  }

  const res = await Models.login(dat);
  if (res.code != '200') {
    alert(`${res.message}`);
    return true;
  } else {
    const dataLokal = {
      email: email,
      password: password,
      id: res.id_User,
    };
    storeData(dataLokal);
    return navigation.navigate('App');
  }
};

  return (
    <NativeBaseProvider >
      <Box safeArea flex={1} p="2" py="8" w="100%" mx="auto" backgroundColor="#253334" justifyContent="center">
        <Image source={require('../assets/logo.png')} size="sm" marginX="2" alt="logo" />
        <Heading size="lg" fontWeight="600" color="#FFFFFF" mt="5" marginX="15">
          Masuk
        </Heading>
        <Heading mt="1" color="#BEC2C2" fontWeight="medium" size="md" mt="5" marginX="15" marginBottom="35" >
          Masuk ke Aplikasi WORKD Out
        </Heading>
        <VStack space={3} mt="5" marginX="15">
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
            </FormControl.Label>
            <Input placeholder="Username" borderWidth="0" borderColor="coolGray.600" borderBottomWidth="2" fontSize='md' color="white"
            onChangeText={setEmail}
            value={email}
            />
          </FormControl>
          <FormControl.Label
            _text={{
              color: 'white',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
          </FormControl.Label>
          <FormControl>
            <Input type="password" placeholder="Password" borderWidth="0" borderColor="coolGray.600" borderBottomWidth="2" fontSize='md' color="white" 
            onChangeText={setPassword}
            value={password}
            />
          </FormControl>
          <Button ml="3" mt="2" bgColor="#7C9A92" _text={{ color: 'white' }} w='321' h='61'
            onPress={()=>loginReq}>
            Masuk
          </Button>
          <HStack mt="6"
            justifyContent="center">
            <Text fontSize="sm" color="#FFFFFF" fontWeight={400}>
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
        </VStack>
      </Box>
    </NativeBaseProvider>
  )
}

export default login
