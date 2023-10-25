import React from "react"
import { View, Text, FlatList } from "react-native"
import MasonryList from "@react-native-seoul/masonry-list"
import Loading from "./Loading"
import { useNavigation } from "@react-navigation/native"
import RecipeCard from "./RecipeCard"

const Recipes = ({ categories, meals }) => {
	const navigation = useNavigation()

	return (
		<View className="mx-4 space-y-3">
			<Text className="font-semibold text-3xl text-slate-700 text-center ">
				Recipes
			</Text>
			<View>
				{categories.length == 0 || meals.length == 0 ? (
					<Loading size="large" className="mt-20 " />
				) : (
					// in this case FlatList Does not work!
					<MasonryList
						data={meals}
						keyExtractor={(item) => item.idMeal}
						numColumns={2}
						renderItem={({ item, i }) => (
							<RecipeCard item={item} index={i} navigation={navigation} />
						)}
					/>
				)}
			</View>
		</View>
	)
}

export default Recipes
