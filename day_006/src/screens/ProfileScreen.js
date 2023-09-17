import React from "react"
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from "react-native"

import FadIn from "../constants/FadeIn"

import Lottie from "lottie-react-native"
import { FontAwesome5 } from "@expo/vector-icons"

const ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<FadIn delay={100}>
				<View style={styles.b1}>
					<FontAwesome5 name="arrow-left" size={30} />
				</View>
			</FadIn>

			<ScrollView
				contentContainerStyle={{
					paddingBottom: 20,
				}}>
				<FadIn delay={200}>
					<View style={styles.scrollB}>
						<Image
							source={require("../../assets/imgs/profile.jpg")}
							style={styles.scrollImage}
						/>
						<Text style={styles.scBT1}>Asiä</Text>
						<Text style={styles.scBT2}>Freelance Developer | Daily UI</Text>
					</View>
				</FadIn>

				<FadIn delay={400}>
					<SafeAreaView
						style={{ justifyContent: "center", alignItems: "center" }}>
						<View style={styles.scrollB2}>
							<TouchableOpacity
								style={{
									padding: 12,
									backgroundColor: "#ffeef3",
									borderRadius: 10,
								}}>
								<FontAwesome5 name="github" size={20} color="#d85782" />
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									padding: 12,
									backgroundColor: "#ebf2ff",
									borderRadius: 10,
								}}>
								<FontAwesome5 name="facebook" size={20} color="#2069e6" />
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									padding: 12,
									backgroundColor: "#f7f7f7",
									borderRadius: 10,
								}}>
								<FontAwesome5 name="twitter" size={20} color="#af7bb6" />
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									padding: 12,
									backgroundColor: "#f7f7f7",
									borderRadius: 10,
								}}>
								<FontAwesome5 name="youtube" size={20} color="#0278b7" />
							</TouchableOpacity>
						</View>
					</SafeAreaView>
				</FadIn>
				<FadIn delay={500}>
					<View style={{ justifyContent: "center", alignItems: "center" }}>
						<View style={styles.safeB1}>
							<View>
								<Text style={styles.text1}>12</Text>
								<Text style={styles.text2}>Posts</Text>
							</View>
							<View>
								<Text style={styles.text1}>12.3</Text>
								<Text style={styles.text2}>Followers</Text>
							</View>
							<View>
								<Text style={styles.text1}>101</Text>
								<Text style={styles.text2}>Followings</Text>
							</View>
						</View>
					</View>
				</FadIn>
				<FadIn delay={520}>
					<SafeAreaView>
						<View style={styles.safeImageB}>
							<TouchableOpacity>
								<Image
									source={require("../../assets/imgs/1013-200x200.jpg")}
									style={styles.image}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									source={require("../../assets/imgs/1061-200x200.jpg")}
									style={styles.image}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									source={require("../../assets/imgs/376-200x200.jpg")}
									style={styles.image}
								/>
							</TouchableOpacity>
						</View>
						<View style={styles.safeImageB}>
							<TouchableOpacity>
								<Image
									source={require("../../assets/imgs/392-200x200.jpg")}
									style={styles.image}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									source={require("../../assets/imgs/506-200x200.jpg")}
									style={styles.image}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									source={require("../../assets/imgs/61-200x200.jpg")}
									style={styles.image}
								/>
							</TouchableOpacity>
						</View>
						<View style={styles.safeImageB}>
							<TouchableOpacity>
								<Image
									source={require("../../assets/imgs/716-200x200.jpg")}
									style={styles.image}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									source={require("../../assets/imgs/818-200x200.jpg")}
									style={styles.image}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									source={require("../../assets/imgs/960-200x200.jpg")}
									style={styles.image}
								/>
							</TouchableOpacity>
						</View>
					</SafeAreaView>
				</FadIn>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
	},
	b1: {
		flexDirection: "row",
		paddingVertical: 30,
		paddingHorizontal: 30,
		marginTop: 20,
	},
	scrollB: {
		justifyContent: "center",
		alignItems: "center",
	},
	scrollB2: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		marginTop: 10,
		width: 290,
	},
	scrollB3: {
		padding: 12,
		backgroundColor: "#ffeef3",
	},
	scrollImage: {
		width: 120,
		height: 120,
		borderRadius: 60,
	},
	scBT1: {
		fontFamily: "Cochin",
		fontSize: 25,
		color: "#1f2c3c",
	},
	scBT2: {
		fontFamily: "Cochin",
		fontSize: 15,
		color: "#1f2c3c",
	},
	safeB1: {
		flexDirection: "row",
		width: 290,
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: 20,
	},
	text1: {
		fontSize: 20,
		color: "#1f2c3c",
		textAlign: "center",
	},
	text2: {
		fontSize: 15,
		fontFamily: "Cochin",
		color: "#1f2c3b",
		textAlign: "center",
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 10,
	},
	safeImageB: {
		flexDirection: "row",
		width: 380,
		justifyContent: "space-between",
		marginTop: 20,
	},
})
export default ProfileScreen
