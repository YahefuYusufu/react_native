import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "./src/screens/HomeScreen"
import MapScreen from "./src/screens/MapScreen"

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Map" component={MapScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
