import React, { useState, useEffect, useRef } from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"
import Lottie from "lottie-react-native"

const HomeScreen = () => {
	const animation = useRef(null)
	const [index, setIndex] = useState(0)
	useEffect(() => {
		animation.current?.play()
	}, [index])

	const anims = [
		{
			path: require("../../assets/99618-instagram.json"),
			text: `@React Native Instagram`,
		},
		{
			path: require("../../assets/99282-twitter.json"),
			text: `@React Native Twitter`,
		},
		{
			path: require("../../assets/99138-tiktok.json"),
			text: `@React Native Tiktok`,
		},
		{
			path: require("../../assets/98799-facebook.json"),
			text: `@React Native Facebook`,
		},
		{
			path: require("../../assets/98802-youtube.json"),
			text: `@React Native Youtube`,
		},
		{
			path: require("../../assets/89032-victory-sign-baby-astronaut.json"),
			text: `@React Native Astronaut`,
		},
	]

	return (
		<View style={styles.container}>
			<Pressable
				style={styles.press}
				onPress={() => {
					if (index === anims.length - 1) return setIndex(0)
					setIndex((prevState) => prevState + 1)
				}}>
				<View style={styles.box}>
					<Lottie
						autoPlay
						ref={animation}
						source={anims[index].path}
						style={styles.lottie}
					/>
				</View>
				<Text style={styles.text}>{anims[index].text}</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},
	box: {
		marginTop: 170,
		justifyContent: "center",
		alignItems: "center",
	},
	press: {
		flex: 1,
	},
	lottie: {
		width: 300,
		height: 300,
		backgroundColor: "#fff",
	},
	text: {
		fontWeight: "bold",
		fontFamily: "Cochin",
		fontSize: 25,
		color: "#2c3a50",
		textAlign: "center",
	},
})
export default HomeScreen
