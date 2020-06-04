import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import TimerControl from '../components/TimerControl'

const screen = Dimensions.get('window')

const TimerScreen = () => {
    const [timeRemaining, setTimeRemaining] = useState(10)
    const [active, setIsActive] = useState(false)

    useEffect(() => {
        let timer = null
        if (active && timeRemaining > 0) {
            timer = setInterval(
                () => {
                    setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
                }, 1000)
        }
        return () => {
            clearInterval(timer)
        }
    }, [timeRemaining, active])

    const toggleTime = () => setIsActive(prevIsActive => !prevIsActive)
    const resumeHandler = () => {
        setIsActive(true)
    }
    const cancelHandler = () => {
        //Add time to database 
        console.log('Cancel')
        setTimeRemaining(10)
        setIsActive(false)
    }

    return (
        <View style={styles.screen}>

        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.timer}>
                    <Text style={styles.timerText}>{timeRemaining}</Text>
                </View>
            </TouchableOpacity>
            <TimerControl
                style={styles.controls}
                onPress={toggleTime}
                timerActive={active}
                resumeHandler={resumeHandler}
                cancelHandler={cancelHandler}
            />
        </View>
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
    container: {
        alignItems: "center",
        width: "100%"
    },
    timer: {
        justifyContent: 'center',
        alignItems: "center",
        width: screen.width / 2,
        height: screen.width / 2,
        borderRadius: screen.width / 2,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 100,
        marginTop: 150
    },
    controls: {},

    timerText: {
        fontSize: 30,
    }
})

TimerScreen.navigationOptions = {
    headerShown: "false"
}

export default TimerScreen;