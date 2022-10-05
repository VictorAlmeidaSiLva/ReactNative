import { StyleSheet, Text, View } from "react-native";

export default function Title (props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center"
    },
    text: {
        fontSize: 20
    }
})