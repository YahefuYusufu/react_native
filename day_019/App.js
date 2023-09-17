import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import HomeScreens from "./src/screens/HomeScreens"

export default function App() {
	return (
		<View style={styles.container}>
			<HomeScreens />
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
