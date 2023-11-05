import { TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image, View } from 'react-native';
import Login from './app/screens/Login';
import Navigation from './app/navigation/index';
import { NavigationContainer } from '@react-navigation/native'
;
export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
}
