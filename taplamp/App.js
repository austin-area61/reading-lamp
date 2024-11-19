import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [isLampOn, setIsLampOn] = useState(false);//tracks whether the lamp is on or off

  const toggleLamp = () => {//toggles is lamp on when yu tap the screen
    setIsLampOn(!isLampOn);
  };

  return (
    <View style={[styles.container, isLampOn ? styles.litBackground : styles.dimBackground]}>
      <TouchableOpacity onPress={toggleLamp} style={styles.switchContainer}>
        <Text style={styles.switchText}>{isLampOn ? '💡 ON' : 'OFF'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  litBackground: {
    backgroundColor: '#FFF8E1', // Warm color for reading
  },
  dimBackground: {
    backgroundColor: '#1E1E1E', // Dark color when lamp is off
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
});
