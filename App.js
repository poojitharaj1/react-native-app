import React from 'react';
import { Text, Image, ScrollView, StyleSheet } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";
import MoviesInfo from './MoviesInfo';
import './App.scss'
const Stack = createStackNavigator();
const MyStack =() =>{
return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen 
       options={{
        title: "Home Screen",   headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#959595',  
        },
        headerTintColor: '#fff',
      }}
       name="Home Screen" component= {HomeScreen}
    />
       <Stack.Screen
        options={{
          title: "Details Screen",   headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#959595', 
          },
          headerTintColor: '#fff',
        }}
    name="Details Screen" component= {MoviesInfo}
    />
  </Stack.Navigator>
</NavigationContainer>
);
};
export default MyStack;
