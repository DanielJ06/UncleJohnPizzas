import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes/order.routes';
import { PizzaDetails } from './src/context/PizzaContext';
import { Colors } from './src/utils/styleGuide';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor={Colors.lightGrey} />
      <View 
        style={{ 
          height: Constants.statusBarHeight, 
          width: '100%' 
        }} 
      />
      <PizzaDetails>
        <Routes />
      </PizzaDetails>
    </NavigationContainer>
  );
}