import {
	Button,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native"
import React, { useState } from "react"
import FancyBox from "../../FancyBox"

const data = [
	{ key: "Devin", lastName: "David", age: "32" },
	{ key: "Dan", lastName: "David", age: "32" },
	{ key: "Dominic", lastName: "David", age: "32" },
	{ key: "Jackson", lastName: "David", age: "32" },
	{ key: "James", lastName: "David", age: "32" },
	{ key: "Joel", lastName: "David", age: "32" },
	{ key: "John", lastName: "David", age: "32" },
	{ key: "Jillian", lastName: "David", age: "32" },
	{ key: "Jimmy", lastName: "David", age: "32" },
	{ key: "Julie", lastName: "David", age: "32" },
]

const week3 = () => {
	const [addName, setAddName] = useState("Yusuf")
	const [people, setPeople] = useState()
	return (
		<View style={styles.container}>
			<TextInput
				onChange={setAddName}
				value={addName}
				style={styles.textInput}
			/>
			<Button
				title="click me"
				onPress={() => {
					setAddName("prg")
				}}
			/>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<Text style={styles.item}>
						<FancyBox data={item.key} style={styles.item} />
					</Text>
				)}
			/>
		</View>
	)
}

export default week3

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 52,
	},
	item: {
		padding: 10,
		fontSize: 18,
	},
	textInput: {
		backgroundColor: "#00ff",
		padding: 12,
		borderRadius: 15,
		color: "#fff",
	},
})
