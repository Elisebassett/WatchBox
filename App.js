import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AdderScreen from './src/screens/AdderScreen';
import PickerScreen from './src/screens/PickerScreen';
import MovieAPI from './src/comps/MovieAPI';

const Stack = createNativeStackNavigator();

/* App */
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Adder" component={AdderScreen} />
        <Stack.Screen name="Picker" component={PickerScreen} />
        <Stack.Screen name="MovieAPI" component={MovieAPI} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
