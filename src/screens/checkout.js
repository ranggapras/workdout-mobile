import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import Gambar from '../assets/Produk.png'
import Voucher from '../assets/Voucher.png'
import Mp from '../assets/mp.svg'
import Kirim from '../assets/buttonPengiriman.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Models from '../models/Models';
import moment from 'moment'
import 'moment/locale/id'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Checkout = ({ route, navigation }) => {
    const { broadcast, idMember, idProduct, idCart, idJadwal, ongkir, potOngkir, potDiskon, jam, hargaJadwal } = route.params;
    const [product, setproduct] = useState([])
    const [member, setmember] = useState(null)
    const [jadwal, setjadwal] = useState(null)
    const [cart, setcart] = useState([])
    const [isMember, setIsMember] = useState(false)
    const [hargaPesanan, setHargaPesanan] = useState('')

    const thousand = val => (
        val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    );

    let totalOngkir = ongkir - parseInt(potOngkir || '0');
    let totalHarga = hargaPesanan - Math.ceil((parseInt(potDiskon || '0') * hargaPesanan) / 100);

    useEffect(() => {
        if (broadcast === 'member') {
            setHargaPesanan(member === null ? 0 : member.price)
        }
        if (broadcast === 'produk-beliSekarang') {
            setHargaPesanan(product.price)
        }
        if (broadcast === 'produk-keranjang') {
            setHargaPesanan(product.price)
        }
        if (broadcast === 'jadwal') {
            setHargaPesanan(hargaJadwal)
        }
    }, [broadcast, member, product])

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
        const getMembershipProductById = async () => {
            const res = await Models.getMembershipProductById(idMember);
            // console.log(res);
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setmember(res.data)
            }
        }
        getMembershipProductById()
    }, [idMember])

    useEffect(() => {
        const getProductById = async () => {
            const res = await Models.getProductById(idProduct);
            console.log(res);
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setproduct(res.data)
            }
        }
        getProductById()
    }, [idProduct])

    useEffect(() => {
        const getScheduleById = async () => {
            const res = await Models.getScheduleById(idJadwal);
            // console.log(res);
            if (res.code != '201') {
                // alert(`${res}`);
            } else {
                setjadwal(res.data)
            }
        }
        getScheduleById()
    }, [idJadwal])

    useEffect(() => {
        const getCart = async () => {
            const res = await Models.getCart();
            // console.log(res.data.idCart);
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setcart(res.data)
            }
        }
        getCart()
    }, [])

    const checkout = async (type) => {
        const jsonValue = await AsyncStorage.getItem('user');
        const idUser = await JSON.parse(jsonValue);   
        const dat = { nameUser:idUser.nameUser, idCart: [idCart], totalAmount: (totalHarga+totalOngkir)};
        const res = await Models.addTransactionProduct(dat);
        if (res.code != '201') {
          alert(`${res.message}`);
          return true;
        } else {
            navigation.navigate('PesananSelesai')
            await Linking.openURL(res.data.url);
        }
      };
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
                <Text style={styles.checkOut}>{`${jadwal === null ? '' : moment(jadwal.date).format('dddd')} ${jadwal === null ? '' : moment(jadwal.date).format('DD MMMM YYYY')}`}</Text>
                <Text style={styles.checkOut}>{`${jam === '' ? '08.30-09.30' : jam}`}</Text>
                <Text style={{
                    color: '#4CE6D4',
                    marginTop: 20,
                    fontSize: 24,
                }}>Rp. {thousand(hargaJadwal || '0')}</Text>
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
                            <Text style={styles.teksHargaOngkos}>Rp {thousand(ongkir || '0')}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('OpsiKirim', {
                                broadcast: 'produk-beliSekarang',
                                ongkir: ongkir
                            })}>
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
                        <Text style={styles.Judul}>{`${cart === null ? '' : cart.name}`}</Text>
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
                            <TouchableOpacity onPress={() => navigation.navigate('OpsiKirim', {
                                broadcast: 'produk-keranjang'
                            })}>
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
                }}>{`${member === null ? '' : member.session} sesi pertemuan / ${member === null ? '' : member.days} hari`}</Text>
            </View>
        }
        return <View></View>
    }

    const Pesan = () => {
        if (broadcast === 'member') {
            navigation.navigate('Terdaftar')
            console.log('member terdaftar')
        } else {
            checkout()
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
                    }}>Rp {thousand(hargaPesanan || '0')}</Text>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Voucher', {
                        broadcast: broadcast,
                        ongkir: ongkir,
                        jam: jam,
                        hargaJadwal: hargaJadwal
                    })}>
                        <Text style={{
                            color: '#fff',
                            opacity: 0.7,
                            fontSize: 16
                        }}>{!((potDiskon) || (potOngkir)) ? 'Pilih Voucher Diskon' : '1 Voucher Dipilih'}</Text>
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
                    }}>Rp {totalHarga}</Text>
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
                    }}>Rp {totalOngkir}</Text>
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
                    }}>Rp {thousand(totalOngkir + totalHarga)}</Text>
                </View>
            </ScrollView>
            <View style={styles.ContainerCheckout}>
                <View style={styles.BoxSubTotal}>
                    <Text style={styles.teksSubtotal}>Total Pembayaran</Text>
                    <Text style={styles.teksHarga}>Rp {thousand(totalOngkir + totalHarga)}</Text>
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
})
export default Checkout