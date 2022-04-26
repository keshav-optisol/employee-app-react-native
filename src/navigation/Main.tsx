import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AddEmployee,AddEmployeeScreen,HomeScreen } from '../screens';

export type MainStackParams = {
  AddEmployee: undefined;
  AddEmployeeScreen: undefined;
  HomeScreen:{data:any};
};

const MainStack = createStackNavigator<MainStackParams>();

export const Main = () => (
  <MainStack.Navigator screenOptions={{ headerShown: false }}>
    <MainStack.Screen name="AddEmployee" component={AddEmployee} />
    <MainStack.Screen name="AddEmployeeScreen" component={AddEmployeeScreen} />
    <MainStack.Screen name="HomeScreen" component={HomeScreen} />

  </MainStack.Navigator>
);
