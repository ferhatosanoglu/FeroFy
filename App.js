import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Suspense } from 'react';
import Navigation from './src/navigation/navigation';

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <Suspense fallback={<></>}>
        <Navigation />
      </Suspense>
    </View>
  );
};



export default App;
