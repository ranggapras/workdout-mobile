import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Persen from '../assets/persen.svg'

const VoucherItem = ({ data, change, active }) => {
    const type = data.type

    return (
        <View style={{
            width: wp('90%'),
            backgroundColor: '#fff',
            height: 80,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: 10
        }}>
            <View style={{
                width: wp('20%'),
                backgroundColor: '#58B4A7',
                height: 80,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                paddingVertical: 5,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'column'
            }}>
                {type === 3 ? <></> : <Persen />}
                <Text style={{
                    fontWeight: '700',
                    fontSize: 16,
                    textAlign: 'center'
                }}>{type === 1 ? 'Jadwal' : type === 2 ? 'Produk' : 'Gratis Ongkir'}</Text>
            </View>
            <View style={{
                width: wp('70%'),
                height: 80,
                paddingVertical: 5,
                paddingHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row'
            }}>
                <Text style={{
                    fontWeight: '700',
                    fontSize: 20,
                    textAlign: 'center'
                }}>{data.name}</Text>
                <TouchableOpacity onPress={() => change(data.idPromo)}>
                    <View style={{
                        width: 25,
                        height: 25,
                        borderRadius: 50,
                        backgroundColor: active ? '#58B4A7' : '#fff',
                        borderWidth: active ? 0 : 2,
                        borderColor: '#58B4A7'
                    }}></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default VoucherItem

const styles = StyleSheet.create({})
