import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import { BottomUI } from './components/BottomUI';
import { Sandwich } from './components/Sandwich';

export default function App() {
  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [-2, 2.5, 5], fov:30}}>
        <color attach="background" args={["#512DA8"]} />
        <Sandwich />
      </Canvas>
      <BottomUI />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
