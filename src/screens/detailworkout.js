import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RincianJadwal from '../components/RincianJadwal';
import Crown from '../assets/crown.png'
import Foto from '../assets/trainer.png'
import Models from '../models/Models'
import moment from 'moment'
import 'moment/locale/id'

const detailworkout = ({ route, navigation }) => {
    const thousand = val => (
        val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    );

    const { information, idWorkout, price, date } = route.params;
    const [schedule, setschedule] = useState([])
    const [dataUser, setdataUser] = useState(null)
    const [chekoutSchedule, setCheckoutSchedule] = useState('');

    useEffect(() => {
        const getProfil = async () => {
            const res = await Models.getProfil();
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setdataUser(res)
            }
        }
        getProfil()
    }, [])
    useEffect(() => {
        const getScheduleByIdWorkout = async () => {
            const res = await Models.getScheduleByIdWorkout(idWorkout);
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setschedule(res.data)
                console.log(res.data);
            }
        }
        getScheduleByIdWorkout()
    }, [idWorkout])

    const PersonTrainer = () => {
        if (information == '') {
            return <View style={{
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
                }}
                    onPress={() => navigation.navigate('PersonalTrainer')}>
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
                    <Text style={styles.teks}>{`${dataUser === null ? '' : (dataUser.data.sessionLeft)}`}</Text>
                </View>
            </View>
        }
        return <View style={{
            width: wp('100%'),
            alignItems: 'flex-end',
            paddingHorizontal: 20,
            marginTop: 60,
        }}>
            <View style={{
                width: wp('90%'),
                height: 60,
                backgroundColor: '#fff',
                borderRadius: 20,
                paddingHorizontal: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative'
            }}>
                <View style={{
                    height: 60,
                    paddingVertical: 5,
                    marginLeft: 5,
                    marginTop: 5
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('PersonalTrainer')}>
                        <View style={{
                            width: 25,
                            height: 25,
                            borderRadius: 50,
                            backgroundColor: '#253334',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontWeight: '700',
                                fontSize: 18,
                                textAlign: 'center',
                                textAlignVertical: 'center'
                            }}>-</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{
                        color: '#333',
                        position: 'absolute',
                        left: 10,
                        bottom: 2,
                        width: 200
                    }}>Personal Trainer</Text>
                </View>
                <Text style={{
                    color: '#253334',
                    fontSize: 24,
                    fontWeight: '700'
                }}>{information}</Text>
                <Image source={Foto} style={{
                    height: 55,
                    width: 55,
                    borderRadius: 20
                }} />
            </View>
            <View style={{
                width: '100%',
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
                <Text style={styles.teks}></Text>
            </View>
        </View>
    }

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
                    }}>{date}</Text>
                    <Text style={{
                        color: '#F43636',
                        fontWeight: '700',
                        fontSize: 20,
                        marginTop: 10
                    }}>Rp{thousand(price)}</Text>
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
                {schedule.length > 0 && schedule.map((d, idx) => {
                    return (
                        <RincianJadwal key={idx} data={d}
                            hari={moment(d.date).format('dddd')}
                            tanggal={moment(d.date).format('DD MMMM YYYY')}
                            kuota={d.quota} 
                            active={chekoutSchedule === d.idSchedule ? true : false} 
                            change={setCheckoutSchedule}/>
                    )
                })}

                <PersonTrainer />
            </ScrollView>

            <View style={styles.ContainerCheckout}>
                <TouchableOpacity onPress={() => navigation.navigate('Checkout', {
                    broadcast: 'jadwal',
                    idProduct: '',
                    idMember: '',
                    ongkir: '',
                    idJadwal: chekoutSchedule
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
