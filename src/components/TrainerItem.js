import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Foto from '../assets/trainer.png'
import IconIkut from '../assets/tombol-ikut.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TrainerItem = ({nama, navigation}) => {
    return (
        <View style={{
            width: wp('90%'),
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 20,
            marginVertical: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <View style={{
                flexDirection: 'column'
            }}>
                <Text style={{
                    color: '#000',
                    fontSize: 30,
                    marginBottom: 10
                }}>{nama}</Text>
                <Text style={{
                    color: '#000',
                    fontSize: 16,
                    marginBottom: 10
                }}>ikuti kelas saya sekarang</Text>
                <TouchableOpacity onPress={navigation}>
                    <View style={{
                        width: 130,
                        height: 40,
                        borderRadius: 15,
                        backgroundColor: '#253334',
                        alignItems: 'center',
                        paddingHorizontal: 30,
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: '#fff',
                            textAlignVertical: 'center',
                            textAlign: 'center'
                        }}>Ikut</Text>
                        <IconIkut />
                    </View>
                </TouchableOpacity>
            </View>
            <Image source={Foto} />
        </View>
    )
}

export default TrainerItem

const styles = StyleSheet.create({})
