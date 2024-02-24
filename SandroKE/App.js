import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const MathComponent = () => {
    // Initialize state variables
    const [add, setAddition] = useState(2); // Changed to a number for addition
    const [count, setCount] = useState(0); // Fixed the useState syntax

    // Function to handle button press
    const handlePress = () => {
        setAddition(add + 1); // Increment the 'add' state
        setCount(count + 1); // Increment the 'count' state
    };

    // Function to display count, no conditional logic required for increment
    const countEvent = () => {
        return count; // Simply return the count
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Current Number: {add}</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <Text style={styles.text}>You have clicked {countEvent()} times</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff', // Set the background color to white
        alignItems: 'center',
        padding: 20,
      
    },
    text: {
        fontSize: 16,
        color: '#000000', // Text color to black
        marginTop: 30, // Increase space between title and subtitle
        marginBottom: 30, // Increase space between subtitle and email input
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MathComponent;
