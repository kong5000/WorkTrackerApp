import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
const screen = Dimensions.get('window')
const Timer = () => {
    const [timeRemaining, setTimeRemaining] = useState(10)
    const [active, setIsActive] = useState(false)

    useEffect(() => {
        let timer = null
        if(active && timeRemaining > 0){
            timer = setInterval(
                () => {
                    setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
                }, 1000
            )
        }
        return () => {
            clearInterval(timer)
        }
    }, [timeRemaining, active])

    const toggleTime = () => setIsActive(prevIsActive => !prevIsActive)

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.timer}>
                    <Text style={styles.timerText}>{timeRemaining}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleTime}>
                <View style={styles.button}>
                    <Text>START</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems : "center",
    },  
    timer: {
        justifyContent: 'center',
        alignItems: "center",
        width: screen.width / 2,
        height: screen.width / 2,
        borderRadius: screen.width / 2,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 20
    },
    timerText: {
        fontSize: 30,
    }
})

export default Timer;