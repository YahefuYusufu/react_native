import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"
import React, { useState } from "react"

const Exe01 = () => {
	const [numberOne, setNumberOne] = useState(0)

	const increase = () => {
		setNumberOne((prev) => prev + 1)
	}
	const decrease = () => {
		setNumberOne((prev) => prev - 1)
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.firstText}>{numberOne}</Text>
			</View>
			<View style={styles.middle}>
				<TextInput
					value={numberOne}
					style={styles.textInput}
					onChangeText={setNumberOne}
				/>
				<Text style={styles.secondText}>{numberOne}</Text>
				<View style={styles.buttonView}>
					<TouchableOpacity>
						<Text style={styles.button1} onPress={() => increase()}>
							+
						</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.button2} onPress={() => decrease()}>
							-
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default Exe01

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		width: "100%",
		height: "20%",
		backgroundColor: "blue",
		justifyContent: "center",
		alignItems: "center",
	},
	firstText: {
		color: "#fff",
		fontSize: 24,
	},
	textInput: {
		marginBottom: 40,
		backgroundColor: "#fff",
		padding: 12,
		fontSize: 24,
		borderWidth: 4,
		borderColor: "red",
	},
	middle: {
		width: "100%",
		height: "80%",
		backgroundColor: "green",
		justifyContent: "center",
		alignItems: "center",
	},
	secondText: {
		color: "#fff",
		fontSize: 24,
	},
	buttonView: {
		marginTop: 15,
		flexDirection: "row",
	},
	button1: {
		fontSize: 46,
		marginRight: 32,
		backgroundColor: "#fff",
		padding: 8,
	},
	button2: {
		fontSize: 52,
		backgroundColor: "#fff",
		padding: 8,
	},
})
