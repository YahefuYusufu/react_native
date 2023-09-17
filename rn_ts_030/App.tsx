import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import List from "./src/screens/List"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<List />
			</View>
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
