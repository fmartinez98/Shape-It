import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingStack from './LandingStack';
import { RootAppNavigation } from './types';

const Stack = createNativeStackNavigator<RootAppNavigation>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        orientation: 'portrait',
      }}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen component={LandingStack} name="Landing" />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
