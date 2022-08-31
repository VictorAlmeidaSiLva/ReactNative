import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <Image style={styles.img} source={require('./assets/icon.png')}></Image>
      </View>
      <View>
        <Text style={styles.titulo}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
        <Image style={styles.androidIcon} source={require('./assets/android.png')}></Image>
      </View>
      <View>
        <Text>
          O Apple Pay ainda não está totalmente consolidado no mercado: só funciona nos Estados Unidos e em estabelecimentos parceiros com equipamento de leitura NFC. E, de acordo com um relato do China Business Week, ele logo deve ganhar um concorrente de peso para piorar a situação. Isso porque a Google estaria preparando um sistema de pagamentos via celular muito parecido que, ao menos provisoriamente, levaria o nome de Android Pay.  O Android Pay estaria em desenvolvimento na China, em uma parceria com a China UnionPay, maior operadora de cartões de crédito e débito do país — segunda do mundo, atrás somente da Visa. Essa aliança traz o benefício de um maior número de estabelecimentos envolvidos, dando uma vantagem inicial ao serviço em relação aos concorrentes.  Ainda segundo o site, o sistema seria o mesmo: bastaria aproximar o smartphone do terminal de pagamento para processar a compra, com base na tecnologia sem fio Near
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  topo:{
    backgroundColor: "gray",
    padding: 5,
  },
  img:{
    width: 50,
    height: 50,
  },
  titulo:{
    fontSize: 25,
  },
  androidIcon:{
    width: 200,
    height: 200,
    left: 60,
    marginTop: 30,
    marginBottom: 30,
  },
});
