import React, { useState } from "react"
import { View, Text, Switch, Dimensions, StyleSheet } from "react-native"

import Animated, {
	useAnimatedStyle,
	interpolateColor,
	useDerivedValue,
	withTiming,
} from "react-native-reanimated"

const Colors = {
	dark: {
		background: "#1E1E1E",
		circle: "#252525",
		text: "#F8F8F8",
	},
	light: {
		background: "#F8F8F8",
		circle: "#FFF",
		text: "#1E1E1E",
	},
}

const SWITCH_TRACK_COLOR = {
	true: "rgba(256,0,256, 0.2)",
	false: "rgba(0,0,0,0.1)",
}
const SIZE = Dimensions.get("window").width * 0.7

const HomeScreen = () => {
	const [theme, setTheme] = useState("light")
	const progress = useDerivedValue(() => {
		return theme === "dark" ? withTiming(1) : withTiming(0)
	}, [theme])

	const rStyle = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			progress.value,
			[0, 1],
			[Colors.dark.background, Colors.light.background]
		)
		return { backgroundColor }
	})

	const rCircleStyle = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			progress.value,
			[0, 1],
			[Colors.light.circle, Colors.dark.circle]
		)
		return { backgroundColor }
	})

	const rTextStyle = useAnimatedStyle(() => {
		const color = interpolateColor(
			progress.value,
			[0, 1],
			[Colors.light.text, Colors.dark.text]
		)
		return { color }
	})

	return (
		<Animated.View style={[styles.view, rStyle]}>
			<Animated.Text style={[{ fontSize: 70, letterSpacing: 14 }, rTextStyle]}>
				Theme
			</Animated.Text>
			<Animated.View
				style={[
					{
						width: SIZE,
						height: SIZE,
						backgroundColor: "#FFF",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: SIZE / 2,
						shadowColor: "#000",
						shadowOffset: {
							width: 0,
							height: 7,
						},
						shadowOpacity: 0.43,
						shadowRadius: 9.51,

						elevation: 15,
					},
					rCircleStyle,
				]}>
				<Switch
					value={theme === "dark"}
					onValueChange={(toggled) => {
						setTheme(toggled ? "dark" : "light")
					}}
					trackColor={SWITCH_TRACK_COLOR}
					thumbColor={"blue"}
				/>
			</Animated.View>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 70,
		letterSpacing: 14,
	},
	view2: {
		width: SIZE,
		height: SIZE,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: SIZE / 2,
		shadowColor: "#000",
	},
})

export default HomeScreen
