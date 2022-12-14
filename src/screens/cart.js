import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import CartItem from '../components/CartItem';
import Voucher from '../assets/Voucher.png'
import Done from '../assets/done.png'
import Clear from '../assets/clear.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Models from '../models/Models';

const Cart = ({ navigation }) => {
    const [cart, setcart] = useState([])
    const [check, setCheck] = useState(false);
    const [pilihcart, setPilihcart] = useState([]);

    console.log(pilihcart)

    useEffect(() => {
        const getCart = async () => {
            const res = await Models.getCart();
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setcart(res.data)
            }
        }
        getCart()
    }, [])
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <ScrollView>
                {cart.length > 0 && cart.map((d, idx) => {
                    console.log(d);
                    return (
                        <CartItem key={idx} data={d} active={pilihcart} change={setPilihcart} />
                    )
                })}
            </ScrollView>
            <View style={styles.ContainerVoucher}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Image source={Voucher} />
                    <Text style={styles.JudulVoucher}>Voucher Diskon</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Voucher')}>
                    <Text style={styles.teksVoucher}>Pilih Voucher Diskon</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ContainerCheckout}>
                <View style={styles.BoxSubTotal}>
                    <TouchableOpacity onPress={() => setCheck(!check)}>
                        <Image source={check ? Done : Clear} />
                    </TouchableOpacity>
                    <Text style={styles.teksSubtotal}>SubTotal</Text>
                    <Text style={styles.teksHarga}>Rp 55.000</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Checkout', {
                    broadcast: 'produk-keranjang',
                    idProduct: '',
                    idMember: '',
                    ongkir: '',
                    idCart: pilihcart
                })}>
                    <View style={styles.BoxCheckout}>
                        <Text style={styles.checkOut}>Checkout(1)</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    ContainerVoucher: {
        width: wp('100%'),
        flexDirection: 'row',
        height: 60,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ContainerCheckout: {
        width: wp('100%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    JudulVoucher: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 10
    },
    teksVoucher: {
        color: '#fff',
        opacity: 0.8
    },
    BoxSubTotal: {
        flexDirection: 'row',
        backgroundColor: '#CBF3E8',
        height: 50,
        width: wp('60%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    BoxCheckout: {
        flexDirection: 'row',
        backgroundColor: '#58B4A7',
        height: 50,
        width: wp('40%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    teksSubtotal: {
        color: '#000',
        marginLeft: 30
    },
    teksHarga: {
        color: '#000',
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '700'
    },
    checkOut: {
        color: '#fff',
        fontWeight: '700'
    }
})
