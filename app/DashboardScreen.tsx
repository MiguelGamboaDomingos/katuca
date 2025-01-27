import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <WelcomeBanner />
      <Categories />
      <PriceTable />
      <MapSection />
    </ScrollView>
  );
};

const WelcomeBanner = () => (
  <View style={styles.banner}>
    <Text style={styles.bannerText}>Bem-vindo ao Mercado de Sucata</Text>
  </View>
);

const Categories = () => (
  <ScrollView horizontal style={styles.categoriesContainer}>
    <CategoryCard title="Ferro" icon="build" />
    <CategoryCard title="Alumínio" icon="architecture" />
    <CategoryCard title="Cobre" icon="cable" />
  </ScrollView>
);

const CategoryCard = ({title, icon}: {title: string; icon: keyof typeof Icon.glyphMap}) => (
  <TouchableOpacity style={styles.categoryCard}>
    <Icon name={icon} size={32} color="#2196F3" />
    <Text style={styles.categoryTitle}>{title}</Text>
  </TouchableOpacity>
);
const PriceTable = () => (
  <View style={styles.priceTable}>
    <Text style={styles.sectionTitle}>Preços Atuais</Text>
    {/* Add price table content here */}
  </View>
);

const MapSection = () => (
  <View style={styles.mapContainer}>
    <Text>Mapa será implementado aqui</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  banner: {
    backgroundColor: '#2196F3',
    padding: 16,
    margin: 16,
    borderRadius: 12,
  },
  bannerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    padding: 8,
  },
  categoryCard: {
    backgroundColor: 'white',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    alignItems: 'center',
    width: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryTitle: {
    marginTop: 8,
    fontSize: 14,
  },
  priceTable: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  mapContainer: {
    height: 200,
    backgroundColor: '#e0e0e0',
    margin: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;
