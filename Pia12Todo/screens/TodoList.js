import {
	Text,
	View,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	FlatList,
} from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import React from "react"

const TodoList = ({ todos, removeTodo }) => {
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={todos}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity>
						<View style={styles.todoItem}>
							<Text style={styles.text}>{item.text}</Text>
							<FontAwesome5
								name="trash"
								size={20}
								color={"yellow"}
								onPress={() => removeTodo(item.id)}
							/>
						</View>
					</TouchableOpacity>
				)}
			/>
		</SafeAreaView>
	)
}

export default TodoList

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
	},
	todoItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderRadius: 8,
		padding: 16,
		marginBottom: 16,
		backgroundColor: "green",
	},
	text: {
		color: "white",
		fontSize: 16,
	},
})
