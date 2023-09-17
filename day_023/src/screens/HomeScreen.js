import React, { useRef, useState } from "react"
import {
	View,
	Text,
	StyleSheet,
	Image,
	FlatList,
	Animated,
	useWindowDimensions,
} from "react-native"

import FadeIn from "../constant/FadeIn.js"
import LottieViw from "lottie-react-native"
import { FontAwesome5, Entypo } from "@expo/vector-icons"

const DATA = [
	{
		id: 1,
		title: "Create a Profile",
		description:
			"Put your information and preferences in your application profile",
		image: require("../../assets/undraw_Credit_card_re_blml.png"),
	},
	{
		id: 2,
		title: "Find New Friends",
		description: "Find new friends with whom you want to have a good time",
		image: require("../../assets/undraw_develop_app_re_bi4i.png"),
	},
	{
		id: 3,
		title: "Enjoy to the Fullest",
		description: "Enjoy with your new friends. And remember the fun never ends",
		image: require("../../assets/undraw_Having_fun_re_vj4h.png"),
	},
	{
		id: 4,
		title: "Explore New Places",
		description:
			"Travel popular locations with your new friends and make memories",
		image: require("../../assets/undraw_Travelers_re_y25a.png"),
	},
]

const HomeScreen = () => {
	const { width } = useWindowDimensions()
	const slideRef = useRef(null)
	const scrollX = useRef(new Animated.Value(0)).current
	const [currentIndex, setCurrentIndex] = useState(0)

	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index)
	}).current

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

	return (
		<View style={{ flex: 1, backgroundColor: "#fff" }}>
			<View style={{ flex: 3 }}>
				<FlatList
					keyExtractor={(item) => item.id}
					horizontal
					paddingEnable
					data={DATA}
					showsHorizontalScrollIndicator={false}
					bounces={false}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{ useNativeDriver: false }
					)}
					onViewableItemsChanged={viewableItemsChanged}
					viewabilityConfig={viewConfig}
					ref={slideRef}
					renderItem={({ item }) => (
						<View style={{ flex: 1, width: width }}>
							<Image
								source={item.image}
								style={{ flex: 0.7, width: width, resizeMode: "contain" }}
							/>
							<View style={{ flex: 0.3 }}>
								<Text
									style={{
										color: "#e53d49",
										fontSize: 28,
										marginBottom: 10,
										textAlign: "center",
									}}>
									{item.title}
								</Text>
								<Text
									style={{
										color: "#ee767f",
										textAlign: "center",
										paddingHorizontal: 64,
									}}>
									{item.description}
								</Text>
							</View>
						</View>
					)}
				/>
			</View>

			<View style={{ flexDirection: "row", height: 25, alignSelf: "center" }}>
				{DATA.map((_, i) => {
					const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
					const dotWidth = scrollX.interpolate({
						inputRange,
						outputRange: [10, 20, 10],
						extrapolate: "clamp",
					})

					const opacity = scrollX.interpolate({
						inputRange,
						outputRange: [0.3, 1, 0.3],
						extrapolate: "clamp",
					})
					return (
						<Animated.View
							style={{
								width: dotWidth,
								opacity: opacity,
								height: 10,
								borderRadius: 5,
								backgroundColor: "#e53d49",
								marginHorizontal: 8,
							}}
							key={i.toString()}
						/>
					)
				})}
			</View>
			<Text style={{ color: "#ee767f", textAlign: "center", marginBottom: 12 }}>
				{"SKIP"}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({})

export default HomeScreen
