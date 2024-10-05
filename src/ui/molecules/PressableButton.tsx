import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

export type ButtonProps = React.ComponentProps<typeof TouchableOpacity>;

type PressableButtonProps = {
  title: string;
  testID: string;
  onPress: () => void;
  style?: ViewStyle;
} & ButtonProps;

const PressableButton = ({
  title,
  onPress,
  testID,
  style,
}: PressableButtonProps) => (
  <TouchableOpacity
    style={[style, styles.button]}
    onPress={onPress}
    testID={testID}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PressableButton;
