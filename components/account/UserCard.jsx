import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../config/firebase'; 
import UserCardComponent from './UserCardComponent';

export default function UserCard() {
    const navigation = useNavigation();
  
    const [userPreferences, setUserPreferences] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);
  
    //get Auth of current user
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          setUserId(null);
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    //Fetch the user's preferences
    useEffect(() => {
      const fetchUserPreferences = async () => {
        if (!userId) return;
  
        const userPrefRef = doc(db, 'userPreferences', userId);
  
        try {
          const docSnap = await getDoc(userPrefRef);
          if (docSnap.exists()) {
            setUserPreferences(docSnap.data());
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user preferences:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUserPreferences();
    }, [userId]);

    if (loading) {
        return (
          <View className="flex-1 justify-center items-center">
            <Text>Loading...</Text>
          </View>
        );
    }

  return (
    <View className="flex-1 pt-14 bg-white">
        {/* Backbutton */}
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                className="bg-primary-dark p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                <ArrowLeftIcon size="20" color="black"></ArrowLeftIcon>
            </TouchableOpacity>
        </View>

        <View className="justify-center items-center pt-6">
            {/* Title */}
            <Text style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 25 }}
            className=" text-center mb-8"
            >Your Skin Type Card
            </Text>
        </View>

        {/* UserCardComponent */}
        <UserCardComponent />

        <View className="mx-auto">
            <TouchableOpacity  onPress={() => navigation.navigate('UserSkinType')} className="mt-5 border border-gray-200 rounded-xl py-2 px-2 flex-row">
              <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: 13 }}
              className="text-gray-500"
              >Change Skin Type & Concerns</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}