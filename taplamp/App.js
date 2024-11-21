import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch, Animated } from 'react-native';

export default function App() {
  const [isLampOn, setIsLampOn] = useState(false);

  // Background animation state
  const backgroundColor = new Animated.Value(0);

  // Toggle Lamp Function
  const toggleLamp = () => {
    setIsLampOn((prev) => !prev);

    Animated.timing(backgroundColor, {
      toValue: isLampOn ? 0 : 1,
      duration: 500,
      useNativeDriver: false, // Note: `useNativeDriver` must be false for colors
    }).start();
  };

  // Interpolated background color
  const animatedBackgroundColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#1E1E1E', '#FFF8E1'], // Dark to Light transition
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor: animatedBackgroundColor }]}>
      {/* Enlarged and Centered Lamp */}
      <Image source={require('./images/lamp.png')} style={styles.lampImage} />

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
    justifyContent: 'center',
  },
  lampImage: {
    width: 200, // Enlarged size
    height: 200,
    resizeMode: 'contain',
    marginBottom: 50, // Centered above the toggle
  },
  switchArea: {
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
  },
});
