import { TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image, View } from 'react-native';
import * as CONSTANTS from '../config/CONSTANTS';
import { StatusBar } from 'expo-status-bar';
import Login from './Login';
import { useNavigation, useNavigationContainerRef } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  const pressed = () => {
    navigation.navigate('CallInfo');
  };
  const logoButtonsList = logoLinks.map((link) => 
    <TouchableOpacity 
      onPress={pressed}
      key={link}
      >
      <View style={styles.buttonView}>
        <Image
          source={{
            width: CONSTANTS.DEVICEWIDTH - CONSTANTS.BORDER,
            height: CONSTANTS.LOGOBUTTONHEIGHT,
            uri: link,
          }}
          style={styles.logobutton}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}> 
      <ScrollView>
        {logoButtonsList}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
    },
    logobutton: {
      borderRadius: 25,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: 'lightgray',
      shadowColor: "black",
      shadowOffset: { height: 0},
      shadowOpacity: 0.1,
    },
    buttonView: {
      padding: 5,
    }
  });
  
  //icons for companies
  const logoLinks = [
    "https://1000logos.net/wp-content/uploads/2016/10/ATT-logo-1-1024x512.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Verizon-logo-768x432.png",
    "https://1000logos.net/wp-content/uploads/2017/07/T-mobile-logo-768x343.png",
    "https://1000logos.net/wp-content/uploads/2020/07/Charter-Spectrum-Logo-1024x576.png",
    "https://ntfb.org/wp-content/uploads/2021/10/Wells-Fargo-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Chase-logo-768x432.png",
    "https://1000logos.net/wp-content/uploads/2016/11/Citibank-Logo.png",
    "https://1000logos.net/wp-content/uploads/2016/10/Bank-of-America-Logo-768x432.png",
    "https://1000logos.net/wp-content/uploads/2018/08/GEICO-Logo-768x432.png",
    "https://1000logos.net/wp-content/uploads/2018/04/State-Farm-Logo-768x432.png",
  ]