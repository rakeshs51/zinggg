import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import AboutUsScreen from './screens/AboutUsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicyScreen} options={{
    title: 'Our Privacy Policy',  // Set a custom title
    headerStyle: {
      backgroundColor: '#FFD700',  // Set the same yellow color as your screen
    },
    headerTintColor: '#000',  // Set the color of the header text
    headerTitleStyle: {
      fontWeight: 'bold',  // Optional: change font style
    }
  }} />
        <Stack.Screen name="About Us" component={AboutUsScreen} options={{
    title: 'About Us',  // Set a custom title
    headerStyle: {
      backgroundColor: '#FFD700',  // Set the same yellow color as your screen
    },
    headerTintColor: '#000',  // Set the color of the header text
    headerTitleStyle: {
      fontWeight: 'bold',  // Optional: change font style
    }
  }} />
      </Stack.Navigator>
  );
}