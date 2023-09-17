import React, { useState } from "react"
import { View, StyleSheet, Text, TextInput } from "react-native"

import FadeIn from "../constant/FadeIn.js"
import LottieViw from "lottie-react-native"
import { FontAwesome5, Entypo } from "@expo/vector-icons"
import Animated, { FadeInDown } from "react-native-reanimated"

const HomeScreen = () => {
	const [search, setSearch] = useState("")

	const DATA = [
		"food",
		"food chain",
		"food ideas",
		"food menu",
		"food movies",
		"food near me",
		"food photo",
		"food photographer",
		"food reels",
		"food recipes 🍜",
		"food reviews",
	]
	console.log(search)
	return (
		<View style={styles.container}>
			<View style={styles.view}>
				<TextInput
					value={search}
					onChangeText={setSearch}
					placeholder="Looking for.."
					placeholderTextColor={"#fefefe"}
					fontSize={32}
					style={styles.textInput}
				/>
				<View style={{ position: "absolute", top: 80, left: 30 }}>
					{DATA.map((item) => {
						if (
							search.length > 1 &&
							item.startsWith(search.toLocaleLowerCase())
						)
							return (
								<Text style={{ fontSize: 30, color: "#fefefe" }}>{item}</Text>
							)
					})}
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eee",
		justifyContent: "center",
	},
	view: {
		paddingHorizontal: 12,
	},
	textInput: {
		color: "#fefefe",
		height: 80,
		borderBottomWidth: 1,
		borderColor: "#2a2a2a",
		paddingHorizontal: 20,
	},
})

export default HomeScreen
