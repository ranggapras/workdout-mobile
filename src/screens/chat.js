import React from 'react'
import { View, TextInput, ScrollView, StyleSheet, Text, Keyboard, TouchableOpacity } from 'react-native'
import Send from '../assets/send.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const chat = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.chatUser}>
                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                        <Text style={{ color: '#fff', marginRight: 30 }}>27-04-2000</Text>
                        <Text style={{ color: '#fff' }}>12:05</Text>
                    </View>
                    <View style={styles.bubbleUser}>
                        <Text style={{ color: '#000', fontSize: 17 }}>Untuk harganya berapa ya min?</Text>
                    </View>
                </View>
                <View style={styles.chatReply}>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <Text style={{ color: '#fff', marginRight: 30 }}>27-04-2000</Text>
                        <Text style={{ color: '#fff' }}>12:05</Text>
                    </View>
                    <View style={styles.bubbleReply}>
                        <Text style={{ color: '#000', fontSize: 17 }}>Tergantung dari jumlah pemilihan latihan</Text>
                    </View>
                </View>
                <View style={styles.chatReply}>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <Text style={{ color: '#fff', marginRight: 30 }}>27-04-2000</Text>
                        <Text style={{ color: '#fff' }}>12:05</Text>
                    </View>
                    <View style={styles.bubbleReply}>
                        <Text style={{ color: '#000', fontSize: 17 }}>Tergantung dari jumlah pemilihan latihan</Text>
                    </View>
                </View>
                <View style={styles.chatReply}>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <Text style={{ color: '#fff', marginRight: 30 }}>27-04-2000</Text>
                        <Text style={{ color: '#fff' }}>12:05</Text>
                    </View>
                    <View style={styles.bubbleReply}>
                        <Text style={{ color: '#000', fontSize: 17 }}>Tergantung dari jumlah pemilihan latihan</Text>
                    </View>
                </View>
                <View style={styles.chatUser}>
                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                        <Text style={{ color: '#fff', marginRight: 30 }}>27-04-2000</Text>
                        <Text style={{ color: '#fff' }}>12:05</Text>
                    </View>
                    <View style={styles.bubbleUser}>
                        <Text style={{ color: '#000', fontSize: 17 }}>Untuk harganya berapa ya min?</Text>
                    </View>
                </View>
                <View style={styles.chatReply}>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <Text style={{ color: '#fff', marginRight: 30 }}>27-04-2000</Text>
                        <Text style={{ color: '#fff' }}>12:05</Text>
                    </View>
                    <View style={styles.bubbleReply}>
                        <Text style={{ color: '#000', fontSize: 17 }}>dahla</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.containerTyping}>
                <TextInput
                    style={styles.Typing}
                    // onChangeText={(UserEmail) =>
                    //   setUserEmail(UserEmail)
                    // }
                    placeholder="Ketik"
                    placeholderTextColor="#000"
                    autoCapitalize="sentences"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={Keyboard.dismiss}
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                />
                <TouchableOpacity>
                    <Send />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default chat

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