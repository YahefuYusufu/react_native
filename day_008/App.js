import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import LottieView from "lottie-react-native"
import React from "react"

const App = () => {
	const animation = React.useRef(null)
	return (
		<View style={styles.container}>
			<View style={{ flex: 1, backgroundColor: "#FFF" }}>
				<LottieView
					autoPlay
					ref={animation}
					source={require("./84918-404-error-doodle-animation.json")}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignContent: "center",
	},
})
export default App
