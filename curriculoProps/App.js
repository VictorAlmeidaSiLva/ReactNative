import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image } from 'react-native';

function TituloCurriculo(props) {
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>{props.titulo}</Text>
    </View>
  )
}


function PhotoPerfilCurriculo(props) {
  return (
    <View>
      <Image source={props.photo} style={{ width: 100, height: 100 }}></Image>
    </View>
  )
}

function NomePerfilCurriculo(props) {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', }}>{props.nome}</Text>
    </View>
  )
}

function TextoCurriculo(props) {
  return (
    <View>
      <Text>{props.textoCurriculo}</Text>
    </View>
  )
}

function Curriculo() {
  
}



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TituloCurriculo titulo='Curriculo'></TituloCurriculo>
      <NomePerfilCurriculo nome='Victor Augusto Almeida Silva'></NomePerfilCurriculo>
      <PhotoPerfilCurriculo photo={require('./assets/mario.png')}></PhotoPerfilCurriculo>
      <TextoCurriculo textoCurriculo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie arcu metus. Morbi lacinia ac nunc a blandit. Suspendisse potenti. Curabitur feugiat sem sed libero auctor fermentum. Curabitur odio mauris, finibus at elementum eu, porttitor in mi. Ut non commodo arcu. Mauris cursus mi et tellus pharetra lobortis. Suspendisse accumsan mattis arcu at commodo.'}></TextoCurriculo>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
