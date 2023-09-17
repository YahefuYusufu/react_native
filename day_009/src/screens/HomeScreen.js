import React from "react"
import {
	SafeAreaView,
	View,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
} from "react-native"

import FadeIn from "../constants/FadeIn"
import { LorrieView } from "lottie-react-native"
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons"

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.viewContainer}>
				<View style={styles.viewBox1}>
					<View>
						<Text style={styles.view1Text1}>Hello Jane!</Text>
						<Text style={styles.view1Text2}>
							Let's listen to something cool today!
						</Text>
					</View>
					<View style={styles.viewBoxV}>
						<View style={styles.view2View} />
						<FontAwesome5 name="bell" size={20} color={"#fff"} />
					</View>
				</View>

				<View style={styles.viewBox2}>
					<View style={styles.viewBox2View1}>
						<Text style={styles.viewBox2View1Text}>Your Favorite Artist</Text>
						<FontAwesome5 name="angle-right" size={24} color={"#fff"} />
					</View>

					{/* //Scroll View */}

					<ScrollView horizontal style={styles.scrollView}>
						<View style={styles.scrollView1}>
							<Image
								source={require("../../assets/imgs/adele.jpg")}
								style={styles.scrollViewImages}
							/>
							<Text style={styles.scrollViewText}>Adele</Text>
						</View>
						<View style={styles.scrollViews}>
							<Image
								source={require("../../assets/imgs/ed.jpg")}
								style={styles.scrollViewImages}
							/>
							<Text style={styles.scrollViewText}>ED</Text>
						</View>
						<View style={styles.scrollViews}>
							<Image
								source={require("../../assets/imgs/dua.jpg")}
								style={styles.scrollViewImages}
							/>
							<Text style={styles.scrollViewText}>Dua</Text>
						</View>
						<View style={styles.scrollViews}>
							<Image
								source={require("../../assets/imgs/lady.jpg")}
								style={styles.scrollViewImages}
							/>
							<Text style={styles.scrollViewText}>Lady Gaga</Text>
						</View>
						<View style={styles.scrollViews}>
							<Image
								source={require("../../assets/imgs/theweek.jpg")}
								style={styles.scrollViewImages}
							/>
							<Text style={styles.scrollViewText}>Theweek</Text>
						</View>
						<View style={styles.scrollViews}>
							<Image
								source={require("../../assets/imgs/2pac.jpg")}
								style={styles.scrollViewImages}
							/>
							<Text style={styles.scrollViewText}>2pac</Text>
						</View>
					</ScrollView>
				</View>

				{/* //recent played  view 3*/}
				<View style={styles.viewBox3}>
					<View style={styles.viewBox3View}>
						<Text style={styles.viewBox3ViewText}>Recent Played</Text>
						<FontAwesome5 name="angle-right" size={20} color={"#fff"} />
					</View>
					<ScrollView horizontal style={styles.view3Scrollbar}>
						<View>
							<Image
								source={require("../../assets/imgs/1.jpg")}
								style={styles.view3ScrollbarImage}
							/>
							<Text style={styles.view3ScrollbarText}>Pop Hits</Text>
						</View>
						<View style={styles.view3ScrollbarView}>
							<Image
								source={require("../../assets/imgs/2.jpg")}
								style={styles.view3ScrollbarImage}
							/>
							<Text style={styles.view3ScrollbarText}>Dance-Pop</Text>
						</View>
						<View style={styles.view3ScrollbarView}>
							<Image
								source={require("../../assets/imgs/3.jpg")}
								style={styles.view3ScrollbarImage}
							/>
							<Text style={styles.view3ScrollbarText}>Pump-Up</Text>
						</View>
						<View style={styles.view3ScrollbarView}>
							<Image
								source={require("../../assets/imgs/4.jpg")}
								style={styles.view3ScrollbarImage}
							/>
							<Text style={styles.view3ScrollbarText}>Pop Hits</Text>
						</View>
					</ScrollView>
				</View>

				{/* //View 4 */}
				<View style={styles.view4}>
					<View style={styles.view4view1}>
						<Text style={styles.view4view1T}>Made For You</Text>
						<FontAwesome5 name="angle-right" size={24} color={"#fff"} />
					</View>

					<ScrollView horizontal style={styles.view4Scroll}>
						<TouchableOpacity>
							<Image
								source={require("../../assets/imgs/6.jpg")}
								style={styles.view4ScrollTouchI}
							/>
							<Text style={styles.view4ScrollTouchT}>Deep House</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.view4ScrollTouch}>
							<Image
								source={require("../../assets/imgs/5.jpg")}
								style={styles.view4ScrollTouchI}
							/>
							<Text style={styles.view4ScrollTouchT}>Hits</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.view4ScrollTouch}>
							<Image
								source={require("../../assets/imgs/7.jpg")}
								style={styles.view4ScrollTouchI}
							/>
							<Text style={styles.view4ScrollTouchT}>Melodic</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>
				{/* //View 5 */}
				<View style={styles.view5}>
					<View style={styles.view5View}>
						<Image
							source={require("../../assets/imgs/adele.jpg")}
							style={styles.view5ViewImage}
						/>
						<View>
							<Text style={styles.view5View2T1}>Rolling in the Deep</Text>
							<Text style={styles.view5View2T2}>Adele</Text>
						</View>
					</View>
					<View style={styles.view5View3}>
						<FontAwesome5
							name="heart"
							size={24}
							style={styles.view5View3Icon1}
						/>
						<TouchableOpacity style={styles.view5View3View}>
							<FontAwesome5 name="play" size={20} color="#fff" />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: "#1a1b1f",
	},
	viewContainer: {
		padding: 12,
	},
	viewBox1: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	view1Text1: {
		fontSize: 20,
		color: "#fff",
	},
	view1Text2: {
		fontSize: 16,
		color: "#848588",
	},
	viewBoxV: {
		width: 35,
		height: 35,
		borderRadius: 35,
		backgroundColor: "#2f3038",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	view2View: {
		width: 10,
		height: 10,
		backgroundColor: "#27bc5c",
		borderRadius: 15,
		position: "absolute",
		right: 7,
		top: 7,
		borderWidth: 1,
		zIndex: 2,
		borderColor: "#2f3038",
	},
	//viewBox2
	viewBox2: {
		marginTop: 30,
	},
	viewBox2View1: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	viewBox2View1Text: {
		fontSize: 18,
		color: "#fff",
	},
	scrollView: {
		marginTop: 18,
		height: 100,
	},
	scrollView1: {
		alignItems: "center",
	},
	scrollViews: {
		alignItems: "center",
		marginLeft: 10,
	},
	scrollViewImages: {
		width: 70,
		height: 70,
		borderRadius: 40,
	},
	scrollViewText: {
		fontSize: 14,
		color: "#fff",
		textAlign: "center",
		marginTop: 5,
	},
	// View Box 3
	viewBox3: {
		paddingTop: 20,
	},
	viewBox3View: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	viewBox3ViewText: {
		fontSize: 18,
		color: "#fff",
	},
	view3Scrollbar: {
		height: 145,
	},
	view3ScrollbarView: {
		marginLeft: 10,
	},
	view3ScrollbarImage: {
		width: 120,
		height: 120,
		borderRadius: 15,
	},
	view3ScrollbarText: {
		fontSize: 14,
		color: "#fff",
		textAlign: "center",
		marginTop: 5,
	},
	//view 4
	view4: {
		marginTop: 20,
	},
	view4view1: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	view4view1T: {
		fontSize: 18,
		color: "#fff",
	},
	view4Scroll: {
		height: 180,
	},
	view4ScrollTouch: {
		marginLeft: 10,
	},
	view4ScrollTouchI: {
		width: 120,
		height: 120,
		borderRadius: 15,
	},
	view4ScrollTouchT: {
		fontSize: 14,
		color: "#fff",
		textAlign: "center",
		marginTop: 5,
	},
	//deep View 5
	view5: {
		padding: 12,
		backgroundColor: "#1c2029",
		position: "absolute",
		width: "100%",
		bottom: -90,
		flexDirection: "row",
	},
	view5View: {
		flexDirection: "row",
	},
	view5ViewImage: {
		width: 50,
		height: 50,
		borderRadius: 8,
		marginRight: 12,
	},
	view5View2T1: {
		fontSize: 18,
		color: "#fff",
	},
	view5View2T2: {
		fontSize: 14,
		color: "#848588",
		marginTop: -5,
	},
	view5View3: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 20,
	},
	view5View3Icon1: {
		color: "#fff",
	},
	view5View3View: {
		flexDirection: "row",
		width: 50,
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#27bc5c",
		marginLeft: 50,
	},
})

export default HomeScreen
