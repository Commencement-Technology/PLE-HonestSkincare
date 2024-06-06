import { View, Text, TouchableOpacity, ScrollView, StatusBar, ImageBackground, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import UserCardComponent from '../components/account/UserCardComponent'

export default function Profile() {

  const navigation = useNavigation()

  return (
    <ScrollView>
      <StatusBar/>
    <View className="flex-[1] white">

      {/* INTRO */}
      <ImageBackground source={require('./../assets/images/bg7.png')} resizeMode="cover" imageStyle= {{opacity:0.3}}>

        <View className="mt-20 mb-24">

          {/* INTRO: Welcome user + text */}
          <View className="-mt-3 mb-0 px-10 flex">
            <Text className="mb-1" style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 25 }}>Account</Text>
          </View>

          <View>
            <Text></Text>
          </View>
   
        </View>

      </ImageBackground>

      <View className="bg-white outline outline-offset-6 h-full py-5 -mt-5 rounded-t-[35px] h-screen">

        <View className="-mt-28">  
          <UserCardComponent />
        </View>

        <View>
          {/* Button */}
          <TouchableOpacity className="bg-white border border-gray-100 mx-8 py-4 px-5 shadow-sm rounded-xl flex-row justify-between">
            
            <View className="flex-row">
              <Image className="w-5 h-5 mr-4" 
                                  source={require('./../assets/icons/edit.png')} />

              <Text style={{ fontFamily: 'Montserrat_500Medium' }}
              className="mt-0.5">
                Edit Profile
              </Text>
            </View>

            <Image className="w-5 h-5" 
                                  source={require('./../assets/icons/next.png')} />

          </TouchableOpacity>

          {/* Button */}
          <TouchableOpacity className="bg-white border border-gray-100 mx-8 py-4 px-5 shadow-sm rounded-xl flex-row justify-between mt-5">
            
            <View className="flex-row">
              <Image className="w-5 h-6 mr-4 -mt-1" 
                                  source={require('./../assets/icons/face.png')} />

              <Text style={{ fontFamily: 'Montserrat_500Medium' }}
              className="mt-0.5">
                Change Skin Type & Concerns
              </Text>
            </View>

            <Image className="w-5 h-5" 
                                  source={require('./../assets/icons/next.png')} />

          </TouchableOpacity>

          {/* Button */}
          <TouchableOpacity className="bg-white border border-gray-100 mx-8 py-4 px-5 shadow-sm rounded-xl flex-row justify-between mt-5">
            
            <View className="flex-row">
              <Image className="w-5 h-5 mr-4" 
                                  source={require('./../assets/icons/united.png')} />

              <Text style={{ fontFamily: 'Montserrat_500Medium' }}
              className="mt-0.5">
                Community Guidelines
              </Text>
            </View>

            <Image className="w-5 h-5" 
                                  source={require('./../assets/icons/next.png')} />

          </TouchableOpacity>
        </View>

        <View className="flex justify-center items-center mt-14">
          <Image className="w-16 h-6 mb-2" 
                                source={require('./../assets/images/logo-plain-nobg.png')} />

          <Text style={{ fontFamily: 'Montserrat_500Medium' }}
          className="mb-2 underline text-dark-pink">Contact us</Text>
          
  
        </View>
      
      </View>

    </View>
  </ScrollView>
  )
}