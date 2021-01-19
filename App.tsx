import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@redux/index';

import { CustomThemeProvider } from '@providers/CustomThemeProvider';
import { NavigationProvider } from '@providers/NavigationProvider';

export default function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <NavigationProvider />
      </CustomThemeProvider>
    </Provider>
  );
}