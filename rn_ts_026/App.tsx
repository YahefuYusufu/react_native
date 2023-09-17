import { StyleSheet } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import List from "./src/screens/List"

export default function App() {
	return (
		<GestureHandlerRootView style={styles.container}>
			<List />
		</GestureHandlerRootView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
