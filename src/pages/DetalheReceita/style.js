import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2b2b',
    },
    imagem: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 10
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 3,
    },
    textoAvaliacao: {
        fontFamily: 'Poppins_700Bold',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        marginLeft: 8,  
    },
    avaliacaoContainer: {
        flexDirection: 'row',
        alignItems: 'center',  
        marginBottom: 10,
    },
    subTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f38830',
        marginTop: 20,
        marginBottom: 10,
    },
    ingrediente: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 8,
    },
    footer: {
        marginTop: 20,
    },
    descricao: {
        fontSize: 18,
        color: '#fff',
        lineHeight: 24,
    },
});
