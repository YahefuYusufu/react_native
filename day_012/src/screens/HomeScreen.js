import React from "react"
import {
	View,
	StyleSheet,
	Text,
	SafeAreaView,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native"

import { Feather, FontAwesome5 } from "@expo/vector-icons"

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.view1}>
				<TextInput
					placeholder="Search for a product"
					placeholderTextColor={"#a7a9ab"}
					style={styles.textInput}
				/>
				<Feather
					name="search"
					style={styles.view1Icon}
					size={25}
					color={"#a7a9ab"}
				/>
			</View>
			<ScrollView style={{ marginTop: 20 }}>
				<View>
					<ScrollView horizontal style={styles.scrollView1}>
						<TouchableOpacity style={styles.scrollView1Touch1}>
							<Image
								source={require("../../assets/imgs/watch3.jpg")}
								style={styles.scrollView1Touch1Image}
							/>
							<Text style={styles.scrollView1Touch1Text}>Smart Watch</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.scrollView1Touch2}>
							<Image
								source={require("../../assets/imgs/asus.png")}
								style={styles.scrollView1Touch1Image}
							/>
							<Text style={styles.scrollView1Touch1Text}>Smart Watch</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.scrollView1Touch2}>
							<Image
								source={require("../../assets/imgs/cloth1.jpg")}
								style={styles.scrollView1Touch1Image}
							/>
							<Text style={styles.scrollView1Touch1Text}>Smart Watch</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 12,
						paddingHorizontal: 12,
					}}>
					<Text style={{ fontSize: 16, color: "#000" }}>Hot Sales</Text>
					<Text
						style={{
							fontSize: 16,
							color: "#62686d",
						}}>
						See All
					</Text>
				</View>
				{/* //second view */}
				<View style={{ marginTop: 12 }}>
					<ScrollView horizontal>
						<TouchableOpacity style={{ width: 180 }}>
							<View>
								<Image
									source={require("../../assets/imgs/watch4.jpg")}
									style={styles.view2TouchImage}
								/>
								<Text style={styles.view2TouchText}>Free Shipping</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 8,
								}}>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									Smart Watch, 1.8 Inches
								</Text>
								<Text>$ 54</Text>
							</View>
							<Text
								style={{
									fontSize: 12,
									color: "#62686d",
								}}>{`Full Touch Screen Fitness\nSmart Watches`}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ width: 180, marginLeft: 8 }}>
							<View>
								<Image
									source={require("../../assets/imgs/watch2.jpg")}
									style={{
										width: 180,
										height: 180,
										borderRadius: 10,
										backgroundColor: "red",
										resizeMode: "center",
									}}
								/>
								<Text
									style={{
										fontSize: 12,
										color: "#FFF",
										position: "absolute",
										bottom: 5,
										left: 5,
										backgroundColor: "#000",
										paddingHorizontal: 8,
										borderRadius: 5,
									}}>
									Free shipping
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 8,
								}}>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									Fitness Tracker
								</Text>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									$ 32
								</Text>
							</View>
							<Text
								style={{
									fontSize: 12,
									color: "#62686d",
								}}>{`Compatible with\nAndroid iPhone iOS`}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ width: 180, marginLeft: 8 }}>
							<View>
								<Image
									source={require("../../assets/imgs/watch5.jpg")}
									style={{
										width: 180,
										height: 180,
										borderRadius: 10,
										backgroundColor: "red",
										resizeMode: "center",
									}}
								/>
								<Text
									style={{
										fontSize: 12,
										color: "#FFF",
										position: "absolute",
										bottom: 5,
										left: 5,
										backgroundColor: "#000",
										paddingHorizontal: 8,
										borderRadius: 5,
									}}>
									Free shipping
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 8,
								}}>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									Smart Watch, Tracker
								</Text>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									$ 59
								</Text>
							</View>
							<Text
								style={{
									fontSize: 12,
									color: "#62686d",
								}}>{`Blood Oxygen\nStep Counter`}</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						paddingHorizontal: 12,
						marginTop: 12,
					}}>
					<Text style={{ fontSize: 16, color: "#000" }}>Recently Viewed</Text>
					<Text
						style={{
							fontSize: 16,
							color: "#62686d",
						}}>
						See All
					</Text>
				</View>
				{/* //view3 */}

				<View style={{ marginTop: 12 }}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}>
						<TouchableOpacity style={{ width: 180 }}>
							<View>
								<Image
									source={require("../../assets/imgs/cloth2.jpg")}
									style={{
										width: 180,
										height: 180,
										borderRadius: 10,
										resizeMode: "center",
									}}
								/>
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 8,
								}}>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									Women's Oversized
								</Text>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									$ 34
								</Text>
							</View>
							<Text
								style={{
									fontSize: 12,
									color: "#62686d",
								}}>{`Sweatshirts Long\nSleeve`}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{ width: 180, marginLeft: 8 }}>
							<View>
								<Image
									source={require("../../assets/imgs/cloth3.jpg")}
									style={{
										width: 180,
										height: 180,
										borderRadius: 10,
										backgroundColor: "red",
										resizeMode: "center",
									}}
								/>
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 8,
								}}>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									Trendy Queen Women's
								</Text>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									$ 19
								</Text>
							</View>
							<Text
								style={{
									fontSize: 12,
									color: "#62686d",
								}}>{`Shirts Basic\nLayering Slim`}</Text>
						</TouchableOpacity>
					</View>

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginTop: 12,
						}}>
						<TouchableOpacity style={{ width: 180 }}>
							<View>
								<Image
									source={require("../../assets/imgs/cloth4.jpg")}
									style={{
										width: 180,
										height: 180,
										borderRadius: 10,
										resizeMode: "center",
									}}
								/>
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 8,
								}}>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									Polarized Sunglasses
								</Text>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									$ 99
								</Text>
							</View>
							<Text
								style={{
									fontSize: 12,
									color: "#62686d",
								}}>{`Madison Avenue\nRetro`}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{ width: 180, marginLeft: 8 }}>
							<View>
								<Image
									source={require("../../assets/imgs/cloth5.jpg")}
									style={{
										width: 180,
										height: 180,
										borderRadius: 10,
										backgroundColor: "red",
										resizeMode: "center",
									}}
								/>
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 8,
								}}>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									Konikit Women's Sun Hat
								</Text>
								<Text
									style={{
										fontSize: 12,
										color: "#000",
									}}>
									$ 12
								</Text>
							</View>
							<Text
								style={{
									fontSize: 12,
									color: "#62686d",
								}}>{`Colorblock Fishing\nHat`}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 12,
	},
	view1: {
		padding: 12,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#f8faf9",
		borderRadius: 10,
	},
	textInput: {
		fontSize: 18,
		flex: 1,
	},
	scrollView1: {
		paddingVertical: 24,
		borderBottomColor: "#ebebeb",
		borderBottomWidth: 1,
	},
	scrollView1Touch1: {
		flexDirection: "row",
		alignItems: "center",
		padding: 8,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#ebebeb",
	},
	scrollView1Touch2: {
		flexDirection: "row",
		alignItems: "center",
		padding: 8,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#ebebeb",
		marginLeft: 8,
	},
	scrollView1Touch1Image: {
		width: 40,
		height: 40,
		backgroundColor: "#ebebeb",
		borderRadius: 10,
		resizeMode: "center",
	},
	scrollView1Touch1Text: {
		fontSize: 16,
		color: "#000",
		marginLeft: 8,
	},
	view2TouchImage: {
		width: 180,
		height: 180,
		borderRadius: 10,
		backgroundColor: "red",
		resizeMode: "center",
	},
	view2TouchText: {
		fontSize: 12,
		color: "#FFF",
		position: "absolute",
		bottom: 5,
		left: 5,
		backgroundColor: "#000",
		paddingHorizontal: 8,
		borderRadius: 5,
	},
})

export default HomeScreen
