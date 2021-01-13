import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AllPokemons from '../pages/AllPokemons';
import Pokemon from '../pages/Pokemon';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#f8f8f8' },
    }}
  >
    <App.Screen name="AllPokemons" component={AllPokemons} />
    <App.Screen name="Pokemon" component={Pokemon} />
  </App.Navigator>
);

export default AppRoutes;
