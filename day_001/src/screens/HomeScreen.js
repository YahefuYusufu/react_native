import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"

import FadeIn from "../constants/FadeIn"

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <FadeIn delay={300}>
        <Image
          source={require("../../assets/image-001.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </FadeIn>
      <FadeIn delay={500}>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 25,
            color: "#353045",
            textAlign: "center",
            marginTop: 40,
          }}
        >{`Discover Your\nDream Job Here`}</Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 14,
            color: "#353045",
            textAlign: "center",
            marginTop: 20,
          }}
        >{`Explore all the most exiting jobs roles \nbased on your interest and study major`}</Text>
      </FadeIn>
      <FadeIn delay={800}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 60,
            backgroundColor: "#e9ecf7",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#FFF",
          }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              paddingHorizontal: 40,
              backgroundColor: "#FFF",
              borderWidth: 1,
              borderColor: "#FFF",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: 16,
                color: "#353045",
              }}
              onPress={() => navigate("Home")}
            >{`Sign Up`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              paddingHorizontal: 40,
              backgroundColor: "#e9ecf7",
              borderColor: "#FFF",
              borderBottomEndRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: 16,
                color: "#353045",
              }}
              onPress={() => navigate("Sign")}
            >{`Sign In`}</Text>
          </TouchableOpacity>
        </View>
      </FadeIn>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e1e4ee",
    alignItems: "center",
  },
  image: {
    width: 380,
    height: 400,
    backgroundColor: "#d99df1",
    borderRadius: 25,
  },
  text1: {
    fontFamily: "Poppins-Bold",
    fontSize: 25,
    color: "#353045",
    textAlign: "center",
    marginTop: 40,
  },
  text2: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#353045",
    textAlign: "center",
    marginTop: 20,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 60,
    backgroundColor: "#e9ecf7",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  signUp: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
  },
  signIn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#e9ecf7",
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomEndRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonsText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#353045",
  },
})
export default HomeScreen
