import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeScreen, RecipeDetailScreen, WelcomeScreen } from "../screens/index"

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Welcome"
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigation
