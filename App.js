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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Register from './src/screens/register'
import Login from './src/screens/login'
import Splash from './src/screens/splash';
import Onboard from './src/screens/onboard';
import Main from './src/screens/main';
import { NativeBaseProvider } from 'native-base';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <Main/> 
  );
};

export default App;
