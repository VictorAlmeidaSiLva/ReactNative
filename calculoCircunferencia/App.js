import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {

  const [ raio, setRaio ] = React.useState();
  const [ resDiametro, setResDiametro ] = React.useState();
  const [ resPerimetro, setResPerimetro ] = React.useState();
  const [ resArea, setResArea ] = React.useState();

  function calculo() {
    let diametro = 2 * raio
    let perimetro = (2 * Math.PI) * raio
    let area = Math.PI * Math.sqrt(raio)
    
    setResDiametro(diametro);
    setResPerimetro(perimetro);
    setResArea(area);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Cálculos da Circunferência</Text>
        <Image style={styles.img} source={require('./assets/img.jpg')}></Image>
      </View>
      <View style={styles.raio}>
        <Text>Raio: <TextInput style={styles.input} onChangeText={setRaio} value={raio} placeholder={'Digite o raio'}></TextInput></Text>
        <Button color="green" title='Calcular' onPress={() => calculo()}></Button>
      </View>
      <View style={styles.calculos}>
        <Text style={styles.formula}>Diametro: <Text style={styles.resDi}>{resDiametro}</Text></Text>
        <Text style={styles.formula}>Perimetro: <Text style={styles.resPe}>{resPerimetro}</Text></Text>
        <Text style={styles.formula}>Área: <Text style={styles.resAr}>{resArea}</Text></Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
  },
  img: {
    height: 300,
    width: 300,
  },
  calculos: {
    marginTop: 20,
    marginRight: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'green',
  },
  formula: {
    marginTop: 15,
  },
  raio:{
    flexDirection: 'row',
  },
  resDi:{
    fontSize: 20,
    color: 'black',
  },
  resPe:{
    fontSize: 20,
    color: 'blue',
  },
  resAr:{
    fontSize: 20,
    color: 'red',
  },
  
});
