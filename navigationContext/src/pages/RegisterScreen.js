import { View , Text, Button } from 'react-native'
import Title from '../components/Title'

export default function RegisterScreen({ navigation }) {
    return (
        <View>
            <Title text='Register'/>
            <Button title='User' onPress={() => navigation.navigate('UserScreen')}></Button>
            <Button title='Login' onPress={() => navigation.navigate('LoginScreen')}></Button>
        </View>
    )
}