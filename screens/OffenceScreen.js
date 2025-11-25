// screens/OffenceScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const offenceOptions = [
  'Nepropisno parkiranje na trotoaru',
  'Blokira ulaz/izlaz',
  'Parkiran na mjestu za invalide',
  'Blokira garažu',
  'Parkiran na zelenoj površini',
  'Dvostruko parkiranje',
  'Ostalo',
];

const OffenceScreen = ({ navigation, route }) => {
  const { photoUri, plate, color, type, address, city, latitude, longitude } = route.params;

  const [selectedOffence, setSelectedOffence] = useState('');
  const [description, setDescription] = useState('');

  const submitReport = () => {
    if (!selectedOffence) {
      Alert.alert('Greška', 'Molimo odaberite tip prekršaja!');
      return;
    }

    // Ovdje će kasnije ići pravo slanje na backend
    const reportNumber = 'PP-' + Math.floor(Math.random() * 99999 + 10000);

    navigation.navigate('Success', {
      reportNumber,
      photoUri,
      plate,
      color,
      type,
      address,
      city,
      offence: selectedOffence,
      description,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#0066CC" />
          </TouchableOpacity>
          <Text style={styles.title}>Korak 4: Potvrda</Text>
          <View style={{ width: 28 }} />
        </View>

        {/* Tip prekršaja */}
        <View style={styles.section}>
          <Text style={styles.label}>Tip prekršaja</Text>
          {offenceOptions.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                selectedOffence === item && styles.optionSelected,
              ]}
              onPress={() => setSelectedOffence(item)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOffence === item && styles.optionTextSelected,
                ]}
              >
                {item}
              </Text>
              {selectedOffence === item && (
                <Ionicons name="checkmark" size={24} color="#0066CC" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Opis */}
        <View style={styles.section}>
          <Text style={styles.label}>Opis (opcionalno)</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Dodatne informacije o prekršaju..."
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
        </View>
      </ScrollView>

      {/* Dugme Pošalji */}
      <View style={styles.bottomButton}>
        <TouchableOpacity style={styles.submitButton} onPress={submitReport}>
          <Text style={styles.submitButtonText}>Pošalji prijavu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { flexGrow: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#0066CC' },

  section: { paddingHorizontal: 30, paddingTop: 20 },
  label: { fontSize: 16, color: '#333', marginBottom: 12, fontWeight: '600' },

  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  optionSelected: { borderColor: '#0066CC', backgroundColor: '#ebf3ff' },
  optionText: { fontSize: 16, color: '#333' },
  optionTextSelected: { color: '#0066CC', fontWeight: '600' },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  textArea: { textAlignVertical: 'top', height: 100 },

  bottomButton: { paddingHorizontal: 30, paddingVertical: 20 },
  submitButton: {
    backgroundColor: '#0066CC',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default OffenceScreen;