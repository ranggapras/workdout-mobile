import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RincianJadwal = ({ hari, tanggal, kuota,data }) => {
    const [check, setCheck] = useState(false);
    const [jam, setJam] = useState();

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: wp('100%'),
            paddingVertical: 5,
            paddingLeft: 20,
            paddingRight: 20,
        }}>
            <View style={{ width: 60 }}>
                <Text style={styles.teks}>{hari}</Text>
            </View>
            <View style={{ width: 100 }}>
                <Text style={styles.teks}>{tanggal}</Text>
            </View>
            <View style={{
                width: 120,
                height: 30,
                alignItems: 'flex-start',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                <Picker
                    style={{ width: 200, backgroundColor: '#58B4A7' }}
                    itemStyle={{ backgroundColor: '#CBF3E8' }}
                    mode='dropdown'
                    selectedValue={jam}
                    onValueChange={(itemValue, itemIndex) =>
                        setJam(itemValue)
                    }>
                {data.time.map((d,idx)=>{
                    return(
                        <Picker.Item key={idx} label={d} value={d} />
                    )
                } )}
                </Picker>
            </View>
            <View style={{ width: 50, alignItems: 'center' }}>
                <Text style={styles.teks}>{kuota}</Text>
            </View>
            <TouchableOpacity onPress={() => setCheck(!check)}>
                <View style={{
                    width: 25,
                    height: 25,
                    borderRadius: 50,
                    backgroundColor: check ? '#58B4A7' : 'transparent',
                    borderWidth: check ? 0 : 2,
                    borderColor: '#58B4A7'
                }}></View>
            </TouchableOpacity>
        </View>
    )
}

export default RincianJadwal

const styles = StyleSheet.create({
    teks: {
        color: '#fff',
        fontSize: 16,
    }
})
