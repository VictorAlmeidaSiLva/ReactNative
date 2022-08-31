import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgCenter}>
        <Image style={styles.img} source={require('./assets/android.png')}></Image>
      </View>
      <View>
        <Text style={styles.user}>Novo usuario</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder={'E-mail'}></TextInput>
        <TextInput style={styles.input} placeholder={'Senha'}></TextInput>
      </View>
      <View style={styles.btnRegistro}>
        <Button color="green" title="Registrar"></Button>
      </View>
      <View style={styles.btnNovoUser}>
        <Button color="green" title="Novo Usuario"></Button>
      </View>
      <View style={styles.btnSenha}>
        <Button color={"gray"} title="Esqueci minha senha"></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    justifyContent: 'center',
  },
  imgCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width: 100,
    height: 100,
  },
  user: {
    fontSize: 25,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  btnRegistro:{
    alignItems: 'center'
  },
  btnNovoUser: {
    marginTop: 20,
    alignItems: 'center'
  },  
  btnSenha:{
    marginTop: 20,
    alignItems: 'center'
  },
});
