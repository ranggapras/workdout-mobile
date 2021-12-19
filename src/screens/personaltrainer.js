import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Logo from '../assets/logoworkdout.png'
import TrainerItem from '../components/TrainerItem';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const personaltrainer = ({ navigation }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <Image source={Logo} style={{ width: 61.78, height: 50, marginTop: 20 }} />
            <Text style={{
                color: '#fff',
                fontWeight: '700',
                fontSize: 35,
                marginVertical: 20
            }}>Personal Trainer</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    width: wp('90%'),
                    alignSelf: 'center'
                }}>
                    <TrainerItem nama={'Pramuditya'} navigation={() => navigation.navigate('DetailWorkout', {
                        information: 'Pramuditya',
                    })} />
                    <TrainerItem nama={'Aji'} navigation={() => navigation.navigate('DetailWorkout', {
                        information: 'Aji',
                    })} />
                    <TrainerItem nama={'Gumelar'} navigation={() => navigation.navigate('DetailWorkout', {
                        information: 'Gumelar',
                    })} />
                    <TrainerItem nama={'Rangga'} navigation={() => navigation.navigate('DetailWorkout', {
                        information: 'Rangga',
                    })} />
                    <TrainerItem nama={'Gojo Satoru'} navigation={() => navigation.navigate('DetailWorkout', {
                        information: 'Gojo Satoru',
                    })} />
                </View>
            </ScrollView>
        </View>
    )
}

export default personaltrainer

const styles = StyleSheet.create({})
