import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function CameraSnapButton({onPress}) {
  return (
    <TouchableOpacity
      style={styles.cameraButton}
      activeOpacity={0.5}
      onPress={onPress}>
      <View style={styles.innerCameraButton} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cameraButton: {
    position: 'absolute',
    zIndex: 10,
    alignSelf: 'center',
    height: 90,
    borderRadius: 90,
    aspectRatio: 1,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: 'white',
    bottom: (height - width) / 4 - 45,
  },
  innerCameraButton: {
    backgroundColor: '#fff5',
    height: '100%',
    borderRadius: 90,
    borderStyle: 'solid',
    borderWidth: 2,
  },
});
