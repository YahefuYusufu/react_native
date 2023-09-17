import React from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const Header = () => {
	return (
		<View style={styles.container}>
			<Pressable>
				<Text style={styles.title}>Edit</Text>
			</Pressable>
			<View style={{ flexDirection: "row", columnGap: 10 }}>
				<Feather name="camera" size={18} color={"#5FA2EF"} />
				<Feather name="edit" size={18} color={"#5FA2EF"} />
			</View>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		marginVertical: 4,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	title: {
		color: "#5FA2EF",
		fontSize: 18,
	},
})
