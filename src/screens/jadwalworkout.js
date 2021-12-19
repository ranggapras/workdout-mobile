import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Logo from '../assets/logoworkdout.png'
import JadwalItem from '../components/JadwalItem'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const jadwalworkout = ({ navigation }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <Image source={Logo} style={{ width: 61.78, height: 50, marginTop: 20 }} />
            <Text style={{
                color: '#fff',
                fontWeight: '700',
                fontSize: 35,
                marginVertical: 20
            }}>Jadwal Workout</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    width: wp('90%'),
                    alignSelf: 'center'
                }}>
                    <JadwalItem
                        tanggal={'1 - 6'}
                        bulan={'November'}
                        tahun={'2021'}
                        harga={'40.000'}
                        navigation={() => navigation.navigate('DetailWorkout')} />
                    <JadwalItem
                        tanggal={'8 - 13'}
                        bulan={'November'}
                        tahun={'2021'}
                        harga={'70.000'}
                        navigation={() => navigation.navigate('DetailWorkout')} />
                    <JadwalItem
                        tanggal={'15 - 21'}
                        bulan={'November'}
                        tahun={'2021'}
                        harga={'40.000'}
                        navigation={() => navigation.navigate('DetailWorkout')} />
                    <JadwalItem
                        tanggal={'22 - 28'}
                        bulan={'November'}
                        tahun={'2021'}
                        harga={'40.000'}
                        navigation={() => navigation.navigate('DetailWorkout')} />
                    <JadwalItem
                        tanggal={'1 - 5'}
                        bulan={'Desember'}
                        tahun={'2021'}
                        harga={'50.000'}
                        navigation={() => navigation.navigate('DetailWorkout')} />
                </View>
            </ScrollView>
        </View>
    )
}

export default jadwalworkout

const styles = StyleSheet.create({})
