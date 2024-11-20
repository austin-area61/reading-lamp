import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  Image,
} from 'react-native';

export default function App() {
  const [isLampOn, setIsLampOn] = useState(false);

  const pullPosition = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0 && gestureState.dy <= 100) {
          pullPosition.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > 70) {
          setIsLampOn((prev) => !prev);

          Animated.timing(pullPosition, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        } else {
          Animated.timing(pullPosition, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View
      style={[
        styles.container,
        isLampOn ? styles.litBackground : styles.dimBackground,
      ]}
    >
      {/* Lamp Image */}
      <Image source={require('./images/lamp.png')} style={styles.lampImage} />

      {/* Light Image (only visible when the lamp is ON) */}
      {isLampOn && (
        <Image source={require('./images/light.png')} style={styles.lightImage} />
      )}

      {/* Pull Switch */}
      <View style={styles.switchArea}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.pullSwitch, { transform: [{ translateY: pullPosition }] }]}
        >
          <Text style={styles.switchText}>⏬</Text>
        </Animated.View>
      </View>

      <Text style={styles.lampStatus}>{isLampOn ? '💡ON' : 'OFF'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  litBackground: {
    backgroundColor: '#FFF8E1',
  },
  dimBackground: {
    backgroundColor: '#1E1E1E',
  },
  lampImage: {
    position: 'absolute',
    top: 50,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  lightImage: {
    position: 'absolute',
    top: 150, // Positioned directly below the lamp
    width: 200,
    height: 400,
    resizeMode: 'contain',
  },
  switchArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 350,
  },
  pullSwitch: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  switchText: {
    fontSize: 24,
  },
  lampStatus: {
    fontSize: 18,
    color: 'black',
    marginTop: 20,
  },
});
