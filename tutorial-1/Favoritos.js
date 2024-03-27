import * as React from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Favoritos({ navigation }) {
  const [favoritos, setFavoritos] = React.useState([]);

  React.useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        const favoritosArmazenados = await AsyncStorage.getItem('favoritos');
        if (favoritosArmazenados !== null) {
          setFavoritos(JSON.parse(favoritosArmazenados));
        }
      } catch (erro) {
        console.error('Erro ao carregar os favoritos:', erro);
      }
    };
    carregarFavoritos();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
          <Card style={styles.container}>
            <Card.Title title={item.name} subtitle={item.horario} />
            <Card.Cover style={styles.imagem} source={{ uri: item.imagem }} />
            <Card.Actions>
              <TouchableOpacity onPress={() => navigation.navigate('InfoDetalhadas', { atracao: item })}>
                <View>
                  <Button style={styles.botao} color='white'>Mais informações</Button>
                </View>
              </TouchableOpacity>
            </Card.Actions>
          </Card>
      </View>
  );

  return (
    <View style={styles.fundo}>
      {favoritos.length === 0 ? (
        <View style={styles.containerSemItens}>
          <Text style={styles.titulo}>Não há itens favoritados</Text>
        </View>
      ) : (
        <FlatList
          data={favoritos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
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
  containerSemItens: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 80,
  },
  botao: {
    fontSize: 18,
    backgroundColor: "#fc4133",
    marginRight: 25,
    width: 280,
    marginRight: 4
  },
  imagem: {
    borderRadius: 10
  }
});