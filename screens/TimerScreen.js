import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Timer from '../components/Timer'
import TimerButton from '../components/TimerButton'

const TimerScreen = () => {
    return (
        <View style={styles.screen}>
                <Timer/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default TimerScreen;