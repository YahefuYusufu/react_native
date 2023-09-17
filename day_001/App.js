import react, { useState, useEffect } from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { useFonts } from "expo-font"

import HomeScreen from "./src/screens/HomeScreen"
import SignInScreen from "./src/screens/SignInScreen"

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>React Native Space</Text>
    </View>
  )
}

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

  if (isLoading) return <LoadingScreen />

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
})
