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

import React, { useState,useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity, View } from 'react-native';
import Back from '../assets/back.svg'
import Laki from '../assets/lk.svg'
import Perempuan from '../assets/pr.svg'
import { fontSize } from 'styled-system';
import Models from '../models/Models';

const kalkulatorkalori = ({ navigation }) => {
  const [gender, setGender] = useState("")
  const [beratBadan, setBeratBadan] = useState('')
  const [umur, setUmur] = useState('')
  const [tinggiBadan, setTinggiBadan] = useState('')
  const [activity, setActivity] = useState([])
  const [kalori, setkalori] = useState(0)
  
  useEffect(() => {
    const getActivity = async () => {
      const res = await Models.getActivity();
      if (res.code != '200') {
        // alert(`${res}`);
      } else {
       setActivity(res.data)
      }
    }
    getActivity()
  }, [])

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

  const hitungKalori = () => {

  let age = parseFloat(umur);

  let heightCM = parseFloat(tinggiBadan);

  let weight = parseFloat(beratBadan);

if(gender == "P") {
  //females =  655.09 + 9.56 x (Weight in kg) + 1.84 x (Height in cm) - 4.67 x age   
 setkalori(aktivitas + 655.09 + (9.56 * weight) + (1.84 * heightCM) - (4.67 * age));
}  else {
 setkalori(aktivitas + 66.47 + (13.75 * weight) + (5 * heightCM) - (6.75 * age));
}
navigation.navigate("Hasil",{kalori:kalori})
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
          Kalori Harian
        </Heading>
        <Heading size="sm" fontWeight='400' color="white" mt='15' marginX='15'>
          Jenis Kelamin
        </Heading>
        <VStack space={3} marginX="15" alignItems='center' justifyContent='center' flexDirection='row'>
          <TouchableOpacity onPress={() => setGender("L")}>
            <Box mt='5' mr='50' h='70' w='100' bgColor={gender === 'L' ? '#00FFBB' : 'white'} justifyContent='center' alignItems='center' borderRadius="30">
              <Laki />
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setGender("P")}>
            <Box mt='5' h='70' w='100' bgColor={gender === 'P' ? '#00FFBB' : 'white'} justifyContent='center' alignItems='center' borderRadius="30" >
              <Perempuan />
            </Box>
          </TouchableOpacity>
        </VStack>
        <Box mt='5' flexDirection='column' alignSelf='center' justifyContent='center'>
          <FormControl>
            <FormControl.Label _text={{
              color: 'white',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
              Umur (Tahun)
            </FormControl.Label>
            <Input type="number" h='37' w='310' bgColor='white' keyboardType='numeric' borderRadius='10' onChangeText={(text) => onChangeumur(text)}
              value={umur} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{
              color: 'white',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
              Tinggi Badan (cm)
            </FormControl.Label>
            <Input h='37' w='310' bgColor='white' keyboardType='numeric' borderRadius='10' onChangeText={(text) => onChangetb(text)}
              value={tinggiBadan} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{
              color: 'white',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
              Berat Badan (kg)
            </FormControl.Label>
            <Input h='37' w='310' bgColor='white' keyboardType='numeric' borderRadius='10' onChangeText={(text) => onChangebb(text)}
              value={beratBadan} />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{
              color: 'white',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
              Aktivitas
            </FormControl.Label>
            <View style={{ width: 310, borderRadius: 10, height: 37, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <Picker
                style={{ width: 310, backgroundColor: 'white', height: 37, borderRadius: 10 }}
                mode='dropdown'
                selectedValue={aktivitas}
                onValueChange={(itemValue, itemIndex) =>
                  setAktivitas(itemValue)
                }>
                  {activity.length > 0 && activity.map((d, idx) => {
                        return (
                          <Picker.Item key={idx} label={d.name} value={d.jumlahKalori} />
                        )
                    })}
              </Picker>
            </View>
          </FormControl>

          <Button ml='4' mt='5' bgColor='#CBF3E8' borderRadius='10' w='284' h='71'
            _text={{
              color: "black",
              fontSize: 20
            }}
            onPress={() => hitungKalori() }>
            Hitung
          </Button>
        </Box>
      </Box>
    </NativeBaseProvider>
  )
}

export default kalkulatorkalori
