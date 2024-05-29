import { View, Text, Image, ScrollView,  RefreshControl, } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { StretchInX, StretchOutY, FadeIn, FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native'

export default function Topics() {

    const navigation = useNavigation()

  return (
    
    <View className="flex-row "> 
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
    className="py-5">

        {/* Topic one */}
        <Animated.View entering={FadeInDown.delay(100).duration(3000).springify()}>
        <TouchableOpacity onPress={() => navigation.navigate('CategorySearch')}>
            <View className="bg-white border border-gray-200 ml-7 mr-5 px-4 rounded-xl items-center shadow-sm">
                {/* Image */}
                <Image source={require('./../assets/images/skins/skin-oily.png')} 
                        className="w-14 h-14 rounded-full -mt-4 mb-2"
                />

                {/* Text */}
                <View className="flex-wrap">
                <Text
                    style={{ fontFamily: 'Montserrat_300Light', fontSize: 13 }}
                    className="w-20 pb-0 text-center">
                        Explore
                </Text>

                <Text
                    style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 16 }}
                    className="pb-4 text-center">
                        Oily Skin
                </Text>
            </View>
    
            </View>
        </TouchableOpacity>
        </Animated.View>

         {/* Topic two */}
         <Animated.View entering={FadeInDown.delay(200).duration(3000).springify()}>
         <TouchableOpacity>
            <View className="bg-white border border-gray-200 mr-5 px-4 rounded-xl items-center shadow-sm">
                {/* Image */}
                <Image source={require('./../assets/images/skins/skin-oily-acne.png')} 
                        className="w-14 h-14 rounded-full -mt-4 mb-2"
                />

                {/* Text */}
                <View className="flex-wrap">
                <Text
                    style={{ fontFamily: 'Montserrat_300Light', fontSize: 13 }}
                    className="w-20 pb-0 text-center">
                        Explore
                </Text>

                <Text
                    style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 16 }}
                    className="pb-4 text-center w-20">
                        Acne 
                </Text>
            </View>
    
            </View>
        </TouchableOpacity>
        </Animated.View>

        {/* Topic two */}
        <Animated.View entering={FadeInDown.delay(300).duration(3000).springify()}>
        <TouchableOpacity>
            <View className="bg-white border border-gray-200 mr-5 px-4 rounded-xl items-center shadow-sm">
                {/* Image */}
                <Image source={require('./../assets/images/skins/skin-redness.png')} 
                        className="w-14 h-14 rounded-full -mt-4 mb-2"
                />

                {/* Text */}
                <View className="flex-wrap">
                <Text
                    style={{ fontFamily: 'Montserrat_300Light', fontSize: 13 }}
                    className="w-20 pb-0 text-center">
                        Explore
                </Text>

                <Text
                    style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 16 }}
                    className="pb-4 text-center w-20">
                        Redness 
                </Text>
            </View>
    
            </View>
        </TouchableOpacity>
        </Animated.View>

    </ScrollView>
    </View>
  )
}