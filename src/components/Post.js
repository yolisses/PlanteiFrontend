import {faSeedling} from '@fortawesome/free-solid-svg-icons';
import {faComment} from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';

import {IconButton} from './IconButton';

const {width} = Dimensions.get('window');

export function Post() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cacto</Text>
      <Image source={require('../../mock/plant.jpg')} style={styles.image} />
      <View style={styles.buttonWrapper}>
        <IconButton icon={faSeedling} text="Pedir uma muda" />
        <IconButton icon={faComment} text="Deixar comentário" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width,
    height: width,
    backgroundColor: '#444',
  },
  title: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 22,
  },
  container: {
    marginBottom: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
});
