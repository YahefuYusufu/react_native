import React, { useState } from "react"
import {
	SafeAreaView,
	View,
	StyleSheet,
	Text,
	Image,
	Modal,
	TouchableOpacity,
} from "react-native"

import FadeIn from "../constants/FadeIn"
import LottieView from "lottie-react-native"
import { FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons"

const Home = () => {
	const [isVisible, setIsVisible] = useState(true)

	return (
		<SafeAreaView style={styles.safe1}>
			<FadeIn delay={100}>
				<View style={{ padding: 12 }}>
					<Text style={{ fontSize: 20, color: "#000" }}>Clue</Text>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Image
							source={require("../../assets/imgs/ape.png")}
							style={{ width: 50, height: 50, borderRadius: 25 }}
						/>
						<Text style={{ fontSize: 18, color: "#000", marginLeft: 10 }}>
							Bored Ape Yacht Club
						</Text>
					</View>
				</View>
			</FadeIn>
			{/* //FadeIn 2 */}
			<SafeAreaView style={styles.safe2}>
				<FadeIn delay={300}>
					<Image
						source={require("../../assets/imgs/ape2.png")}
						style={{
							width: 370,
							height: 370,
							borderRadius: 20,
							marginBottom: 20,
						}}
					/>
				</FadeIn>
				{/* //FadeIn 3 */}
				<FadeIn delay={600}>
					<View>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
							<MaterialIcons name="timer" size={35} color="black" />
							<View style={{ flexDirection: "row" }}>
								<Text style={{ fontSize: 18, color: "#000", marginLeft: 10 }}>
									Ending in
								</Text>
								<Text
									style={{
										fontSize: 18,
										color: "red",
										marginLeft: 10,
										marginTop: -8,
									}}>
									2 Days
								</Text>
							</View>
						</View>
						{/* Price */}
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 10,
							}}>
							<FontAwesome5 name="ethereum" size={35} color="black" />
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Text style={{ fontSize: 18, color: "#000", marginLeft: 10 }}>
									Current Price
								</Text>
								<View style={{ flexDirection: "row" }}>
									<Text
										style={{
											fontSize: 18,
											color: "#000",
											marginLeft: 10,
										}}>
										59.99 ETH
									</Text>
									<Text
										style={{
											fontSize: 14,
											color: "#000",
											marginLeft: 5,
											marginTop: -4,
										}}>
										$77,123.74
									</Text>
								</View>
							</View>
						</View>
					</View>
				</FadeIn>
				{/* FadeIn 4 */}
				<FadeIn delay={1200}>
					<View style={{ marginTop: 20 }}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}>
							<FontAwesome5 name="list" size={24} color="black" />
							<Text style={{ fontSize: 18, color: "#000", marginLeft: 8 }}>
								Offers
							</Text>
						</View>

						<View style={{ marginTop: 20 }}>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
								}}>
								<Text
									style={{
										fontSize: 18,
										color: "#000",
									}}>
									54.2 ETH
								</Text>
								<Text
									style={{
										fontSize: 18,
										color: "#2069e6",
									}}>
									DGNX
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
								}}>
								<Text
									style={{
										fontSize: 18,
										color: "#000",
									}}>
									51.0 ETH
								</Text>
								<Text
									style={{
										fontSize: 18,
										color: "#2069e6",
									}}>
									SvenBomwollen
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
								}}>
								<Text
									style={{
										fontSize: 18,
										color: "#000",
									}}>
									49.8 ETH
								</Text>
								<Text
									style={{
										fontSize: 18,
										color: "#2069e6",
									}}>
									Makin4
								</Text>
							</View>
						</View>
					</View>
				</FadeIn>
			</SafeAreaView>

			{/* MOdal */}
			<Modal
				style={{ flex: 1 }}
				visible={isVisible}
				transparent={true}
				onRequestClose={() => setIsVisible(false)}
				animationType={"fade"}>
				<View
					style={{
						flex: 1,
						padding: 12,
						justifyContent: "center",
						backgroundColor: "rgba(26,26,26,0.5)",
					}}>
					<View
						style={{
							height: 320,
							backgroundColor: "#fff",
							borderRadius: 25,
							padding: 12,
						}}>
						<Text
							style={{
								fontSize: 18,
								color: "#000",
								textAlign: "center",
							}}>
							Connect A Wallet
						</Text>

						<Text
							style={{
								fontSize: 18,
								color: "#8f8d8d",
								textAlign: "center",
							}}>
							If you don't have a wallet yet, you can select a provider and
							create one now.
						</Text>
						<TouchableOpacity
							style={{
								marginTop: 8,
								alignItems: "center",
								width: "100%",
								flexDirection: "row",
								paddingHorizontal: 8,
								paddingVertical: 6,
								borderWidth: 1,
								borderColor: "#2069e6",
								borderRadius: 10,
							}}>
							<Image
								source={require("../../assets/imgs/meta.png")}
								style={{ width: 30, height: 30, marginRight: 10 }}
							/>
							<Text
								style={{
									fontSize: 16,
									color: "#000",
									textAlign: "center",
									marginLeft: 10,
								}}>
								MetaMask
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								marginTop: 8,
								alignItems: "center",
								width: "100%",
								flexDirection: "row",
								paddingHorizontal: 8,
								paddingVertical: 6,
								borderWidth: 1,
								borderColor: "#2069e6",
								borderRadius: 10,
							}}>
							<Image
								source={require("../../assets/imgs/meta.png")}
								style={{ width: 30, height: 30, marginRight: 10 }}
							/>
							<Text
								style={{
									fontSize: 16,
									color: "#000",
									textAlign: "center",
									marginLeft: 10,
								}}>
								MetaMask
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								marginTop: 8,
								alignItems: "center",
								width: "100%",
								flexDirection: "row",
								paddingHorizontal: 8,
								paddingVertical: 6,
								borderWidth: 1,
								borderColor: "#2069e6",
								borderRadius: 10,
							}}>
							<Image
								source={require("../../assets/imgs/meta.png")}
								style={{ width: 30, height: 30, marginRight: 10 }}
							/>
							<Text
								style={{
									fontSize: 16,
									color: "#000",
									textAlign: "center",
									marginLeft: 10,
								}}>
								MetaMask
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								marginTop: 10,
								alignSelf: "center",
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
							onPress={() => setIsVisible(false)}>
							<Text
								style={{
									fontSize: 18,
									color: "#FFF",
									textAlign: "center",
								}}>
								Connect
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safe1: {
		flex: 1,
		backgroundColor: "#fff",
	},
	safe2: {
		paddingHorizontal: 12,
		flex: 1,
	},
})

export default Home
