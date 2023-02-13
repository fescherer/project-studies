import React from 'react';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Alert, Linking } from 'react-native';
import { RectButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Header from '../Header';
import { Order } from '../types';
import OrderCard from '../OrderCard';
import { confirmDelivery } from '../api';

type Props = {
  route: {
    params: {
      order : Order;
    }
  }
}

export default function OrderDetails({ route } : Props) {
  const { order } = route.params;
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Orders')
  }

  const cancelOnPress = () => {
    navigation.navigate('Orders')
  }

  const confirmOnPress = () => {
    confirmDelivery(order.id)
    .then(() => {
      Alert.alert(`Pedido ${order.id} confirmado com sucesso`)
      navigation.navigate('Orders')})
    .catch(() => {
      Alert.alert(`Houve um erro ao entregar o pedido ${order.id}`)
    })
  }

  const startNavigation = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
  }

  return (
    <>
    <Header />
    <View style={styles.container}>
        <OrderCard order={order} />
        <RectButton style={styles.button} onPress={startNavigation}>
          <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={confirmOnPress}>
          <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={cancelOnPress}>
          <Text style={styles.buttonText}>CANCELAR</Text>
        </RectButton>
    </View>
  </>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      paddingRight: '5%',
      paddingLeft: '5%'
    },
    button: {
      backgroundColor: '#f03535',
      flexDirection: 'row',
      borderRadius: 10,
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFF',
      letterSpacing: -0.24,
      fontFamily: 'OpenSans_700Bold'
    }
  }
);

