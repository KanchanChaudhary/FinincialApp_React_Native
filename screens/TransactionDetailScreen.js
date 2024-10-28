import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetailScreen({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{transaction.name}</Text>
      <Text style={styles.detail}>Amount: <Text style={styles.amount}>{transaction.amount}</Text></Text>
      <Text style={styles.detail}>Date: {transaction.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#f0f4f8' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#333', marginBottom: 16 },
  detail: { fontSize: 18, color: '#555', marginBottom: 8 },
  amount: { color: '#4CAF50', fontWeight: '600' },
});
