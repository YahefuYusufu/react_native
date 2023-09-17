import React from "react"
import {
	View,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	Image,
	Text,
} from "react-native"

import FadeIn from "../constants/FadeIn"
import LottieView from "lottie-react-native"
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons"

const SettingScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={{ padding: 12 }}>
				<FadeIn delay={300}>
					<View style={styles.view2}>
						<Image
							source={require("../../assets/imgs/image.jpg")}
							style={styles.image}
						/>
						<View style={styles.singleView} />
						<View style={styles.textView}>
							<Text style={styles.text1}>John Deo</Text>
							<Text style={styles.text2}>rhino@gmail.com</Text>
						</View>
					</View>
				</FadeIn>
				<FadeIn delay={600}>
					<View style={styles.touchViewContainer}>
						<TouchableOpacity style={styles.touch1}>
							<View style={styles.touchView}>
								<MaterialIcons
									name={"notifications-none"}
									size={20}
									color={"#ff9844"}
								/>
							</View>
							<Text style={styles.touchText}>Notifications</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.touch2}>
							<View style={styles.touchView}>
								<MaterialIcons name={"lock-open"} size={20} color={"#8300ff"} />
							</View>
							<Text style={styles.touchText}>Privacy</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.touch2}
							onPress={() => {
								navigation.navigate("Security")
							}}>
							<View style={styles.touchView}>
								<MaterialIcons name={"security"} size={20} color={"#32b1b7"} />
							</View>
							<Text style={styles.touchText}>Security</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.touch2}>
							<View style={styles.touchView}>
								<MaterialIcons name={"chat"} size={20} color={"#ff4339"} />
							</View>
							<Text style={styles.touchText}>Chat</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.touch2}>
							<View style={styles.touchView}>
								<MaterialIcons
									name={"notifications-none"}
									size={20}
									color={"#097fc3"}
								/>
							</View>
							<Text style={styles.touchText}>Help</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.touch2}>
							<View style={styles.touchView}>
								<MaterialIcons name={"report"} size={20} color={"#91ec1d"} />
							</View>
							<Text style={styles.touchText}>Report</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.touch2}>
							<View style={styles.touchView}>
								<MaterialIcons
									name={"no-backpack"}
									size={20}
									color={"#fe00f9"}
								/>
							</View>
							<Text style={styles.touchText}>Logout</Text>
						</TouchableOpacity>
					</View>
				</FadeIn>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0b0f20",
	},
	view2: {
		flexDirection: "row",
		marginTop: 40,
		paddingBottom: 30,
		borderBottomColor: "#6e7e87",
		borderBottomWidth: 0.5,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	singleView: {
		width: 20,
		height: 20,
		backgroundColor: "#00a5ff",
		borderRadius: 10,
		position: "absolute",
		left: 75,
		borderColor: "#0b0f20",
		borderWidth: 2,
	},
	textView: {
		marginLeft: 20,
		justifyContent: "center",
	},
	text1: {
		fontSize: 18,
		fontFamily: "Poppins-Medium",
		color: "#fff",
	},
	text2: {
		fontSize: 16,
		fontFamily: "Poppins-Medium",
		color: "#6e7e87",
	},
	touchViewContainer: {
		marginTop: 30,
	},
	touch1: {
		flexDirection: "row",
	},
	touch2: {
		flexDirection: "row",
		marginTop: 10,
	},
	touchView: {
		backgroundColor: "#3b2924",
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 25,
	},
	touchText: {
		fontSize: 18,
		fontFamily: "Poppins-Regular",
		color: "#fff",
		alignSelf: "center",
		marginLeft: 10,
	},
})

export default SettingScreen
