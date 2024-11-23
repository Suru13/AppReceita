import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
    },
    box: {
        width: '90%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    linkText: {
        color: '#1F31B5',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 15,
    },
    TextNoAccount: {
        marginTop: 10,
        color: '#fff',
        fontSize: 14,
    },
});