import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PizzaSize from '../pages/orderFlow/PizzaSize';

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
    </OrderStack.Navigator>
  )
}

export default OrderRoutes