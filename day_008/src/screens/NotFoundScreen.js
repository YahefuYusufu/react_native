import React, { useRef } from "react"
import { View, StyleSheet, Text } from "react-native"

import { LottieView } from "lottie-react-native"

const NotFoundScreen = () => {
	return (
		<View style={styles.view}>
			<LottieView
				autoPlay
				style={{}}
				source={require("../data/84918-404-error-doodle-animation.json")}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#fff",
	},
})

export default { NotFoundScreen }
