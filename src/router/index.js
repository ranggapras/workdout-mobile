import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Chat,
  EditProfile,
  Hasil,
  Kalkulator,
  KalkulatorBB,
  KalkulatorKalori,
  Login,
  Main,
  Onboard,
  Product,
  Profile,
  Register,
  Splash,
  ProductNew,
  ProductPopular,
  DetailProduct,
  Keranjang,
  Checkout,
  OpsiKirim,
  Voucher,
  Pembayaran,
  PesananSelesai,
  JadwalWorkout,
  Membership,
  DetailWorkout,
  Terdaftar,
  PersonalTrainer,
  Tabel,
  Notification,
} from '../screens';
import Back from '../assets/back-dark.svg';
import BackLight from '../assets/back.svg';
import Cart from '../assets/cartb.svg';
import CartWhite from '../assets/cart.svg';
import Bell from '../assets/bellb.svg';
import BellWhite from '../assets/bell.svg';
import Logo from '../assets/logoworkdout.png';
import LogoDark from '../assets/logo-dark.png';
import SearchIcon from '../assets/search-icon.svg';
import BottomNavigator from '../components/BottomNavigator';
import {Badge} from 'react-native-elements';
import Models from '../models/Models';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      tabBar={props => (
        <BottomNavigator
          {...props}
          state={{...props.state, routes: props.state.routes.slice(0, 4)}}
          backBehavior="history"
        />
      )}>
      <Tab.Screen
        name="Beranda"
        component={Main}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#253334',
            height: 70,
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTitle: () => {
            return (
              <View>
                <Image source={Logo} style={{width: 61.78, height: 50}} />
              </View>
            );
          },
          headerTitleAlign: 'left',
          headerRight: () => {
            return (
              <View
                style={{
                  width: 80,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 20,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Keranjang')}>
                  <CartWhite />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <BellWhite />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Produk"
        component={Product}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#87ADA3',
            height: 70,
          },
          headerTitle: () => {
            const [items, setItems] = useState(null);
            return (
              <View style={{marginLeft: 47}}>
                <View style={{position: 'relative'}}>
                  <TouchableOpacity
                    style={styles.iconSearch}
                    onPress={() => {
                      navigation.navigate('Produk', items);
                    }}>
                    <SearchIcon />
                  </TouchableOpacity>
                  <TextInput
                    style={styles.Searchbar}
                    // onChangeText={(UserEmail) =>
                    //   setUserEmail(UserEmail)
                    // }
                    placeholder="Cari ..."
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={setItems}
                    value={items}
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                  />
                </View>
              </View>
            );
          },
          headerRight: () => {
            return (
              <View
                style={{
                  width: 80,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 20,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Keranjang')}>
                  <Cart />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <Bell />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginLeft: 20, display: 'none'}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Tab.Screen
        name="Pesan"
        component={Chat}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#87ADA3',
            height: 70,
          },
          headerTitle: () => {
            return (
              <View>
                <Text
                  style={{fontSize: 26, color: '#252525', fontWeight: '700'}}>
                  WORKD Out
                </Text>
              </View>
            );
          },
          headerTitleAlign: 'center',
          headerLeft: () => {
            return (
              <View style={{marginLeft: 20}}>
                <Image source={LogoDark} style={{width: 61.78, height: 50}} />
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Profil"
        component={Profile}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#253334',
            height: 70,
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTitle: () => {
            return (
              <View>
                <Image source={Logo} style={{width: 61.78, height: 50}} />
              </View>
            );
          },
          headerTitleAlign: 'left',
          headerRight: () => {
            return (
              <View style={{marginRight: 20}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Editprofile')}>
                  <Text style={{color: '#fff', fontSize: 16}}>Edit</Text>
                </TouchableOpacity>
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboard"
        component={Onboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Editprofile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kalkulator"
        component={Kalkulator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kalkulatorkalori"
        component={KalkulatorKalori}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hasil"
        component={Hasil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kalkulatorbb"
        component={KalkulatorBB}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProdukBaru"
        component={ProductNew}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#87ADA3',
            height: 70,
          },
          headerBackVisible: false,
          headerTitle: () => {
            const [items, setItems] = useState(null);
            return (
              <View style={{position: 'relative'}}>
                <TouchableOpacity
                  style={styles.iconSearch}
                  onPress={() => {
                    navigation.navigate('Produk', items);
                  }}>
                  <SearchIcon />
                </TouchableOpacity>
                <TextInput
                  style={styles.Searchbar}
                  // onChangeText={(UserEmail) =>
                  //   setUserEmail(UserEmail)
                  // }
                  onChangeText={setItems}
                  value={items}
                  placeholder="Cari ..."
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={Keyboard.dismiss}
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
            );
          },
          headerRight: () => {
            return (
              <View
                style={{
                  width: 80,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 0,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Keranjang')}>
                  <Cart />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <Bell />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="ProdukLaris"
        component={ProductPopular}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#87ADA3',
            height: 70,
          },
          headerBackVisible: false,
          headerTitle: () => {
            const [items, setItems] = useState(null);
            return (
              <View style={{position: 'relative'}}>
                <TouchableOpacity
                  style={styles.iconSearch}
                  onPress={() => {
                    navigation.navigate('Produk', items);
                  }}>
                  <SearchIcon />
                </TouchableOpacity>
                <TextInput
                  style={styles.Searchbar}
                  // onChangeText={(UserEmail) =>
                  //   setUserEmail(UserEmail)
                  // }
                  onChangeText={setItems}
                  value={items}
                  placeholder="Cari ..."
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={Keyboard.dismiss}
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
            );
          },
          headerRight: () => {
            return (
              <View
                style={{
                  width: 80,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 0,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Keranjang')}>
                  <Cart />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <Bell />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="DetailProduk"
        component={DetailProduct}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#87ADA3',
            height: 70,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return (
              <View style={{position: 'relative'}}>
                <TouchableOpacity style={styles.iconSearch}>
                  <SearchIcon />
                </TouchableOpacity>
                <TextInput
                  style={styles.Searchbar}
                  // onChangeText={(UserEmail) =>
                  //   setUserEmail(UserEmail)
                  // }
                  placeholder="Cari ..."
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={Keyboard.dismiss}
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
            );
          },
          headerRight: () => {
            return (
              <View
                style={{
                  width: 80,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 0,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Keranjang')}>
                  <Cart />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <Bell />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="Keranjang"
        component={Keranjang}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#87ADA3',
            height: 70,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return (
              <View>
                <Text
                  style={{fontSize: 26, color: '#252525', fontWeight: '700'}}>
                  KERANJANG
                </Text>
              </View>
            );
          },
          headerTitleAlign: 'center',
          headerRight: () => {
            return (
              <View style={{marginRight: 0}}>
                <Image source={LogoDark} style={{width: 61.78, height: 50}} />
              </View>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#87ADA3',
            height: 70,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return (
              <View>
                <Text
                  style={{fontSize: 26, color: '#252525', fontWeight: '700'}}>
                  CHECKOUT
                </Text>
              </View>
            );
          },
          headerTitleAlign: 'center',
          headerRight: () => {
            return (
              <View style={{marginRight: 0}}>
                <Image source={LogoDark} style={{width: 61.78, height: 50}} />
              </View>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="OpsiKirim"
        component={OpsiKirim}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#87ADA3',
            height: 70,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return (
              <View>
                <Text
                  style={{fontSize: 20, color: '#252525', fontWeight: '700'}}>
                  OPSI PENGIRIMAN
                </Text>
              </View>
            );
          },
          headerTitleAlign: 'center',
          headerRight: () => {
            return (
              <View style={{marginRight: 0}}>
                <Image source={LogoDark} style={{width: 61.78, height: 50}} />
              </View>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginRight: 0}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="Voucher"
        component={Voucher}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#87ADA3',
            height: 70,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return (
              <View>
                <Text
                  style={{fontSize: 20, color: '#252525', fontWeight: '700'}}>
                  PILIH VOUCHER
                </Text>
              </View>
            );
          },
          headerTitleAlign: 'center',
          headerRight: () => {
            return (
              <View style={{marginRight: 0}}>
                <Image source={LogoDark} style={{width: 61.78, height: 50}} />
              </View>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginRight: 0}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#87ADA3',
            height: 70,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return (
              <View>
                <Text
                  style={{fontSize: 20, color: '#252525', fontWeight: '700'}}>
                  METODE PEMBAYARAN
                </Text>
              </View>
            );
          },
          headerTitleAlign: 'center',
          headerRight: () => {
            return (
              <View style={{marginRight: 0}}>
                <Image source={LogoDark} style={{width: 61.78, height: 50}} />
              </View>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginRight: 0}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="PesananSelesai"
        component={PesananSelesai}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JadwalWorkout"
        component={JadwalWorkout}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#253334',
            height: 70,
          },
          headerShadowVisible: false,
          headerTitle: () => {
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackLight />
              </TouchableOpacity>
            );
          },
          headerTitleAlign: 'left',
          headerBackVisible: false,
        })}
      />
      <Stack.Screen
        name="Membership"
        component={Membership}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#253334',
            height: 70,
          },
          headerShadowVisible: false,
          headerTitle: () => {
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackLight />
              </TouchableOpacity>
            );
          },
          headerTitleAlign: 'left',
          headerBackVisible: false,
        })}
      />
      <Stack.Screen
        name="DetailWorkout"
        component={DetailWorkout}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#87ADA3',
            height: 70,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return <View></View>;
          },
          headerRight: () => {
            return (
              <View
                style={{
                  width: 80,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 0,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Keranjang')}>
                  <Cart />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <Bell />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen
        name="Terdaftar"
        component={Terdaftar}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#253334',
            height: 70,
          },
          headerShadowVisible: false,
          headerTitle: () => {
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackLight />
              </TouchableOpacity>
            );
          },
          headerTitleAlign: 'left',
          headerBackVisible: false,
        })}
      />
      <Stack.Screen
        name="PersonalTrainer"
        component={PersonalTrainer}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#253334',
            height: 70,
          },
          headerShadowVisible: false,
          headerTitle: () => {
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackLight />
              </TouchableOpacity>
            );
          },
          headerTitleAlign: 'left',
          headerBackVisible: false,
        })}
      />
      <Stack.Screen
        name="Tabel"
        component={Tabel}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#253334',
            height: 70,
          },
          headerShadowVisible: false,
          headerTitle: () => {
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackLight />
              </TouchableOpacity>
            );
          },
          headerTitleAlign: 'left',
          headerBackVisible: false,
        })}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={({navigation, route}) => ({
          headerStyle: {
            backgroundColor: '#87ADA3',
            height: 70,
          },
          headerBackVisible: false,
          headerTitle: () => {
            return (
              <View>
                <Text
                  style={{fontSize: 25, color: '#252525', fontWeight: '700'}}>
                  NOTIFIKASI
                </Text>
              </View>
            );
          },
          headerTitleAlign: 'center',
          headerRight: () => {
            return (
              <View
                style={{
                  width: 80,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 0,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Keranjang')}>
                  <Cart />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <Bell />
                  <Badge
                    status="error"
                    value={5}
                    containerStyle={{
                      position: 'absolute',
                      top: -8,
                      right: -5,
                      zIndex: 2,
                    }}
                    textStyle={{
                      color: '#000',
                      fontWeight: '800',
                    }}
                    badgeStyle={{
                      backgroundColor: '#CBF3E8',
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen name="App" component={App} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  Searchbar: {
    padding: 0,
    marginLeft: 10,
    paddingLeft: 50,
    width: 200,
    height: 40,
    backgroundColor: '#CBF3E8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  iconSearch: {
    position: 'absolute',
    zIndex: 10,
    left: 20,
    top: 5,
  },
});
