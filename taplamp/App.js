import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  Animated,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';

export default function App() {
  const [isLampOn, setIsLampOn] = useState(false);
  const [brightness, setBrightness] = useState(1);
  const [colorIndex, setColorIndex] = useState(0);
  const [switchSound, setSwitchSound] = useState<Sound | null>(null);

  const backgroundColor = useRef(new Animated.Value(0)).current;

  const lampColors = ['#FFF8E1', '#FFE4B5', '#FFECB3'];

  useEffect(() => {
    // Initialize the sound
    Sound.setCategory('Playback');
    const sound = new Sound('switch.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      setSwitchSound(sound);
    });

    // Cleanup
    return () => {
      if (switchSound) {
        switchSound.release();
      }
    };
  }, []);

  const toggleLamp = () => {
    setIsLampOn((prev) => !prev);

    // Play the switch sound
    if (switchSound) {
      switchSound.play((success) => {
        if (!success) {
          console.log('Sound did not play successfully');
        }
      });
    }

    Animated.timing(backgroundColor, {
      toValue: isLampOn ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const animatedBackgroundColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#1E1E1E', lampColors[colorIndex]],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: animatedBackgroundColor, opacity: brightness },
      ]}
    >
      <Image source={require('./images/lamp.png')} style={styles.lampImage} />

      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Brightness</Text>
        <Slider
          style={styles.slider}
          minimumValue={0.8}
          maximumValue={1}
          step={0.1}
          value={brightness}
          onValueChange={setBrightness}
          minimumTrackTintColor="#FFD700"
          maximumTrackTintColor="#E0E0E0"
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Lamp Color</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={lampColors.length - 1}
          step={1}
          value={colorIndex}
          onValueChange={(value) => setColorIndex(Math.round(value))}
          minimumTrackTintColor="#FFD700"
          maximumTrackTintColor="#E0E0E0"
        />
      </View>

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

