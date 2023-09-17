import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import FloatingButtonCircular from "./src/screens/FloatingButtonCircular"
import FloatingButton from "./src/screens/FloatingButton"

export default function App() {
	return (
		<View style={styles.container}>
			<FloatingButtonCircular />
			<FloatingButton />
			<StatusBar style="auto" />
		</View>
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
