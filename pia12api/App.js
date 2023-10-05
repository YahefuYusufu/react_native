import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import {
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
	FlatList,
	Button,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
} from "react-native"

export default function App() {
	const [isLoading, setLoading] = useState(true)
	const [data, setData] = useState("")
	const [categories, setCategories] = useState([])
	const [searchText, setSearchText] = useState("")

	const fetchJokes = async () => {
		try {
			const response = await fetch("https://api.chucknorris.io/jokes/random")
			const json = await response.json()
			setData(json.value)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	const fetchCategories = async () => {
		try {
			const response = await fetch(
				"https://api.chucknorris.io/jokes/categories"
			)
			const json = await response.json()
			setCategories(json)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	const fetchJokesByCategory = async (category) => {
		try {
			const response = await fetch(
				`https://api.chucknorris.io/jokes/random?category=${category}`
			)
			const json = await response.json()
			setData(json.value)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	const searchJokes = async (searchText) => {
		fetch(`https://api.chucknorris.io/jokes/search?query=${searchText}`)
			.then((response) => response.json())
			.then((json) => {
				console.log(json.total)
				if (json.total == 0) {
					setData("No jokes found")
				} else {
					var randomJoke = Math.floor(Math.random() * json.total)

					setData(json.result[randomJoke].value)
				}
			})
	}
	useEffect(() => {
		console.log("App.js: useEffect")
		fetchCategories()
		fetchJokesByCategory()
	}, [])
	return (
		<SafeAreaView style={styles.container}>
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<Text style={styles.text}>{data}</Text>
			)}
			<Button
				style={styles.button}
				title="Get new joke"
				onPress={() => fetchJokes()}
			/>
			<TextInput
				style={styles.searchText}
				value={searchText}
				onChangeText={setSearchText}
			/>
			<Button
				style={styles.searchButton}
				title="Search"
				onPress={() => searchJokes(searchText)}
			/>

			<FlatList
				data={categories}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => {
							fetchJokesByCategory(item)
						}}>
						<Text
							style={{
								backgroundColor: "green",
								padding: 7,
								marginBottom: 4,
								color: "white",
							}}>
							{item}
						</Text>
					</TouchableOpacity>
				)}
				keyExtractor={(id) => id}
			/>

			<StatusBar style="auto" />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 20,
		padding: 10,
		margin: 10,
		color: "white",
		backgroundColor: "green",
		borderRadius: 15,
	},
	searchText: {
		borderWidth: 1,
		borderColor: "black",
		padding: 10,
		margin: 10,
		width: 200,
	},

	searchButton: {
		margin: 10,
		padding: 10,
		backgroundColor: "blue",
	},
})
