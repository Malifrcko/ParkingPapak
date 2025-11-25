// screens/LocationScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

const LocationScreen = ({ navigation, route }) => {
  const { photoUri, plate, color, type } = route.params;

  const [address, setAddress] = useState('');
  const [city] = useState('Sarajevo'); // fiksno za sada
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLoading(false);
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setCurrentLocation(loc.coords);
      setLoading(false);
    })();
  }, []);

  const goNext = () => {
    if (!address.trim()) {
      alert('Molimo unesite adresu!');
      return;
    }

    navigation.navigate('Offence', {
      photoUri,
      plate,
      color,
      type,
      address: address.trim(),
      city,
      latitude: currentLocation?.latitude,
      longitude: currentLocation?.longitude,
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
          <Text style={styles.title}>Korak 3: Lokacija</Text>
          <View style={{ width: 28 }} />
        </View>

        {/* Mapa */}
        <View style={styles.mapContainer}>
          {loading ? (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#0066CC" />
              <Text style={styles.loadingText}>Učitavam lokaciju...</Text>
            </View>
          ) : (
            <MapView
              style={styles.map}
              showsUserLocation={true}
              initialRegion={{
                latitude: currentLocation?.latitude || 43.8563,
                longitude: currentLocation?.longitude || 18.4131,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            />
          )}
        </View>

        {/* Forma */}
        <View style={styles.form}>
          <Text style={styles.label}>Adresa</Text>
          <TextInput
            style={styles.input}
            placeholder="npr. Ferhadija 12"
            value={address}
            onChangeText={setAddress}
          />

          <Text style={styles.label}>Grad</Text>
          <TextInput
            style={[styles.input, styles.disabledInput]}
            value={city}
            editable={false}
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

  mapContainer: { height: 250, marginHorizontal: 30, marginTop: 20, borderRadius: 16, overflow: 'hidden' },
  map: { ...StyleSheet.absoluteFillObject },
  loading: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  loadingText: { marginTop: 10, color: '#666' },

  form: { paddingHorizontal: 30, paddingTop: 30 },
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
  disabledInput: { backgroundColor: '#eee', color: '#666' },

  bottomButton: { paddingHorizontal: 30, paddingVertical: 20 },
  nextButton: {
    backgroundColor: '#0066CC',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default LocationScreen;