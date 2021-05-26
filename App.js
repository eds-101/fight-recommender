import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EventsScreen from './screens/Events'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Events"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

