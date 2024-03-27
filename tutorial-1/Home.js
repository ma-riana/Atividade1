import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, BackHandler, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.containerFundo} >
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/png.png')} />
        <Text style={styles.title} >LOLLAPALOOZA 2024</Text>
      </View>
      <View style={styles.button}>
        <Pressable style={styles.textoBotao} onPress={() => navigation.navigate('Atracoes')}> 
          <Text>Lista de Atrações</Text>
        </Pressable>      
      </View>
      <View style={styles.button}>
        <Pressable style={styles.textoBotao} onPress={() => navigation.navigate('Favoritos')}> 
          <Text>Favoritos</Text>
        </Pressable>      
      </View>
      <View style={styles.button}>
        <Pressable style={styles.textoBotao} onPress={() => navigation.navigate('Ingresso')}> 
          <Text>Ingresso</Text>
        </Pressable>      
      </View>
      <View style={styles.button}>
        <Pressable style={styles.textoBotao} title="Sair" onPress={() => BackHandler.exitApp() }> 
          <Text>Sair</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFundo: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  logo: {
    height: 160,
    width: 160,
  },
  title: {
    padding: 30,
    fontSize: 18,
  },
  button: {
    padding: 10,
    margin: 8,
    color: 'black',
    backgroundColor: "lightgreen",
    borderRadius: 15
  },
  textoBotao: {
    alignItems: 'center',
    color: 'black'
  }
});