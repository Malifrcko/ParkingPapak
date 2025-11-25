// screens/SuccessScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SuccessScreen = ({ navigation, route }) => {
  const { reportNumber } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="checkmark-circle" size={120} color="#0066CC" />
        <Text style={styles.title}>Prijava poslana!</Text>
        <Text style={styles.subtitle}>Vaša prijava je uspješno poslana</Text>
        <Text style={styles.reportNumber}>{reportNumber}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Vrati se na početnu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0066CC', marginTop: 20 },
  subtitle: { fontSize: 18, color: '#666', marginTop: 10, textAlign: 'center' },
  reportNumber: { fontSize: 24, fontWeight: 'bold', color: '#0066CC', marginTop: 30 },
  button: {
    marginTop: 50,
    backgroundColor: '#0066CC',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default SuccessScreen;