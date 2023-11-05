import React from 'react';
import {View, Text, TextInput, StyleSheet, secureTextEntry} from 'react-native';
import {Controller} from "react-hook-form";

function CustomInput({control, name, placeholder, secureTextEntry, keyboardType,}) {
    return (
        <View style={styles.container}>
            <Controller 
                control={control}
                name={name}
                rules={{required: true}}
                render={({field: {value, onChange, onBlur}}) => (
                <TextInput value={value} onChangeText={onChange} onBlue={onBlur} placeholder={placeholder} style={styles.input} secureTextEntry={secureTextEntry} keyboardType={keyboardType} />)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginVertical: 5,
        paddingTop: 0,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        height: 50,
    },
    input: {
        fontSize: 20,
        height: 50,
        color: 'gray',
        fontWeight: 'bold',
    },
})

export default CustomInput;