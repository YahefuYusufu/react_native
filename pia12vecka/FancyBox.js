import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"

const FancyBox = ({ data }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.item}>{data}</Text>
		</View>
	)
}

export default FancyBox

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#00ff00",
		justifyContent: "center",
		alignItems: "center",
		width: 100,
		height: 100,
		marginTop: 5,
	},
	item: {},
})
