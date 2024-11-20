import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>LOGIN</Text>

                <Text style={styles.text}>EMAIL:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    placeholderTextColor="#aaa"
                />

                <Text style={styles.text}>SENHA:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                />

                <Text style={styles.TextNoAccount}>Não possui cadastro?</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Criar Conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}