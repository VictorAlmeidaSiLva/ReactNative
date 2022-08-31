import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.tituloback}>
          <Text style={styles.titulo}>Notícias</Text>
        </View>
        <View style={styles.espaco}>
          <Image style={styles.image} source={require('./assets/androide.jpg')}></Image>
          <Text style={styles.texto}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
        </View>
        <View style={styles.espaco}>
          <Image style={styles.image} source={require('./assets/androide.jpg')}></Image>
          <Text style={styles.texto}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
        </View>
        <View style={styles.espaco}>
          <Image style={styles.image} source={require('./assets/androide.jpg')}></Image>
          <Text style={styles.texto}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
        </View>
        <View style={styles.espaco}>
          <Image style={styles.image} source={require('./assets/androide.jpg')}></Image>
          <Text style={styles.texto}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
        </View>
        <View style={styles.espaco}>
          <Image style={styles.image} source={require('./assets/androide.jpg')}></Image>
          <Text style={styles.texto}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tituloback:{
    backgroundColor: 'gray',
  },
  titulo:{
    alignItems: 'center',
    fontSize: 40,
  },
  texto:{
    fontSize: 20,
  },
  image:{
    width: 60,
    height: 60,
  },
  espaco: {
    flexDirection: 'row',
  },
});

export default App;