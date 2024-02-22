// App.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';

const logo = require('./assets/logo.png'); // Replace with your actual logo path

const App = () => {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    // Handle form submission here
    console.log('Email:', email);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Vote</Text>
      <Text style={styles.subTitle}>Enter your email address to continue</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TouchableOpacity onPress={handleContinue} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>Terms and conditions apply.</Text>
    </View>
     </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Set the background color to white
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 60, // Add a top margin to push it down a bit
    // Keep the logo styles the same as you requested

  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000', // Title color to black
    marginTop: 100, // Adjust spacing from the top
  },
  subTitle: {
    fontSize: 16,
    color: '#000000', // Subtitle color to black
    marginTop: 30, // Increase space between title and subtitle
    marginBottom: 30, // Increase space between subtitle and email input
  },
  input: {
    height: 50, // Increase the height for better touch area
    borderColor: 'black', // Border color to black
    borderWidth: 1,
    borderRadius: 5,
    width: '100%', // Make input full width
    fontSize: 16,
    padding: 10,
    marginBottom: 30, // Increase space between input and the button
  },
  button: {
    backgroundColor: '#34C759', // Use the hex color for the green button
    height: 50, // Match the button height with input
    width: '100%', // Make button full width
    justifyContent: 'center', // Center the text inside the button
    alignItems: 'center',
    borderRadius: 25, // Make the button edges round
    padding: 10,
  },
  buttonText: {
    color: '#ffffff', // Button text color to white
    fontSize: 16,
    fontWeight: '600', // Slightly bolder text within the button
  },
  terms: {
    fontSize: 12,
    color: '#000000', // Terms text color to black
    position: 'absolute', // Position it absolutely
    bottom: 10, // Near the bottom of the screen
    alignSelf: 'center' // Center it horizontally
  },
});


export default App;
