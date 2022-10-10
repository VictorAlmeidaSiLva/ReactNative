import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-web'
import Title from '../components/Title'
import { ContextoLogin } from '../context/LoginContext';

export default function UserScreen() {
    const { user, logout } = React.useContext(ContextoLogin);
    return (
        <View>
            <Title text='Screen User' />

            <View>
                <Text>Olá {user.name}!</Text>
                <TouchableHighlight style={styles.button} title='Register' onPress={() => logout()}>
                    <Text style={styles.buttonText}>Logout</Text>
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
});