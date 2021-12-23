import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import VoucherItem from '../components/VoucherItem'
import VocOngkirItem from '../components/VocOngkirItem'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Models from '../models/Models';

const voucher = ({ route, navigation }) => {
    const { broadcast, ongkir, jam, hargaJadwal } = route.params;
    const [diskon, setDiskon] = useState('');
    const [voucher, setVoucher] = useState([]);
    const [potongan, setPotongan] = useState([]);
    const typePotongan = potongan.type
    const jumlahPotongan = potongan.amount

    console.log(ongkir)

    useEffect(() => {
        const getPromo = async () => {
            const res = await Models.getPromo();
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setVoucher(res.data)
            }
        }
        getPromo()
    }, [])

    useEffect(() => {
        const getPromoById = async () => {
            const res = await Models.getPromoById(diskon);
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setPotongan(res.data)
            }
        }
        getPromoById()
    }, [diskon])

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
                {voucher.length > 0 && voucher.map((d, idx) => {
                    return (
                        <VoucherItem key={idx} data={d} active={diskon === d.idPromo ? true : false} change={setDiskon} />
                    )
                })}
            </ScrollView>
            <View style={{
                width: wp('100%'),
                paddingVertical: 15,
                backgroundColor: '#CBF3E8',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 5
            }}>
                <View style={{
                    flexDirection: 'row',
                    width: wp('90%'),
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: '#58B4A7', fontSize: 18, fontWeight: '700' }}>{diskon === '' ? '0' : '1'}</Text>
                    <Text style={{ color: '#000', fontSize: 18, fontWeight: '700' }}> Voucher dipilih </Text>
                    <Text style={{ color: '#58B4A7', fontSize: 18, fontWeight: '700' }}>{potongan.name} didapatkan</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Checkout', {
                    broadcast: broadcast,
                    idProduct: '',
                    idMember: '',
                    idJadwal: '',
                    ongkir: ongkir,
                    potOngkir: `${typePotongan === 3 ? jumlahPotongan : ''}`,
                    potDiskon: `${typePotongan !== 3 ? jumlahPotongan : ''}`,
                    jam: jam,
                    hargaJadwal: hargaJadwal
                })}>
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
