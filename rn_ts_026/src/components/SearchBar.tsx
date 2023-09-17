import React, { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import { TextInput } from "react-native-gesture-handler"

interface SearchBarProps {
	placeholder: string
	onChangeText: (text: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ placeholder, onChangeText }) => {
	return (
		<View style={styles.container}>
			<Feather name="search" size={20} color="gray" />
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				onChangeText={onChangeText}
			/>
		</View>
	)
}

export default SearchBar

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		height: 35,
		backgroundColor: "#F0F0F0",
		borderRadius: 10,
		margin: 10,
	},
	input: {
		marginLeft: 5,
		fontSize: 16,
		flex: 1,
	},
})
