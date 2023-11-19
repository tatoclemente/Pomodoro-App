import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, Text, View, Button, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ paddingTop: Platform.OS === "android" && 30}}>
        <Text style={styles.text}>Pomodoro</Text>
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
