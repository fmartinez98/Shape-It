import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Section } from '../../ui';
import { ProfileScreenProps } from '../../navigation/types';
import { useAppDispatch } from '../../hooks/useRedux';
import { clearLogin } from '../../store/slices/login/login';
import { strings } from '../../localization/en';
import PressableButton from '../../ui/molecules/PressableButton';

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(clearLogin());
  };

  return (
    <View style={styles.container}>
      <Section title={strings.profile.title}>
        {strings.profile.subtitle}
      </Section>
      <PressableButton
        title={strings.profile.button}
        onPress={logout}
        testID="logout-button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default ProfileScreen;
