import React, { useState } from "react"
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	SafeAreaView,
} from "react-native"

import Animated, { FadeInRight, FadeInLeft } from "react-native-reanimated"
import { Ionicons } from "@expo/vector-icons"

const ChatScreen = () => {
	const [text, onChangeText] = useState("")
	const [visible, setVisible] = useState(false)
	return (
		<SafeAreaView style={styles.safe}>
			<View
				style={{
					flexDirection: "row",
					padding: 12,
					justifyContent: "space-between",
				}}>
				<View style={{ flexDirection: "row" }}>
					<Ionicons name="chevron-back" size={25} color="#333950" />
					<Text
						style={{
							fontSize: 20,
							color: "#333950",
							marginTop: -2,
							marginLeft: 5,
						}}>
						Christine Petersen
					</Text>
					<View
						style={{
							width: 12,
							height: 12,
							borderRadius: 6,
							backgroundColor: "#13e2ac",
							alignSelf: "center",
							marginBottom: 5,
							marginLeft: 5,
						}}
					/>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Ionicons name="call" size={25} color="#333950" />
					<Ionicons
						name="ellipsis-vertical"
						size={25}
						color="#333950"
						style={{ marginLeft: 12 }}
					/>
				</View>
			</View>
			<View style={{ flex: 1 }}>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						borderBottomWidth: 0.5,
						borderColor: "#b3b4bb",
					}}>
					<Text style={{ fontSize: 14, color: "#b3b4bb" }}>Today</Text>
				</View>
				<View style={{ marginTop: 30 }} />
				<View style={{ flexDirection: "row" }}>
					<Image
						source={require("../../assets/imgs/cloth1.jpg")}
						style={{ width: 50, height: 50, borderRadius: 10 }}
					/>
					<View
						style={{
							marginLeft: 12,
							marginTop: -8,
							borderWidth: 1,
							borderColor: "#eceff1",
							paddingHorizontal: 12,
							paddingVertical: 12,
							borderTopRightRadius: 30,
							borderTopLeftRadius: 30,
							borderBottomRightRadius: 30,
							width: "50%",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text style={{ fontSize: 18, color: "#333950" }}>I am hungry </Text>
					</View>
				</View>
				<View
					style={{
						marginTop: 30,
						alignSelf: "flex-end",
						borderWidth: 1,
						borderColor: "#FFF",
						paddingHorizontal: 12,
						paddingVertical: 12,
						borderTopRightRadius: 30,
						borderTopLeftRadius: 30,
						borderBottomLeftRadius: 30,
						width: "50%",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#75defe",
					}}>
					<Text style={{ fontSize: 18, color: "#FFF" }}>Mee toos </Text>
				</View>
				<View style={{ marginTop: 30, flexDirection: "row" }}>
					<Image
						source={require("../../assets/imgs/cloth1.jpg")}
						style={{ width: 50, height: 50, borderRadius: 10 }}
					/>
					<View
						style={{
							marginLeft: 12,
							marginTop: -8,
							borderWidth: 1,
							borderColor: "#eceff1",
							paddingHorizontal: 12,
							paddingVertical: 12,
							borderTopRightRadius: 30,
							borderTopLeftRadius: 30,
							borderBottomRightRadius: 30,
							width: "80%",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text style={{ fontSize: 18, color: "#333950" }}>
							What do you want for lunch?
						</Text>
					</View>
				</View>

				{visible && (
					<>
						<Animated.View
							style={{
								marginTop: 30,
								alignSelf: "flex-end",
								borderWidth: 1,
								borderColor: "#FFF",
								paddingHorizontal: 12,
								paddingVertical: 12,
								borderTopRightRadius: 30,
								borderTopLeftRadius: 30,
								borderBottomLeftRadius: 30,
								width: "50%",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#75defe",
							}}
							entering={FadeInRight.delay(300)}>
							<Text
								style={{
									fontSize: 18,
									color: "#FFF",
								}}>
								Pizza!
							</Text>
						</Animated.View>

						<Animated.View
							style={{ marginTop: 30, flexDirection: "row" }}
							entering={FadeInLeft.delay(1000)}>
							<Image
								source={require("../../assets/imgs/cloth1.jpg")}
								style={{ width: 50, height: 50, borderRadius: 10 }}
							/>
							<View
								style={{
									marginLeft: 12,
									marginTop: -8,
									borderWidth: 1,
									borderColor: "#eceff1",
									paddingHorizontal: 12,
									paddingVertical: 12,
									borderTopRightRadius: 30,
									borderTopLeftRadius: 30,
									borderBottomRightRadius: 30,
									width: "40%",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Text style={{ fontSize: 18, color: "#333950" }}>🍕🍕</Text>
							</View>
						</Animated.View>
						<Animated.View
							style={{ marginTop: 30, flexDirection: "row" }}
							entering={FadeInLeft.delay(1800)}>
							<Image
								source={require("../../assets/imgs/cloth1.jpg")}
								style={{ width: 50, height: 50, borderRadius: 10 }}
							/>
							<View
								style={{
									marginLeft: 12,
									marginTop: -8,
									borderWidth: 1,
									borderColor: "#eceff1",
									paddingHorizontal: 12,
									paddingVertical: 12,
									borderTopRightRadius: 30,
									borderTopLeftRadius: 30,
									borderBottomRightRadius: 30,
									width: "80%",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Text style={{ fontSize: 18, color: "#333950" }}>
									Ordering now, come on!
								</Text>
							</View>
						</Animated.View>
					</>
				)}
			</View>
			<TextInput
				placeholder="Message"
				placeholderTextColor={"gray"}
				style={{
					fontSize: 18,
					marginBottom: 25,
					backgroundColor: "#eee",
					padding: 12,
				}}
				autoFocus
				onSubmitEditing={() => {
					onChangeText(null)
					setVisible(true)
				}}
				onChangeText={onChangeText}
				value={text}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 12,
	},
})

export default ChatScreen
