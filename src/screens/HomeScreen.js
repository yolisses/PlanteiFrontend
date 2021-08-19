import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Post} from '../components/Post';

export function HomeScreen() {
  return (
    <ScrollView>
      {[1, 2, 3].map(index => (
        <Post key={index} />
      ))}
    </ScrollView>
  );
}
