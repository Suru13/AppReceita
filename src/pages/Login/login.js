import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
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
            const response = await axios.get('https://673fc934a9bc276ec4b996c4.mockapi.io/apicads/api')


            const user = response.data.find(
                (user) => user.Email.toLowerCase() === email.toLowerCase() && user.Senha === password
            );

            if (user) {
                Alert.alert('Sucesso', `Bem-vindo, ${user.Nome}!`)
                navigation.navigate('Início')
            } else {
                Alert.alert('Erro', 'Email ou senha incorretos. Tente novamente.')
            }
        } catch (error) {
            console.error('Erro na API:', error.response?.data || error.message)
            Alert.alert(
                'Erro',
                'Não foi possível realizar o login.'
            );
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>LOGIN</Text>

                <Text style={styles.text}>EMAIL:</Text>
                <InputField
                    style={styles.input}
                    placeholder="Digite seu email"
                    placeholderTextColor="white"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.text}>SENHA:</Text>
                <InputField
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="white"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <View style={styles.noAccountContainer}>
                    <Text style={styles.TextNoAccount}>Não possui cadastro? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.linkText}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>

                <ButtonField style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </ButtonField>
            </View>
        </View >
    );
}
