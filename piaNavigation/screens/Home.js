import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

const Home = () => {
	const navigation = useNavigation()
	return (
		<View style={styles.view}>
			<TouchableOpacity onPress={() => {}}>
				<Text style={styles.text} onPress={() => navigation.push("Profile")}>
					Profile
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "lightblue",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		padding: 12,
		backgroundColor: "blue",
		color: "white",
	},
})
