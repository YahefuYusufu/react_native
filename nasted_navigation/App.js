import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { Details, Home, Profile } from "./src/screnns/index"
const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const TabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={StackNavigator} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	)
}

const StackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={Home}
				options={{
					tabBarIcon: ({ icon }) => (
						<MaterialCommunityIcons name="home" color={icon} size={25} />
					),
				}}
			/>
			<Stack.Screen name="Details" component={Details} />
		</Stack.Navigator>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	)
}
