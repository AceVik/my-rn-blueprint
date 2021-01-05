import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';

type AppStackParamList = {
  Home: undefined;
};

const AppStack = createStackNavigator<AppStackParamList>();

export const AppNavigator : React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
  );
}