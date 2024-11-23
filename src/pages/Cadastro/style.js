import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    box: {
        width: '100%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#2a2a2a',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
    },
    title: {
        fontSize: 26,
        color: 'hsl(13, 86%, 51%)',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 15,
        color: '#fff',
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'hsl(13, 86%, 51%)',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: 'hsl(13, 86%, 51%)',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 8,
    },
    buttonText: {
        color: '#1e1e1e',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkText: {
        color: 'hsl(13, 86%, 51%)',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 15,
    },
    textFooter: {
        marginTop: 20,
        color: '#aaa',
        fontSize: 14,
        textAlign: 'center',
    },
});