import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Section } from '../../ui';
import { ProfileScreenProps } from '../../navigation/types';
import { useAppDispatch } from '../../hooks/useRedux';
import { clearLogin } from '../../store/slices/login/login';
import { strings } from '../../localization/en';
import PressableButton from '../../ui/molecules/PressableButton';
import Container from '../../ui/atoms/Container';

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(clearLogin());
  };

  return (
    <Container>
      <View style={styles.content}>
        <Section title={strings.profile.title}>
          {strings.profile.subtitle}
        </Section>
      </View>
      <PressableButton
        title={strings.profile.button}
        onPress={logout}
        testID="logout-button"
        style={styles.button}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  button: {
    marginBottom: 12,
  },
});

export default ProfileScreen;
