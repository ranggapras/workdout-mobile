import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import Logo from '../assets/logoworkdout.png'
import Gambar from '../assets/crown.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const terdaftarmember = () => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20, alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ alignItems: 'center' }}>
                <Image source={Logo} style={{ width: 61.78, height: 50 }} />
                <Text style={{
                    color: '#fff',
                    fontSize: 30,
                }}>MEMBERSHIP</Text>
            </View>
            <Image source={Gambar} style={{ height: 150, width: 150 }} />
            <View style={{
                alignItems: 'center',
            }}>
                <Text style={{
                    color: '#fff',
                    fontSize: 25,
                    textAlign: 'center',
                    marginBottom: 80
                }}>Anda telah terdaftar{'\n'}Membership sampai dengan</Text>
                <Text style={{
                    color: '#fff',
                    fontSize: 23,
                    textAlign: 'center',
                    color: '#4BD37B',
                    marginBottom: 40
                }}> 20 November 2021 </Text>
            </View>
        </View>
    )
}

export default terdaftarmember

const styles = StyleSheet.create({})
