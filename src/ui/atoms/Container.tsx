import React, { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';

type ContainerProps = PropsWithChildren<{
  isScrollable?: boolean;
  style?: ViewStyle;
  testID?: string;
}>;

const Container = ({
  isScrollable = false,
  children,
  style,
  testID,
}: ContainerProps) => {
  if (isScrollable) {
    return (
      <ScrollView
        style={[style, styles.scrollableContainer]}
        contentInsetAdjustmentBehavior="automatic"
        testID={testID}>
        {children}
      </ScrollView>
    );
  }

  return (
    <View style={[style, styles.container]} testID={testID}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollableContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
});

export default Container;
