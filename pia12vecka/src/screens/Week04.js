import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Week3 from "./week3"

const Stack = createNativeStackNavigator()
const Week04 = () => {
	return (
		<View>
			<Text>Week 04</Text>
		</View>
	)
}

const styles = StyleSheet.create({})

export default Week04
