import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { height } from 'styled-system';
import Gambar from '../assets/Produk.png'

const thousand = val => (
    val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  );
  

const CardItem = ({ navigation,data }) => {
    return (
        <TouchableOpacity onPress={navigation}>
            <View style={styles.card}>
                <Image source={{uri:data.photo}} style={styles.gambar} />
                <Text style={styles.namaProduk}>{data.name}</Text>
                <Text style={styles.hargaProduk}>Rp{thousand(data.price)}</Text>
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
        width: 150,
        height : 150
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
