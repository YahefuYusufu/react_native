import React, { useState, useEffect } from "react"
import { Text, View, ScrollView, TouchableOpacity } from "react-native"
import { StatusBar } from "expo-status-bar"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import Loading from "../components/Loading"
import { CachedImage } from "../helpers/image"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import {
	ChevronLeftIcon,
	ClockIcon,
	FireIcon,
} from "react-native-heroicons/outline"
import {
	HeartIcon,
	Square3Stack3DIcon,
	UsersIcon,
} from "react-native-heroicons/solid"
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated"

const RecipeDetailScreen = () => {
	return (
		<View>
			<Text>RecipeDetailScreen</Text>
		</View>
	)
}

export default RecipeDetailScreen
