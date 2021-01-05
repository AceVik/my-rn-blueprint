import 'react-native-gesture-handler';

import React, { createRef, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { store } from './src/redux';
import { NavigationAction, initNavigation } from './src/redux/actions';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { RootNavigator } from './src/navigators/RootNavigator';


function NavigationProvider() {

  const dispatch = useDispatch<Dispatch<NavigationAction>>();
  const navigationRef = createRef<NavigationContainerRef>();

  useEffect(() => {
    if (navigationRef.current) {
      dispatch(initNavigation(navigationRef.current));
    }
  }, [ navigationRef, navigationRef.current ]);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationProvider />
    </Provider>
  );
}