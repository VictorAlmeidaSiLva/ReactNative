import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import Forms from "./Forms";



export default function Header(props) {
    return (
        <View>
            <Text style={styles.title}>Notas</Text>
            <Forms onAdicionarAluno={props.onAdicionarAluno}/>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        margin: 20,
    },
    
});