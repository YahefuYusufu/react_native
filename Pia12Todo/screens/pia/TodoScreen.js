import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { Button, FlatList, TextInput, TouchableOpacity } from "react-native"
import { StyleSheet, Text, View } from "react-native"
import TodoRow from "./TodoRow"
import TodoHeader from "./TodoHeader"
import TodoError from "./TodoError"

const TodoScreen = ({ navigation, route, errorMessage }) => {
	const [addtodo, setAddtodo] = useState("")

	const [todoitems, setTodoitems] = useState([
		{ key: "meeting", isdone: false },
		{ key: "buy foods", isdone: false },
	])

	const [errormessage, setErrormessage] = useState("")

	useEffect(() => {
		if (route.params?.todoTitle) {
			console.log("adasdasdasdas")
			console.log(route.params.todoTitle)

			const newList = [...todoitems]
			newList[route.params.rownumb].key = route.params.todoTitle
			setTodoitems(newList)
		}
	}, [route.params?.todoTitle])

	function compare(a, b) {
		if (b.isdone) {
			return -1
		}
		if (a.isdone) {
			return 1
		}
		return 0
	}

	function addToTheList() {
		if (addtodo != "") {
			const newtodo = todoitems.concat({ key: addtodo })

			newtodo.sort(compare)

			setTodoitems(newtodo)
			setAddtodo("")
			setErrormessage("")
		} else {
			setErrormessage("You need to enter something!")
		}
	}

	function changeDone(rownumber) {
		const newlist = [...todoitems]

		if (newlist[rownumber].isdone == true) {
			newlist[rownumber].isdone = false
		} else {
			newlist[rownumber].isdone = true
		}

		newlist.sort(compare)

		setTodoitems(newlist)
	}

	const deleteTodo = (id) => {
		const newList = [...todoitems]
		newList.splice(id, 1)
		setTodoitems(newList)
	}

	return (
		<View style={styles.container}>
			<TodoHeader />
			<TodoError errormessage={errormessage} />
			{errormessage != "" && <Text>{errormessage}</Text>}

			<View style={styles.inputButton}>
				<TextInput
					value={addtodo}
					onChangeText={setAddtodo}
					placeholder="Add todo"
					style={styles.textInput}
				/>
				<TouchableOpacity style={styles.Button}>
					<Button
						title="Add"
						onPress={() => {
							addToTheList()
						}}
						color={"white"}
					/>
				</TouchableOpacity>
			</View>

			<FlatList
				data={todoitems}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						onPress={() => {
							navigation.push("TodoDetail", {
								todoItem: item,
								rownumb: index,
							})
						}}>
						<TodoRow
							todoinfo={item}
							todoChangeDone={() => {
								changeDone(index)
							}}
							deleteItem={deleteTodo}
						/>
					</TouchableOpacity>
				)}
			/>

			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	inputButton: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		marginBottom: 20,
	},

	textInput: {
		borderColor: "black",
		borderWidth: 1,
		width: 200,
		margin: 10,
		padding: 10,
		borderRadius: 5,
	},
	Button: {
		backgroundColor: "green",
		borderRadius: 8,
	},
})

export default TodoScreen
