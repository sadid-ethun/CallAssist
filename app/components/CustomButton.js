import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'

function CustomButton({onPress, text, type = "PRIMARY"}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 15,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    container_PRIMARY: {
        backgroundColor: '#78B5D5',
        padding: 15,
    },
    container_TERTIARY: {
        
    },
    text_TERTIARY: {
        color: 'gray',
        fontSize: 15,
    },
})

export default CustomButton;