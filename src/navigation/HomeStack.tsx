import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { HomeStackParamList } from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        orientation: 'portrait',
      }}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen component={HomeScreen} name="HomeScreen" />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
