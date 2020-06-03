import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import TimerScreen from './screens/TimerScreen'
import TimerControl from './components/TimerControl'
const width = Dimensions.get('window').width
export default function App() {
  return (
    <TimerScreen />
  );
}

const styles = StyleSheet.create({
});
