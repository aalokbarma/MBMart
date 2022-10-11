import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LandingPageOne from '../Screens/LandingPageOne';
import LandingPageTwo from '../Screens/LandingPageTwo';
import LandingPageThree from '../Screens/LandingPageThree';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='LandingPageOne' component={LandingPageOne} />
        <Stack.Screen name='LandingPageTwo' component={LandingPageTwo} />
        <Stack.Screen name='LandingPageThree' component={LandingPageThree} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;