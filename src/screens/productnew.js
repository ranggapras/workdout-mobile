import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import CardItem from '../components/CardItem'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Models from '../models/Models';

const productnew = ({ navigation }) => {
    const [product, setproduct] = useState([])

    useEffect(async () => {
        const getProduct = async () => {
          const res = await Models.getProduct();
          console.log(res);
          if (res.code != '200') {
            // alert(`${res}`);
          } else {
            setproduct(res.data)
           console.log('asd ',res);
          }
        }
        getProduct()
      }, [])

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
                    <Text style={styles.JudulTeks}>PRODUK TERBARU</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingBottom: 60 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('85%'), marginBottom: 25 }}>
                        {product.length>0 && product.map((d, idx)=> {
                        console.log(d);
                        return(
                        <CardItem key={idx} data={d} navigation={() => navigation.navigate('DetailProduk', {
                            id: `${d.idProduct}`,idMember:''
                        })}/>
                        )
                    })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default productnew

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
