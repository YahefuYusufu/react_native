import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../components/categories"
import WelcomeScreen from "../screens/WelcomeScreen"
import RecipeDetailScreen from "../screens/RecipeDetailScreen"

const Stack = createNativeStackNavigator()

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Welcome"
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation