import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Section } from '../../ui';
import { LoginScreenProps } from '../../navigation/types';
import { useAppDispatch } from '../../hooks/useRedux';
import {
  updateLoginEmail,
  updateLoginPassword,
} from '../../store/slices/login/login';

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const dispatch = useAppDispatch();

  const loginWithNewUser = () => {
    dispatch(updateLoginEmail('test@user.com'));
    dispatch(updateLoginPassword('test@password'));
  };

  return (
    <View style={styles.container}>
      <Section title="Login">
        <Text style={styles.highlight}>Login Screen</Text> is meant to contain
        the principal auth information
      </Section>
      <Button color="black" title="Continue" onPress={loginWithNewUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default LoginScreen;
