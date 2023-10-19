import React from "react"
import { StyleSheet, Text, View } from "react-native"

const TodoHeader = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>TodoHeader</Text>
		</View>
	)
}

export default TodoHeader

const styles = StyleSheet.create({
	container: {
		height: 50,
		width: "100%",
		backgroundColor: "green",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
		marginTop: 15,
	},
})
