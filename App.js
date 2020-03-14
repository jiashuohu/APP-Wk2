import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import AlbumImage from './src/AlbumImage';

export default function App() {
  return (
    <View >
      <Header />
      <AlbumImage />
      <Text style={styles.SaleTimeText}>
        2017.11.1発売
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SaleTimeText: {
    paddingLeft: 10,
    paddingTop: 30,
    fontSize: 20,
    fontWeight: "bold"
  },
});
