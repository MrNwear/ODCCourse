import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Indicator } from './Screens/indicator';
import { TwitterSignIn } from './Screens/twitterLogin';

class App extends React.Component {
  render() {
    return (
      <TwitterSignIn />
    );
  }
}
export default App;