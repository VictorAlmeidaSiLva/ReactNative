import { View, Text, Button, TouchableHighlight, StyleSheet, Image } from 'react-native'
import Title from '../components/Title'
import Login from '../components/Login'


export default function LoginScreen({ navigation }) {
    return (
        <View>
            <Title text='Login' />
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={require('../../assets/Logo.png')}></Image>
            </View>
            <Login />
            <View style={styles.space}>
                <TouchableHighlight style={styles.button} title='User' onPress={() => navigation.navigate('UserScreen')}>
                    <Text style={styles.buttonText}>Criar Conta</Text>
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
    logoImage: {
        height: 150,
        width: 150,
        resizeMode: 'stretch',
    },
    logo: {
        flex: 1,
        alignItems: 'center',
    },
});