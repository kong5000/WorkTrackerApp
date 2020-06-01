import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

const TimerButton = props => {
    return (
        <TouchableOpacity onPress={() => {console.log('test!')}}>
            <View style={styles.button}>
                <Text>START</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        // width: screen.width / 2,
        // height: screen.width /2,
        // borderRadius: screen.width/2,
        // borderWidth: 1,
        // borderColor: 'black',
    }
})

export default TimerButton;