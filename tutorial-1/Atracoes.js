import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function AtracoesListScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const response = require('./assets/dados.json');
        setData(response);
        setLoading(false);

        const favoritosArmazenados = await AsyncStorage.getItem('favoritos');
        if (favoritosArmazenados !== null) {
          setFavoritos(JSON.parse(favoritosArmazenados));
        }
      } catch (erro) {
        console.error('Erro ao carregar os dados:', erro);
        setLoading(false);
      }
    };
    carregarDados();
  }, []);

  const favoritarAtracao = async (item) => {
    const atracaoIndex = favoritos.findIndex((atracao) => atracao.name === item.name);

    if (atracaoIndex === -1) {
      // Adiciona à lista de favoritos
      const atracaoFavoritada = [...favoritos, item];
      setFavoritos(atracaoFavoritada);
      await AsyncStorage.setItem('favoritos', JSON.stringify(atracaoFavoritada));
    } else {
      // Remove da lista de favoritos
      const atracaoFavoritada = favoritos.filter((atracao) => atracao.name !== item.name);
      setFavoritos(atracaoFavoritada);
      await AsyncStorage.setItem('favoritos', JSON.stringify(atracaoFavoritada));
    }
  };

  const isFavorito = (item) => {
    return favoritos.some((favorito) => favorito.name === item.name);
  };

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <Card style={styles.container}>
        <Card.Title title={item.name} subtitle={item.horario} />
        <Card.Cover style={styles.imagem} source={{ uri: item.imagem }} />
        <Card.Actions style={styles.botoes}>
          <TouchableOpacity onPress={() => navigation.navigate('InfoDetalhadas', { atracao: item })}>
            <View>
              <Button style={styles.botao} color='white'>Mais informações</Button>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => favoritarAtracao(item)}>
            <View>
              <Text style={styles.icone}>
                <Icon name="star" size={30} color={isFavorito(item) ? 'orange' : 'gray'} /> 
              </Text>
            </View>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
    </View>
  );

  return (
    <View style={styles.fundo}>
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
  fundo: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  container: {
    padding: 15,
    margin: 10
  },
  botao: {
    fontSize: 18,
    backgroundColor: "#fc4133",
    marginRight: 25,
    width: 280
  },
  botoes: {
    justifyContent: 'center',
  },
  imagem: {
    borderRadius: 10
  }
});