/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/style-prop-object */
/* eslint-disable import/extensions */
import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';
import Routes from './src/routes/order.routes';
import { PizzaDetails } from './src/context/PizzaContext';
import Theme from './src/utils/styleGuide';

const App = () => (
	<ThemeProvider theme={Theme}>
		<NavigationContainer>
			<StatusBar style="dark" backgroundColor="#F4F3F9" />
			<View
				style={{
					height: Constants.statusBarHeight,
					width: '100%',
				}}
			/>
			<PizzaDetails>
				<Routes />
			</PizzaDetails>
		</NavigationContainer>
	</ThemeProvider>
);

export default App;
