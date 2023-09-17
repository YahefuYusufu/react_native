import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React from "react"

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/images/welcome1.png")}
				style={styles.image}
			/>
			<Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
				40K+ Premium Recipes
			</Text>

			<Text
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 44,
					marginBottom: 40,
				}}>
				Cook Like A Chef
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default WelcomeScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	image: {
		marginTop: 30,
		height: 230,
		width: 230,
	},
})
