import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>PAGINA HOME</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2b2b',
        justifyContent: 'center',
        alignItems: 'center',
    }
})