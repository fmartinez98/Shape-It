import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';
import LoginScreen from '../screens/Login/LoginScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        orientation: 'portrait',
      }}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen component={LoginScreen} name="LoginScreen" />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
