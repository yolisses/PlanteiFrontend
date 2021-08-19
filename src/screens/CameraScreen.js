import {faArrowLeft, faUndoAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {CameraSnapButton} from '../components/CameraSnapButton';

const optionButtonSize = 25;

export function ExampleApp() {
  const {navigate} = useNavigation();
  const [type, setType] = useState(RNCamera.Constants.Type.front);

  const turnCameraDirection = () => {
    setType(
      type === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  };

  return (
    <View style={styles.container}>
      <RNCamera style={styles.preview} type={type} />

      <View style={styles.topLayer}>
        <View style={styles.optionsWrapper}>
          <TouchableOpacity
            onPress={() => navigate('Home')}
            style={styles.option}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              color="white"
              size={optionButtonSize}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.focus} />
        <CameraSnapButton />

        <View style={[styles.optionsWrapper, {flexDirection: 'row-reverse'}]}>
          <TouchableOpacity onPress={turnCameraDirection} style={styles.option}>
            <FontAwesomeIcon
              icon={faUndoAlt}
              color="white"
              size={optionButtonSize}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const optionButtonPadding = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
  topLayer: {
    height: '100%',
    position: 'absolute',
  },
  optionsWrapper: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0005',
    alignItems: 'center',
  },
  option: {
    marginHorizontal: optionButtonSize,
    padding: optionButtonPadding,
  },
});
