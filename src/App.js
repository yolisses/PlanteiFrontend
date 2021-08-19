import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {HomeScreen} from './screens/HomeScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ExampleApp} from './screens/CameraScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'default'} hidden={true} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Camera"
          component={ExampleApp}
          options={{header: false}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
