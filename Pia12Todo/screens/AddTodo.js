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
		addTodo(text)
		setText("")
	}
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Add a todo..."
				value={text}
				onChangeText={(value) => setText(value)}
				inputMode="text"
			/>

			<Button title="Add" color="#000" onPress={handleTodo} />
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
		backgroundColor: "black",
		borderRadius: 8,
	},
})
