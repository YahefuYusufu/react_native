import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Button,
	TouchableOpacity,
} from "react-native"
import React, { useState } from "react"

const AddTodo = ({ addTodo }) => {
	const [text, setText] = useState("")

	const handleTodo = () => {
		if (text.length == !0) {
			addTodo(text)
			setText("")
		} else {
			alert("Please enter a todo")
		}
	}
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Add a todo..."
				value={text}
				onChangeText={(value) => setText(value)}
			/>
			<TouchableOpacity style={styles.Button}>
				<Button title="Add" color="#fff" onPress={handleTodo} />
			</TouchableOpacity>
		</View>
	)
}

export default AddTodo

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 16,
		marginBottom: 16,
	},
	input: {
		flex: 1,
		marginRight: 8,
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 8,
		padding: 12,
	},
	Button: {
		backgroundColor: "green",
		borderRadius: 8,
	},
})
