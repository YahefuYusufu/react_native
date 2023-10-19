import React from "react"
import { View, Text } from "react-native"
import { mealData } from "../constants/categoryData"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import MasonryList from "@react-native-seoul/masonry-list"
import Loading from "./Loading"
import { useNavigation } from "@react-navigation/native"
import RecipeCard from "./RecipeCard"

const Recipes = ({ categories, meals }) => {
	const navigation = useNavigation()

	return (
		<View className="mx-4 space-y-3">
			<Text
				style={{ fontSize: hp(3) }}
				className="font-semibold text-neutral-600 text-center">
				Recipes
			</Text>
			<View>
				{categories.length == 0 || meals.length == 0 ? (
					<Loading size="large" className="mt-20 " />
				) : (
					<MasonryList
						data={meals}
						keyExtractor={(item) => item.idMeal}
						numColumns={2}
						showsVerticalScrollIndicator={false}
						renderItem={({ item, i }) => (
							<RecipeCard item={item} index={i} navigation={navigation} />
						)}
						onEndReachedThreshold={0.1}
					/>
				)}
			</View>
		</View>
	)
}

export default Recipes
