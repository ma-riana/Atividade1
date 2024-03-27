import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking, Image} from 'react-native';
import { Platform } from 'react-native';
 
const mapUrl = Platform.select({
   ios: "maps:0,0?q=latitude,longitude",
   android: "geo:0,0?q=latitude,longitude"
});

export default function InfoDetalhadasScreen ({ route, navigation }) {
  const {atracao} = route.params;
  return (
    <View style={styles.fundo}>
        <View style={styles.container}>
          <Text style={styles.contactName}>{atracao.name}</Text>
          <Text style={styles.contactDetails}>{atracao.horario}</Text>
          <Text style={styles.contactDetails}>{atracao.endereco.nome}{"\n"}{atracao.endereco.rua}</Text>
          <Image
            source={{ uri: atracao.imagem }}
            style={styles.imagem}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button} >
              <Button color={'white'} onPress={() => Linking.openURL(atracao.playlist) }
                title="Playlist no Spotify" />
            </View>
            <View style={styles.button} >
            <Button color={'white'} onPress={() => Linking.openURL(atracao.instagram) }
              title="Instagram" />
            </View>
            <View style={styles.button} >
              <Button color={'white'} title="Coordenadas" onPress={() => Linking.openURL(mapUrl)} />
            </View>
            <View style={styles.button} >
              <Button color={'white'} title="Voltar" onPress={() => navigation.navigate('Atracoes')} />
            </View>
          </View>
      </View>
  </View>
  );
}
const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    margin: 35,
  },
  contactName: {
    fontSize: 35,
    fontWeight: 'bold',
    height: 44,
  },
  contactDetails: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    height: 44,
  },
  buttonContainer: {
    margin: 40
  },
  button: {
    margin: 5,
    backgroundColor: '#fc4133',
    borderRadius: 10,
    fontSize: 16,
    height: 44
  },
  imagem: {
    width: 200, 
    height: 200,
    borderRadius: 100
  }
});