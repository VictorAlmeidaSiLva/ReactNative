import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.img} source={require('./assets/android.png')}></Image>
      </View>
      <View>
        <Text style={styles.user}>Novo usuario</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder={'Nome'}></TextInput>
        <TextInput style={styles.input} placeholder={'E-mail'}></TextInput>
        <TextInput style={styles.input} placeholder={'Senha'}></TextInput>
        <TextInput style={styles.input} placeholder={'Repita senha'}></TextInput>
      </View>
      <View>
        <Button color="green" title="Registrar"></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  img:{
    width: 100,
    height: 100,
    left: 125,
    marginTop: 50,
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
});
