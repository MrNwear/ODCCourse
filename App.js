import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Indicator } from './Components/indicator';
import { TwitterSignIn } from './Components/twitterLogin';

class App extends React.Component {
  render() {
    return (
      <TwitterSignIn />
    );
  }
}
export default App;