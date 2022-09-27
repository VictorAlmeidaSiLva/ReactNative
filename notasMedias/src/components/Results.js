import { StyleSheet, Text, View } from "react-native";



export default function Results(props) {
    function click () {
        props.alunos.map((e) => console.log(e))
    }
    return (
        <View style={styles.resultados}>
            <View style={styles.spaceAluNotMed}>
               <Text onPress={() => click()}>
                    Alunos
               </Text>
            </View>
            <View style={styles.spaceAluNotMed}>
                <Text>
                    Notas
                </Text>
            </View>
            <View style={styles.spaceAluNotMed}>
                <Text>
                    Média
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    resultados: {
        flexDirection: 'row',
    },
    spaceAluNotMed: {
        padding: 30,
        fontSize: 20,
    },
})