import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

const Uppgift = () => {
	const [number, setNumber] = useState(0)
	//increase the number
	const increaseHandler = () => {
		if (number >= 10) {
			return
		} else {
			setNumber(number + 1)
		}
	}
	//decrease the number
	const decreaseHandler = () => {
		if (number <= 0) {
			return
		} else {
			setNumber(number - 1)
		}
	}
	//reset the number
	//reset the number
	//reset the number
	const resetButtonHandler = () => {
		setNumber(0)
	}

	return (
		<View style={styles.container}>
			<View style={styles.buttons}>
				<Text style={styles.plus} onPress={() => increaseHandler()}>
					+
				</Text>
				<Text style={styles.result}>{number}</Text>
				<Text style={styles.minus} onPress={() => decreaseHandler()}>
					-
				</Text>
			</View>
			<TouchableOpacity>
				<Text style={styles.restButton} onPress={() => resetButtonHandler()}>
					Rest
				</Text>
			</TouchableOpacity>
		</View>
	)
}

// * Larger number in the center of the screen
// * Button with the text "Plus" above the number. Pressing the button increases the number by 1.
// * Button with text "Minus" below the number. Pressing the button decreases the number by 1.
// * At the bottom is the "Reset" button which sets the number to zero.
// * It should not be possible to reduce to less than zero.
// * It should not be possible to increase to more than 10.
export default Uppgift

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	result: {
		fontSize: 72,
	},
	buttons: {
		flexDirection: "column",
		marginTop: 24,
	},
	plus: {
		fontSize: 32,
		marginRight: 32,
		padding: 12,
		borderRadius: 15,
	},
	minus: {
		fontSize: 32,
		padding: 12,
		borderRadius: 15,
	},
	restButton: {
		fontSize: 32,
		marginTop: 24,
		backgroundColor: "gray",
		textAlign: "center",
		padding: 8,
	},
})
