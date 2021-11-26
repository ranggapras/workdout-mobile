import React from 'react'
import { View,TouchableOpacity } from 'react-native'
import { NativeBaseProvider,Box,Text,Image,Heading,VStack } from 'native-base'
import Cart from '../assets/cartb.svg'
import Bell from '../assets/bellb.svg'

const product = ({navigation}) => {
    return (
        <NativeBaseProvider >
        <Box flex={1} w="100%" mx="auto" backgroundColor="#253334" justifyContent="flex-start">
        <Box  backgroundColor='#87ADA3' alignItems='space-between' h="8%" flexDirection="row" justifyContent='flex-end' pb='3'>
        <TouchableOpacity style={{marginRight:15}} onPress={()=>console.log('dhjksds')}>
          <Cart/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight:10}} onPress={()=>console.log('dhjksds')}>
          <Bell/>
          </TouchableOpacity>
            </Box>
    <Image source={require('../assets/logo.png')} ml='4' size="sm" marginX="2" alt="logo" />
    <Heading size="xl" fontWeight="600" color="#FFFFFF" mt="5" marginX="15">
    Kalkulator
    </Heading>
    <VStack space={3} mt="5" marginX="15" alignItems= 'center'>
    <TouchableOpacity onPress={() => navigation.navigate("Kalkulatorkalori")}>
        <Box mt="50" h='71' w='284' bgColor="#CBF3E8" justifyContent='center' borderRadius="30">
        <Text color='black' fontWeight='bold' textAlign='center' fontSize="16">
            KALKULATOR HARIAN
        </Text>
        </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Kalkulatorbb")}>
        <Box mt="50" h='71' w='284' bgColor="#CBF3E8" justifyContent='center' borderRadius="30" >
        <Text color='black'fontWeight='bold' textAlign='center' fontSize="16">
            INDEKS MASSA TUBUH
        </Text>
        </Box>
        </TouchableOpacity>
    </VStack>
        </Box>
      </NativeBaseProvider>
    )
}

export default product
