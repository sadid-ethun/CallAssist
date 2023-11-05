import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from '../assets/logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

// const sqlite = require('../database/sqlite3');
// const path = require('node:path');

function SignUp() {
    const navigation = useNavigation();
    const {control, handleSubmit} = useForm();

    const onLogInPressed = () => {
        navigation.navigate('Login');
    };

    const onSignupPressed = (data) => {
        console.log(data["username"]);
        // if (sqlite.get_user_info(data["username"]) == null) {
        //     console.log("success");
        // }
        navigation.navigate('CallList');
    };
    
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} resizeMode="contain"/>
            <CustomInput name="username" placeholder="Username" control={control} />
            <CustomInput name="email" placeholder="Email" control={control} />
            <CustomInput name="phonenum" placeholder="Phone Number" control={control} keyboardType="numeric" />
            <CustomInput name="password" placeholder="Password" control={control} secureTextEntry />
            <CustomInput name="confirmpass" placeholder="Confirm Password" control={control} secureTextEntry />
            <CustomButton text="Sign Up" onPress={handleSubmit(onSignupPressed)} />
            <CustomButton text="Already have an account? Log In." onPress={onLogInPressed} type="TERTIARY" />
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

export default SignUp;