
import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing, TouchableOpacity } from "react-native";




const SpringScreen = (props) => {

    const springVal = useRef(new Animated.Value(0.3)).current; // Initial value for opacity: 0

    const spring = () => {
        console.log("spring..");
        Animated.spring(springVal, {
            toValue: 1,
            friction: 1,
            tension: 10,
            // bounciness: 30,
            // speed: 20,
            useNativeDriver: true,
        }).start(() => {
            springVal.setValue(0.3);
        });
    };

    return (
        <View style={styles.container}>

            <View style={styles.container}>
                <Animated.Image
                    style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
                    source={require("../assets/IT_Logo.png")}
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={spring}
            >
                <Text>Spring</Text>
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

export default SpringScreen;
