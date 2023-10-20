import React, { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { BookmarkIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid"
import axios from "axios"
import Categories from "../components/Categories"
import Recipes from "../components/Recipes"
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry"

const HomeScreen = () => {
	const [activeCategory, setActiveCategory] = useState("Beef")
	const [categories, setCategories] = useState([])
	const [meals, setMeals] = useState([])

	useEffect(() => {
		getCategories()
		getRecipes()
	}, [])

	const handleChangeCategory = (category) => {
		getRecipes(category)
		setActiveCategory(category)
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
		<SafeAreaView className="flex-1 bg-white">
			<StatusBar styles="white" />
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 50 }}
				className="space-y-6 pt-2">
				{/* avatar and bell icon */}
				<View className="mx-4 flex-row justify-between items-center mb-2">
					<TouchableOpacity>
						<Image
							source={require("../../assets/images/avatar.png")}
							style={{ height: hp(5), width: hp(5.5) }}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<BookmarkIcon size={hp(4)} color="green" />
					</TouchableOpacity>
				</View>
				{/* greetings and punchline */}
				<View className="mx-4 space-y-2 mb-2">
					<Text style={{ fontSize: hp(1.7) }} className="text-neutral-400">
						Hello,Guys
					</Text>
					<View>
						<Text
							style={{ fontSize: hp(3.8) }}
							className="font-semibold text-neutral-600">
							Make you Own food
						</Text>
					</View>
					<Text
						style={{ fontSize: hp(3.8) }}
						className="font-semibold text-neutral-600">
						stay at <Text className="text-amber-400">Home</Text>
					</Text>
				</View>
				{/* search bar */}
				<View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
					<TextInput
						placeholder="Search any recipe"
						placeholderTextColor={"gray"}
						style={{ fontSize: hp(1.7) }}
						className="flex-1 text-base mb-1 pl-3 tracking-wider"
						inputMode="search"
					/>
					<View className="bg-white rounded-full p-3">
						<MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
					</View>
				</View>
				{/* categories */}
				<View>
					{categories.length > 0 && (
						<Categories
							categories={categories}
							handleChangeCategory={handleChangeCategory}
							activeCategory={activeCategory}
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
