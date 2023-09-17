import React, { FC } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import SwipeableRow from "./SwipeableRow"

type UserListItemProps = {
	name: string
	lastMessage: string
	profilePic: any
	timestamp: string
	onPress: () => void
}
const UserListItem: FC<UserListItemProps> = ({
	name,
	lastMessage,
	profilePic,
	timestamp,
}) => {
	return (
		<SwipeableRow>
			<Image source={profilePic} style={styles.profilePic} />
			<View style={styles.infoContainer}>
				<View style={styles.nameAndTime}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.timestamp}>{timestamp}</Text>
				</View>
				<Text style={styles.lastMessage}>{lastMessage}</Text>
			</View>
		</SwipeableRow>
	)
}

export default UserListItem

const styles = StyleSheet.create({
	profilePic: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	infoContainer: {
		height: 60,
		justifyContent: "space-evenly",
		borderTopColor: "#E9EDEF",
		borderBottomColor: "#E9EDEF",
		borderBottomWidth: 1,
		borderTopWidth: 1,
		marginLeft: 10,
		flex: 1,
	},
	name: {
		fontSize: 16,
		fontWeight: "bold",
	},
	lastMessage: {
		fontSize: 14,
		color: "gray",
	},
	timestamp: {
		fontSize: 12,
		color: "gray",
		position: "absolute",
		right: 10,
		top: 10,
	},
	nameAndTime: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
})
