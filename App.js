import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import Header from './src/Header';
import AlbumImage from './src/AlbumImage';
import music_content from "./src/components/json/music_content.json";

export default function App() {
  return (
    <ScrollView>
      <View >
        <Header />
        <AlbumImage />
        <Text style={styles.SaleTimeText}>
          2017.11.1発売
        </Text>
        <View style={styles.DrawLine}/> 
          <Text>{music_content[0].title}</Text>
        <View style={styles.DrawLine}/> 
          <Text>{music_content[1].title}</Text>
        <View style={styles.DrawLine}/> 
          <Text>{music_content[2].title}</Text>
        <View style={styles.DrawLine}/> 
          <Text>{music_content[3].title}</Text>
        <View style={styles.DrawLine}/> 
          <Text>{music_content[4].title}</Text>
      </View>
    </ScrollView>
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
  DrawLine: {
    paddingTop: 30,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  }
});
