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
import AppRoutes from './src/routes/AppRoutes';
import {NewsProvider} from './src/context/NewsContext'





export default function App() {
  return (
    <LoginContext>
      <NewsProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
        <StatusBar backgroundColor='#FF7E01' barStyle='light-content' translucent={false} />
      </NewsProvider>
    </LoginContext>
  );
}

