import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function PrivacyPolicyScreen() {
    
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Terms & Conditions for In 999 Game Referral Application</Text>

      <Text style={styles.subtitle}>Introduction</Text>
      <Text style={styles.content}>
        Welcome to the In 999 Game Referral Application ("the Application"). By accessing or using our Application, you agree to comply with and be bound by the following terms and conditions ("Terms & Conditions"). If you do not agree to these Terms & Conditions, please do not use the Application.
      </Text>

      <Text style={styles.subtitle}>Referral Program</Text>
      <Text style={styles.sectionTitle}>Referral Participation</Text>
      <Text style={styles.content}>
        Our Application allows users to participate in a referral program where you can earn rewards for referring others to the In 999 Game. By participating, you agree to abide by all the rules and guidelines provided by us and the referred game.
      </Text>

      <Text style={styles.sectionTitle}>Eligibility</Text>
      <Text style={styles.content}>
        To participate in the referral program, you must be of legal age in your jurisdiction and have the legal capacity to enter into binding agreements.
      </Text>

      <Text style={styles.subtitle}>Risk Disclaimer</Text>
      <Text style={styles.sectionTitle}>No Guarantee of Earnings</Text>
      <Text style={styles.content}>
        The In 999 Game involves elements of chance, and there is no guarantee that you will earn money by participating. You may also lose money. Participation is entirely at your own risk.
      </Text>

      <Text style={styles.sectionTitle}>Financial Responsibility</Text>
      <Text style={styles.content}>
        We do not take responsibility for any financial losses incurred while playing the In 999 Game. Users are advised to play responsibly and only with money they can afford to lose. We recommend setting limits and seeking advice if needed.
      </Text>

      <Text style={styles.subtitle}>Limitation of Liability</Text>
      <Text style={styles.sectionTitle}>Third-Party Services</Text>
      <Text style={styles.content}>
        The In 999 Game is a third-party service that we do not own or control. We are not responsible for the availability, quality, or content of the game. Any disputes or issues related to the In 999 Game should be directed to the game's operator.
      </Text>

      <Text style={styles.sectionTitle}>No Warranties</Text>
      <Text style={styles.content}>
        The Application is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the operation of the Application or the information, content, materials, or products included on it.
      </Text>

      <Text style={styles.subtitle}>User Responsibilities</Text>
      <Text style={styles.sectionTitle}>Account Security</Text>
      <Text style={styles.content}>
        You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Please notify us immediately of any unauthorized use or security breach.
      </Text>

      <Text style={styles.sectionTitle}>Compliance with Laws</Text>
      <Text style={styles.content}>
        Users must comply with all local, state, national, and international laws and regulations applicable to their use of the Application and participation in the referral program.
      </Text>

      <Text style={styles.subtitle}>Amendments</Text>
      <Text style={styles.content}>
        We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Your continued use of the Application after any such changes constitutes your acceptance of the new Terms & Conditions.
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
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 10,
  },
});
