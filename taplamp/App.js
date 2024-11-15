import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'; //imported thhe slider

export default function App() {
  const [isLampOn, setIsLampOn] = useState(false);
  const [brightness, setBrightness] = useState(1); // Initial brightness level
  const [colorTemp, setColorTemp] = useState('#FFF8E1'); // Default warm color

  const toggleLamp = () => {
    setIsLampOn(!isLampOn);
  };

  const handleBrightnessChange = (value) => {
    setBrightness(value);
  };

  const changeColorTemperature = () => {
    if (colorTemp === '#FFF8E1') {
      setColorTemp('#E1F5FE'); // Cool white
    } else if (colorTemp === '#E1F5FE') {
      setColorTemp('#FFFFFF'); // Neutral white
    } else {
      setColorTemp('#FFF8E1'); // Warm white
    }
  };

  return (
    <View style={[styles.container, isLampOn ? { backgroundColor: colorTemp, opacity: brightness } : styles.dimBackground]}>
      <TouchableOpacity onPress={toggleLamp} style={styles.switchContainer}>
        <Text style={styles.switchText}>{isLampOn ? '💡 ON' : 'OFF'}</Text>
      </TouchableOpacity>

      {isLampOn && (
        <View style={styles.controlsContainer}>
          <Text style={styles.label}>Brightness</Text>
          <Slider
            style={styles.slider}
            minimumValue={0.2}
            maximumValue={1}
            value={brightness}
            onValueChange={handleBrightnessChange}
          />

          <TouchableOpacity onPress={changeColorTemperature} style={styles.colorButton}>
            <Text style={styles.buttonText}>Change Color Temperature</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dimBackground: {
    backgroundColor: '#1E1E1E',
  },
  switchContainer: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#FFD700',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 24,
    color: '#000',
  },
  controlsContainer: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  colorButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFD700',
    borderRadius: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
});
