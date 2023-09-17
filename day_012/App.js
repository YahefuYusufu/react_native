import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "./src/screens/HomeScreen"
import ProductScreen from "./src/screens/ProductScreen"

import IoIcons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator()
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName

						if (route.name === "Home") {
							iconName === focused
								? "ios-information-circle"
								: "ios-information-circle-outline"
						} else if (route.name === "Product") {
							iconName = focused ? "ios-list" : "ios-list-outline"
						}
						// You can return any component that you like here!
						return <IoIcons name={iconName} size={size} color={color} />
					},
					tabBarActiveTintColor: "green",
					tabBarInactiveTintColor: "gray",
				})}>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Product" component={ProductScreen} />
			</Tab.Navigator>
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
