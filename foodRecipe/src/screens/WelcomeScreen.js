import React, { useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { Image, View } from "react-native"
import Animated, { useSharedValue, withSpring } from "react-native-reanimated"
import { useNavigation } from "@react-navigation/native"

const WelcomeScreen = () => {
	const ringPadding = useSharedValue(0)
	const navigation = useNavigation()

	useEffect(() => {
		ringPadding.value = 0
		setTimeout(
			() => (ringPadding.value = withSpring(ringPadding.value + 29)),
			100
		)
		setTimeout(() => navigation.navigate("Home"), 3500)
	}, [])

	return (
		<View className="flex-1 justify-center items-center space-y-10 bg-slate-400">
			<StatusBar style="light" />
			{/* logo image with rings */}
			<Animated.View
				className="bg-white/20 rounded-full"
				style={{ padding: ringPadding }}>
				<Image
					source={require("../../assets/images/wrap_sandwich.png")}
					style={{ width: 270, height: 270 }}
				/>
			</Animated.View>
		</View>
	)
}

export default WelcomeScreen
