import React from "react";
import { Button, Text, View, TouchableHighlight, StyleSheet, TextInput } from "react-native";
import { ContextoLogin } from "../context/LoginContext";

export default function Login() {
    const { user, authorized, login, logout } = React.useContext(ContextoLogin);
    const [ email, setEmail ] = React.useState();
    const [ password, setPassword ] = React.useState();

    return (
        <View style={styles.space}>
            {authorized && (
                <View>
                    <Text>Olá {user.name}!</Text>
                    <TouchableHighlight style={styles.button} title='Register' onPress={() => logout()}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableHighlight>

                </View>
            )}
            {!authorized && (
                <View>
                    <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail} value={email}></TextInput>
                    <TextInput style={styles.input} placeholder='Senha' onChangeText={setPassword} value={password}></TextInput>
                    <TouchableHighlight style={styles.button} title='Register' onPress={() => login(email, password)}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableHighlight>

                </View>
            )}
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
