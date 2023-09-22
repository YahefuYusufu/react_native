import React from "react"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"

const WelcomeScreen = () => {
	return (
		<View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
			<StatusBar style="light" />
			<Text className="text-blue-500">WelcomeScreen</Text>
			<Text></Text>
		</View>
	)
}

export default WelcomeScreen

const styles = StyleSheet.create({})
