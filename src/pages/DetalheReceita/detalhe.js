import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { styles } from './style';
import IconeAvaliacao from '../../components/RatingStar/rating';
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

                <Image source={{ uri: receita.imagem }} style={styles.imagem} />
                <Text style={styles.titulo}>{receita.nome}</Text>

                <View style={styles.avaliacaoContainer}>
                    <IconeAvaliacao />
                    <Text style={styles.textoAvaliacao}>{receita.avaliacao}</Text>
                </View>

                <Text style={styles.subTitulo}>Ingredientes:</Text>

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
