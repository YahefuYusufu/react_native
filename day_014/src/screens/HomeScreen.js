import React, { useState } from "react"
import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native"

import { FontAwesome5 } from "@expo/vector-icons"
import Animated, {
	FadeIn,
	FadeInDown,
	FadeOutUp,
} from "react-native-reanimated"
import { CountdownCircleTimer } from "react-native-countdown-circle-timer"

const HomeScreen = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [key, setKey] = useState(0)

	return (
		<SafeAreaView style={styles.safe}>
			<CountdownCircleTimer
				key={key}
				isPlaying={isPlaying}
				duration={10}
				colors={["#27ae60", "#16a085", "#f39c12", "#d35400", "#c0392b"]}
				colorsTime={[8, 6, 4, 2, 0]}
				size={380}
				strokeWidth={25}
				onComplete={() => setIsPlaying(false)}>
				{({ remainingTime }) => (
					<Text
						style={{
							fontSize: 100,
							color: "#FFF",
						}}>
						{remainingTime == 10 ? "00:10" : "00:0" + remainingTime}
					</Text>
				)}
			</CountdownCircleTimer>
			<TouchableOpacity
				style={styles.touch}
				onPress={() => {
					setKey((prev) => prev + 1), setIsPlaying(true)
				}}>
				<FontAwesome5
					name={isPlaying ? "pause" : "play"}
					size={24}
					color="blue"
					style={styles.icon}
				/>
				<Text style={styles.text}> {isPlaying ? "pause" : "play"}</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: "#34495e",
		justifyContent: "center",
		alignItems: "center",
	},
	touch: {
		width: 150,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 8,
		backgroundColor: "#ecf0f3",
		borderRadius: 10,
		marginTop: 30,
	},
	icon: {
		marginRight: 8,
	},
	text: {
		fontSize: 24,
		color: "#34495e",
	},
})

export default HomeScreen
