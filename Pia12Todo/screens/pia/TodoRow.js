import { Button, TouchableOpacity } from "react-native"
import { Image, StyleSheet, Text, View } from "react-native"

export default function TodoRow(props) {
	return (
		<View style={styles.todoList}>
			<Text style={styles.text}>{props.todoinfo.key}</Text>
			{props.todoinfo.isdone && <Text> Done</Text>}
			<TouchableOpacity style={styles.buttonDelete}>
				<Button
					title="DELETE"
					onPress={() => {
						props.deleteItem()
					}}
					color={"white"}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonEdit}>
				<Button
					title="Done"
					onPress={() => {
						props.todoChangeDone()
					}}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	todoList: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 42,
		backgroundColor: "green",
		marginBottom: 16,
		borderRadius: 8,
		padding: 16,
	},
	text: {
		fontSize: 16,
		fontWeight: "bold",
		color: "white",
	},
	buttonDelete: {
		backgroundColor: "red",
		borderRadius: 8,
		color: "white",
		marginBottom: 16,
	},
	buttonEdit: {
		backgroundColor: "yellow",
		borderRadius: 8,
		marginBottom: 16,
	},
})
