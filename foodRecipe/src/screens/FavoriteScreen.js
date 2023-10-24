import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import React from "react"
import Animated, { FadeIn } from "react-native-reanimated"
import { ChevronLeftIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native"

const FavoriteScreen = () => {
	const navigation = useNavigation()
	return (
		<ScrollView>
			{/* back button */}
			<Animated.View
				entering={FadeIn.delay(200).duration(1000)}
				className="w-full absolute flex-row justify-between items-center pt-14">
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					className="p-2 rounded-full ml-4 bg-white ">
					<ChevronLeftIcon size={32} strokeWidth={4.5} color="#fbbf24" />
				</TouchableOpacity>
				<View className="flex-1 justify-center items-center h-full w-full">
					<Text>Favorite Page</Text>
				</View>
			</Animated.View>
		</ScrollView>
	)
}

export default FavoriteScreen