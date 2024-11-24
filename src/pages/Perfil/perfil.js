import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style';

export default function Perfil({ navigation }) {
    const [user, setUser] = useState(null);

    const loadUser = async () => {
        try {
            const storedUser = await AsyncStorage.getItem('@user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Erro ao carregar usuário:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', loadUser);
        return unsubscribe;
    }, [navigation]);

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('@user');
            setUser(null);
            Alert.alert('Sucesso', 'Você saiu da conta.');
        } catch (error) {
            console.error('Erro ao deslogar:', error);
        }
    };

    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Bem-vindo(a)!</Text>
                <Text style={styles.info}>Para acessar seu perfil, faça login ou cadastre-se.</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace('Login')}
                >
                    <Text style={styles.buttonText}>Fazer Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonSecondary}
                    onPress={() => navigation.replace('Cadastro')}
                >
                    <Text style={styles.buttonTextSecondary}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        >
            <Image
                source={user.Avatar ? { uri: user.Avatar } : require('../../../assets/User.png')}
                style={styles.userImage}
            />
            <Text style={styles.infoNome}>{user.Nome}</Text>
            <Text style={styles.infoEmail}>{user.Email}</Text>

            <Text style={styles.textFavoritos}>Receitas Favoritas</Text>
            
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </ScrollView>
    );

}
