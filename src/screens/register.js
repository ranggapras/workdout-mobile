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
import { useEffect,useState } from 'react';
import Models from '../models/Models';    
import React from 'react'

const register = ({ navigation }) => {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [notelp, setnotelp] = useState('')
  const [password, setpassword] = useState('')

  const registerReq = async () => {
    const dat = { nameUser:username, email: email, phoneNumber: notelp, password: password };
    if (username === '' || email === ''|| notelp === ''|| password === '') {
      return alert('Data harus diisi !!!');
    }

    const res = await Models.register(dat);
    console.log(res);
    if (res.code != '201') {
      alert(`${res.message}`);
      return true;
    } else {
      return navigation.navigate('Login');
    }
  };
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p="2" py="8" w="100%" mx="auto" backgroundColor="#253334" justifyContent="center">
        <Image source={require('../assets/logo.png')} size="sm" marginX="2" alt="logo" />
        <Heading size="lg" fontWeight="600" color="#FFFFFF" mt="5" marginX="15">
          Daftar
        </Heading>
        <Heading mt="1" color="#BEC2C2" fontWeight="medium" size="md" mt="5" marginX="15" marginBottom="35" >
          Daftar ke Aplikasi WORKD Out
        </Heading>
        <VStack space={3} mt="5" marginX="15">
          <FormControl>
            <FormControl.Label
              _text={{
                color: '#FFFFFF',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
            </FormControl.Label>
            <Input placeholder="Nama User" borderWidth="0" borderColor="coolGray.600" borderBottomWidth="2" fontSize='md' color='white'
            onChangeText={setusername} />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
            </FormControl.Label>
            <Input placeholder="Email" borderWidth="0" borderColor="coolGray.600" borderBottomWidth="2" fontSize='md' color="white"
            onChangeText={setemail} />
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
            </FormControl.Label>
            <Input placeholder="No. Telepon" borderWidth="0" borderColor="coolGray.600" borderBottomWidth="2" fontSize='md' color="white"
            onChangeText={setnotelp} />
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
            </FormControl.Label>
            <Input type="password" placeholder="Kata Sandi" borderWidth="0" borderColor="coolGray.600" borderBottomWidth="2" fontSize='md' color="white"
            onChangeText={setpassword} />
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
            </FormControl.Label>
            <Input type="password" placeholder="Konfirmasi Kata Sandi" borderWidth="0" borderColor="coolGray.600" borderBottomWidth="2" fontSize='md' color="white" />
          </FormControl>
          <Button ml="3" mt="2" bgColor="#7C9A92" _text={{ color: 'white' }} w='321' h='61'
            onPress={registerReq}>
            Daftar
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="#FFFFFF" fontWeight={400}>
              Sudah Punya Akun?{' '}
            </Text>
            <Link
              _text={{
                color: '#FFFFFF',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => navigation.navigate("Login")}>
              Masuk
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  )
}

export default register
