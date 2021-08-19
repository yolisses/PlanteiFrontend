import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export function IconButton({icon, text}) {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={icon} color="#444" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderStyle: 'solid',
    // borderWidth: 2,
    borderRadius: 10,
    margin: 4,
    flex: 1,
  },
  text: {
    color: '#444',
    paddingLeft: 4,
    fontSize: 18,
  },
});
