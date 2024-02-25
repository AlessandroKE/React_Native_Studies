/* import React, { useState } from 'react';
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
 */
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, RefreshControl } from 'react-native';

const App = () => {
    const [items, setItems] = useState([
        { key: 1, item: 'Item 1' },
        { key: 2, item: 'Item 2' },
        { key: 3, item: 'Item 3' },
        { key: 4, item: 'Item 4' },
        { key: 5, item: 'Item 5' },
        { key: 6, item: 'Item 6' },
        { key: 7, item: 'Item 7' },
        { key: 8, item: 'Item 8' },
        { key: 9, item: 'Item 9' },
        { key: 10, item: 'Item 10' },
    ]);

    return (
        <View style={styles.body}>
            <ScrollView refreshControl={<RefreshControl />}>
                {items.map((object) => (
                    <View style={styles.item} key={object.key}>
                        <Text style={styles.text}>{object.item}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    item: {
        margin: 10,
        backgroundColor: '#a4e1fa',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
    },
    text: {
        color: '#000000',
        fontSize: 60,
        fontStyle: 'italic',
    },
});

export default App;
