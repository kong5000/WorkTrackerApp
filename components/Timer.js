import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
const screen = Dimensions.get('window')
const Timer = () => {
    return (
        <TouchableOpacity>
            <View style={styles.timer}>
                <Text>20:20</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    timer: {
        justifyContent: 'center',
        alignItems: "center",
        width: screen.width / 2,
        height: screen.width /2,
        borderRadius: screen.width/2,
        borderWidth: 1,
        borderColor: 'black',
    }
})

export default Timer;