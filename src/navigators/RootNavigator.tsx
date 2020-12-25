import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={'a'} />
    </RootStack.Navigator>
  );
}