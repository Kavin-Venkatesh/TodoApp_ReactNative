import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/LoginScreen';
import HomeScreen from './app/HomeScreen';

const Stack=createStackNavigator();

export default function App({navigation}){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="LoginScreen" options={{headerShown:false}}component={LoginScreen}/>
        <Stack.Screen name="Home" options={{headerShown:false,headerLeft:()=>(<HomeScreen onPress={()=>navigation.goBack()}/>)}}component={HomeScreen}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}