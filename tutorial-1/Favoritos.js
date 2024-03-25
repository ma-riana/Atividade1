import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, BackHandler, Pressable } from 'react-native';

export default function Favoritos({ navigation }) {
  return (
    <View >
      <View style={styles.container}>
        <Text>Favoritos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  }
});