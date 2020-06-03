import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
const TimerButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text>{props.label}</Text>
            </View>
        </TouchableOpacity>
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

export default TimerButton;