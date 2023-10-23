import React from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import Animated, { FadeInDown } from "react-native-reanimated"
import { CachedImage } from "../helpers/image"

const Categories = ({ categories, handleChangeCategory, activeCategory }) => {
	return (
		<Animated.View entering={FadeInDown.duration(500).springify()}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className="space-x-2"
				contentContainerStyle={{ paddingHorizontal: 5 }}>
				{categories.map((cat, index) => {
					let isActive = cat.strCategory == activeCategory
					let activeButtonClass = isActive ? " bg-green-400" : " bg-black/10"

					return (
						<TouchableOpacity
							key={index}
							className="flex items-center space-y-1"
							onPress={() => handleChangeCategory(cat.strCategory)}>
							<View className={"rounded-full p-[6px]" + activeButtonClass}>
								<CachedImage
									url={cat.strCategoryThumb}
									style={{ width: 58, height: 58 }}
									className="rounded-full"
								/>
							</View>
							<Text className="text-slate-800" style={{ fontSize: 14 }}>
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
