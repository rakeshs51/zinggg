import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Linking, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Sidebar from '../components/Sidebar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openLink = () => {
    setLoading(true); // Start loading
    Linking.openURL('https://bit.ly/4gd2KFE')
      .catch(err => {
        console.error('An error occurred while opening the link', err);
      })
      .finally(() => setLoading(false)); // Stop loading
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fecb02" barStyle="dark-content" />
      <View style={styles.header}>
        <Image 
          source={require('../../assets/zinggg-logo.jpg')} // Update with the correct path to your logo image
          style={styles.logo}
        />
        <TouchableOpacity style={styles.menuIcon} onPress={() => setSidebarOpen(true)}>
          <Ionicons name="menu" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#FFD700" style={styles.loader} />
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={openLink}>
              <Text style={styles.buttonText}>Register Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={openLink}>
              <Text style={styles.buttonText}>Login Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={openLink}>
              <Text style={styles.buttonText}>Play Now</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fecb02',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  logo: {
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    resizeMode: 'contain',
    borderRadius: 75,
  },
  menuIcon: {
    // position removed for better alignment with the header
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8A2BE2', // Purple
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  loader: {
    marginVertical: 20,
  },
});
