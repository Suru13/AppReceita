import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { styles } from './style';
import InputField from '../../components/Input';
import ButtonField from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        if (!email || !senha) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }

        try {
            const response = await axios.get('https://673fc934a9bc276ec4b996c4.mockapi.io/apicads/api');
            const user = response.data.find(
                (user) => user.Email.toLowerCase() === email.toLowerCase() && user.Senha === senha
            );

            if (user) {
                await AsyncStorage.setItem('@user', JSON.stringify(user));
                Alert.alert('Sucesso', `Bem-vindo, ${user.Nome}!`);
                navigation.replace('Perfil');
                setEmail('');
                setSenha('');
            } else {
                Alert.alert('Erro', 'Email ou senha incorretos. Tente novamente.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível realizar o login.');
        }
    };

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('@user');
                if (storedUser) {
                    const user = JSON.parse(storedUser);
                    console.log('Usuário logado:', user);
                    navigation.replace('Perfil');
                }
            } catch (error) {
                console.error('Erro ao recuperar usuário:', error);
            }
        };

        checkLogin();
    }, []);

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
                value={senha}
                onChangeText={setSenha}
            />

            <ButtonField style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </ButtonField>

            <Text style={styles.linkText} onPress={() => navigation.navigate('Cadastro')}>
                Não possui cadastro? Cadastre-se.
            </Text>
        </View>
    );
}
