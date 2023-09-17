import React from "react"
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Image,
} from "react-native"

import { Ionicons } from "@expo/vector-icons"
import Animated, {
	FadeInUp,
	FadeInDown,
	FadeOutUp,
} from "react-native-reanimated"

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.topView1}>
				<TouchableOpacity>
					<Ionicons name="ellipsis-vertical" size={25} color={"#333950"} />
				</TouchableOpacity>
				<View style={styles.topView2}>
					<TouchableOpacity>
						<Ionicons name="search-outline" size={25} color={"#333950"} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Ionicons
							name="md-chatbubble-outline"
							size={25}
							color={"#333950"}
							style={{ marginLeft: 12 }}
						/>
					</TouchableOpacity>
				</View>
			</View>
			{/* //middle View */}
			<View style={styles.middleView}>
				<View style={styles.middleView1}>
					<Text style={styles.middleViewT1}>Chats</Text>
					<View style={styles.middleView2}>
						<Text style={styles.middleView2T}>2</Text>
					</View>
				</View>

				<ScrollView style={{ marginTop: 20 }}>
					<TouchableOpacity style={styles.touchable}>
						<Image
							source={require("../../assets/imgs/cloth1.jpg")}
							style={styles.image}
						/>
						<View
							style={{
								width: 16,
								height: 16,
								borderRadius: 9,
								backgroundColor: "#13e2ac",
								position: "absolute",
								top: -1,
								left: 40,
								borderWidth: 3,
								borderColor: "#FFF",
							}}
						/>
						<View style={{ marginLeft: 12, flex: 1 }}>
							<Text
								style={{
									fontSize: 18,
									color: "#333950",
								}}>
								Christine Petersen
							</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: -5,
								}}>
								<View
									style={{
										width: 12,
										height: 12,
										borderRadius: 6,
										backgroundColor: "#fe6262",
										marginRight: 8,
										marginBottom: 2,
									}}
								/>
								<Text
									style={{
										fontSize: 14,
										color: "#333950",
										marginTop: 6,
									}}>
									What do you want for lunch?
								</Text>
							</View>
						</View>
						<Text
							style={{
								fontSize: 14,
								color: "#333950",
							}}>
							12:45
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.touchable1}>
						<Image
							source={require("../../assets/imgs/cloth2.jpg")}
							style={styles.image}
						/>
						<View
							style={{
								width: 16,
								height: 16,
								borderRadius: 9,
								backgroundColor: "#13e2ac",
								position: "absolute",
								top: -1,
								left: 40,
								borderWidth: 3,
								borderColor: "#FFF",
							}}
						/>
						<View style={{ marginLeft: 12, flex: 1 }}>
							<Text style={{ fontSize: 18, color: "#333950" }}>Emme Greig</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: -5,
								}}>
								<View
									style={{
										width: 12,
										height: 12,
										borderRadius: 6,
										backgroundColor: "#fe6262",
										marginRight: 8,
										marginBottom: 2,
									}}
								/>
								<Text style={{ fontSize: 14, color: "#333950" }}>
									Wanna join us?😍😍
								</Text>
							</View>
						</View>
						<Text style={{ fontSize: 14, color: "#333950" }}>12:02</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.touchable1}>
						<Image
							source={require("../../assets/imgs/cloth3.jpg")}
							style={styles.image}
						/>
						<View style={{ marginLeft: 12, flex: 1 }}>
							<Text style={{ fontSize: 18, color: "#333950" }}>
								Amelia-Grace Fernandez
							</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: -5,
								}}>
								<Text style={{ fontSize: 14, color: "#333950", marginTop: 6 }}>
									Yes, please ❤️
								</Text>
							</View>
						</View>
						<Text style={{ fontSize: 14, color: "#333950" }}>14:53</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.touchable1}>
						<Image
							source={require("../../assets/imgs/cloth4.jpg")}
							style={styles.image}
						/>
						<View style={{ marginLeft: 12, flex: 1 }}>
							<Text style={{ fontSize: 18, color: "#333950" }}>
								Jayde Novak
							</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: -5,
								}}>
								<Text style={{ fontSize: 14, color: "#333950", marginTop: 6 }}>
									Ok, see you..
								</Text>
							</View>
						</View>
						<Text style={{ fontSize: 14, color: "#333950" }}>10:71</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.touchable1}>
						<Image
							source={require("../../assets/imgs/cloth5.jpg")}
							style={{ width: 50, height: 50, borderRadius: 10 }}
						/>
						<View style={{ marginLeft: 12, flex: 1 }}>
							<Text style={{ fontSize: 18, color: "#333950" }}>Maha Haas</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: -5,
								}}>
								<Text style={{ fontSize: 14, color: "#333950", marginTop: 6 }}>
									Tomorrow, pls.
								</Text>
							</View>
						</View>
						<Text style={{ fontSize: 14, color: "#333950" }}>14:00</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.touchable1}>
						<Image
							source={require("../../assets/imgs/image.jpg")}
							style={styles.image}
						/>
						<View style={{ marginLeft: 12, flex: 1 }}>
							<Text style={{ fontSize: 18, color: "#333950" }}>
								Marvin Sharp
							</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: -5,
								}}>
								<Text style={{ fontSize: 14, color: "#333950", marginTop: 6 }}>
									Done.
								</Text>
							</View>
						</View>
						<Text style={{ fontSize: 14, color: "#333950" }}>14:00</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.touchable1}>
						<Image
							source={require("../../assets/imgs/image01.jpg")}
							style={styles.image}
						/>
						<View style={{ marginLeft: 12, flex: 1 }}>
							<Text style={{ fontSize: 18, color: "#333950" }}>
								Alby Ratliff
							</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: -5,
								}}>
								<Text style={{ fontSize: 14, color: "#333950", marginTop: 6 }}>
									Waiting your email dude
								</Text>
							</View>
						</View>
						<Text style={{ fontSize: 14, color: "#333950" }}>18:00</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.touchable1}>
						<Image
							source={require("../../assets/imgs/image02.jpg")}
							style={styles.image}
						/>
						<View style={{ marginLeft: 12, flex: 1 }}>
							<Text style={{ fontSize: 18, color: "#333950" }}>
								Hendrix Reed
							</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: -5,
								}}>
								<Text style={{ fontSize: 14, color: "#dfe0e3", marginTop: 6 }}>
									Okay, see you man
								</Text>
							</View>
						</View>
						<Text style={{ fontSize: 14, color: "#dfe0e3" }}>21:45</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: "#eee",
	},
	topView1: {
		flexDirection: "row",
		padding: 12,
		justifyContent: "space-between",
	},
	topView2: {
		flexDirection: "row",
	},
	middleView: {
		padding: 12,
	},
	middleView1: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	middleViewT1: {
		fontSize: 28,
		color: "#333950",
	},
	middleView2: {
		width: 35,
		height: 35,
		padding: 5,
		backgroundColor: "#fe6262",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
	middleView2T: {
		fontSize: 20,
		color: "#FFF",
		alignSelf: "center",
		lineHeight: 30,
	},
	touchable: {
		flexDirection: "row",
		alignItems: "center",
	},
	touchable1: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 12,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 10,
	},
})

export default HomeScreen
