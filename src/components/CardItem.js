import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Gambar from '../assets/Produk.png'

const CardItem = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={navigation}>
            <View style={styles.card}>
                <Image source={Gambar} style={styles.gambar} />
                <Text style={styles.namaProduk}>Matras Yoga Anti Slip</Text>
                <Text style={styles.hargaProduk}>Rp. 55.000</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CardItem

const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 210,
        backgroundColor: '#CBF3E8',
        overflow: 'hidden',
        flexDirection: 'column',
        alignItems: 'center'
    },
    gambar: {
        width: 150
    },
    namaProduk: {
        fontWeight: 'bold',
        marginTop: 10,
        width: 140,
        height: 20,
        flexWrap: 'wrap'
    },
    hargaProduk: {
        fontWeight: 'bold',
        fontSize: 17,
        width: 140,
        marginTop: 5,
        height: 20,
        flexWrap: 'wrap'
    }
})
