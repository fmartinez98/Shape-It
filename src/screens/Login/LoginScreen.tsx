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
import Container from '../../ui/atoms/Container';

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginWithNewUser = () => {
    dispatch(updateLoginEmail(email));
    dispatch(updateLoginPassword(password));
  };

  return (
    <Container>
      <View style={styles.content}>
        <Section title={strings.login.title}>{strings.login.subtitle}</Section>
        <TextInputField
          value={email}
          placeholder={strings.login.email}
          onChangeText={setEmail}
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
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  textInput: {
    marginVertical: 10,
  },
});

export default LoginScreen;
