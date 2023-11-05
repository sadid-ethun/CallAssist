import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import Logo from '../assets/logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

function Login() {
    const navigation = useNavigation();

    const {control, handleSubmit} = useForm();

    const onLogInPressed = (data) => {
        console.log(data);
        navigation.navigate('MainContainer');
    };

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    };
    
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} resizeMode="contain"/>
            <CustomInput name="username" placeholder="Username" control={control} />
            <CustomInput name="password" placeholder="Password" control={control} secureTextEntry />
            <CustomButton text="Log In" onPress={handleSubmit(onLogInPressed)} />
            <CustomButton text="Don't have an account? Sign Up." onPress={onSignUpPressed} type="TERTIARY" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        shadowColor: "black",
        shadowOffset: { height: 0},
        shadowOpacity: 0.1,
    },
    logo: {
        marginBottom: 50,
        width: '100%',
        height: 200,
    },
});

export default Login;