import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking} from 'react-native';
import { Platform } from 'react-native';
 
const mapUrl = Platform.select({
   ios: "maps:0,0?q=latitude,longitude",
   android: "geo:0,0?q=latitude,longitude"
});

export default function ContactDetailsScreen ({ route, navigation }) {
  const {contact} = route.params;
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.contactName}>{contact.name}</Text>
        <Text style={styles.contactDetails}>E-mail: {contact.email}</Text>
        <Text style={styles.contactDetails}>Telefone: {contact.phone}</Text>
      </View>
      <View style={styles.button} >
          <Button onPress={() => Linking.openURL(`mailto:${contact.email}`) }
            title="Enviar E-mail" />
        </View>
        <View style={styles.button} >
        <Button onPress={() => Linking.openURL(`tel:${contact.phone}`) }
          title="Ligar" />
      </View>
      <View style={styles.button} >
        <Button title="Voltar" onPress={() => navigation.navigate('ContactList')} />
      </View>
      <View style={styles.button} >
        <Button title="Coordenadas" onPress={() => Linking.openURL(mapUrl)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
  contactDetails: {
    fontSize: 16,
    height: 44,
  },
  button: {
    padding: 15
  }
});