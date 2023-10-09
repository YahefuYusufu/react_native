import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import {
	Image,
	StyleSheet,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Button,
} from "react-native"

export default function App() {
	const [number, setNumber] = useState(0)
	const setRest = () => {
		setNumber(0)
	}
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity>
				<Image source={require("./assets/frog.jpg")} style={styles.image} />
			</TouchableOpacity>
			<Text value={number}>{number}</Text>

			<Button title="Click me" onPress={() => setNumber(number + 1)} />
			<Button title="Reset" onPress={() => setRest()} />
			<Text>{number < 10 ? "small number" : "big number"}</Text>
			{number > 5 && <Text>small number</Text>}
			<StatusBar style="auto" />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center", // horizontal
		justifyContent: "center", // vertical
	},
	image: {
		width: 160,
		height: 160,
		resizeMode: "cover",
		borderRadius: 100,
	},
})
