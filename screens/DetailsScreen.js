import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import { ImageBackground, TouchableOpacity, StatusBar} from 'react-native';

const DetailsScreen = ({navigation, route}) => {
  const place = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 0.7}}
        source={place.image}>
          <View style={style.header}>
            <Icon 
              name="arrow-back-ios"
              size={28}
              color={COLORS.white}
              onPress={navigation.goBack}
            />
            <Icon name="more-vert" size={28} color={COLORS.white} />
          </View>
          <View style={style.imageDetails}>
            <Text 
            style={{
              width: "70%", 
              fontSize: 30, 
              fontWeight: 'bold', 
              color: COLORS.white,
              marginBottom: 20,
              }}>{place.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={20} color={COLORS.orange} />
              <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.white}}>
                5.0
              </Text>
            </View>
          </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
              <View style={style.iconContainer}>
                <Icon name="favorite" color={COLORS.red} size={30} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon name="place" color={COLORS.primary} size={28} />
                <Text style={{fontSize:20, fontWeight: 'bold',marginLeft: 5, color: COLORS.primary}}>
                  {place.location}
                </Text>
              </View>
              <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20}}>
                About the trip
              </Text>
              <Text style={{marginTop: 20, lineHeight: 25}}>{place.details}</Text>
      </View>
      <View style={style.footer}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize:28, fontWeight: 'bold', color: COLORS.white}}>
          $100
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={style.bookNow}>
          <Text style={{fontSize:12, fontWeight: 'bold', color: COLORS.primary, marginLeft: 2}}>
            Book now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};
const style = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  iconContainer: {
   height: 60,
   width: 60,
   position: 'absolute',
   top: -30,
   backgroundColor: COLORS.white,
   borderRadius: 30,
   right: 20,
   elevation: 10,
   justifyContent: 'center',
   alignItems: 'center',
  },
  footer:{
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bookNow: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default DetailsScreen;