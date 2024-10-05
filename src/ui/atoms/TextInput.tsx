import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export type TextInputProps = React.ComponentProps<typeof TextInput>;

type TextInputFieldProps = {
  secureTextEntry?: boolean;
  testID?: string;
  style?: ViewStyle;
} & TextInputProps;

const TextInputField = ({
  placeholder,
  value,
  secureTextEntry,
  testID,
  style,
  ...props
}: TextInputFieldProps & TextInputProps) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(!!secureTextEntry);

  const toggleSecureTextEntry = () => {
    setIsSecureTextEntry(current => !current);
  };

  return (
    <View style={style}>
      <View style={styles.inputContainer}>
        <TextInput
          testID={testID}
          style={styles.input}
          value={value}
          placeholder={placeholder}
          autoCapitalize="none"
          placeholderTextColor={'gray'}
          secureTextEntry={isSecureTextEntry}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            accessibilityRole="imagebutton"
            onPress={toggleSecureTextEntry}
            style={styles.toggle}>
            <Image style={styles.toggleIcon} accessibilityIgnoresInvertColors />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 12,
  },
  inputContainer: {
    minHeight: 60,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
  },
  toggle: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  toggleIcon: {
    height: 12,
  },
});

export default TextInputField;
