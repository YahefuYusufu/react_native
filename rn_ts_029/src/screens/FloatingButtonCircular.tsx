import React from "react"
import { StyleSheet, Text, View, Pressable } from "react-native"
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
	interpolate,
	Extrapolate,
} from "react-native-reanimated"
import { Feather } from "@expo/vector-icons"

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const SIZE = 300
const BUTTON_SIZE = 50
const ANGLE_STEP = 40

const actionButtons = [
	{ iconName: "home", color: "#4CAF50" },
	{ iconName: "search", color: "#FF9800" },
	{ iconName: "users", color: "#2196F3" },
]
const FloatingButtonCircular = () => {
	const animatedProgress = useSharedValue(0)
	const rotation = useSharedValue(0)

	const toggleMenu = () => {
		if (animatedProgress.value === 0) {
			rotation.value = withTiming(45, { duration: 200 })
			animatedProgress.value = withTiming(1, { duration: 300 })
		} else {
			rotation.value = withTiming(0, { duration: 200 })
			animatedProgress.value = withTiming(0, { duration: 300 })
		}
	}

	const containerAnimatedStyle = useAnimatedStyle(() => {
		const width = interpolate(
			animatedProgress.value,
			[0, 1],
			[BUTTON_SIZE, SIZE],
			Extrapolate.CLAMP
		)
		const height = interpolate(
			animatedProgress.value,
			[0, 1],
			[BUTTON_SIZE, SIZE],
			Extrapolate.CLAMP
		)
		const bottom = interpolate(animatedProgress.value, [0, 1], [50, -SIZE / 3])
		const right = interpolate(animatedProgress.value, [0, 1], [25, -SIZE / 3])
		return {
			width,
			height,
			bottom,
			right,
		}
	})

	const getActionButtonAnimatedStyles = (index: number) => {
		return useAnimatedStyle(() => {
			const angleOffset = 32
			const angle =
				180 -
				(index * ANGLE_STEP * Math.PI) / 180 +
				(angleOffset * Math.PI) / 180
			const radius = (SIZE / 3) * animatedProgress.value

			const translateX = radius * Math.cos(angle)
			const translateY = radius * Math.sin(angle)

			return {
				transform: [{ translateX }, { translateY }],
				opacity: animatedProgress.value,
			}
		})
	}
	const buttonAStyle = useAnimatedStyle(() => {
		return {
			transform: [{ rotate: `${rotation.value}deg` }],
		}
	})
	return (
		<>
			<Animated.View style={[styles.container, containerAnimatedStyle]}>
				{actionButtons.map((icon, index) => {
					const actionButtonAnimatedStyles =
						getActionButtonAnimatedStyles(index)
					return (
						<AnimatedPressable
							key={index}
							onPress={toggleMenu}
							style={[styles.actionButton, actionButtonAnimatedStyles]}>
							<Feather name={icon.iconName} color={"white"} size={25} />
						</AnimatedPressable>
					)
				})}
			</Animated.View>

			<AnimatedPressable
				style={[styles.button, buttonAStyle]}
				onPress={toggleMenu}>
				<Feather name="plus" color={"white"} size={25} />
			</AnimatedPressable>
		</>
	)
}
export default FloatingButtonCircular

const styles = StyleSheet.create({
	container: {
		borderRadius: SIZE / 2,
		backgroundColor: "rgba(1,123,254,0.8)",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
	},
	button: {
		width: BUTTON_SIZE,
		height: BUTTON_SIZE,
		borderRadius: BUTTON_SIZE / 2,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(1,123,254,1)",
		position: "absolute",
		bottom: 50,
		zIndex: 2,
		right: 25,
	},
	actionButton: {
		width: BUTTON_SIZE,
		height: BUTTON_SIZE,
		borderRadius: BUTTON_SIZE / 2,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
	},
})
