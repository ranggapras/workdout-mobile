import React from 'react'
import { ImageBackground,Image, View, Text } from 'react-native'


const splash = () => {
    return (
        <View style={{flex: 1}}>
            <ImageBackground source={require('../assets/Background.png')} style={{justifyContent: 'center', flex:1,alignItems:'center'}}>
            <Image source={require('../assets/logo.png')} style={{height:250,width:250}} />
            <Text style={{fontWeight:"bold",fontSize:34,color:"#FFFFFF"}}>Workd Out</Text>
            </ImageBackground>   
            
        </View>
    )
}

export default splash


