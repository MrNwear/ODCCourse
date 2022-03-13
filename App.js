import React from 'react';
import {
  Text,
  View,
  StatusBar, Button
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Indicator } from './Screens/indicator';
import { fetches } from './Screens/';
import { FetchAPIScreen } from './Screens/fetchingAPI';
import { Tab } from './Screens/tabPackage';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
const Stack = createNativeStackNavigator();

class App extends React.Component {

  render() {
    return (<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Indicator} />
        <Stack.Screen name="Fetch" component={FetchAPIScreen} />
      </Stack.Navigator>
    </NavigationContainer>);
  }
}

export default App;