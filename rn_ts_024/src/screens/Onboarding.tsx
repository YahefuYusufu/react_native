import React, { useState } from "react"
import { View, Text, SafeAreaView } from "react-native"
import Animated, {
	runOnJS,
	useAnimatedRef,
	useAnimatedScrollHandler,
	useSharedValue,
} from "react-native-reanimated"
import { screens } from "../data/Onboarding"
import { SCREEN_WIDTH } from "../constants/screen"
const MAX_LENGTH = screens.length
import OnboardingItem from "../components/Onboarding/OnboardingItem"
import Paginator from "../components/Onboarding/Paginator"
import CircularButton from "../components/Onboarding/CircularButton"

const Onboarding = () => {
	const [index, setIndex] = useState(0)
	const aref = useAnimatedRef<Animated.ScrollView>()
	const scrollX = useSharedValue(0)
	const scrollHandler = useAnimatedScrollHandler((event) => {
		scrollX.value = event.contentOffset.x
		runOnJS(setIndex)(Math.round(event.contentOffset.x / SCREEN_WIDTH))
	})
	const onPressButton = () => {
		if (index !== MAX_LENGTH - 1) {
			aref.current?.scrollTo({
				x: index > 0 ? SCREEN_WIDTH * (index + 1) : SCREEN_WIDTH,
				y: 0,
				animated: true,
			})
			setIndex(index + 1)
		}
	}
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Animated.ScrollView
				onScroll={scrollHandler}
				ref={aref}
				horizontal
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
				pagingEnabled>
				{screens.map((screen, index) => {
					return <OnboardingItem screen={screen} key={index.toString()} />
				})}
			</Animated.ScrollView>
			<View>
				<Paginator itemsLength={screens.length} scrollX={scrollX} />
				<CircularButton
					screensLength={screens.length}
					onPress={onPressButton}
					index={index}
				/>
			</View>
		</SafeAreaView>
	)
}
export default Onboarding
