import React from "react"
import {
	View,
	Text,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from "react-native"
import Animated, { FadeInDown } from "react-native-reanimated"

const Categories = ({ categories, handleChangeCategory, activeCategory }) => {
	return (
		<Animated.View entering={FadeInDown.duration(500).springify()}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className="space-x-4"
				contentContainerStyle={{ paddingHorizontal: 15 }}>
				<FlatList
					data={categories}
					renderItem={(item, index) => {
						let isActive = item.strCategory == activeCategory
						let activeButtonClass = isActive ? " bg-amber-400" : " bg-black/10"

						return (
							<TouchableOpacity
								key={index}
								onPress={() => handleChangeCategory(item.strCategory)}
								className="flex items-center space-y-1">
								<View className={"rounded-full p-[6px] " + activeButtonClass}>
									<Text>{item.strCategory}</Text>
								</View>
							</TouchableOpacity>
						)
					}}
				/>
			</ScrollView>
		</Animated.View>
	)
}

export default Categories
