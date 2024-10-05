import React from 'react';
import { Section } from '../../ui';
import { HomeScreenProps } from '../../navigation/types';
import { strings } from '../../localization/en';
import Container from '../../ui/atoms/Container';
import { StyleSheet, Text } from 'react-native';
import { selectLoginEmail } from '../../store/selectors/login';
import { useAppSelector } from '../../hooks/useRedux';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const selectUserEmail = useAppSelector(selectLoginEmail);

  return (
    <Container isScrollable>
      <Section title={strings.home.title}>{strings.home.subtitle}</Section>
      <Text style={styles.text}>{`Email: ${selectUserEmail}`}</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default HomeScreen;
