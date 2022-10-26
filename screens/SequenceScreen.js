
import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing, TouchableOpacity } from "react-native";



const SequenceScreen = () => {

    const fadeAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0
    const spinAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const animate = () => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 3000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            }),
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 3000,
                // easing: Easing.bounce,
                useNativeDriver: true,
            }),
            Animated.timing(spinAnim, {
                toValue: 0,
                duration: 3000,
                // easing: Easing.bounce,
                useNativeDriver: true,
            }),
        ]).start(() => { fadeAnim.setValue(1); spinAnim.setValue(0) });
    }

    return (

        <View style={styles.container}>
            {/* <Example01 /> */}

            <View style={styles.container}>
                <Animated.Image
                    style={{ width: 180, height: 150, transform: [{ rotate: spin }], opacity: fadeAnim }}
                    source={require("../assets/IT_Logo.png")}
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={animate}
            >
                <Text>Sequence</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        alignContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#2196F3",
        padding: 10,
        width: "100%"
    },
});

export default SequenceScreen;
