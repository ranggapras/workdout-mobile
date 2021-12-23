import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Logo from '../assets/logoworkdout.png'
import JadwalItem from '../components/JadwalItem'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Models from '../models/Models';
import { useEffect, useState } from 'react'

const thousand = val => (
    val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
);

const jadwalworkout = ({ navigation }) => {
    const [workout, setworkout] = useState([])
    const [isMember, setIsMember] = useState(false)
    
    useEffect(() => {
        const getProfil = async () => {
            const res = await Models.getProfil();
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setIsMember(res.data.isMember)
            }
        }
        getProfil()
    }, [])

    useEffect(() => {
        const getWorkout = async () => {
            const res = await Models.getWorkout();
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setworkout(res.data)
            }
        }
        getWorkout()
    }, [])

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
                    {workout.length > 0 && workout.map((d, idx) => {
                        console.log(d);
                        return (
                            <JadwalItem key={idx}
                                tanggal={d.name}
                                harga={thousand(d.price || '0')}
                                navigation={() => navigation.navigate('DetailWorkout', {
                                    information: '', idWorkout: `${d.idWorkout}`, price: `${d.price}`, date: `${d.name}`,
                                })} />
                        )
                    })}

                </View>
            </ScrollView>
        </View>
    )
}

export default jadwalworkout

const styles = StyleSheet.create({})
