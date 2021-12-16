import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HomeIcon from '../assets/home.svg'
import ChatIcon from '../assets/chat.svg'
import ProductIcon from '../assets/product.svg'
import ProfileIcon from '../assets/profile.svg'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TabItem = ({ isFocused, onLongPress, onPress, label }) => {

    const Icons = () => {
        if (label === "Beranda") return isFocused ? <HomeIcon /> : <HomeIcon />

        if (label === "Produk") return isFocused ? <ProductIcon /> : <ProductIcon />

        if (label === "Pesan") return isFocused ? <ChatIcon /> : <ChatIcon />

        if (label === "Profil") return isFocused ? <ProfileIcon /> : <ProfileIcon />

        return isFocused ? <HomeIcon /> : <HomeIcon />
    }

    const styles = StyleSheet.create({
        title: {
            color: '#fff',
            textAlign: 'center',
        },
        Container: { 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            paddingHorizontal: 25,
            padding: 10,
            backgroundColor: isFocused ? '#7C9A92' : '#2B4244',
        }
    })

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.Container}
        >
            <Icons size={25} />
            <Text style={styles.title}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

