import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import TodoList from "./screens/TodoList"
import AddTodo from "./screens/AddTodo"

export default function App() {
	const [todos, setTodos] = useState([])

	const addTodo = (text) => {
		const newTodo = { id: Date.now(), text }
		const updatedTodos = [...todos, newTodo]
		setTodos(updatedTodos)
	}
	const removeTodo = (id) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id)
		setTodos(updatedTodos)
	}

	return (
		<SafeAreaView style={styles.container}>
			<TodoList todos={todos} removeTodo={removeTodo} />
			<AddTodo addTodo={addTodo} />
			<StatusBar style="auto" />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
