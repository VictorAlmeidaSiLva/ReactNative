import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: "#00ff00"}  }>
        <Image style={styles.img} source={require('./assets/cat.jpg')}></Image>
        <Text style={styles.nome}>Victor Augusto</Text>
      </View>
      <View style={styles.apresentacao}>
        <Text style={styles.titulo}>Apresentação</Text>
        <Text style={styles.titulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet varius quam a tincidunt. tique, eros ut dignissim elementum, velit magna sagittis felis, sed posuere elit purus nec velit. Phasellus dapibus, purus ac elementum lacinia, ex urna tincidunt arcu, non dictum nulla tortor ut magna. Proin fermentum eget ex at consectetur. Etiam sagittis ipsum sem, eu lobortis ligula accumsan ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus eget risus massa. Integer imperdiet viverra enim eu pretium. Nullam dictum lacus ut metus ultricies ultrices. Nam aliquet congue erat, eu dapibus quam sodales ut. Duis dictum euismod vehicula. Cras eu neque quis ligula eleifend fringilla.</Text>
      </View>
      <View style={styles.apresentacao2}>
        <Text style={styles.titulo}>Formação Acadêmica</Text>
        <Text style={styles.titulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet varius quam a tincidunt. tique, eros ut dignissim elementum, velit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 600,
    height: 300,
    resizeMode:"contain"
  },
  nome: {
    fontSize: 30,
    marginTop:30,
    marginBottom:30,
  },
  titulo:{
    fontSize: 20,
    marginTop:20,
  },
  apresentacao:{
    backgroundColor:"blue"
  },
  apresentacao2:{
    backgroundColor:"red"
  }
});
