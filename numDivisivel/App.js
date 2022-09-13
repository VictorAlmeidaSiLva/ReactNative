
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#FF9057' barStyle='light-content' translucent={false}></StatusBar>
      <View style={styles.blockTop}>
        <Text style={styles.titulo}> Numeros Divisiveis </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blockTop: {
    borderWidth: 1,
    padding: 15,
  },
  titulo:{
    fontSize: 25,
    textAlign: 'center',
  },
});
