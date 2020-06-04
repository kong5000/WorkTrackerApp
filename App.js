import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import AppNavigator from './navigation/AppNavigator'

const width = Dimensions.get('window').width
export default function App() {
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
});
