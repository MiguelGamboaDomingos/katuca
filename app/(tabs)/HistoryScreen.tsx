import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

type Transaction = {
  id: string;
  type: 'buy' | 'sell';
  material: string;
  weight: number;
  price: number;
  date: string;
  status: 'pending' | 'completed';
  image: string;
};

const HistoryScreen = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

  const mockTransactions: Transaction[] = [
    {
      id: '1',
      type: 'buy',
      material: 'Ferro',
      weight: 100,
      price: 500,
      date: '2024-01-15',
      status: 'completed',
      image: 'https://placeholder.com/150',
    },
    // Add more mock data as needed
  ];

  const renderTransaction = ({item}: {item: Transaction}) => (
    <View style={styles.transactionCard}>
      <Image
        source={{uri: item.image}}
        style={styles.transactionImage}
        defaultSource={require('../../assets/placeholder.png')}
      />
      <View style={styles.transactionInfo}>
        <Text style={styles.materialText}>{item.material}</Text>
        <Text style={styles.weightText}>{item.weight}kg</Text>
        <Text style={styles.priceText}>R$ {item.price.toFixed(2)}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text
          style={[
            styles.statusText,
            {
              backgroundColor:
                item.status === 'completed' ? '#4CAF50' : '#FFC107',
            },
          ]}>
          {item.status === 'completed' ? 'Concluído' : 'Pendente'}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'buy' && styles.activeTab]}
          onPress={() => setActiveTab('buy')}>
          <Text
            style={[styles.tabText, activeTab === 'buy' && styles.activeTabText]}>
            Compras
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'sell' && styles.activeTab]}
          onPress={() => setActiveTab('sell')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'sell' && styles.activeTabText,
            ]}>
            Vendas
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockTransactions.filter(t => t.type === activeTab)}
        renderItem={renderTransaction}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#2196F3',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
  },
  listContainer: {
    padding: 16,
  },
  transactionCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transactionImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 16,
  },
  materialText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weightText: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  priceText: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: 'bold',
    marginTop: 4,
  },
  dateText: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
  statusContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  statusText: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HistoryScreen;
