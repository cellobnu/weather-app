import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WeatherScreen from '../screens/Weather';

const Stack = createStackNavigator();

export default function WeatherStack() {
  return (
    <Stack.Navigator initialRouteName="Weather">
      <Stack.Screen
        name="Weather"
        component={WeatherScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
