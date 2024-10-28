import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Groceries', amount: 50 },
  { id: '2', name: 'Electricity Bill', amount: 30 },
  { id: '3', name: 'Internet', amount: 20 },
];

export default function SummaryScreen() {
  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <View style={styles.summaryBox}>
        <Text style={styles.totalText}>Total Expenses:</Text>
        <Text style={styles.totalAmount}>${totalAmount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#f0f4f8' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#333' },
  summaryBox: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  totalText: { fontSize: 18, color: '#555' },
  totalAmount: { fontSize: 22, fontWeight: '600', color: '#4CAF50', marginTop: 4 },
});
