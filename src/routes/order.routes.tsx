import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PizzaSize from '../pages/orderFlow/PizzaSize';
import PizzaCrust from '../pages/orderFlow/PizzaCrust';
import PizzaToppings from '../pages/orderFlow/PizzaToppings';

const OrderStack = createStackNavigator()

const OrderRoutes = () => {
  return (
    <OrderStack.Navigator
      initialRouteName="PizzaSize"
      screenOptions={{ 
        headerShown: false,
        animationEnabled: true 
      }}
    >
      <OrderStack.Screen name="PizzaSize" component={PizzaSize} />
      <OrderStack.Screen name="PizzaCrust" component={PizzaCrust} />
      <OrderStack.Screen name="PizzaToppings" component={PizzaToppings} />
    </OrderStack.Navigator>
  )
}

export default OrderRoutes