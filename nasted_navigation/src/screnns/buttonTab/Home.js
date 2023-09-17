import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

const Home = () => {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Text
				style={styles.button}
				onPress={() => navigation.navigate("Details")}>
				GO Back
			</Text>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		backgroundColor: "#000",
		color: "#fff",
		padding: 12,
		borderRadius: 15,
		marginTop: 10,
	},
})
