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
import { StatusBar } from "expo-status-bar"

const week3 = () => {
	const [addName, onAddName] = useState("prg")

	const [people, setPeople] = useState([{ key: "Xerxes", lastName: "prg" }])

	const letsAddPerson = () => {
		if (addName != "") {
			const newList = people.concat({ key: addName, lastName: addName })
			setPeople(newList)
		}
	}

	return (
		<View style={styles.container}>
			<TextInput
				onChange={onAddName}
				value={addName}
				style={styles.textInput}
			/>

			<Button
				title="Add till"
				onPress={() => {
					letsAddPerson()
				}}
			/>

			<FlatList
				data={people}
				renderItem={({ item }) => (
					<FancyBox key={item.key} name={item.lastName} />
				)}
			/>

			<StatusBar style="auto" />
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
	button: {
		marginTop: 30,
	},
})
