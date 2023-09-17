import { StyleSheet, View } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import AppNavigation from "./src/container/AppNavigation"
import MasterCard from "./src/components/MasterCard"

export default function App() {
	return (
		<NavigationContainer>
			<AppNavigation />
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({})
