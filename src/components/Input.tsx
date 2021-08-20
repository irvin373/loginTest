import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(newText: string) => {
          onChangeText(newText);
        }}
        value={text}
        keyboardType={'email-address'}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={'useless placeholder'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;