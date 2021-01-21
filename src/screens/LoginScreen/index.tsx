import React from 'react';
import { View, StyleSheet } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '@app/navigators/AuthNavigator';
import {RouteProp} from '@react-navigation/native';
import { styled } from "@app/theme";

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

const rn_styles = StyleSheet.create({
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'red'
    }
});

const StyledBox = styled.View`
  width: 200px;
  height: 200px;
  background-color: yellow;
`;


const RNBox: React.FC = () => (
    <View style={rn_styles.box} />
);

export const LoginScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <StyledBox />
      <RNBox />
    </View>
  );
};