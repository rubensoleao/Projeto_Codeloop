//Bibliotecas react
//VVVVVVV
import React from 'react';
import { StyleSheet,
         Text,
         View,
         Button } from 'react-native';
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export default function  HomeScreen({navigation}) {
  return (
    	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      		<Text>Tela Principal</Text>
    	<Button
		title="Ir para tela de edição"
		onPress={() => navigation.navigate('Editor')}
		/>
    	</View>
  	);
}