import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function AboutUsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.content}>
        In 999, also known as In 999 Game, is a popular online multiplayer gaming platform based in India, offering a diverse array of exciting games to players nationwide. As an official affiliate of In 999 Games, we’re thrilled to provide insights into this immersive gaming experience.

        In 999, often referred to simply as “In 999,” is the go-to destination for gaming enthusiasts, featuring engaging gameplay and the opportunity to win big prizes. One of the standout attractions of In 999 is its variety of games, ensuring there’s something for everyone. Whether you’re into card games, puzzles, or arcade-style challenges, In 999 has you covered.

        One of the highlights of the platform is the InWin feature, which allows players to compete for substantial rewards and prizes. InWin is a key component of the In 999 Game experience, providing an added layer of excitement and competition.

        To delve deeper into what In 999 offers, it’s important to highlight the seamless user experience and intuitive interface. Players can easily navigate through different games and participate in live competitions with fellow gamers across the country.

        As an affiliate partner, we understand the thrill and entertainment that In 999 brings to its users. The platform’s commitment to fair play and responsible gaming makes it a trusted choice among gaming enthusiasts in India. Whether you’re new to the world of online gaming or a seasoned player, In 999 (In 999 Game) promises an exhilarating experience filled with fun and the chance to win exciting rewards. Stay tuned to discover more about In 999 Games and how you can elevate your gaming journey with this dynamic platform.

        Experience the excitement of In 999 for yourself and unleash the thrill of InWin – India’s premier gaming experience awaits you!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
});
