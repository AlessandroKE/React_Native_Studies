import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const [name, setName] = useState(''); // State variable to store the entered name

  const handleChange = (text) => {
    setName(text); // Update the name state when the input changes
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
      <TouchableOpacity style={styles.button} onPress={() => console.log('Hello, ' + name + '!')}>
        <Text style={styles.buttonText}>Greet Me</Text>
      </TouchableOpacity>
      <Image source={require('./assets/logo_android.png')} style={styles.logo} /> 
    </View>
  );
};

const styles = StyleSheet.create({
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
