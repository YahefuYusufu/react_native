import React from "react"
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	Image,
	TextInput,
} from "react-native"

import FadeIn from "../constants/FadeIn"
import { FontAwesome5 } from "@expo/vector-icons"

const ProductScreen = () => {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.topV}>
				<TouchableOpacity>
					<FontAwesome5 name="angle-left" size={24} color={"black"} />
				</TouchableOpacity>
				<Text style={styles.topVT}>Product Details</Text>
				<TouchableOpacity>
					<FontAwesome5 name="ellipsis-v" size={24} color={"#000"} />
				</TouchableOpacity>
			</View>
			{/* //middle view */}
			<View style={styles.middleV}>
				<FadeIn delay={300}>
					<Image
						source={require("../../assets/imgs/cloth4.jpg")}
						style={styles.middleVImage}
					/>
				</FadeIn>
				{/* //FadeIn 2 */}
				<FadeIn>
					<View style={styles.fadeIn2View1}>
						<Text style={styles.fadeIn2ViewT}>Free shipping</Text>
						<TouchableOpacity>
							<FontAwesome5 name="heart" size={24} color="#62686d" />
						</TouchableOpacity>
					</View>
					{/* fadeIn2View2 */}
					<View style={styles.fadeIn2View2}>
						<Text style={styles.fadeIn2View2T1}>Polarized Sunglasses</Text>
						<Text style={styles.fadeIn2View2T2}>
							Madison Avenue Retro Polarized Sunglasses with Magic Foldable Case
							for Women UV Protection,Classic Designer Style Glasses
						</Text>
						<Text style={styles.fadeIn2View2T3}>$99</Text>
					</View>
					{/* fadeIn2View3 */}
					<View style={styles.fadeIn2View3}>
						<Text style={styles.fadeIn2View3T}>
							Have a coupon code? Enter here
						</Text>
						<View style={styles.fadeIn2View3V}>
							<TextInput style={styles.fadeIn2View3VInput} />
							<Text style={styles.fadeIn2View1}>Available</Text>
						</View>
					</View>
				</FadeIn>

				{/* footer */}
				<FadeIn delay={900}>
					<TouchableOpacity style={styles.footerTouch}>
						<Text style={styles.footerText}>Add To Cart</Text>
					</TouchableOpacity>
				</FadeIn>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: "#fff",
	},
	topV: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 12,
	},
	topVT: {
		fontSize: 16,
		color: "#000",
		marginLeft: 8,
	},
	middleV: {
		padding: 12,
	},
	middleVImage: {
		width: "100%",
		height: 300,
		borderRadius: 10,
	},
	fadeIn2View1: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 12,
	},
	fadeIn2ViewT: {
		fontSize: 12,
		color: "#fff",
		backgroundColor: "#3cc7a6",
		paddingHorizontal: 8,
		borderRadius: 15,
	},
	fadeIn2View2: {
		marginTop: 12,
	},
	fadeIn2View2T1: {
		fontSize: 24,
		color: "#000",
	},
	fadeIn2View2T2: {
		fontSize: 12,
		color: "#62686d",
	},
	fadeIn2View2T3: {
		fontSize: 24,
		color: "#000",
		marginTop: 12,
		marginLeft: "auto",
	},
	fadeIn2View3: {
		marginTop: 12,
	},
	fadeIn2View3T: {
		fontSize: 12,
		color: "#62686d",
	},
	fadeIn2View3V: {
		padding: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderColor: "#f8faf9",
		borderWidth: 2,
		borderRadius: 10,
		backgroundColor: "#eee",
	},
	fadeIn2View3VInput: {
		fontSize: 12,
		flex: 1,
	},
	fadeIn2View3VT: {
		fontSize: 12,
		color: "#3cc7a6",
	},
	footerTouch: {
		marginTop: 20,
		alignSelf: "center",
		backgroundColor: "#3cc7a6",
		paddingHorizontal: 8,
		borderRadius: 5,
		paddingVertical: 8,
		width: 200,
		justifyContent: "center",
		alignItems: "center",
	},
	footerText: {
		fontSize: 20,
		color: "#fff",
	},
})

export default ProductScreen
