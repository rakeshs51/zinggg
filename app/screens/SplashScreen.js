import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, Modal, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);  // Modal starts as not visible
  const [isChecked, setIsChecked] = useState(false);
  const [showSplash, setShowSplash] = useState(true);  // Track splash screen visibility

  useEffect(() => {
    const checkAgreement = async () => {
      try {
        const agreed = await AsyncStorage.getItem('agreedToTerms');
        if (agreed === 'true') {
          // Delay before navigating to Home to show the splash screen
          setTimeout(() => {
            setShowSplash(false);
            navigation.replace('Home');
          }, 3000);  // Splash screen duration (3 seconds)
        } else {
          // If not agreed, show modal after the splash screen
          setTimeout(() => {
            setShowSplash(false);
            setModalVisible(true);
          }, 3000);  // Splash screen duration (3 seconds)
        }
      } catch (error) {
        console.error('Error checking agreement status:', error);
      }
    };

    checkAgreement();
  }, [navigation]);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleAgreement = async () => {
    if (isChecked) {
      try {
        await AsyncStorage.setItem('agreedToTerms', 'true');
        setModalVisible(false);
        navigation.replace('Home');  // Navigate to Home after agreement
      } catch (error) {
        console.error('Error saving agreement status:', error);
      }
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  const openPrivacyPolicy = () => {
    navigation.navigate('Privacy Policy', { fromSplash: true });
  };

  // Show the splash screen while `showSplash` is true
  if (showSplash) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#fecb02" barStyle="dark-content" />
        <Image source={require('../../assets/zinggg-logo.jpg')} style={styles.image} />
      </SafeAreaView>
    );
  }

  // Render the modal if it is supposed to be visible
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fecb02" barStyle="dark-content" />
      <Image source={require('../../assets/zinggg-logo.jpg')} style={styles.image} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Terms and Conditions</Text>
            <Text style={styles.modalContent}>
              Do you agree to accept our terms and conditions?
            </Text>
            <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheckboxToggle}>
              <Ionicons
                name={isChecked ? 'checkbox-outline' : 'square-outline'}
                size={24}
                color={isChecked ? '#fecb02' : 'gray'}
              />
              <Text style={styles.checkboxLabel}>I agree</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openPrivacyPolicy}>
              <Text style={styles.privacyLink}>Read our Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleAgreement}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fecb02', // Yellow background
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width, // Use screen width
    height: Dimensions.get('window').height, // Use screen height
    resizeMode: 'contain', // Use 'contain' to maintain aspect ratio
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContent: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  privacyLink: {
    fontSize: 16,
    color: '#fecb02',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fecb02',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
