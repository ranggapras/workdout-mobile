import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Gambar from '../assets/Produk.png';
import CardItem from '../components/CardItem';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Models from '../models/Models';

const product = ({navigation, route}) => {
  const dataSearch = route.params;
  let datas = [];
  const [product, setproduct] = useState([]);
  const [search, setSearch] = useState([]);
  const searchFilter = () => {
    const filteredProduct = product.filter(data => {
      return data.name.toUpperCase().includes(dataSearch.toUpperCase());
    });

    if (dataSearch == '') {
      return (datas = []);
    } else {
      datas = filteredProduct;
    }

    if (datas.length == 0) {
      return alert(`Produk ${dataSearch} tidak ditemukan!`);
    }
    return filteredProduct;
  };
  if (dataSearch != undefined || dataSearch != null) {
    searchFilter();
  } else console.log('hiya2');
  useEffect(() => {
    const getProduct = async () => {
      const res = await Models.getProduct();
      //   console.log(res);
      if (res.code != '200') {
        // alert(`${res}`);
      } else {
        setproduct(res.data);
        // console.log('asd ', res);
      }
    };
    getProduct();
  }, [setproduct]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {datas.length > 0 ? (
        <SearcResult navigation={navigation} data={datas} />
      ) : (
        <ChildProduct navigation={navigation} data={product} />
      )}
    </View>
  );
};
const ChildProduct = ({navigation, data}) => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      setproduct(data);
    };
    getProduct();
  }, [data]);

  return (
    <>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: wp('85%'),
            marginBottom: 15,
          }}>
          <Text style={styles.JudulTeks}>PRODUK TERLARIS</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ProdukLaris')}>
            <Text style={styles.Teks}>Lihat lainnya {'>'}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('85%'),
          }}>
          {product.length > 0 &&
            product.map((d, idx) => {
              return (
                <CardItem
                  key={idx}
                  data={d}
                  navigation={() =>
                    navigation.navigate('DetailProduk', {
                      idProduct: `${d.idProduct}`,
                      idMember: '',
                    })
                  }
                />
              );
            })}
        </View>
      </View>
      <View style={{marginTop: 30}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: wp('85%'),
            marginBottom: 15,
          }}>
          <Text style={styles.JudulTeks}>PRODUK TERBARU</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ProdukBaru')}>
            <Text style={styles.Teks}>Lihat lainnya {'>'}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('85%'),
          }}>
          {product.length > 0 &&
            product.map((d, idx) => {
              return (
                <CardItem
                  key={idx}
                  data={d}
                  navigation={() =>
                    navigation.navigate('DetailProduk', {
                      idProduct: `${d.idProduct}`,
                      idMember: '',
                    })
                  }
                />
              );
            })}
        </View>
      </View>
    </>
  );
};
const SearcResult = ({navigation, data}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: wp('85%'),
        }}>
        {data.length > 0 &&
          data.map((d, idx) => {
            return (
              <CardItem
                key={idx}
                data={d}
                navigation={() =>
                  navigation.navigate('DetailProduk', {
                    idProduct: `${d.idProduct}`,
                    idMember: '',
                  })
                }
              />
            );
          })}
      </View>
    </>
  );
};
export default product;

const styles = StyleSheet.create({
  JudulTeks: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  Teks: {
    color: '#fff',
  },
});
