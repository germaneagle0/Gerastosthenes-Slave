import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	Animated,
	Text,
	View,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Image } from 'expo-image';
import styles from './styles';
import { Shadow } from 'react-native-shadow-2';
import { useFonts } from 'expo-font';

const url = 'http://172.15.0.41:5000';

export default function App() {
	const animationDuration = 1000;
	const [isDisabled, setIsDisabled] = useState(false);
	const [ansLeft, setAnsLeft] = useState('');
	const [ansRight, setAnsRight] = useState('');
	const rotationValue = useRef(new Animated.Value(0)).current;
	const startRotationAnimation = (isHappy) => {
		Animated.timing(rotationValue, {
			toValue: isHappy ? 180 : 0,
			duration: animationDuration,
			useNativeDriver: true,
		}).start();
	};

	const interpolatedRotation = rotationValue.interpolate({
		inputRange: [0, 180],
		outputRange: ['0deg', '180deg'],
	});

	const [number, onChangeNumber] = useState('');

	let [fontsLoaded] = useFonts({
		OpenDyslexic: require('./assets/fonts/OpenDyslexic-Bold.otf'),
	});

	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.G}>
					<Image
						style={styles.image}
						contentFit='contain'
						source={require('./assets/G.png')}
					/>
				</View>
				<View style={styles.headerText}>
					<Text style={[styles.title, { fontFamily: 'OpenDyslexic' }]}>
						ERASTOSTHENES SLAVE
					</Text>
				</View>
			</View>
			<View style={styles.body}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.card}>
					<View style={styles.cardInside}>
						<View style={styles.quote}>
							<Shadow
								distance={15}
								offset={[5, 10]}
								style={{
									height: '100%',
									width: '100%',
									borderRadius: 10,
								}}
							>
								<Image
									style={styles.image}
									contentFit='contain'
									source={require('./assets/eratosthenes.jpg')}
								/>
							</Shadow>
						</View>
						<View style={styles.question}>
							<Text style={[styles.subtitle, { fontFamily: 'OpenDyslexic' }]}>
								Informe o G
							</Text>
						</View>
						<View style={styles.inputContainer}>
							<TextInput
								style={styles.input}
								placeholder='G'
								onChangeText={onChangeNumber}
								value={number}
								keyboardType='numeric'
							/>
						</View>
						<View style={styles.center}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => {
									setAnsLeft('');
									setAnsRight('');
									setIsDisabled(true);
									fetch(`${url}/${number}`)
										.then((response) => response.json())
										.then((json) => {
											setAnsLeft(json.p1);
											setTimeout(() => setAnsRight(json.p2), 500);
											setTimeout(startRotationAnimation, 1000, json.success);
										})
										.catch(function (error) {
											setTimeout(startRotationAnimation, 1000, false);
											console.warn(
												'There has been a problem with your fetch operation: ' +
													error.message
											);
											throw error;
										})
										.finally(() => {
											setTimeout(
												() => setIsDisabled(false),
												1000 + animationDuration
											);
										});
								}}
								disabled={isDisabled}
							>
								<Text
									style={[styles.buttonText, { fontFamily: 'OpenDyslexic' }]}
								>
									Gerar o G
								</Text>
								<Text style={styles.dot} />
								<Text
									style={[styles.buttonText, { fontFamily: 'OpenDyslexic' }]}
								>
									G
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.faceContainer}>
							<View style={styles.ballContainer}>
								<View style={styles.ball}>
									<Text style={[styles.ans, { fontFamily: 'OpenDyslexic' }]}>
										{ansLeft}
									</Text>
								</View>
								<View style={styles.ball}>
									<Text style={[styles.ans, { fontFamily: 'OpenDyslexic' }]}>
										{ansRight}
									</Text>
								</View>
							</View>
							<View style={styles.mouthContainer}>
								<Animated.View
									style={[
										styles.mouth,
										{ transform: [{ rotate: interpolatedRotation }] },
									]}
								>
									<View style={styles.empty} />
								</Animated.View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
			<StatusBar style='auto' />
		</View>
	);
}
