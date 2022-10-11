/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './src/Navigations';
import 'react-native-gesture-handler';
import Styles from './styles';

const App = () => {

  return (
    <SafeAreaView style = {Styles.container} >
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
