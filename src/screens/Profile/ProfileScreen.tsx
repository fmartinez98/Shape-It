import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Section } from '../../ui';
import { ProfileScreenProps } from '../../navigation/types';
import { useAppDispatch } from '../../hooks/useRedux';
import { clearLogin } from '../../store/slices/login/login';

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(clearLogin());
  };

  return (
    <View style={styles.container}>
      <Section title="Profile">
        <Text style={styles.highlight}>Profile Screen</Text> is meant to contain
        the principal information of the user
      </Section>
      <Button color="black" title="Logout" onPress={logout} />
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

export default ProfileScreen;
