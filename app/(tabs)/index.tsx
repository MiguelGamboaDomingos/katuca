import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Bem-vindo */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Bem-vindo ao Katuca</Text>
        </View>

        {/* Barra de Pesquisa */}
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={24} color="#757575" />
          <TextInput style={styles.searchInput} placeholder="Procurar sucata..." />
        </View>

        {/* Lista de Categorias */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Ferro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Alumínio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Plástico</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Outros</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Lista de Itens */}
        <View style={styles.itemsContainer}>
          {Array.from({ length: 10 }).map((_, index) => (
            <View key={index} style={styles.itemCard}>
              <Image
                source={{
                  uri: "https://via.placeholder.com/150",
                }}
                style={styles.itemImage}
              />
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>Item {index + 1} - Ferro Fundido</Text>
                <Text style={styles.itemPrice}>150 000 Kz/ton</Text>
                <Text style={styles.itemDistance}>2.5 km de distância</Text>
                <View style={styles.sellerInfo}>
                  <Image
                    source={{
                      uri: "https://via.placeholder.com/50",
                    }}
                    style={styles.sellerImage}
                  />
                  <View>
                    <Text style={styles.sellerName}>João Silva</Text>
                    <Text style={styles.sellerRating}>⭐ 4.8</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.negotiateButton}>
                <Text style={styles.negotiateText}>Negociar</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#2E7D32",
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  welcomeContainer: {
    backgroundColor: "#2E7D32",
    padding: 20,
    alignItems: "center",
  },
  welcomeText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  categoryList: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryButton: {
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  itemsContainer: {
    paddingHorizontal: 10,
  },
  itemCard: {
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: "100%",
    height: 150,
  },
  itemDetails: {
    padding: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: "#388E3C",
    marginBottom: 5,
  },
  itemDistance: {
    fontSize: 12,
    color: "#757575",
    marginBottom: 10,
  },
  sellerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sellerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  sellerName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  sellerRating: {
    fontSize: 12,
    color: "#757575",
  },
  negotiateButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  negotiateText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
