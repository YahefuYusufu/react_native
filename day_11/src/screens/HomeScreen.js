import React, { useState, useEffect } from "react"
import {
	View,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	Text,
} from "react-native"

import LottieScreen from "lottie-react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import Animated, {
	FadeInUp,
	FadeInDown,
	FadeOutUp,
} from "react-native-reanimated"

const HomeScreen = () => {
	const [key, setKey] = useState(null)

	const modal = {
		SUCCESS: {
			text: "Success!",
			description: "This is a success toast!",
			backgroundColor: "#2ecc71",
			icon: "check-circle",
		},
		DANGER: {
			text: "Danger!",
			description: "This is a danger toast!",
			backgroundColor: "#e74c3c",
			icon: "exclamation-circle",
		},
		INFO: {
			text: "Info!",
			description: "This is a info toast!",
			backgroundColor: "#3498db",
			icon: "info-circle",
		},
		WARNING: {
			text: "Warning!",
			description: "This is a warning toast!",
			backgroundColor: "#f39c12",
			icon: "exclamation-triangle",
		},
	}

	useEffect(() => {
		if (key) {
			const timer = setTimeout(() => {
				setKey(null)
			}, 1200)
			return () => clearTimeout(timer)
		}
	}, [key])

	return (
		<SafeAreaView style={styles.safe}>
			{/* //Modal */}
			{key !== null && (
				<Animated.View
					style={{
						position: "absolute",
						bottom: 20,
						backgroundColor: modal[key].backgroundColor,
						borderRadius: 10,
						padding: 12,
						flexDirection: "row",
						alignItems: "center",
						shadowColor: "#000",
						shadowOffset: {
							width: 0,
							height: 2,
						},
						shadowOpacity: 0.25,
						shadowRadius: 3.84,
						elevation: 5,
					}}
					entering={FadeInUp.delay(200)}
					exiting={FadeOutUp}>
					<FontAwesome5 name={modal[key].icon} size={40} color="#fff" />
					<View style={styles.animaView}>
						<Text style={styles.animaViewT1}>{modal[key].text}</Text>
						<Text style={styles.animaViewT2}>{modal[key].description}</Text>
					</View>
				</Animated.View>
			)}

			{/* //touchButton */}
			<TouchableOpacity
				onPress={() => setKey("SUCCESS")}
				style={styles.success}>
				<Text style={{ fontSize: 18, color: "#FFF" }}>Success</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setKey("DANGER")} style={styles.danger}>
				<Text style={{ fontSize: 18, color: "#FFF" }}>Danger</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setKey("INFO")} style={styles.info}>
				<Text style={{ fontSize: 18, color: "#FFF" }}>Info</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => setKey("WARNING")}
				style={styles.warning}>
				<Text style={{ fontSize: 18, color: "#FFF" }}>Warning</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		padding: 12,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},

	success: {
		width: 200,
		paddingVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#2ecc71",
		borderRadius: 10,
		marginBottom: 12,
	},
	danger: {
		width: 200,
		paddingVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#e74c3c",
		borderRadius: 10,
		marginBottom: 12,
	},
	info: {
		width: 200,
		paddingVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#3498db",
		borderRadius: 10,
		marginBottom: 12,
	},
	warning: {
		width: 200,
		paddingVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f39c12",
		borderRadius: 10,
		marginBottom: 12,
	},
	animaView: {
		marginLeft: 12,
	},
	animaViewT1: {
		fontSize: 18,
		color: "#fff",
	},
	animaViewT2: {
		fontSize: 18,
		color: "#fff",
		marginTop: -5,
	},
})

export default HomeScreen
