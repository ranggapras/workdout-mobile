import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const pengiriman = ({ route, navigation }) => {
    const { broadcast } = route.params;
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Checkout', {
                broadcast: broadcast,
                idProduct: '',
                idMember: '',
                ongkir: 5000
            })}>
                <View style={styles.containerPengiriman}>
                    <Text style={styles.teksOngkos}>Kurir Gym</Text>
                    <Text style={styles.teksHargaOngkos}>Rp 5.000</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Checkout', {
                broadcast: broadcast,
                idProduct: '',
                idMember: '',
                ongkir: 0
            })}>
                <View style={styles.containerPengiriman}>
                    <Text style={styles.teksOngkos}>Ambil di Tempat Gym</Text>
                    <Text style={styles.teksHargaOngkos}>Rp 0</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default pengiriman

const styles = StyleSheet.create({
    containerPengiriman: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#CBF3E8',
        width: wp('100%'),
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderColor: '#58B4A7',
        borderTopWidth: 4,
        borderBottomWidth: 4,
        marginTop: 20
    },
    teksOngkos: {
        fontSize: 18,
        fontWeight: '700'
    },
    teksHargaOngkos: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})
