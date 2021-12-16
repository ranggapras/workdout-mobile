import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Done from '../assets/done.png'
import Clear from '../assets/clear.png'
import Gambar from '../assets/Produk.png'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CartItem = () => {
    const [click, setClick] = useState(1);
    const [stock, setStock] = useState(5);
    const [check, setCheck] = useState(false);

    const PressedPlus = () => {
        if (stock <= 0) {
            return;
        } else {
            setStock(stock - 1);
            setClick(click + 1);
        }
    };

    const PressedMinus = () => {
        if (click <= 0) {
            return;
        } else {
            setClick(click - 1);
            setStock(stock + 1);
        }
    };

    return (
        <View style={styles.containerCart}>
            <TouchableOpacity onPress={() => setCheck(!check)}>
                <Image source={check ? Done : Clear} />
            </TouchableOpacity>
            <Image source={Gambar} style={{ width: 80, height: 80 }} />
            <View style={{ flexDirection: 'column', height: 110, justifyContent: 'space-between' }}>
                <Text style={styles.Judul}>Matras Anti Slip</Text>
                <Text style={styles.Harga}>Rp 55.000</Text>
                <View style={{ flexDirection: 'row', width: 230, alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={styles.ContainerButtonCart}>
                        <FontAwesome5
                            name="minus"
                            solid
                            size={15}
                            color="#000"
                            style={styles.ButtonCart}
                            onPress={() => PressedMinus()} />
                        <Text
                            style={styles.ButtonCount}>{click}</Text>
                        <FontAwesome5
                            name="plus"
                            solid
                            size={15}
                            color="#000"
                            style={styles.ButtonCart}
                            onPress={() => PressedPlus()} />
                    </View>
                    <Text style={styles.Stok}>Tersisa {stock} buah</Text>
                </View>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    containerCart: {
        flexDirection: 'row',
        width: wp('100%'),
        alignItems: 'center',
        paddingVertical: 20,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#58B4A7',
        justifyContent: 'space-evenly',
        marginBottom: 20
    },
    ContainerButtonCart: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CBF3E8'
    },
    ButtonCart: {
        borderWidth: 2,
        paddingVertical: 7,
        paddingHorizontal: 8,
        height: 30,
        borderColor: '#58B4A7'
    },
    ButtonCount: {
        fontSize: 20,
        color: 'black',
        fontWeight: '900',
        height: 30,
        width: 50,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        paddingHorizontal: 8,
        textAlign: 'center',
        borderColor: '#58B4A7'
    },
    Judul: {
        color: '#fff',
        fontSize: 20,
        width: 200,
        height: 30
    },
    Harga: {
        color: '#CBF3E8',
        fontSize: 20,
        width: 200,
        height: 30
    },
    Stok: {
        color: '#fff',
        fontSize: 15,
        width: 100,
        height: 20,
        textAlignVertical: 'center',
        textAlign: 'center'
    }
})

