import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import VoucherItem from '../components/VoucherItem'
import VocOngkirItem from '../components/VocOngkirItem'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const voucher = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{
                marginLeft: 20,
                marginVertical: 20,
                color: '#fff',
                fontSize: 18,
                fontWeight: '700'
            }}>Voucher Diskon</Text>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <VoucherItem namaVoucher={'Jadwal Gym'} jumlahDiskon={30} />
                <VocOngkirItem jumlahDiskon={100} />
                <VoucherItem namaVoucher={'Diskon Produk'} jumlahDiskon={50} />
                <VocOngkirItem jumlahDiskon={10} />
                <VoucherItem namaVoucher={'Diskon 12.12'} jumlahDiskon={10} />
                <VocOngkirItem jumlahDiskon={40} />
                <VocOngkirItem jumlahDiskon={40} />
            </ScrollView>
            <View style={{
                width: wp('100%'),
                height: 70,
                backgroundColor: '#CBF3E8',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 5
            }}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{ color: '#58B4A7', fontSize: 18, fontWeight: '700' }}>1 </Text>
                    <Text style={{ color: '#000', fontSize: 18, fontWeight: '700' }}>Voucher dipilih </Text>
                    <Text style={{ color: '#58B4A7', fontSize: 18, fontWeight: '700' }}>- Rp 27.500 didapatkan</Text>
                </View>
            </View>
            <TouchableOpacity>
                <View style={{
                    width: wp('100%'),
                    height: 80,
                    backgroundColor: '#58B4A7',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: '700' }}>KONFIRMASI</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default voucher

const styles = StyleSheet.create({})
