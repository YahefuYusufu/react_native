import React, { useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { useFonts } from "expo-font"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SettingScreen from "./src/screens/SettingScreen"
import SecurityScreen from "./src/screens/SecurityScreen"

export default function App() {
	const [fontLoaded] = useFonts({
		"Poppins-Bold": require("./assets/fonts/poppins/Poppins-Bold.ttf"),
		"Poppins-Medium": require("./assets/fonts/poppins/Poppins-Medium.ttf"),
		"Poppins-Regular": require("./assets/fonts/poppins/Poppins-Regular.ttf"),
	})

	useEffect(() => {
		if (!fontLoaded) {
			;<Text>Nothing here</Text>
		}
	}, [fontLoaded])

	const Stack = createNativeStackNavigator()
	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen name="Setting" component={SettingScreen} />
				<Stack.Screen name="Security" component={SecurityScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
