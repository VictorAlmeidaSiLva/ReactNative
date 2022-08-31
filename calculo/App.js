import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [ numberBase, onChangeNumberBase ] = React.useState();
  const [ numberAltura, onChangeNumberAltura ] =React.useState();
  const [ res, setRes ] = React.useState();

  function calcular() {
    let area = numberBase * numberAltura

    setRes(area)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Área Retangulo</Text>
      </View>
      <View>
        <Text>Base</Text>
        <TextInput style={styles.input} onChangeText={onChangeNumberBase} value={numberBase}></TextInput>
      </View>
      <View>
        <Text>Altura</Text>
        <TextInput style={styles.input} onChangeText={onChangeNumberAltura} value={numberAltura}></TextInput>
      </View>
      <View>
        <Button title='Calcular' onPress={() => calcular()}></Button>
      </View>
      <View>
        <Text>Resultado: <Text style={styles.res}>{res}</Text></Text>
      </View>
    </View>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titulo:{
    fontSize: 40,
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  res:{
    fontSize: 20,
  }
});
