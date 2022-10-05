import { StyleSheet, View, StatusBar } from 'react-native';
import LancarNotasPage from './src/pages/LancarNotasPage';
import { NotasProvider } from './src/context/Notas'

export default function App() {
  return (
    <NotasProvider>
      <View style={styles.container}>
        <LancarNotasPage />
        <StatusBar style="auto" />
      </View>
    </NotasProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
