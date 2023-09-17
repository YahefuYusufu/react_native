import React, { useState } from "react"
import {
	View,
	StyleSheet,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	Modal,
} from "react-native"

import FadeIn from "../constants/FadeIn"
import { LottieView } from "lottie-react-native"
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons"

const ShareScreen = () => {
	const [isModalVisible, setIsModalVisible] = useState(true)

	return (
		<View style={{ flex: 1, backgroundColor: "#FFF", marginTop: 30 }}>
			<View style={{ padding: 12 }}>
				<Text style={{ fontSize: 20, color: "#000", textAlign: "center" }}>
					Elon 🅱️
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						marginTop: 10,
					}}>
					<Image
						source={require("../../assets/imgs/elon.jpg")}
						style={{ width: 30, height: 30, borderRadius: 25 }}
					/>
					<Text
						style={{
							fontSize: 18,
							color: "#000",
							marginLeft: 10,
						}}>
						Elon's Space Party
					</Text>
				</View>
			</View>

			<View style={{ paddingHorizontal: 12, paddingVertical: 20 }}>
				<Image
					source={require("../../assets/imgs/elon2.jpg")}
					style={{
						width: 370,
						height: 370,
						borderRadius: 20,
						marginBottom: 20,
					}}
				/>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						marginBottom: 20,
					}}>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<MaterialIcons name="timer" size={35} color="black" />
						<View>
							<Text
								style={{
									fontSize: 18,
									color: "#000",
									marginLeft: 10,
								}}>
								Ending in
							</Text>
							<Text
								style={{
									fontSize: 18,
									color: "#000",
									marginLeft: 10,
									marginTop: 4,
								}}>
								8h 41m
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<FontAwesome5 name="ethereum" size={35} color="black" />
						<View>
							<Text
								style={{
									fontSize: 18,
									color: "#000",
									marginLeft: 10,
								}}>
								Highest bid
							</Text>
							<Text
								style={{
									fontSize: 18,
									color: "#000",
									marginLeft: 10,
									marginTop: 8,
								}}>
								0.5 ETH
							</Text>
						</View>
					</View>
				</View>

				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<TouchableOpacity
						style={{
							paddingHorizontal: 8,
							paddingVertical: 6,
							borderWidth: 1,
							borderColor: "#2069e6",
							borderRadius: 10,
							width: 180,
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text
							style={{
								fontSize: 18,
								color: "#000",
								textAlign: "center",
							}}>
							Place Bid
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							paddingHorizontal: 8,
							paddingVertical: 6,
							borderWidth: 1,
							borderColor: "#2069e6",
							borderRadius: 10,
							width: 180,
							justifyContent: "center",
							alignItems: "center",
						}}
						onPress={() => setIsModalVisible(true)}>
						<Text
							style={{
								fontSize: 18,
								color: "#000",
								textAlign: "center",
							}}>
							Share
						</Text>
					</TouchableOpacity>
				</View>
			</View>

			<Modal
				style={{ flex: 1 }}
				visible={isModalVisible}
				transparent={true}
				onRequestClose={() => setIsModalVisible(false)}
				animationType={"fade"}>
				<View
					style={{
						flex: 1,
						justifyContent: "flex-end",
						backgroundColor: "rgba(26,26,26,0.5)",
					}}>
					<View
						style={{
							height: 300,
							backgroundColor: "#fff",
							borderTopRightRadius: 25,
							borderTopLeftRadius: 25,
							paddingHorizontal: 25,
							paddingVertical: 25,
						}}>
						<Text
							style={{
								fontSize: 18,
								color: "#000",
								textAlign: "center",
							}}>
							Share with a friend
						</Text>

						<View
							style={{
								flexDirection: "row",
								justifyContent: "center",
								marginTop: 12,
							}}>
							<View
								style={{
									padding: 12,
									backgroundColor: "#ebf2ff",
									borderRadius: 10,
								}}>
								<FontAwesome5 name="twitter" size={20} color="#2069e6" />
							</View>

							<View
								style={{
									padding: 12,
									backgroundColor: "#ebf2ff",
									borderRadius: 10,
									marginLeft: 10,
								}}>
								<FontAwesome5 name="whatsapp" size={20} color="#2069e6" />
							</View>

							<View
								style={{
									padding: 12,
									backgroundColor: "#ebf2ff",
									borderRadius: 10,
									marginLeft: 10,
								}}>
								<FontAwesome5 name="facebook" size={20} color="#2069e6" />
							</View>

							<View
								style={{
									padding: 12,
									backgroundColor: "#ebf2ff",
									borderRadius: 10,
									marginLeft: 10,
								}}>
								<FontAwesome5 name="instagram" size={20} color="#2069e6" />
							</View>
						</View>

						<View>
							<Text
								style={{
									fontSize: 18,
									color: "#000",
									marginTop: 12,
								}}>
								Copy the link:
							</Text>
							<Text
								style={{
									fontSize: 18,
									color: "#2069e6",
								}}>
								https://shorturl.at/evA09
							</Text>
						</View>

						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								marginTop: 12,
							}}>
							<TouchableOpacity
								style={{
									paddingHorizontal: 8,
									paddingVertical: 6,
									borderWidth: 1,
									borderColor: "#2069e6",
									borderRadius: 10,
									width: 165,
									justifyContent: "center",
									alignItems: "center",
								}}
								onPress={() => setIsModalVisible(false)}>
								<Text
									style={{
										fontSize: 18,
										color: "#000",
										textAlign: "center",
									}}>
									Cancel
								</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									paddingHorizontal: 8,
									paddingVertical: 6,
									borderWidth: 1,
									backgroundColor: "#2069e6",
									borderColor: "#2069e6",
									borderRadius: 10,
									width: 165,
									justifyContent: "center",
									alignItems: "center",
								}}
								onPress={() => setIsModalVisible(true)}>
								<Text
									style={{
										fontSize: 18,
										color: "#FFF",
										textAlign: "center",
									}}>
									Share
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: "#fff",
	},
	view1: {
		padding: 12,
	},
	text1: {
		fontSize: 20,
		color: "#000",
	},
	view2: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
	},
	image: {
		width: 30,
		height: 30,
		borderRadius: 25,
	},
	text2: {
		fontSize: 18,
		color: "#000",
		marginLeft: 10,
	},
	//View 3
	view3: {
		paddingHorizontal: 12,
	},
	view3Image: {
		width: 370,
		height: 370,
		borderRadius: 20,
		marginTop: 20,
	},
	view4: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginBottom: 20,
	},
	view5: {
		flexDirection: "row",
		alignItems: "center",
	},
	view5Text: {
		fontSize: 18,
		color: "#000",
		marginLeft: 10,
	},
	view6: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	view6Touch: {
		width: 180,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderWidth: 1,
		borderColor: "#2069e6",
		borderRadius: 10,
	},
	view6TouchText: {
		textAlign: "center",
		fontSize: 18,
		color: "#000",
	},
	//modal
	modal: {
		flex: 1,
	},
	view1: {
		flex: 1,
		justifyContent: "flex-end",
		backgroundColor: "rgba(26,26,26,0.5)",
	},
	view2: {
		height: 300,
		backgroundColor: "#eee",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		paddingHorizontal: 25,
		paddingVertical: 25,
	},
	view2Text: {
		fontSize: 18,
		color: "#000",
		textAlign: "center",
	},
	viewIcons: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 12,
	},
	iconsColor: {
		color: "#2069e6",
	},
	touchIcon: {
		padding: 12,
		backgroundColor: "#ebf2ff",
		borderRadius: 10,
		marginLeft: 0,
	},
	viewLinkText: {
		fontSize: 18,
		color: "#000",
		marginTop: 12,
	},
	viewButton: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 18,
	},
	viewButtonTouch: {
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderWidth: 1,
		borderColor: "#000",
		borderRadius: 10,
		width: 165,
	},
	viewButtonText: {
		fontSize: 16,
		color: "#000",
		textAlign: "center",
	},
})

export default ShareScreen
