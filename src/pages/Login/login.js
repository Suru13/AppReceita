import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { styles } from './style';
import InputField from '../../components/Input';
import ButtonField from '../../components/Button';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            const response = await axios.get('https://673fc934a9bc276ec4b996c4.mockapi.io/apicads/api');

            const user = response.data.find(
                (user) => user.Email.toLowerCase() === email.toLowerCase() && user.Senha === password
            );

            if (user) {
                Alert.alert('Sucesso', `Bem-vindo, ${user.Nome}!`);
                navigation.navigate('Início');
            } else {
                Alert.alert('Erro', 'Email ou senha incorretos. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro na API:', error.response?.data || error.message);
            Alert.alert('Erro', 'Não foi possível realizar o login.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <InputField
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <InputField
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#aaa"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <ButtonField style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </ButtonField>

            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.linkText}>Não possui cadastro? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}
