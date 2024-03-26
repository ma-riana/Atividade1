import React, {useState, useEffect} from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

export default function AtracoesListScreen({ navigation }) {
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState({});

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const response = require('./assets/dados.json');
        setData(response);
        setLoading(false);
      } catch (erro) {
        console.error('Erro ao carregar os dados:', erro);
        setLoading(false);
      }
    };
    carregarDados();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <Card style={styles.container}>
        <Card.Title title={item.name} subtitle={item.horario}/>
        <Card.Cover style={styles.imagem} source={{ uri: item.imagem }} />
        <Card.Actions>
          <Button style={styles.botao} color='white'>Mais informações</Button>
          <Button style={styles.botao} color='white'>Favoritar</Button>
        </Card.Actions>
      </Card>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
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
  },
  imagem: {
    borderRadius: 10
  }
})