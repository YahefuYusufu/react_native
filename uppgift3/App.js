import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import StartPage from "./screens/StartPage"
import DetailView from "./screens/DetailView"
const Stack = createNativeStackNavigator()
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ animation: true }}>
				<Stack.Screen name="StartPage" component={StartPage} />
				<Stack.Screen name="Detail" component={DetailView} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
