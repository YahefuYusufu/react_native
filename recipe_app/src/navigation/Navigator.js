import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
	RecipeDetailsScreen,
	RecipeListScreen,
	WelcomeScreen,
} from "../screens/index"

const Stack = createNativeStackNavigator()

const Navigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="RecipeDetail" component={RecipeDetailsScreen} />
				<Stack.Screen name="RecipeList" component={RecipeListScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigator
