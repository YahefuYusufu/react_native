import Animated, { FadeInDown } from "react-native-reanimated"
import { CachedImage } from "../helpers/image"
import { Pressable, Text } from "react-native"
const RecipeCard = ({ item, index, navigation }) => {
	return (
		<Animated.View
			entering={FadeInDown.delay(index * 100)
				.duration(600)
				.springify()
				.damping(12)}>
			<Pressable
				style={{
					width: "100%",
					paddingLeft: 4,
					paddingRight: 4,
				}}
				className="flex justify-center mb-4 space-x-2 "
				onPress={() => navigation.navigate("RecipeDetail", { ...item })}>
				{/* <Image
					source={{ uri: item.strMealThumb }}
					style={{
						width: "100%",
						height: index % 3 == 0 ? hp(25) : hp(35),
						borderRadius: 35,
					}}
					className="bg-black/5"
				/> */}
				<CachedImage
					url={item.strMealThumb}
					style={{
						width: "100%",
						height: 220,
						borderRadius: 35,
					}}
					className="bg-black/5"
					sharedTransitionTag={item.strMeal}
				/>
				<Text
					style={{ fontSize: 14 }}
					className="font-semibold ml-2 text-neutral-600 text-center">
					{item.strMeal.length > 10
						? item.strMeal.slice(0, 10) + "..."
						: item.strMeal}
				</Text>
			</Pressable>
		</Animated.View>
	)
}

export default RecipeCard
