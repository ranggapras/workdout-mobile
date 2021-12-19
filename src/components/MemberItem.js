import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MemberItem = ({ harga, sesi, hari, navigation }) => {
    const [check, setCheck] = useState(false);

    return (
        <TouchableOpacity onPress={() => setCheck(!check), navigation}>
            <View style={{
                width: wp('85%'),
                height: 100,
                backgroundColor: '#CBF3E8',
                borderRadius: 40,
                paddingHorizontal: 20,
                borderWidth: 6,
                borderColor: check ? '#5FA88E' : 'transparent',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 10
            }}>
                <View style={{
                    width: 25,
                    height: 25,
                    borderRadius: 50,
                    backgroundColor: check ? '#3A5051' : '#CBF3E8',
                    borderWidth: check ? 0 : 4,
                    borderColor: '#3A5051'
                }}></View>
                <View style={{
                    width: wp('60%'),
                }}>
                    <Text style={{
                        color: '#3A5051',
                        fontSize: 25,
                        fontWeight: '700'
                    }}>Rp. {harga}</Text>
                    <Text style={{
                        fontSize: 18
                    }}>{sesi} sesi pertemuan / {hari} hari</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MemberItem

const styles = StyleSheet.create({})
