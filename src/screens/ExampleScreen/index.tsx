import React from 'react';
import { View, Text } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '@app/navigators/AuthNavigator';
import {RouteProp} from '@react-navigation/native';

interface Props {
    navigation: StackNavigationProp<AuthStackParamList, 'Example'>;
    route: RouteProp<AuthStackParamList, 'Example'>;
}

export const ExampleScreen: React.FC<Props> = ({ navigation, route }) => {

    navigation.navigate('Login');

  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
};