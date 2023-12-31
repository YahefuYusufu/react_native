import { FontAwesome5 } from "@expo/vector-icons"
import React from "react"
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native"
import Animated, { FadeInDown } from "react-native-reanimated"

const HomeScreens = () => {
	return (
		<View style={styles.container}>
			<View style={styles.headerView}>
				<FontAwesome5 name="bars" size={24} color="#cacaca" />
				<Text style={{ fontSize: 20, color: "#4d75e1" }}>BEAVERBOARD</Text>
				<FontAwesome5 name="bell" size={24} color="#4d75e1" />
			</View>

			{/* //main View */}
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 20,
					alignItems: "flex-end",
				}}>
				<Animated.View
					style={{
						backgroundColor: "#FFF",
						width: 110,
						borderRadius: 10,
						justifyContent: "center",
						alignItems: "center",
						height: 165,
					}}
					entering={FadeInDown.delay(400)}>
					<View
						style={{
							position: "absolute",
							top: -8,
							right: -8,
							width: 24,
							height: 24,
							borderRadius: 12,
							backgroundColor: "#d9d9e1",
							borderWidth: 2,
							borderColor: "#bdbdc5",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text
							style={{
								fontSize: 14,
								color: "#7c7c7e",
							}}>
							2
						</Text>
					</View>
					<Image
						source={require("../../assets/imgs/people1.jpg")}
						style={{ width: 70, height: 70, borderRadius: 30 }}
					/>
					<View style={{ alignItems: "center", marginTop: 8 }}>
						<Text style={{ fontSize: 15, color: "#4d75e1", lineHeight: 25 }}>
							Leona Ban
						</Text>
						<Text style={{ fontSize: 14, color: "#cacaca", lineHeight: 25 }}>
							70,126 pts
						</Text>
						<Text style={{ fontSize: 14, color: "#000", lineHeight: 25 }}>
							Level 10
						</Text>
					</View>
				</Animated.View>
				<Animated.View
					style={{
						backgroundColor: "#FFF",
						width: 120,
						borderRadius: 10,
						justifyContent: "center",
						alignItems: "center",
						height: 190,
					}}
					entering={FadeInDown.delay(200)}>
					<View
						style={{
							position: "absolute",
							top: -8,
							right: -8,
							width: 24,
							height: 24,
							borderRadius: 12,
							backgroundColor: "#ffe29e",
							borderWidth: 2,
							borderColor: "#ffcf42",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text
							style={{
								fontSize: 14,

								color: "#ffcf42",
							}}>
							1
						</Text>
					</View>

					<Image
						source={require("../../assets/imgs/people3.jpg")}
						style={{ width: 70, height: 70, borderRadius: 30 }}
					/>

					<View style={{ alignItems: "center", marginTop: 8 }}>
						<Text
							style={{
								fontSize: 15,

								color: "#4d75e1",
								lineHeight: 25,
							}}>
							John Doe
						</Text>
						<Text
							style={{
								fontSize: 14,

								color: "#cacaca",
								lineHeight: 25,
							}}>
							70,752 pts
						</Text>
						<Text
							style={{
								fontSize: 14,

								color: "#000",
								lineHeight: 25,
							}}>
							Level 10
						</Text>
					</View>
				</Animated.View>
				<Animated.View
					style={{
						backgroundColor: "#FFF",
						width: 110,
						borderRadius: 10,
						justifyContent: "center",
						alignItems: "center",
						height: 165,
					}}
					entering={FadeInDown.delay(600)}>
					<View
						style={{
							position: "absolute",
							top: -8,
							right: -8,
							width: 24,
							height: 24,
							borderRadius: 12,
							backgroundColor: "#e0cbae",
							borderWidth: 2,
							borderColor: "#a27531",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text
							style={{
								fontSize: 14,

								color: "#b28e57",
							}}>
							3
						</Text>
					</View>

					<Image
						source={require("../../assets/imgs/people2.jpg")}
						style={{ width: 60, height: 60, borderRadius: 30 }}
					/>

					<View style={{ alignItems: "center", marginTop: 8 }}>
						<Text
							style={{
								fontSize: 15,

								color: "#4d75e1",
								lineHeight: 25,
							}}>
							Edan Bassett
						</Text>
						<Text
							style={{
								fontSize: 14,

								color: "#cacaca",
								lineHeight: 25,
							}}>
							69,314 pts
						</Text>
						<Text
							style={{
								fontSize: 14,

								color: "#000",
								lineHeight: 25,
							}}>
							Level 10
						</Text>
					</View>
				</Animated.View>
			</View>

			<Animated.View entering={FadeInDown.delay(800)}>
				<Text style={{ fontSize: 18, color: "#5d5d5d", marginVertical: 20 }}>
					POPULAR
				</Text>
			</Animated.View>

			<Animated.View
				style={{
					backgroundColor: "#4d75e1",
					padding: 6,
					borderRadius: 5,
					flexDirection: "row",
				}}
				entering={FadeInDown.delay(1000)}>
				<Text style={{ flex: 0.2, fontSize: 16, color: "#FFF" }}>Rank</Text>
				<Text style={{ flex: 0.4, fontSize: 16, color: "#FFF" }}>User</Text>
				<Text style={{ flex: 0.25, fontSize: 16, color: "#FFF" }}>Points</Text>
				<Text style={{ flex: 0.15, fontSize: 16, color: "#FFF" }}>Level</Text>
			</Animated.View>

			<Animated.View
				style={{
					backgroundColor: "#FFF",
					padding: 8,
					borderRadius: 5,
					flexDirection: "row",
					marginTop: 12,
					alignItems: "center",
				}}
				entering={FadeInDown.delay(1200)}>
				<View style={{ flex: 0.1 }}>
					<Text style={{ fontSize: 16, color: "#4d75e1", alignSelf: "center" }}>
						4
					</Text>
				</View>
				<View style={{ flex: 0.1 }}>
					<Image
						source={require("../../assets/imgs/image4.jpg")}
						style={{ width: 30, height: 30, borderRadius: 30 }}
					/>
				</View>
				<View style={{ flex: 0.35 }}>
					<Text style={{ fontSize: 15, color: "#5d5d5d" }}>Tess Haines</Text>
				</View>
				<View style={{ flex: 0.25, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#cacaca" }}>65,498</Text>
				</View>
				<View style={{ flex: 0.2, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#5d5d5d" }}>9</Text>
				</View>
			</Animated.View>

			<Animated.View
				style={{
					backgroundColor: "#FFF",
					padding: 8,
					borderRadius: 5,
					flexDirection: "row",
					marginTop: 12,
					alignItems: "center",
				}}
				entering={FadeInDown.delay(1400)}>
				<View style={{ flex: 0.1 }}>
					<Text style={{ fontSize: 16, color: "#4d75e1", alignSelf: "center" }}>
						5
					</Text>
				</View>
				<View style={{ flex: 0.1 }}>
					<Image
						source={require("../../assets/imgs/image5.jpg")}
						style={{ width: 30, height: 30, borderRadius: 30 }}
					/>
				</View>
				<View style={{ flex: 0.35 }}>
					<Text style={{ fontSize: 15, color: "#5d5d5d" }}>Francis Fisher</Text>
				</View>
				<View style={{ flex: 0.25, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#cacaca" }}>62,284</Text>
				</View>
				<View style={{ flex: 0.2, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#5d5d5d" }}>8</Text>
				</View>
			</Animated.View>
			<Animated.View
				style={{
					backgroundColor: "#FFF",
					padding: 8,
					borderRadius: 5,
					flexDirection: "row",
					marginTop: 12,
					alignItems: "center",
				}}
				entering={FadeInDown.delay(1600)}>
				<View style={{ flex: 0.1 }}>
					<Text style={{ fontSize: 16, color: "#4d75e1", alignSelf: "center" }}>
						6
					</Text>
				</View>
				<View style={{ flex: 0.1 }}>
					<Image
						source={require("../../assets/imgs/image6.jpg")}
						style={{ width: 30, height: 30, borderRadius: 30 }}
					/>
				</View>
				<View style={{ flex: 0.35 }}>
					<Text style={{ fontSize: 15, color: "#5d5d5d" }}>Rafael Sykes</Text>
				</View>
				<View style={{ flex: 0.25, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#cacaca" }}>60,125</Text>
				</View>
				<View style={{ flex: 0.2, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#5d5d5d" }}>8</Text>
				</View>
			</Animated.View>

			<Animated.View
				style={{
					backgroundColor: "#FFF",
					padding: 8,
					borderRadius: 5,
					flexDirection: "row",
					marginTop: 12,
					alignItems: "center",
				}}
				entering={FadeInDown.delay(1800)}>
				<View style={{ flex: 0.1 }}>
					<Text style={{ fontSize: 16, color: "#4d75e1", alignSelf: "center" }}>
						7
					</Text>
				</View>
				<View style={{ flex: 0.1 }}>
					<Image
						source={require("../../assets/imgs/image7.jpg")}
						style={{ width: 30, height: 30, borderRadius: 30 }}
					/>
				</View>
				<View style={{ flex: 0.35 }}>
					<Text style={{ fontSize: 15, color: "#5d5d5d" }}>Kay Vu</Text>
				</View>
				<View style={{ flex: 0.25, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#cacaca" }}>59,910</Text>
				</View>
				<View style={{ flex: 0.2, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#5d5d5d" }}>8</Text>
				</View>
			</Animated.View>

			<Animated.View
				style={{
					backgroundColor: "#FFF",
					padding: 8,
					borderRadius: 5,
					flexDirection: "row",
					marginTop: 12,
					alignItems: "center",
				}}
				entering={FadeInDown.delay(2000)}>
				<View style={{ flex: 0.1 }}>
					<Text style={{ fontSize: 16, color: "#4d75e1", alignSelf: "center" }}>
						8
					</Text>
				</View>
				<View style={{ flex: 0.1 }}>
					<Image
						source={require("../../assets/imgs/image8.jpg")}
						style={{ width: 30, height: 30, borderRadius: 30 }}
					/>
				</View>
				<View style={{ flex: 0.35 }}>
					<Text style={{ fontSize: 15, color: "#5d5d5d" }}>Zac Bauer</Text>
				</View>
				<View style={{ flex: 0.25, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#cacaca" }}>59,582</Text>
				</View>
				<View style={{ flex: 0.2, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#5d5d5d" }}>8</Text>
				</View>
			</Animated.View>

			<Animated.View
				style={{
					backgroundColor: "#FFF",
					padding: 8,
					borderRadius: 5,
					flexDirection: "row",
					marginTop: 12,
					alignItems: "center",
				}}
				entering={FadeInDown.delay(2200)}>
				<View style={{ flex: 0.1 }}>
					<Text style={{ fontSize: 16, color: "#4d75e1", alignSelf: "center" }}>
						9
					</Text>
				</View>
				<View style={{ flex: 0.1 }}>
					<Image
						source={require("../../assets/imgs/image9.jpg")}
						style={{ width: 30, height: 30, borderRadius: 30 }}
					/>
				</View>
				<View style={{ flex: 0.35 }}>
					<Text style={{ fontSize: 15, color: "#5d5d5d" }}>Anthony Allen</Text>
				</View>
				<View style={{ flex: 0.25, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#cacaca" }}>55,845</Text>
				</View>
				<View style={{ flex: 0.2, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#5d5d5d" }}>7</Text>
				</View>
			</Animated.View>
			<Animated.View
				style={{
					backgroundColor: "#FFF",
					padding: 8,
					borderRadius: 5,
					flexDirection: "row",
					marginTop: 12,
					alignItems: "center",
				}}
				entering={FadeInDown.delay(2400)}>
				<View style={{ flex: 0.1 }}>
					<Text style={{ fontSize: 16, color: "#4d75e1", alignSelf: "center" }}>
						10
					</Text>
				</View>
				<View style={{ flex: 0.1 }}>
					<Image
						source={require("../../assets/imgs/image10.jpg")}
						style={{ width: 30, height: 30, borderRadius: 30 }}
					/>
				</View>
				<View style={{ flex: 0.35 }}>
					<Text style={{ fontSize: 15, color: "#5d5d5d" }}>Andreas Phelps</Text>
				</View>
				<View style={{ flex: 0.25, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#cacaca" }}>54,624</Text>
				</View>
				<View style={{ flex: 0.2, alignItems: "center" }}>
					<Text style={{ fontSize: 14, color: "#5d5d5d" }}>7</Text>
				</View>
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f1f1f1",
		padding: 12,
	},
	headerView: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 40,
	},
	mainView: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
		alignItems: "flex-end",
	},
})

export default HomeScreens
