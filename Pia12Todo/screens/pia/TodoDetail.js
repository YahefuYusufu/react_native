import { View, Text, Button, TextInput } from "react-native"
import React, { useState } from "react"

const TodoDetail = ({ route, navigation }) => {
	const [todoTitle, setTodoTitle] = useState(route.params.todoItem.key)
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>{route.params.key}</Text>
			<TextInput
				value={todoTitle}
				onChangeText={setTodoTitle}
				style={{
					borderColor: "black",
					borderWidth: 1,
					width: 200,
					margin: 10,
					padding: 10,
					borderRadius: 5,
				}}
			/>
			<Button
				title="Save"
				onPress={() =>
					navigation.navigate({
						name: "Todo",
						params: { todoTitle: todoTitle, rownumb: route.params.rownumb },
						merge: true,
					})
				}
			/>
		</View>
	)
}

export default TodoDetail
