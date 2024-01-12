import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello world</Text>
      <View style={styles.dead}></View>
      <StatusBar style="auto" />
    </View>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dead: {
    height:'20%',
    width:'50%',
    backgroundColor:'aliceblue'
  }
  
});
