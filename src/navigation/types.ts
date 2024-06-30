import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppParamList = RootAppNavigation & AuthStackParamList;

/**
 * Global App Navigation
 * - Screens defined below are accessible from any nested Screen/Stack
 */
export type RootAppNavigation = {
  Landing: NavigatorScreenParams<LandingTabsParamList>;
};

/**
 * Auth Stack Navigation
 */
export type AuthStackParamList = {
  LoginScreen: undefined;
};

type AuthStackNavigatorScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type LoginScreenProps = AuthStackNavigatorScreenProps<'LoginScreen'>;

/**
 * Landing Stack Navigation
 */

export type LandingTabsParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

type LandingScreenProps = NativeStackScreenProps<RootAppNavigation, 'Landing'>;

type LandingTab<T extends keyof LandingTabsParamList> = CompositeScreenProps<
  BottomTabScreenProps<LandingTabsParamList, T>,
  LandingScreenProps
>;

export type HomeTabProps = LandingTab<'HomeTab'>;
export type OneUpsTabProps = LandingTab<'ProfileTab'>;

/**
 * Home Stack Navigation
 */
export type HomeStackParamList = {
  HomeScreen: undefined;
};

type HomeStackNavigatorScreenProps<T extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, T>;

export type HomeScreenProps = HomeStackNavigatorScreenProps<'HomeScreen'>;

/**
 * Profile Stack Navigation
 */
export type ProfileStackParamList = {
  ProfileScreen: undefined;
};

type ProfileStackNavigatorScreenProps<T extends keyof ProfileStackParamList> =
  NativeStackScreenProps<ProfileStackParamList, T>;

export type ProfileScreenProps =
  ProfileStackNavigatorScreenProps<'ProfileScreen'>;
