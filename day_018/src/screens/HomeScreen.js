import React, { useState } from "react"
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	LogBox,
} from "react-native"

import FadeIn from "../constants/FadeIn"
import LottieView from "lottie-react-native"
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"
import { DonutChart } from "react-native-circular-chart"

const screenWidth = Dimensions.get("window").width
LogBox.ignoreAllLogs()

const HomeScreen = () => {
	const [index, setIndex] = useState(1)
	const DATA2 = [
		{
			month: "August",
			sum: 1500,
			expenses: [
				{ name: "Groceries", value: 800, color: "#2ecc71" },
				{ name: "Education", value: 200, color: "#f1c40f" },
				{ name: "Home", value: 320, color: "#9b59b6" },
				{ name: "Personal", value: 180, color: "#3498db" },
			],
		},
		{
			month: "September",
			sum: 1290,
			expenses: [
				{ name: "Groceries", value: 650, color: "#2ecc71" },
				{ name: "Education", value: 160, color: "#f1c40f" },
				{ name: "Home", value: 280, color: "#9b59b6" },
				{ name: "Personal", value: 200, color: "#3498db" },
			],
		},
		{
			month: "October",
			sum: 1400,
			expenses: [
				{ name: "Groceries", value: 700, color: "#2ecc71" },
				{ name: "Education", value: 140, color: "#f1c40f" },
				{ name: "Home", value: 410, color: "#9b59b6" },
				{ name: "Personal", value: 150, color: "#3498db" },
			],
		},
	]

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#24242d",
				padding: 12,
			}}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingHorizontal: 10,
				}}>
				<Text
					style={{ fontSize: 24, color: "#FFF", marginLeft: 12, marginTop: 5 }}>
					Analytics
				</Text>
				<FontAwesome
					name="sliders"
					size={24}
					color="#a6a6a9"
					style={{ transform: [{ rotate: "90deg" }] }}
				/>
			</View>

			<DonutChart
				key={index}
				style={{ alignSelf: "center" }}
				data={DATA2[index].expenses}
				strokeWidth={20}
				radius={90}
				containerWidth={screenWidth - 12 * 2}
				containerHeight={275}
				type="round"
				startAngle={0}
				endAngle={360}
				animationType="slide"
			/>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginTop: 40,
					paddingHorizontal: 10,
				}}>
				<TouchableOpacity
					onPress={() => setIndex((prevState) => prevState - 1)}>
					<FontAwesome5 name="chevron-left" size={20} color="#a6a6a9" />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setIndex((prevState) => prevState + 1)}>
					<FontAwesome5 name="chevron-right" size={20} color="#a6a6a9" />
				</TouchableOpacity>
			</View>
			<View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						paddingHorizontal: 10,
						marginTop: 20,
					}}>
					<Text style={{ fontSize: 20, color: "#a6a6a9" }}>Total Expenses</Text>
					<Text style={{ fontSize: 18, color: "#FFF" }}>
						{"$" + DATA2[index].sum}
					</Text>
				</View>
			</View>

			<View>
				{DATA2[index]?.expenses.map((item, index) => {
					return (
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								marginTop: 12,
								alignItems: "center",
								paddingHorizontal: 10,
							}}
							key={index}>
							<View>
								<View
									style={{
										width: 18,
										height: 18,
										borderRadius: 9,
										backgroundColor: item.color,
										marginBottom: 3,
										marginRight: 12,
									}}
								/>
								<Text
									style={{
										fontSize: 18,

										color: "#a6a6a9",
									}}>
									{item.name}
								</Text>
							</View>
							<Text style={{ fontSize: 18, color: "#FFF" }}>
								{"$" + item.value}
							</Text>
						</View>
					)
				})}
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({})

export default HomeScreen
