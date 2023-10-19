import React from "react"
import {
	View,
	Text,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from "react-native"
import Animated, { FadeInDown } from "react-native-reanimated"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { CachedImage } from "../helpers/image"

const Categories = ({ categories, handleChangeCategory, activeCategory }) => {
	return (
		<Animated.View entering={FadeInDown.duration(500).springify()}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className="space-x-4"
				contentContainerStyle={{ paddingHorizontal: 12 }}>
				{categories.map((cat, index) => {
					let isActive = cat.strCategory == activeCategory
					let activeButtonClass = isActive ? " bg-amber-400" : " bg-black/10"

					return (
						<TouchableOpacity
							key={index}
							className="flex items-center space-y-1"
							onPress={() => handleChangeCategory(cat.strCategory)}>
							<View className={"rounded-full p-[6px]" + activeButtonClass}>
								<CachedImage
									url={cat.strCategoryThumb}
									style={{ width: hp(6), height: hp(6) }}
									className="rounded-full"
								/>
							</View>
							<Text className="text-neutral-600" style={{ fontSize: hp(1.6) }}>
								{cat.strCategory}
							</Text>
						</TouchableOpacity>
					)
				})}
			</ScrollView>
		</Animated.View>
	)
}

export default Categories
