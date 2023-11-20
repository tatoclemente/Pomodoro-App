import { StyleSheet, Platform, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Time';
import { Audio } from 'expo-av';

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null

    if (isActive) {
      //run timer
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000)
    } else {
      //clear interval
      clearInterval(interval)
    }

    if (time === 0) {
      playAlarmSound()
      setIsActive(false)
      setTime(currentTime === 1 ? 300 : currentTime === 2 ? 900 : 1500  )
    }

    return () => clearInterval(interval)
  }, [isActive, time])


  const handleStartStop = () => {
    playClickSound()
    setIsActive(!isActive)
  }

  const playClickSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require('./assets/mouse-click.mp3'));
    await sound.playAsync();
  }

  const playAlarmSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require('./assets/alarm-clock.mp3'));
    await sound.playAsync();
  }


  return (
    <SafeAreaView 
      style={[styles.container, {backgroundColor: colors[currentTime]}]}
    >
      <View style={{
        flex: 1,
        paddingHorizontal: 15, 
        paddingTop: Platform.OS === "android" && 40,
      }}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header 
          setTime={setTime} 
          currentTime={currentTime} 
          setCurrentTime={setCurrentTime}  
        />
        <Timer time={time} />
        <TouchableOpacity onPress={handleStartStop} style={styles.button}>
          <Text style={{color: "white", fontWeight: "bold"}}>
            {isActive ? "STOP" : "START"}
          </Text>
        </TouchableOpacity>
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
  },
  button: {
    backgroundColor: "#333333",
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
    alignItems: "center",
  }
});
