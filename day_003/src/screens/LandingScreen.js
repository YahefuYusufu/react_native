import React from "react"
import { View, Text, Image, ScrollView, StyleSheet } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"

import FadeIn from "../constants/FadeIn"

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewOne}>
        <Text style={styles.viewOneText}>Our Services</Text>
        <FontAwesome5 name="bars" size={20} colo={"#0d1b40"} />
      </View>

      <View style={styles.viewTwo}>
        <View style={styles.viewTwoViewOne}>
          <Image
            source={require("../../assets/imgs/undraw_heavy_box_agqi-removebg-preview.png")}
            style={{ height: 250 }}
            resizeMode="center"
          />
        </View>
        <ScrollView style={{ zIndex: 9999 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#d5def5",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
            >
              <FontAwesome5 name="chair" size={20} color={"#6f8ddd"} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Medium",
                  color: "#0d1b40",
                }}
              >{`Custom Made`}</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#778ab5",
                  marginTop: 10,
                  lineHeight: 25,
                }}
              >{`We make furniture using the design you\nwant, because everyone has their own taste.`}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#d5def5",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
            >
              <FontAwesome5 name="star" size={20} color={"#6f8ddd"} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Medium",
                  color: "#0d1b40",
                }}
              >{`Free Maintenance`}</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#778ab5",
                  marginTop: 10,
                  lineHeight: 25,
                }}
              >{`We will provide free maintanance 5 times\nfrom the first time you buy our product.`}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#d5def5",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
            >
              <FontAwesome5 name="shipping-fast" size={20} color={"#6f8ddd"} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Medium",
                  color: "#0d1b40",
                }}
              >{`Free Shipping`}</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#778ab5",
                  marginTop: 10,
                  lineHeight: 25,
                }}
              >{`We provide the first delivery with free shipping anywhere in your home.`}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#d5def5",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
            >
              <FontAwesome5 name="eye" size={20} color={"#6f8ddd"} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Medium",
                  color: "#0d1b40",
                }}
              >{`3D Product View`}</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#778ab5",
                  marginTop: 10,
                  lineHeight: 25,
                }}
              >{`You can see your 3D view of your product\nbefore buying with augmented reality.`}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#d5def5",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
            >
              <FontAwesome5 name="tools" size={20} color={"#6f8ddd"} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Medium",
                  color: "#0d1b40",
                }}
              >{`+2 Years Insurance`}</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#778ab5",
                  marginTop: 10,
                  lineHeight: 25,
                }}
              >{`We provide extra two years guarantee\nfor free.`}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#d5def5",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
            >
              <FontAwesome5 name="chair" size={20} color={"#6f8ddd"} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Medium",
                  color: "#0d1b40",
                }}
              >{`Custom Made`}</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#778ab5",
                  marginTop: 10,
                  lineHeight: 25,
                }}
              >{`We make furniture using the design you\nwant, because everyone has their own taste.`}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#d5def5",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
            >
              <FontAwesome5 name="star" size={20} color={"#6f8ddd"} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Medium",
                  color: "#0d1b40",
                }}
              >{`Free Maintenance`}</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#778ab5",
                  marginTop: 10,
                  lineHeight: 25,
                }}
              >{`We will provide free maintanance 5 times\nfrom the first time you buy our product.`}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#d5def5",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
            >
              <FontAwesome5 name="shipping-fast" size={20} color={"#6f8ddd"} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Medium",
                  color: "#0d1b40",
                }}
              >{`Free Shipping`}</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#778ab5",
                  marginTop: 10,
                  lineHeight: 25,
                }}
              >{`We provide the first delivery with free shipping anywhere in your home.`}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#d5def5",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
            >
              <FontAwesome5 name="eye" size={20} color={"#6f8ddd"} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Medium",
                  color: "#0d1b40",
                }}
              >{`3D Product View`}</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#778ab5",
                  marginTop: 10,
                  lineHeight: 25,
                }}
              >{`You can see your 3D view of your product\nbefore buying with augmented reality.`}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#d5def5",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
            >
              <FontAwesome5 name="tools" size={20} color={"#6f8ddd"} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Medium",
                  color: "#0d1b40",
                }}
              >{`+2 Years Insurance`}</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#778ab5",
                  marginTop: 10,
                  lineHeight: 25,
                }}
              >{`We provide extra two years guarantee\nfor free.`}</Text>
            </View>
          </View>
        </ScrollView>
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
    fontFamily: "Poppins-Bold",
    color: "#0d1b40",
  },
  viewTwo: {
    flex: 1,
    padding: 12,
  },
  viewTwoViewOne: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
  },
})
export default LandingScreen
