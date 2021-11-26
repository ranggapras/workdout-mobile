import { NativeBaseProvider,Box,Text, FormControl,Input } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import Logo from '../assets/logo-black.svg'

const chat = ({navigation}) => {
    return (
        <NativeBaseProvider>
            <Box  flex={1} backgroundColor='#253334' h='100%'>
           <Box  backgroundColor='#87ADA3' alignItems='space-between' justifyContent= 'center'>
               <Logo/>       
               <Text color='black' textAlign='center' fontSize='24'>
                   Workd Out
               </Text>
            </Box>
            <Box mx='4' mt='4' justifyContent='flex-start'>
            <Box>
            <Text color='white' textAlign='right' p='1'>
                28-09-2021      12:15
            </Text>
                
            <Box backgroundColor='#CBF3E8' maxWidth='90%' p='2.5' alignSelf='flex-end' borderRadius='20'>
                Untuk harganya berapa ya min?
            </Box>
            </Box>
            <Box>
            <Text color='white'>
                28-09-2021      12:16
            </Text>
            <Box backgroundColor='white' maxWidth='90%' mt='1' p='2.5' alignSelf='flex-start' borderRadius='20'>
                Tergantung dari pemilihan jumlah latihan
            </Box>
            </Box>
            </Box>
            <Box>
            <FormControl  >
                <Input placeholder='Ketik' color='white'/>
            </FormControl>
            
            </Box>
            </Box> 
        </NativeBaseProvider>
    )
}

export default chat
