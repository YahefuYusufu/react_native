import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"

const CalculatorScreen = () => {
	const [theme, setTheme] = React.useState("LIGHT")
	const [past, setPast] = React.useState("")
	const [number, setNumber] = React.useState("")
	const NUMBER_SIZE = 70
	const PADDING = 20

	const themeColor = {
		LIGHT: {
			backgroundColor: "#FFF",
			themeBackgroundColor: "#292d36",
			lightIconActive: "#000",
			lightIconPassive: "#000",
			darkIconActive: "#dddddd",
			darkIconPassive: "#dddddd",
			textColor: "#292d36",
			green: "#26fcd5",
			red: "#f17979",
		},
		DARK: {
			backgroundColor: "#22252d",
			themeBackgroundColor: "#f9f9f9",
			lightIconActive: "#000",
			lightIconPassive: "#7d7f84",
			darkIconActive: "#dddddd",
			darkIconPassive: "#dddddd",
			textColor: "#ffffff",
			green: "#26fcd5",
			red: "#f17979",
		},
	}

	return (
		<View
			style={{ flex: 1, backgroundColor: themeColor[theme].backgroundColor }}>
			<View
				style={{
					flexDirection: "row",
					marginTop: 40,
					alignSelf: "center",
					paddingHorizontal: 20,
					paddingVertical: 10,
					backgroundColor: themeColor[theme].themeBackgroundColor,
					alignItems: "center",
					justifyContent: "space-between",
					borderRadius: 15,
				}}>
				<TouchableOpacity
					style={{ marginRight: 15 }}
					onPress={() => setTheme("LIGHT")}>
					<FontAwesome5
						name="sun"
						size={20}
						color={
							theme === "LIGHT"
								? themeColor[theme].lightIconActive
								: themeColor[theme].darkIconPassive
						}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ marginLeft: 15 }}
					onPress={() => setTheme("DARK")}>
					<FontAwesome5
						name="moon"
						size={20}
						color={
							theme === "DARK"
								? themeColor[theme].lightIconActive
								: themeColor[theme].darkIconPassive
						}
					/>
				</TouchableOpacity>
			</View>

			<View
				style={{
					flex: 0.3,
					backgroundColor: themeColor[theme].backgroundColor,
					justifyContent: "flex-end",
					alignItems: "flex-end",
					paddingRight: 20,
				}}>
				<Text
					style={{
						fontFamily: "Poppins-Regular",
						fontSize: 20,
						color: themeColor[theme].textColor,
					}}>
					{past}
				</Text>
				<Text
					style={{
						fontFamily: "Poppins-Medium",
						fontSize: 50,
						color: themeColor[theme].textColor,
					}}>
					{number}
				</Text>
			</View>

			<View
				style={{
					flex: 0.7,
					backgroundColor: themeColor[theme].themeBackgroundColor,
					borderTopRightRadius: 40,
					borderTopLeftRadius: 40,
				}}>
				{/* //1 */}
				<View
					style={{
						marginTop: 30,
						marginRight: 20,
						marginLeft: 20,
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => {
							setNumber("")
							setPast("")
						}}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].green,
							}}>
							{"AC"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].green,
							}}>
							{"+/-"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].green,
							}}>
							{"%"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].red,
							}}>
							{"+"}
						</Text>
					</TouchableOpacity>
				</View>
				{/* //2 */}
				<View
					style={{
						marginTop: PADDING,
						marginLeft: 20,
						marginRight: 20,
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => setNumber((prevState) => prevState + "7")}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].textColor,
							}}>
							{7}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => setNumber((prevState) => prevState + "8")}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].textColor,
							}}>
							{8}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => setNumber((prevState) => prevState + "9")}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].textColor,
							}}>
							{9}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => {
							setNumber("")
						}}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].red,
							}}>
							{"x"}
						</Text>
					</TouchableOpacity>
				</View>
				{/* //3 */}
				<View
					style={{
						marginTop: PADDING,
						marginLeft: 20,
						marginRight: 20,
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => setNumber((prevState) => prevState + "4")}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].textColor,
							}}>
							{4}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => setNumber((prevState) => prevState + "5")}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].textColor,
							}}>
							{5}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => setNumber((prevState) => prevState + "6")}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].textColor,
							}}>
							{6}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].red,
							}}>
							{"-"}
						</Text>
					</TouchableOpacity>
				</View>
				{/* //4 */}
				<View
					style={{
						marginTop: PADDING,
						marginLeft: 20,
						marginRight: 20,
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => setNumber((prevState) => prevState + "1")}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].textColor,
							}}>
							{1}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => setNumber((prevState) => prevState + "2")}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].textColor,
							}}>
							{2}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => setNumber((prevState) => prevState + "3")}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].textColor,
							}}>
							{3}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].red,
							}}>
							{"+"}
						</Text>
					</TouchableOpacity>
				</View>
				{/* //5 */}
				<View
					style={{
						marginTop: PADDING,
						marginLeft: 20,
						marginRight: 20,
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].textColor,
							}}>
							{"<"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => setNumber((prevState) => prevState + "0")}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].textColor,
							}}>
							{0}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => setNumber((prevState) => prevState + ".")}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].textColor,
							}}>
							{"."}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							width: NUMBER_SIZE,
							height: NUMBER_SIZE,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: themeColor[theme].backgroundColor,
						}}
						onPress={() => {
							setNumber("780")
							setPast("12 x 65")
						}}>
						<Text
							style={{
								fontSize: 30,
								fontFamily: "Poppins-Medium",
								color: themeColor[theme].red,
							}}>
							{"="}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default CalculatorScreen
