import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LoginScreen from './src/screens/Login.screen';

const HomeScreen = props => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'Login.screen',
            },
          });
        }}
        title={'Login'}
      />
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Login.screen', () => LoginScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
