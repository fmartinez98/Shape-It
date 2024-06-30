import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import { LandingTabsParamList } from './types';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator<LandingTabsParamList>();

const LandingStack: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen
        options={{ tabBarTestID: 'home-tab', tabBarLabel: 'Home' }}
        name="HomeTab"
        component={HomeStack}
      />
      <Tab.Screen
        options={{ tabBarTestID: 'profile-tab', tabBarLabel: 'Profile' }}
        name="ProfileTab"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default LandingStack;
