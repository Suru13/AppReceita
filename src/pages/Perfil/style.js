import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2b2b',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    content: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#2b2b2b',
        paddingTop: 120,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        textAlign: 'center',
    },
    info: {
        fontSize: 16,
        color: '#aaa',
        marginBottom: 20,
        textAlign: 'center',
    },
    userImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#fff',
        position: 'absolute',
        top: 25,
    },
    infoNome: {
        fontFamily: 'Poppins_700Bold',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
        color: '#fff',
        textAlign: 'center',
        top: 65
    },
    infoEmail: {
        fontFamily: 'Poppins_700Bold',
        fontWeight: 'bold',
        fontSize: 17,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 60
    },
    textFavoritos: {
        fontFamily: 'Poppins_700Bold',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#f38830',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#ef4418',
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonSecondary: {
        backgroundColor: '#ccc',
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonTextSecondary: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
    },
    receitaImg: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    receitaTitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    text: {
        fontFamily: 'Poppins_700Bold',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff',
        marginTop: 10,
        marginLeft: 15,
    },
    infoNoDescription: {
        fontSize: 16,
        color: '#aaa',
        marginBottom: 20,
        textAlign: 'center',
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginTop: 20,
    },
    item: {
        width: '45%',
        marginBottom: 15,
        alignItems: 'center', 
    },
    containerAvaliacao: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: 45,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        right: 30,
        top: 7,
    },
    iconeAvaliacao: {
        marginRight: 3
    },
    textoAvaliacao: {
        fontFamily: 'Poppins_700Bold',
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonLogout: {
        backgroundColor: '#ef4418',
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 30,
        width: '80%',
        alignItems: 'center',
    },
    buttonTextLogout: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
