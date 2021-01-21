import React from 'react';
import { View, Text } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '@app/navigators/AuthNavigator';
import {RouteProp} from '@react-navigation/native';

interface Props {
    navigation: StackNavigationProp<AuthStackParamList, 'Login'>;
    route: RouteProp<AuthStackParamList, 'Login'>;
}

// Combine multiple navigator props example
/*

import {CompositeNavigationProp} from '@react-navigation/native';

--

navigation: CompositeNavigationProp<
    StackNavigationProp<AppNavigatorParamList, 'Login'>,
    StackNavigationProp<RequestNavigatorParamList, 'Login'>
  >;
*/

export const LoginScreen: React.FC<Props> = ({ navigation, route }) => {

  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
};