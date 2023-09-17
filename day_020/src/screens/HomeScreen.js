import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

import LottieView from "lottie-react-native"
import FadeIn from "../constant/FadeIn"

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<FadeIn delay={300}>
				<LottieView
					autoplay
					style={{
						marginTop: -100,
						marginLeft: -25,
						backgroundColor: "#FFF",
					}}
					source={require("../data/9644-delivery-riding.json")}
				/>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						marginTop: 420,
					}}>
					<Text style={{ fontSize: 16, color: "#000", alignSelf: "center" }}>
						Delivery In Progress!
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: "#000",
							textAlign: "center",
							marginVertical: 20,
						}}>{`Your order is on its way!\nYou can track your order in real time.`}</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate("Map")}
						style={{
							padding: 12,
							backgroundColor: "#ec121d",
							borderRadius: 20,
							width: 260,
						}}>
						<Text style={{ fontSize: 16, color: "#FFF", textAlign: "center" }}>
							Track My Order
						</Text>
					</TouchableOpacity>
				</View>
			</FadeIn>
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

export default HomeScreen
