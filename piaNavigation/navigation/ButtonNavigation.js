import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import Home from "../screens/Home"
import Product from "../screens/Product"
import Profile from "../screens/Profile"
const Tab = createBottomTabNavigator()

const ButtonNavigation = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{ headerShown: false }}>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Profile" component={Profile} />
				<Tab.Screen name="Product" component={Product} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default ButtonNavigation
