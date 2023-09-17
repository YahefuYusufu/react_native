import React from "react"
import { View, StyleSheet, Text, Image, Dimensions } from "react-native"

import FadeIn from "../constant/FadeIn"
import LottieVie from "lottie-react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import Animated, { FadeInDown, useSharedValue } from "react-native-reanimated"

const width = Dimensions.get("window").width

const MapScreen = () => {
	return (
		<View style={styles.container}>
			<FontAwesome5
				name="map-marker-alt"
				size={40}
				color="#ec121d"
				style={{ position: "absolute", left: 46, top: 250, zIndex: 999 }}
			/>
			<Image
				source={require("../../assets/map.png")}
				style={{ width: width, height: 560 }}
				resizeMode="center"
			/>
			<View style={styles.view}>
				<Image
					source={require("../../assets/image9.jpg")}
					style={{
						position: "absolute",
						top: -40,
						left: width / 2 - 40,
						width: 80,
						height: 80,
						borderRadius: 40,
						borderWidth: 2,
						borderColor: "#ec121d",
					}}
				/>
				<Text
					style={{
						fontSize: 16,
						color: "#000",
						textAlign: "center",
						marginTop: 40,
					}}>
					Jack Black
				</Text>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ fontSize: 16, color: "#000", textAlign: "center" }}>
						Location
					</Text>
					<Text style={{ fontSize: 16, color: "#000", textAlign: "center" }}>
						Delivery Time
					</Text>
					<Text style={{ fontSize: 16, color: "#000", textAlign: "center" }}>
						Tracking Number
					</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	view: {
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 10,
	},
})

export default MapScreen
