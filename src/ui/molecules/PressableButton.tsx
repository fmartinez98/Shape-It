import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export type ButtonProps = React.ComponentProps<typeof TouchableOpacity>;

type PressableButtonProps = {
  title: string;
  testID: string;
  onPress: () => void;
} & ButtonProps;

const PressableButton = ({ title, onPress, testID }: PressableButtonProps) => (
  <TouchableOpacity style={styles.button} onPress={onPress} testID={testID}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PressableButton;
