import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native';

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
    <View style={[styles.container, isLampOn ? styles.litBackground : styles.dimBackground]}>
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
    paddingBottom: 30
  },
  litBackground: {
    backgroundColor: '#FFF8E1',
  },
  dimBackground: {
    backgroundColor: '#1E1E1E',
  },
  switchArea: {
    flex: 1, // Occupies the full available space
    justifyContent: 'center', // Centers vertically
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
