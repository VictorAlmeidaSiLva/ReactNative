import { View, StyleSheet, Text, TextInput } from "react-native"

export default function FormsNotas(props) {
    return (
        <View>
            <TextInput style={styles.input2} placeholder= {props.notas} value={props.value} onChangeText={props.onChangeText}></TextInput>  
        </View>
    )
}

const styles = StyleSheet.create({
    input2: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 20,
        width:70,
    },
});