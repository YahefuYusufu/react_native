import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Day01 from "./src/screens/Day01"
import Uppgift from "./src/screens/Uppgift"
import Week3 from "./src/screens/week3"

export default function App() {
	return (
		<View style={styles.container}>
			{/* <Day01 /> */}
			{/* <Uppgift /> */}
			<Week3 />
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
})
