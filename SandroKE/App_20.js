import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState(''); // State variable for the greeting message

  const handleChange = (text) => {
    setName(text);
  };

  const handlePress = () => {
    setGreeting(`Hello, ${name}!`); // Update the greeting message state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, enter your name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={handleChange}
        placeholder="Type your name"
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Greet Me</Text>
      </TouchableOpacity>

     {/*  checking whether line of code is present or not */}
      {greeting !== '' && <Text style={styles.greeting}>{greeting}</Text>} {/* Display the greeting message */}

      <Image source={require('./assets/logo_android.png')} style={styles.logo} /> 
    </View>
  );
};


const styles = StyleSheet.create({
  greeting: {
    fontSize: 18,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});


export default App;
