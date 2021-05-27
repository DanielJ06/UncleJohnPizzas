import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PizzaInfo from '../pages/orderFlow/PizzaInfo';

const OrderStack = createStackNavigator()

const OrderRoutes = () => {
  return (
    <OrderStack.Navigator
      initialRouteName="PizzaInfo"
      screenOptions={{ 
        headerShown: false,
        animationEnabled: true 
      }}
    >
      <OrderStack.Screen name="PizzaInfo" component={PizzaInfo} />
    </OrderStack.Navigator>
  )
}

export default OrderRoutes