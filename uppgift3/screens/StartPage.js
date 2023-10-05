import React from "react"
import {
	StyleSheet,
	FlatList,
	TouchableOpacity,
	SafeAreaView,
} from "react-native"

import FancyBox from "../components/FancyBox"

const data = ["Orange Juice", "Banana Smoothie", "Cider"]

const StartPage = ({ navigation }) => {
	const renderItem = ({ item }) => (
		<TouchableOpacity onPress={() => navigation.navigate("Detail", { item })}>
			<FancyBox name={item} />
		</TouchableOpacity>
	)

	return (
		<SafeAreaView>
			<FlatList data={data} renderItem={renderItem} keyExtractor={(id) => id} />
		</SafeAreaView>
	)
}

export default StartPage
