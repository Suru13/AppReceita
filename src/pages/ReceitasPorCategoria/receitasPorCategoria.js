import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";

export default function ReceitasPorCategoria({ route, navigation }) {
  const { categoria, receitas } = route.params;

  function filterDesc(desc) {
    if (typeof desc === "string" && desc.length < 20) {
      return desc;
    }

    return typeof desc === "string" ? `${desc.substring(0, 20)}...` : "";
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.tituloCategoria}>Receitas do {categoria}</Text>

        <View style={styles.list}>
          {receitas.map((receita) => (
            <View key={receita.id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Detalhe", {
                    receita,categoria
                  })
                }
              >
                <Image
                  style={styles.receitaImg}
                  source={{ uri: receita.imagem }}
                />
                <Text style={styles.receitaTitle}>
                  {filterDesc(receita.nome)}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
