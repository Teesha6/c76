import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {CreateStackNavigator} from '@react-navigation/stack'
import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

const stack = CreateStackNavigator ();
export default function App() {
  return (
    <NavigationContainer>
      <stack.navigator initialRouteName = "home" screenOptions = {{headersShown: foils}}>
        <Stack.Screen name = "home" component = {homeScreen}/>
        <Stack.Screen name = "ISSLocation" component = {IssLocationScreen}/>
        <Stack.Screen name = "Meteors" component = {MeteorScreen}/>
        </stack.navigator>
        </NavigationContainer>
  );
}
export default App 
