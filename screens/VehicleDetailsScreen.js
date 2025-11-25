// screens/VehicleDetailsScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const VehicleDetailsScreen = ({ navigation, route }) => {
  const { photoUri } = route.params;

  const [plate, setPlate] = useState('');
  const [color, setColor] = useState('');
  const [type, setType] = useState('');

  const goNext = () => {
    if (!plate.trim() || !color.trim() || !type.trim()) {
      alert('Molimo popunite sva polja!');
      return;
    }

    navigation.navigate('Location', {
      photoUri,
      plate: plate.trim().toUpperCase(),
      color: color.trim(),
      type: type.trim(),
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
          <Text style={styles.title}>Korak 2: Detalji vozila</Text>
          <View style={{ width: 28 }} />
        </View>

        {/* Forma */}
        <View style={styles.form}>
          <Text style={styles.label}>Registarska tablica</Text>
          <TextInput
            style={styles.input}
            placeholder="npr. A12-B-345"
            value={plate}
            onChangeText={setPlate}
            autoCapitalize="characters"
          />

          <Text style={styles.label}>Boja</Text>
          <TextInput
            style={styles.input}
            placeholder="npr. Crna, Plava, Bijela..."
            value={color}
            onChangeText={setColor}
            autoCapitalize="words"
          />

          <Text style={styles.label}>Tip vozila</Text>
          <TextInput
            style={styles.input}
            placeholder="npr. Škoda Octavia, Golf 7..."
            value={type}
            onChangeText={setType}
            autoCapitalize="words"
          />
        </View>
      </ScrollView>

      {/* Dugme Dalje */}
      <View style={styles.bottomButton}>
        <TouchableOpacity style={styles.nextButton} onPress={goNext}>
          <Text style={styles.nextButtonText}>Dalje</Text>
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

  form: { paddingHorizontal: 30, paddingTop: 20 },
  label: { fontSize: 16, color: '#333', marginBottom: 8, fontWeight: '600' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },

  bottomButton: { paddingHorizontal: 30, paddingVertical: 20 },
  nextButton: {
    backgroundColor: '#0066CC',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default VehicleDetailsScreen;