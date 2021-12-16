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
import Back from '../assets/back.svg'
import { useState } from 'react';


const kalkulator = ({ navigation }) => {

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
                    Kalkulator
                </Heading>
                <VStack space={3} mt="5" marginX="15" alignItems='center'>
                    <TouchableOpacity onPress={() => navigation.navigate("Kalkulatorkalori")}>
                        <Box mt="50" h='71' w='284' bgColor="#CBF3E8" justifyContent='center' borderRadius="30">
                            <Text color='black' fontWeight='bold' textAlign='center' fontSize="16">
                                KALKULATOR HARIAN
                            </Text>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Kalkulatorbb")}>
                        <Box mt="50" h='71' w='284' bgColor="#CBF3E8" justifyContent='center' borderRadius="30" >
                            <Text color='black' fontWeight='bold' textAlign='center' fontSize="16">
                                INDEKS MASSA TUBUH
                            </Text>
                        </Box>
                    </TouchableOpacity>
                </VStack>
            </Box>
        </NativeBaseProvider>
    )
}

export default kalkulator
