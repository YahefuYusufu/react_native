import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

const Profile = () => {
	const navigation = useNavigation()
	return (
		<View style={styles.view}>
			<Text style={styles.text} onPress={() => navigation.push("Product")}>
				Product
			</Text>
		</View>
	)
}

export default Profile

const styles = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "green",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		padding: 12,
		backgroundColor: "blue",
		color: "white",
	},
})
