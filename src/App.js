import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {FooterNavigation} from './components/FooterNavigation';
import {HomeScreen} from './screens/HomeScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ExampleApp} from './screens/CameraScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={ExampleApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
