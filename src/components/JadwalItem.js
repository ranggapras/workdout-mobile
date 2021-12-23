import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Calendar from '../assets/calendar-workout.png'
import Models from '../models/Models';

const JadwalItem = ({ tanggal, bulan, tahun, harga, navigation, }) => {
    const [dataUser, setdataUser] = useState(null)
    const [isMember, setIsMember] = useState(false)

    useEffect(() => {
        const getProfil = async () => {
            const res = await Models.getProfil();
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setdataUser(res.data)
                setIsMember(res.data.isMember)
            }
        }
        getProfil()
    }, [])

    return (
        <TouchableOpacity onPress={navigation}>
            <View style={styles.card}>
                <View style={styles.containercalendar}>
                    <Image source={Calendar} />
                </View>
                <Text style={styles.text}> {tanggal} </Text>
                {isMember ?
                    <Text style={styles.gratis}> gratis </Text> :
                    <Text style={styles.harga}> Rp {harga} </Text>}


            </View>
        </TouchableOpacity>
    )
}

export default JadwalItem

const styles = StyleSheet.create({
    card: {
        width: 150,
        backgroundColor: '#CBF3E8',
        height: 250,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 20,
        marginBottom: 30,
        overflow: 'hidden'
    },
    containercalendar: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    text: {
        color: '#000',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center'
    },
    harga: {
        color: '#7e7e7e',
        fontSize: 17,
        fontWeight: '700'
    },
    gratis: {
        color: 'red',
        fontSize: 17,
        fontWeight: '700'
    }
})
