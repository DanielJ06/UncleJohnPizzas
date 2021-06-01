/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/style-prop-object */
/* eslint-disable import/extensions */
import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/order.routes';
import { PizzaDetails } from './src/context/PizzaContext';
import { Colors } from './src/utils/styleGuide';
import Toolbar from './src/components/ToolBar';

const App = () => (
	<NavigationContainer>
		<StatusBar style="dark" backgroundColor={Colors.lightGrey} />
		<View
			style={{
				height: Constants.statusBarHeight,
				width: '100%',
			}}
		/>
		<Toolbar />
		<PizzaDetails>
			<Routes />
		</PizzaDetails>
	</NavigationContainer>
);

export default App;
