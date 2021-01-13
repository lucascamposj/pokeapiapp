import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './theme';
import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000" translucent />
      <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
        <Routes />
      </View>
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
