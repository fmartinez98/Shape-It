import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from './navigation/Router';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { AppParamList } from './navigation/types';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

export const store = setupStore();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigationRef = useNavigationContainerRef<AppParamList>();

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const gestureHandlerRootViewStyle: StyleProp<ViewStyle> = { flex: 1 };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <GestureHandlerRootView style={gestureHandlerRootViewStyle}>
          <NavigationContainer ref={navigationRef}>
            <Router />
          </NavigationContainer>
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
