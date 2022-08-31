import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  const [ base, onChangeBase ] = React.useState();
  const [ altura, onChangeAltura ] = React.useState();
  const [ res, setRes ] = React.useState();   



  function calcular(){
    let area = (base * altura)/2

    setRes(area)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.title}>Área do Triangulo</Text>
      </View>
      <View>
        <Text>Base</Text>
        <TextInput style={styles.input} onChangeText={onChangeBase} value={base} placeholder='Digite a base do triangulo'></TextInput>
      </View>
      <View>
        <Text>altura</Text>
        <TextInput style={styles.input} onChangeText={onChangeAltura} value={altura} placeholder='Digite a altura do triangulo'></TextInput>
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

  title: {
    fontSize: 40,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  res:{
    fontSize: 20,
  }

});
