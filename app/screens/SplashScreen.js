import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000); // 3 seconds
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fecb02" barStyle="dark-content" />
      <Image source={require('../../assets/zinggg-logo.jpg')} style={styles.image} />
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
    width: Dimensions.get('window').width,  // Use screen width
    height: Dimensions.get('window').height, // Use screen height
    resizeMode: 'contain',  // Use 'contain' to maintain aspect ratio
  },
});
