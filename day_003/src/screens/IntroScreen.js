import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"

import FadeIn from "../../src/constants/FadeIn"

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewOne}>
        <Text style={styles.viewOneText}>RNS Furniture</Text>
        <FadeIn>
          <FontAwesome5 name="bars" size={24} color={"#0d1b40"} />
        </FadeIn>
      </View>

      <View style={styles.viewTwo}>
        <FadeIn delay={300}>
          <Text
            style={styles.viewTwoText1}
          >{`Make your\n home feel comfortable`}</Text>
          <Text
            style={styles.viewTwoText2}
          >{`Adding to the comfort of your home through\nfurniture is the most appropriate way. Our\nproduct is the right choice.`}</Text>
        </FadeIn>

        <FadeIn delay={600}>
          <View style={styles.viewThree}>
            <TouchableOpacity
              style={styles.viewThreeTouch1}
              onPress={() => navigation.navigate("landing")}
            >
              <Text style={styles.viewThreeText1}>{`Get Started`}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewThreeTouch2}>
              <Text style={styles.viewThreeText2}>{`Learn More`}</Text>
            </TouchableOpacity>
          </View>
        </FadeIn>

        <FadeIn delay={900}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../../assets/imgs/undraw_Woman_re_afr8-removebg-preview.png")}
              style={{ width: 400 }}
              resizeMode="contain"
            />
          </View>
        </FadeIn>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7eaf3",
  },
  viewOne: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewOneText: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
    color: "#0d1b40",
  },
  viewTwo: {
    flex: 1,
    padding: 12,
  },
  viewTwoText1: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    color: "#0d1b40",
    textAlign: "center",
  },
  viewTwoText2: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#778ab5",
    textAlign: "center",
    lineHeight: 30,
    marginTop: 20,
  },
  viewThree: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  viewThreeTouch1: {
    width: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#456cd3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  viewThreeText1: { fontSize: 18, fontFamily: "Poppins-Medium", color: "#FFF" },

  viewThreeTouch2: {
    width: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#e7eaf3",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#456cd3",
    alignItems: "center",
    justifyContent: "center",
  },
  viewThreeText2: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    color: "#0d1b40",
  },
})
export default IntroScreen
