import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
    const [ idade, setIdade ] = React.useState();
    const [ res, setRes ] = React.useState();

    function verificar() {
      if (idade >= 18) {
        setRes('Você tem permissão de acesso')
      } else {
        setRes('Você não tem permissão de acesso')
      }

    }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Verificar idade</Text>
      </View>
      <View style={styles.inputPosicao}>
        <TextInput style={styles.input} placeholder={'Digite sua idade'} onChangeText={setIdade} value={idade}></TextInput>
      </View>
      <View style={styles.btn}>
        <Button title='Verificar' onPress={() => verificar()}></Button>
      </View>
      <View>
        <Text style={styles.resposta}>{res}</Text>
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
    fontSize: 30,
    paddingTop: 100,
  },
  inputPosicao:{
    paddingTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn:{
    padding: 10,
  },
  resposta:{
    fontSize: 20,
  }
});
