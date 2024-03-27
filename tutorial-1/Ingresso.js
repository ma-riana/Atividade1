import React, {useState, useEffect} from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet, Linking } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function AtracoesListScreen({ navigation }) {

  return (
    <View style={styles.fundo}> 
      <Card style={styles.container}>
        <Card.Cover style={styles.imagem} source={require('./assets/lolla.png')} />
        <Card.Title
          title="Autódromo de Interlagos - SP"
          subtitle="22, 23 e 24 de março"
        />
        <Card.Actions>
            <TouchableOpacity>            
                <View style={styles.botao} >
                    <Button style={styles.botao} color='white' onPress={() => Linking.openURL('https://www.ticketmaster.com.br/event/lollapaloozabr-bradesco') }>
                      Comprar Ingresso
                    </Button>
                </View>
            </TouchableOpacity>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  container: {
   justifyContent: 'center',
   alignItems:'center',
   padding: 15,
   margin: 10
  },
  botao: {
    fontSize: 18,
    backgroundColor: 'gray',
    marginRight: 4,
    borderRadius: 5,
  },
  imagem: {
    borderRadius: 5,
    width: 350
  }
})