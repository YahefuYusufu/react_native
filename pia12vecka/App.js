import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Day01 from "./src/screens/Day01"
import Uppgift from "./src/screens/Uppgift"
import Week3 from "./src/screens/week3"
import Week04 from "./src/screens/Week04"
import Navigation from "./src/screens/Navigation"
import { useState } from "react"

export default function App() {
	const [showMore, setShowMore] = useState(true)
	return (
		<View style={styles.container}>
			{/* <Day01 /> */}
			{/* <Uppgift /> */}
			{/* <Week3 /> */}
			<navigation />
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		color: "#fff",
	},
})
