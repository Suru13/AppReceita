import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { styles } from './style';

export default function Detalhe({ route }) {
    const { receita } = route.params;

    const ingredientesArray = receita.ingredientes.split(',').map((item) => item.trim());

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingVertical: 10,
                    paddingHorizontal: 20
                }}
            >
                <View style={styles.header}>
                    <Image source={{ uri: receita.imagem }} style={styles.imagem} />
                    <Text style={styles.titulo}>{receita.nome}</Text>
                    <Text style={styles.subTitulo}>Ingredientes:</Text>
                </View>

                <View style={styles.ingredientesContainer}>
                    {ingredientesArray.map((ingrediente, index) => (
                        <Text key={index} style={styles.ingrediente}>
                            • {ingrediente}
                        </Text>
                    ))}
                </View>

                <View style={styles.footer}>
                    <Text style={styles.subTitulo}>Modo de Preparo:</Text>
                    <Text style={styles.descricao}>{receita.descricao}</Text>
                </View>
            </ScrollView>
        </View>
    );
}
