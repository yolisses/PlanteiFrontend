import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {HomeScreen} from './screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
