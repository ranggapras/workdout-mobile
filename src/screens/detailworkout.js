import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RincianJadwal from '../components/RincianJadwal';
import Crown from '../assets/crown.png'

const detailworkout = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                    borderBottomWidth: 1,
                    borderColor: '#58B4A7'
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 24,
                        fontWeight: '700'
                    }}>1 - 6 November 2021</Text>
                    <Text style={{
                        color: '#F43636',
                        fontWeight: '700',
                        fontSize: 20,
                        marginTop: 10
                    }}>Rp. 40.000</Text>
                </View>
                <View style={{
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                    borderBottomWidth: 1,
                    borderColor: '#58B4A7'
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 15,
                        fontWeight: '700'
                    }}>Rincian Jadwal</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: wp('100%'),
                    paddingVertical: 20,
                    paddingLeft: 20,
                    paddingRight: 60,
                }}>
                    <View style={{ width: 60 }}>
                        <Text style={styles.teks}>Hari</Text>
                    </View>
                    <View style={{ width: 100 }}>
                        <Text style={styles.teks}>Tanggal</Text>
                    </View>
                    <View style={{ width: 120 }}>
                        <Text style={styles.teks}>Jam</Text>
                    </View>
                    <Text style={styles.teks}>Kuota</Text>
                </View>

                <RincianJadwal
                    hari={'Senin'}
                    tanggal={'1 Nov 2021'}
                    kuota={6} />
                <RincianJadwal
                    hari={'Selasa'}
                    tanggal={'2 Nov 2021'}
                    kuota={15} />
                <RincianJadwal
                    hari={'Rabu'}
                    tanggal={'3 Nov 2021'}
                    kuota={4} />
                <RincianJadwal
                    hari={'Kamis'}
                    tanggal={'4 Nov 2021'}
                    kuota={0} />
                <RincianJadwal
                    hari={'Jumat'}
                    tanggal={'5 Nov 2021'}
                    kuota={9} />
                <RincianJadwal
                    hari={'Sabtu'}
                    tanggal={'6 Nov 2021'}
                    kuota={1} />

                <View style={{
                    width: wp('100%'),
                    alignItems: 'flex-end',
                    paddingHorizontal: 20,
                    marginTop: 60,
                }}>
                    <TouchableOpacity style={{
                        width: 180,
                        height: 40,
                        backgroundColor: '#fff',
                        flexDirection: 'row',
                        position: 'relative',
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <Image source={Crown} style={{
                            position: 'absolute',
                            top: -30,
                            left: 0,
                            width: 45
                        }} />
                        <Text style={{
                            color: '#253334',
                            fontSize: 18,
                            fontWeight: '700'
                        }}>Personal Trainer</Text>
                        <View style={{
                            width: 25,
                            height: 25,
                            borderRadius: 50,
                            backgroundColor: '#253334',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontWeight: '700',
                                fontSize: 18,
                                textAlign: 'center',
                                textAlignVertical: 'center'
                            }}>+</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        width: 180,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                        marginBottom: 40
                    }}>
                        <Text style={{
                            color: '#58B4A7',
                            fontWeight: '700',
                            fontSize: 18,
                            marginRight: 5
                        }}>Sisa PT : </Text>
                        <Text style={styles.teks}>-</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.ContainerCheckout}>
                <TouchableOpacity onPress={() => navigation.navigate('Checkout', {
                    broadcast: 'jadwal',
                })}>
                    <View style={styles.BoxCheckout}>
                        <Text style={styles.checkOut}>Pesan Sekarang</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default detailworkout

const styles = StyleSheet.create({
    teks: {
        color: '#fff',
        fontSize: 16,
    },
    ContainerCheckout: {
        width: wp('100%'),
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    BoxCheckout: {
        flexDirection: 'row',
        backgroundColor: '#58B4A7',
        height: 60,
        width: wp('50%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkOut: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700'
    }
})
