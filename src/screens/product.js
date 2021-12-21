import React, { useState,useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Gambar from '../assets/Produk.png'
import CardItem from '../components/CardItem'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Models from '../models/Models';


const product = ({ navigation }) => {

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

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: wp('85%'), marginBottom: 15 }}>
                    <Text style={styles.JudulTeks}>PRODUK TERLARIS</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ProdukLaris')}>
                        <Text style={styles.Teks}>Lihat lainnya {'>'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('85%') }}>
                    {product.length>0 && product.map((d, idx)=> {
                        console.log('produk');
                        console.log(d);
                        return(
                        <CardItem key={idx} data={d} navigation={() => navigation.navigate('DetailProduk', {
                            id: `${d.idProduct}`,
                        })}/>
                        )
                    })}
                </View>
            </View>
            <View style={{ marginTop: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: wp('85%'), marginBottom: 15 }}>
                    <Text style={styles.JudulTeks}>PRODUK TERBARU</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ProdukBaru')}>
                        <Text style={styles.Teks}>Lihat lainnya {'>'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp('85%') }}>
                 {product.length>0 && product.map((d, idx)=> {
                        console.log(d);
                        return(
                        <CardItem key={idx} data={d} navigation={() => navigation.navigate('DetailProduk', {
                            idProduct: `${d.idProduct}`,idMember:''
                        })}/>
                        )
                    })}
                </View>
            </View>
        </View>
    )
}

export default product

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
