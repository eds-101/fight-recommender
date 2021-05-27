import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EventsScreen from './screens/Events'
import FunFightersScreen from './screens/FunFighters'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Fun Fighters"
        screenOptions={{ gestureEnabled: false }}
      >
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        /> */}
        <Stack.Screen
          name="Events"
          component={EventsScreen}
        />
        <Stack.Screen
          name="Fun Fighters"
          component={FunFightersScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

