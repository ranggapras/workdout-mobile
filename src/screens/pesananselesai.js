import React from 'react'
import { ImageBackground, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const pesananselesai = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/backgroundPesanan.png')} style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <Text style={{ fontWeight: "bold", fontSize: 34, color: "#FFFFFF", marginBottom: 80 }}>Pesanan Berhasil</Text>
                <Image source={require('../assets/selesai.png')} style={{ height: 150, width: 150 }} />
                <TouchableOpacity style={{
                    width: wp('90%'),
                    height: 60,
                    backgroundColor: '#7C9A92',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 15,
                    marginTop: 50
                }}
                    onPress={() => navigation.navigate('Beranda')}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 25
                    }}>BERANDA</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default pesananselesai

const styles = StyleSheet.create({})
