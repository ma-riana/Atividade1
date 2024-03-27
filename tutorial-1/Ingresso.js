import React, {useState, useEffect} from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet, Linking } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

export default function AtracoesListScreen({ navigation }) {

  return (
    <View style={styles.container}>
        <Card style={styles.container}>
        <Card.Title title="Comprar Ingresso"/>
        <Card.Actions>
            <TouchableOpacity>            
                <View style={styles.botao} >
                    <Button color={'black'} onPress={() => Linking.openURL('https://www.ticketmaster.com.br/event/lollapaloozabr-bradesco') }
                title="Ingresso" />
                </View>
            </TouchableOpacity>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 15,
   margin: 10
  },
  botao: {
    fontSize: 18,
    backgroundColor: 'gray',
    marginRight: 4
  }
})