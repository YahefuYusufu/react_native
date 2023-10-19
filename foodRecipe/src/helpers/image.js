import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

import Animated from "react-native-reanimated"

export const CachedImage = (props) => {
	const [cachedSource, setCachedSource] = useState(null)
	const { url } = props

	useEffect(() => {
		const getCachedImage = async () => {
			try {
				const cachedImageData = await AsyncStorage.getItem(url)
				if (cachedImageData) {
					setCachedSource({ url: cachedImageData })
				} else {
					const response = await fetch(url)
					const imageBlob = await response.blob()
					const base64Data = await new Promise((resolve) => {
						const reader = new FileReader()
						reader.readAsDataURL(imageBlob)
						reader.onloadend = () => {
							resolve(reader.result)
						}
					})
					await AsyncStorage.setItem(url, base64Data)
					setCachedSource({ url: base64Data })
				}
			} catch (error) {
				console.error("Error caching image:", error)
				setCachedSource({ url })
			}
		}

		getCachedImage()
	}, [])

	return <Animated.Image source={cachedSource} {...props} />
}
