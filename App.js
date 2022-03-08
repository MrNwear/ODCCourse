import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Indicator } from './Screens/indicator';
import { TwitterSignIn } from './Screens/twitterLogin';
import { D3Splash } from './Screens/Day3Splash';
import { Test } from './Screens/splash';
import { ListViewComponent } from './Screens/ListView';

class App extends React.Component {
  render() {
    return (
      <ListViewComponent />
    );
  }
}
export default App;