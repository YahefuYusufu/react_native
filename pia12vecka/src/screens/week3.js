import { StyleSheet, Text, View } from "react-native"
import React from "react"

const week3 = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Git</Text>
		</View>
	)
}

export default week3

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F0F5F9",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "#1E2022",
	},
})
