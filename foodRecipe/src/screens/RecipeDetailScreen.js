import React, { useState, useEffect } from "react"
import { Text, View, ScrollView, TouchableOpacity } from "react-native"
import { StatusBar } from "expo-status-bar"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import Loading from "../components/Loading"
import { CachedImage } from "../helpers/image"
import { ChevronLeftIcon } from "react-native-heroicons/outline"
import { HeartIcon } from "react-native-heroicons/solid"
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated"

const RecipeDetailScreen = (props) => {
	const item = props.route.params
	const navigation = useNavigation()
	const [isFavorite, setIsFavorite] = useState(false)
	const [loading, setLoading] = useState(true)
	const [meal, setMeal] = useState(null)

	useEffect(() => {
		getMealData(item.idMeal)
	}, [])

	const getMealData = async (id) => {
		try {
			const response = await axios.get(
				`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
			)
			// console.log(response.data.meals[0])
			setMeal(response.data.meals[0])
			setLoading(false)
		} catch (error) {
			console.log("error", error.message)
		}
	}

	const ingredientsIndexes = (meal) => {
		if (!meal) return []
		let indexes = []
		for (let i = 1; i <= 20; i++) {
			if (meal[`strIngredient${i}`]) {
				indexes.push(i)
			}
		}
		return indexes
	}

	return (
		<ScrollView
			className="bg-white flex-1"
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 1 }}>
			<StatusBar style="light" />
			{/* recipe image */}
			<View className="flex-row justify-center">
				<CachedImage
					url={item?.strMealThumb}
					sharedTransition={item.strMeal}
					style={{
						width: "98%",
						height: 400,
						borderRadius: 53,
						borderBottomLeftRadius: 40,
						borderBottomRightRadius: 40,
						marginTop: 4,
					}}
				/>
			</View>
			{/* back button */}
			<Animated.View
				entering={FadeIn.delay(200).duration(1000)}
				className="w-full absolute flex-row justify-between items-center pt-14">
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					className="p-2 rounded-full ml-4 bg-white ">
					<ChevronLeftIcon size={32} strokeWidth={4.5} color="green" />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setIsFavorite(!isFavorite)}
					className="p-2 rounded-full mr-5 bg-white">
					<HeartIcon
						size={32}
						strokeWidth={4.5}
						color={isFavorite ? "red" : "gray"}
					/>
				</TouchableOpacity>
			</Animated.View>
			{/* meal description */}
			{loading ? (
				<Loading size="large" className="mt-16" />
			) : (
				<View className="px-4 flex justify-between space-y-4 pt-8">
					{/* name and area */}
					<Animated.View
						entering={FadeInDown.duration(700).springify().damping(12)}
						className="space-y-2">
						<Text
							style={{ fontSize: 32 }}
							className="font-bold flex-1 text-neutral-700">
							{meal?.strMeal}
						</Text>
						<Text
							style={{ fontSize: 18 }}
							className="font-medium flex-1 text-neutral-500">
							{meal?.strArea}
						</Text>
					</Animated.View>
					{/* ingredients */}
					<Animated.View
						entering={FadeInDown.delay(200)
							.duration(700)
							.springify()
							.damping(12)}
						className="space-y-4">
						<Text
							style={{ fontSize: 24 }}
							className="font-bold flex-1 text-neutral-700">
							Ingredients
						</Text>
						<View className="space-y-2 ml-3">
							{ingredientsIndexes(meal).map((i) => {
								return (
									<View key={i} className="flex-row space-x-4">
										<View
											style={{ height: 18, width: 18 }}
											className="bg-green-600 rounded-full"
										/>
										<View className="flex-row space-x-2">
											<Text
												style={{ fontSize: 14 }}
												className="font-extrabold text-neutral-700">
												{meal["strMeasure" + i]}
											</Text>
											<Text
												style={{ fontSize: 16 }}
												className="font-medium text-neutral-600">
												{meal["strIngredient" + i]}
											</Text>
										</View>
									</View>
								)
							})}
						</View>
					</Animated.View>
					{/* instructions */}
					<Animated.View
						entering={FadeInDown.delay(300)
							.duration(700)
							.springify()
							.damping(12)}
						className="space-y-4">
						<Text
							style={{ fontSize: 18 }}
							className="font-bold flex-1 text-neutral-700">
							Instructions
						</Text>
						<Text style={{ fontSize: 14 }} className="text-neutral-700">
							{meal?.strInstructions}
						</Text>
					</Animated.View>
				</View>
			)}
		</ScrollView>
	)
}

export default RecipeDetailScreen
