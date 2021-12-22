import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import Logo from '../assets/logoworkdout.png'
import MemberItem from '../components/MemberItem';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Models from '../models/Models';

const membership = ({ navigation }) => {
    const [member, setmember] = useState([]);

    const thousand = val => (
        val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    );
    useEffect(() => {
        const getMembershipProduct = async () => {
            const res = await Models.getMembershipProduct();
            if (res.code != '200') {
                // alert(`${res}`);
            } else {
                setmember(res.data)
            }
        }
        getMembershipProduct()
    }, [])

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
                    {member.length > 0 && member.map((d, idx) => {
                        return (
                            <MemberItem key={idx} data={d} harga={thousand(d.price)} sesi={d.session} hari={d.days}
                                navigation={() => navigation.navigate('Checkout', {
                                    broadcast: 'member',
                                    idMember: d.idMembershipProduct,
                                    idProduct: '',
                                    ongkir: '',
                                    potOngkir: '',
                                    potDiskon: '',
                                })} />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default membership

const styles = StyleSheet.create({})
