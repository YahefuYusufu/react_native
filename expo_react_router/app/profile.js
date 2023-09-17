import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { useSearchParams, useRouter } from "expo-router"

const profile = () => {
	const router = useRouter()
	const { name, surname } = useSearchParams()
	console.log(params)
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello</Text>
			<Button title="GO back" onPress={() => router.back()} />
		</View>
	)
}

export default profile

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		textAlign: "center",
		backgroundColor: "red",
	},
})
