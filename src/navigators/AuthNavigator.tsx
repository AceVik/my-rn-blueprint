import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { ExampleScreen } from '../screens/ExampleScreen';

export type AuthStackParamList = {
  Login: undefined | {
      test?: string;
  };
  Example: {
      name: string;
      age: number;
      args?: { [key: string]: unknown; };
  }
};

const AuthStack = createStackNavigator<AuthStackParamList>();


export const AuthNavigator : React.FC = () => {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Example" component={ExampleScreen} />
    </AuthStack.Navigator>
  );
}