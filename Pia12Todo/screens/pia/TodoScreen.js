import { StatusBar } from "expo-status-bar"
import { useEffect, useRef, useState } from "react"
import {
	ActivityIndicator,
	Button,
	FlatList,
	Platform,
	SafeAreaView,
	Switch,
	TextInput,
	TouchableOpacity,
} from "react-native"
import { StyleSheet, Text, View } from "react-native"
import TodoRow from "./TodoRow"
import TodoHeader from "./TodoHeader"
import TodoError from "./TodoError"

const TodoScreen = ({ navigation, route, errorMessage }) => {
	const [addtodo, setAddtodo] = useState("")
	const textRef = useRef()

	const [todoitems, setTodoitems] = useState([
		{ key: "meeting", isdone: false },
		{ key: "buy foods", isdone: false },
	])

	const [errormessage, setErrormessage] = useState("")

	const [listType, setListType] = useState()
	const [letsGo, setLetsGo] = useState(false)

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
		<SafeAreaView style={styles.container}>
			<TodoHeader />
			<Switch value={letsGo} onValueChange={setLetsGo} />
			<TodoError errormessage={errormessage} />
			{errormessage != "" && <Text>{errormessage}</Text>}

			<View style={styles.inputButton}>
				<TextInput
					ref={textRef}
					value={addtodo}
					onChangeText={setAddtodo}
					placeholder="Add todo"
					style={styles.textInput}
					secureTextEntry={false}
					inputMode="text"
					onSubmitEditing={() => {
						addToTheList()
					}}
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

			{Platform.OS === "ios" && <Text>IOS</Text>}

			<View style={{ backgroundColor: "#00ff00", height: 200, width: 200 }}>
				<View
					style={{
						backgroundColor: "#000000",
						position: "absolute",
						top: 0,
						height: "100%",
						width: "100%",
						opacity: 0.5,
					}}>
					<Text style={{ color: "#fff" }}>Loading...</Text>
					<ActivityIndicator size={20} />
				</View>
			</View>
			<StatusBar style="light" />
		</SafeAreaView>
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
