import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native'
const width = Dimensions.get('window').width

const AnimatedButton = () => {
    const leftValue = useState(new Animated.Value(0))[0]
    const fade = useState(new Animated.Value(1))[0]
    const [buttonState, setButtonState] = useState(false)

    const moveBallRight = () => {
        Animated.timing(leftValue, {
            toValue: width * 1.5,
            duration: 1000,
            useNativeDriver: true
        }).start()

        Animated.timing(fade, {
            toValue: 0,
            duration: 350,
            useNativeDriver: true
        }).start()
    }

    const moveBallLeft = () => {
        Animated.timing(leftValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()

        Animated.timing(fade, {
            toValue: 1,
            duration: 450,
            useNativeDriver: true
        }).start()
    }

    const moveBall = () => {
        if (buttonState) {
            moveBallRight()
        } else {
            moveBallLeft()
        }
        toggleState()
    }

    const toggleState = () => {
        setButtonState(prevState => !prevState)
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 1, justifyContent: "center",
                alignItems: "center"
            }}>
                <Animated.View style={
                    [{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        backgroundColor: 'red',
                        justifyContent: "center",
                        alignItems: "center",
                        transform: [{ translateX: leftValue }],
                        opacity: fade
                    }]
                }>
                    <TouchableOpacity onPress={moveBall}>
                        <Text>CLICK</Text>
                    </TouchableOpacity>

                </Animated.View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "center",
        justifyContent: "center"
    }
})

export default AnimatedButton;