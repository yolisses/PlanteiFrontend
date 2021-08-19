import React from 'react';
import {ScrollView, View} from 'react-native';
import {FooterNavigation} from '../components/FooterNavigation';
import {Post} from '../components/Post';

export function HomeScreen() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3].map(item => (
          <Post key={item} />
        ))}
      </ScrollView>
      <FooterNavigation />
    </View>
  );
}
