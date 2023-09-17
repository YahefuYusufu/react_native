import React from "react"
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native"

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"

import FadeIn from "../constants/FadeIn"

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <FadeIn delay={300}>
        <Text style={styles.textOne}>{`Hello!`}</Text>
        <Text style={styles.textTwo}>{`Create An Account`}</Text>
      </FadeIn>

      <FadeIn delay={500}>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Enter Username"
            placeholderTextColor={"#bdb8c0"}
            fontSize={16}
            style={styles.inputUsername}
          />
          <View>
            <TextInput
              placeholder="Password"
              placeholderTextColor={"#bdb8c0"}
              fontSize={16}
              style={styles.inputPassword}
            />
            <FontAwesome5
              name="eye-slash"
              size={24}
              color={"#bdb8c0"}
              style={styles.inputIcon}
            />
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.inputText}>{`Already have an account?`}</Text>
        </TouchableOpacity>
      </FadeIn>

      <FadeIn delay={800}>
        <View style={styles.iconsView}>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome5 name="facebook" size={24} color={"#353045"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome5 name="github" size={24} color={"#353045"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome5 name="linkedin" size={24} color={"#353045"} />
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
  textOne: {
    fontFamily: "Poppins-Medium",
    fontSize: 30,
    color: "#353045",
    textAlign: "center",
    marginTop: 40,
  },
  textTwo: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: "#353045",
    textAlign: "center",
  },
  inputView: {
    width: 350,
    marginTop: 50,
  },
  inputUsername: {
    fontFamily: "Poppins-Regular",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#f8f6f9",
    borderRadius: 10,
  },
  inputPassword: {
    fontFamily: "Poppins-Regular",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#f8f6f9",
    borderRadius: 10,
    marginTop: 10,
  },
  inputIcon: {
    position: "absolute",
    right: 15,
    top: 25,
  },
  inputText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#353045",
    textAlign: "center",
    marginTop: 25,
  },
  iconsView: {
    flexDirection: "row",
    width: 250,
    justifyContent: "center",
    marginTop: 100,
  },
  icon: {
    width: 80,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1e4ee",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e1e4ee",
  },
})
export default SignInScreen
