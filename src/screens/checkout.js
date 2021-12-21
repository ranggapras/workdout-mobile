import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import Gambar from '../assets/Produk.png'
import Voucher from '../assets/Voucher.png'
import Mp from '../assets/mp.svg'
import Kirim from '../assets/buttonPengiriman.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Models from '../models/Models';

const Checkout = ({ route, navigation }) => {

    const [cartmember, setcartmember] = useState([])
    const thousand = val => (
        val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      );
    useEffect(async () => {
        const getMembershipProductById = async () => {
          const res = await Models.getMembershipProductById(id);
          console.log(res);
          if (res.code != '200') {
            // alert(`${res}`);
          } else {
           setmember(res.data)
           console.log(res);
          }
        }
        getMembershipProduct()
      }, [])

    const { broadcast } = route.params;


const Checkout = ({ route, navigation }) => {
    const { broadcast, id } = route.params;
    const [product, setproduct] = useState([])

    console.log(product);

    useEffect(async () => {
        const getProductById = async () => {
            const res = await Models.getProductById(id);
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

    console.log(broadcast);
    console.log(id);

    const CheckoutProduct = () => {
        if (broadcast === 'jadwal') {
            return <View style={{
                width: wp('100%'),
                alignItems: 'center',
                paddingVertical: 80,
                borderBottomWidth: 1,
                borderColor: '#58B4A7'
            }}>
                <Text style={styles.checkOut}>Jadwal Gym</Text>
                <Text style={styles.checkOut}>Senin 1 Nov 2021</Text>
                <Text style={styles.checkOut}>8:30 - 9:30</Text>
                <Text style={{
                    color: '#4CE6D4',
                    marginTop: 20,
                    fontSize: 24,
                }}>Rp. 40.000</Text>
            </View>
        }
        if (broadcast === 'produk-beliSekarang') {
            return <View>
                <View style={styles.containerCart}>
                    <Image source={{ uri: product.photo }} style={{ width: 80, height: 80 }} />
                    <View style={{ flexDirection: 'column', height: 60, justifyContent: 'space-between' }}>
                        <Text style={styles.Judul}>{`${product.name === null ? '' : product.name}`}</Text>
                        <Text style={styles.Harga}>Rp {`${product.price === null ? '' : thousand(product.price || '0')}`}</Text>
                    </View>
                    <Text style={styles.Jumlah}>x1</Text>
                </View>
                <View style={styles.containerPengiriman}>
                    <Text style={styles.teksOpsi}>Opsi Pengiriman</Text>
                    <View style={styles.Ongkos}>
                        <Text style={styles.teksOngkos}>Ongkos Kirim</Text>
                        <View style={styles.hargaOngkos}>
                            <Text style={styles.teksHargaOngkos}>Rp 5.000</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('OpsiKirim')}>
                                <Kirim />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        }
        if (broadcast === 'produk-keranjang') {
            return <View>
                <View style={styles.containerCart}>
                    <Image source={Gambar} style={{ width: 80, height: 80 }} />
                    <View style={{ flexDirection: 'column', height: 60, justifyContent: 'space-between' }}>
                        <Text style={styles.Judul}>Matras Anti Slip</Text>
                        <Text style={styles.Harga}>Rp 55.000</Text>
                    </View>
                    <Text style={styles.Jumlah}>x1</Text>
                </View>
                <View style={styles.containerPengiriman}>
                    <Text style={styles.teksOpsi}>Opsi Pengiriman</Text>
                    <View style={styles.Ongkos}>
                        <Text style={styles.teksOngkos}>Ongkos Kirim</Text>
                        <View style={styles.hargaOngkos}>
                            <Text style={styles.teksHargaOngkos}>Rp 5.000</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('OpsiKirim')}>
                                <Kirim />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        }
        if (broadcast === 'member') {
            return <View style={{
                width: wp('100%'),
                alignItems: 'center',
                paddingVertical: 80,
                borderBottomWidth: 1,
                borderColor: '#58B4A7'
            }}>
                <Text style={styles.checkOut}>Berlangganan Membership</Text>
                <Text style={{
                    color: '#4CE6D4',
                    marginTop: 20,
                    fontSize: 24,
                }}>5 sesi pertemuan / 35 hari</Text>
            </View>
        }
    }

    const Pesan = () => {
        if (broadcast === 'member') {
            navigation.navigate('Terdaftar')
            console.log('member terdaftar')
        } else {
            navigation.navigate('PesananSelesai')
            console.log('pesanan produk atau jadwal')
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <CheckoutProduct />
                <View style={styles.container}>
                    <Text style={{
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: 18
                    }}>Total Pesanan (1 Produk)</Text>
                    <Text style={{
                        color: '#CBF3E8',
                        fontWeight: '700',
                        fontSize: 18
                    }}>Rp {`${product.price === null ? '' : thousand(product.price || '0')}`}</Text>
                </View>
                <View style={styles.container}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source={Voucher} />
                        <Text style={{
                            color: '#fff',
                            fontWeight: '700',
                            fontSize: 18,
                            marginLeft: 10
                        }}>Voucher Diskon</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Voucher')}>
                        <Text style={{
                            color: '#fff',
                            opacity: 0.7,
                            fontSize: 16
                        }}>Pilih Voucher Diskon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Mp />
                        <Text style={{
                            color: '#fff',
                            fontWeight: '700',
                            fontSize: 18,
                            marginLeft: 10
                        }}>Metode Pembayaran</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Pembayaran')}>
                        <Text style={{
                            color: '#58B4A7',
                            fontWeight: '700',
                            fontSize: 18
                        }}>Pilih Metode{'\n'}Pembayaran</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: wp('100%'),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    marginTop: 30
                }}>
                    <Text style={{
                        color: '#fff',
                        opacity: 0.7,
                        fontSize: 16
                    }}>Subtotal untuk produk</Text>
                    <Text style={{
                        color: '#fff',
                        opacity: 0.7,
                        fontSize: 16
                    }}>Rp {`${product.price === null ? '' : thousand(product.price || '0')}`}</Text>
                </View>
                <View style={{
                    width: wp('100%'),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    marginTop: 10
                }}>
                    <Text style={{
                        color: '#fff',
                        opacity: 0.7,
                        fontSize: 16
                    }}>Subtotal untuk pengiriman</Text>
                    <Text style={{
                        color: '#fff',
                        opacity: 0.7,
                        fontSize: 16
                    }}>Rp 5.000</Text>
                </View>
                <View style={{
                    width: wp('100%'),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    marginTop: 10,
                    marginBottom: 30
                }}>
                    <Text style={{
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: 18,
                    }}>Total Pembayaran</Text>
                    <Text style={{
                        color: '#CBF3E8',
                        fontWeight: '700',
                        fontSize: 18
                    }}>Rp 60.000</Text>
                </View>
            </ScrollView>
            <View style={styles.ContainerCheckout}>
                <View style={styles.BoxSubTotal}>
                    <Text style={styles.teksSubtotal}>Total Pembayaran</Text>
                    <Text style={styles.teksHarga}>Rp 60.000</Text>
                </View>
                <TouchableOpacity onPress={Pesan}>
                    <View style={styles.BoxCheckout}>
                        <Text style={styles.checkOut}>Buat Pesanan</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({
    containerCart: {
        flexDirection: 'row',
        width: wp('100%'),
        alignItems: 'flex-start',
        paddingVertical: 20,
        justifyContent: 'space-evenly',
        marginBottom: 20
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
    Jumlah: {
        color: '#fff',
        fontSize: 20,
        height: 80,
        textAlignVertical: 'bottom'
    },
    containerPengiriman: {
        flexDirection: 'column',
        backgroundColor: '#CBF3E8',
        width: wp('100%'),
        paddingVertical: 10,
        borderColor: '#58B4A7',
        borderTopWidth: 4,
        borderBottomWidth: 4,
        marginBottom: 20
    },
    Ongkos: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    teksOpsi: {
        color: '#288376',
        borderColor: '#288376',
        fontSize: 22,
        fontWeight: '700',
        paddingBottom: 10,
        marginBottom: 10,
        paddingLeft: 10,
        borderBottomWidth: 1,
        width: wp('100%'),
    },
    teksOngkos: {
        fontSize: 18,
        fontWeight: '700'
    },
    hargaOngkos: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    teksHargaOngkos: {
        marginRight: 25,
        fontSize: 19,
        fontWeight: '800'
    },
    container: {
        flexDirection: 'row',
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderBottomWidth: 8,
        borderColor: '#58B4A7'
    },
    ContainerCheckout: {
        width: wp('100%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    BoxSubTotal: {
        flexDirection: 'column',
        backgroundColor: '#CBF3E8',
        height: 60,
        width: wp('50%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    BoxCheckout: {
        flexDirection: 'row',
        backgroundColor: '#58B4A7',
        height: 60,
        width: wp('50%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    teksSubtotal: {
        color: '#000',
    },
    teksHarga: {
        color: '#000',
        fontSize: 20,
        fontWeight: '700'
    },
    checkOut: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700'
    }
})}
