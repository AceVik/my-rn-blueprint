import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});