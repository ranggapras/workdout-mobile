import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import Gambar from '../assets/Produk.png'
import Cart from '../assets/cart-green.svg'
import Chat from '../assets/chat-green.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Models from '../models/Models';
import AsyncStorage from '@react-native-async-storage/async-storage'

const thousand = val => (
    val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
);

const detailproduct = ({ route, navigation }) => {
    const { idProduct } = route.params;
    const [product, setproduct] = useState([])
    const [amountItems, setamountItems] = useState(1)
    const [addcart, setaddcart] = useState([])


    useEffect(() => {
        const getProductById = async () => {
            const res = await Models.getProductById(idProduct);
            // console.log(res);
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setproduct(res.data)
                // console.log('product by id ', res);
            }
        }
        getProductById()
    }, [])

    const beliSekarang = async (type) => {
        const jsonValue = await AsyncStorage.getItem('user');
        const idUser = await JSON.parse(jsonValue);   
        const dat = { idUser:idUser.id, amountItems: amountItems, idProduct: idProduct};
        const res = await Models.postCart(dat);
        console.log(res);
        if (res.code != '201') {
          alert(`${res.message}`);
          return true;
        } else {
          if(type === 'beli'){
            return navigation.navigate('Checkout', {
                broadcast: 'produk-beliSekarang',
                        idProduct: idProduct,
                        idMember: '', 
                        ongkir: 5000,
                        idCart: res.data.idCart
                    }
            );
          } else {
            alert('Produk Ditambahkan Ke Keranjang')
          }
        }
      };
    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingBottom: 50 }}>
                    <Image source={{ uri: product.photo }} style={styles.fotoProduk} />
                    <Text style={styles.judul}>{`${product.name === null ? '' : product.name}`}</Text>
                    <Text style={styles.harga}>Rp. {`${product.price === null ? '' : thousand(product.price || '0')}`}</Text>
                    <Text style={styles.rincian}>Rincian produk</Text>
                    <Text style={styles.stok}>Stok {`${product.stock === null ? '0' : product.stock}`}</Text>
                    <Text style={styles.deskripsi}>{`${product.description === null ? '' : product.description}`}</Text>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{
                    width: wp('25%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 10,
                    borderRightWidth: 1,
                    borderColor: '#58B4A7'
                }}
                    onPress={() => navigation.navigate('Pesan')}>
                    <Chat />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: wp('25%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 10
                }}
                    onPress={() => beliSekarang('Keranjang')}>
                    <Cart />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: wp('50%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 10,
                    backgroundColor: '#58B4A7'
                }}
                    onPress={() => beliSekarang('beli')}>
                    <Text style={{ color: '#fff', fontSize: 24, fontWeight: '700' }}>Beli Sekarang</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default detailproduct

const styles = StyleSheet.create({
    fotoProduk: {
        width: wp('100%'),
        height: 250,
    },
    judul: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10,
        marginTop: 20,
        marginLeft: 20,
        width: wp('90%'),
    },
    harga: {
        color: '#F43636',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
        marginLeft: 20,
        width: wp('90%'),
    },
    rincian: {
        paddingVertical: 15,
        paddingLeft: 20,
        paddingRight: wp('5%'),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#58B4A7',
        color: '#fff',
        fontSize: 16,
        width: wp('100%'),
    },
    stok: {
        paddingVertical: 15,
        paddingLeft: 20,
        paddingRight: wp('5%'),
        borderBottomWidth: 1,
        borderColor: '#58B4A7',
        color: '#fff',
        fontSize: 16,
        width: wp('100%'),
    },
    bahan: {
        paddingTop: 10,
        paddingLeft: 20,
        color: '#fff',
        fontSize: 16,
        width: wp('95%'),
    },
    deskripsi: {
        paddingTop: 50,
        paddingLeft: 20,
        color: '#fff',
        fontSize: 16,
        width: wp('95%'),
    },
})
