import React from 'react';
import {View, Text} from 'react-native';
import UselessTextInput from '../components/Input';
// import {Navigation} from 'react-native-navigation';

const LoginScreen = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <Text>Login Screen</Text>
      <UselessTextInput />
    </View>
  );
};

LoginScreen.options = {
  topBar: {
    title: {
      text: 'Login',
      color: 'white',
    },
    background: {
      color: '#9d089F',
    },
  },
};

export default LoginScreen;
