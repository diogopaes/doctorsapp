import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Schedules } from '../screens/Schedules';
import { CreateScheduling } from '../screens/CreateScheduling';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Schedules" component={Schedules} />
        <Stack.Screen name="CreateScheduling" component={CreateScheduling} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};