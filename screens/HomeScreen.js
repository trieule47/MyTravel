import { View, Text, Dimensions} from 'react-native'
import React from 'react'
import COLORS from '../consts/colors';
import places from '../consts/places';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView, StyleSheet, StatusBar, ScrollView, TextInput} from 'react-native'
import { FlatList, ImageBackground,TouchableOpacity } from 'react-native';

const {width} = Dimensions.get("screen"); 
const HomeScreen = ({navigation}) => {

    const categoryIcons = [
        <Icon name="flight" size={25} color={COLORS.primary} />,
        <Icon name="beach-access" size={25} color={COLORS.primary} />,
        <Icon name="near-me" size={25} color={COLORS.primary} />,
        <Icon name="place" size={25} color={COLORS.primary} />
    ]
    const ListCategories = () => {
        return (
        <View style={style.categoryContainer}>
            {categoryIcons.map((icon, index) =>(
                <View key={index} style={style.iconContainer}>
                    {icon}
                </View>
            ))}
        </View>
        );
    }
    const Card = ({place}) => {
        return( 
        <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate('DetailsScreen',place)}>
            <ImageBackground style={style.cardImage} source={place.image}>
                <Text style={{
                    color: COLORS.Light, 
                    fontSize: 20,
                    fontWeight: 'bold', 
                    marginTop: 20}}>{place.name}
                    </Text>
                    <View
                    style={{
                        flex: 1,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="place" size={20} color={COLORS.white} />
                            <Text style={{marginLeft: 5, color: COLORS.white}}>{place.location}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="star" size={20} color={COLORS.orange} />
                            <Text style={{marginLeft: 5, color: COLORS.white}}>5.0</Text>
                        </View>
                    </View>
            </ImageBackground>
        </TouchableOpacity>)
    };

    const RecommendedCard = ({place}) =>{
        return <ImageBackground style={style.rmCard}
        source={place.image}>
            <Text style={{color: COLORS.light, fontSize: 22, fontWeight: 'bold', marginTop: 10}}>{place.name}</Text>
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="place" size={20} color={COLORS.white}/>
                        <Text style={{marginLeft: 5, color: COLORS.white}}>{place.location}</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Icon name="star" size={20} color={COLORS.white}/>
                        <Text style={{marginLeft: 5, color: COLORS.white}}>5.0</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    }
  return ( 
  <SafeAreaView
    style={{flex: 1, backgroundColor: COLORS.white}}>
        <StatusBar translucent={false} backgroundColor={COLORS.primary} />
        <View style={style.header}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Icon name="sort" size={28} color={COLORS.white} />
            </TouchableOpacity>            
            <TouchableOpacity>
                <Icon name="notifications-none" size={28} color={COLORS.white} />
            </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View 
            style={{
                backgroundColor: COLORS.primary, 
                height: 120,
                paddingHorizontal: 20,
            }}>
                <Text style={style.headerTitle}>Explore the</Text>
                <Text style={style.headerTitle}>beautiful places the</Text>
                <View style={style.inputContainer}>
                    <Icon name="search" size={28} />
                    <TextInput
                        placeholder="Search place"
                        style={{color:COLORS.dark}}
                    />
                </View>
            </View>
            <ListCategories />
            <Text style={style.sectionTitle}>Places</Text>
            <View>
                <FlatList 
                contentContainerStyle={{paddingLeft: 20}}
                horizontal
                showsVerticalScrollIndicator={false}
                data={places}
                renderItem={({item}) => <Card place={item} />}
                />
                <Text style={style.sectionTitle}>Recommended</Text>
                <FlatList 
                    snapToInterval={width - 20}
                    contentContainerStyle={{paddingLeft: 20}}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={places}
                    renderItem={({item}) => <RecommendedCard place={item}/>} 
                />
            </View>
        </ScrollView>
  </SafeAreaView>
  );
};

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary,
    },
    headerTitle: {
        color: COLORS.white, fontSize: 35, fontWeight: 'bold'
    },
    inputContainer: {
        height: 60,
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        position: 'absolute',
        top: 90,
        right: 20,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        elevation: 10,
    },
    categoryContainer: {
        marginTop: 60,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    iconContainer: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    sectionTitle:  {
        marginHorizontal: 20,
        marginVertical:20,
        fontWeight: 'bold',
    },
    cardImage: {
        height:220,
        width: width / 2,
        marginRight: 20,
        padding: 20,
        overflow: 'hidden',
        borderRadius: 10,
    },
    rmCard: {
        width: width -40,
        height: 200,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding:10,
    }
    
});
export default HomeScreen;