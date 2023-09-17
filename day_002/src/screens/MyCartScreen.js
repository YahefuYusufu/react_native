import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"

import FadeIn from "../constants/FadeIn"
import { FontAwesome5 } from "@expo/vector-icons"

const MyCartScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxOne}>
        <TouchableOpacity>
          <FontAwesome5 name="arrow-left" size={24} color={"#3e3e3e"} />
        </TouchableOpacity>
        <Text style={styles.boxOneText}>My Cart</Text>
        <TouchableOpacity>
          <FontAwesome5 name="bell" size={20} color={"#3e3e3e"} />
        </TouchableOpacity>
      </View>

      <View style={styles.boxTwo}>
        <FadeIn delay={300}>
          <View
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 10,
              padding: 10,
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <Image
              source={require("../../assets/imgs/shoe.jpg")}
              style={{ width: 80, height: 80, borderRadius: 10 }}
            />
            <View style={{ paddingHorizontal: 20 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Regular",
                  color: "#3e3e3e",
                }}
              >
                Sneakers
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Poppins-Regular",
                  color: "#90a6e0",
                }}
              >
                $59
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: "#f4f4f4",
                    fontSize: 18,
                    fontFamily: "Poppins-Regular",
                    color: "#3e3e3e",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "Poppins-Regular",
                      color: "#3e3e3e",
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    marginHorizontal: 15,
                    fontSize: 18,
                    fontFamily: "Poppins-Medium",
                    color: "#3e3e3e",
                  }}
                >
                  1
                </Text>
                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: "#f4f4f4",
                    fontSize: 18,
                    fontFamily: "Poppins-Regular",
                    color: "#3e3e3e",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "Poppins-Regular",
                      color: "#3e3e3e",
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </FadeIn>

        <FadeIn delay={600}>
          <View
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 10,
              padding: 10,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/imgs/smart-watch.jpg")}
              style={{ width: 80, height: 80, borderRadius: 10 }}
              resizeMode="contain"
            />
            <View style={{ paddingHorizontal: 20 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Regular",
                  color: "#3e3e3e",
                }}
              >
                Smart Watch
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Poppins-Regular",
                  color: "#90a6e0",
                }}
              >
                $499
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: "#f4f4f4",
                    fontSize: 18,
                    fontFamily: "Poppins-Regular",
                    color: "#3e3e3e",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "Poppins-Regular",
                      color: "#3e3e3e",
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    marginHorizontal: 15,
                    fontSize: 18,
                    fontFamily: "Poppins-Medium",
                    color: "#3e3e3e",
                  }}
                >
                  1
                </Text>
                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: "#f4f4f4",
                    fontSize: 18,
                    fontFamily: "Poppins-Regular",
                    color: "#3e3e3e",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "Poppins-Regular",
                      color: "#3e3e3e",
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </FadeIn>

        <FadeIn delay={900}>
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 10,
              marginTop: 40,
              paddingVertical: 10,
              paddingHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Medium",
                color: "#3e3e3e",
              }}
            >
              Offers
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "#90a6e0",
              }}
            >
              add a code
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 10,
              marginTop: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Medium",
                color: "#3e3e3e",
              }}
            >
              Address
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "#90a6e0",
              }}
            >
              12E Cambridge...
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 10,
              marginTop: 10,
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                paddingHorizontal: 20,
                fontSize: 18,
                fontFamily: "Poppins-Medium",
                color: "#3e3e3e",
              }}
            >
              Order Summary
            </Text>
            <View
              style={{
                paddingHorizontal: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#3e3e3e",
                }}
              >
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#90a6e0",
                }}
              >
                $558
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#3e3e3e",
                }}
              >
                Tax
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Medium",
                  color: "#90a6e0",
                }}
              >
                $12
              </Text>
            </View>

            <View
              style={{
                paddingHorizontal: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Medium",
                  color: "#3e3e3e",
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Medium",
                  color: "#90a6e0",
                }}
              >
                $570
              </Text>
            </View>
          </View>
        </FadeIn>

        <FadeIn delay={1200}>
          <TouchableOpacity
            style={{
              width: 250,
              backgroundColor: "#313131",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              alignSelf: "center",
              marginTop: 20,
            }}
            onPress={() => navigate("checkOut")}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "#FFF",
              }}
            >
              Go Checkout
            </Text>
          </TouchableOpacity>
        </FadeIn>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  boxOne: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  boxOneText: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    color: "#3e3e3e",
  },
  boxTwo: {
    flex: 1,
    padding: 15,
  },
})
export default MyCartScreen
