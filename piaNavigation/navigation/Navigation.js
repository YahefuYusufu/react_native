import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home"
import Product from "../screens/Product"
import Profile from "../screens/Profile"

const Stack = createNativeStackNavigator()
const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: true }}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="Product" component={Product} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
