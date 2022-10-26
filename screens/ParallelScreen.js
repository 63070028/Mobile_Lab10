import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing, TouchableOpacity } from "react-native";


import Example01 from "../examples/Example01";
import Example02 from "../examples/Example02";
import Example03 from "../examples/Example03";
import Example04 from "../examples/Example04";
import Example05 from "../examples/Example05";
import Example06 from "../examples/Example06";
import Example07 from "../examples/Example07";

const ParallelScreen = () => {

    const springVal = useRef(new Animated.Value(0.3)).current; // Initial value for opacity: 0
    const animVal = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    const movingMargin = animVal.interpolate({
        inputRange: [0, 0.5, 1, 1.5],
        outputRange: [0, -100, 100, 0],
    });


    const animate = () => {
        Animated.parallel([
            Animated.spring(springVal, {
                toValue: 1,
                friction: 1,
                tension: 10,
                duration: 5000,
                // bounciness: 30,
                // speed: 20,
                useNativeDriver: true,
            }),
            Animated.timing(animVal, {
                toValue: 1.5,
                duration: 5000,
                easing: Easing.bounce,
                useNativeDriver: true,
            }),
           
            
        ]).start(() => {animVal.setValue(0); })
    };




    return (
        <View style={styles.container}>
            {/* <Example03 /> */}

            <View>
                <Animated.Image
                    style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
                    source={require("../assets/IT_Logo.png")}
                />
            </View>

            <Animated.Text   style={[styles.moveContainer, { translateX: movingMargin }]}>
                Welcome to Faculty of IT!!
            </Animated.Text>

            <TouchableOpacity
                style={styles.button}
                onPress={animate}
            >
                <Text>Parallel</Text>
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
        alignItems:"center",
        backgroundColor: "#2196F3",
        padding: 10,
        width: "100%",
        marginTop:"100%"
    },
    moveContainer: {
        textAlign:"center",
        width: "100%",
        color: "orange",
        fontSize:20,
        marginTop:"10%",
        fontWeight:"bold"
    },
});

export default ParallelScreen;
