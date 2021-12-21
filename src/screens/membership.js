import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import Logo from '../assets/logoworkdout.png'
import MemberItem from '../components/MemberItem';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const membership = ({ navigation }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, alignItems: 'center' }}>
            <Image source={Logo} style={{ width: 61.78, height: 50, marginTop: 20 }} />
            <Text style={{
                color: '#fff',
                fontSize: 30,
                marginBottom: 20
            }}>MEMBERSHIP</Text>
            <Text style={{
                color: '#7e7e7e',
                fontSize: 20,
                textAlign: 'center',
                marginBottom: 20
            }}>Berlangganan Membership dengan{'\n'}banyak keuntungan</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'column' }}>
                    <MemberItem harga={'1.800.000'} sesi={5} hari={35} navigation={() => navigation.navigate('Checkout', {
                        broadcast: 'member',
                        id: ''
                    })} />
                    <MemberItem harga={'3.700.000'} sesi={11} hari={50} navigation={() => navigation.navigate('Checkout', {
                        broadcast: 'member',
                        id: ''
                    })} />
                    <MemberItem harga={'6.000.000'} sesi={20} hari={60} navigation={() => navigation.navigate('Checkout', {
                        broadcast: 'member',
                        id: ''
                    })} />
                    <MemberItem harga={'7.700.000'} sesi={31} hari={80} navigation={() => navigation.navigate('Checkout', {
                        broadcast: 'member',
                        id: ''
                    })} />
                    <MemberItem harga={'9.700.000'} sesi={61} hari={120} navigation={() => navigation.navigate('Checkout', {
                        broadcast: 'member',
                        id: ''
                    })} />
                </View>
            </ScrollView>
        </View>
    )
}

export default membership

const styles = StyleSheet.create({})
