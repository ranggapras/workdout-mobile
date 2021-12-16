import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import CardItem from '../components/CardItem'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const productpopular = ({ navigation }) => {
    const [filter, setFilter] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ width: wp('100%'), flexDirection: 'row' }}>
                <TouchableOpacity style={{
                    width: wp('25%'),
                    padding: 15,
                    paddingVertical: 20,
                    backgroundColor: filter === 'terkait' ? '#7C9A92' : '#2B4244',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={() => setFilter('terkait')}>
                    <Text style={{ color: '#fff' }}>Terkait</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: wp('25%'),
                    padding: 15,
                    paddingVertical: 20,
                    backgroundColor: filter === 'terlaris' ? '#7C9A92' : '#2B4244',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={() => setFilter('terlaris')}>
                    <Text style={{ color: '#fff' }}>Terlaris</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: wp('25%'),
                    padding: 15,
                    paddingVertical: 20,
                    backgroundColor: filter === 'termahal' ? '#7C9A92' : '#2B4244',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={() => setFilter('termahal')}>
                    <Text style={{ color: '#fff' }}>Termahal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: wp('25%'),
                    padding: 15,
                    paddingVertical: 20,
                    backgroundColor: filter === 'termurah' ? '#7C9A92' : '#2B4244',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={() => setFilter('termurah')}>
                    <Text style={{ color: '#fff' }}>Termurah</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: wp('85%'), marginBottom: 15 }}>
                    <Text style={styles.JudulTeks}>PRODUK TERLARIS</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingBottom: 60 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('85%'), marginBottom: 25 }}>
                            <CardItem navigation={() => navigation.navigate('DetailProduk')} />
                            <CardItem navigation={() => navigation.navigate('DetailProduk')} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('85%'), marginBottom: 25 }}>
                            <CardItem navigation={() => navigation.navigate('DetailProduk')} />
                            <CardItem navigation={() => navigation.navigate('DetailProduk')} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('85%'), marginBottom: 25 }}>
                            <CardItem navigation={() => navigation.navigate('DetailProduk')} />
                            <CardItem navigation={() => navigation.navigate('DetailProduk')} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('85%'), marginBottom: 25 }}>
                            <CardItem navigation={() => navigation.navigate('DetailProduk')} />
                            <CardItem navigation={() => navigation.navigate('DetailProduk')} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default productpopular

const styles = StyleSheet.create({
    JudulTeks: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18
    },
    Teks: {
        color: '#fff',
    }
})
