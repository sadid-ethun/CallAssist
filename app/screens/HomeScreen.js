import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Searchbar from './SearchBar'

export default function HomeScreen() {
    const [value, setValue] = useState()
    function updateSearch(value) {
        //do your search logic or anything
        console.log(value)
    }
    return (

        <View style={styles.container}>
            <Searchbar
                    value={value}
                    updateSearch={updateSearch}
                    style={{ marginTop: '8%' }}
                />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red', height: '100%', width: '100%' 
    },
});