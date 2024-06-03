import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs, where, query, arrayContains } from 'firebase/firestore'; // Importeer de functies om de database te benaderen
import { db } from '../config/firebase';

export default function Topics() {
  const navigation = useNavigation();
  const [topics, setTopics] = useState([]);
  const [userPreferences, setUserPreferences] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const topicsCollectionRef = collection(db, 'topics');
        const querySnapshot = await getDocs(topicsCollectionRef);
        const fetchedTopics = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return data;
        });
        setTopics(fetchedTopics);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    const fetchUserPreferences = async () => {
      try {
        const userPreferencesCollectionRef = collection(db, 'userPreferences');
        const querySnapshot = await getDocs(userPreferencesCollectionRef);
        if (!querySnapshot.empty) {
          const userPreferencesData = querySnapshot.docs[0].data();
          setUserPreferences(userPreferencesData);
        }
      } catch (error) {
        console.error('Error fetching user preferences:', error);
      }
    };

    fetchTopics();
    fetchUserPreferences();
  }, []);

  const matchesUserPreferences = (topic) => {
    if (!userPreferences) return false;

    const matchesSkinType = topic.topic === userPreferences.skinType;
    const matchesSkinConcerns = userPreferences.skinConcerns.some(concern => concern === topic.topic);

    return matchesSkinType || matchesSkinConcerns;
  };

  return (
    <View className="flex-row">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="py-5 ml-6">
        {topics.length > 0 && topics.filter(matchesUserPreferences).map((topic, index) => (
          <Animated.View key={topic.topic} entering={FadeInDown.duration(1000).springify()}>
            <TouchableOpacity onPress={() => navigation.navigate('CategorySearch', { topicData: topic })}>
              <View className="bg-white border border-gray-200 mr-3 px-4 rounded-xl items-center shadow-sm">
                <Image source={{ uri: topic.topicImage }} className="w-12 h-[60] -mt-4 mb-2" /> 
                <View className="flex-wrap">
                  <Text style={{ fontFamily: 'Montserrat_300Light' }} className="w-20 pb-0 text-center text-[10px]">Explore</Text>
                  <Text style={{ fontFamily: 'Montserrat_600SemiBold'}} className="pb-4 text-center text-sm w-[85]">{topic.topicName}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );  
}

