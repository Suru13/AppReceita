<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Detalhes from './pages/Detalhes';

export default function App() {
  return (
      <View style={styles.container}>
        <Detalhes/>
        {/* <View style={styles.box}>
          <Text style={styles.title}>LOGIN</Text>

          <Text style={styles.text}>EMAIL:</Text>
          <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              placeholderTextColor="#aaa" // Alteração aqui
          />

          <Text style={styles.text}>SENHA:</Text>
          <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#aaa" // Alteração aqui
              secureTextEntry
          />

          <Text style={styles.TextNoAccount}>Não possui cadastro?</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>
        </View> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#333',
  },
  box: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#555',
    borderRadius: 5,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#555',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TextNoAccount: {
    marginTop: 10,
    color: '#fff',
    fontSize: 14,
  },
});
=======
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './src/components/NavBar/navbar';

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
      <Routes />
    </NavigationContainer>
  );
}
>>>>>>> main
