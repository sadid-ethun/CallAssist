import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import CallList from '../screens/CallList';
import SignUp from '../screens/SignUp';
import CallInfo from '../screens/CallInfo';
import {View, Text, SafeAreaView} from 'react-native';
import MainContainer from './MainContainer';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                   <Stack.Screen name='Login' component={Login} />
                   <Stack.Screen name='SignUp' component={SignUp} />
                   <Stack.Screen name='MainContainer' component={MainContainer} />
                   <Stack.Screen name='CallList' component={CallList} />
                   <Stack.Screen name='CallInfo' component={CallInfo} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default Navigation;