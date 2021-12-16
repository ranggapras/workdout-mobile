import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import Gambar from '../assets/Produk.png'
import Cart from '../assets/cart-green.svg'
import Chat from '../assets/chat-green.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const detailproduct = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingBottom: 50 }}>
                    <Image source={Gambar} style={styles.fotoProduk} />
                    <Text style={styles.judul}>Matreas Yoga Anti Slip</Text>
                    <Text style={styles.harga}>Rp. 55.000</Text>
                    <Text style={styles.rincian}>Rincian produk</Text>
                    <Text style={styles.stok}>Stok 20</Text>
                    <Text style={styles.bahan}>Bahan natural rubber PU{'\n'}Lebar 61 cm{'\n'}Panjang 173 cm</Text>
                    <Text style={styles.deskripsi}>Butuh matras yoga dengan kualitas terbaik?
                        Produk ini akan membuat Work Out anda jauh lebih berkualitas.
                        Permukaan yang halus dan sangat flexible, membuat sangat nyaman dipakai untuk menopang tubuh, lutut, pinggang, dan lainnya pada saat melakukan latihan.
                        {'\n'}{'\n'}
                        Tidak menyebabkan alergi.
                        Anti Slip
                    </Text>
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
                onPress={() => navigation.navigate('Keranjang')}>
                    <Cart />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: wp('50%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 10,
                    backgroundColor: '#58B4A7'
                }}
                onPress={() => navigation.navigate('Checkout')}>
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
        height: 250
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
