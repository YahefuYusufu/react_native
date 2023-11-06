import React, { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import { BookmarkIcon } from "react-native-heroicons/solid"
import axios from "axios"
import Categories from "../components/Categories"
import Recipes from "../components/Recipes"

const HomeScreen = () => {
	const [categories, setCategories] = useState([])
	const [meals, setMeals] = useState([])

	useEffect(() => {
		getCategories()
		getRecipes()
	}, [])

	const handleChangeCategory = (category) => {
		getRecipes(category)
		setMeals([])
	}

	const getCategories = async () => {
		try {
			const response = await axios.get(
				"https://themealdb.com/api/json/v1/1/categories.php"
			)
			// console.log("got categories", response.data)
			if (response && response.data) {
				setCategories(response.data.categories)
			}
		} catch (err) {
			console.log("something wrong,", err.message)
		}
	}

	const getRecipes = async (category = "Beef") => {
		try {
			const response = await axios.get(
				`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
			)
			// console.log('got recipes: ',response.data);
			if (response && response.data) {
				setMeals(response.data.meals)
			}
		} catch (err) {
			console.log("error: ", err.message)
		}
	}

	return (
		<SafeAreaView className="flex-1 bg-slate-50">
			<StatusBar styles="white" />
			<ScrollView
				showsVerticalScrollIndicator={false}
				className="space-y-6 pt-2">
				{/* avatar and bell icon */}
				<View className="mx-4 flex-row justify-between items-center mb-2">
					<TouchableOpacity>
						<Image
							source={require("../../assets/images/burger.png")}
							style={{
								height: 46,
								width: 56,
							}}
						/>
					</TouchableOpacity>
					{/* will add this func next version */}
					{/* <TouchableOpacity>
						<BookmarkIcon size={38} color="green" />
					</TouchableOpacity> */}
				</View>
				{/* greetings and punchline */}
				<View className="mx-4 space-y-2 mb-2">
					<Text style={{ fontSize: 24 }} className="text-slate-500 font-bold">
						Hello,Guys
					</Text>
					<View>
						<Text
							style={{ fontSize: 24 }}
							className="font-semibold text-slate-500">
							Make you Own food
						</Text>
					</View>
					<Text
						style={{ fontSize: 24 }}
						className="font-semibold text-slate-500">
						stay at <Text className="text-green-400">Home</Text>
					</Text>
				</View>

				{/* categories */}
				<View>
					{categories.length > 0 && (
						<Categories
							categories={categories}
							handleChangeCategory={handleChangeCategory}
						/>
					)}
				</View>
				{/* recipes */}
				<View>
					<Recipes categories={categories} meals={meals} />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen
