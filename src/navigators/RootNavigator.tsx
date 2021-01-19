import React from 'react';
import { useSelector } from 'react-redux';
import { AuthNavigator } from './AuthNavigator';
import { AppNavigator } from './AppNavigator';
import { StateType, SessionState } from '../redux';

export const RootNavigator : React.FC = () => {
  const sessionState = useSelector<StateType, SessionState>(state => state.session);

  if (!sessionState.authenticated) {
    return (
      <AuthNavigator />
    );
  }

  return (
    <AppNavigator />
  );
}