import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Video from 'react-native-video';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const HomeScreen = props => {
  Navigation.popToRoot(props.componentId);
  return (
    <View style={{flex: 1}}>
      <Text>Home Screen</Text>
      <Video source={{uri: 'https://ia801602.us.archive.org/11/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4'}}   // Can be a URL or a local file.                                    // Store reference
        // onBuffer={this.onBuffer}                // Callback when remote video is buffering
        // onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo} />
    </View>
  );
};

export default HomeScreen;