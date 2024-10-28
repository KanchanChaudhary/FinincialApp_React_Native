import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Groceries', amount: '$50', date: '2023-10-20' },
  { id: '2', name: 'Electricity Bill', amount: '$30', date: '2023-10-18' },
  { id: '3', name: 'Internet', amount: '$20', date: '2023-10-15' },
];

export default function TransactionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f0f4f8' },
  card: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: '600', color: '#333' },
  amount: { fontSize: 16, color: '#4CAF50', marginTop: 4 },
  date: { fontSize: 14, color: '#888', marginTop: 4 },
});
