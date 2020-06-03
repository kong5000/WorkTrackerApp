import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native'
import TimerButton from '../components/TimerButton'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const TimerControl = props => {
    const startButtonHeight = useState(new Animated.Value(0))[0]
    const fade = useState(new Animated.Value(1))[0]
    const pauseCancelFade = useState(new Animated.Value(0))[0]
    const cancelOffset = useState(new Animated.Value(width))[0]
    const pauseOffset = useState(new Animated.Value(-width))[0]

    const moveInPauseCancel = () => {
        Animated.timing(pauseCancelFade, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()

        Animated.timing(cancelOffset, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()

        Animated.timing(pauseOffset, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    const moveOutPauseCancel = () => {
        Animated.timing(pauseCancelFade, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()

        Animated.timing(cancelOffset, {
            toValue: width,
            duration: 1000,
            useNativeDriver: true
        }).start()

        Animated.timing(pauseOffset, {
            toValue: -width,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }


    const moveButtonUp = () => {
        Animated.timing(startButtonHeight, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()

        Animated.timing(fade, {
            toValue: 1,
            duration: 350,
            useNativeDriver: true
        }).start()
    }

    const moveButtonDown = () => {
        Animated.timing(startButtonHeight, {
            toValue: height,
            duration: 500,
            useNativeDriver: true
        }).start()

        Animated.timing(fade, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true
        }).start()
    }

    const onStart = () => {
        //Animate start button down
    }
    const onPause = () => {
        //pause time
    }
    const onCancel = () => {
        moveOutPauseCancel()
    }
    let controls =
        <View style={styles.buttonRow}>
            <Animated.View style={
                [{
                    opacity: pauseCancelFade,
                    transform: [{translateX: pauseOffset}]
                }]
            }>
                <TimerButton label="PAUSE"
                    onPress={() => {
                        moveButtonUp()
                        props.resumeHandler()
                    }}
                />
            </Animated.View>
            <Animated.View style={
                [{
                    backgroundColor: 'red',
                    transform: [{ translateY: startButtonHeight }],
                    opacity: fade
                }]
            }>
                <TimerButton label="START" onPress={() => {
                    moveInPauseCancel()
                    moveButtonDown()
                    props.onPress()
                }} />
            </Animated.View>
            <Animated.View style={
                [{
                    opacity: pauseCancelFade,
                    transform: [{translateX: cancelOffset}]
                }]
            }>
                <TimerButton label="CANCEL" onPress={() => {
                    props.cancelHandler()
                    moveButtonUp()
                    onCancel()
                }
                } />
            </Animated.View>
        </View >

    return (
        <View style={styles.container}>
            {controls}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 20
    },
    startButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})

export default TimerControl;