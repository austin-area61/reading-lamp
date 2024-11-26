import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  Animated,
} from 'react-native';
import Slider from '@react-native-community/slider'; // Updated import

export default function App() {
  const [isLampOn, setIsLampOn] = useState(false);
  const [brightness, setBrightness] = useState(1); // Default brightness
  const [colorIndex, setColorIndex] = useState(0); // Default lamp-on color (index)

  const backgroundColor = useRef(new Animated.Value(0)).current;

  // Colors comfortable for reading
  const lampColors = ['#FFF8E1', '#FFE4B5', '#FFECB3']; // Light yellow, light orange, warm white

  const toggleLamp = () => {
    setIsLampOn((prev) => !prev);

    Animated.timing(backgroundColor, {
      toValue: isLampOn ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  // Interpolated background color
  const animatedBackgroundColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#1E1E1E', lampColors[colorIndex]], // Off (dark gray) to selected lamp-on color
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: animatedBackgroundColor, opacity: brightness },
      ]}
    >
      {/* Enlarged Lamp Image */}
      <Image source={require('./images/lamp.png')} style={styles.lampImage} />

      {/* Brightness Slider */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Brightness</Text>
        <Slider
          style={styles.slider}
          minimumValue={0.8} // Avoid complete black for readability
          maximumValue={1}
          step={0.1}
          value={brightness}
          onValueChange={setBrightness}
          minimumTrackTintColor="#FFD700"
          maximumTrackTintColor="#E0E0E0"
        />
      </View>

      {/* Lamp Color Slider */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Lamp Color</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={lampColors.length - 1}
          step={1}
          value={colorIndex}
          onValueChange={(value) => setColorIndex(Math.round(value))} // Round for exact color
          minimumTrackTintColor="#FFD700"
          maximumTrackTintColor="#E0E0E0"
        />
      </View>

      {/* Toggle Switch */}
      <View style={styles.switchArea}>
        <Text style={styles.switchLabel}>{isLampOn ? 'ON' : 'OFF'}</Text>
        <Switch value={isLampOn} onValueChange={toggleLamp} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  lampImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 50,
  },
  sliderContainer: {
    width: '80%',
    marginBottom: 20,
  },
  sliderLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  switchArea: {
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
  },
});
