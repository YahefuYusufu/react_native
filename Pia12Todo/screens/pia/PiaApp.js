import * as React from "react"
import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TodoScreen from "./TodoScreen"
import TodoDetail from "./TodoDetail"

const Stack = createNativeStackNavigator()
export default function PiaApp() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Todo" component={TodoScreen} />
				<Stack.Screen name="TodoDetail" component={TodoDetail} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
