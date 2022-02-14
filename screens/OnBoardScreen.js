import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import COLORS from '../consts/colors';
import { StatusBar, TouchableOpacity } from 'react-native';
const OnBoardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ImageBackground
            style={{flex: 1, resizeMode: 'cover'}}
            source={require('../assets/chungya.jpg')}>
            <View style={style.details}>
                <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>Discover</Text>
                <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>world with us</Text>
                <Text style={{color: COLORS.white, lineHeight: 25, marginTop: 15}}>congratulations on your work and thank you for sharing your wisdom and knowledge.</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('HomeScreen')}>
                    <View style={style.btn}>
                        <Text style={{fontWeight: 'bold'}}>Get Started</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        </ImageBackground>
        
        
    </View>
  )
}

const style= StyleSheet.create({
    details: {
        height: '50%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40,
    },
    btn: {
        height: 50,
        width: 120,
        backgroundColor: COLORS.white,
        marginTop: 20,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default OnBoardScreen;