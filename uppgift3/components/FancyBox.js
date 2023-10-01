import { View, Text, StyleSheet } from "react-native"
import React from "react"

const FancyBox = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{props.name}</Text>
		</View>
	)
}

export default FancyBox

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		padding: 10,
		margin: 10,
		backgroundColor: "blue",
	},
	name: {
		fontSize: 18,
		color: "white",
		margin: 10,
		padding: 10,
	},
})
