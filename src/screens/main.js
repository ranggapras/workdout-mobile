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
  
  const main = () => {
      return (
        <NativeBaseProvider >
            <Box safeArea flex={1} p="2" py="8" w="100%" mx="auto" backgroundColor="#253334" justifyContent="center">
            <Image source={require('../assets/logo.png')} size="sm" marginX="2" alt="logo" />
                <Heading size="lg" fontWeight="600" color="#FFFFFF" mt="5" marginX="15">
                    Halo Eka
                </Heading>
                <Heading mt="1" color="#BEC2C2" fontWeight="medium" size="md" mt="5" marginX="15" marginBottom="35" >
                    Siap untuk olahraga hari ini?
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
            <Input placeholder="Username" borderWidth="0" borderColor="coolGray.600" borderBottomWidth="2" fontSize='md' />
          </FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
            </FormControl.Label>
            <FormControl>
            <Input type="password" placeholder="Password" borderWidth="0" borderColor="coolGray.600" borderBottomWidth="2" fontSize='md'  />
          </FormControl>
          <Button mt="2" bgColor="#7C9A92" _text={{ color: 'white' }} w='321' h='61'>
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
              href="#">
              Daftar
            </Link>
          </HStack>
        </VStack>
            </Box>
          </NativeBaseProvider>
      )
  }
  
  export default main
  