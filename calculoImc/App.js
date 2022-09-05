import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

export default function App() {

  const [ peso, setPeso ] = React.useState();
  const [ altura, setAltura ] = React.useState();
  const [ res, setRes ] = React.useState();
  const [ cor, setCor ] = React.useState("white");

  function calcular() {
    const p = peso.replace(".", "").replace(",", "."); // 85,50 => 85.50
    const a = altura.replace(".", "").replace(",", "."); // 1,70  => 1.70


    let imc = p / (a * a);

      if(imc < 20 ){
        setRes( `${imc.toFixed(2)} (Seu peso está abaixo da faixa considerada normal)`)
        setCor('red')
      } 
        else if( imc >= 20 && imc < 25){
          setRes(`${imc.toFixed(2)} (Seu peso está dentro da faixa considerada normal)`)
          setCor('green')
      }
        else if(imc >= 25 && imc < 30){
          setRes(`${imc.toFixed(2)} (Você está na faixa chamada de “excesso de peso")`)
          setCor('yellow')
        }
        else if(imc >= 30 && imc < 35){
          setRes(`${imc.toFixed(2)} (Você está na faixa chamada de obesidade leve)`)
          setCor('orange')
        }
        else if(imc >= 35 && imc <40){
          setRes(`${imc.toFixed(2)} (Você está na faixa chamada de obesidade moderada)`)
          setCor('purple')
        }
        else if(imc >= 40){
          setRes(`${imc.toFixed(2)} (Você está na faixa chamada de obesidade mórbida)`)
          setCor('red')
        }
      }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Calcule seu IMC</Text>
      </View>
      <View style={styles.textoPeso}>
        <Text style={styles.texto}>Peso: </Text>
        <TextInputMask type={'money'} options={{
              precision: 2,
              separator: ',',
              delimiter: '',
              unit: '',
              suffixUnit: ''
            }} style={styles.input} placeholder="Digite o valor" value={peso} onChangeText={setPeso} />
      </View>
      <View style={styles.textoPeso}>
        <Text style={styles.texto}>Altura: </Text>
        <TextInputMask type={'money'} options={{
              precision: 2,
              separator: ',',
              delimiter: '',
              unit: '',
              suffixUnit: ''
            }} style={styles.input} placeholder="Digite o valor" value={altura} onChangeText={setAltura} />
      </View>
      <View>
        <Button title='Calcular' onPress={() => calcular()}></Button>
      </View>
      <View>
        <Text style={[styles.textResult, { backgroundColor: cor, padding: 5}]}>IMC: {res}</Text>
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
  textResult:{
    fontSize: 20,
  },
});
