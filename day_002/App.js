import React, { useState, useEffect } from "react"

import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { useFonts } from "expo-font"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import LoadingScreen from "./src/screens/LoadingScreen"
import MyCartScreen from "./src/screens/MyCartScreen"
import CheckOutScreen from "./src/screens/CheckOutScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/poppins/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/poppins/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/poppins/Poppins-Regular.ttf"),
  })
  useEffect(() => {
    if (fontsLoaded) {
      setIsLoading(false)
    }
  }, [fontsLoaded])

  if (isLoading) <LoadingScreen />
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="myCart" component={MyCartScreen} />
        <Stack.Screen name="checkOut" component={CheckOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
