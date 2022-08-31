import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [ peso, setPeso ] = React.useState();
  const [ altura, setAltura ] = React.useState();
  const [ res, setRes ] = React.useState();

  function calcular() {
    let imc = peso / (altura * altura);

    setRes(imc)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Calcule seu IMC</Text>
      </View>
      <View style={styles.textoPeso}>
        <Text style={styles.texto}>Peso: </Text>
        <TextInput style={styles.input} placeholder={'Digite seu peso'} onChangeText={setPeso} value={peso}></TextInput>
      </View>
      <View style={styles.textoPeso}>
        <Text style={styles.texto}>Altura: </Text>
        <TextInput style={styles.input} placeholder={'Digite sua Altura'} onChangeText={setAltura} value={altura}></TextInput>
      </View>
      <View>
        <Button title='Calcular' onPress={() => calcular()}></Button>
      </View>
      <View>
        <Text>IMC: {res}</Text>
      </View>
    </SafeAreaView>
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
  textoPeso:{
    flexDirection: "row",
    paddingTop: 70,
  },
  texto:{
    fontSize: 20,
  },
});
