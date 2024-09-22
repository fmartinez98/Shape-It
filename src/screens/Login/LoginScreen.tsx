import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Section } from '../../ui';
import { LoginScreenProps } from '../../navigation/types';
import { useAppDispatch } from '../../hooks/useRedux';
import {
  updateLoginEmail,
  updateLoginPassword,
} from '../../store/slices/login/login';
import TextInputField from '../../ui/atoms/TextInput';
import { strings } from '../../localization/en';
import PressableButton from '../../ui/molecules/PressableButton';

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginWithNewUser = () => {
    dispatch(updateLoginEmail('test@user.com'));
    dispatch(updateLoginPassword('test@password'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Section title={strings.login.title}>{strings.login.subtitle}</Section>
        <TextInputField
          value={username}
          placeholder={strings.login.username}
          onChangeText={setUsername}
          style={styles.textInput}
        />
        <TextInputField
          value={password}
          placeholder={strings.login.password}
          onChangeText={setPassword}
          style={styles.textInput}
        />
      </View>
      <PressableButton
        title={strings.login.button}
        testID="login-button"
        onPress={loginWithNewUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  textInput: {
    marginVertical: 10,
    paddingHorizontal: 24,
  },
});

export default LoginScreen;
