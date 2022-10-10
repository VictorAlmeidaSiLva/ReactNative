import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View, TouchableHighlight, StyleSheet, TextInput } from "react-native";
import { ContextoLogin } from "../context/LoginContext";

export default function Login() {
    const navigation = useNavigation();
    const { login } = React.useContext(ContextoLogin);
    const [email, setEmail] = React.useState('Fulaninho@gmail.com');
    const [password, setPassword] = React.useState('123');

    const [ erro, setErro ] = React.useState(null)


    const loginHandle = () => {
        try {
            setErro(null)
            login(email, password);
            navigation.navigate('Home')
        }
        catch(err) {
            console.log(err.message);
            setErro(err.message)
        }
    }

    return (
        <View style={styles.space}>

            <View>
                <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail} value={email}></TextInput>
                <TextInput style={styles.input} placeholder='Senha' onChangeText={setPassword} value={password}></TextInput>
                {erro && (<Text>{erro}</Text>)}
                <TouchableHighlight style={styles.button} title='Login' onPress={() => loginHandle()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "black",
        borderColor: "white",
        alignItems: "center"

    },
    buttonText: {
        flex: 1,
        color: "white"
    },
    space: {
        padding: 30,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
