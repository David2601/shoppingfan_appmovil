import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, Button, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from './assets/logo.png';

export default function App() {
  return (
    <LinearGradient 
      style={styles.container}
      colors={['#000000', '#000000', '#055B5C']}
      start={{ x: -1, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text style={styles.title}>BIENVENIDO</Text>
      <Image source={logo} style={styles.tinyLogo} />
        <Text style={styles.texto}>Somos la mejor opción para subastar tu producto</Text>
       
        <Text style={styles.button}>
          Comenzar...
        </Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 25,
    padding: 20,
    paddingBottom: 40,
    color: '#FFF',
    marginStart: 2
  },
  tinyLogo: {
    width: 280,
    height: 280,
    paddingTop: 40
  },
  texto: {
    fontSize: 22,
    paddingTop: 45,
    paddingBottom: 80,
    textAlign: "center",
    color: '#FFF'
  },
  button: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
