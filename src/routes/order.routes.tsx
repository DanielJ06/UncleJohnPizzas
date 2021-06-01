/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PizzaSize from '../pages/orderFlow/PizzaSize';
import PizzaCrust from '../pages/orderFlow/PizzaCrust';
import PizzaToppings from '../pages/orderFlow/PizzaToppings';
import CheckPizza from '../pages/orderFlow/CheckPizza';
import Checkout from '../pages/orderFlow/Checkout';

const OrderStack = createStackNavigator();

const OrderRoutes = () => (
	<OrderStack.Navigator
		initialRouteName="PizzaSize"
		screenOptions={{
			headerShown: false,
			animationEnabled: true,
		}}
	>
		<OrderStack.Screen name="PizzaSize" component={PizzaSize} />
		<OrderStack.Screen name="PizzaCrust" component={PizzaCrust} />
		<OrderStack.Screen name="PizzaToppings" component={PizzaToppings} />
		<OrderStack.Screen name="CheckPizza" component={CheckPizza} />
		<OrderStack.Screen name="Checkout" component={Checkout} />
	</OrderStack.Navigator>
);

export default OrderRoutes;
