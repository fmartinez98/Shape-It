import React from 'react';
import { ScrollView, View } from 'react-native';
import { Section } from '../../ui';
import { HomeScreenProps } from '../../navigation/types';
import { strings } from '../../localization/en';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Section title={strings.home.title}>{strings.home.subtitle}</Section>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
