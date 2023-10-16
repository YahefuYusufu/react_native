import { StyleSheet, Text, View } from "react-native"
import React from "react"

const TodoError = ({ errormessage }) => {
	return (
		<View style={styles.errorContainer}>
			<Text style={styles.errorText}>{errormessage}</Text>
		</View>
	)
}

export default TodoError

const styles = StyleSheet.create({
	errorContainer: {
		backgroundColor: "#ff0000",
		width: "70%",
	},
	errorText: {
		color: "white",
		backgroundColor: "#ff0000",
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
})
