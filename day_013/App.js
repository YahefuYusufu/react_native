import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import HomeScreen from "./src/screens/HomeScreen"
import ChatScreen from "./src/screens/ChatScreen"

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tabs = createBottomTabNavigator()
export default function App() {
	return (
		<NavigationContainer>
			<Tabs.Navigator style={styles.container}>
				<Tabs.Screen name="Home" component={HomeScreen} />
				<Tabs.Screen name="Chat" component={ChatScreen} />
			</Tabs.Navigator>
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
