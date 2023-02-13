import React from 'react';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useFonts , OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

export default function Header() {

  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home')
  }

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}> 
    <View style={styles.container}>
      {/*View não é clicavel, por isso adicionamos da tag TouchableWithoutFeedback*/}
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>FS Delivery</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#f03535',
    height : 120,
    paddingTop : 70,
    flexDirection : 'row',
    justifyContent : 'center'
},
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#FFF',
        marginLeft: 15,
        fontFamily : 'OpenSans_700Bold'
    }
});

