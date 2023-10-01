import { View, Text, StyleSheet } from "react-native"
import React from "react"

const DetailView = ({ route }) => {
	const { item } = route.params
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{item}</Text>
		</View>
	)
}

export default DetailView

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	name: {
		fontSize: 38,
		color: "blue",
	},
})
