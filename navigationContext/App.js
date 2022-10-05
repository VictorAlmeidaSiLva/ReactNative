import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewsScreen from "./src/pages/NewsScreen";
import UserScreen from "./src/pages/UserScreen";
import RegisterScreen from "./src/pages/RegisterScreen";
import LoginScreen from './src/pages/LoginScreen';
import LoginContext from './src/context/LoginContext';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="LoginScreen" component={LoginScreen} />
      <Tab.Screen name="NewsScreen" component={NewsScreen} />
      <Tab.Screen name="UserScreen" component={UserScreen} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <LoginContext>
        <StatusBar backgroundColor='#FF7E01' barStyle='light-content' translucent={false} />
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </LoginContext>
    </NavigationContainer>
  );
}

