import React, {useState, useEffect} from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet, Linking } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

export default function AtracoesListScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const response = require('./assets/valoresIngresso.json');
        setData(response);
        setLoading(false);

      } catch (erro) {
        console.error('Erro ao carregar os dados:', erro);
        setLoading(false);
      }
    };
    carregarDados();
  }, []);

  return (
    
    <View style={styles.fundo}> 
    {loading ? (
        <Text>Carregando...</Text>
      ) : (
      <Card style={styles.container}>
        <Card.Cover style={styles.imagem} source={require('./assets/lolla.png')} />
        <Card.Title
          title="LOLAPALOOZA 2024"
          subtitle="22, 23 e 24 de março"
        />
        <Text style={styles.texto} h2>
            Meia-entrada: R$ {data.valores.meia} {'\n'}
            Entrada social: R$ {data.valores.social}  {'\n'}
            Inteira: R$ {data.valores.inteira}
          </Text>
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
  },
  texto: {
    padding: 15
  }
})