import React, { useState } from "react"
import {
	View,
	StyleSheet,
	Text,
	SafeAreaView,
	TouchableOpacity,
} from "react-native"

import { FontAwesome5, MaterialIcons } from "@expo/vector-icons"

const Modal = ({}) => {
	const [isModalVisible, setIsModalVisible] = useState(false)
	return (
		<SafeAreaView>
			<View style={styles.view1}>
				<View style={styles.view2}>
					<Text style={styles.view2Text}>Share with a friend</Text>
					{/* //icons */}
					<View style={styles.viewIcons}>
						<TouchableOpacity style={styles.touchIcon}>
							<FontAwesome5
								name="twitter"
								size={25}
								style={styles.iconsColor}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.touchIcon}>
							<FontAwesome5
								name="facebook"
								size={25}
								style={styles.iconsColor}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.touchIcon}>
							<FontAwesome5 name="github" size={25} style={styles.iconsColor} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.touchIcon}>
							<FontAwesome5
								name="instagram"
								size={25}
								style={styles.iconsColor}
							/>
						</TouchableOpacity>
					</View>

					<View style={styles.viewButton}>
						<TouchableOpacity
							style={styles.viewButtonTouch}
							onPress={() => {
								setIsModalVisible(false)
							}}>
							<Text style={styles.viewButtonText}>Cancel</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.viewButtonTouch}
							onPress={() => {
								setIsModalVisible(true)
							}}>
							<Text style={styles.viewButtonText}>Share</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	modal: {
		flex: 1,
	},
	view1: {
		flex: 1,
		justifyContent: "flex-end",
		backgroundColor: "rgba(26,26,26,0.5)",
	},
	view2: {
		height: 300,
		backgroundColor: "#eee",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		paddingHorizontal: 25,
		paddingVertical: 25,
	},
	view2Text: {
		fontSize: 18,
		color: "#000",
		textAlign: "center",
	},
	viewIcons: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 12,
	},
	iconsColor: {
		color: "#2069e6",
	},
	touchIcon: {
		padding: 12,
		backgroundColor: "#ebf2ff",
		borderRadius: 10,
		marginLeft: 0,
	},
	viewLinkText: {
		fontSize: 18,
		color: "#000",
		marginTop: 12,
	},
	viewButton: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 18,
	},
	viewButtonTouch: {
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderWidth: 1,
		borderColor: "#000",
		borderRadius: 10,
		width: 165,
	},
	viewButtonText: {
		fontSize: 16,
		color: "#000",
		textAlign: "center",
	},
})

export default Modal
