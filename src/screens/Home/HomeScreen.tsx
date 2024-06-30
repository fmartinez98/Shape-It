import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Section } from '../../ui';
import { HomeScreenProps } from '../../navigation/types';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Section title="Home">
          <Text style={styles.highlight}>Home Screen</Text> is meant to contain
          the principal information of the app
        </Section>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
