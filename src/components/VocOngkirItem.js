import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const VocOngkirItem = ({ jumlahDiskon }) => {
    const [check, setCheck] = useState(false);

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
                <Text style={{
                    fontWeight: '700',
                    fontSize: 16,
                    textAlign: 'center'
                }}>GRATIS ONGKIR</Text>
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
                }}>Diskon {jumlahDiskon}%</Text>
                <TouchableOpacity onPress={() => setCheck(!check)}>
                    <View style={{
                        width: 25,
                        height: 25,
                        borderRadius: 50,
                        backgroundColor: check ? '#58B4A7' : '#fff',
                        borderWidth: check ? 0 : 2,
                        borderColor: '#58B4A7'
                    }}></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default VocOngkirItem

const styles = StyleSheet.create({})
