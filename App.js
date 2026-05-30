import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AverageCalculator from './components/AverageCalculator';

export default function App() {
  return (
    <View style={styles.container}>
      <AverageCalculator numberOfGrades="3"/>
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