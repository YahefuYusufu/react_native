import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Day01 from "./src/screens/Day01"
import Uppgift from "./src/screens/Uppgift"

export default function App() {
	return (
		<View style={styles.container}>
			{/* <Day01 /> */}
			<Uppgift />
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
})
