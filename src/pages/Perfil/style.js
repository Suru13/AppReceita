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
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#2b2b2b'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
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
        top: 25
    },
    infoNome: {
        fontFamily: 'Poppins_700Bold',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
        color: '#fff',
        textAlign: 'center',
        bottom: 75
    },
    infoEmail: {
        fontFamily: 'Poppins_700Bold',
        fontWeight: 'bold',
        fontSize: 17,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
        bottom: 75
    },
    textFavoritos: {
        fontFamily: 'Poppins_700Bold',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#f38830',
        position: 'absolute',
        left: 0,
        marginLeft: 20
    },
    button: {
        backgroundColor: '#ef4418',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
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
});
