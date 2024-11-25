import { ScrollView, Text, View, Image, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import Banner from '../../components/BannerHome/banner';
import { styles } from './style';
import { GetProduto } from '../../service/apiReceitas';
import { useState, useEffect } from 'react';
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import InputField from '../../components/Input';

export default function Home({ navigation }) {
    const [receitas, setReceitas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredReceitas, setFilteredReceitas] = useState([]);
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        async function buscarProdutos() {
            try {
                setLoading(true)
                const response = await GetProduto();
                if (response && response.data) {
                    console.log(response.data);
                    setReceitas(response.data);
                    setFilteredReceitas(response.data);
                }
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            } finally {
                setLoading(false);
            }
        }

        buscarProdutos();
    }, []);

    const filterReceitas = (text) => {
        setSearchText(text);
        if (text.trim() === '') {
            setFilteredReceitas(receitas);
        } else {
            const filtered = receitas.filter((receita) =>
                receita.nome.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredReceitas(filtered);
        }
    };

    if (loading) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#e7a74e" />
            </View>
        );
    }

    function filterDesc(desc) {
        if (typeof desc === 'string' && desc.length < 20) {
            return desc;
        }

        return typeof desc === 'string' ? `${desc.substring(0, 20)}...` : '';
    }

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.bannerContainer}>
                    <Banner />
                </View>

                <View style={styles.containerInput}>

                    <FontAwesome 
                    name='search'
                    size={20}
                    style={styles.iconSearch}
                    color={'#1D1C1C'}
                    />

                    <InputField
                        style={styles.input}
                        placeholder="Buscar receitas..."
                        value={searchText}
                        onChangeText={filterReceitas}
                    />
                </View>

                <Text style={styles.text}>Receitas Brasileiras</Text>

                <View style={styles.list}>
                    {filteredReceitas.map((receita) => (
                        <View key={receita.id} style={styles.item}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Detalhe", {
                                    receita
                                }
                                )}
                            >

                                <Image
                                    style={styles.receitaImg}
                                    source={{ uri: receita.imagem }}
                                />

                                <View style={styles.containerAvaliacao}>
                                    <Octicons
                                        name="star-fill"
                                        size={16}
                                        color={'#e7a74e'}
                                        style={styles.iconeAvaliacao}
                                    />

                                    <Text style={styles.textoAvaliacao}>
                                        {receita.avaliacao}
                                    </Text>
                                </View>

                                <Text style={styles.receitaTitle}>{filterDesc(receita.nome)}</Text>
                            </TouchableOpacity>

                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}