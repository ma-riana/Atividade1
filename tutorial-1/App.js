import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AtracoesListScreen from './Atracoes';
import InfoDetalhadasScreen from './InfoDetalhadas';
import FavoritosScreen from './Favoritos';
import HomeScreen from './Home';
import IngressoScreen from './Ingresso'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Atracoes" component={AtracoesListScreen} />
            <Stack.Screen name="Favoritos" component={FavoritosScreen} />
            <Stack.Screen name="InfoDetalhadas" component={InfoDetalhadasScreen} />
            <Stack.Screen name="Ingresso" component={IngressoScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}