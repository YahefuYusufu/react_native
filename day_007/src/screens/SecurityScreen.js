import React from "react"
import {
	View,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	Text,
} from "react-native"

import FadeIn from "../constants/FadeIn"

import LottieView from "lottie-react-native"
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons"

const SecurityScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.viewContainer}>
				<FadeIn delay={300}>
					<View style={styles.viewFirst}>
						<TouchableOpacity onPress={() => navigation.navigate("Setting")}>
							<FontAwesome5 name="arrow-left" size={20} color={"#fff"} />
						</TouchableOpacity>
						<Text style={styles.text}>Security</Text>
					</View>
				</FadeIn>

				<FadeIn delay={600}>
					<View style={styles.view2}>
						<TouchableOpacity style={styles.touch1}>
							<View style={styles.touchView}>
								<MaterialIcons name="vpn-key" size={20} color={"#ff9844"} />
							</View>
							<Text style={styles.text}>Password</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.touch2}>
							<View style={styles.touchView}>
								<MaterialIcons
									name="verified-user"
									size={20}
									color={"#8300ff"}
								/>
							</View>
							<Text style={styles.text}>Login Activity</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.touch2}>
							<View style={styles.touchView}>
								<MaterialIcons
									name="phonelink-lock"
									size={20}
									color={"#32b1b7"}
								/>
							</View>
							<Text style={styles.text}>2F Authentication</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.touch2}>
							<View style={styles.touchView}>
								<MaterialIcons name="email" size={20} color={"#ffe03b"} />
							</View>
							<Text style={styles.text}>Email Activity</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.touch2}>
							<View style={styles.touchView}>
								<MaterialIcons name="history" size={20} color={"#fe00f9"} />
							</View>
							<Text style={styles.text}>Access Data</Text>
						</TouchableOpacity>
					</View>
				</FadeIn>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#0b0f20",
	},
	viewContainer: {
		padding: 12,
	},
	viewFirst: {
		flexDirection: "row",
		marginTop: "40",
		paddingBottom: 30,
		borderBottomColor: "#6e7e87",
		borderBottomWidth: 0.5,
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		fontFamily: "Poppins-Medium",
		marginLeft: 20,
		color: "#fff",
	},
	view2: {
		marginTop: 20,
	},
	touch1: {
		flexDirection: "row",
	},

	touch2: {
		flexDirection: "row",
		marginTop: 20,
	},
	touchView: {
		backgroundColor: "#3b2924",
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 25,
	},
	text: {
		fontSize: 18,
		fontFamily: "Poppins-Regular",
		color: "#fff",
		alignSelf: "center",
		marginLeft: 10,
	},
})

export default SecurityScreen
