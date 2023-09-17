import React, { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { useFonts } from "expo-font"

import CalculatorScreen from "./src/screens/CalculatorScreen"
import LoadingScreen from "../day_004/src/screens/LoadingScreen"

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [fontsLoader] = useFonts({
    "Poppins-Bold": require("./assets/fonts/poppins/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/poppins/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/poppins/Poppins-Regular.ttf"),
  })

  useEffect(() => {
    if (fontsLoader) {
      setIsLoading(false)
    }
  }, [fontsLoader])
  if (isLoading) <LoadingScreen />
  return (
    <View style={styles.container}>
      <CalculatorScreen />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
