import React,{useEffect, useState} from 'react'
import { View, TextInput, ScrollView, StyleSheet, Text, Keyboard, TouchableOpacity } from 'react-native'
import Send from '../assets/send.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange } from 'react-native-responsive-screen';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const Chat = ({ navigation }) => {
const [chat, setChat] = useState([]);
const [userid, setuserid] = useState(null)
const [form, setform] = useState(null)

    useEffect(() => {
    getData()    
    }, [])
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('user');
            database().ref(`${JSON.parse(value).id}`).on('value', snapshot => {
                console.log(' chat Data => ',snapshot.val())
              let chats = [];
              snapshot.forEach((snap) => {
                chats.push(snap.val());
                console.log(snap.val());
              });
              setChat(chats);
            });
            setuserid(JSON.parse(value).id)
          } catch (error) {
            setChat({ readError: error.message });
          }
    }

    const sendData = async () => {
        try {
            const value = await AsyncStorage.getItem('user');
            await database().ref(`${JSON.parse(value).id}`).push({
              message: form,
              timestamp: Date.now(),
              id: JSON.parse(value).id
            });
           setform(null)
          } catch (error) {
            
          }
        };
    

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
            {chat.length>0 && chat.map((d, idx)=> {
                        console.log(d);
                        if (d.id === userid ) {
                            return (
                    <View key={idx} style={styles.chatUser}>
                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                        <Text style={{ color: '#fff', marginRight: 30 }}>{moment(d.timestamp).format('DD-MM-YYYY')}</Text>
                        <Text style={{ color: '#fff' }}>{moment(d.timestamp).format('hh:mm')}</Text>
                    </View>
                    <View style={styles.bubbleUser}>
                        <Text style={{ color: '#000', fontSize: 17 }}>{`${d.message}`}</Text>
                    </View>
                </View>
                            )
                        }
                        return(
                            <View key={idx} style={styles.chatReply}>
                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <Text style={{ color: '#fff', marginRight: 30 }}>{moment(d.timestamp).format('DD-MM-YYYY')}</Text>
                                <Text style={{ color: '#fff' }}>{moment(d.timestamp).format('hh:mm')}</Text>
                            </View>
                            <View style={styles.bubbleReply}>
                                <Text style={{ color: '#000', fontSize: 17 }}>{`${d.message}`}</Text>
                            </View>
                        </View>
                        )
                    })}
            </ScrollView>
            <View style={styles.containerTyping}>
                <TextInput
                    style={styles.Typing}
                    onChangeText={(value) =>
                      setform(value)
                    }
                    placeholder="Ketik"
                    placeholderTextColor="#000"
                    autoCapitalize="sentences"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={Keyboard.dismiss}
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                />
                <TouchableOpacity onPress={() => sendData()}>
                    <Send />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    chatUser: {
        width: wp('100%'),
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginVertical: 10,
        paddingRight: 15,
    },
    bubbleUser: {
        padding: 20,
        alignItems: 'center',
        maxWidth: 300,
        backgroundColor: '#CBF3E8',
        borderRadius: 15,
        marginTop: 10
    },
    chatReply: {
        width: wp('100%'),
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginVertical: 10,
        paddingLeft: 15
    },
    bubbleReply: {
        padding: 20,
        alignItems: 'center',
        maxWidth: 300,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 10
    },
    Typing: {
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 15
    },
    containerTyping: {
        flexDirection: 'row',
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#253334'
    }
})