import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUndoAlt} from '@fortawesome/free-solid-svg-icons';

export function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View>
      <Camera type={type} style={styles.camera} />
      <View style={styles.topLayer}>
        <View style={styles.dark}>
          <View style={styles.topWrapper}>
            {/*
            <FontAwesomeIcon icon={faArrowLeft} color="white" size={30}/>
            */}
          </View>
        </View>
        <View style={styles.focus} />
        <View style={styles.dark}>
          <TouchableOpacity style={styles.cameraButton} activeOpacity={0.5}>
            <View style={styles.innerCameraButton} />
          </TouchableOpacity>
          <View style={styles.bottomWrapper}>
            <TouchableOpacity
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
                );
              }}>
              <FontAwesomeIcon icon={faUndoAlt} color="white" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    height: '100%',
    aspectRatio: 3 / 4,
  },
  focus: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#0000',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#fff5',
  },
  dark: {
    flex: 1,
    backgroundColor: '#0005',
  },
  topLayer: {
    height: '100%',
    position: 'absolute',
  },
  cameraButton: {
    position: 'absolute',
    marginTop: 20,
    alignSelf: 'center',
    height: 90,
    borderRadius: 90,
    aspectRatio: 1,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: 'white',
  },
  innerCameraButton: {
    backgroundColor: '#fff5',
    height: '100%',
    borderRadius: 90,
    borderStyle: 'solid',
    borderWidth: 2,
  },
  bottomWrapper: {
    paddingHorizontal: 40,
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  topWrapper: {
    paddingHorizontal: 40,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  bottomWrapper: {
    paddingHorizontal: 40,
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  rotateButton: {
    alignSelf: 'flex-end',
  },
});
