import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.content}>
          // Add your privacy policy content here. Ensure there's enough content to scroll and test behavior.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fecb02', // Confirm this is the desired background color for the entire screen
    padding: 20,
  },
  textContainer: {
    backgroundColor: '#fecb02', // Explicitly setting the background color here too, for consistency
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    backgroundColor: '#fecb02', // Ensuring text background color matches the container
  },
});
