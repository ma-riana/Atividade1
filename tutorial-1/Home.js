import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, BackHandler, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.containerFundo} >
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/lollaHome.png')} />
      </View>
      <View style={styles.button}>
        <Pressable style={styles.textoBotao} onPress={() => navigation.navigate('Atracoes')}> 
          <Text style={styles.texto}>Lista de Atrações</Text>
        </Pressable>      
      </View>
      <View style={styles.button}>
        <Pressable style={styles.textoBotao} onPress={() => navigation.navigate('Favoritos')}> 
          <Text style={styles.texto}>Favoritos</Text>
        </Pressable>      
      </View>
      <View style={styles.button}>
        <Pressable style={styles.textoBotao} onPress={() => navigation.navigate('Ingresso')}> 
          <Text style={styles.texto}>Ingresso</Text>
        </Pressable>      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFundo: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  logo: {
    height: 250,
    width: 250,
  },
  title: {
    padding: 30,
    fontSize: 18,
  },
  button: {
    padding: 10,
    margin: 8,
    color: 'black',
    backgroundColor: "#fc4133",
    borderRadius: 15,
    height: 44,
    width: 300
  },
  textoBotao: {
    alignItems: 'center'
  },
  texto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});