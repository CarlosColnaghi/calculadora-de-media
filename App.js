import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MediaCalculator from './components/MediaCalculator';

export default function App() {
  return (
    <View style={styles.container}>
      <MediaCalculator/>
    </View>
  );
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 20,
        }
    }
)