import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileStackParamList } from './types';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        orientation: 'portrait',
      }}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen component={ProfileScreen} name="ProfileScreen" />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ProfileStack;
