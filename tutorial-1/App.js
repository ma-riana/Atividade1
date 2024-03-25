import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactListScreen from './ContactList';
import ContactDetailsScreen from './ContactDetails';
import HomeScreen from './Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ContactList" component={ContactListScreen} />
            <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}