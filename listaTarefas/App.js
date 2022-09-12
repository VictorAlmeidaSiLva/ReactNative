import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {
  const [tarefa, setTarefa] = React.useState();
  const [tarefas, setTarefas] = React.useState([])

  function adicionarTarefa() {
    tarefas.push(tarefa);
    setTarefa('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#FF9057' barStyle='light-content' translucent={false}></StatusBar>
      <View style={styles.header}>
        <Text style={styles.titulo}>Lista de Tarefas</Text>
      </View>
      <View style={styles.body}>
        <TextInput placeholder='Digite sua Tarefa' style={styles.input} value={tarefa} onChangeText={setTarefa}></TextInput>
        <Button title="Adicionar Tarefa" onPress={() => adicionarTarefa()}></Button>
      </View>
      <View style={styles.header}>
        <Text style={styles.textint}>Tarefas</Text>
      </View>
      <View>
        {tarefas.map((n) => <Text style={{ fontSize: 20, color: 'green', fontWeight: 'bold', flex: 1, paddingTop: 20 }}>{n} <Button  title='X' color='red'></Button> </Text>)}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    padding: 2,
  },
  header: {
    textAlign: 'center',
    resizeMode: 'stretch',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {
    flexDirection: 'row',
  },
  textint: {
    fontSize: 25,
  },
  input: {
    borderWidth: 1,
    fontSize: 15,
    padding: 10,
  },
});
