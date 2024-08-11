import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function AboutUsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.content}>
        // Add your about us content here
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fecb02',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
  },
});