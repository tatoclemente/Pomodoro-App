import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, Text, View, Button, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';

const colors = ["#F7DC6F", "#A2D9CE", "D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  return (
    <SafeAreaView>
      <View style={{ paddingTop: Platform.OS === "android" && 30}}>
        <Header />
        <Text style={styles.text}>Time: {time}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: { 
    fontSize: 32, 
    fontWeight: 'bold' 
  }
});
