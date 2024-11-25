import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2b2b',
    },
    bannerContainer: {
        height: 220,
        paddingHorizontal: 10
    },
    text: {
        fontFamily: 'Poppins_700Bold',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff',
        marginTop: 10,
        marginLeft: 15,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 5,
        paddingVertical: 20
    },
    receitaImg: {
        width: 175,
        height: 175,
        borderRadius: 10,
    },
    receitaTitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 3,
        marginBottom: 15
    },
    containerAvaliacao: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: 55,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        right: 7,
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
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 8,
        color: '#fff',
        marginBottom: 10,
        marginTop: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'hsl(13, 86%, 51%)',
        paddingHorizontal: 35
    },
    containerInput: {
        justifyContent:'center',
        alignItems: 'center',
    },
    iconSearch: {
        position: 'absolute',
        top: 25,
        left: 57,
        zIndex: 1,
        marginLeft: 2
    }
});
