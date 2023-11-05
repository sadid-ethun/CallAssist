import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from '../assets/logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

function CallInfo() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} resizeMode="contain"/>
            <CustomInput placeholder="Name" value={name} setValue={setName} />
            {/* <CustomButton text="Log In" onPress={onLogInPressed} /> */}
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

export default CallInfo;