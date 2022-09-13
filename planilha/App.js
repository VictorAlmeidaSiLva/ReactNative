import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {
  const [ valor, setValor ] = React.useState();
  const [ valores, setValores ] = React.useState([]);
  const [ soma, setSoma ] = React.useState();
  const [ media, setMedia ] = React.useState();
  const [ menor, setMenor ] = React.useState();
  const [ maior, setMaior ] = React.useState();
  
  
  function somarValores(){
    let aux = 0

    for (let i = 0; i < valores.length; i++) {
      aux = (valores[i] * 1) + aux         
    } 
    setSoma(aux)
  }

  function mediaValores(){
    let aux = 0

    for (let i = 0; i < valores.length; i++) {
      aux = (valores[i] * 1) / valores.length
      
    }
    setMedia(aux)
  }

  function menorValores(){
    let aux = Math.min(...valores)
    setMenor(aux)
  }

  function maiorValores(){
    let aux = Math.max(...valores)
    setMaior(aux)
  }

  function click() {
    valores.push(valor);
    

    somarValores()
    mediaValores()
    menorValores()
    maiorValores()
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#FF9057' barStyle='light-content' translucent={false}></StatusBar>
      <View>
        <Text style={styles.titulo}>Planilha de valores</Text>
      </View>
      <View style={styles.block} >
        <TextInput style={styles.input} clearTextOnFocus={true} placeholder='Digite o numero para adicionalo' value={valor} onChangeText={setValor}></TextInput>
        <Button title="+" onPress={() => click()}></Button>
      </View>
      <View style={styles.blockBody}>
        {valores.map((n) => <Text style={{fontSize: 20, fontWeight: 'bold'}}>{n}</Text>)}
      </View>
      <View style={styles.blockfooter}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Soma: {soma} </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}s>Média: {media} </Text>
      </View>
      <View style={styles.blockfooter}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}} >Maior: {maior}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}} >Menor: {menor}</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  block: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 15,
  },
  input: {
    borderWidth: 1,
    fontSize: 15,
    padding: 10,
    aspectRatio: 15,
  },
  blockBody: {
    borderWidth: 1,
    padding: 70,
  },
  blockfooter: {
    flexDirection: 'row',
  },
});
