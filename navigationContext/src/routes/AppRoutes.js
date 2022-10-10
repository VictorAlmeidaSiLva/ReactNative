import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ContextoLogin } from "../context/LoginContext";
import LoginScreen from "../pages/LoginScreen";
import NewsScreen from "../pages/NewsScreen";
import RegisterScreen from "../pages/RegisterScreen";
import UserScreen from "../pages/UserScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="NewsScreen" component={NewsScreen} />
            <Tab.Screen name="UserScreen" component={UserScreen} />
        </Tab.Navigator>
    )
}

export default function AppRoutes() {
    const { authorized } = React.useContext(ContextoLogin)

    return (
        <Stack.Navigator>
            {authorized ? (
                <>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                </>
            ) : (
                <>
                    <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
                </>
            )}

        </Stack.Navigator>
    )

}