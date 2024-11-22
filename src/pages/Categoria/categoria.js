import React from 'react';
import { View, Text, Alert } from 'react-native';
import { styles } from './style';
import { TouchableOpacity } from 'react-native';

const Categorias = () => {

  const fetchCategoryData = async (categoria) => {
    try {
      const response = await fetch(`https://66fdc9b2699369308956334c.mockapi.io/receitas${categoria}`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar dados da categoria ${categoria}`);
      }
      const data = await response.json();
      console.log(data);
      Alert.alert('Sucesso', `Dados da categoria ${categoria} carregados!`);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', `Falha ao carregar a categoria ${categoria}`);
    }
  };

  return (

    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => fetchCategoryData('Norte')}>
        <Text style={styles.text}>Norte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => fetchCategoryData('Nordeste')}>
        <Text style={styles.text}>Nordeste</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => fetchCategoryData('Centro-oeste')}>
        <Text style={styles.text}>Centro-oeste</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => fetchCategoryData('Sudeste')}>
        <Text style={styles.text}>Sudeste</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => fetchCategoryData('Sul')}>
        <Text style={styles.text}>Sul</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Categorias;
