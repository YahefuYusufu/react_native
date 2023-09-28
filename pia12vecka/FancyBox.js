import { Button, FlatList, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"

const FancyBox = (props) => {
	const [number, setNumber] = useState(0)
	return (
		<View style={styles.container}>
			<Text style={styles.item}>{props.name}</Text>
			<Text style={styles.item}>{number}</Text>
			<Button
				title="click"
				onPress={() => {
					setNumber(number + 1)
				}}
			/>
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
