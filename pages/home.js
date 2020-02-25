
// Tela principal do aplicativo:
//	- Exibição dos alunos
//	- Botão para editar alunos


//Bibliotecas react
//VVVVVVV
import React from 'react';
import { StyleSheet,
	Text,
	View,
	Button, } from 'react-native';
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

import Acordion1 from "./Acordion";

export default function HomeScreen({navigation}){
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Acordion1/>

		<Text>Home Screen</Text>
		<Button
		title="Ir para tela de edição"
		onPress={() => navigation.navigate('Editor')}
		/>


		</View>
		);
	}
