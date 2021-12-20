import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Voucher from '../assets/Voucher.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const pembayaran = () => {
    const [bayarDitempat, setBayarDitempat] = useState(false);
    const [wopay, setWopay] = useState(false);

    const pressBayar = () => {
        setBayarDitempat(true)
        setWopay(false)
    }

    const pressWopay = () => {
        setWopay(true)
        setBayarDitempat(false)
    }

    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <View>
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
                        }}>Bayar Di Tempat Gym</Text>
                    </View>
                    <TouchableOpacity onPress={pressBayar}>
                        <View style={{
                            width: 25,
                            height: 25,
                            borderRadius: 50,
                            backgroundColor: bayarDitempat ? '#58B4A7' : '#253334',
                            borderWidth: bayarDitempat ? 0 : 2,
                            borderColor: '#58B4A7'
                        }}></View>
                    </TouchableOpacity>
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
                            marginLeft: 10,
                        }}>WOpay</Text>
                        <Text style={{
                            color: '#fff',
                            fontWeight: '500',
                            fontSize: 17,
                            marginLeft: 20
                        }}>Rp. 500.000</Text>
                    </View>
                    <TouchableOpacity onPress={pressWopay}>
                        <View style={{
                            width: 25,
                            height: 25,
                            borderRadius: 50,
                            backgroundColor: wopay ? '#58B4A7' : '#253334',
                            borderWidth: wopay ? 0 : 2,
                            borderColor: '#58B4A7'
                        }}></View>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity>
                <View style={{
                    width: wp('100%'),
                    height: 80,
                    backgroundColor: '#58B4A7',
                    alignSelf: 'flex-end',
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

export default pembayaran

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderBottomWidth: 2,
        borderColor: '#58B4A7'
    },
})
