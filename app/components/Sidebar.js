import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function Sidebar({ isOpen, onClose, navigation }) {
  if (!isOpen) return null;

  // Get screen height using Dimensions
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.overlayTouchable} onPress={onClose} />
      <View style={[styles.container, { height: screenHeight }]}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => {
            navigation.navigate('Privacy Policy');
            onClose();
          }}
        >
          <Text style={styles.menuItemText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => {
            navigation.navigate('About Us');
            onClose();
          }}
        >
          <Text style={styles.menuItemText}>About Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  overlayTouchable: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  container: {
    width: 250,
    backgroundColor: '#8A2BE2',
    padding: 20,
    zIndex: 2,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 24,
    color: 'white',
  },
  menuItem: {
    marginTop: 20,
  },
  menuItemText: {
    fontSize: 18,
    color: 'white',
  },
});
