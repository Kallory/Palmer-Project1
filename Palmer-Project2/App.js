import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

  function HomeScreen() {
    return (
      <View style = {styles.container}>
        <Text>Hello, SER 423! My name is Kory</Text>
        <StatusBar style="auto" />
      </View>
    )
  }

  function AboutScreen() {
    return (
      <View style = {styles.container}>
        <Text>Thanks for using my app!</Text>
      </View>
    )
  }

  const Tab = createBottomTabNavigator();

  export default function App() {
    return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#787878',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
