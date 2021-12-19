import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Logo from '../assets/logoworkdout.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const tabelimt = () => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <Image source={Logo} style={{ width: 61.78, height: 50, marginTop: 20 }} />
            <Text style={{
                color: '#fff',
                fontWeight: '700',
                fontSize: 35,
                marginVertical: 20
            }}>Tabel IMT</Text>

            <View style={{
                width: wp('80%'),
                backgroundColor: '#58B4A7',
                flexDirection: 'row',
                alignSelf: 'center',
                borderRadius: 20,
                overflow: 'hidden',
                marginTop: 40
            }}>
                <View style={{
                    flexDirection: 'column'
                }}>
                    <Text style={styles.judul}>RENTANG IMT</Text>
                    <Text style={styles.teksKiri}>{'<'} 16</Text>
                    <Text style={styles.teksKiri}>16 -18,25</Text>
                    <Text style={styles.teksKiri}>18,25 -25</Text>
                    <Text style={styles.teksKiri}>25 - 30</Text>
                    <Text style={styles.teksKiri}>{'>'} 30</Text>
                </View>
                <View style={{
                    flexDirection: 'column'
                }}>
                    <Text style={styles.judulKanan}>KATEGORI</Text>
                    <Text style={styles.teksKanan}>Sangat Kurus</Text>
                    <Text style={styles.teksKanan}>Kurus</Text>
                    <Text style={styles.teksKanan}>Normal</Text>
                    <Text style={styles.teksKanan}>Kegemukan</Text>
                    <Text style={styles.teksKanan}>Obesitas</Text>
                </View>
            </View>
        </View>
    )
}

export default tabelimt

const styles = StyleSheet.create({
    judul: {
        color: '#053A4D',
        fontSize: 20,
        fontWeight: '700',
        width: wp('40%'),
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderRightWidth: 1
    },
    teksKiri: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        width: wp('40%'),
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderRightWidth: 1
    },
    judulKanan: {
        color: '#053A4D',
        fontSize: 20,
        fontWeight: '700',
        width: wp('40%'),
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
        borderBottomWidth: 1,
    },
    teksKanan: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        width: wp('40%'),
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
        borderBottomWidth: 1,
    },
})
